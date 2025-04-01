import { tournamentSchedule } from "@/config/tournaments";

export default function Schedule() {
  return (
    <div className=" flex p-1 flex-col items-center justify-center w-[100%]">
      <div className="w-[100%] lg:ml-30 flex flex-col justify-between md:p-4 pb-0 space-y-4">
        {tournamentSchedule.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-3 items-center px-2 py-4 md:p-6 text-center md:text-left"
          >
            <h3 className="md:text-2xl font-bold font-unbounded text-[#868E96]">
              {item.stage}
            </h3>
            <p className="md:text-xl text-gray-300 text-center">{item.date}</p>
            <p className="md:text-xl text-gray-300 text-center">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
