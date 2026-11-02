import { TCategory } from "@/types";
import {
  PiCamera,
  PiFilmSlate,
  PiMicrophone,
  PiMusicNotes,
  PiPaintBrush,
} from "react-icons/pi";

const categories: TCategory[] = [
  {
    id: 1,
    title: "Photo Studio",
    slug: "photo-studio",
    details: "Cyc walls & natural light",
    icon: PiCamera,
  },
  {
    id: 2,
    title: "Sound Stages",
    slug: "sound-stages",
    details: "Cinema-grade soundproofing",
    icon: PiFilmSlate,
  },
  {
    id: 3,
    title: "Podcast Rooms",
    slug: "podcast-rooms",
    details: "Mic-ready lounges",
    icon: PiMicrophone,
  },
  {
    id: 4,
    title: "Music Suites",
    slug: "music-suites",
    details: "Recording & mixing rooms",
    icon: PiMusicNotes,
  },
  {
    id: 5,
    title: "Art Workshops",
    slug: "art-workshops",
    details: "Tools, tables & space",
    icon: PiPaintBrush,
  },
];

const amenities = [
  "Wi-Fi",
  "Air Conditioning",
  "Backdrops",
  "Lighting Kit",
  "Soundproofing",
  "Green Screen",
  "Changing Room",
  "Parking",
  "Restroom",
  "Kitchenette",
  "Props",
  "Power Backup",
];

export { categories, amenities };
