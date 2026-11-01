import React, { ComponentPropsWithoutRef } from "react";
import FormGroup from "../form/FormGroup";
import Link from "next/link";

type UserFormProps = {
  type: "signin" | "signup";
  className?: string;
} & ComponentPropsWithoutRef<"form">;

function UserForm(props: UserFormProps) {
  const { type, className, ...rest } = props;

  return (
    <form className={`space-y-4 ${className ? className : ""}`} {...rest}>
      {type === "signup" && (
        <>
          <FormGroup labelText="Name" errorText="">
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Abdur Rahman"
            />
          </FormGroup>

          <FormGroup labelText="Profile Img" errorText="">
            <input
              type="text"
              name="image"
              className="input w-full"
              placeholder="https://picsum.photos/200"
            />
          </FormGroup>
        </>
      )}

      <FormGroup labelText="Email" errorText="">
        <input
          type="email"
          name="email"
          className="input w-full"
          placeholder="you@example.com"
        />
      </FormGroup>

      <FormGroup
        labelText="Password"
        errorText=""
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
          placeholder="Your password"
          required
          className="input input-bordered w-full"
        />
        <p className="text-xs text-gray-500">
          Min 6 characters with one Uppercase and one Lowercase letter.
        </p>
      </FormGroup>

      <button className="btn bg-primary text-primary-content hover:bg-primary-hover w-full">
        {type === "signin" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
}

export default UserForm;
