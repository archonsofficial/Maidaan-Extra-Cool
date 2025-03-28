import { eventOne, eventTwo, eventThree } from "@/assets";

interface EventInterface {
  imgUrl: string;
  date: string;
  location: string;
  title: string;
  description: string;
}

export const events: EventInterface[] = [
  {
    imgUrl: eventOne,
    date: "Oct 10, 2024",
    location: "Serenity, Mumbai",
    title: "Finding Your Inner Peace",
    description:
      "Experience rejuvenation and tranquility through guided yoga sessions.",
  },
  {
    imgUrl: eventTwo,
    date: "Oct 10, 2024",
    location: "Serenity, Mumbai",
    title: "Move to the Rhythm",
    description:
      "Dance your heart out while enjoying a high-energy Zumba workout.",
  },
  {
    imgUrl: eventThree,
    date: "Oct 10, 2024",
    location: "Serenity, Mumbai",
    title: "Strength in Diversity",
    description:
      "Showcase strength and determination in an inclusive weightlifting competition.",
  },
];
