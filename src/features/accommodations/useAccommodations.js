import { useQuery } from "@tanstack/react-query";
import { getAccommodations } from "../../services/apiAccommodations";

export function useAccommodations() {
  const { data: accoms, isLoading } = useQuery({
    queryKey: ["accommodations"],
    queryFn: getAccommodations,
  });
  return { accoms, isLoading };
}
