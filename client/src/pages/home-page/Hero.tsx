import { NavLink } from "react-router-dom";
import { Button } from "@/components";
import {
  beautifulGirlPlayingBadminton,
  beautifulGirlPlayingLawnTennis,
  paraylsedManShootingArrow,
  blackHorizontalStrip,
} from "@/assets";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-white p-6">
        <div className="text-center flex flex-col items-center justify-center ">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-unbounded ">
            STEP INTO THE
            <span className="block text-[#CEF23F]">MAIDAAN</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-[#FFFFFF] font-light max-w-5xl mx-auto">
            Step into a world of sports and competition, where every match and
            tournament offers a chance to challenge yourself and connect with
            others.
          </p>
          <NavLink to={"signup"}>
            <div className="w-max mt-8">
              <Button text={"Sign in"} sty="font medium px-8 py-3 text-lg " />
            </div>
          </NavLink>
          {/* <button className="mt-8 bg-[#CEF23F] text-black  font-medium  rounded-full px-8 py-3 text-lg transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-lime-300">
            Sign in{" "}
            <span aria-hidden="true" className="ml-2">
              ➔
            </span>
          </button> */}
        </div>
      </div>
      <div className="flex flex-col justify-end">
        <img
          src={beautifulGirlPlayingLawnTennis}
          className="hidden lg:flex h-[500px]  z-20 absolute left-2"
          alt="Beautiful girl playing lawn tennis."
        />

        <div className="h-full w-full flex justify-center ml-[2%] -mb-[2%]">
          <img
            src={paraylsedManShootingArrow}
            className="h-[554px] z-20 absolute"
            alt="Handicap man performing archery."
          />
        </div>
        <img
          src={beautifulGirlPlayingBadminton}
          className="hidden lg:flex h-[460px] z-20 absolute right-5"
          alt="Beautiful girl playing badminton, too beautiful."
        />
        {/* strip */}
        <div className="truncate z-10 h-12 w-full bg-[#CEF23F] flex items-center mt-40 origin-bottom-left -rotate-1">
          <p className="text-black font-medium text-4xl ml-40 animate-slideInOut">
            The Best Platform for Sports and Fitness
          </p>
        </div>
        <img src={blackHorizontalStrip} alt="" className="h-24 -mt-12" />

        <div className="w-full flex flex-col justify-end h-80 bg-gradient-to-b relative from-[#0A0A0A] via-[#CEF23F] to-[#0A0A0A]">
          <div className="w-full z-30 h-1/2 bg-gradient-to-b from-[#CEF23F03] to-[#0A0A0A]"></div>
        </div>
      </div>
    </>
  );
}
