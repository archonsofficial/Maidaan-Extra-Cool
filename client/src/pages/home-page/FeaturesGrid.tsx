import { features, tags } from "@/config/features";
import { verify } from "@/assets";

export default function FeaturesGrid() {
  return (
    <div className="p-6 text-white mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-lg bg-[#0A0A0A0D] border border-[#FFFFFF14] backdrop-blur-[20px]"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="mb-4 w-10 h-10"
            />
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-center text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="min-w-[355px] max-w-[500px] flex justify-center items-center h-10 px-4 bg-[#FFFFFF26] text-sm rounded-full text-gray-300 border border-gray-500 w-48 sm:w-56 md:w-64"
          >
            <img src={verify} alt="" className="w-7 h-6 mr-2" />
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
