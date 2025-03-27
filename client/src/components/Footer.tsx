import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

function Footer() {
  return (
    <div className="bg-[#FFFFFF1A] text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="bg-white/10 p-5 rounded-2xl flex flex-col md:flex-row justify-between items-start gap-6 border border-transparent">
          {/* Logo & Links Section */}
          <img className="w-44 h-auto " src={Logo} alt="Logo" />

          <div className="flex flex-col items-center md:items-start md:mb-16 ">
            <div className="flex flex-col items-center md:items-start gap-6 text-lg font-light">
              <Link to="/" className="text-[#CEF23F] font-medium text-xl">
                Get Involved
              </Link>
              <Link to="/" className="text-white">
                Organize a Tournament
              </Link>
              <Link to="/" className="text-white">
                Explore Sports Events
              </Link>
            </div>
          </div>

        
        </div>

        {/* Links Section */}
        <div className=" rounded-2xl bg-[#FFFFFF1A] flex flex-col text-white py-8 justify-between items-center mt-8">
          <Link to="/" className="text-[#CEF23F] font-medium text-xl mb-4">
            Follow us:
          </Link>

          <div className="flex gap-6">
            <Link
              to="/"
              className="text-white text-2xl flex items-center justify-center w-10 h-10 border border-white rounded-xl hover:bg-white hover:text-gray-800"
            >
              <FaFacebook />
            </Link>
            <Link
              to="/"
              className="text-white text-2xl flex items-center justify-center w-10 h-10 border border-white rounded-xl hover:bg-white hover:text-gray-800"
            >
              <FaTwitter />
            </Link>
            <Link
              to="/"
              className="text-white text-2xl flex items-center justify-center w-10 h-10 border border-white rounded-xl hover:bg-white hover:text-gray-800"
            >
              <FaInstagram />
            </Link>
            <Link
              to="/"
              className="text-white text-2xl flex items-center justify-center w-10 h-10 border border-white rounded-xl hover:bg-white hover:text-gray-800"
            >
              <FaYoutube />
            </Link>
          </div>
          <div className="text-center text-xs text-gray-400 mt-6">
          Copyright © 2024 Maidaan | All Rights Reserved
        </div>
        </div>

        {/* Copyright Section */}
        
      </div>
    </div>
  );
}

export default Footer;
