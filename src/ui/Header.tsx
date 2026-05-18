import DarkModeToggle from "./DarkModeToggle";
import { Menu } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <div className="px-6 md:px-12 py-6 border-b border-neutral-200 md:col-[2/-1] col-span-full row-[1/2] flex items-center justify-between bg-bg-ui gap-4">
      {/* Hamburger button — only visible on small screens */}
      <button
        onClick={onMenuClick}
        className="md:hidden p-2 rounded-xl hover:bg-neutral-100 transition-colors shrink-0"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6 text-neutral-600" />
      </button>

      <h1 className="text-xl md:text-3xl font-semibold truncate">
        Inforamtic Json Placeholder
      </h1>

      <DarkModeToggle />
    </div>
  );
}
