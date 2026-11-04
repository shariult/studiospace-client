import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/authActions";

export async function proxy(req: NextRequest) {
  const session = await getCurrentUser();

  if (!session) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/add-studio/:path*",
    "/studios/edit/:path*",
    "/my-bookings/:path*",
    "/my-listings/:path*",
  ],
};
