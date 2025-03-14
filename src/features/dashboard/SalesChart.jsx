import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";

import { useDarkMode } from "../../contexts/DarkModeContext";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import DashboardBox from "./DashboardBox";

function SalesChart({ numDays, bookings }) {
  const { isDarkMode } = useDarkMode();
  const colors = isDarkMode
    ? {
        totalSales: { stroke: "#4f46e5", fill: "#4f46e5" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
        text: "#374151",
        background: "#fff",
      };

  const allDays = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });
  const data = allDays.map((date) => {
    return {
      label: format(date, "MMM dd"),
      totalSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, cur) => acc + cur.totalPrice, 0),
    };
  });

  return (
    <div className="col-span-2">
      <DashboardBox>
        <Row>
          <Heading as="h5">Sales from May 25 2023 — May 31 2023</Heading>
          <ResponsiveContainer height={300} width="100%">
            <AreaChart data={data}>
              <XAxis
                dataKey="label"
                tick={{ fill: colors.text }}
                tickLine={{ stroke: colors.text }}
              />
              <YAxis
                unit="$"
                tick={{ fill: colors.text }}
                tickLine={{ stroke: colors.text }}
              />
              <CartesianGrid strokeDasharray="4" />
              <Tooltip contentStyle={{ backgroundColor: colors.background }} />
              <Area
                dataKey="totalSales"
                fill={colors.totalSales.fill}
                stroke={colors.totalSales.stroke}
                type="monotone"
                strokeWidth={2}
                name="Total Sales"
                unit="$"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Row>
      </DashboardBox>
    </div>
  );
}

export default SalesChart;
