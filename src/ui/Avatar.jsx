import { useState } from "react";

import { useUser } from "../features/authentication/useUser";

import UserDetail from "./UserDetail";

function Avatar() {
  const [showDetail, setShowDetail] = useState(false);

  const {
    user: {
      email,
      user_metadata: { fullName, avatar },
    },
  } = useUser();

  function toggleShowDetail() {
    setShowDetail((show) => !show);
  }

  return (
    <div className="relative">
      <button
        className="flex items-center gap-3 pr-5"
        onClick={toggleShowDetail}
      >
        <img src={avatar} alt="user" className="w-[30px] rounded-full" />
        <p>{String(fullName.split(" ").at(0))}</p>
      </button>

      {showDetail && (
        <UserDetail
          email={email}
          fullName={fullName}
          toggleShowDetail={toggleShowDetail}
        />
      )}
    </div>
  );
}

export default Avatar;
