function Select({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="rounded-md border border-gray-200 bg-gray-100 py-[6px] pl-2 text-sm font-medium text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:border-none dark:bg-gray-800 dark:text-gray-100"
    >
      {" "}
      {options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
