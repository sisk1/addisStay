import { Link } from "react-router-dom";

function ButtonIcon({ to, children, onClick, type = "regular" }) {
  const base = "text-2xl text-indigo-600";

  const styles = {
    regular: base,
    close: "absolute right-3 top-3 text-2xl",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );
}

export default ButtonIcon;
