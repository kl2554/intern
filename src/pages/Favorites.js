import React from 'react';
import MovieCard from '../components/MovieCard';

const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  return (
    <div>
      <h2>Your Favorites</h2>
      <div className="movie-grid">
        {favorites.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Favorites;