import { tournamentPrizes } from "@/config/tournaments";

export default function Prizes() {
  return (
    <div className="flex flex-col md:p-4">
      {tournamentPrizes.map((item, index) => (
        <>
          <div
            key={index}
            className="grid grid-cols-2 items-center px-2 py-4 md:p-6 text-center"
          >
            <h3 className="md:text-2xl text-gray-300 text-left">
              {item.title}
            </h3>
            <p className="md:text-xl text-gray-300 text-right">
              {item.description}
            </p>
          </div>
          <div className="border-1 border-amber-50 w-full "></div>
          {/* <hr className="border-amber-50 border-2" /> */}
        </>
      ))}
    </div>
  );
}
