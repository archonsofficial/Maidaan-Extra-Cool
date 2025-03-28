import { HiArrowRight } from "react-icons/hi";

interface ButtonProps {
  text: string;
  sty: string;
}

export default function Button({ text, sty }: ButtonProps) {
  return (
    <div
      className={`flex  justify-center cursor-pointer align-middle ${
        sty === "" ? "text-xs" : sty
      } md:text-sm hover:justify-around items-center transition-all duration-100 ease-in-out group`}
    >
      <div
        className={`flex justify-start  items-center pr-3 bg-[#CEF23F] md:w-50 h-6 text-black px-4 py-2 rounded-l-3xl transition-all duration-100 ease-in-out ${sty}`}
      >
        {text}
      </div>
      <div className="bg-[#CEF23F] h-6 items-center text-black pr-2 py-1 rounded-r-3xl group-hover:ml-3">
        <HiArrowRight className="ml-2 transition-all duration-100 -rotate-45 ease-in-out group-hover:rotate-0  transform text-xl" />
      </div>
    </div>
  );
}
