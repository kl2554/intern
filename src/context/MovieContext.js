import React, { createContext, useState, useEffect } from 'react';

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() =>
    JSON.parse(localStorage.getItem('favorites')) || []
  );

  const addFavorite = (movie) => {
    const updated = [...favorites, movie];
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  const removeFavorite = (id) => {
    const updated = favorites.filter((movie) => movie.id !== id);
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  return (
    <MovieContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
