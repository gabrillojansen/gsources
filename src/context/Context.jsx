import React, { createContext, useEffect, useState } from 'react'
import { ITEMS } from '../data/ITEMS';

export const Context = createContext(null);

// FAVORITES DEFAULT VALUE
const getDefaultFavorites = () => {
    let isFavorites = {};
    for (let i = 1; i < ITEMS.length + 1; i++) {
        isFavorites[i] = false;
    }
    return isFavorites;
}

export const ContextProvider = (props) => {
    // MENU
    const [isMenuActive, setIsMenuActive] = useState(false);
    const handleMenuClick = () => {
        setIsMenuActive(!isMenuActive)
    }

    // DARKMODE
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const storedisDarkMode = localStorage.getItem("isDarkMode");
        return storedisDarkMode ? JSON.parse(storedisDarkMode) : false;
    });
    const handleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    useEffect(() => {
        const body = document.querySelector("body");
        if (!isDarkMode) {
            body.setAttribute("color-scheme", "dark");
        } else {
            body.setAttribute("color-scheme", "light");
        }
        localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    }, [isDarkMode]);
    
    // LINKS
    const [isLinkActive, setIsLinkActive] = useState(() => {
        const storedIsLinkActive = localStorage.getItem("isLinkActive");
        return storedIsLinkActive ? JSON.parse(storedIsLinkActive) : "/";
    });
    const handleLinkClicked = (to) => {
        setIsLinkActive(to)
        handleMenuClick();
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        localStorage.setItem("isLinkActive", JSON.stringify(isLinkActive));
    }, [isLinkActive])

    // FAVORITE ITEMS
    const [favoriteItems, setFavoriteItems] = useState(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("isFavorites"));
        return storedFavorites || getDefaultFavorites();
    });
    useEffect(() => {
        localStorage.setItem("isFavorites", JSON.stringify(favoriteItems));
    }, [favoriteItems])
    
    // BOOKAMRK
    const handleBookmarkClick = (itemId) => {
        setFavoriteItems((prev) => (
            { ...prev, [itemId]: prev[itemId] === false ? true : false }
        ))
    }

    // COUNT OF FAVORITE ITEMS
    const countOfFavoriteItems = () => {
        let count = 0;
        for (let i = 1; i < ITEMS.length + 1; i++) {
            if (favoriteItems[i] === true) {
                count += 1;
            }
        }
        return count;
    }

    // CONTEXT VALUE
    const ContextValue = {
        ITEMS,
        handleMenuClick,
        setIsMenuActive,
        isMenuActive,
        handleDarkMode,
        isDarkMode,
        handleBookmarkClick,
        favoriteItems,
        countOfFavoriteItems,
        handleLinkClicked,
        isLinkActive,
    }

  return (
    <div>
        <Context.Provider value={ContextValue}>
            { props.children }
        </Context.Provider>
    </div>
  )
}
