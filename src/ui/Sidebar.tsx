import { NavLink } from "react-router";
import Logo from "./Logo";
import {
  BookOpenCheck,
  Users,
  MessageSquareText,
  Newspaper,
  X,
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

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <aside
      className={`
        row-span-full col-[1/2] flex flex-col gap-[3.2rem]
        border-r border-neutral-200 p-5 bg-bg-ui
        md:relative md:translate-x-0 md:z-auto md:shadow-none
        fixed top-0 left-0 h-full z-40 shadow-xl
        transition-transform duration-500 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        w-104
      `}
    >
      {/* Mobile close button */}
      <div className="flex items-center justify-between md:block relative">
        <Logo />
        <button
          onClick={onClose}
          className="md:hidden p-2 rounded-xl hover:bg-neutral-100 transition-colors absolute top-2 right-3"
          aria-label="Close menu"
        >
          <X className="w-6 h-6 text-neutral-600" />
        </button>
      </div>

      <ul className="flex flex-col gap-4 mt-8">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <li key={link.path}>
              <NavLink
                to={link.path}
                onClick={onClose}
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