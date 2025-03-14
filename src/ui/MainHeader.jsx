import { HiOutlineMenu, HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import Logo from "./Logo";
import Avatar from "./Avatar";
import { useDarkMode } from "../contexts/DarkModeContext";
import ButtonIcon from "./ButtonIcon";
import Row from "./Row";
import { useSidebar } from "../contexts/SidebarContext";

function MainHeader() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { toggleSidebar } = useSidebar();

  return (
    <Row type="horizontal">
      <div className="flex gap-4">
        <button
          className="text-semibold text-2xl transition-all duration-300 hover:text-gray-800 dark:text-gray-400 hover:dark:text-gray-300"
          onClick={toggleSidebar}
        >
          <HiOutlineMenu />
        </button>
        <Logo />
      </div>

      <div className="flex items-center gap-3">
        <Avatar />
        <ButtonIcon onClick={toggleDarkMode}>
          {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
        </ButtonIcon>
        <ButtonIcon to="/settings">
          <HiOutlineCog6Tooth />
        </ButtonIcon>
      </div>
    </Row>
  );
}

export default MainHeader;
