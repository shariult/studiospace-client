"use client";

import React, { ComponentPropsWithoutRef, useState } from "react";
import {
  PiCalendarBlank,
  PiClock,
  PiUsers,
  PiNotePencil,
} from "react-icons/pi";
import FormGroup from "@/components/ui/form/FormGroup";
import { formatPrice } from "@/lib/utils";
import { bookingStore } from "@/lib/bookingActions";
import { TBookingInput } from "@/types";
import toast from "react-hot-toast";
import { authClient } from "@/lib/authClient";
import Link from "next/link";

type BookingFormProps = {
  title: string;
  hourlyRate: number;
  deposit: number;
  studioId: string;
  className?: string;
  ref?: React.Ref<HTMLDialogElement>;
} & Omit<ComponentPropsWithoutRef<"dialog">, "title">;

const toMinutes = (time: string) => {
  const [h, m] = time.split(":").map((item) => Number(item));
  return h * 60 + m;
};

function BookingForm(props: BookingFormProps) {
  const { data } = authClient.useSession();

  const { title, hourlyRate, deposit, studioId, className, ref, ...rest } =
    props;
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const today = new Date().toLocaleDateString("en-CA");

  const hasBothTimes = startTime && endTime ? true : false;
  const isRangeValid =
    hasBothTimes && toMinutes(endTime) > toMinutes(startTime);
  const timeError =
    hasBothTimes && !isRangeValid ? "End time must be after start time" : "";

  const hours = isRangeValid
    ? (toMinutes(endTime) - toMinutes(startTime)) / 60
    : 0;
  const subtotal = hours * hourlyRate;
  const total = subtotal + deposit;

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isRangeValid) return;

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    const data: TBookingInput = {
      date: formData.get("date") as string,
      startTime: formData.get("startTime") as string,
      endTime: formData.get("endTime") as string,
      expectedCrew: Number(formData.get("expectedCrew")),
      notes: formData.get("notes") as string,
      status: "pending",
      studioId,
      hours,
      subtotal,
      deposit,
      total,
    };

    const res = await bookingStore(data);
    if (res.isSuccess) {
      formEl.reset();
      setStartTime("");
      setEndTime("");
      toast.success("Booking request submitted!");
      formEl.closest("dialog")?.close();
    }
  }

  const handleReset = () => {
    setStartTime("");
    setEndTime("");
  };

  return (
    <dialog
      ref={ref}
      className={`modal ${className ? className : ""}`}
      {...rest}
    >
      {!data && (
        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-md">
          <h3 className="heading-3 mb-2">Alert</h3>
          <p className="mb-10">Please Sign In to book this studio!</p>

          <div className="modal-action mt-0 flex items-center justify-end gap-3 pt-3 border-t border-t-gray-200 dark:border-t-gray-700">
            <form method="dialog">
              <button className="btn btn-ghost btn-sm">Cancel</button>
            </form>
            <Link href={"/signin"} className="btn btn-primary btn-sm">
              Sign In
            </Link>
          </div>
        </div>
      )}
      {data && (
        <>
          <div className="modal-box max-w-lg space-y-6">
            {/* Title + rate */}
            <div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-1">
                <span className="text-2xl font-semibold">
                  {formatPrice(hourlyRate)}
                </span>
                <span className="text-base-content/70"> / hour</span>
              </p>
            </div>

            {/* Form */}
            <form
              id="booking-form"
              className="space-y-5"
              onSubmit={handleSubmit}
              onReset={handleReset}
            >
              <FormGroup labelText="Date" errorText={""}>
                <label className="input w-full">
                  <PiCalendarBlank className="opacity-50" />
                  <input type="date" name="date" min={today} required />
                </label>
              </FormGroup>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormGroup labelText="Start Time" errorText={""}>
                  <label className="input w-full">
                    <PiClock className="opacity-50" />
                    <input
                      type="time"
                      name="startTime"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      required
                    />
                  </label>
                </FormGroup>

                <FormGroup labelText="End Time" errorText={timeError}>
                  <label className="input w-full">
                    <PiClock className="opacity-50" />
                    <input
                      type="time"
                      name="endTime"
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                      required
                    />
                  </label>
                </FormGroup>
              </div>

              <FormGroup labelText="Expected Crew" errorText={""}>
                <label className="input w-full">
                  <PiUsers className="opacity-50" />
                  <input
                    type="number"
                    name="expectedCrew"
                    min={1}
                    placeholder="Number of people"
                    required
                  />
                </label>
              </FormGroup>

              <FormGroup labelText="Notes" errorText={""}>
                <label className="textarea w-full">
                  <PiNotePencil className="opacity-50" />
                  <textarea
                    name="notes"
                    rows={3}
                    placeholder="Equipment, setup needs, or anything the host should know..."
                  />
                </label>
              </FormGroup>
            </form>

            {/* Calculation */}
            <dl className="space-y-2 text-sm rounded-box bg-base-200 p-4">
              <div className="flex justify-between">
                <dt className="text-base-content/70">
                  {formatPrice(hourlyRate)} × {hours.toFixed(2)} hr
                </dt>
                <dd>{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-base-content/70">Refundable deposit</dt>
                <dd>{formatPrice(deposit)}</dd>
              </div>
              <div className="flex justify-between border-t border-base-300 pt-3 text-base font-semibold">
                <dt>Total due</dt>
                <dd>{formatPrice(total)}</dd>
              </div>
            </dl>

            {/* Actions */}
            <div className="modal-action mt-0 flex items-center justify-end gap-3">
              <form method="dialog">
                <button className="btn btn-ghost">Cancel</button>
              </form>
              <button
                type="submit"
                form="booking-form"
                className="btn btn-primary"
              >
                Request Booking
              </button>
            </div>
          </div>

          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </>
      )}
    </dialog>
  );
}

export default BookingForm;
