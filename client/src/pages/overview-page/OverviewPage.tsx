import { FaLink } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import OpsNavbar from "../../components/opsNavbar.tsx";
import poster from "../../assets/poster.png";

interface OverviewData {
  Data: string;
  Description: string;
}

export const overviewData: OverviewData[] = [
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

const tournamentDetails: { label: string; value: string }[] = [
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

function OverviewPage() {
  return (
    <div className=" flex flex-col items-center justify-center w-[100%]">
      <div className="hidden lg:block w-[90%] mb-10 mt-5">
        <OpsNavbar />
      </div>

      <span className="mb-10 md:mb-15 flex justify-center items-center text-[#CEF23F] text-2xl md:text-4xl lg:text-7xl font-bold font-unbounded">
        Champions Trophy 2024
      </span>

      <div className="lg:hidden w-[90%] mt-5">
        <OpsNavbar />
      </div>

      <div className="bg-[#CEF23F1A] grid grid-cols-1 md:grid-cols-2 w-[100%] gap-4 p-4 pb-0">
        {overviewData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-lg   "
          >
            <h3 className="text-2xl font-bold mb-2  font-unbounded text-[#868E96]">
              {item.Data}
            </h3>
            <p className="text-center text-xl text-gray-300">
              {item.Description}
            </p>
          </div>
        ))}
        <div className="flex  items-center text-4xl text-[#868E96] gap-6 justify-center">
          <FaLink />
          <FaXTwitter />
          <FaFacebook />
          <FaInstagram />
        </div>
      </div>
      <div className="flex justify-center mt-0 bg-[#CEF23F1A] w-[100%] mb-10 md:mb-20">
        <div className="  w-[60%] p-2 m-6 rounded-3xl flex justify-center align-middle font-bold font-unbounded text-[#CEF23F] border border-[#CEF23F]">
          Register
        </div>
      </div>
      <img src={poster} alt="" className="w-[70vw] h-auto" />
      {/* Datail block  */}
      <div className=" w-[70%] pt-20">
        <div className="text-xl font-bold mb-2  text-white">
          The Champions Cricket Tournament is a premier cricket event that
          brings together top teams from around the region to compete for the
          title of champion. Known for its high level of competition and
          sportsmanship, this tournament offers thrilling matches, exciting
          gameplay, and an opportunity for players to showcase their skills.
        </div>
        <div>Details : </div>
        <ul className="list-disc list-inside text-white">
          {tournamentDetails.map((details, index) => (
            <li key={index} className="text-xl font-bold mb-2">
              <span className="font-bold">{details.label}:</span>{" "}
              <span>{details.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OverviewPage;
