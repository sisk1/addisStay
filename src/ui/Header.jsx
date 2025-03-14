import MainHeader from "./MainHeader";
import Breadcrumb from "./Breadcrumb";

function Header() {
  return (
    <header className="flex flex-col gap-6 border-b border-gray-100 px-8 py-4 dark:border-gray-700">
      <MainHeader />
      <Breadcrumb />
    </header>
  );
}

export default Header;
