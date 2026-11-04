import { TStudio } from "@/types";
import { sendRequest } from "./utils";
import { getTokenFromServer } from "./authActions";

async function studioIndex() {
  const data = await sendRequest<TStudio[]>("/studio");
  return data;
}

async function studioFeatured() {
  const data = await sendRequest<TStudio[]>("/studio?category=featured");
  return data;
}

async function myListings() {
  const token = await getTokenFromServer();
  const data = await sendRequest<TStudio[]>("/my-listings", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  return data;
}

async function studioShow(sId: string) {
  const res = await sendRequest<TStudio>(`/studio/${sId}`);
  return res;
}

async function studioStore(data: TStudio) {
  const token = await getTokenFromServer();
  const res = await sendRequest(`/studio`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return res;
}

async function studioUpdate(data: TStudio) {
  const token = await getTokenFromServer();
  const res = await sendRequest(`/studio/${data._id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return res;
}

async function studioDestroy(sId: string) {
  const token = await getTokenFromServer();
  const res = await sendRequest(`/studio/${sId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  return res;
}

async function studioSeed() {
  const token = await getTokenFromServer();
  const data = await sendRequest("/studio-seed", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  return data;
}

export {
  studioIndex,
  studioFeatured,
  studioShow,
  studioStore,
  studioUpdate,
  studioDestroy,
  studioSeed,
  myListings,
};
