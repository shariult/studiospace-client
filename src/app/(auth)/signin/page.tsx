import React from "react";
import { GoogleSvg } from "@/components/SVGIcons";
import UserForm from "@/components/ui/user/UserForm";

function SignInPage() {
  return (
    <section className="max-w-md mx-auto px-6 py-20">
      <div className="card border border-base-300 shadow-lg py-6">
        <div className="card-body">
          <h1 className="text-3xl font-extrabold text-center">Welcome back</h1>
          <p className="text-center opacity-70 -mt-2 mb-4">
            Log in to book and manage studios.
          </p>
          <UserForm />

          <div className="divider my-2">OR</div>

          <button className="btn btn-outline mb-4">
            <GoogleSvg className="w-4" />
            Continue with Google
          </button>

          <p className="text-center text-sm">
            <span className="text-gray-500">New here?</span>&nbsp;
            <a
              href="register.html"
              className="link no-underline hover:underline"
            >
              Create an account
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignInPage;
