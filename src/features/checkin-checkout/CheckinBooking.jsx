import { useState } from "react";
import { useMoveBack } from "../../hooks/useMoveBack";
import Button from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";
import CheckboxInput from "../../ui/CheckboxInput";
import CheckboxRow from "../../ui/CheckboxRow";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Spinner from "../../ui/Spinner";
import TextButton from "../../ui/TextButton";
import BookingDataBox from "../bookings/BookingDataBox";
import { useBooking } from "../bookings/useBooking";
import { useCheckin } from "./useCheckin";
import { formatCurrency } from "../../utils/helpers";

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const { isCheckingIn, checkin } = useCheckin();

  const { isLoading, booking } = useBooking();
  const moveBack = useMoveBack();

  if (isLoading) return <Spinner />;

  function handleCheckin() {
    if (confirmPaid) checkin(booking.id);
  }

  return (
    <>
      <Row type="horizontal">
        <Heading>Check in booking #{booking.id}</Heading>
        <TextButton onClick={moveBack}>&larr; Back</TextButton>
      </Row>

      <Row>
        <BookingDataBox booking={booking} />
        <div className="rounded-md border border-gray-200 bg-gray-100 px-10 py-6 text-lg text-gray-700 shadow-sm dark:border-gray-800 dark:bg-gray-800 dark:text-gray-100">
          <CheckboxRow
            size="large"
            label={`I confirm that ${booking.guests.fullName} has paid the total amount of ${formatCurrency(booking.totalPrice)}`}
          >
            <CheckboxInput
              id="paymentConfirmation"
              size="large"
              onChange={() => setConfirmPaid((confirm) => !confirm)}
              checked={confirmPaid}
              disabled={confirmPaid || isCheckingIn}
            />
          </CheckboxRow>
        </div>
        <ButtonGroup>
          <Button onClick={handleCheckin} disabled={isCheckingIn}>
            Check in booking #{booking.id}
          </Button>
          <Button variation="secondary" onClick={moveBack}>
            Back
          </Button>
        </ButtonGroup>
      </Row>
    </>
  );
}

export default CheckinBooking;
