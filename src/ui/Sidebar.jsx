import Uploader from "../data/Uploader";
import Footer from "./Footer";
import MainNav from "./MainNav";
import UserSidebar from "./UserSidebar";

function Sidebar() {
  return (
    <aside className="row-span-full flex flex-col gap-10 border-r border-gray-100 px-3 py-8 dark:border-gray-700">
      <UserSidebar />
      <MainNav />

      <Uploader />
      <Footer />
    </aside>
  );
}

export default Sidebar;
