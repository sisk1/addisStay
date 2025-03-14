function FormRow({ children, label, error, type }) {
  const base =
    "grid grid-cols-[260px_1.2fr_1fr] items-center gap-16 border-b border-gray-100 pb-3 dark:border-gray-700";

  const styles = {
    buttons: "flex justify-end gap-5 pt-2",
    vertical: "flex flex-col gap-3",
  };

  return (
    <div className={type ? styles[type] : base}>
      <label
        htmlFor={children?.props?.id}
        className="font-medium text-gray-800 dark:text-gray-100"
      >
        {label}
      </label>

      {children}

      {error && (
        <span className="text-sm font-light text-red-600 dark:text-red-500">
          {error}
        </span>
      )}
    </div>
  );
}

export default FormRow;
