import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'f2539677659f743858aef093e7c82be1';

export const search = query =>
  axios
    .get(`${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`)
    .then(({ data }) => data);
