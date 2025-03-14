import { useTodayActivity } from "./useTodayActivity";

import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";
import DashboardBox from "../dashboard/DashboardBox";
import NoActivity from "./NoActivity";
import TodayItem from "./TodayItem";

function TodayActivity() {
  const { activities, isLoading } = useTodayActivity();

  if (isLoading) return <Spinner />;

  return (
    <DashboardBox>
      <Heading as="h5">Today</Heading>
      {!activities?.length ? (
        <NoActivity>No activity today</NoActivity>
      ) : (
        activities.map((activity) => (
          <TodayItem
            key={activity.id}
            guestName={activity.guests.fullName}
            status={activity.status}
            numNights={activity.numNights}
            bookingId={activity.id}
          />
        ))
      )}
    </DashboardBox>
  );
}

export default TodayActivity;
