"use client";

import { authClient } from "@/lib/authClient";
import { redirect } from "next/navigation";
import React, { ComponentPropsWithoutRef, useState } from "react";
import toast from "react-hot-toast";
import FormGroup from "../form/FormGroup";
import { email, string, User } from "better-auth";
import { isValidStr } from "@/lib/utils";

type ProfileFormProps = {
  data: User;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"form">;

type ProfileFormError = {
  name: string | undefined;
  image: string | undefined;
};

function ProfileForm(props: ProfileFormProps) {
  const { data: currData, className, children, ...rest } = props;
  const [formData, setFormData] = useState({
    name: currData.name ?? "",
    image: currData.image ?? "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState<ProfileFormError>();

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
    setIsLoading(true);
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    const formDataObj = {
      name: formData.get("name") as string,
      image: formData.get("image") as string,
    };

    const errObj = {
      name: !isValidStr(formDataObj.name, 1) ? "Enter a valid name" : undefined,
      image:
        !formDataObj.image.startsWith("https://") ||
        !isValidStr(formDataObj.image)
          ? "Invalid image URL"
          : undefined,
    };
    const hasError = Object.values(errObj).some((error) => error !== undefined);
    if (hasError) {
      setIsLoading(false);
      setFormError(errObj);
      return;
    }

    const { data, error } = await authClient.updateUser(formDataObj);
    setIsLoading(false);
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
      <FormGroup labelText="Name" errorText={formError?.name}>
        <input
          type="text"
          name="name"
          className="input w-full"
          placeholder="Example: Abdur Rahman"
          value={formData.name}
          onChange={inputChangeHandler}
          disabled={isLoading}
        />
      </FormGroup>
      <FormGroup labelText="Profile Image URL" errorText={formError?.image}>
        <input
          type="text"
          name="image"
          className="input w-full"
          placeholder="Example: https://example.com/1.jpg"
          value={formData.image}
          onChange={inputChangeHandler}
          disabled={isLoading}
        />
      </FormGroup>

      <div className="flex flex-col">
        <button
          className="btn btn-neutral hover:bg-primary border-none"
          disabled={isLoading}
        >
          Update
        </button>
      </div>
    </form>
  );
}

export default ProfileForm;
