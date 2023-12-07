import React, { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa";

export const ArrowUp = () => {
    const [showArrowUp, setShowArrowUp] = useState(false);

    useEffect(() => {
        const handleArrowUp = () => {
            if (window.scrollY >= 300) {
                setShowArrowUp(true);
            } else {
                setShowArrowUp(false);
            }
          }
          window.addEventListener("scroll", handleArrowUp);
    })

  return (
    <div
    className={`fixed right-[1rem] lg:right-[3rem] flex items-center justify-center w-[30px] h-[30px] rounded-[5px] bg-[--arrow-up-bg] cursor-pointer hover:bottom-[3.2rem]
    ${showArrowUp ? "bottom-[3rem]" : "bottom-[-3rem]"}`}
    onClick={() => window.scrollTo(0, 0)}>
        <FaArrowUp
        size={18}
        className="text-[20px] text-[--sidebar-text]"/>
    </div>
  )
}
