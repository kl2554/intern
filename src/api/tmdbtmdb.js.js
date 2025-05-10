import axios from 'axios';

const API_KEY = '3f15a23b28a335029a349364d9febdb9';
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;
