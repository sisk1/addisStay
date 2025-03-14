import {
  HiOutlineHome,
  HiOutlineOfficeBuilding,
  HiOutlineUsers,
} from "react-icons/hi";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import NavItem from "./NavItem";

function MainNav() {
  return (
    <nav>
      <ul className="flex flex-col gap-6">
        <NavItem to="/dashboard" icon={HiOutlineHome} label="Dashboard" />
        <NavItem to="/bookings" icon={HiOutlineCalendarDays} label="Bookings" />
        <NavItem
          to="/accommodations"
          icon={HiOutlineOfficeBuilding}
          label="Accommodations"
        />
        <NavItem to="/users" icon={HiOutlineUsers} label="Users" />
      </ul>
    </nav>
  );
}

export default MainNav;
