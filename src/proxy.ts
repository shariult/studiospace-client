import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/userActions";

export async function proxy(req: NextRequest) {
  const session = await getCurrentUser();

  if (!session) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
