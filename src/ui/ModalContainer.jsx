import { useOutsideClick } from "../hooks/useOutsideClick";

function ModalContainer({ children, close }) {
  const ref = useOutsideClick(close);

  return (
    <div
      className="fixed left-1/2 top-1/2 max-h-[85vh] max-w-4xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg bg-gray-50 px-5 pb-5 pt-12 dark:bg-gray-800"
      ref={ref}
    >
      {children}
    </div>
  );
}

export default ModalContainer;
