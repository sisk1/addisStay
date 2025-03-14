function DashboardBox({ size, children }) {
  return (
    <div
      className={`rounded-md border border-gray-200 bg-gray-100 ${size === "small" ? "p-4" : "p-8 pt-6"} dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100`}
    >
      {children}
    </div>
  );
}

export default DashboardBox;
