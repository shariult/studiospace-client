import { User } from "better-auth";
import { getTokenFromServer } from "./authActions";
import { sendRequest } from "./utils";

async function userShow(uId: string) {
  const token = await getTokenFromServer();
  const res = await sendRequest<User>(`/user/${uId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  return res;
}

export { userShow };
