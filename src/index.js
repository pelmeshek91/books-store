import './js/modal';
import {
  listElem,
  fetchList,
  categoriesList,
  onHandleCategories,
} from './js/categoriesList';
import {
  createMurkUpAllBooks,
  sectionBooksEl,
  onHandleCategoriesForButton,
} from './js/allBooks.js';

import './js/support.js';
import './js/loader.js';
import './js/theme';
import './js/autoriz_modal.js';
import './js/scrollUp';
import './js/burder';
import './js/firebase';
categoriesList(fetchList);
createMurkUpAllBooks();

listElem.addEventListener('click', onHandleCategories);
sectionBooksEl.addEventListener('click', onHandleCategoriesForButton);
