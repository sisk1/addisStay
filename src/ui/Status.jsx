function Status({ status }) {
  const base =
    "inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase ";

  const styles = {
    unconfirmed:
      base + "bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100",
    "checked-in":
      base +
      "bg-green-100 text-green-900 dark:bg-green-900 dark:text-green-100",
    "checked-out":
      base + "bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-gray-100",
  };

  styles.departing = styles.unconfirmed;
  styles.arriving = styles["checked-in"];

  return <span className={styles[status]}>{status}</span>;
}

export default Status;
