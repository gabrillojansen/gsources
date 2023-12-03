import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { Context } from '../context/Context';

export const FavoritesItem = (props) => {
  const { id, image, title, description, url } = props.itemData;
  const { handleBookmarkClick, favoriteItems } = useContext(Context);

  return (
    <div className="w-[280px] h-[150px] rounded-xl shadow-lg shadow-[#2C3E50] p-4 cursor-pointer transition hover:scale-105 relative">
      <div className="absolute right-4 text-[#DC7633]" onClick={() => handleBookmarkClick(id)}>
      { favoriteItems[id] === false ? <IoBookmarkOutline size={20}/> : <IoBookmark size={20}/> }
      </div>
      <Link to={url}>
        <img className="mb-4 w-[40px] h-[40px] border border-solid border-[#212F3D] rounded" src={image} alt="" />
        <h2 className="text-[#D0D3D4]">{title}</h2>
        <p className="text-[10px] text-[#626567]">{description}</p>
      </Link>
    </div>
  )
}
