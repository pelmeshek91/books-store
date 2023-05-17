import './support.js';
import './theme';
//

//
const booksPerPage = 3;
let currentPage = 1;
let bookIds = [];
// function renderBuyLinks(buyLinks) {
//   const allowedLinks = ['Amazon', 'Apple Books', 'Bookshop'];

//   const logoList = buyLinks
//     .filter(buyLink => allowedLinks.includes(buyLink.name))
//     .map(buyLink => {
//       let iconId = '';
//       if (buyLink.name === 'Amazon') {
//         iconId = 'icon-amazon';
//       } else if (buyLink.name === 'Apple Books') {
//         iconId = 'icon-apple';
//       } else if (buyLink.name === 'Bookshop') {
//         iconId = 'icon-book_shop';
//       }
//       return `
//       <li class="logo-item">
//         <a href="${
//           buyLink.url
//         }" target="_new" rel="noopener noreferer" aria-label="link to ${
//         buyLink.name
//       }">
//           <svg class="svg-shop-link" width="62" height="19">
//             <use href="${require('../images/modal/modal-img.svg')}#${iconId}"></use>
//           </svg>
//         </a>
//       </li>
//     `;
//     })
//     .join('');
//   return logoList;
// }

function renderBookList(page) {
  const bookIdsJson = localStorage.getItem('bookId');
  const bookIds = JSON.parse(bookIdsJson) || [];
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
    <button class='delete-book' data-id='${_id}'>Delete</button>
  </div>
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
            bookList.innerHTML = `<h2>This page is empty, add some books and proceed to order.</h2> 
             <img class="empty-image" src="${require('../images/shopping-list/img-books-322@2x.png')}" alt="">
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

function removeBook(bookId) {
  const bookIdsJson = localStorage.getItem('bookId');
  let bookIds = JSON.parse(bookIdsJson) || [];
  bookIds = bookIds.filter(id => id !== bookId);
  localStorage.setItem('bookId', JSON.stringify(bookIds));

  // Remove the book from localStorage based on its bookId
  localStorage.removeItem(bookId);
  renderBookList(currentPage);
  renderPagination(bookIds);
}
//

//
renderBookList(currentPage);
renderPagination(bookIds);
