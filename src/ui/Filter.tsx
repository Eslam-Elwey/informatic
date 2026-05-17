import { useSearchParams } from "react-router";
import type { FilterOption } from "../types/filter.type";

type FilterProps = {
  filterdField: string;
  options: FilterOption[];
};

export default function Filter({ filterdField, options }: FilterProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get(filterdField) ?? options[0].value;

  function handleClick(value: string) {
    searchParams.set(filterdField, value);
    setSearchParams(searchParams);

    const currentPage = Number(searchParams.get("page"));
    //to make it start from first page if page was set to higher num
    if (currentPage !== 1) {
      searchParams.set("page", "1");
      setSearchParams(searchParams);
    }
  }

  return (
    <div
      className="
        flex gap-2
        rounded-md
        border border-border-subtle
        bg-bg-surface
        p-2
        shadow-sm
      "
    >
      {options.map((option) => {
        const isActive = currentFilter === option.value;

        return (
          <button
            key={option.value}
            onClick={() => handleClick(option.value)}
            disabled={isActive}
            className={`
              rounded-md
              px-3 py-2
              text-sm
              font-medium
              transition-all
              duration-300
              
              ${
                isActive
                  ? "bg-brand-600 text-brand-50"
                  : "bg-bg-surface text-text-body hover:bg-brand-600 hover:text-brand-50"
              }

              disabled:cursor-not-allowed
            `}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
