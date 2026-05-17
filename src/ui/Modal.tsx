import {
  cloneElement,
  createContext,
  useContext,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useOutsideClick } from "../hooks/useOutsideClick";

type ModalContextType = {
  openName: string;
  open: (name: string) => void;
  close: () => void;
};

type OpenProps = {
  children: ReactElement<{
    onClick?: () => void;
  }>;
  opens: string;
};

type WindowProps = {
  children: ReactElement<{ onCloseModal?: () => void }>;
  name: string;
};

const ModalContext = createContext<ModalContextType | null>(null);

export default function Modal({ children }: { children: ReactNode }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = (name: string) => setOpenName(name);

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens }: OpenProps) {
  const context = useContext(ModalContext);

  if (!context) throw new Error("Modal.Open must be inside Modal");

  const { open } = context;

  function handleClick() {
    open(opens);

    children.props.onClick?.();
  }

  return cloneElement(children, {
    onClick: handleClick,
  });
}

function Window({ children, name }: WindowProps) {
  const context = useContext(ModalContext);

  if (!context) throw new Error("Modal.Window must be inside Modal");

  const { openName, close } = context;

  const modalRef = useOutsideClick<HTMLDivElement>(close);

  if (openName !== name) return null;

  return createPortal(
    <div
      className="
        fixed
        inset-0
        z-1000
        flex
        items-center
        justify-center
        bg-(--overlay)
        backdrop-blur-sm
        px-4
      "
    >
      <div
        ref={modalRef}
        className="
          relative
          w-full
          max-w-2xl
          rounded-2xl
          border
          border-border-subtle
          bg-bg-surface
          p-8
          shadow-lg
          transition-all
          duration-500
        "
      >
        {/* Close Button */}
        <button
          onClick={close}
          className="
            absolute
            right-5
            top-5
            rounded-lg
            p-2
            text-text-muted
            transition-all
            duration-200
            hover:bg-neutral-100
            dark:hover:bg-neutral-800
          "
        >
          <X className="h-6 w-6" />
        </button>

        <div>
          {cloneElement(children, {
            onCloseModal: close,
          })}
        </div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;
