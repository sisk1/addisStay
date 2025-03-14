import { useForm } from "react-hook-form";

import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import FileInput from "../../ui/FileInput";
import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";

function UpdateUserDataForm() {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useUser();
  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ fullName, avatar }) {
    if (avatar) avatar = avatar[0];

    if (!fullName || (fullName === user?.user_metadata?.fullName && !avatar))
      return;

    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => reset(),
      },
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Email address">
        <Input type="email" id="email" disabled={true} value={user?.email} />
      </FormRow>
      <FormRow label="Full name">
        <Input
          type="text"
          id="fullName"
          defaultValue={user?.user_metadata?.fullName}
          registerObj={register("fullName")}
        />
      </FormRow>

      <FormRow label="Avatar image">
        <FileInput id="avatar" registerObj={register("avatar")} />
      </FormRow>

      <FormRow type="buttons">
        <Button variation="secondary" type="reset" disabled={isUpdating}>
          Cancel
        </Button>
        <Button disabled={isUpdating}>
          {isUpdating ? <SpinnerMini /> : "Update account"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
