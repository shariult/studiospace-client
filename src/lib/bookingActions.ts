import { TBooking } from "@/types";
import { getTokenFromServer } from "./authActions";
import { sendRequest } from "./utils";

async function bookingStore(data: TBooking) {
  const token = await getTokenFromServer();
  const res = await sendRequest<TBooking>(`/booking`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return res;
}

export default { bookingStore };
