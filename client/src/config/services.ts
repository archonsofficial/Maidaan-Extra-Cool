import { serviceIconOne,serviceIconTwo,serviceIconThree,serviceIconFour } from "@/assets";

interface ServicesInterface {
  heading: string;
  description: string;
  service: string;
  img: string;
}

export const services: ServicesInterface[] = [
    {
      heading: " Tournament & Match Organization",
      description:
        " Effortlessly organize and manage local or national sports events with tools designed for smooth scheduling, team coordination, and event creation.",
      service: " Host a Tournament",
      img: serviceIconOne,
    },
    {
      heading: "Player & Team Profiles",
      description:
        "  Create profiles to showcase achievements, track progress, andconnect with the sports community. Perfect for individual players and teams alike.",
      service: "Build Your Profiles",
      img: serviceIconTwo,
    },
    {
      heading: " Academy & Fitness Courses",
      description:
        " Enroll in training programs from top academies and fitnesscenters, available both online and offline, to enhance yourskills with expert guidance.",
      service: "Explore Courses",
      img: serviceIconThree,
    },
    {
      heading: "Sports News & Updates",
      description:
        "Sports News & UpdatesStay updated with the latest sports news,scores, and upcoming events, all accessible from yourpersonalized profile.",
      service: "Get Updates",
      img: serviceIconFour,
    },
  ];