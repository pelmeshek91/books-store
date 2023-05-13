import { fetchBooks } from './booksApi';
import { sectionBooksEl } from './allBooks.js';

const divchik = document.querySelector('.modal-add-book-window');

sectionBooksEl.addEventListener('click', selectBook);

async function selectBook(e) {
  divchik.classList.remove('is-hidden');
  const item = e.target.closest('.book-card');
  if (!item) {
    return;
  }
  const id = item.getAttribute('data-id');

  const res = await fetchBooks(id);
  const { _id, description, book_image, author, title, buy_links, list_name } =
    res;
  const settings = {
    _id,
    description,
    book_image,
    author,
    title,
    buy_links,
    list_name,
  };
  console.log(res);

  const markup = createMarkupForModal(res);
  divchik.innerHTML = markup;

  const closeBtn = document.querySelector('.close-btn-modal');
  closeBtn.addEventListener('click', e => {
    divchik.innerHTML = '';
    divchik.classList.add('is-hidden');
  });

  const chooseToLSBtn = document.querySelector('.btn-chose-book');
  chooseToLSBtn.addEventListener('click', e => {
    if (chooseToLSBtn.classList.contains('active')) {
      localStorage.setItem('settings', JSON.stringify(settings));
      chooseToLSBtn.textContent = 'remove from the shopping list';
      chooseToLSBtn.classList.remove('active');
    } else {
      chooseToLSBtn.textContent = 'Add to shopping list';
      chooseToLSBtn.classList.add('active');
      localStorage.removeItem('settings');
    }
  });
}

function createMarkupForModal({
  description,
  book_image,
  author,
  title,
  buy_links,
  list_name,
}) {
  return `<button class="close-btn-modal">
    <svg class="close-svg-modal" width="28" height="28">
      <use href="./images/svg/general-svg.svg.svg#icon-x-close"></use>
    </svg>
  </button>
  <img src="${book_image}" alt="${list_name}" />
  <div>
    <h3>${title}</h3>
    <p>${author}</p>
    <p>${description}</p>
    <ul>
      <li>
        <a href="${buy_links[0]}"><img src="./images/modal/image1@1x.png" alt="Amazon" /></a>
      </li>
      <li>
        <a href="${buy_links[1]}"
          ><img src="./images/modal/image2@1x.png" alt="Apple Books"
        /></a>
      </li>
      <li>
        <a href="${buy_links[4]}"
          ><img src="./images/modal/image3@1x.png" alt="Bookshop"
        /></a>
      </li>
    </ul>
  </div>
  <button class="btn-chose-book active">Add to shopping list</button>`;
}
