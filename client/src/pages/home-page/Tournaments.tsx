import { Button } from "@/components";
import { tournaments } from "@/config";
import { NavLink } from "react-router-dom";

export default function Tournament() {
  return (
    <section className=" text-white py-12 m-8 flex justify-center align-middle ">
      <div className="container mx-auto flex justify-center flex-col align-middle">
        <div className="flex justify-start items-end mb-8">
          <button className="linkbtn text-[#CEF23F] bg-[#FFFFFF10] px-4 py-[10px] rounded-full text-sm  font-bold h-9 font-secondaryFont flex items-center">
            TOURNAMENTS
          </button>
        </div>
        <h2 className="text-4xl font-normal">Explore Our Tournaments</h2>
        <div className="flex justify-end items-end mb-8 ">
          <NavLink to={"tournaments"}>
            <Button text="View All Tournaments" sty="" />
          </NavLink>
        </div>

        {/* table content */}
        <div className="flex justify-center align-middle">
          <div className="max-w-[1000px] gap-4 grid grid-cols-12 grid-rows-2 px-8 mb-9 ">
            {tournaments.map((tournament, index) => (
              <div
                key={index}
                className={`relative w-full h-[330px] rounded-lg overflow-hidden shadow-lg ${
                  index === 0 || index === 3
                    ? "col-span-12 sm:col-span-7"
                    : "col-span-12 sm:col-span-5"
                }`}
              >
                <img
                  src={tournament.image}
                  alt={tournament.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
                <div className="absolute top-3 left-3 text-white">
                  <h4 className="text-lg font-medium">{tournament.title}</h4>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white/30 p-4 flex justify-between items-center">
                  <p className="text-white text-sm">{tournament.location}</p>
                  <button className="bg-[#CEF23F] text-black px-4 py-2 rounded-full text-sm font-medium">
                    Register Now
                  </button>
                </div>
              </div>
              // <Card
              //   key={index}
              //   className={`w-full h-[330px] ${
              //     index === 0 || index === 3
              //       ? "col-span-12 sm:col-span-7"
              //       : "col-span-12 sm:col-span-5"
              //   }`}
              // >
              //   <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              //     <h4 className="text-white font-medium text-large">
              //       {tournament.title}
              //     </h4>
              //   </CardHeader>
              //   <Image
              //     removeWrapper
              //     alt="Card background"
              //     className="z-0 w-full h-full object-cover bg-white/30 "
              //     src={tournament.image}
              //   />
              //   <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              //   <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              //     <div>
              //       <p className="text-white text-tiny">{tournament.location}</p>
              //     </div>
              //     <Button
              //       className="text-tiny bg-[#CEF23F] rounded-full text-black"
              //       size="sm"
              //     >
              //       Register Now
              //     </Button>
              //   </CardFooter>
              // </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
