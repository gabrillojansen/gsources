import React, { createContext, useEffect, useState } from 'react'
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
    
    // Retrieve the items saved from the local storage
    const [isLinkActive, setIsLinkActive] = useState(() => {
        const storedIsLinkActive = localStorage.getItem("isLinkActive");
        return storedIsLinkActive ? JSON.parse(storedIsLinkActive) : "All";
    });

    // Retrieve the items saved from the local storage
    const [favoriteItems, setFavoriteItems] = useState(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("isFavorites"));
        return storedFavorites || getDefaultFavorites();
    });

    // Handle menu click funtion
    const handleMenuClick = () => {
        setIsMenuActive(!isMenuActive)
    }
    
    // Handle bookmark click funtion
    const handleBookmarkClick = (itemId) => {
        setFavoriteItems((prev) => (
            { ...prev, [itemId]: prev[itemId] === false ? true : false }
        ))
        console.log(favoriteItems);
    }

    // Count of favorite items
    const countOfFavoriteItems = () => {
        let count = 0;
        for (let i = 1; i < ITEMS.length + 1; i++) {
            if (favoriteItems[i] !== false) {
                count += 1;
            }
        }
        return count;
    }

    // Save the favorite items into local storage
    useEffect(() => {
        localStorage.setItem("isFavorites", JSON.stringify(favoriteItems));
    }, [favoriteItems])

    // Handle link clicked function
    const handleLinkClicked = (label) => {
      setIsLinkActive(label)
      handleMenuClick();
      window.scrollTo(0, 0);
    }
    // Save the link active into local storage
    useEffect(() => {
        localStorage.setItem("isLinkActive", JSON.stringify(isLinkActive));
    }, [isLinkActive])

    // Context Value
    const ContextValue = {
        ITEMS,
        handleMenuClick,
        isMenuActive,
        handleBookmarkClick,
        favoriteItems,
        countOfFavoriteItems,
        handleLinkClicked,
        isLinkActive
    }

  return (
    <div>
        <Context.Provider value={ContextValue}>
            { props.children }
        </Context.Provider>
    </div>
  )
}
