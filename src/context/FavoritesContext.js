import React, { createContext, useEffect, useState } from "react";

export const FavouriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites !== null) {
      return JSON.parse(savedFavorites);
    }
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (friend) => {
    setFavorites((prevState) => [...prevState, friend]);
  };

  const deleteFromFavorites = (friendId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((friend) => friend.id !== friendId)
    );
  };

  const isFavorite = (friendId) => {
    return favorites.some((friend) => friend.id === friendId);
  };
  return (
    <FavouriteContext.Provider
      value={{
        favorites,
        addToFavorites,
        deleteFromFavorites,
        isFavorite,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavoriteProvider;
