import UsersTable from "../features/users/UsersTable";

export default function Users() {
  
  return (
    <div className="flex flex-col gap-3 mt-3">
      <h2 className="p-4 text-2xl">Users</h2>
      <UsersTable />
    </div>
  );
}
