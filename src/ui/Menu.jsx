import { createContext, useContext, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useOutsideClick } from "../hooks/useOutsideClick";

const MenuContext = createContext();

function Menu({ children }) {
  const [openId, setOpenId] = useState("");

  const open = setOpenId;
  const close = () => setOpenId("");

  return (
    <MenuContext.Provider value={{ openId, open, close }}>
      {children}
    </MenuContext.Provider>
  );
}

function Toggle({ id }) {
  const { openId, open, close } = useContext(MenuContext);

  function handleOpen(e) {
    e.stopPropagation();

    openId !== id || openId === "" ? open(id) : close();
  }

  return (
    <button onClick={handleOpen} className="text-lg">
      <HiOutlineDotsVertical />
    </button>
  );
}

function ButtonGroup({ id, children }) {
  const { openId, close } = useContext(MenuContext);
  const ref = useOutsideClick(close, false);

  if (openId !== id) return null;

  return (
    <div
      className="absolute right-7 top-12 z-50 flex flex-col gap-1 rounded-md border border-gray-200 bg-gray-50 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
      ref={ref}
    >
      {children}
    </div>
  );
}

function Button({ Icon, name, onClick, disabled }) {
  const { close } = useContext(MenuContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <button
      className="flex items-center gap-3 py-3 pl-6 pr-10 text-sm tracking-wide hover:bg-gray-200 hover:dark:bg-gray-900"
      onClick={handleClick}
      disabled={disabled}
    >
      <span>
        <Icon className="text-gray-500 dark:text-gray-400" />
      </span>
      <span>{name}</span>
    </button>
  );
}

Menu.Toggle = Toggle;
Menu.ButtonGroup = ButtonGroup;
Menu.Button = Button;

export default Menu;
