"use server";

import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { authClient } from "./authClient";

async function getCurrentUser() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session;
}

async function getTokenFromClient() {
  const { data } = await authClient.token();
  const token = data?.token;
  return token;
}

async function getTokenFromServer() {
  const jwtToken = await auth.api.getToken({
    headers: await headers(),
  });
  const token = jwtToken?.token;
  return token;
}

export { getCurrentUser, getTokenFromClient, getTokenFromServer };
