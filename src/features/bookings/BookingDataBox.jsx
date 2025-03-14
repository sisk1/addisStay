import { HiOutlineCurrencyDollar, HiOutlineFlag } from "react-icons/hi";
import { HiOutlineBuildingOffice, HiOutlineUserPlus } from "react-icons/hi2";
import { format, isToday } from "date-fns";

import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";

import PaymentProof from "./PaymentProof";

function BookingDataBox({ booking }) {
  const {
    // id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    totalPrice,
    isPaid,
    accommodations: { name: accomName, type, rating },
    guests: {
      fullName: guestName,
      email,
      phoneNumber,
      nationality,
      numAdults,
      numChildren,
      paymentProofUrl,
    },
  } = booking;

  return (
    <div className="rounded-md border border-gray-200 bg-gray-100 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      {/* HEADER */}
      <header className="flex items-center justify-between rounded-t-md bg-indigo-500 px-10 py-6 text-lg font-medium text-indigo-50">
        <div className="flex items-center gap-4">
          <span className="text-3xl">
            <HiOutlineBuildingOffice />
          </span>
          <div className="flex items-center gap-6">
            <p>
              {numNights} nights in Accommodation {accomName}
            </p>
            <div className="flex rounded-md bg-indigo-200 p-1 px-2 text-sm text-indigo-500">
              <span>{type}, &nbsp;</span>
              <span>{rating}*</span>
            </div>
          </div>
        </div>

        <div>
          {format(new Date(startDate), "EEE, MMM dd yyyy")} ({" "}
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </div>
      </header>

      {/* SECTION */}
      <section className="space-y-6 px-10 py-6">
        {/* GUEST INFO */}
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <p className="font-medium text-gray-800 dark:text-gray-100">
            {guestName}
          </p>
          <span>&bull;</span>
          <p>{email}</p>
          <span>&bull;</span>
          <p>{phoneNumber}</p>
        </div>

        {/* MORE GUEST INFO */}
        <div className="space-y-3 font-medium text-gray-800 dark:text-gray-100">
          <div className="flex items-center gap-3">
            <span className="text-2xl text-indigo-600">
              <HiOutlineUserPlus />
            </span>
            <p>
              {numAdults + numChildren} Guests ( {numAdults} Adults +{" "}
              {numChildren} Children )
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl text-indigo-600">
              <HiOutlineFlag />
            </span>
            <p>{nationality}</p>
          </div>
        </div>

        {/* PRICE */}
        <div
          className={`flex items-center justify-between rounded-md px-10 py-6 ${isPaid ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100" : "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100"}`}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">
              <HiOutlineCurrencyDollar />
            </span>
            <span className="font-medium">Total price</span>
            <span>{formatCurrency(totalPrice)}</span>
          </div>

          <div className="font-semibold uppercase">
            {isPaid ? "Paid" : <PaymentProof proofUrl={paymentProofUrl} />}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="flex justify-end px-10 pb-6 pt-2 text-sm text-gray-600 dark:text-gray-400">
        <p>Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}</p>
      </footer>
    </div>
  );
}

export default BookingDataBox;
