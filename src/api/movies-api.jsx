import axios from 'axios';
import { API_KEY } from './api-key';

const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMovies = query =>
  axios
    .get(`${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`)
    .then(({ data }) => data)
    .catch(error => error);

export const fetchMovieDetails = movieId =>
  axios
    .get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
    .then(({ data }) => data)
    .catch(error => error);
