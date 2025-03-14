import { useNavigate } from "react-router-dom";

import { useDeleteBooking } from "./useDeleteBooking";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";
import { useCheckout } from "../checkin-checkout/useCheckout";

import Button from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Status from "../../ui/Status";
import BookingDataBox from "./BookingDataBox";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Spinner from "../../ui/Spinner";
import TextButton from "../../ui/TextButton";

function BookingDetail() {
  const { deleteBooking, isDeleting } = useDeleteBooking();
  const { isLoading, booking } = useBooking();
  const { isCheckingOut, checkout } = useCheckout();

  const navigate = useNavigate();
  const moveBack = useMoveBack();

  if (isLoading) return <Spinner />;

  return (
    <Modal>
      <Row type="horizontal">
        <span className="flex items-center gap-6">
          <Heading>Booking #{booking?.id}</Heading>
          <Status status={booking?.status} />
        </span>

        <TextButton onClick={moveBack}>&larr; Back</TextButton>
      </Row>

      <Row>
        <BookingDataBox booking={booking} />

        <ButtonGroup>
          {booking?.status === "checked-in" && (
            <Button
              onClick={() =>
                checkout(booking.id, {
                  onSuccess: () => navigate("/dashboard"),
                })
              }
              disabled={isCheckingOut}
            >
              Check out
            </Button>
          )}
          {booking?.status === "unconfirmed" && (
            <Button onClick={() => navigate(`/checkin/${booking.id}`)}>
              Check in
            </Button>
          )}

          <Modal.Open opens="confirm-delete">
            <Button variation="danger">Delete booking</Button>
          </Modal.Open>

          <Button variation="secondary" onClick={moveBack}>
            Back
          </Button>
        </ButtonGroup>
      </Row>

      <Modal.Window name="confirm-delete">
        <ConfirmDelete
          resourceName="Booking"
          id={booking.id}
          deleteFun={deleteBooking}
          disabled={isDeleting}
        />
      </Modal.Window>
    </Modal>
  );
}

export default BookingDetail;
