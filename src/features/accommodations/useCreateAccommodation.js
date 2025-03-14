import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditAccommodation } from "../../services/apiAccommodations";
import toast from "react-hot-toast";

export function useCreateAccommodation() {
  const queryClient = useQueryClient();

  const { mutate: createAccom, isPending: isCreating } = useMutation({
    mutationFn: createEditAccommodation,
    onSuccess: () => {
      toast.success("Accommodation successfully created.");
      queryClient.invalidateQueries({ queryKey: ["accommodations"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createAccom, isCreating };
}
