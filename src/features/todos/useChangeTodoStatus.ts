import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import type { Todo } from "../../types/todo.type";
import { updateTodoStatus } from "../../services/apiTodos";

type UpdateTodoStatusParams = {
  id: string;
  completed: boolean;
};

type TodosResponse = {
  todos: Todo[];
  count: number;
};

export function useChangeTodoStatus() {
  const queryClient = useQueryClient();

  const { mutate: changeTodoStatus, isPending } = useMutation<
    void,
    Error,
    UpdateTodoStatusParams
  >({
    mutationFn: updateTodoStatus,

    onMutate: async ({ id, completed }) => {
      await queryClient.cancelQueries({
        queryKey: ["todos"],
      });

      const previousTodos =
        queryClient.getQueriesData<TodosResponse>({
          queryKey: ["todos"],
        });

      queryClient.setQueriesData(
        { queryKey: ["todos"] },
        (oldData: TodosResponse | undefined) => {
          if (!oldData) return oldData;

          return {
            ...oldData,

            todos: oldData.todos.map((todo) =>
              String(todo.id) === String(id)
                ? {
                    ...todo,
                    completed,
                  }
                : todo,
            ),
          };
        },
      );

      return { previousTodos };
    },

    onError: (err) => {

      toast.error(err.message);
    },

    onSuccess: () => {
      toast.success("Todo updated successfully");
    },
  });

  return {
    changeTodoStatus,
    isPending,
  };
}