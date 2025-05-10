import React from 'react';
import { Grid } from '@mui/material';
import MovieCard from './MovieCard';

const MovieGrid = ({ movies }) => (
  <Grid container spacing={2}>
    {movies.map((movie) => (
      <Grid item key={movie.id}>
        <MovieCard movie={movie} />
      </Grid>
    ))}
  </Grid>
);

export default MovieGrid;
