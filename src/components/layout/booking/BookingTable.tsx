import React, { ComponentPropsWithoutRef } from "react";
import { TBooking } from "@/types";
import Container from "@/components/ui/common/Container";
import BookingTableRow from "@/components/ui/booking/BookingTableRow";

type BookingTableProps = {
  bookings: TBooking[];
  className?: string;
} & ComponentPropsWithoutRef<"section">;

function BookingTable(props: BookingTableProps) {
  const { bookings, className, ...rest } = props;

  return (
    <Container
      boxClassName={`overflow-x-auto rounded-box border border-base-content/5 bg-base-100 ${className ? className : ""}`}
      {...rest}
    >
      <table className="table">
        <thead>
          <tr>
            <th>Studio</th>
            <th>Time</th>
            <th>Approval</th>
            <th>Price</th>
            <th className="text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length === 0 && (
            <tr>
              <td colSpan={5} className="py-10 text-center opacity-60">
                You have no bookings yet.
              </td>
            </tr>
          )}

          {bookings.map((item) => (
            <BookingTableRow item={item} key={item._id} />
          ))}
        </tbody>
      </table>
    </Container>
  );
}

export default BookingTable;
