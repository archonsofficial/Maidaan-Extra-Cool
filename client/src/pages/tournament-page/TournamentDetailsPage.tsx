import { opsNavBarStore } from "@/store/opsNavBarStore";
import OpsNavbar from "./OpsNavbar";
import Overview from "./Overview";
import Schedule from "./Schedule";
import Prizes from "./Prizes";

export default function TournamentDetailsPage() {
  const { currentOpt } = opsNavBarStore();

  return (
    <div className=" flex flex-col items-center justify-center w-[100%]">
      <div className="hidden lg:block w-[90%] mb-10 mt-5">
        <OpsNavbar />
      </div>
      <span className="mb-10 md:mb-15 flex justify-center items-center text-[#CEF23F] text-2xl md:text-4xl lg:text-7xl font-bold font-unbounded">
        Champions Trophy 2024
      </span>
      {currentOpt === "overview" && <Overview />}
      {currentOpt === "schedule" && <Schedule />}
      {currentOpt === "prizes" && <Prizes />}
    </div>
  );
}
