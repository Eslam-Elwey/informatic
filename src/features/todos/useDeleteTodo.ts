import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import type { Todo } from "../../types/todo.type";
import { deleteTodo as deleteTodoApi } from "../../services/apiTodos";

export function useDeleteTodo() {
  const queryClient = useQueryClient();

  const { mutate: deleteTodo, isPending } = useMutation<void, Error, string>({
    mutationFn: deleteTodoApi,

    onSuccess: (_, deletedId) => {
      queryClient.setQueriesData(
        { queryKey: ["todos"] },
        (oldData: { todos: Todo[]; count: number } | undefined) => {
          if (!oldData) return oldData;

          return {
            ...oldData,
            todos: oldData.todos.filter(
              (todo) => String(todo.id) !== String(deletedId),
            ),
            count: oldData.count - 1,
          };
        },
      );

      toast.success("Todo successfully deleted");
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteTodo, isPending };
}
