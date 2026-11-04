import React from "react";
import UserForm from "@/components/ui/user/UserForm";
import SocialSignIn from "@/components/ui/user/SocialSignIn";
import { getCurrentUser } from "@/lib/authActions";
import { redirect } from "next/navigation";

async function SignInPage() {
  const session = await getCurrentUser();
  if (session) {
    redirect("/");
  }

  return (
    <section className="max-w-md mx-auto px-6 py-20">
      <div className="card border border-base-300 shadow-lg py-6">
        <div className="card-body">
          <h2 className="text-3xl font-extrabold text-center capitalize">
            Welcome back
          </h2>
          <p className="text-center opacity-70 -mt-2 mb-4">
            Log in to book and manage studios.
          </p>
          <UserForm type="signin" />

          <div className="divider my-2">OR</div>

          <SocialSignIn />

          <p className="text-center text-sm">
            <span className="text-gray-500">Don&apos;t Have an Account?</span>
            &nbsp;
            <a href="/signup" className="link no-underline hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignInPage;
