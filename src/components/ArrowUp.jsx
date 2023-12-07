import React, { useState } from 'react'
import { FaArrowUp } from "react-icons/fa";

export const ArrowUp = () => {
    const [showArrowUp, setShowArrowUp] = useState(false);

    const handleArrowUp = () => {
        if (window.scrollY >= 300) {
            setShowArrowUp(true);
        } else {
            setShowArrowUp(false);
        }
      }
      window.addEventListener("scroll", handleArrowUp);

  return (
    <div
    className={`fixed right-[1rem] lg:right-[3rem] flex items-center justify-center w-[30px] h-[30px] rounded-[5px] bg-[--arrow-up-bg] group ${showArrowUp ? "bottom-[3rem]" : "bottom-[-3rem]"}`}
    onClick={() => window.scrollTo(0, 0)}>
        <FaArrowUp
        size={20}
        className="text-[20px] text-[--sidebar-text] cursor-pointer transition-[1s] group-hover:"/>
    </div>
  )
}
