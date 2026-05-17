import { useParams } from "react-router";
import TodosTable from "../features/todos/TodosTable";
import type { UserInfoParam } from "../features/users/user.info.type";
import TodosOperations from "../features/todos/TodosOperations";


export default function Todos() {
  const {userId} = useParams<UserInfoParam>() ;
  return (
    <div className="flex flex-col gap-8 mt-3">
          <div className="flex justify-evenly items-center px-6">
            <h2 className="p-4 text-2xl">Todos {userId?`for user id : ${userId}` :''}</h2>
            <TodosOperations />
          </div>
            <TodosTable />
        </div>
  )
}
