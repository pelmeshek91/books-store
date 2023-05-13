import { sectionBooksEl } from './allBooks';
import { fetchBooks } from './booksApi';

export async function handleClickOnFilter(category) {
  try {
    const categoryBooks = `/category?category=${category}`;
    const bookItems = await fetchBooks(categoryBooks);
    sectionBooksEl.innerHTML = '';
    bookItems
      .map(book =>
        sectionBooksEl.insertAdjacentHTML('beforeend', createMarkup(book))
      )
      .join('');
  } catch (error) {
    console.log(error);
  }
}

function createMarkup(book) {
  const { book_image, title, author, list_name } = book;
  return `<li class="book-card">
        <img class="book-image" src="${book_image}" alt="${list_name}" />
        <h3 class="book-title">${
          title.length > 20 ? title.slice(0, 20) + '...' : title
        }</h3>
        <p class="book-author">${author}</p>
      </li>`;
}
