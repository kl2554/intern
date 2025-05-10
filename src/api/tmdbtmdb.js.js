import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

export const fetchTrendingMovies = () => tmdb.get('/trending/movie/week');
export const searchMovies = (query, page = 1) =>
  tmdb.get('/search/movie', { params: { query, page } });
export const getMovieDetails = (id) => tmdb.get(`/movie/${id}`, { params: { append_to_response: 'videos,credits' } });

export default tmdb;
