import { fetchBooks } from './booksApi';
import { handleClickOnFilter } from './categories';
import { removeMask } from './loader';
export const sectionBooksEl = document.querySelector('.books');

export async function createMurkUpAllBooks() {
  const urlAllBooks = 'top-books';
  try {
    const res = await fetchBooks(urlAllBooks);
    sectionBooksEl.innerHTML =
      '<h1 class="title-hero">Best Sellers <span>Books</span></h1><ul class="categories"></ul>';
    const categoriesList = document.querySelector('.categories');
    categoriesList.innerHTML = createCategoryBooks(res);
  } catch {
    console.log('Error');
  }
  removeMask();
}

function createCategoryBooks(data) {
  return data
    .map(category => {
      return `  <li>
      <h2>${category.list_name}</h2>
      <ul class="category-books">
      ${createBooks(category.books)}
      </ul>
    <button class="button-see-more" type="button">SEE MORE</button>
    </li>`;
    })
    .join('');
}

function createBooks(books) {
  return books
    .map(book => {
      return ` <li class="book-card" data-id="${book._id}">
          <img
            src=${book.book_image}
            alt=${book.list_name} class="book-image"
          />
          <h3>${
            book.title.length > 20
              ? book.title.slice(0, 20) + '...'
              : book.title
          }</h3>
          <p>${book.author}</p>
        </li>`;
    })
    .join('');
}

export function onHandleCategoriesForButton(e) {
  if (e.target.nodeName !== 'BUTTON') return;
  const res = e.target.parentNode;
  const categoryName = res.querySelector('h2').textContent;
  handleClickOnFilter(categoryName);
}
