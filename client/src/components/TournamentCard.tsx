import { NavLink, redirect } from "react-router-dom";

interface TournamentCardProps {
  title: string;
  image: string;
  location: string;
}

export default function TournamentCard({
  title,
  image,
  location,
}: TournamentCardProps) {
  return (
    <div
      className="relative h-[330px] rounded-lg overflow-hidden shadow-lg col-span-10 sm:col-span-6"
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
      <div className="absolute top-3 left-3 text-white">
        <h4 className="text-lg font-medium">{title}</h4>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-white/30 p-4 flex justify-between items-center">
        <p className="text-white text-sm">{location}</p>
        <NavLink to={'/tournamentDetails'} className="bg-[#CEF23F] text-black px-4 py-2 rounded-full text-sm font-medium">
          Register Now
        </NavLink>
      </div>
    </div>
  );
}
