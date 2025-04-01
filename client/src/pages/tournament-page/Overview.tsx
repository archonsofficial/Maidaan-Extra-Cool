import { tournamentData,tournamentDetails } from "@/config/tournaments";
import { FaFacebook, FaInstagram, FaLink, FaXTwitter } from "react-icons/fa6";
import poster from "@/assets/poster.png";

export default function Overview() {
  return (
    <>
      <div className="bg-[#CEF23F1A] grid grid-cols-1 md:grid-cols-2 w-[100%] gap-4 p-4 pb-0">
        {tournamentData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-2 font-unbounded text-[#868E96]">
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
    </>
  );
}
