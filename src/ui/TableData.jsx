function TableData({ type = "regular", children }) {
  const base = "px-6 py-3 ";

  const styles = {
    regular: base + "font-medium",
    image: "pb-2 pr-2 pt-1",
    long: base + "whitespace-nowrap",
  };

  styles.menu = "pl-6 relative";
  styles.greenColor = styles.regular + " text-green-500 dark:text-green-200";
  styles.yellowColor = styles.regular + " text-yellow-500 dark:text-yellow-400";

  return (
    <td scope="row" className={styles[type]}>
      {children}
    </td>
  );
}

export default TableData;
