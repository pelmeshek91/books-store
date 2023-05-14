import { fetchBooks } from './booksApi';
import { sectionBooksEl } from './allBooks.js';

const divchik = document.querySelector('.backdrop');

sectionBooksEl.addEventListener('click', e => {
  const item = e.target.closest('.book-card');
  if (!item) {
    return;
  }
  selectBook(item);
});

async function selectBook(item) {
  divchik.classList.remove('is-hidden');

  const id = item.getAttribute('data-id');
  const res = await fetchBooks(id);
  const { _id } = res;
  const settings = { _id };
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
      chooseToLSBtn.textContent = 'REMOVE FROM THE SHOPPING LIST';
      chooseToLSBtn.classList.remove('active');
    } else {
      chooseToLSBtn.textContent = 'ADD TO SHOPING LIST';
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
  return `
    <div class="modal-add-book-window">
      <div class="all-book-modal">
        <button class="close-btn-modal">
          <svg class="close-svg-modal" width="28" height="28">
            <use href="./images/svg/general-svg.svg.svg#icon-x-close"></use>
          </svg>
        </button>
        <img class="img-book-modal" src="${book_image}" alt="${list_name}" />
          <div class="book-modal">
            <h3 class="title-book-modal">${title}</h3>
            <p class="author-book-modal">${author}</p>
            <p class="text-book-modal">${description || 'no description'}</p>
            <ul class="logo-list">
              <li class="logo-item">
                <a href="${
                  buy_links[0].url
                }" target="_new" rel="noopener noreferer" aria-label="link to Amazon">
                  <img src="./images/modal/image1@1x.png" alt="Amazon" width="62" height="19"/>
                </a>
              </li class="logo-item">
              <li>
                <a href="${
                  buy_links[1].url
                }" target="_new rel="noopener noreferer" aria-label="link to Apple Books">
                  <img src="./images/modal/image2@1x.png" alt="Apple Books" width="32" height="33"/>
                </a>
              </li>
              <li class="logo-item">
                <a href="${
                  buy_links[4].url
                }" target="_new rel="noopener noreferer" aria-label="link to Bookshop">
                  <img src="./images/modal/image3@1x.png" alt="Bookshop" width="38" height="36"/>
                  </a>
              </li>
            </ul>
          </div>  
      </div>
          <button class="btn-chose-book active">ADD TO SHOPING LIST</button>
    </div>`;
}
