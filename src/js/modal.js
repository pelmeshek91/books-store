import { fetchBooks } from './booksApi';
import { sectionBooksEl } from './allBooks.js';
import { getDB, setDB } from './autoriz_modal';


const divchik = document.querySelector('.backdrop');
const body = document.querySelector('body');

sectionBooksEl.addEventListener('click', e => {
  const item = e.target.closest('.book-card');
  if (!item) {
    return;
  }

  selectBook(item);
});

async function selectBook(item) {
  divchik.classList.remove('is-hidden');
  body.classList.add('no-scroll');
  divchik.innerHTML = '';
  const id = item.getAttribute('data-id');
  const res = await fetchBooks(id);

  const markup = createMarkupForModal(res);
  divchik.innerHTML = markup;


  const closeBtn = document.querySelector('.close-btn-modal');
  closeBtn.addEventListener('click', e => {
    divchik.innerHTML = '';
    divchik.classList.add('is-hidden');
    body.classList.remove('no-scroll');
  });

  document.addEventListener('click', clickBackdrop);

  function clickBackdrop(e) {
    if (e.target === divchik) {
      divchik.classList.add('is-hidden');
      document.removeEventListener('click', clickBackdrop);
      body.classList.remove('no-scroll');
    }
  }

  document.addEventListener('keydown', onEscapePress);
  function onEscapePress(e) {
    if (e.key === 'Escape') {
      divchik.classList.add('is-hidden');
      body.classList.remove('no-scroll');
      document.removeEventListener('keydown', onEscapePress);
    }
  }

  const chooseToLSBtn = document.querySelector('.btn-chose-book');
  const peshka = document.querySelector('.peshka');
 
  let data = await getDB()
  chooseToLSBtn.addEventListener('click', async() => {
    addAndRemuveBooksToLS(id);
     let data = await getDB()
   
    if (!data.includes(id)) {
      peshka.innerHTML = `Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.`;
    } else {
      peshka.innerHTML = '';
    }
  });

 
  if (data.includes(id)) {
    chooseToLSBtn.textContent = 'REMOVE FROM THE SHOPPING LIST';
    peshka.innerHTML = `Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.`;
  } else {
    chooseToLSBtn.textContent = 'ADD TO SHOPING LIST';
    peshka.innerHTML = '';
  }
}

async function addAndRemuveBooksToLS(id) {

    let data =await getDB()
  // let data = JSON.parse(localStorage.getItem('bookId')) || [];
  const chooseToLSBtn = document.querySelector('.btn-chose-book');

  if (data.includes(id)) {
    chooseToLSBtn.textContent = 'ADD TO SHOPING LIST';
    data = data.filter(item => item !== id);
  } else {
    chooseToLSBtn.textContent = 'REMOVE FROM THE SHOPPING LIST';
    data.push(id);
  }

  setDB(data)
  // localStorage.setItem('bookId', JSON.stringify(data));
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
            <use href=${require('../images/svg/general-svg.svg.svg')}#icon-x-close></use>
          </svg>
        </button>
        <img class="img-book-modal" src="${book_image}" alt="${list_name}" />
          <div class="book-modal">
            <h3 class="title-book-modal">${title}</h3>
            <p class="author-book-modal">${author}</p>
            <p class="text-book-modal">${description || 'no description'}</p>
            <ul class="logotip-list">
              <li class="logo-item">
                <a href="${
                  buy_links[0].url
                }" target="_new" rel="noopener noreferer" aria-label="link to Amazon">
                 <svg class="svg-shop-link" width="62" height="19">
    <use href=${require('../images/modal/modal-img.svg')}#icon-amazon></use>
  </svg>
                </a>
              </li>
              <li class="logo-item">
                <a href="${
                  buy_links[1].url
                }" target="_new rel="noopener noreferer" aria-label="link to Apple Books">
                  <svg class="svg-shop-link" width="33" height="32">
    <use href=${require('../images/modal/modal-img.svg')}#icon-apple></use>
  </svg>
                </a>
              </li>
              <li class="logo-item">
                <a href="${
                  buy_links[4].url
                }" target="_new rel="noopener noreferer" aria-label="link to Bookshop">
                  <svg class="svg-shop-link" width="38" height="36">
    <use href=${require('../images/modal/modal-img.svg')}#icon-book_shop></use>
  </svg>
                  </a>
              </li>
            </ul>
          </div>  
      </div>
          <button class="btn-chose-book active">Add to shopping list</button>
          <p class="peshka"></p>
    </div>`;
}
