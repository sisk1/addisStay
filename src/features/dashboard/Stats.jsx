import { HiOutlineBriefcase, HiOutlineCash } from "react-icons/hi";
import { HiOutlineCalendarDays } from "react-icons/hi2";

import { formatCurrency } from "../../utils/helpers";

import Stat from "./Stat";

function Stats({ bookings, confirmedStays, accomsCount, numDays }) {
  const numBookings = bookings.length;
  const totalSales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);
  const numCheckIns = confirmedStays.length;
  const occupancy =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (accomsCount * numDays);

  return (
    <div className="col-span-2 grid grid-cols-4 gap-x-5">
      <Stat
        Icon={HiOutlineBriefcase}
        color="sky"
        title="Bookings"
        value={numBookings}
      />
      <Stat
        Icon={HiOutlineCash}
        color="green"
        title="Sales"
        value={formatCurrency(totalSales)}
      />
      <Stat
        Icon={HiOutlineCalendarDays}
        color="indigo"
        title="Check-ins"
        value={numCheckIns}
      />
      <Stat
        Icon={HiOutlineCalendarDays}
        color="yellow"
        title="Occupancy rate"
        value={`${Math.ceil(occupancy)}%`}
      />
    </div>
  );
}

export default Stats;
