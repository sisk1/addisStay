import supabase from "./supabase";

import { PAGE_SIZE } from "../utils/constants";
import { getToday } from "../utils/helpers";

export async function getBookings({ filter, sortBy, page }) {
  let query = supabase
    .from("bookings")
    .select("*, accommodations(name), guests(fullName, email)", {
      count: "exact",
    });

  // FILTER
  if (filter) {
    const { field, method, value } = filter;
    query = query[method](field, value);
  }
  // SORTING
  if (sortBy) {
    const { field, direction } = sortBy;
    query = query.order(field, {
      ascending: direction === "asc",
    });
  }

  // PAGINATION
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = page * PAGE_SIZE - 1;

    query = query.range(from, to);
  }

  const { data, count, error } = await query;

  if (error) throw new Error("Could not get Bookings. " + error.message);

  return { data, count };
}

export async function getBooking(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, accommodations(*), guests(*)")
    .eq("id", id)
    .single();

  if (error) throw new Error(`Could not get Booking #${id} ` + error.message);

  return data;
}

export async function updateBooking(id, obj) {
  const { data, error } = await supabase
    .from("bookings")
    .update(obj)
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error("Could not update booking. " + error.message);

  return data;
}

export async function deleteBooking(id) {
  const { data, error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error("Could not delete booking." + error.message);

  return data;
}

export async function getBookingAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("created_at, totalPrice")
    .gte("created_at", date)
    .lte("created_at", getToday());

  if (error) throw new Error("Could not get bookings: " + error.message);

  return data;
}

export async function getStaysAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName)")
    .gte("startDate", date)
    .lte("startDate", getToday());

  if (error) throw new Error("Could not get stays: " + error.message);

  return data;
}

export async function getTodayActivity() {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName)")
    .or(
      `and(status.eq.unconfirmed,startDate.eq.${getToday()}),and(status.eq.checked-in,endDate.eq.${getToday()})`,
    )
    .order("created_at");

  if (error)
    throw new Error("Could not get today activities: " + error.message);

  return data;
}
