import { Outlet } from "react-router-dom";

import { useSidebar } from "../contexts/SidebarContext";

import Main from "./Main";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Container from "./Container";

function AppLayout() {
  const { showSidebar } = useSidebar();

  return (
    <div
      className={`grid h-screen grid-rows-[auto_1fr] overflow-y-hidden ${showSidebar ? "grid-cols-[280px_1fr]" : "grid-cols-1"}`}
    >
      <Header />
      {showSidebar ? <Sidebar /> : ""}

      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </div>
  );
}

export default AppLayout;
