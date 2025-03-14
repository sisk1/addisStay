function RadioInput({ id, name, registerObj, value, disabled }) {
  return (
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      disabled={disabled}
      className="disabled:bg-gray-200 dark:disabled:bg-gray-700"
      {...registerObj}
    />
  );
}

export default RadioInput;
