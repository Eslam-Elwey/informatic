import { EllipsisVertical } from "lucide-react";
import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";

type MenusContextType = {
  open: (id: string) => void;
  close: () => void;
  openId: string;
  position: PositionType | null;
  setPosition: React.Dispatch<React.SetStateAction<PositionType | null>>;
};

type PositionType = {
  x: number;
  y: number;
};

const MenusContext = createContext<MenusContextType | undefined>(undefined);

export default function Menus({ children }: { children: React.ReactNode }) {
  const [openId, setOpenId] = useState<string>("");
  const [position, setPosition] = useState<PositionType | null>(null);

  const open = (id: string) => setOpenId(() => id);
  const close = () => setOpenId(() => "");

  const contextVal: MenusContextType = {
    open,
    close,
    openId,
    position,
    setPosition,
  };

  return (
    <MenusContext.Provider value={contextVal}>{children}</MenusContext.Provider>
  );
}

function Menu({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center justify-end">{children}</div>;
}

function Toggle({ id }: { id: string }) {
  const context = useContext(MenusContext);
  if (!context) throw new Error("Menus.Toggle is used of its provider");
  const { open, openId, close, setPosition } = context;

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();

    setPosition(() => ({
      x: window.innerWidth - rect.width - rect.x ,
      y: rect.y + rect.height + 8,
    }));

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    openId === "" || id !== openId ? open(id) : close();
  }

  return (
    <button className="toggle-btn" onClick={handleClick}>
      <EllipsisVertical className="icon" />
    </button>
  );
}

function List({ children, id }: { children: React.ReactNode; id: string }) {
  const context = useContext(MenusContext);
  if (!context) throw new Error("Menus.List is used of its provider");
  const { openId, close, position } = context;
  const ref = useOutsideClick<HTMLUListElement>(close, false);
  if (id !== openId) return null;
  return createPortal(
    <ul
      ref={ref}
      style={{ right: `${position!.x}px`, top: `${position!.y}px` }}
      className="fixed
            bg-bg-surface
            shadow-md
            rounded-md"
    >
      {children}
    </ul>,
    document.body,
  );
}

function Button({
  children,
  icon,
  onClick,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  onClick: () => void;
}) {
  const context = useContext(MenusContext);
  if (!context) throw new Error("Menus.Button is used of its provider");
  const { close } = context;

  function handleClick() {
    onClick();
    close();
  }

  return (
    <li>
      <button
        className=" w-full
                    text-left
                    bg-transparent
                    border-none
                    px-6
                    py-3
                    text-sm
                    transition-all
                    duration-200
                    flex
                    items-center
                    gap-4
                    hover:bg-neutral-50"
        onClick={handleClick}
      >
        {icon}
        <span>{children}</span>
      </button>
    </li>
  );
}

Menus.List = List;
Menus.Toggle = Toggle;
Menus.Menu = Menu;
Menus.Button = Button;
