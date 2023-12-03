import React, { useContext, useState } from "react";
import gsourcesLogo from "../assets/gsources-logo.png";
import { IoMdMenu } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const { handleMenuClick, isMenuActive } = useContext(Context);

  const handleHeaderFixed = () => {
    if (window.scrollY >= 10) {
      setIsHeaderFixed(true);
    } else {
      setIsHeaderFixed(false);
    }
  }
  window.addEventListener("scroll", handleHeaderFixed);

  return (
    <div className={`w-full flex items-center justify-between p-4 transition  ${isMenuActive ? "shadow-none" : "bg-[#18202A] z-10"} ${isHeaderFixed ? "fixed top-0 shadow-lg" : ""}`}>
        <div className="flex gap-2 items-center sm:gap-4">
            <div className="cursor-pointer" onClick={handleMenuClick}>
              <IoMdMenu className="text-[25px] text-[#FDFEFE]"/>
            </div>
            <div className="group flex items-center gap-[.1rem] cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              <img className="w-[30px] rounded-[5px]" src={gsourcesLogo} alt="" />
              <p className="hidden sm:block text-[25px] text-[#FDFEFE] cursor-pointer group-hover:text-gray-600 duration-300 ease-in-out">sources.</p>
            </div>
        </div>
        <div className="flex gap-4">
          <Link to="https://github.com/gabrillojansen">
            <FaGithub size={18} className="text-[#FDFEFE] cursor-pointer hover:text-gray-600 duration-300 ease-in-out"/>
          </Link>
          <Link to="https://www.linkedin.com/in/jansen-gabrillo-82ab96299/">
            <FaLinkedin size={18} className="text-[#FDFEFE] cursor-pointer hover:text-gray-600 duration-300 ease-in-out"/>
          </Link>
            <MdOutlineDarkMode size={18} className="text-[#FDFEFE] cursor-pointer hover:text-gray-600 duration-300 ease-in-out"/>
        </div>
    </div>
  )
}
