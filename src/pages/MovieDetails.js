import React, { useEffect, useState } from 'react';
import { getMovieDetails } from '../api/tmdb';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const load = async () => {
      const { data } = await getMovieDetails(id);
      setMovie(data);
    };
    load();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <Typography variant="h4">{movie.title}</Typography>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <Typography>{movie.overview}</Typography>
      <Typography>Genres: {movie.genres.map(g => g.name).join(', ')}</Typography>
      <Typography>Rating: {movie.vote_average}</Typography>
    </div>
  );
};

export default MovieDetails;
