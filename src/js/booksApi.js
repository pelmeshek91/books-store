import axios from 'axios';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books';
export const fetchBooks = async params => {
  const books = await axios.get(params);
  return books.data;
};
