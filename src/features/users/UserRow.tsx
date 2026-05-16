import type { User } from "../../types/user.type";
import Table from "../../ui/Table";

export default function UserRow({ user }: { user: User }) {
  return (
    <Table.Row>

      <div className="flex items-center min-w-0 flex-col">
        <p className="font-semibold text-text-heading truncate">
          {user.name}
        </p>
        <span className="text-sm text-text-muted truncate">
            @{user.username}
        </span>
      </div>

      <div className="min-w-0">
        <a className="text-xl text-text-body truncate" href={`mailto:${user.email}`}>
          {user.email}
        </a>
      </div>

        <p
          className="
            inline-flex items-center
            rounded-full
            px-3 py-1
            text-xl font-medium
            text-brand
          "
        >
          {user.phone}
        </p>

        <p
          className="
            inline-flex items-center
            px-3 py-1
            text-md font-medium
            text-accent
          "
        >
          {user.address.city}
        </p>

        <p className="font-medium text-text-heading truncate">
          {user.company.name}
        </p>
    </Table.Row>
  );
}
