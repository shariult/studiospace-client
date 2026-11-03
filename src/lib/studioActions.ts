import { TStudio } from "@/types";
import { sendRequest } from "./utils";
import { getTokenFromServer } from "./userActions";

async function studioIndex() {
  const data = await sendRequest<TStudio>("/studio");
  return data;
}

async function studioShow(sId: string) {
  const res = await sendRequest(`/studio/${sId}`);
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
  const res = await sendRequest(`/studio/${data.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return res;
}

async function studioDestroy(data: TStudio) {
  const token = await getTokenFromServer();
  const res = await sendRequest(`/studio/${data.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  return res;
}

export { studioIndex, studioShow, studioStore, studioUpdate, studioDestroy };
