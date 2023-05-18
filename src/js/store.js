import './support.js';
import './theme';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { doc, setDoc, getDoc } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyDdiX4miDnvSyE7S-piSDUDrOT024HmPxc',
  authDomain: 'partybookshard.firebaseapp.com',
  databaseURL:
    'https://partybookshard-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'partybookshard',
  storageBucket: 'partybookshard.appspot.com',
  messagingSenderId: '572831827905',
  appId: '1:572831827905:web:09a3282865bb9169df1140',
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export async function setDB(array) {
  const userID = localStorage.getItem('currentUser');
  await setDoc(doc(db, 'users', userID), {
    booksArray: array,
  });
}
export async function getDB() {
  const userID = localStorage.getItem('currentUser');
  const docRef = doc(db, 'users', userID);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().booksArray;
  } else {
    console.log('No such document!');
  }
}

getDB();

//
const booksPerPage = 3;
let currentPage = 1;

async function renderBookList(page) {
  const bookIds = await getDB();

  const startIndex = (page - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const promises = bookIds
    .slice(startIndex, endIndex)
    .map(bookId =>
      fetch(`https://books-backend.p.goit.global/books/${bookId}`)
    );

  Promise.all(promises)
    .then(responses => Promise.all(responses.map(res => res.json())))
    .then(data => {
      const booksMarkup = data
        .map(
          ({
            book_image,
            title,
            author,
            description,
            buy_links,
            _id,
            list_name,
          }) => {
            return ` <div class='book'>
  <img class='book__image' src=${book_image} alt=${title}>
  <div class='tablet'>
    <div class='information'>
      <h2 class='book__title'>${
        title.length > 16 ? title.slice(0, 16) + '...' : title
      }</h2>
      <p class='book__categ'>${
        list_name.length > 20 ? list_name.slice(0, 20) + '...' : list_name
      }</p>
      <p class='book__description'>${description || 'no description'}</p>
    </div>
    <div class='shop__wrap'>
      <p class='book__author'>${author}</p>
      
        <ul class="logo__list">
              <li class="logo-item">
                <a href="${
                  buy_links[0].url
                }" target="_new" rel="noopener noreferer" aria-label="link to Amazon">
                 <svg class="svg-shop-link" width="32" height="11">
    <use href=${require('../images/modal/modal-img.svg')}#icon-amazon></use>
  </svg>
                </a>
              </li>
              <li class="logo-item">
                <a href="${
                  buy_links[1].url
                }" target="_new rel="noopener noreferer" aria-label="link to Apple Books">
                  <svg class="svg-shop-link" width="16" height="16">
    <use href=${require('../images/modal/modal-img.svg')}#icon-apple></use>
  </svg>
                </a>
              </li>
              <li class="logo-item">
                <a href="${
                  buy_links[4].url
                }" target="_new rel="noopener noreferer" aria-label="link to Bookshop">
                  <svg class="svg-shop-link" width="16" height="16">
    <use href=${require('../images/modal/modal-img.svg')}#icon-book_shop></use>
  </svg>
                  </a>
              </li>
            </ul>
 
    </div>
     </div>
   <button class='delete-book' data-id='${_id}'>
     <svg class="delete-icon" width='16px' height='16px'>
              <use href=${require('../images/support/support-svg.svg')}#icon-trash></use>
            </svg>
    </button>
</div>`;
          }
        )
        .join('');

      const bookList = document.getElementById('bookList');
      bookList.innerHTML = booksMarkup;

      // check books
      if (data.length === 0) {
        // if not books here
        if (currentPage === 1) {
          bookList.innerHTML = '<p>No books found</p>';
          if (!bookIds.length) {
            bookList.classList.add('empty-section');
            bookList.innerHTML = `<p class="empty-store-text-img">This page is empty, add some books and proceed to order.</p> 
             <img class="empty-image" src="${require('../images/shopping-list/img-books-322@2x.png')}" alt="books">
           `;
          }
        } else {
          // Иначе перенаправляем пользователя на предыдущую страницу
          const previousPage = currentPage - 1;
          const previousUrl = `${window.location.pathname}?page=${previousPage}`;
          window.location.replace(previousUrl);
        }
      } else {
        renderPagination(bookIds);
      }
    })
    .catch(error => {
      console.error(error);
    });
  const bookImages = document.querySelectorAll('.book__image');
  bookImages.forEach(image => {
    image.classList.add('animate');
  });
}
function renderPagination(bookIds) {
  const totalPages = Math.ceil(bookIds.length / booksPerPage);
  if (totalPages < 2) {
    document.getElementById('pagination').innerHTML = '';
    return;
  }

  let buttons = '';
  buttons += `
    <button class="pagination-button black" data-page="1">&lt;&lt;</button>
    <button class="pagination-button black" data-page="${
      currentPage > 1 ? currentPage - 1 : 1
    }">&lt;</button>
  `;

  const maxVisibleButtons = 4;
  const maxVisiblePages = maxVisibleButtons - 1; // max count visible
  const halfVisibleButtons = Math.floor(maxVisibleButtons / 2);
  let firstVisiblePage = 1;
  let lastVisiblePage = totalPages;

  if (totalPages > maxVisibleButtons) {
    const leftSideButtons = halfVisibleButtons;
    const rightSideButtons = maxVisibleButtons - leftSideButtons - 1;

    if (currentPage <= halfVisibleButtons) {
      lastVisiblePage = maxVisiblePages;
    } else if (currentPage >= totalPages - halfVisibleButtons + 1) {
      firstVisiblePage = totalPages - maxVisiblePages + 1;
    } else {
      firstVisiblePage = currentPage - halfVisibleButtons + 1;
      lastVisiblePage = currentPage + rightSideButtons - 1;
    }

    if (firstVisiblePage > 1) {
      buttons += `
        <button class="pagination-button notclick">...</button>
      `;
    }
  }

  for (let i = firstVisiblePage; i <= lastVisiblePage; i++) {
    const activeClass = i === currentPage ? 'active' : '';
    buttons += `
      <button class="pagination-button ${activeClass}" data-page="${i}">
        ${i}
      </button>
    `;
  }

  if (totalPages > maxVisibleButtons) {
    if (lastVisiblePage < totalPages) {
      buttons += `
        <button class="pagination-button notclick">...</button>
      `;
    }

    if (lastVisiblePage !== totalPages) {
      buttons += `
        <button class="pagination-button ${
          lastVisiblePage === totalPages ? 'active' : ''
        }" data-page="${totalPages}">${totalPages}</button>
      `;
    }
  }

  buttons += `
    <button class="pagination-button yellow" data-page="${
      currentPage < totalPages ? currentPage + 1 : totalPages
    }">&gt;</button>
    <button class="pagination-button yellow" data-page="${totalPages}">&gt;&gt;</button>
  `;

  const paginationContainer = document.getElementById('pagination');
  paginationContainer.innerHTML = buttons;

  const paginationButtons = document.querySelectorAll('.pagination-button');
  paginationButtons.forEach(button => {
    button.addEventListener('click', function () {
      currentPage = parseInt(this.getAttribute('data-page'));
      renderBookList(currentPage);

      renderPagination(bookIds);
    });
  });
}

const bookList = document.getElementById('bookList');
bookList.addEventListener('click', function (event) {
  const target = event.target;

  if (target.classList.contains('delete-book')) {
    const bookId = target.getAttribute('data-id');
    removeBook(bookId);
    target.parentNode.parentNode.removeChild(target.parentNode);
  }
});

async function removeBook(bookId) {
  let bookIds = await getDB();
  bookIds = bookIds.filter(id => id !== bookId);

  setDB(bookIds);

  renderPagination(bookIds);
  renderBookList(currentPage);
}

//
renderBookList(currentPage);
renderPagination(getDB());
