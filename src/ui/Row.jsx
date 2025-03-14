function Row({ type = "vertical", children }) {
  const base = "flex";

  const styles = {
    horizontal: base + " justify-between items-center",
    vertical: base + " gap-6 flex-col",
  };

  // VERTICAL
  if (type === "vertical")
    return <div className={styles[type]}>{children}</div>;

  // HORIZONTAL
  if (type === "horizontal")
    return <div className={styles[type]}>{children}</div>;
}

export default Row;
