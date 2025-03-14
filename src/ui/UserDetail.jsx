import { Link } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi";

import { useLogout } from "../features/authentication/useLogout";
import { useOutsideClick } from "../hooks/useOutsideClick";

import Button from "./Button";

function UserDetail({ email, fullName, toggleShowDetail }) {
  const { isLoggingOut, logout } = useLogout();
  const ref = useOutsideClick(toggleShowDetail);

  return (
    <div
      className="absolute -right-10 top-10 z-50 flex flex-col gap-4 rounded-md border border-gray-200 bg-gray-50 px-8 py-3 dark:border-gray-700 dark:bg-gray-800"
      ref={ref}
    >
      {/* USER DETAIL */}
      <div className="flex flex-col items-center gap-1 border-b border-gray-200 pb-2 dark:border-gray-700">
        <p className="text-xl font-semibold text-indigo-600">{fullName}</p>
        <span className="text-sm font-light text-gray-400">{email}</span>
      </div>

      {/* MY ACCOUNT */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <Link to="/account">
          <button
            className="hover:text-gray-800dark:text-gray-200 flex items-center gap-2 pb-3 text-lg font-medium text-gray-700 transition-all duration-300 dark:text-gray-200 dark:hover:text-gray-50"
            onClick={toggleShowDetail}
          >
            <span>
              <HiOutlineUser />
            </span>
            <span>My account</span>
          </button>
        </Link>
      </div>

      {/* LOGOUT */}
      <Button variation="wide" onClick={() => logout()} disabled={isLoggingOut}>
        Log out
      </Button>
    </div>
  );
}

export default UserDetail;
