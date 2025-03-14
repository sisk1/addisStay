function FileInput({ id, innerRef, registerObj }) {
  return (
    <input
      type="file"
      id={id}
      ref={innerRef}
      className="rounded-md border border-gray-300 bg-gray-50 text-sm text-gray-900 transition-colors duration-200 file:mr-3 file:cursor-pointer file:border-0 file:bg-indigo-600 file:px-4 file:py-2 file:font-semibold file:text-white hover:file:bg-indigo-700 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400"
      accept="image/*"
      {...registerObj}
    />
  );
}

export default FileInput;
