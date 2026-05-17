import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "react-router";

type PaginationProps = {
  count: number;
};

export default function Pagination({ count }: PaginationProps) {
  const [searchParams,setSearchParams] = useSearchParams() ;
  const PAGE_SIZE = Number(import.meta.env.VITE_MAX_TABLE_ROWS) ;


  const currentPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next =
      currentPage === pageCount
        ? currentPage
        : currentPage + 1;

    searchParams.set("page", String(next));
    setSearchParams(searchParams) ;
  }

  function prevPage() {
    const prev =
      currentPage === 1
        ? currentPage
        : currentPage - 1;

    searchParams.set("page", String(prev));
    setSearchParams(searchParams) ;
  }

  if (pageCount < 1) return null;

  if(currentPage>pageCount) return null; 

  const from = (currentPage - 1) * PAGE_SIZE + 1;

  const to =
    currentPage === pageCount
      ? count
      : currentPage * PAGE_SIZE;

  return (
    <div
      className="
        flex
        gap-4
        rounded-2xl
        border
        border-border-subtle
        bg-bg-surface
        px-8
        py-4
        shadow-sm
        md:flex-row
        md:items-center
        md:justify-between
        w-full
      "
    >
      {/* INFO */}
      <p
        className="
          text-sm
          text-text-muted
        "
      >
        Showing{" "}
        <span className="font-semibold text-text-heading">
          {from}
        </span>{" "}
        to{" "}
        <span className="font-semibold text-text-heading">
          {to}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-text-heading">
          {count}
        </span>{" "}
        results
      </p>

      {/* BUTTONS */}
      <div className="flex items-center gap-3">
        {/* PREVIOUS */}
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            border
            border-border-subtle
            bg-bg-elevated
            px-4
            py-2.5
            text-sm
            font-medium
            text-text-body
            shadow-sm
            transition-all
            duration-200
            hover:border-brand
            hover:bg-brand
            hover:text-white
            disabled:cursor-not-allowed
            disabled:opacity-50
            disabled:hover:border-border-subtle
            disabled:hover:bg-bg-elevated
            disabled:hover:text-text-body
          "
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Previous</span>
        </button>

        {/* PAGE INDICATOR */}
        <div
          className="
            flex
            h-10
            min-w-10
            items-center
            justify-center
            rounded-xl
            bg-brand
            px-4
            text-sm
            font-semibold
            text-white
            shadow-brand
          "
        >
          {currentPage} / {pageCount}
        </div>

        {/* NEXT */}
        <button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            border
            border-border-subtle
            bg-bg-elevated
            px-4
            py-2.5
            text-sm
            font-medium
            text-text-body
            shadow-sm
            transition-all
            duration-200
            hover:border-brand
            hover:bg-brand
            hover:text-white
            disabled:cursor-not-allowed
            disabled:opacity-50
            disabled:hover:border-border-subtle
            disabled:hover:bg-bg-elevated
            disabled:hover:text-text-body
          "
        >
          <span>Next</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}