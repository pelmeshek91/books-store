import './js/modal';
import {
  fetchList,
  categoriesList,
  onHandleCategories,
} from './js/categotyList';
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

categoriesList(fetchList);
createMurkUpAllBooks();

listElem.addEventListener('click', onHandleCategories);
sectionBooksEl.addEventListener('click', onHandleCategoriesForButton);
