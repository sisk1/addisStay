import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";

function UpdateSettingsForm() {
  const { isLoading, settings } = useSettings();
  const { isUpdating, updateSetting } = useUpdateSetting();

  if (isLoading) return <Spinner />;

  const {
    minNights,
    maxNights,
    maxStandardRoomGuests,
    maxTwoBedroomGuests,
    maxPenthouseGuests,
  } = settings.at(0);

  function handleBlur(e, field) {
    const { value } = e.target;

    updateSetting({ [field]: value });
  }

  return (
    <Form>
      <FormRow label="Minimum Nights">
        <Input
          type="number"
          id="minNights"
          defaultValue={minNights}
          disabled={isUpdating}
          onBlur={(e) => handleBlur(e, "minNights")}
        />
      </FormRow>
      <FormRow label="Maximum Nights">
        <Input
          type="number"
          id="maxNights"
          defaultValue={maxNights}
          disabled={isUpdating}
          onBlur={(e) => handleBlur(e, "maxNights")}
        />
      </FormRow>
      <FormRow label="Maximum Standard Room Guests">
        <Input
          type="number"
          id="maxStandardRoomGuests"
          defaultValue={maxStandardRoomGuests}
          disabled={isUpdating}
          onBlur={(e) => handleBlur(e, "maxStandardRoomGuests")}
        />
      </FormRow>
      <FormRow label="Maximum Two-bed Room Guests">
        <Input
          type="number"
          id="maxTwoBedroomGuests"
          defaultValue={maxTwoBedroomGuests}
          disabled={isUpdating}
          onBlur={(e) => handleBlur(e, "maxTwoBedroomGuests")}
        />
      </FormRow>
      <FormRow label="Maximum Penthouse Guests">
        <Input
          type="number"
          id="maxPenthouseGuests"
          defaultValue={maxPenthouseGuests}
          disabled={isUpdating}
          onBlur={(e) => handleBlur(e, "maxPenthouseGuests")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
