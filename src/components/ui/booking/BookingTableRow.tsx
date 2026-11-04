import React, { ComponentPropsWithoutRef } from "react";
import StudioCell from "../table/StudioCell";
import { TBooking, TBookingStatus } from "@/types";
import { formatDate, formatPrice } from "@/lib/utils";
import { studioShow } from "@/lib/studioActions";
import BookingTableActions from "./BookingTableAction";

type BookingTableRowProps = {
  item: TBooking;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"tr">;

const statusBadge: Record<TBookingStatus, string> = {
  pending: "badge-warning",
  approved: "badge-success",
  rejected: "badge-error",
  cancelled: "badge-ghost",
};

async function BookingTableRow(props: BookingTableRowProps) {
  const { item, className, children, ...rest } = props;

  const res = await studioShow(item.studioId);

  if (res.isSuccess) {
    const studio = res.data;

    return (
      <tr {...rest}>
        <td className="min-w-60">
          <StudioCell
            imageUrl={studio.imageUrl}
            title={studio.title}
            address={studio.address}
          />
        </td>

        <td>
          <div className="font-medium min-w-30">{formatDate(item.date)}</div>
          <div className="text-sm opacity-50">
            {item.startTime} – {item.endTime}
          </div>
        </td>

        <td>
          <span
            className={`badge badge-sm capitalize ${statusBadge[item.status]}`}
          >
            {item.status}
          </span>
        </td>

        <td>{formatPrice(item.total)}</td>

        <td>
          <BookingTableActions bookingData={item} studioData={studio} />
        </td>
      </tr>
    );
  }
}

export default BookingTableRow;
