import UsersTable from "../features/users/UsersTable";
import UserTableOperations from "../features/users/UserTableOperations";
import SearchBar from "../ui/SearchBar";

export default function Users() {
  return (
    <div className="flex flex-col gap-8 mt-3">
      <div className="flex justify-evenly items-center px-6">
        <h2 className="p-4 text-2xl">Users</h2>
        <SearchBar resourceName="name" />
        <UserTableOperations />
      </div>
      <UsersTable />
    </div>
  );
}
