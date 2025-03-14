import { HiOutlineUser } from "react-icons/hi";

import { useCheckout } from "./useCheckout";

import Status from "../../ui/Status";
import Button from "../../ui/Button";

function TodayItem({ status, guestName, numNights, bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();

  if (status === "checked-in") status = "departing";
  if (status === "unconfirmed") status = "arriving";

  return (
    <div className="grid grid-cols-[99px_1fr_70px_90px] items-center justify-items-start gap-x-3 border-y border-gray-200 py-3 text-center text-gray-800 dark:border-gray-700 dark:text-gray-100">
      <Status status={status} />

      <div className="flex items-center gap-2 font-medium">
        <HiOutlineUser />
        <span className="text-sm">{guestName}</span>
      </div>

      <span className="text-sm">{numNights} nights</span>

      {status === "arriving" && (
        <Button size="small" to={`/checkin/${bookingId}`}>
          Check in
        </Button>
      )}
      {status === "departing" && (
        <Button size="small" onClick={() => checkout(bookingId)}>
          {isCheckingOut ? "..." : "Check out"}
        </Button>
      )}
    </div>
  );
}

/*
  Box
    Heading4
    TableRow
      status
      guest name
      room type
      amount
      action
      numNights
    /TableRow
  /Box
*/

export default TodayItem;
