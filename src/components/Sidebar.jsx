import React, { useContext } from "react"
import gsourcesLogo from "../assets/gsources-logo.png"
import { sidebar } from '../data/sidebar';
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
      <div className={`fixed top-0 pt-[1rem] w-[230px] h-full bg-[--sidebar-bg] shadow-2xl z-40
      ${isMenuActive ? "ml-[0]" : "ml-[-500px]"} `}
      >
        <div className="flex items-center justify-between px-4 mb-8">
          <div className="flex items-center cursor-pointer">
            <img className="w-[30px] rounded-[5px]" src={gsourcesLogo} alt="" />
          </div>
          <div className="flex items-center w-[30px] h-[30px] rounded-[5px] bg-[--sidebar-close-icon-bg] group"
          onClick={handleMenuClick}>
            <IoMdClose className="text-[20px] text-[--sidebar-text] ml-[5px] cursor-pointer group-hover:rotate-[90deg]"/>
          </div>
        </div>

        <div className="flex flex-col gap-4 px-4">
          <div className="pb-4 border-b border-solid border-[--sidebar-border]">
            {sidebar.map((sBar, index) => {
              return <Link
              to={sBar.to}
              key={index}
              onClick={() => handleLinkClicked(sBar.label)} className={`flex items-center gap-[1rem] cursor-pointer rounded p-[.5rem] px-[.3rem]
              ${isLinkActive === sBar.label ? "bg-[--sidebar-link-active]" : "hover:bg-[--sidebar-link-hover]"}`}>
              <span className="text-[18px] text-[--sidebar-icon]">{sBar.icon}</span>
              <p className="text-[15px] text-[--sidebar-text]">{sBar.label}</p>
              </Link>
            })}
          </div>

          <div className="pb-4 border-b border-solid border-[--sidebar-border]">
            <h1 className="font-bold text-[--sidebar-title] px-[.3rem] mb-2">Category</h1>
            {sidebarCategory.map((sCategory, index) => {
              return <Link
              to={sCategory.to}
              key={index}
              onClick={() => handleLinkClicked(sCategory.label)} className={`flex items-center gap-[1rem] cursor-pointer rounded p-[.5rem] px-[.3rem]
              ${isLinkActive === sCategory.label ? "bg-[--sidebar-link-active]" : "hover:bg-[--sidebar-link-hover]"}`}>
                <span className="text-[18px] text-[--sidebar-icon]">{sCategory.icon}</span>
                <p className="text-[15px] text-[--sidebar-text]">{sCategory.label}</p>
              </Link>
            })}
          </div>

          <div>
            <h1 className="font-bold text-[--sidebar-title] px-[.3rem] mb-2">Other</h1>
            {sidebarOthers.map((sOthers, index) => {
              return <Link 
              to={sOthers.to}
              key={index}
              onClick={() => handleLinkClicked(sOthers.label)} className={`flex items-center gap-[1rem] cursor-pointer rounded p-[.5rem] px-[.3rem] relative
              ${isLinkActive === sOthers.label ? "bg-[--sidebar-link-active]" : "hover:bg-[--sidebar-link-hover]"}`}>
                <span className="text-[18px] text-[--sidebar-icon]">{sOthers.icon}</span>
                <p className="text-[15px] text-[--sidebar-text]">{sOthers.label}</p>
                <p className="absolute right-2 w-[20px] h-[20px] bg-[#DC7633] text-[13px] text-[#D0D3D4] rounded-[5px] flex items-center justify-center">{countOfFavoriteItems()}</p>
              </Link>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
