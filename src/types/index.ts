import { IconType } from "react-icons";

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
  id: string;
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
};

export { type TCategory, type TBreadCrumbs, type TStudio };
