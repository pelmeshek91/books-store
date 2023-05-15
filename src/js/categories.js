import { categoriesList, sectionBooksEl } from './allBooks';
import { fetchBooks } from './booksApi';
import { createMarkup } from './createMarkup';

export async function handleClickOnFilter(category) {
  try {
    const categoryBooks = `/category?category=${category}`;
    const bookItems = await fetchBooks(categoryBooks);
    sectionBooksEl.innerHTML = '';

    const list = document.createElement('ul');
    list.classList.add('category-books');
    sectionBooksEl.append(list);

    bookItems
      .map(book => list.insertAdjacentHTML('beforeend', createMarkup(book)))
      .join('');
  } catch (error) {
    console.log(error);
  }
}
