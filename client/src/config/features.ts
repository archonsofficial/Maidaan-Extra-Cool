import { people1, people2, people3 } from "@/assets";

interface FeaturesInterface {
  title: string;
  description: string;
  icon: string;
}

export const features: FeaturesInterface[] = [
  {
    title: "Community-Centric",
    description:
      "We prioritize building a vibrant sports community where everyone can thrive.",
    icon: people1,
  },
  {
    title: "Player-Centric Focus",
    description:
      "Your growth is our priority. We ensure an excellent experience for all users.",
    icon: people2,
  },
  {
    title: "Free & Accessible",
    description:
      "Access free or affordable tournaments, training, and resources for all.",
    icon: people3,
  },
];

export const tags: string[] = [
  "Dedicated  Support  System ",
  "Seamless Event Management",
  "Positive Community Experience",
  "Commitment to Sports Excellence",
];
