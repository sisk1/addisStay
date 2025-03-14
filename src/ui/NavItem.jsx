import { NavLink } from "react-router-dom";

function NavItem({ to, icon: Icon, label }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `group flex items-center gap-4 rounded-md px-4 py-3 ${isActive ? "dark:bg-gray-900" : ""}`
        }
      >
        {({ isActive }) => (
          <>
            <Icon
              className={`h-6 w-6 transition-all duration-300 group-hover:text-indigo-600 ${isActive ? "text-indigo-600" : ""}`}
            />
            <span
              className={`mt-0.5 font-medium group-hover:text-gray-800 dark:group-hover:text-gray-100 ${isActive ? "text-gray-800 dark:text-gray-100" : ""}`}
            >
              {label}
            </span>
          </>
        )}
      </NavLink>
    </li>
  );
}

export default NavItem;
