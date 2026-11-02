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

export { type TCategory, type TBreadCrumbs };
