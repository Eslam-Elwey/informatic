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
    <aside className="flex flex-col lg:w-[20%] xl:w-[15%] md:w-1/4 w-[30%] min-h-screen border-r border-neutral-200 p-5 shrink-0">
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

                <span>{link.label}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}