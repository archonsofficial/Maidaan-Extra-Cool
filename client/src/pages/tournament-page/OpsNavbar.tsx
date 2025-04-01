import { opsNavBarStore } from "@/store/opsNavBarStore";

export default function OpsNavbar() {
  const { currentOpt, setOpt } = opsNavBarStore();

  return (
    <div className="w-fit hidden lg:flex items-center border-3 border-[#CEF23F4D] rounded-3xl gap-4 px-4 py-2">
      <button
        className={`transition-colors duration-300 hover:bg-[#CEF23F4D] py-2 px-2 rounded-3xl text-l font-bold ${
          currentOpt === "overview"
        ? "text-[#CEF23F] bg-[#CEF23F4D]"
        : "text-[#CEF23F]"
        }`}
        onClick={() => setOpt("overview")}
      >
        Overview
      </button>
      <button
        className={`transition-colors duration-300 hover:bg-[#CEF23F4D] py-2 px-2 rounded-3xl text-l font-bold ${
          currentOpt === "tournaments"
            ? "text-[#CEF23F] bg-[#CEF23F4D]"
            : "text-[#CEF23F]"
        }`}
        onClick={() => setOpt("prizes")}
      >
        Prizes
      </button>
      <button
        className={`transition-colors duration-300 hover:bg-[#CEF23F4D] py-2 px-2 rounded-3xl text-l font-bold ${
          currentOpt === "schedule"
            ? "text-[#CEF23F] bg-[#CEF23F4D]"
            : "text-[#CEF23F]"
        }`}
        onClick={() => setOpt("schedule")}
      >
        Schedule
      </button>
    </div>
  );
}
