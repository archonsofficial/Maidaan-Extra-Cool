import { NavLink } from "react-router-dom";
import { tournaments } from "@/config";
import { Button, TournamentCard } from "@/components";

export default function TournamentPage() {
  return (
    <div className="mx-8 md:mx-20 md:my-10 flex flex-col gap-8">
      {/* Search bar */}
      <div className=" flex justify-center gap-4 bg-[#80808050] p-4 rounded-xl">
        <input
          type="text"
          placeholder="Search for tournaments, events, or academies..."
          className="lg:w-[500px] bg-[#80808080] text-white rounded-full p-3 border-[#CEF23F4D] border-2"
        />
        <button className="rounded-full text-[#CEF23F] bg-[#80808080] border-[#CEF23F] border-2 px-4 py-2 cursor-pointer">Your Games</button>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <p className="text-white text-2xl font-unbounded">
          Ongoing Tournaments
        </p>
        <NavLink to={"#"}>
          <div className="md:w-max">
            <Button
              text={"All ongoing tournaments"}
              sty="font medium py-3 text-xs md:text-lg"
            />
          </div>
        </NavLink>
      </div>

      {/* Tournaments Cards */}
      <div className="grid grid-cols-12 gap-8">
        {tournaments.map((tournament, index) => {
          return (
            <TournamentCard
              key={index}
              title={tournament.title}
              image={tournament.image}
              location={tournament.location}
            />
          );
        })}
      </div>
    </div>
  );
}
