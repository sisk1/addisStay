import { useSearchParams } from "react-router-dom";

function Filter({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }

  return (
    <div className="flex items-center gap-2 rounded-md border border-gray-200 bg-gray-100 px-2 py-1 font-medium text-gray-800 shadow-sm dark:border-none dark:bg-gray-800 dark:text-gray-100">
      {options.map((option) => (
        <button
          className={`rounded-md px-3 py-1 text-sm transition-all duration-300 hover:bg-indigo-600 hover:text-gray-100 disabled:cursor-not-allowed ${currentFilter === option.value ? "bg-indigo-600 text-gray-100" : ""}`}
          key={option.value}
          onClick={() => handleClick(option.value)}
          disabled={currentFilter === option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
