import { TBooking, TBookingInput } from "@/types";
import { getTokenFromServer } from "./authActions";
import { sendRequest } from "./utils";

async function bookingIndex() {
  const token = await getTokenFromServer();
  const res = await sendRequest<TBooking[]>(`/booking`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  return res;
}

async function bookingStore(data: TBookingInput) {
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

async function bookingDestroy(bookingId: string) {
  const token = await getTokenFromServer();
  const res = await sendRequest(`/booking/${bookingId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  return res;
}

export { bookingIndex, bookingStore, bookingDestroy };
