import React, { useContext } from "react"
import gsourcesLogo from "../assets/gsources-logo.png"
import { sidebarCategory } from "../data/sidebarCategory";
import { sidebarOthers } from "../data/sidebarOthers";
import { Context } from "../context/Context";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const { 
    handleMenuClick,
    isMenuActive,
    countOfFavoriteItems,
    handleLinkClicked,
    isLinkActive 
  } = useContext(Context);

  return (
    <div className="w-full h-full flex flex-col">
      <div className={`fixed top-0 pt-[1rem] w-[230px] h-full bg-[#2C3E50] z-40 transition-[1s]
      ${isMenuActive ? "ml-[0]" : "ml-[-500px]"} overflow-y-scroll`}
      >
        <div className="flex items-center justify-between px-4 mb-8">
          <div className="flex items-center cursor-pointer">
            <img className="w-[30px] rounded-[5px]" src={gsourcesLogo} alt="" />
          </div>
          <div className="flex items-center w-[30px] h-[30px] rounded-[5px] bg-[#17202A] group"
          onClick={handleMenuClick}
          >
            <IoMdClose className="text-[20px] text-[#979A9A] ml-[5px] cursor-pointer transition-[1s] group-hover:rotate-[90deg]"/>
          </div>
        </div>

        <div className="flex flex-col gap-8 px-4">
          <ul className="pb-8 border-b border-solid border-[#7B7D7D]">
            {sidebarCategory.map((sCategory, index) => {
              return <Link to={sCategory.to} key={index}>
              <li onClick={() => handleLinkClicked(sCategory.label)} className={`flex items-center gap-[1rem] cursor-pointer rounded p-[.5rem] px-[.3rem] transition-[.3s] ${isLinkActive === sCategory.label ? "bg-[#17202A]" : "hover:bg-[#212F3D]"}`}>
                <span className="text-[18px] text-[#D0D3D4]">{sCategory.icon}</span>
                <p className="text-[15px] text-[#979A9A]">{sCategory.label}</p>
              </li>
              </Link>
            })}
          </ul>
          <ul>
            {sidebarOthers.map((sOthers, index) => {
              return <Link to={sOthers.to} key={index}>
              <li onClick={() => handleLinkClicked(sOthers.label)} className={`flex items-center gap-[1rem] cursor-pointer rounded p-[.5rem] px-[.3rem] transition-[.3s] relative ${isLinkActive === sOthers.label ? "bg-[#17202A]" : "hover:bg-[#212F3D]"}`}>
                <span className="text-[18px] text-[#D0D3D4]">{sOthers.icon}</span>
                <p className="text-[15px] text-[#979A9A]">{sOthers.label}</p>
                <p className="absolute right-2 w-[20px] h-[20px] bg-[#DC7633] text-[13px] text-[#D0D3D4] rounded-[5px] flex items-center justify-center">{countOfFavoriteItems()}</p>
              </li>
              </Link>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
