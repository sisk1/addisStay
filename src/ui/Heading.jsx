function Heading({ as: Tag = "h2", children }) {
  const base = "dark:text-gray-100 text-gray-700 ";

  const styles = {
    h1: base + "text-4xl font-semibold",
    h2: base + "text-3xl font-semibold",
    h3: base + "text-2xl font-medium",
    h4: base + "text-xl font-medium",
    h5: base + "text-xl font-semibold mb-6",
  };

  return (
    <Tag className={styles[Tag]} role="heading" aria-label="2">
      {children}
    </Tag>
  );
}

export default Heading;
