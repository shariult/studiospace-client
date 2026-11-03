"use client";

import { studioDestroy } from "@/lib/studioActions";
import { TStudio } from "@/types";
import { redirect } from "next/navigation";
import React, { ComponentPropsWithoutRef } from "react";
import toast from "react-hot-toast";
import { PiTrash } from "react-icons/pi";

type StudioDeleteProps = {
  data: TStudio;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"button">;

function StudioDelete(props: StudioDeleteProps) {
  const { data, className, children, ...rest } = props;

  async function handleDelete(sId: string) {
    const res = await studioDestroy(sId);
    if (res.isSuccess) {
      toast.success("Listing Deleted Successfully!");
      redirect("/my-listings");
    }
  }
  return (
    <>
      <button
        className={`btn btn-ghost btn-square btn-sm tooltip text-error text-xl ${className ? className : ""}`}
        onClick={() =>
          (
            document.getElementById(`${data._id}`) as HTMLDialogElement | null
          )?.showModal()
        }
      >
        <PiTrash />
      </button>
      <dialog id={`${data._id}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{data.title}</h3>
          <p className="py-4">Are you sure you want to delete listing?</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
            <button
              className="btn btn-fill-primary"
              onClick={() => handleDelete(data._id)}
            >
              <PiTrash /> Delete
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default StudioDelete;
