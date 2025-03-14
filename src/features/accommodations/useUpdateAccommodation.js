import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditAccommodation } from "../../services/apiAccommodations";
import toast from "react-hot-toast";

export function useUpdateAccommodation() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: updateAccom } = useMutation({
    mutationFn: ({ newCabin, id }) => createEditAccommodation(newCabin, id),
    onSuccess: () => {
      toast.success("Cabin successfully edited.");
      queryClient.invalidateQueries({ queryKey: ["accommodations"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateAccom };
}
