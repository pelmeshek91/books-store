import { fetchBooks } from './booksApi.js';
import { markupCategories } from './markupCategories.js';
import { handleClickOnFilter } from './categories.js';
import { createMurkUpAllBooks } from './allBooks.js';
export const listElem = document.querySelector('.categories_list');
export const fetchList = '/category-list';

export const categoriesList = async point => {
  try {
    const results = await fetchBooks(point);

    listElem.insertAdjacentHTML('afterbegin', markupCategories(results));
    return results;
  } catch (error) {
    console.log(error);
  }
};

export const onHandleCategories = e => {
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
