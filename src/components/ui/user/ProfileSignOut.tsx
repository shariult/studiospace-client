"use client";

import React from "react";
import { redirect } from "next/navigation";
import { authClient } from "@/lib/authClient";

function ProfileSignOut() {
  async function signOutHandler() {
    await authClient.signOut();
    redirect("/");
  }
  return (
    <div className="ml-auto">
      <button className="btn btn-fill-primary" onClick={signOutHandler}>
        Sign Out
      </button>
    </div>
  );
}

export default ProfileSignOut;
