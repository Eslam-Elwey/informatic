import { useSearchParams } from "react-router";
import type { SortOption } from "../types/sort.type";

export default function SortBy({ options }: { options: SortOption[] }) {
  const [searchparams, setSearchParams] = useSearchParams();

  const sortBy = searchparams.get("sortBy") ?? options[0].value;

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    searchparams.set("sortBy", e.target.value);
    if (searchparams.get("sortBy") === "none") {
      searchparams.delete("sortBy");
    }
    setSearchParams(searchparams);
  }
  

  return (
    <select
      onChange={handleChange}
      value={sortBy}
      className={`
                text-sm
                px-3
                py-2
                font-medium
                rounded-md
                bg-bg-surface
                shadow-sm
                border
                `}
    >
      {options.map((opt) => {
        return (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        );
      })}
    </select>
  );
}
