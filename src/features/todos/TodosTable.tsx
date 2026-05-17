import type { Todo } from "../../types/todo.type";
import Menus from "../../ui/Menus";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import TodoRow from "./TodoRow";
import { useTodos } from "./useTodos";

export default function TodosTable() {
  const { error, isPending, todos,count } = useTodos();

  if (isPending) return <Spinner />;

  if (error)
    return <p className="text-error text-xl text-center">{error.message}</p>;

  return (
    <Menus>
      <Table columns="0.7fr 2.4fr 1fr 1.3fr 0.5fr">
        <Table.Head>
          <div>id</div>
          <div>Title</div>
          <div>user id</div>
          <div>status</div>
          <div></div>
        </Table.Head>
        <Table.Body<Todo>
          data={todos}
          render={(todo) => {
            return <TodoRow key={todo.id} todo={todo} />;
          }}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}
