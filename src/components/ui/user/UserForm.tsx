"use client";

import React, { ComponentPropsWithoutRef, useState } from "react";
import FormGroup from "../form/FormGroup";
import Link from "next/link";
import { delay, isValidEmail, isValidPassword, isValidStr } from "@/lib/utils";
import { authClient } from "@/lib/authClient";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

type UserFormProps = {
  type: "signin" | "signup";
  className?: string;
} & ComponentPropsWithoutRef<"form">;

type TFormError = {
  name: string | undefined;
  image: string | undefined;
  email: string | undefined;
  password: string | undefined;
};

function UserForm(props: UserFormProps) {
  const { type, className, ...rest } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState<TFormError>();

  async function handleUserForm(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    const formDataObj = {
      name: formData.get("name") as string,
      image: formData.get("imageUrl") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirm-password") as string,
    };

    if (type === "signin") {
      const { data, error } = await authClient.signIn.email({
        email: formDataObj.email,
        password: formDataObj.password,
      });
      setIsLoading(false);
      if (error) {
        toast.error(error.message ?? "Something went wrong!");
        return;
      }
      formEl.reset();
      toast.success("Sign In Successful!");
      redirect("/");
    }

    if (type === "signup") {
      const errObj = {
        name: !isValidStr(formDataObj.name, 1) ? "Invalid name" : undefined,
        image: !isValidStr(formDataObj.image, 7)
          ? "Invalid image URL"
          : undefined,
        email: !isValidEmail(formDataObj.email)
          ? "Email is invalid!"
          : undefined,
        password: !isValidPassword(formDataObj.password)
          ? "Password is invalid"
          : undefined,
      };
      if (formDataObj.password !== formDataObj.confirmPassword) {
        errObj.password = "Passwords do not match!";
      }
      if (!formDataObj.image.startsWith("https://")) {
        errObj.image = "Invalid image URL!";
      }
      const hasError = Object.values(errObj).some(
        (error) => error !== undefined,
      );
      if (hasError) {
        setIsLoading(false);
        setFormError(errObj);
        return;
      }

      const { data, error } = await authClient.signUp.email(formDataObj);
      setIsLoading(false);

      if (error) {
        toast.error(error.message ?? "Something went wrong!");
        return;
      }
      formEl.reset();
      toast.success("Sign Up Successful!");
      redirect("/");
    }
  }

  return (
    <form
      className={`space-y-4 ${className ? className : ""}`}
      {...rest}
      onSubmit={handleUserForm}
    >
      {type === "signup" && (
        <>
          <FormGroup labelText="Name" errorText={formError?.name}>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Abdur Rahman"
              disabled={isLoading}
            />
          </FormGroup>

          <FormGroup labelText="Profile Image URL" errorText={formError?.image}>
            <input
              type="text"
              name="imageUrl"
              className="input w-full"
              placeholder="https://picsum.photos/200"
              disabled={isLoading}
            />
          </FormGroup>
        </>
      )}

      <FormGroup labelText="Email" errorText={formError?.email}>
        <input
          type="email"
          name="email"
          className="input w-full"
          placeholder="you@example.com"
          disabled={isLoading}
        />
      </FormGroup>

      <FormGroup
        labelText="Password"
        errorText={formError?.password}
        labelExtraEl={
          type === "signin" && (
            <Link href="#" className="link link-hover text-xs text-gray-700">
              Forgot Password?
            </Link>
          )
        }
      >
        <input
          type="password"
          name="password"
          placeholder="Your password"
          className="input input-bordered w-full"
          disabled={isLoading}
        />
        <p className="text-xs text-gray-500">
          Min 6 characters with one Uppercase and one Lowercase letter.
        </p>
      </FormGroup>

      {type === "signup" && (
        <FormGroup labelText="Confirm Password" errorText={formError?.password}>
          <input
            type="password"
            name="confirm-password"
            placeholder="Confirm Your Password"
            className="input input-bordered w-full"
            disabled={isLoading}
          />
        </FormGroup>
      )}

      <button className="btn bg-primary text-primary-content hover:bg-primary-hover w-full">
        {isLoading && (
          <span className="loading loading-spinner loading-xs"></span>
        )}
        {type === "signin" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
}

export default UserForm;
