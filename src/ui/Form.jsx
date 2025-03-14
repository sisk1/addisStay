function Form({ onSubmit, children, type = "regular" }) {
  const base = "rounded-md px-8 ";

  const styles = {
    regular:
      base +
      " space-y-4 border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 text-sm py-4",
    modal: base + " space-y-4 bg-gray-50 dark:bg-gray-800 py-4",
    login:
      base +
      " space-y-6 border-gray-100 pt-6 pb-8 dark:border-gray-800 dark:bg-gray-800",
  };

  return (
    <form onSubmit={onSubmit} className={styles[type]}>
      {children}
    </form>
  );
}

export default Form;
