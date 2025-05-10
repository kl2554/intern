import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies, searchMovies } from '../api/tmdb';
import SearchBar from '../components/SearchBar';
import MovieGrid from '../components/MovieGrid';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const load = async () => {
      const { data } = await fetchTrendingMovies();
      setMovies(data.results);
    };
    load();
  }, []);

  const handleSearch = async (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value.length > 2) {
      const { data } = await searchMovies(value);
      setMovies(data.results);
    }
  };

  return (
    <div>
      <SearchBar value={search} onChange={handleSearch} />
      <MovieGrid movies={movies} />
    </div>
  );
};

export default Home;
