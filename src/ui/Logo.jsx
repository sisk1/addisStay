import { Link } from "react-router-dom";

function Logo({ size = "normal" }) {
  return (
    <Link to="/dashboard">
      <div
        className={`flex items-center gap-2 ${size === "large" ? "text-3xl" : ""}`}
      >
        <div
          className={`rounded-sm border-2 border-indigo-600 px-2 text-sm font-medium text-indigo-600 ${size === "large" ? "text-xl" : ""}`}
        >
          A
        </div>
        <span className="font-medium text-indigo-500">AddisStay</span>
      </div>
    </Link>
  );
}

export default Logo;
