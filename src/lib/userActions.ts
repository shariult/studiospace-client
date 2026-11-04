import { User } from "better-auth";
import { getTokenFromServer } from "./authActions";
import { sendRequest } from "./utils";

async function userShow(uId: string) {
  const res = await sendRequest<User>(`/user/${uId}`);
  return res;
}

export { userShow };
