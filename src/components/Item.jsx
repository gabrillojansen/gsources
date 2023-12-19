import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { Context } from '../context/Context';

export const Item = (props) => {
    const { id, image, title, description, url } = props.itemData;
    const { handleBookmarkClick, favoriteItems } = useContext(Context);

  return (
    <div className="w-[250px] md:w-[280px] h-[150px] rounded-xl shadow-lg shadow-[--item-shadow] p-4 cursor-pointer transition hover:scale-105 relative">
      <div className="absolute right-4 text-[#DC7633]" onClick={() => handleBookmarkClick(id)}>
      {favoriteItems[id] === false ? <IoBookmarkOutline size={20}/> : <IoBookmark size={20}/>}
      </div>
      <Link to={url}>
        <img className="w-[40px] h-[40px] border border-solid border-[--image-border] rounded mb-4" src={image} alt=""/>
        <h2 className="text-[--item-title]">{title}</h2>
        <p className="text-[10px] text-[--item-description]">{description}</p>
      </Link>
    </div>
  )
}
