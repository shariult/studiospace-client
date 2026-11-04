import React from "react";
import UserForm from "@/components/ui/user/UserForm";
import { GoogleSvg } from "@/components/ui/common/SVGIcons";
import Link from "next/link";
import SocialSignIn from "@/components/ui/user/SocialSignIn";
import { getCurrentUser } from "@/lib/authActions";
import { redirect } from "next/navigation";

async function SignUpPage() {
  const session = await getCurrentUser();
  if (session) {
    redirect("/");
  }

  return (
    <section className="max-w-md mx-auto px-6 py-20">
      <div className="card border border-base-300 shadow-lg py-6">
        <div className="card-body">
          <h2 className="text-3xl font-extrabold text-center capitalize">
            Create your account
          </h2>
          <p className="text-center opacity-70 -mt-2 mb-4">
            Join StudioSpace in under a minute.
          </p>
          <UserForm type="signup" />

          <div className="divider my-2">OR</div>

          <SocialSignIn />

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
