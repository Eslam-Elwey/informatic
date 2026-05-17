import type { TodoQuery } from "../features/todos/query.type";
import type { Todo } from "../types/todo.type";

export async function getTodos(
  queryObj: TodoQuery,
): Promise<{ todos: Todo[]; count: number }> {
  const { page, userId, status } = queryObj;
  try {
    const start = (page - 1) * import.meta.env.VITE_MAX_TABLE_ROWS;

    const query = new URLSearchParams();

    // pagination
    query.append("_limit", import.meta.env.VITE_MAX_TABLE_ROWS);
    query.append("_start", String(start));

    //get todos for specific user
    if (userId) {
      query.append("userId", String(userId));
    }

    //filter for status of todos
    if (status !== "all") {
      query.append("completed", String(status));
    }

    const queryStr = query.toString();

    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/todos?${queryStr}`,
    );
    if (!response.ok) throw new Error("failed to fetch todos");

    const todos = await response.json();
    const count = Number(response.headers.get("X-Total-Count"));

    return { todos, count };
  } catch (err) {
    console.error(err);
    if (err instanceof Error) {
      throw new Error(err.message, { cause: err });
    }
    throw new Error("something went wrong in fetching users", { cause: err });
  }
}

export const deleteTodo = async (id: string): Promise<void> => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/todos/${id}`,
      {
        method: "DELETE",
      },
    );

    if (!response.ok) {
      throw new Error("Failed to delete todo");
    }
  } catch (err) {
    console.error(err);

    if (err instanceof Error) {
      throw new Error(err.message, { cause: err });
    }

    throw new Error("Something went wrong", { cause: err });
  }
};

export async function updateTodoStatus({
  id,
  completed,
}: {
  id: string;
  completed: boolean;
}): Promise<void> {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/todos/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          completed,
        }),
      },
    );

    if (!response.ok) {
      throw new Error("Failed to update todo status");
    }
  } catch (err) {
    console.error(err);

    if (err instanceof Error) {
      throw new Error(err.message, { cause: err });
    }

    throw new Error("Something went wrong", {
      cause: err,
    });
  }
}
