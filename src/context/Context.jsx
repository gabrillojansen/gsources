import React, { createContext, useState } from 'react'
import { ITEMS } from '../data/ITEMS';

export const Context = createContext(null);

const getDefaultFavorites = () => {
    let isFavorites = {};
    for (let i = 1; i < ITEMS.length + 1; i++) {
        isFavorites[i] = false;
    }
    return isFavorites;
}

export const ContextProvider = (props) => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [favoriteItems, setFavoriteItems] = useState(getDefaultFavorites());

    const handleMenuClick = () => {
        setIsMenuActive(!isMenuActive)
    }
    
    const handleBookmarkClick = (itemId) => {
        setFavoriteItems((prev) => (
            { ...prev, [itemId]: prev[itemId] === false ? true : false }
        ))
        console.log(favoriteItems);
    }

    const countOfFavoriteItems = () => {
        let count = 0;
        for (let i = 1; i < ITEMS.length + 1; i++) {
            if (favoriteItems[i] !== false) {
                count += 1;
            }
        }
        return count;
    }

    const ContextValue = {
        ITEMS,
        handleMenuClick,
        isMenuActive,
        handleBookmarkClick,
        favoriteItems,
        countOfFavoriteItems
    }

  return (
    <div>
        <Context.Provider value={ContextValue}>
            { props.children }
        </Context.Provider>
    </div>
  )
}
