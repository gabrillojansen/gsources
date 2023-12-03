import React, { useContext } from 'react'
import { Context } from "../context/Context"
import { FavoritesItem } from '../components/FavoritesItem';

export const Favorites = () => {
    const { ITEMS, favoriteItems } = useContext(Context);

  return (
    <div className="w-full flex items-center justify-center">
      <div className="mt-12 max-w-[1290px] m-auto grid justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {ITEMS.map((ITEM) => {
              if (favoriteItems[ITEM.id] === true) {
                  return <FavoritesItem itemData={ITEM}/>
              }
              return null;
          })}
      </div>
    </div>
  )
}
