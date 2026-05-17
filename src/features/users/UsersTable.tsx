import type { User } from "../../types/user.type";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import UserRow from "./UserRow";
import { useUsers } from "./useUsers";
import { useSearchParams } from "react-router";

export default function UsersTable() {
  const { isPending, users, error } = useUsers();

  const [searchParams] = useSearchParams();

  const searchVal = searchParams.get("search") ?? "";

  const sortBy = searchParams.get("sortBy") ?? "";
  const renderedUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchVal.toLowerCase()),
  );

  switch (sortBy) {
    case "name-asc":
      renderedUsers.sort((a, b) => a.name.localeCompare(b.name));
      break;

    case "name-desc":
      renderedUsers.sort((a, b) => b.name.localeCompare(a.name));
      break;

    case "company-asc":
      renderedUsers.sort((a, b) =>
        a.company.name.localeCompare(b.company.name),
      );
      break;

    case "company-desc":
      renderedUsers.sort((a, b) =>
        b.company.name.localeCompare(a.company.name),
      );
      break;
  }

  if (isPending) return <Spinner />;

  if (error)
    return <p className="text-error text-xl text-center">{error.message}</p>;

  return (
    <Menus>
      <Table columns="1fr 1.8fr 1.6fr 1.2fr 1fr 1fr">
        <Table.Head>
          <div>Name</div>
          <div>Email</div>
          <div>Phone</div>
          <div>City</div>
          <div>Company</div>
          <div></div>
        </Table.Head>

        <Table.Body<User>
          data={renderedUsers}
          render={(user: User) => {
            return <UserRow key={user.id} user={user} />;
          }}
        />
      </Table>
    </Menus>
  );
}
