import { useSidebar } from "../contexts/SidebarContext";

function Container({ children }) {
  const { showSidebar } = useSidebar();

  return (
    <div
      className={`mx-auto my-0 space-y-10 ${showSidebar ? "w-full" : "max-w-6xl"}`}
    >
      {children}
    </div>
  );
}

export default Container;
