import { categoriesList, sectionBooksEl } from './allBooks';
import { fetchBooks } from './booksApi';
import { createMarkup } from './createMarkup';

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
