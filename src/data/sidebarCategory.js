import { TbSlash } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { LuPaintBucket } from "react-icons/lu";
import { RiJavascriptLine } from "react-icons/ri";
import { IoColorPaletteOutline, IoDocumentTextOutline } from "react-icons/io5";
import { MdInsertEmoticon, MdFlipToFront } from "react-icons/md";

export const sidebarCategory = [
    { 
        icon: <TbSlash />,
        label: "All",
        to: "/" 
    },
    { 
        icon: <IoColorPaletteOutline />,
        label: "Colors",
        to: "/colors" 
    },
    { 
        icon: <LuPaintBucket />,
        label: "Design Tools",
        to: "/design-tools" 
    },
    { 
        icon: <IoDocumentTextOutline />,
        label: "Documentations",
        to: "/documentations" 
    },
    { 
        icon: <MdFlipToFront />,
        label: "Frontend Tools",
        to: "/frontend-tools" 
    },
    { 
        icon: <AiOutlineHtml5 />,
        label: "HTML Templates",
        to: "/html-templates" 
    },
    { 
        icon: <MdInsertEmoticon />,
        label: "Icons",
        to: "/icons" 
    },
    { 
        icon: <RiJavascriptLine />,
        label: "JS Libraries",
        to: "/javascript-libraries" 
    },
];