import { Link } from "react-router-dom";

function Button({
  variation = "primary",
  children,
  onClick,
  type,
  disabled,
  size,
  to,
}) {
  const base = `${size === "small" ? "min-w-full px-2 py-1 text-xs font-semibold uppercase justify-self-stretch" : "px-4 py-3 font-medium"} transition-all duration-300 rounded-md disabled:cursor-not-allowed `;

  const styles = {
    primary:
      base + "bg-indigo-600 text-indigo-50 hover:bg-indigo-700 drop-shadow-md",
    secondary:
      base +
      "text-sm w-max bg-transparent border border-gray-300 dark:border-gray-500 text-gray-600 dark:text-indigo-50 hover:bg-gray-200 dark:hover:bg-gray-900 transition-colors duration-300",
    danger: base + "text-sm w-max bg-red-600 hover:bg-red-800 text-red-50",
  };

  styles.wide = styles.primary + ` w-full ${size === "large" ? "text-lg" : ""}`;
  styles.primary += " text-sm w-max";

  if (to)
    return (
      <Link to={to} className={styles[variation]} disabled={disabled}>
        {children}
      </Link>
    );

  return (
    <button
      className={styles[variation]}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
