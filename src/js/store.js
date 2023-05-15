import './support';
import './theme';

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

function renderBookList() {
  const bookIdsJson = localStorage.getItem('bookId');
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
          <img class="book__image" src="${book.book_image}" alt="${book.title}">
          <div class="tablet">
          <div class="information"><h2 class="book__title">${book.title}</h2>
          <p class="book__author">Author: ${book.author}</p>
          
          </div><p class="book__description">${book.description}</p></div>
          <div class="shoping-box">

            
            
            
            
            ${renderBuyLinks(book.buy_links)}
            
          </div>
                    <button class="delete-book" data-id="${
                      book._id
                    }">Delete</button>
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
  const bookIdsJson = localStorage.getItem('bookId');
  let bookIds = JSON.parse(bookIdsJson) || [];
  bookIds = bookIds.filter(id => id !== bookId);
  localStorage.setItem('bookId', JSON.stringify(bookIds));

  // Remove the book from localStorage based on its bookId
  localStorage.removeItem(bookId);
}

renderBookList();
