import DashboardBox from "./DashboardBox";

const colorClasses = {
  sky: {
    bg: "bg-sky-100 dark:bg-sky-800",
    text: "text-sky-800 dark:text-sky-100",
  },
  green: {
    bg: "bg-green-100 dark:bg-green-800",
    text: "text-green-800 dark:text-green-100",
  },
  indigo: {
    bg: "bg-indigo-100 dark:bg-indigo-800",
    text: "text-indigo-800 dark:text-indigo-100",
  },
  yellow: {
    bg: "bg-yellow-100 dark:bg-yellow-800",
    text: "text-yellow-800 dark:text-yellow-100",
  },
};

function Stat({ color, title, value, Icon }) {
  return (
    <DashboardBox size="small">
      <div className="grid grid-cols-[80px_1fr] grid-rows-2 items-center justify-items-start gap-x-2 gap-y-1 rounded-md font-semibold text-gray-500 dark:text-gray-400">
        <div
          className={`row-span-2 rounded-full p-5 ${colorClasses[color].bg}`}
        >
          <Icon className={`h-8 w-8 ${colorClasses[color].text}`} />
        </div>

        <div className="self-end text-sm uppercase tracking-wide">{title}</div>

        <p className="self-start text-xl text-gray-800 dark:text-gray-100">
          {value}
        </p>
      </div>
    </DashboardBox>
  );
}

export default Stat;
