
import OpsNavbar from "../../components/opsNavbar.tsx";



const tournamentSchedule: { stage: string; date: string; time: string }[] = [
    { stage: "Opening Ceremony", date: "30 Sept’24", time: "10:00 AM" },
    { stage: "Group Stage Matches", date: "1 Oct’24 - 10 Oct’24", time: "10:00 AM" },
    { stage: "Quarterfinals", date: "11 Oct’24 - 12 Oct’24", time: "10:00 AM - 2:00 PM" },
    { stage: "Semi-finals", date: "13 Oct’24 - 14 Oct’24", time: "10:00 AM - 2:00 PM" },
    { stage: "Finals", date: "15 Oct’24", time: "3:00 PM" },
    { stage: "Award Ceremony", date: "15 Oct’24", time: "6:00 PM" }
  ];
  

function SchedulePage() {
  return (
    <div className=" flex p-1 flex-col items-center justify-center w-[100%]">
              <div className="hidden lg:block w-[90%] mb-10 mt-5">
        <OpsNavbar />
      </div>

      <span className="mb-10 md:mb-15 flex justify-center items-center text-[#CEF23F] text-xl md:text-4xl lg:text-7xl font-bold font-unbounded">
        Champions Trophy 2024
      </span>

      <div className="lg:hidden w-[90%] mt-5">
        <OpsNavbar />
      </div>
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
  )
}

export default SchedulePage