import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const API_KEY = 'YOUR_API_KEY';

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setMovies(data.results));
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      <div className="movie-grid">
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default TrendingMovies;
