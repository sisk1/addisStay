import { add } from "date-fns";

function fromToday(numDays, withTime = false) {
  const date = add(new Date(), { days: numDays });
  if (!withTime) date.setUTCHours(0, 0, 0, 0);
  return date.toISOString().slice(0, -1); // Remove the trailing 'Z'
}

export const bookings = [
  {
    created_at: fromToday(-33, true),
    startDate: fromToday(8),
    endDate: fromToday(18),
    isPaid: false,
    accom_id: 1,
    guest_id: 2,
  },
  {
    created_at: fromToday(-40, true),
    startDate: fromToday(-30),
    endDate: fromToday(32),
    isPaid: true,
    accom_id: 2,
    guest_id: 3,
  },
  {
    created_at: fromToday(-25, true),
    startDate: fromToday(-25),
    endDate: fromToday(1),
    isPaid: true,
    accom_id: 3,
    guest_id: 4,
  },
  {
    created_at: fromToday(-20, true),
    startDate: fromToday(-12),
    endDate: fromToday(0),
    isPaid: false,
    accom_id: 4,
    guest_id: 5,
  },
  {
    created_at: fromToday(-30, true),
    startDate: fromToday(7),
    endDate: fromToday(16),
    isPaid: true,
    accom_id: 5,
    guest_id: 6,
  },
  {
    created_at: fromToday(-50, true),
    startDate: fromToday(18),
    endDate: fromToday(24),
    isPaid: false,
    accom_id: 6,
    guest_id: 7,
  },
  {
    created_at: fromToday(-15, true),
    startDate: fromToday(-9),
    endDate: fromToday(15),
    isPaid: true,
    accom_id: 7,
    guest_id: 8,
  },
  {
    created_at: fromToday(-22, true),
    startDate: fromToday(-6),
    endDate: fromToday(1),
    isPaid: false,
    accom_id: 8,
    guest_id: 9,
  },
  {
    created_at: fromToday(-18, true),
    startDate: fromToday(35),
    endDate: fromToday(48),
    isPaid: true,
    accom_id: 9,
    guest_id: 10,
  },
  {
    created_at: fromToday(-35, true),
    startDate: fromToday(-12),
    endDate: fromToday(6),
    isPaid: false,
    accom_id: 10,
    guest_id: 11,
  },
  {
    created_at: fromToday(-10, true),
    startDate: fromToday(-8),
    endDate: fromToday(40),
    isPaid: true,
    accom_id: 11,
    guest_id: 12,
  },
  {
    created_at: fromToday(-5, true),
    startDate: fromToday(46),
    endDate: fromToday(75),
    isPaid: false,
    accom_id: 12,
    guest_id: 13,
  },
  {
    created_at: fromToday(-40, true),
    startDate: fromToday(-11),
    endDate: fromToday(16),
    isPaid: true,
    accom_id: 13,
    guest_id: 14,
  },
  {
    created_at: fromToday(-25, true),
    startDate: fromToday(-7),
    endDate: fromToday(-2),
    isPaid: false,
    accom_id: 14,
    guest_id: 15,
  },
  {
    created_at: fromToday(-35, true),
    startDate: fromToday(-9),
    endDate: fromToday(21),
    isPaid: true,
    accom_id: 15,
    guest_id: 16,
  },
  {
    created_at: fromToday(-27, true),
    startDate: fromToday(20),
    endDate: fromToday(35),
    isPaid: false,
    accom_id: 16,
    guest_id: 17,
  },
  {
    created_at: fromToday(-14, true),
    startDate: fromToday(-6),
    endDate: fromToday(0),
    isPaid: true,
    accom_id: 17,
    guest_id: 18,
  },
  {
    created_at: fromToday(-30, true),
    startDate: fromToday(-7),
    endDate: fromToday(-4),
    isPaid: false,
    accom_id: 18,
    guest_id: 19,
  },
  {
    created_at: fromToday(-20, true),
    startDate: fromToday(-12),
    endDate: fromToday(10),
    isPaid: true,
    accom_id: 19,
    guest_id: 20,
  },
  {
    created_at: fromToday(-50, true),
    startDate: fromToday(-9),
    endDate: fromToday(-6),
    isPaid: false,
    accom_id: 20,
    guest_id: 21,
  },
  // 10 New Bookings with Random accom_id
  {
    created_at: fromToday(-45, true),
    startDate: fromToday(-19),
    endDate: fromToday(-5),
    isPaid: true,
    accom_id: 1,
    guest_id: 22,
  },
  {
    created_at: fromToday(-28, true),
    startDate: fromToday(-11),
    endDate: fromToday(-2),
    isPaid: false,
    accom_id: 2,
    guest_id: 23,
  },
  {
    created_at: fromToday(-20, true),
    startDate: fromToday(0),
    endDate: fromToday(20),
    isPaid: true,
    accom_id: 3,
    guest_id: 24,
  },
  {
    created_at: fromToday(-35, true),
    startDate: fromToday(-8),
    endDate: fromToday(12),
    isPaid: false,
    accom_id: 10,
    guest_id: 25,
  },
  {
    created_at: fromToday(-27, true),
    startDate: fromToday(16),
    endDate: fromToday(19),
    isPaid: true,
    accom_id: 5,
    guest_id: 26,
  },
  {
    created_at: fromToday(-40, true),
    startDate: fromToday(-10),
    endDate: fromToday(21),
    isPaid: false,
    accom_id: 12,
    guest_id: 27,
  },
  {
    created_at: fromToday(-22, true),
    startDate: fromToday(-7),
    endDate: fromToday(-1),
    isPaid: true,
    accom_id: 7,
    guest_id: 28,
  },
  {
    created_at: fromToday(-17, true),
    startDate: fromToday(25),
    endDate: fromToday(33),
    isPaid: false,
    accom_id: 11,
    guest_id: 29,
  },
  {
    created_at: fromToday(-30, true),
    startDate: fromToday(18),
    endDate: fromToday(50),
    isPaid: true,
    accom_id: 14,
    guest_id: 30,
  },
];
