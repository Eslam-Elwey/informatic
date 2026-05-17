import { useNavigate } from "react-router";
import type { User } from "../../types/user.type";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import {
  Eye,
  ClipboardList,
  FileText,
  MessageSquare,
  Trash2,
} from "lucide-react";

export default function UserRow({ user }: { user: User }) {
  const navigate = useNavigate();

  return (
    <Table.Row>
      <div className="flex items-center min-w-0 flex-col">
        <p className="font-semibold text-text-heading truncate text-xl">
          {user.name}
        </p>
        <span className="text-sm text-text-muted truncate">
          @{user.username}
        </span>
      </div>

      <div className="min-w-0">
        <a
          className="text-xl text-text-body truncate"
          href={`mailto:${user.email}`}
        >
          {user.email}
        </a>
      </div>

      <p
        className="
            inline-flex items-center
            rounded-full
            px-3 py-1
            text-lg font-medium
            text-brand
          "
      >
        {user.phone}
      </p>

      <p
        className="
            inline-flex items-center
            px-3 py-1
            text-lg font-medium
            text-accent
          "
      >
        {user.address.city}
      </p>

      <p className="font-medium text-lg text-text-heading truncate">
        {user.company.name}
      </p>

      <Menus.Menu>
        <Menus.Toggle id={String(user.id)} />

        <Menus.List id={String(user.id)}>
          <Menus.Button
            icon={<Eye className="w-4 h-4 text-neutral-400" />}
            onClick={() => navigate(`/users/${user.id}`)}
          >
            Show more info
          </Menus.Button>

          <Menus.Button
            icon={<ClipboardList className="w-4 h-4 text-neutral-400" />}
            onClick={() => navigate(`/users/${user.id}/todos`)}
          >
            Show todos
          </Menus.Button>

          <Menus.Button
            icon={<FileText className="w-4 h-4 text-neutral-400" />}
            onClick={() => navigate(`/users/${user.id}/posts`)}
          >
            Show posts
          </Menus.Button>

          <Menus.Button
            icon={<MessageSquare className="w-4 h-4 text-neutral-400" />}
            onClick={() => navigate(`/users/${user.id}/comments`)}
          >
            Show comments
          </Menus.Button>

          <Menus.Button
            icon={<Trash2 className="w-4 h-4 text-error" />}
            onClick={() => console.log("delete user", user.id)}
          >
            Delete
          </Menus.Button>
        </Menus.List>
      </Menus.Menu>
    </Table.Row>
  );
}
