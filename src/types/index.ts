import { IconType } from "react-icons";

type ActionResult<T> =
  | {
      isSuccess: true;
      data: T;
    }
  | { isSuccess: false; error: string };

type TCategory = {
  id: number;
  title: string;
  slug: string;
  details: string;
  icon: IconType;
};

type TBreadCrumbs = {
  id: number;
  label: string;
  slug?: string;
};

type TStudio = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  capacity: number;
  hourlyRate: number;
  deposit: number;
  address: string;
  imageUrl: string;
  amenities: string[];
  overview: string;
  rating: number;
  userId: string;
};

type TBookingStatus = "pending" | "approved" | "rejected" | "cancelled";

type TBooking = {
  _id: string;
  date: string;
  startTime: string;
  endTime: string;
  status: TBookingStatus;
  price: number;
  studioId: string;
  userId: string;
};

export {
  type ActionResult,
  type TCategory,
  type TBreadCrumbs,
  type TStudio,
  type TBooking,
  type TBookingStatus,
};
