import Button from "./Button";
import Heading from "./Heading";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="flex h-[100dvh] w-full items-center justify-center">
      <div className="flex flex-col justify-center gap-5 rounded-lg border border-gray-200 bg-gray-100 p-10 text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100">
        <Heading as="h1">Something went wrong 🧐</Heading>
        <p className="pb-4 text-center text-gray-500 dark:text-gray-400">
          {error?.message}
        </p>
        <Button onClick={resetErrorBoundary} variation="wide">
          Try again
        </Button>
      </div>
    </div>
  );
}

export default ErrorFallback;
