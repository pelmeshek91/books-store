import { fetchBooks } from './js/booksApi.js';
import { markupCategories } from './js/markupCategories.js';
import { createMurkUpAllBooks, sectionBooksEl, onHandleCategoriesForButton } from './js/allBooks.js';
import { handleClickOnFilter } from './js/categories.js';
import './js/support.js';
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
  if (e.target.textContent === 'All categories') {
    createMurkUpAllBooks();
    return;
  }
  if (e.target.nodeName === 'BUTTON') {
    const categoryName = e.target.textContent;
    handleClickOnFilter(categoryName);
  }
};

listElem.addEventListener('click', onHandleCategories);




sectionBooksEl.addEventListener('click', onHandleCategoriesForButton)