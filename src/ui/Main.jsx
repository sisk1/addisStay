import { useSidebar } from "../contexts/SidebarContext";

function Main({ children }) {
  const { showSidebar } = useSidebar();

  return (
    <div
      className={`overflow-y-scroll bg-gray-100 ${showSidebar ? "px-14" : ""} py-14 dark:bg-gray-900`}
    >
      {children}
    </div>
  );
}

export default Main;
