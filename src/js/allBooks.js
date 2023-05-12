import { fetchBooks } from './booksApi';
const sectionBooksEl = document.querySelector('.books');

async function createMurkUpAllBooks() {
  const urlAllBooks = 'top-books';
  try {
    const res = await fetchBooks(urlAllBooks);
    console.log(res.books);
    sectionBooksEl.innerHTML =
      '<h1 class="title-hero">Best Sellers <span>Books</span></h1><ul class="categories"></ul>';
    const categoriesList = document.querySelector('.categories');
    categoriesList.innerHTML = createCategoryBooks(res);
  } catch {
    console.log('Error');
  }
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
      return ` <li class="book-card">
          <img
            src=${book.book_image}
            alt=${book.list_name}
            width="180"
            height="256"
          />
          <h3>${book.title}</h3>
          <p>${book.author}</p>
        </li>`;
    })
    .join('');
}
createMurkUpAllBooks();
