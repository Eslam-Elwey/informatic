import { NavLink } from "react-router";
import Logo from "./Logo";
import {
  BookOpenCheck,
  Users,
  MessageSquareText,
  Newspaper,
} from "lucide-react";

const links = [
  {
    path: "/users",
    label: "Users",
    icon: Users,
  },
  {
    path: "/todos",
    label: "Todos",
    icon: BookOpenCheck,
  },
  {
    path: "/posts",
    label: "Posts",
    icon: Newspaper,
  },
  {
    path: "/comments",
    label: "Comments",
    icon: MessageSquareText,
  },
];

export default function Sidebar() {
  return (
    <aside className="row-span-full col-[1/2] flex flex-col gap-[3.2rem]  border-r border-neutral-200 p-5 bg-bg-ui">
      <Logo />

      <ul className="flex flex-col gap-4 mt-8">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `sidebar-link ${
                    isActive ? "sidebar-link-active" : ""
                  }`
                }
              >
                <Icon className="sidebar-icon" />

                <span className="font-bold">{link.label}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}