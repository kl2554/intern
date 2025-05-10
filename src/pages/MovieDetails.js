import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = '3f15a23b28a335029a349364d9febdb9';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=credits,videos`)
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  const trailer = movie.videos.results.find(v => v.type === 'Trailer');

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <h3>Cast</h3>
      <ul>
        {movie.credits.cast.slice(0, 5).map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
      {trailer && (
        <iframe
          title="trailer"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailer.key}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default MovieDetails;
