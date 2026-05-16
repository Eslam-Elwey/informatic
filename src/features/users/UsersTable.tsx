import type { User } from "../../types/user.type";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import UserRow from "./UserRow";
import { useUsers } from "./useUsers";

export default function UsersTable() {
  const { isPending, users } = useUsers();

  if(isPending) return (<Spinner />)

  return (
    <Table columns="1fr 1.4fr 1.8fr 1.2fr 1fr 1fr">
      <Table.Head>
        <div>Name</div>
        <div>Email</div>
        <div>Phone</div>
        <div>City</div>
        <div>Company</div>
        <div></div>
      </Table.Head>

      <Table.Body<User>
        data={users}
        render={(user: User) => {
          return <UserRow key={user.id} user={user} />;
        }}
      />
    </Table>
  );
}
