import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAccommodation } from "../../services/apiAccommodations";
import toast from "react-hot-toast";

export function useDeleteAccommodation() {
  const queryClient = useQueryClient();

  const { mutate: deleteAccom, isPending: isDeleting } = useMutation({
    mutationFn: ({ accomId, imageName }) =>
      deleteAccommodation(accomId, imageName),
    onSuccess: () => {
      toast.success("Accommodation successfully deleted.");
      queryClient.invalidateQueries({ active: true });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteAccom, isDeleting };
}
