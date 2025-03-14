import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  // FILTER
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue, method: "eq" };

  // SORTBY
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // PAGINATION
  const page = Number(searchParams.get("page")) || 1;

  // QUERY
  const { data: { data: bookings, count } = {}, isLoading } = useQuery({
    queryKey: ["bookings", page, filter, sortBy],
    queryFn: () => getBookings({ page, filter, sortBy }),
  });

  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", page + 1, filter, sortBy],
      queryFn: () => getBookings({ page: page + 1, filter, sortBy }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", page - 1, filter, sortBy],
      queryFn: () => getBookings({ page: page - 1, filter, sortBy }),
    });

  return { bookings, isLoading, count };
}
