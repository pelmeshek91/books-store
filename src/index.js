import './js/modal';
import { fetchBooks } from './js/booksApi.js';
import { markupCategories } from './js/markupCategories.js';
import {
  createMurkUpAllBooks,
  sectionBooksEl,
  onHandleCategoriesForButton,
} from './js/allBooks.js';
import { handleClickOnFilter } from './js/categories.js';
import './js/support.js';
import './js/loader.js';
import './js/theme';
import './js/autoriz_modal.js';
import './js/scrollUp';
import './js/burder'

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
  const selectCateg = e.target.textContent;
  if (selectCateg === 'All categories') {
    switchTextDecor(e);
    createMurkUpAllBooks();
    return;
  }
  if (e.target.nodeName === 'BUTTON') {
    switchTextDecor(e);
    const categoryName = selectCateg;
    handleClickOnFilter(categoryName);
  }
};

function switchTextDecor(e) {
  const activeClass = listElem.querySelectorAll('.active-text');
  activeClass.forEach(activeEl => activeEl.classList.remove('active-text'));
  e.target.classList.add('active-text');
}

listElem.addEventListener('click', onHandleCategories);
sectionBooksEl.addEventListener('click', onHandleCategoriesForButton);
