"use client";

import { studioSeed } from "@/lib/studioActions";
import { redirect } from "next/navigation";
import React, { ComponentPropsWithoutRef } from "react";
import toast from "react-hot-toast";

type StudioResetButtonProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"button">;

function StudioResetButton(props: StudioResetButtonProps) {
  const { className, children, ...rest } = props;

  async function handleStudioSeed() {
    const res = await studioSeed();
    if (res.isSuccess) {
      toast.success("Studio data reset successful!");
      redirect("/");
    }
  }

  return (
    <>
      <button
        className={`btn btn-neutral btn-sm border-none hover:bg-primary ${className ? className : ""}`}
        onClick={() =>
          (
            document.getElementById(`studio-reset`) as HTMLDialogElement | null
          )?.showModal()
        }
        {...rest}
      >
        Reset Data
      </button>
      <dialog id={`studio-reset`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-2">Studio Data Reset</h3>
          <p className="mb-4">Are you sure you want to Reset Studio Data?</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
            <button className="btn btn-fill-primary" onClick={handleStudioSeed}>
              Reset Data
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default StudioResetButton;
