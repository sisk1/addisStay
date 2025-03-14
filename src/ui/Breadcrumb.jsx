import { Link, useLocation } from "react-router-dom";

function BreadCrumb() {
  const location = useLocation();
  const pathname = location.pathname?.slice(1);

  return (
    <div className="flex items-center gap-2 text-sm text-gray-400">
      <Link to="/dashboard">
        <span className="text-gray-600 dark:text-gray-300">Home</span>
      </Link>
      <span>&gt;</span>
      <span>{pathname?.at(0)?.toUpperCase() + pathname?.slice(1)}</span>
    </div>
  );
}

export default BreadCrumb;
