import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import FeaturesGrid from "./FeaturesGrid";
import { analyticsBackground } from "@/assets";

export default function Analytics() {
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      offset: 120,
      delay: 0,
      duration: 2000,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <>
      <div className="min-h-screen w-full relative overflow-hidden">
        <div
          style={{ backgroundImage: `url(${analyticsBackground})` }}
          className="min-h-full lg:min-h-screen bg-no-repeat bg-cover bg-center]"
        >
          <div className="flex justify-center items-center h-full w-full flex-wrap">
            <div
              data-aos="slide-right"
              className="rounded-full h-[30vh] w-[30vh] lg:h-[40vh] lg:w-[40vh] bg-[#FFFFFF25] mx-2 my-4 flex items-center justify-center text-white text-center"
            >
              <div>
                <p className="text-3xl font-bold">20,000+</p>
                <p>Players Registered</p>
              </div>
            </div>
            <div
              data-aos="slide-right"
              className="rounded-full h-[30vh] w-[30vh] lg:h-[40vh] lg:w-[40vh] bg-[#FFFFFF25] mx-2 my-4 flex items-center justify-center text-white text-center"
            >
              <div>
                <p className="text-3xl font-bold">500+</p>
                <p>Tournaments Organized</p>
              </div>
            </div>
            <div
              data-aos="slide-left"
              className="rounded-full h-[30vh] w-[30vh] lg:h-[40vh] lg:w-[40vh] bg-[#FFFFFF25] mx-2 my-4 flex items-center justify-center text-white text-center"
            >
              <div>
                <p className="text-3xl font-bold">1500+</p>
                <p>Matches Played</p>
              </div>
            </div>
            <div
              data-aos="slide-left"
              className="rounded-full h-[30vh] w-[30vh] lg:h-[40vh] lg:w-[40vh] bg-[#FFFFFF25] mx-2 my-4 flex items-center justify-center text-white text-center"
            >
              <div>
                <p className="text-3xl font-bold">10+</p>
                <p>Sports Categories</p>
              </div>
            </div>
          </div>

          <div className="content mt-12 lg:mt-32 pt-20 lg:pt-32 px-4">
            <FeaturesGrid />
          </div>
        </div>
      </div>
    </>
  );
}
