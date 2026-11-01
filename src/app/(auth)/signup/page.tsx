import React from "react";
import UserForm from "@/components/ui/user/UserForm";
import { GoogleSvg } from "@/components/SVGIcons";
import Link from "next/link";

function SignUpPage() {
  return (
    <section className="max-w-md mx-auto px-6 py-20">
      <div className="card border border-base-300 shadow-lg py-6">
        <div className="card-body">
          <h2 className="text-3xl font-extrabold text-center">
            Create your account
          </h2>
          <p className="text-center opacity-70 -mt-2 mb-4">
            Join StudioSpace in under a minute.
          </p>
          <UserForm type="signup" />

          <div className="divider my-2">OR</div>

          <button className="btn btn-outline mb-4">
            <GoogleSvg className="w-4" />
            Continue with Google
          </button>

          <p className="text-center text-sm">
            <span className="text-gray-500">Already have an account?</span>
            &nbsp;
            <Link href="/signin" className="link no-underline hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignUpPage;
