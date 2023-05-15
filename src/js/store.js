const booksPerPage = 3;
let currentPage = 1;
let bookIds = [];
function renderBuyLinks(buyLinks) {
  const allowedLinks = ['Amazon', 'Apple Books', 'Bookshop'];

  const logoList = buyLinks
    .filter(buyLink => allowedLinks.includes(buyLink.name))
    .map(buyLink => {
      let iconId = '';
      if (buyLink.name === 'Amazon') {
        iconId = 'icon-amazon';
      } else if (buyLink.name === 'Apple Books') {
        iconId = 'icon-apple';
      } else if (buyLink.name === 'Bookshop') {
        iconId = 'icon-book_shop';
      }
      return `
      <li class="logo-item">
        <a href="${
          buyLink.url
        }" target="_new" rel="noopener noreferer" aria-label="link to ${
        buyLink.name
      }">
          <svg class="svg-shop-link" width="62" height="19">
            <use href="${require('../images/modal/modal-img.svg')}#${iconId}"></use>
          </svg>
        </a>
      </li>
    `;
    });

  return `
  <ul class="logo-list">
    ${logoList.join('')}
  </ul>
`;
}

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
      const booksMarkup = data.map(book => {
        return `
          <div class="book">
            <img class="book__image" src="${book.book_image}" alt="${
          book.title
        }">
            <div class="tablet">
              <div class="information">
                <h2 class="book__title">${book.title}</h2>
                <p class="book__author">Author: ${book.author}</p>
              </div>
              <p class="book__description">${book.description}</p>
            </div>
            <div class="shoping-box">
              ${renderBuyLinks(book.buy_links)}
            </div>
            <button class="delete-book" data-id="${book._id}">Delete</button>
          </div>
        `;
      });

      const bookList = document.getElementById('bookList');
      bookList.innerHTML = booksMarkup.join('');
      renderPagination(bookIds);
    })
    .catch(error => {
      console.error(error);
    });
}
function renderPagination(bookIds) {
  const totalPages = Math.ceil(bookIds.length / booksPerPage);
  let buttons = '';

  buttons += `
    <button class="pagination-button black" data-page="1">&lt;&lt;</button>
    <button class="pagination-button black" data-page="${
      currentPage > 1 ? currentPage - 1 : 1
    }">&lt;</button>
  `;

  for (let i = 1; i <= totalPages; i++) {
    const activeClass = i === currentPage ? 'active' : '';
    buttons += `
      <button class="pagination-button ${activeClass}" data-page="${i}">
        ${i}
      </button>
    `;
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
}

renderBookList(currentPage);
renderPagination(bookIds);
