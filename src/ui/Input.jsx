function Input({
  type,
  id,
  disabled,
  registerObj,
  defaultValue,
  value,
  onBlur,
  onChange,
  size,
  step,
}) {
  const base =
    "rounded-md border border-gray-300 bg-transparent px-4 py-2 outline-none transition-all duration-300 focus:border-blue-600 focus:outline-none disabled:bg-gray-200 dark:border-gray-500 dark:disabled:bg-gray-700";
  const styles = {
    wide: base + " w-96",
  };

  return (
    <input
      type={type}
      id={id}
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      onBlur={onBlur}
      onChange={onChange}
      className={size ? styles[size] : base}
      step={step}
      {...registerObj}
    />
  );
}

export default Input;
