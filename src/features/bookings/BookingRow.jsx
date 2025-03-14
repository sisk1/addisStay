import { useNavigate } from "react-router-dom";
import { HiEye, HiOutlineTrash } from "react-icons/hi";
import { HiArrowDownOnSquare, HiArrowUpOnSquare } from "react-icons/hi2";
import { format, isToday } from "date-fns";

import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";
import { useDeleteBooking } from "./useDeleteBooking";
import { useCheckout } from "../checkin-checkout/useCheckout";

import Table from "../../ui/Table";
import TableData from "../../ui/TableData";
import Status from "../../ui/Status";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menu from "../../ui/Menu";

function BookingRow({
  booking: {
    id: bookingId,
    status,
    numNights,
    startDate,
    endDate,
    totalPrice,
    accommodations: { name: accomName },
    guests: { fullName: guestName, email },
  },
}) {
  const { deleteBooking, isDeleting } = useDeleteBooking();
  const { checkout } = useCheckout();
  const navigate = useNavigate();

  return (
    <Modal>
      <Menu>
        <Table.Row size="large">
          <TableData>{accomName}</TableData>
          <TableData>
            <span className="flex flex-col gap-1">
              <span>{guestName}</span>
              <span className="text-sm text-gray-400 dark:text-gray-400">
                {email}
              </span>
            </span>
          </TableData>
          <TableData>
            <span className="flex flex-col gap-1">
              <span>
                {isToday(new Date(startDate))
                  ? "Today"
                  : formatDistanceFromNow(startDate)}{" "}
                &rarr; {numNights} night stay
              </span>
              <span className="text-sm text-gray-400 dark:text-gray-400">
                {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
                {format(new Date(endDate), "MMM dd yyyy")}
              </span>
            </span>
          </TableData>
          <TableData>
            <Status status={status} />
          </TableData>
          <TableData>{formatCurrency(totalPrice)}</TableData>

          <TableData type="menu">
            <Menu.Toggle id={bookingId} />

            <Menu.ButtonGroup id={bookingId}>
              <Menu.Button
                onClick={() => navigate(`/booking/${bookingId}`)}
                Icon={HiEye}
                name="See details"
              />

              {status === "checked-in" && (
                <Menu.Button
                  onClick={() => checkout(bookingId)}
                  Icon={HiArrowUpOnSquare}
                  name="Check out"
                />
              )}

              {status === "unconfirmed" && (
                <Menu.Button
                  onClick={() => navigate(`/checkin/${bookingId}`)}
                  Icon={HiArrowDownOnSquare}
                  name="Check in"
                />
              )}

              <Modal.Open opens="confirm-delete">
                <Menu.Button Icon={HiOutlineTrash} name="Delete booking" />
              </Modal.Open>
            </Menu.ButtonGroup>
          </TableData>

          <Modal.Window name="confirm-delete">
            <ConfirmDelete
              id={bookingId}
              deleteFun={deleteBooking}
              disabled={isDeleting}
              resourceName="Booking"
            />
          </Modal.Window>
        </Table.Row>
      </Menu>
    </Modal>
  );
}

export default BookingRow;
