import {
  tournamentOne,
  tournamentTwo,
  tournamentThree,
  tournamentFour,
} from "@/assets";

interface TournamentInterface {
  title: string;
  image: string;
  location: string;
}

export const tournaments: TournamentInterface[] = [
  {
    title: "Champions Trophy 2024",
    image: tournamentOne,
    location: "Cricket | Mumbai",
  },
  {
    title: "Hockey Championship 2024",
    image: tournamentTwo,
    location: "Hockey | Chandigarh",
  },
  {
    title: "Basketball Paralympics Championship 2024",
    image: tournamentThree,
    location: "Basketball | Delhi",
  },
  {
    title: "Girls Football Championship 2024",
    image: tournamentFour,
    location: "Football | Lucknow",
  },
];
