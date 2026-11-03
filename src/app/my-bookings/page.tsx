"use client";

import Container from "@/components/ui/common/Container";
import StudioCell from "@/components/ui/table/StudioCell";
import { formatDate, formatPrice } from "@/lib/utils";
import { TBooking, TBookingStatus } from "@/types";
import { PiReceipt, PiXCircle } from "react-icons/pi";

const bookings: TBooking[] = [
  {
    id: "b1",
    studio: {
      title: "Sunlight Photo Studio",
      address: "Banani, Dhaka",
      imageUrl: "https://placehold.co/96x96",
    },
    date: "2026-11-20",
    startTime: "10:00",
    endTime: "13:00",
    status: "pending",
    price: 220,
  },
];

const statusBadge: Record<TBookingStatus, string> = {
  pending: "badge-warning",
  approved: "badge-success",
  rejected: "badge-error",
  cancelled: "badge-ghost",
};

export default function MyBookingsPage() {
  const handleCancel = (id: string) => {
    if (!confirm("Cancel this booking?")) return;
    console.log("cancel", id);
  };

  const handleReceipt = (id: string) => {
    console.log("receipt", id);
  };

  return (
    <Container>
      <h1 className="mb-6 text-2xl font-semibold">My Bookings</h1>

      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
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
              <tr key={item.id}>
                <td>
                  <StudioCell
                    imageUrl={item.studio.imageUrl}
                    title={item.studio.title}
                    address={item.studio.address}
                  />
                </td>

                <td>
                  <div className="font-medium">{formatDate(item.date)}</div>
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

                <td>{formatPrice(item.price)}</td>

                <td>
                  <div className="flex justify-end gap-1">
                    <button
                      type="button"
                      className="btn btn-ghost btn-square btn-sm tooltip text-xl"
                      data-tip="Receipt"
                      aria-label="Receipt"
                      disabled={item.status !== "approved"}
                      onClick={() => handleReceipt(item.id)}
                    >
                      <PiReceipt />
                    </button>
                    <button
                      type="button"
                      className="btn btn-ghost btn-square btn-sm tooltip text-error text-xl"
                      data-tip="Cancel"
                      aria-label="Cancel"
                      disabled={item.status !== "pending"}
                      onClick={() => handleCancel(item.id)}
                    >
                      <PiXCircle />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
