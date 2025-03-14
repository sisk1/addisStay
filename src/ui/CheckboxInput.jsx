function CheckboxInput({ id, disabled, registerObj, size, checked, onChange }) {
  return (
    <input
      type="checkbox"
      id={id}
      onChange={onChange}
      disabled={disabled}
      checked={checked}
      className={`disabled:bg-gray-200 dark:disabled:bg-gray-700 ${size === "large" ? "h-6 w-6" : ""}`}
      {...registerObj}
    />
  );
}

export default CheckboxInput;
