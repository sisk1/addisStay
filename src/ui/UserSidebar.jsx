import { useUser } from "../features/authentication/useUser";

function UserSidebar() {
  const {
    user: {
      email,
      user_metadata: { fullName, avatar },
    },
  } = useUser();

  return (
    <div className="flex items-center justify-center gap-3 border-b-[1px] border-gray-300 px-6 pb-5 dark:border-gray-600">
      <img src={avatar} alt="User" className="w-1/4 rounded-full" />
      <div className="flex flex-col gap-2">
        <span className="font-medium text-gray-700 dark:text-gray-300">
          {fullName}
        </span>
        <span className="text-sm font-light text-gray-400">{email}</span>
      </div>
    </div>
  );
}

export default UserSidebar;
