"use client";

import React from "react";
import { GoogleSvg } from "@/components/SVGIcons";
import { authClient } from "@/lib/authClient";
import toast from "react-hot-toast";

function SocialSignIn() {
  async function socialSignIndHandler(provider: "google") {
    const { data, error } = await authClient.signIn.social({
      provider,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message ?? "Something went wrong!");
      return;
    }

    toast.loading(`Redirecting to your ${provider.toUpperCase()} account!`);
    // redirect("/");
  }

  return (
    <button
      className="btn btn-outline mb-4"
      onClick={() => socialSignIndHandler("google")}
    >
      <GoogleSvg className="w-4" />
      Continue with Google
    </button>
  );
}

export default SocialSignIn;
