import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp() {
  const { mutate: signUp, isPending: isCreating } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (data) => {
      if (data.user) {
        toast.success("Confirmation email sent to: " + data.user.email);
      }
    },
    onError: (err) => toast.error(err.message),
  });

  return { signUp, isCreating };
}
