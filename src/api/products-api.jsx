import axios from 'axios';

export const getProducts = () =>
  axios.get('http://localhost:4040/products').then(({ data }) => data);

export const addProduct = payload =>
  axios
    .post('http://localhost:4040/products', payload)
    .then(({ data }) => data);
