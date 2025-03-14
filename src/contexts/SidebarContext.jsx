import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

function SidebarProvider({ children }) {
  const [showSidebar, setShowSidebar] = useState(true);

  function toggleSidebar() {
    setShowSidebar((show) => !show);
  }

  return (
    <SidebarContext.Provider value={{ showSidebar, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined)
    throw new Error(
      "SidebarContext was used outside of SidebarContextProvider",
    );
  return context;
}

export { SidebarProvider, useSidebar };
