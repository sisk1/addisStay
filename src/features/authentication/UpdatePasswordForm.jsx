import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

import { useLogin } from "./useLogin";
import { useLogout } from "./useLogout";
import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import SpinnerMini from "../../ui/SpinnerMini";

function UpdatePasswordForm() {
  const { register, handleSubmit, getValues, formState } = useForm();
  const { errors } = formState;

  const { login, isLoggingIn } = useLogin();
  const { logout } = useLogout();
  const { user } = useUser();
  const { updateUser, isUpdating: isUpdatingUserData } = useUpdateUser();
  const isUpdating = isLoggingIn || isUpdatingUserData;

  function onSubmit({ oldPassword, password }) {
    // RE-authenticate the user
    login(
      { email: user.email, password: oldPassword },
      {
        onError: () => toast.error("Incorrect old password."),
        onSuccess: () => {
          toast.success("Password updated successfully.");
          // If there is NO re-authentication error proceed with update password and setIsLoading = false
          updateUser({ password });
          logout();
        },
      },
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Old Password" error={errors?.oldPassword?.message}>
        <Input
          type="password"
          id="oldPassword"
          registerObj={register("oldPassword", {
            required: "This field is required.",
          })}
        />
      </FormRow>
      <FormRow
        label="Password ( min 8 characters )"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          registerObj={register("password", {
            required: "This field is required.",
          })}
        />
      </FormRow>
      <FormRow
        label="Confirm password"
        error={errors?.confirmPassword?.message}
      >
        <Input
          type="password"
          id="confirmPassword"
          registerObj={register("confirmPassword", {
            required: "This field is required.",
            validate: (value) =>
              value === getValues().password || "Passwords need to match.",
          })}
        />
      </FormRow>
      <FormRow type="buttons">
        <Button variation="secondary" type="reset" disabled={isUpdating}>
          Cancel
        </Button>
        <Button disabled={isUpdating}>
          {isUpdating ? <SpinnerMini /> : "Update password"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default UpdatePasswordForm;
