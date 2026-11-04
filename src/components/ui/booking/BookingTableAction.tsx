"use client";

import { bookingDestroy } from "@/lib/bookingActions";
import { TBooking, TStudio } from "@/types";
import { redirect } from "next/navigation";
import React, { ComponentPropsWithoutRef } from "react";
import toast from "react-hot-toast";
import { PiReceipt, PiXCircle } from "react-icons/pi";

type BookingTableActionsProps = {
  bookingData: TBooking;
  studioData: TStudio;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function BookingTableActions(props: BookingTableActionsProps) {
  const { bookingData, studioData, className, children, ...rest } = props;

  async function handleCancel(id: string) {
    const res = await bookingDestroy(id);
    if (res.isSuccess) {
      toast.success("Booking cancelled Successfully!");
      redirect("/my-bookings");
    }
  }

  const handleReceipt = (id: string) => {
    console.log("receipt", id);
  };
  return (
    <div
      className={`flex justify-end gap-1 ${className ? className : ""}`}
      {...rest}
    >
      {/* <button
        type="button"
        className="btn btn-ghost btn-square btn-sm tooltip text-xl"
        data-tip="Receipt"
        aria-label="Receipt"
        disabled={bookingData.status !== "approved"}
        onClick={() => handleReceipt(bookingData._id)}
      >
        <PiReceipt />
      </button> */}

      <button
        className={`btn btn-ghost btn-square btn-sm tooltip text-error text-4xl`}
        disabled={bookingData.status !== "pending"}
        onClick={() =>
          (
            document.getElementById(
              `${bookingData._id}`,
            ) as HTMLDialogElement | null
          )?.showModal()
        }
      >
        <PiXCircle />
      </button>
      <dialog id={`${bookingData._id}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-2">{studioData.title}</h3>
          <p className="mb-4">
            Are you sure you want to cancel the Booking on{" "}
            <strong>
              {bookingData.date} from {bookingData.startTime} to{" "}
              {bookingData.endTime}{" "}
            </strong>
            ?
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
            <button
              className="btn btn-fill-primary"
              onClick={() => handleCancel(bookingData._id)}
            >
              <PiXCircle /> Cancel
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default BookingTableActions;
