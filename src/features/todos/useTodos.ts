import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { Todo } from "../../types/todo.type";
import { getTodos } from "../../services/apiTodos";
import { useParams, useSearchParams } from "react-router";
import type { UserInfoParam } from "../users/user.info.type";
import type { TodoQuery } from "./query.type";

export function useTodos() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  let pageCount;

  const { userId } = useParams<UserInfoParam>();
  const queryObj: TodoQuery = {
    page: 1,
  };

  //get todos related to this user Id
  if (userId) {
    queryObj.userId = +userId;
  }

  //filter field status => all | completed | not-completed

  const statusVal = searchParams.get("status") ?? "all";

  switch (statusVal) {
    case "completed":
      queryObj.status = true;
      break;

    case "not-completed":
      queryObj.status = false;
      break;
    case "all":
      queryObj.status = "all";
      break;
  }

  const page = searchParams.get("page") ?? 1;

  queryObj.page = +page;
  const { isPending, data, error } = useQuery<{ todos: Todo[]; count: number }>(
    {
      queryKey: ["todos", queryObj.userId, queryObj.page, queryObj.status],
      queryFn: () => getTodos(queryObj),
      retry: 1,
    },
  );

  if (!userId) {
    pageCount = data?.count ?? 0;
  } else {
    pageCount = Math.ceil(
      data?.todos?.length / +import.meta.env.VITE_MAX_TABLE_ROWS,
    );
  }

  //   prefetching

  //next
  if (+page < pageCount) {
    queryObj.page = +page + 1;
    queryClient.prefetchQuery({
      queryKey: ["todos", queryObj.userId, queryObj.page, queryObj.status],
      queryFn: () => getTodos(queryObj),
    });
  }

  //previous
  if (+page > 1) {
    queryObj.page = +page - 1;
    queryClient.prefetchQuery({
      queryKey: ["todos", queryObj.userId, queryObj.page, queryObj.status],
      queryFn: () => getTodos(queryObj),
    });
  }

  return {
    isPending,
    todos: data?.todos ?? [],
    count: data?.count ?? 0,
    error,
  };
}
