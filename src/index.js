import { fetchBooks } from './js/booksApi.js';
import { markupCategories } from './js/markupCategories.js';
import { createMurkUpAllBooks } from './js/allBooks.js';

const listElem = document.querySelector('.categories_list');
const fetchList = '/category-list';

const categoriesList = async point => {
  try {
    const results = await fetchBooks(point);

    listElem.insertAdjacentHTML('afterbegin', markupCategories(results));
    return results;
  } catch (error) {
    console.log(error);
  }
};
categoriesList(fetchList);
createMurkUpAllBooks();

const onHandleCategories = e => {
  console.log(e.target);
};

listElem.addEventListener('click', onHandleCategories);
