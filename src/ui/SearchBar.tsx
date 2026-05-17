import { useState } from "react";
import { Search, X } from "lucide-react";
import { useSearchParams } from "react-router";

export default function SearchBar({ resourceName }: { resourceName: string }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") ?? "";
  const [search, setSearch] = useState(initialSearch);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    searchParams.set("search", search);
    setSearchParams(searchParams);
  }

  function handleClear() {
    setSearch(() => "");
    searchParams.delete("search");
    setSearchParams(searchParams);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        flex
        items-center
        gap-2
        w-full
        max-w-xl
        mx-auto
        p-2
        rounded-2xl
        bg-bg-surface
        border
        border-border-subtle
        shadow-sm
        focus-within:ring-2
        focus-within:ring-ring
        transition-all
      "
    >
      {/* Icon */}
      <Search className="h-5 w-5 text-text-muted ml-2" />

      {/* Input */}
      <input
        type="text"
        value={search}
        placeholder={`Search by ${resourceName}...`}
        onChange={(e) => setSearch(e.target.value)}
        className="
          flex-1
          bg-transparent
          outline-none
          text-text-body
          placeholder:text-text-muted
          px-2
          py-2
        "
      />

      {/* Clear */}
      {search && (
        <button
          type="button"
          onClick={handleClear}
          className="
            p-2
            rounded-lg
            text-text-muted
            hover:bg-neutral-100
            dark:hover:bg-neutral-800
            transition
          "
        >
          <X className="h-4 w-4" />
        </button>
      )}

      {/* Submit */}
      <button
        type="submit"
        className="
          px-4
          py-2
          rounded-xl
          bg-brand
          text-white
          font-medium
          hover:bg-brand-dark
          transition
        "
      >
        Search
      </button>
    </form>
  );
}
