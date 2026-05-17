import { createContext, type JSX } from "react";
import { useContext } from "react";

type TableContextType = {
  columns: string;
};
const TableContext = createContext<TableContextType | undefined>(undefined);
type renderTypeFun<T> = (ele: T) => JSX.Element;

export default function Table({
  columns,
  children,
}: {
  columns: string;
  children: React.ReactNode;
}) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div
        role="table"
        className="overflow-x-auto
    rounded-2xl
    border
    border-table-border
    bg-bg-surface
    shadow-sm
    min-w-237.5"
      >
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Head({ children }: { children: React.ReactNode }) {
  const context = useContext(TableContext);

  if (!context) {
    throw new Error("Table.Head must be used inside Table");
  }
  const { columns } = context;

  //problem : when try to render grid-cols-[columns.replaceAll(' ','_')] didn't work as tailwind classes run in build time so we use inline style

  return (
    <div
      className="grid
  items-center
  justify-items-center
  gap-x-6
  border-b
  border-border-subtle
  bg-bg-elevated
  px-6
  py-5
  text-sm
  font-bold
  uppercase
  tracking-wider
  text-text-muted
                     "
      role="rowheader"
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </div>
  );
}

function Body<T>({ data, render }: { data: T[]; render: renderTypeFun<T> }) {
  if (!data.length)
    return (
      <p className="text-base font-medium text-center m-6 text-text-muted">
        No data to show at the moment
      </p>
    );

  return <section className="m-[0.4rem 0]">{data.map(render)}</section>;
}

function Row({ children }: { children: React.ReactNode }) {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("Table.Row must be used inside Table");
  }
  const { columns } = context;
  return (
    <div
      role="row"
      className="grid px-6 py-4 items-center
        justify-items-center border-b border-border-subtle last:border-0  bg-table-row
        hover:bg-table-row-hover
        transition-colors duration-200"
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </div>
  );
}

function Footer({ children }: { children?: React.ReactNode }) {
  if (!children) return null;
  return (
    <div
      className="flex
        items-center
        justify-center
        border-t
        border-border-subtle
        bg-bg-elevated
        px-5
        py-4
        text-sm
        text-text-muted"
    >
      {children}
    </div>
  );
}

Table.Head = Head;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;
