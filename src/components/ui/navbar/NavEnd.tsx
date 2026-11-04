"use client";

import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import {
  PiPlusCircle,
  PiStorefront,
  PiCalendarCheck,
  PiUserCircle,
  PiSignOut,
} from "react-icons/pi";
import { authClient } from "@/lib/authClient";
import UserDemoImg from "../user/UserDemoImg";
import Loading from "@/components/ui/common/Loading";
import NavToggle from "./NavToggle";

type NavEndProps = {
  className?: string;
} & ComponentPropsWithoutRef<"div">;

function NavEnd(props: NavEndProps) {
  const { data, error, isPending } = authClient.useSession();
  const { className, ...rest } = props;

  async function signOutHandler() {
    await authClient.signOut();
    redirect("/");
  }

  if (isPending) {
    return (
      <div className="navbar-end">
        <Loading className="flex gap-2 items-center" />
      </div>
    );
  }

  if (!data && !isPending) {
    return (
      <div className={`navbar-end ${className ? className : ""}`} {...rest}>
        <div className={`flex flex-wrap sm:flex-nowrap gap-1 `}>
          <Link href="/signup" className="btn btn-ghost btn-sm md:btn-md">
            Sign Up
          </Link>
          <Link
            href="/signin"
            className="btn btn-sm md:btn-md bg-primary text-primary-content hover:bg-primary-hover"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {!isPending && data && (
        <div className={`navbar-end ${className ? className : ""}`} {...rest}>
          <NavToggle />

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost avatar">
              <div className="w-10 rounded-full">
                {(!data?.user.image ||
                  !data?.user.image.startsWith("https://")) && (
                  <UserDemoImg name={data?.user.name ?? "U"} />
                )}
                {data?.user.image &&
                  data?.user.image.startsWith("https://") && (
                    <Image
                      alt="Tailwind CSS Navbar component"
                      src={data?.user.image}
                      width="40"
                      height="40"
                    />
                  )}
              </div>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="mb-2 md:mb-4 rounded-lg">
                <span className="text-xl py-0 hover:bg-white hover:cursor-auto active:text-gray-900">
                  {data?.user.name}
                </span>
                <span className="text-right text-gray-500 -mt-1 hover:bg-white hover:cursor-auto active:text-gray-900">
                  {data?.user.email}
                </span>
              </li>

              <li>
                <Link href="/add-studio" className="text-base">
                  <PiPlusCircle /> Add Studio
                </Link>
              </li>
              <li>
                <Link href="/my-bookings" className="text-base">
                  <PiCalendarCheck /> My Bookings
                </Link>
              </li>
              <li>
                <Link href="/my-listings" className="text-base">
                  <PiStorefront /> My Studios
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-base">
                  <PiUserCircle /> My Profile
                </Link>
              </li>
              <li>
                <button
                  onClick={() => signOutHandler()}
                  className="text-base text-red-500"
                >
                  <PiSignOut /> Sign Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default NavEnd;
