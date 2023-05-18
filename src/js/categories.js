import { log } from 'console';
import { categoriesList, sectionBooksEl } from './allBooks';
import { fetchBooks } from './booksApi';
import { createMarkup } from './createMarkup';

export const home = document.querySelector('.home-btn');
export const shopping = document.querySelector('.shop-btn');
export async function handleClickOnFilter(category) {
  try {
    const categoryBooks = `/category?category=${category}`;
    const bookItems = await fetchBooks(categoryBooks);
    sectionBooksEl.innerHTML = '';
    const categoryArray = category.split(' ');
    const firstWords = categoryArray
      .slice(0, categoryArray.length - 1)
      .join(' ');
    const lastWord = categoryArray[categoryArray.length - 1];

    sectionBooksEl.insertAdjacentHTML(
      'afterbegin',
      `<h2 class="title-hero">${firstWords} <span>${lastWord}</span></h2>`
    );
    const list = document.createElement('ul');
    list.classList.add('category-books');
    sectionBooksEl.append(list);

    bookItems
      .map(book => {
        list.insertAdjacentHTML('beforeend', createMarkup(book));
      })
      .join('');
  } catch (error) {
    console.log(error);
  }
}

const logoutBtn = document.querySelector('.sign-btn');
const textBtn = logoutBtn.textContent.trim();
logoutBtn.addEventListener('mouseover', function () {
  if (textBtn === 'Sign up') {
    return;
  }
  logoutBtn.textContent = 'log out';
});

logoutBtn.addEventListener('mouseout', function () {
  if (textBtn === 'Sign up') {
    return;
  }
  logoutBtn.textContent = textBtn;
});
