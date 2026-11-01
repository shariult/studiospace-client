import React, { ComponentPropsWithoutRef } from "react";
import FormGroup from "../form/FormGroup";
import Link from "next/link";

type UserFormProps = {
  className?: string;
} & ComponentPropsWithoutRef<"form">;

function UserForm(props: UserFormProps) {
  const { className, ...rest } = props;

  return (
    <form className={`space-y-3 ${className ? className : ""}`} {...rest}>
      <FormGroup labelText="Email" errorText="Wrong Credentials">
        <input
          type="email"
          name="email"
          className="input w-full"
          placeholder="you@example.com"
          // required
        />
      </FormGroup>

      <FormGroup
        labelText="Password"
        errorText="Wrong Credentials"
        labelExtraEl={
          <Link href="#" className="link link-hover text-xs text-gray-700">
            Forgot Password?
          </Link>
        }
      >
        <input
          type="password"
          placeholder="••••••"
          required
          className="input input-bordered w-full"
        />
      </FormGroup>

      <button className="btn bg-primary text-primary-content hover:bg-primary-hover w-full">
        Login
      </button>
    </form>
  );
}

export default UserForm;
