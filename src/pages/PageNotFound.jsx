import { useMoveBack } from "../hooks/useMoveBack";
import Button from "../ui/Button";
import Heading from "../ui/Heading";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <div className="flex h-[100dvh] w-full items-center justify-center">
      <div className="flex flex-col justify-center gap-5 rounded-lg border border-gray-200 bg-gray-100 p-10 text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100">
        <Heading as="h1">404 Page Not Found 🧐</Heading>
        <Button onClick={moveBack}>&larr; Go back</Button>
      </div>
    </div>
  );
}

export default PageNotFound;
