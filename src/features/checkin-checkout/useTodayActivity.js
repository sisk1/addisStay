import { useQuery } from "@tanstack/react-query";
import { getTodayActivity } from "../../services/apiBookings";

export function useTodayActivity() {
  const { data: activities, isLoading } = useQuery({
    queryKey: ["today-activity"],
    queryFn: getTodayActivity,
  });

  return { activities, isLoading };
}
