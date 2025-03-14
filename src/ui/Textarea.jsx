function Textarea({ id, disabled, registerObj }) {
  return (
    <textarea
      id={id}
      disabled={disabled}
      className="rounded-md border border-gray-300 bg-transparent px-4 py-2 outline-none transition-all duration-300 focus:border-blue-600 focus:outline-none disabled:bg-gray-200 dark:border-gray-500 dark:disabled:bg-gray-700"
      {...registerObj}
    ></textarea>
  );
}

export default Textarea;
