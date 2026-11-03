"use client";

import { authClient } from "@/lib/authClient";
import { redirect } from "next/navigation";
import React, { ComponentPropsWithoutRef, useState } from "react";
import toast from "react-hot-toast";
import FormGroup from "../form/FormGroup";
import { User } from "better-auth";

type ProfileFormProps = {
  data: User;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"form">;

function ProfileForm(props: ProfileFormProps) {
  const { data: currData, className, children, ...rest } = props;
  const [formData, setFormData] = useState({
    name: currData.name ?? "",
    image: currData.image ?? "",
  });

  function inputChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function profileUpdateHandler(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    const { data, error } = await authClient.updateUser({
      name: formData.get("name") as string,
      image: formData.get("image") as string,
    });

    if (error) {
      toast.error(error.message ?? "Something went wrong!");
    }
    toast.success("Profile updated successfully");
    redirect("/");
  }

  return (
    <form
      onSubmit={profileUpdateHandler}
      className={`flex flex-col gap-6 ${className ? className : ""}`}
      {...rest}
    >
      <FormGroup labelText="Name" errorText="">
        <input
          type="text"
          name="name"
          className="input w-full"
          placeholder="Example: Abdur Rahman"
          value={formData.name}
          onChange={inputChangeHandler}
        />
      </FormGroup>
      <FormGroup labelText="Profile Image URL" errorText="">
        <input
          type="text"
          name="image"
          className="input w-full"
          placeholder="Example: https://example.com/1.jpg"
          value={formData.image}
          onChange={inputChangeHandler}
        />
      </FormGroup>

      <div className="flex flex-col">
        <button className="btn btn-neutral hover:bg-primary border-none">
          Update
        </button>
      </div>
    </form>
  );
}

export default ProfileForm;
