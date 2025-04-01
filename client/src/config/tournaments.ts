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

export const tournamentDetails: { label: string; value: string }[] = [
  { label: "Tournament Name", value: "Champions Cricket Tournament" },
  { label: "Sport Category", value: "Cricket" },
  { label: "Eligibility", value: "Open to players aged 16 and above." },
  { label: "Location", value: "[Insert Venue Address Here], [City, Country]" },
  { label: "Start Date", value: "September 21, 2024" },
  { label: "End Date", value: "October 15, 2024" },
  { label: "Registered Players", value: "1,500+ players" },
  { label: "Registration Status", value: "Open" },
  { label: "Registration Link", value: "Register Now" },
  {
    label: "Tournament Format",
    value: "Round-robin group stage followed by knockout rounds.",
  },
  { label: "Teams", value: "16 teams from various regions." },
  {
    label: "Match Schedule",
    value:
      "Matches are held daily with fixtures announced on the official website.",
  },
];

interface TournamentData {
  Data: string;
  Description: string;
}

export const tournamentData: TournamentData[] = [
  {
    Data: "Scheduled for",
    Description: "21 Sept -24 Sept,2024",
  },
  {
    Data: "Location",
    Description: "Mumbai, India",
  },
  {
    Data: "Application closes in ",
    Description: "1d:12h:01m",
  },
];

export const tournamentSchedule: {
  stage: string;
  date: string;
  time: string;
}[] = [
  { stage: "Opening Ceremony", date: "30 Sept’24", time: "10:00 AM" },
  {
    stage: "Group Stage Matches",
    date: "1 Oct’24 - 10 Oct’24",
    time: "10:00 AM",
  },
  {
    stage: "Quarterfinals",
    date: "11 Oct’24 - 12 Oct’24",
    time: "10:00 AM - 2:00 PM",
  },
  {
    stage: "Semi-finals",
    date: "13 Oct’24 - 14 Oct’24",
    time: "10:00 AM - 2:00 PM",
  },
  { stage: "Finals", date: "15 Oct’24", time: "3:00 PM" },
  { stage: "Award Ceremony", date: "15 Oct’24", time: "6:00 PM" },
];

export const tournamentPrizes: {
  title: string;
  description: string;
}[] = [
  {
    title: "Winner",
    description: "₹5,00,000 + Champions Trophy + Gold Medals + Certificate",
  },
  {
    title: "Runner-Up",
    description: "₹2,50,000 + Runner-Up Trophy + Silver Medals + Certificate",
  },
  {
    title: "Best Player",
    description: "₹50,000 +  Trophy + Gold Medals + Certificate",
  },
  {
    title: "Best Batsman",
    description: "₹30,000 +  Trophy + Gold Medals + Certificate",
  },
  {
    title: "Best Bowler",
    description: "₹30,000 +  Trophy + Gold Medals + Certificate",
  },
  {
    title: "Best Fielder",
    description: "₹20,000 +  Trophy + Gold Medals + Certificate",
  },
  {
    title: "Player of the Match (Per Game)",
    description: "₹5,000 +  Trophy + Certificate",
  },
  {
    title: "Emerging Player",
    description: "₹20,000 +  Trophy + Certificate",
  },
];
