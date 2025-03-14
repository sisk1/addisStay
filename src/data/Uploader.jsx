import { useState } from "react";
import { isFuture, isPast, isToday } from "date-fns";

import { accoms } from "./data-accoms";
import { guests } from "./data.guests";
import { bookings } from "./data-bookings";

import supabase from "../services/supabase";
import { subtractDates } from "../utils/helpers";

import Button from "../ui/Button";

async function deleteAccoms() {
  const { error } = await supabase.from("accommodations").delete().gt("id", 0);
  if (error) console.log(error.message);
}

async function deleteBookings() {
  const { error } = await supabase.from("bookings").delete().gt("id", 0);
  if (error) console.log(error.message);
}

async function deleteGuests() {
  const { error } = await supabase.from("bookings").delete().gt("id", 0);
  if (error) console.log(error.message);
}

async function createAccoms() {
  const { error } = await supabase.from("accommodations").insert(accoms);
  if (error) console.log(error.message);
}

async function createGuests() {
  const { error } = await supabase.from("guests").insert(guests);
  if (error) console.log(error.message);
}

async function createBookings() {
  const { data: guestsIds } = await supabase
    .from("guests")
    .select("id")
    .order("id");
  const allGuestIds = guestsIds.map((guest) => guest.id);
  const { data: accomIds } = await supabase
    .from("accommodations")
    .select("id")
    .order("id");
  const allAccomIds = accomIds.map((accom) => accom.id);

  const finalBookings = bookings.map((booking) => {
    // Here relying on the order of cabins, as they don't have any ID yet
    const accom = accoms.at(booking.accom_id - 1);
    const numNights = subtractDates(booking.endDate, booking.startDate);
    const totalPrice = numNights * (accom.regularPrice - accom.discount);

    let status, isPaid;
    if (
      isPast(new Date(booking.endDate)) &&
      !isToday(new Date(booking.endDate))
    ) {
      status = "checked-out";
      isPaid = true;
    }
    if (
      isFuture(new Date(booking.startDate)) ||
      isToday(new Date(booking.startDate))
    ) {
      status = "unconfirmed";
      isPaid = false;
    }
    if (
      (isFuture(new Date(booking.endDate)) ||
        isToday(new Date(booking.endDate))) &&
      isPast(new Date(booking.startDate)) &&
      !isToday(new Date(booking.startDate))
    ) {
      status = "checked-in";
      isPaid = true;
    }
    return {
      ...booking,
      numNights,
      totalPrice,
      status,
      isPaid,
      guest_id: allGuestIds.at(booking.guest_id - 1),
      accom_id: allAccomIds.at(booking.accom_id - 1),
    };
  });

  console.log(finalBookings);

  const { error } = await supabase.from("bookings").insert(finalBookings);
  if (error) console.log(error.message);
}

function Uploader() {
  const [isLoading, setIsLoading] = useState();

  async function uploadAll() {
    setIsLoading(true);
    await deleteBookings();
    await deleteAccoms();
    await deleteGuests();

    await createAccoms();
    await createGuests();
    await createBookings();
    setIsLoading(false);
  }

  async function uploadBookings() {
    setIsLoading(true);
    await deleteBookings();
    await createBookings();
    setIsLoading(false);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-md bg-indigo-200 p-5 font-semibold text-indigo-800">
      <h2 className="text-lg text-indigo-600">SAMPLE DATA</h2>
      <Button onClick={uploadAll} disabled={isLoading} variation="wide">
        Upload All
      </Button>
      <Button onClick={uploadBookings} disabled={isLoading} variation="wide">
        Upload Bookings
      </Button>
    </div>
  );
}

export default Uploader;
