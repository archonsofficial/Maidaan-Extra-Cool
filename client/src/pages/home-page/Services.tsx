import { ArrowCircleRight2 } from "iconsax-react";
import { Button } from "@/components";
import { services } from "@/config";

export default function ServicesSection() {
  return (
    <section className=" text-white py-12 m-8">
      <div className="container mx-auto">
        <div className="flex justify-start items-end mb-8">
          <button className="linkbtn text-[#CEF23F] bg-[#FFFFFF10] px-4 py-[10px] rounded-full text-sm  font-bold h-9 font-secondaryFont flex items-center">
            SERVICES
          </button>
        </div>
        <h2 className="text-4xl font-normal  ">What we are offering</h2>
        <div className="flex justify-end items-end mb-8 ">
          <Button text="View All Services" sty="" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF15] p-6 rounded-2xl flex flex-col justify-between items-start"
            >
              <div>
                <div className="bg-[#FFFFFF05] h-[54px] w-[54px] p-[12px] mb-2 rounded-2xl">
                  {" "}
                  <img src={service.img} alt="" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-secondaryFont">
                  {service.heading}
                </h3>
                <p className="mb-8 font-thin text-base ">
                  {service.description}
                </p>
              </div>
              <button className="flex gap-2 justify-center align-middle group">
                {service.service + " "}

                <ArrowCircleRight2
                  size={24}
                  color="black"
                  className="bg-[#CEF23F] rounded-2xl transition-transform duration-300 ease-in-out -rotate-45 group-hover:rotate-0"
                />

                
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
