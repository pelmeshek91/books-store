function renderBuyLinks(buyLinks) {
  const allowedLinks = ['Amazon', 'Apple Books', 'Bookshop'];

  const logoList = buyLinks
    .filter(buyLink => allowedLinks.includes(buyLink.name))
    .map(buyLink => {
      let logoImageSrc = '';
      if (buyLink.name === 'Amazon') {
        logoImageSrc =
          require('../images/modal/modal-img.svg') + '#icon-amazon';
      } else if (buyLink.name === 'Apple Books') {
        logoImageSrc = require('../images/modal/modal-img.svg') + '#icon-apple';
      } else if (buyLink.name === 'Bookshop') {
        logoImageSrc = require('../images/modal/modal-img.svg') + '#icon-apple';
      }
      return `
        <li class="logo-item">
          <a href="${buyLink.url}" target="_new" rel="noopener noreferer" aria-label="link to ${buyLink.name}">
            <img src="${logoImageSrc}" alt="${buyLink.name}" width="62" height="19"/>
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

function renderBookList() {
  const bookIdsJson = localStorage.getItem('bookIds');
  const bookIds = JSON.parse(bookIdsJson) || [];
  const promises = bookIds.map(bookId =>
    fetch(`https://books-backend.p.goit.global/books/${bookId}`)
  );

  Promise.all(promises)
    .then(responses => Promise.all(responses.map(res => res.json())))
    .then(data => {
      const booksMarkup = data.map(book => {
        return `
          <div class="book">
            <h2 class="book__title">${book.title}</h2>
            <p class="book__author">Author: ${book.author}</p>
            <p class="book__description">${book.description}</p>
            <img class="book__image" src="${book.book_image}" alt="${
          book.title
        }">
            ${renderBuyLinks(book.buy_links)}
            <button class="delete-book" data-id="${book._id}">Delete</button>
          </div>
        `;
      });

      const bookList = document.getElementById('bookList');
      bookList.innerHTML = booksMarkup.join('');
    })
    .catch(error => {
      console.error(error);
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
  const bookIdsJson = localStorage.getItem('bookIds');
  let bookIds = JSON.parse(bookIdsJson) || [];
  bookIds = bookIds.filter(id => id !== bookId);
  localStorage.setItem('bookIds', JSON.stringify(bookIds));

  // Remove the book from localStorage based on its bookId
  localStorage.removeItem(bookId);
}

renderBookList();
