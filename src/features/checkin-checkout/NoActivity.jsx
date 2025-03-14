function NoActivity({ children }) {
  return (
    <div className="mt-10 flex items-center justify-center text-xl font-medium text-red-600 dark:text-red-400">
      {children} 🧐
    </div>
  );
}

export default NoActivity;
