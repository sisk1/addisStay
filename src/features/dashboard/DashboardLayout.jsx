import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import { useAccommodations } from "../accommodations/useAccommodations";

import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import TodayActivity from "../checkin-checkout/TodayActivity";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";

function DashboardLayout() {
  const { bookings, isLoadingBookings } = useRecentBookings();
  const { confirmedStays, isLoadingStays, numDays } = useRecentStays();
  const { accoms, isLoading: isLoadingAccoms } = useAccommodations();

  if (isLoadingStays || isLoadingBookings || isLoadingAccoms)
    return <Spinner />;

  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-12">
      <Stats
        accomsCount={accoms.length}
        confirmedStays={confirmedStays}
        numDays={numDays}
        bookings={bookings}
      />

      <TodayActivity />

      <DurationChart confirmedStays={confirmedStays} numDays={numDays} />

      <SalesChart numDays={numDays} bookings={bookings} />
    </div>
  );
}

export default DashboardLayout;
