function renderBookList(pageNumber = 1, pageSize = 1) {
  const bookIdsJson = localStorage.getItem('bookIds');
  const bookIds = JSON.parse(bookIdsJson) || [];
  const promises = bookIds.map(bookId =>
    fetch(`https://books-backend.p.goit.global/books/${bookId}`)
  );

  Promise.all(promises)
    .then(responses => Promise.all(responses.map(res => res.json())))
    .then(data => {
      const booksMarkup = data
        .slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
        .map(book => {
          return `
            <div class="book">
              <img class="book__image" src="${book.book_image}" alt="${
            book.title
          }">
          <div class="container-card">
              <h2 class="book__title">${book.title}</h2>
              <p class="book__description">${book.description}</p>
              <p class="book__author">Author: ${book.author}</p>
              
            
              ${renderBuyLinks(book.buy_links)}
              <button class="delete-book" data-id="${book._id}">Delete</button>
            </div></div>
          `;
        });

      const bookList = document.getElementById('bookList');
      bookList.innerHTML = booksMarkup.join('');
    })
    .catch(error => {
      console.error(error);
    });
}

function renderBuyLinks(buyLinks) {
  const allowedStores = ['Amazon', 'IndieBound', 'Bookshop'];

  const filteredLinks = buyLinks.filter(link => {
    const storeName = link.name.split(' ')[0];
    return allowedStores.includes(storeName);
  });

  return filteredLinks
    .map(link => {
      return `
        <a class="book__buy-link" href="${link.url}">
          <img src="${link.icon_url}" class="ico-buy" alt="${link.name}">
        </a>
      `;
    })
    .join('');
}

function renderPaginationButtons(pageNumber, totalPages) {
  const paginationContainer = document.getElementById('pagination');
  const paginationButtons = [];

  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(`
      <button class="pagination__button ${
        i === pageNumber ? 'active' : ''
      }" data-page="${i}">
        ${i}
      </button>
    `);
  }

  paginationContainer.innerHTML = `
    <div class="pagination__buttons">
      ${paginationButtons.join('')}
    </div>
  `;

  paginationContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('pagination__button')) {
      const pageNumber = parseInt(event.target.getAttribute('data-page'), 10);
      renderBookList(pageNumber);
      renderPaginationButtons(pageNumber, totalPages);
    }
  });
}

function initPagination() {
  const bookIdsJson = localStorage.getItem('bookIds');
  const bookIds = JSON.parse(bookIdsJson) || [];

  const pageSize = 1;
  const totalPages = Math.ceil(bookIds.length / pageSize);

  renderPaginationButtons(1, totalPages);
  renderBookList(1, pageSize);
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

function removeBook(book) {
  const bookIdsJson = localStorage.getItem('bookIds');
  let bookIds = JSON.parse(bookIdsJson) || [];
  bookIds = bookIds.filter(id => id !== book);
  localStorage.setItem('bookIds', JSON.stringify(bookIds));

  localStorage.removeItem(book);
}

initPagination();
