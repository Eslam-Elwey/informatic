import { CheckCircle2, CircleDashed, Trash2, User, Hash } from "lucide-react";

import type { Todo } from "../../types/todo.type";
import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteTodo } from "./useDeleteTodo";
import { useChangeTodoStatus } from "./useChangeTodoStatus";

export default function TodoRow({ todo }: { todo: Todo }) {
  const { deleteTodo, isPending } = useDeleteTodo();
  const { changeTodoStatus } = useChangeTodoStatus();
  return (
    <Table.Row>
      {/* ID */}
      <div
        className="
          flex items-center gap-2
          font-semibold
          text-text-heading
        "
      >
        <Hash className="w-4 h-4 text-brand" />
        <span>{todo.id}</span>
      </div>

      {/* TITLE */}
      <div className=" min-w-0 w-full text-center">
        <p
          className={`
            text-lg
            font-medium
            truncate
          `}
        >
          {todo.title}
        </p>
      </div>

      {/* USER ID */}
      <div
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-brand/10
          px-3
          py-1
          text-sm
          font-semibold
          text-brand
        "
      >
        <User className="w-4 h-4" />
        {todo.userId}
      </div>

      {/* STATUS */}
      <div>
        {todo.completed ? (
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-success-light/20
              px-4
              py-1.5
              text-sm
              font-semibold
              text-success
            "
          >
            <CheckCircle2 className="w-4 h-4" />
            Completed
          </div>
        ) : (
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-warning-light/20
              px-4
              py-1.5
              text-sm
              font-semibold
              text-warning
            "
          >
            <CircleDashed className="w-4 h-4" />
            Pending
          </div>
        )}
      </div>

      {/* ACTIONS */}
      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={String(todo.id)} />

          <Menus.List id={String(todo.id)}>
            {!todo.completed && (
              <Menus.Button
                icon={<CheckCircle2 className="w-4 h-4 text-success" />}
                onClick={() =>
                  changeTodoStatus({
                    id: String(todo.id),
                    completed: true,
                  })
                }
              >
                Mark as completed
              </Menus.Button>
            )}
            <Modal.Open opens="delete">
              <Menus.Button icon={<Trash2 className="w-4 h-4 text-error" />}>
                Delete todo
              </Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>

        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName={`Todo with id :${todo.id}`}
            onConfirm={() =>
              deleteTodo(String(todo.id) )
            }
            disabled={isPending}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}
