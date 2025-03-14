import { useForm } from "react-hook-form";

import { useCreateAccommodation } from "./useCreateAccommodation";
import { useUpdateAccommodation } from "./useUpdateAccommodation";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";
import FileInput from "../../ui/FileInput";
import CheckboxContainer from "../../ui/CheckboxContainer";
import CheckboxRow from "../../ui/CheckboxRow";
import CheckboxInput from "../../ui/CheckboxInput";
import RadioInput from "../../ui/RadioInput";
import SpinnerMini from "../../ui/SpinnerMini";

function CreateAccomForm({ accomToEdit = {}, onCloseModal }) {
  const { isCreating, createAccom } = useCreateAccommodation();
  const { isUpdating, updateAccom } = useUpdateAccommodation();
  const isWorking = isUpdating || isCreating;

  const { id: editId, ...editValues } = accomToEdit;
  const isEditSession = Boolean(editId);

  const { handleSubmit, register, formState, getValues, reset } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    const amenities = [
      data.wifi && "Wi-Fi",
      data.balcony && "Balcony",
      data.ac && "AC",
      data.laundry && "Laundry",
    ].filter(Boolean);

    delete data.wifi;
    delete data.balcony;
    delete data.ac;
    delete data.laundry;

    const newCabin = { ...data, image, amenities };

    if (isEditSession)
      updateAccom(
        { newCabin, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        },
      );
    else
      createAccom(newCabin, {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} type="modal">
      <FormRow label="Accommodation Name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          registerObj={register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Maximum Capacity" error={errors?.capacity?.message}>
        <Input
          type="number"
          id="capacity"
          disabled={isWorking}
          registerObj={register("capacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Maximum Capacity should be at least 1",
            },
            valueAsNumber: true,
          })}
        />
      </FormRow>

      <FormRow label="Regular Price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          registerObj={register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Price should be at least 1",
            },
            valueAsNumber: true,
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          registerObj={register("discount", {
            required: "This field is required",
            validate: (value) =>
              Number(value) <= Number(getValues().regularPrice) ||
              "Discount should be less than the regular price.",
            valueAsNumber: true,
          })}
        />
      </FormRow>

      <FormRow
        label="Amenities"
        error={
          errors?.wifi?.message ||
          errors?.balcony?.message ||
          errors?.laundry?.message ||
          errors?.ac?.message
        }
      >
        <CheckboxContainer>
          <CheckboxRow label="Wi-Fi">
            <CheckboxInput
              id="wifi"
              disabled={isWorking}
              registerObj={register("wifi")}
            />
          </CheckboxRow>

          <CheckboxRow label="Balcony">
            <CheckboxInput
              id="balcony"
              disabled={isWorking}
              registerObj={register("balcony")}
            />
          </CheckboxRow>

          <CheckboxRow label="Laundry">
            <CheckboxInput
              id="laundry"
              disabled={isWorking}
              registerObj={register("laundry")}
            />
          </CheckboxRow>

          <CheckboxRow label="AC">
            <CheckboxInput
              id="ac"
              disabled={isWorking}
              registerObj={register("ac")}
            />
          </CheckboxRow>
        </CheckboxContainer>
      </FormRow>

      <FormRow
        label="Description for website"
        error={errors?.description?.message}
      >
        <Textarea
          id="description"
          disabled={isWorking}
          registerObj={register("description", {
            required: "This field is required",
          })}
        ></Textarea>
      </FormRow>

      <FormRow label="Floor Number" error={errors?.floorNumber?.message}>
        <Input
          type="number"
          id="floorNumber"
          disabled={isWorking}
          registerObj={register("floorNumber", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Floor Number should be at least 1",
            },
            max: {
              value: 5,
              message: "Floor Number can not be more than 5",
            },
            valueAsNumber: true,
          })}
        />
      </FormRow>

      <FormRow label="Type" error={errors?.type?.message}>
        <CheckboxContainer>
          <CheckboxRow label="Standard">
            <RadioInput
              id="standard"
              name="type"
              value="standard"
              disabled={isWorking}
              registerObj={register("type", {
                required: "This field is required.",
              })}
            />
          </CheckboxRow>
          <CheckboxRow label="2-bed Room">
            <RadioInput
              id="two-bed"
              name="type"
              value="two-bed"
              disabled={isWorking}
              registerObj={register("type", {
                required: "This field is required.",
              })}
            />
          </CheckboxRow>
          <CheckboxRow label="Penthouse">
            <RadioInput
              id="penthouse"
              name="type"
              value="penthouse"
              disabled={isWorking}
              registerObj={register("type", {
                required: "This field is required.",
              })}
            />
          </CheckboxRow>
        </CheckboxContainer>
      </FormRow>

      <FormRow label="Rating" error={errors?.rating?.message}>
        <Input
          type="number"
          id="rating"
          disabled={isWorking}
          step={0.1}
          registerObj={register("rating", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Floor Number should be at least 1",
            },
            max: {
              value: 5,
              message: "Floor Number can not be more than 5",
            },
            valueAsNumber: true,
          })}
        />
      </FormRow>

      <FormRow label="Num of Kitchens" error={errors?.numKitchens?.message}>
        <Input
          type="number"
          id="numKitchens"
          disabled={isWorking}
          registerObj={register("numKitchens", {
            required: "This field is required",
            valueAsNumber: true,
          })}
        />
      </FormRow>

      <FormRow label="Num of Bathrooms" error={errors?.numBathrooms?.message}>
        <Input
          type="number"
          id="numBathrooms"
          disabled={isWorking}
          registerObj={register("numBathrooms", {
            required: "This field is required",
            valueAsNumber: true,
          })}
        />
      </FormRow>

      <FormRow label="Accommodation Photo" error={errors?.image?.message}>
        <FileInput
          id="image"
          disabled={isWorking}
          registerObj={register("image", {
            required: isEditSession ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow type="buttons">
        <Button
          variation="secondary"
          type="reset"
          disabled={isWorking}
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isWorking && <SpinnerMini />}
          {!isWorking &&
            (isEditSession ? "Edit accommodation" : "Add new accommodation")}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateAccomForm;
