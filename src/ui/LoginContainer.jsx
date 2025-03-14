function LoginContainer({ children }) {
  return (
    <div className="flex h-[100dvh] w-full flex-col items-center justify-center gap-10 bg-gray-50 text-gray-700 dark:bg-gray-900 dark:text-gray-100">
      {children}
    </div>
  );
}

export default LoginContainer;
