function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequireead5"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequireead5"] = parcelRequire;
}
parcelRequire.register("lW9CP", function(module, exports) {

$parcel$export(module.exports, "register", function () { return $ff867b2756918b0e$export$6503ec6e8aabbaf; }, function (v) { return $ff867b2756918b0e$export$6503ec6e8aabbaf = v; });
$parcel$export(module.exports, "resolve", function () { return $ff867b2756918b0e$export$f7ad0328861e2f03; }, function (v) { return $ff867b2756918b0e$export$f7ad0328861e2f03 = v; });
var $ff867b2756918b0e$export$6503ec6e8aabbaf;
var $ff867b2756918b0e$export$f7ad0328861e2f03;
"use strict";
var $ff867b2756918b0e$var$mapping = {};
function $ff867b2756918b0e$var$register(pairs) {
    var keys = Object.keys(pairs);
    for(var i = 0; i < keys.length; i++)$ff867b2756918b0e$var$mapping[keys[i]] = pairs[keys[i]];
}
function $ff867b2756918b0e$var$resolve(id) {
    var resolved = $ff867b2756918b0e$var$mapping[id];
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return resolved;
}
$ff867b2756918b0e$export$6503ec6e8aabbaf = $ff867b2756918b0e$var$register;
$ff867b2756918b0e$export$f7ad0328861e2f03 = $ff867b2756918b0e$var$resolve;

});

parcelRequire.register("g6XLO", function(module, exports) {

module.exports = new URL((parcelRequire("lW9CP")).resolve("9lMr0"), import.meta.url).toString();

});

parcelRequire.register("40SF9", function(module, exports) {

module.exports = new URL((parcelRequire("lW9CP")).resolve("cpiP6"), import.meta.url).toString();

});

parcelRequire.register("18N4x", function(module, exports) {

module.exports = new URL((parcelRequire("lW9CP")).resolve("6dFL7"), import.meta.url).toString();

});

var $e633e1d9046a2661$exports = {};

(parcelRequire("lW9CP")).register(JSON.parse('{"3cWWB":"shoppingList.8faad84c.js","9lMr0":"support-svg.b733e313.svg","cpiP6":"modal-img.e86d48d2.svg","6dFL7":"img-books-322@2x.9420775c.png"}'));

const $731294332225919c$export$be3a9fe2f1492e90 = [
    {
        title: "Save the Children",
        url: "https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",
        img: "#icon-image1"
    },
    {
        title: "Project HOPE",
        url: "https://www.projecthope.org/country/ukraine/",
        img: "#icon-image2"
    },
    {
        title: "International Medical Corps",
        url: "https://internationalmedicalcorps.org/country/ukraine/",
        img: "#icon-image4"
    },
    {
        title: "RAZOM",
        url: "https://www.razomforukraine.org/",
        img: "#icon-image6"
    },
    {
        title: "Medicins Sans Frontieres",
        url: "https://www.msf.org/ukraine",
        img: "#icon-image5"
    },
    {
        title: "Serhiy Prytula Charity Foundation",
        url: "https://prytulafoundation.org/en",
        img: "#icon-image9"
    },
    {
        title: "UNITED24",
        url: "https://u24.gov.ua/uk",
        img: "#icon-image3"
    },
    {
        title: "Action against hunger",
        url: "https://www.actionagainsthunger.org/location/europe/ukraine/",
        img: "#icon-image7"
    },
    {
        title: "World vision",
        url: "https://www.wvi.org/emergencies/ukraine",
        img: "#icon-image8"
    }
];

function $731294332225919c$export$7d89385b23a8f22b(charities) {
    let count = 1;
    return charities.map((charity)=>{
        const markup = `<li class="support-item block">
          <span class="support-nmbr">${count.toString().padStart(2, "0")}</span>
          <a href="${charity.url}" class="support-link" target="_new">
            <svg class="icon">
              <use href=${(parcelRequire("g6XLO"))}${charity.img}></use>
            </svg>
          </a>
        </li>`;
        count++;
        return markup;
    }).join("");
}


const $0319f202f1ddd3ca$var$list = document.querySelector(".support-list");
$0319f202f1ddd3ca$var$list.insertAdjacentHTML("beforeend", (0, $731294332225919c$export$7d89385b23a8f22b)((0, $731294332225919c$export$be3a9fe2f1492e90)));
const $0319f202f1ddd3ca$var$supportContainer = document.querySelector(".support-container");
const $0319f202f1ddd3ca$var$supportList = document.querySelector(".support-list");
const $0319f202f1ddd3ca$var$supportItems = document.querySelectorAll(".support-item");
const $0319f202f1ddd3ca$var$scrollBtn = document.querySelector(".scroll-btn");
$0319f202f1ddd3ca$var$scrollBtn.addEventListener("click", $0319f202f1ddd3ca$var$onScrollBtnClick);
let $0319f202f1ddd3ca$var$isExpanded = false;
let $0319f202f1ddd3ca$var$isContainerExpanded = false;
let $0319f202f1ddd3ca$var$visibleItemsCount = $0319f202f1ddd3ca$var$getVisibleItemsCount();
$0319f202f1ddd3ca$var$supportItems.forEach((item, index)=>{
    if (index >= $0319f202f1ddd3ca$var$visibleItemsCount) item.style.display = "none";
});
$0319f202f1ddd3ca$var$supportContainer.style.height = "fit-content";
$0319f202f1ddd3ca$var$scrollBtn.style.transform = "rotate(0deg)";
$0319f202f1ddd3ca$var$supportList.classList.add("show");
function $0319f202f1ddd3ca$var$onScrollBtnClick() {
    $0319f202f1ddd3ca$var$visibleItemsCount = $0319f202f1ddd3ca$var$getVisibleItemsCount();
    if (!$0319f202f1ddd3ca$var$isExpanded && !$0319f202f1ddd3ca$var$isContainerExpanded) {
        $0319f202f1ddd3ca$var$supportItems.forEach((item, index)=>{
            if (index >= $0319f202f1ddd3ca$var$visibleItemsCount) item.style.display = "flex";
        });
        $0319f202f1ddd3ca$var$scrollBtn.style.transform = "rotate(180deg)";
        $0319f202f1ddd3ca$var$supportContainer.style.transition = "all 500ms cubic-bezier(0.4, 0, 0.2, 1)";
    } else {
        $0319f202f1ddd3ca$var$supportItems.forEach((item, index)=>{
            if (index >= $0319f202f1ddd3ca$var$visibleItemsCount) item.style.display = "none";
        });
        $0319f202f1ddd3ca$var$supportContainer.style.height = "fit-content";
        $0319f202f1ddd3ca$var$scrollBtn.style.transform = "rotate(0deg)";
        $0319f202f1ddd3ca$var$supportContainer.style.transition = "all 500ms cubic-bezier(0.4, 0, 0.2, 1)";
    }
    $0319f202f1ddd3ca$var$isExpanded = !$0319f202f1ddd3ca$var$isExpanded;
    $0319f202f1ddd3ca$var$isContainerExpanded = !$0319f202f1ddd3ca$var$isContainerExpanded;
}
function $0319f202f1ddd3ca$var$getVisibleItemsCount() {
    const windowWidth = window.screen.width;
    if (windowWidth > 768) return 6;
    else return 4;
}
window.addEventListener("resize", $0319f202f1ddd3ca$var$onWindowResize);
function $0319f202f1ddd3ca$var$onWindowResize() {
    $0319f202f1ddd3ca$var$visibleItemsCount = $0319f202f1ddd3ca$var$getVisibleItemsCount();
    $0319f202f1ddd3ca$var$supportItems.forEach((item, index)=>{
        if (index >= $0319f202f1ddd3ca$var$visibleItemsCount) item.style.display = "none";
        else item.style.display = "flex";
    });
}


const $1c1402140273ec72$var$input = document.querySelector("#theme-switch-toggle");
const $1c1402140273ec72$var$body = document.querySelector("body");
const $1c1402140273ec72$var$theme = {
    LIGHT: "light-theme",
    DARK: "dark-theme"
};
$1c1402140273ec72$var$body.classList.add($1c1402140273ec72$var$theme.LIGHT);
$1c1402140273ec72$var$input.addEventListener("change", $1c1402140273ec72$var$switchTheme);
function $1c1402140273ec72$var$switchTheme() {
    $1c1402140273ec72$var$body.classList.toggle($1c1402140273ec72$var$theme.DARK);
    $1c1402140273ec72$var$body.classList.toggle($1c1402140273ec72$var$theme.LIGHT);
    $1c1402140273ec72$var$setThemeInfoToLocalStorage();
}
function $1c1402140273ec72$var$setThemeInfoToLocalStorage() {
    if ($1c1402140273ec72$var$body.classList.contains($1c1402140273ec72$var$theme.LIGHT)) {
        $1c1402140273ec72$var$input.setAttribute("checked", false);
        localStorage.setItem("active-theme", $1c1402140273ec72$var$theme.LIGHT);
    } else if ($1c1402140273ec72$var$body.classList.contains($1c1402140273ec72$var$theme.DARK)) {
        $1c1402140273ec72$var$input.setAttribute("checked", true);
        localStorage.setItem("active-theme", $1c1402140273ec72$var$theme.DARK);
    }
}
$1c1402140273ec72$var$getThemeInfoFromLocalStorage();
function $1c1402140273ec72$var$getThemeInfoFromLocalStorage() {
    if (localStorage.getItem("active-theme") === $1c1402140273ec72$var$theme.DARK) $1c1402140273ec72$var$switchTheme();
}



var $kkkJk = parcelRequire("kkkJk");
parcelRequire("2jZ8c");
parcelRequire("lo6ue");

var $DETqq = parcelRequire("DETqq");
const $8755fe9d45015d6c$var$firebaseConfig = {
    apiKey: "AIzaSyDdiX4miDnvSyE7S-piSDUDrOT024HmPxc",
    authDomain: "partybookshard.firebaseapp.com",
    databaseURL: "https://partybookshard-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "partybookshard",
    storageBucket: "partybookshard.appspot.com",
    messagingSenderId: "572831827905",
    appId: "1:572831827905:web:09a3282865bb9169df1140"
};
(0, $kkkJk.default).initializeApp($8755fe9d45015d6c$var$firebaseConfig);
const $8755fe9d45015d6c$var$db = (0, $kkkJk.default).firestore();
async function $8755fe9d45015d6c$export$711eec9b17b1ec9d(array) {
    const userID = localStorage.getItem("currentUser");
    await (0, $DETqq.setDoc)((0, $DETqq.doc)($8755fe9d45015d6c$var$db, "users", userID), {
        booksArray: array
    });
}
async function $8755fe9d45015d6c$export$b079286a3c21acde() {
    const userID = localStorage.getItem("currentUser");
    const docRef = (0, $DETqq.doc)($8755fe9d45015d6c$var$db, "users", userID);
    const docSnap = await (0, $DETqq.getDoc)(docRef);
    if (docSnap.exists()) return docSnap.data().booksArray;
    else console.log("No such document!");
}
//
const $8755fe9d45015d6c$var$booksPerPage = 3;
let $8755fe9d45015d6c$var$currentPage = 1;





async function $8755fe9d45015d6c$var$renderBookList(page) {
    const bookIds = await $8755fe9d45015d6c$export$b079286a3c21acde();
    const startIndex = (page - 1) * $8755fe9d45015d6c$var$booksPerPage;
    const endIndex = startIndex + $8755fe9d45015d6c$var$booksPerPage;
    const promises = bookIds.slice(startIndex, endIndex).map((bookId)=>fetch(`https://books-backend.p.goit.global/books/${bookId}`));
    Promise.all(promises).then((responses)=>Promise.all(responses.map((res)=>res.json()))).then((data)=>{
        const booksMarkup = data.map(({ book_image: book_image , title: title , author: author , description: description , buy_links: buy_links , _id: _id , list_name: list_name  })=>{
            return ` <div class='book'>
  <img class='book__image' src=${book_image} alt=${title}>
  <div class='tablet'>
    <div class='information'>
      <h2 class='book__title'>${title.length > 16 ? title.slice(0, 16) + "..." : title}</h2>
      <p class='book__categ'>${list_name.length > 20 ? list_name.slice(0, 20) + "..." : list_name}</p>
      <p class='book__description'>${description || "no description"}</p>
    </div>
    <div class='shop__wrap'>
      <p class='book__author'>${author}</p>
      
        <ul class="logo__list">
              <li class="logo-item">
                <a href="${buy_links[0].url}" target="_new" rel="noopener noreferer" aria-label="link to Amazon">
                 <svg class="svg-shop-link logo-amazon" width="32" height="11">
    <use href=${(parcelRequire("40SF9"))}#icon-amazon></use>
  </svg>
                </a>
              </li>
              <li class="logo-item">
                <a href="${buy_links[1].url}" target="_new rel="noopener noreferer" aria-label="link to Apple Books">
                  <svg class="svg-shop-link logo-apple" width="16" height="16">
    <use href=${(parcelRequire("40SF9"))}#icon-apple></use>
  </svg>
                </a>
              </li>
              <li class="logo-item">
                <a href="${buy_links[4].url}" target="_new rel="noopener noreferer" aria-label="link to Bookshop">
                  <svg class="svg-shop-link logo-bookshop-mini" width="16" height="16">
    <use href=${(parcelRequire("40SF9"))}#icon-book_shop></use>
  </svg>
                  </a>
              </li>
            </ul>
 
    </div>
     </div>
   <button class='delete-book' data-id='${_id}'>
     <svg class="delete-icon" width='16px' height='16px'>
              <use href=${(parcelRequire("g6XLO"))}#icon-trash></use>
            </svg>
    </button>
</div>`;
        }).join("");
        const bookList = document.getElementById("bookList");
        bookList.innerHTML = booksMarkup;
        // check books
        if (data.length === 0) {
            // if not books here
            if ($8755fe9d45015d6c$var$currentPage === 1) {
                bookList.innerHTML = "<p>No books found</p>";
                if (!bookIds.length) {
                    bookList.classList.add("empty-section");
                    bookList.innerHTML = `<p class="empty-store-text-img">This page is empty, add some books and proceed to order.</p> 
             <img class="empty-image" src="${(parcelRequire("18N4x"))}" alt="books">
           `;
                }
            } else {
                // Иначе перенаправляем пользователя на предыдущую страницу
                const previousPage = $8755fe9d45015d6c$var$currentPage - 1;
                const previousUrl = `${window.location.pathname}?page=${previousPage}`;
                window.location.replace(previousUrl);
            }
        } else $8755fe9d45015d6c$var$renderPagination(bookIds);
    }).catch((error)=>{
        console.error(error);
    });
    const bookImages = document.querySelectorAll(".book__image");
    bookImages.forEach((image)=>{
        image.classList.add("animate");
    });
}
function $8755fe9d45015d6c$var$renderPagination(bookIds) {
    const totalPages = Math.ceil(bookIds.length / $8755fe9d45015d6c$var$booksPerPage);
    if (totalPages < 2) {
        document.getElementById("pagination").innerHTML = "";
        return;
    }
    let buttons = "";
    buttons += `
    <button class="pagination-button black" data-page="1">&lt;&lt;</button>
    <button class="pagination-button black" data-page="${$8755fe9d45015d6c$var$currentPage > 1 ? $8755fe9d45015d6c$var$currentPage - 1 : 1}">&lt;</button>
  `;
    const maxVisibleButtons = 4;
    const maxVisiblePages = maxVisibleButtons - 1; // max count visible
    const halfVisibleButtons = Math.floor(maxVisibleButtons / 2);
    let firstVisiblePage = 1;
    let lastVisiblePage = totalPages;
    if (totalPages > maxVisibleButtons) {
        const leftSideButtons = halfVisibleButtons;
        const rightSideButtons = maxVisibleButtons - leftSideButtons - 1;
        if ($8755fe9d45015d6c$var$currentPage <= halfVisibleButtons) lastVisiblePage = maxVisiblePages;
        else if ($8755fe9d45015d6c$var$currentPage >= totalPages - halfVisibleButtons + 1) firstVisiblePage = totalPages - maxVisiblePages + 1;
        else {
            firstVisiblePage = $8755fe9d45015d6c$var$currentPage - halfVisibleButtons + 1;
            lastVisiblePage = $8755fe9d45015d6c$var$currentPage + rightSideButtons - 1;
        }
        if (firstVisiblePage > 1) buttons += `
        <button class="pagination-button notclick">...</button>
      `;
    }
    for(let i = firstVisiblePage; i <= lastVisiblePage; i++){
        const activeClass = i === $8755fe9d45015d6c$var$currentPage ? "active" : "";
        buttons += `
      <button class="pagination-button ${activeClass}" data-page="${i}">
        ${i}
      </button>
    `;
    }
    if (totalPages > maxVisibleButtons) {
        if (lastVisiblePage < totalPages) buttons += `
        <button class="pagination-button notclick">...</button>
      `;
        if (lastVisiblePage !== totalPages) buttons += `
        <button class="pagination-button ${lastVisiblePage === totalPages ? "active" : ""}" data-page="${totalPages}">${totalPages}</button>
      `;
    }
    buttons += `
    <button class="pagination-button yellow" data-page="${$8755fe9d45015d6c$var$currentPage < totalPages ? $8755fe9d45015d6c$var$currentPage + 1 : totalPages}">&gt;</button>
    <button class="pagination-button yellow" data-page="${totalPages}">&gt;&gt;</button>
  `;
    const paginationContainer = document.getElementById("pagination");
    paginationContainer.innerHTML = buttons;
    const paginationButtons = document.querySelectorAll(".pagination-button");
    paginationButtons.forEach((button)=>{
        button.addEventListener("click", function() {
            $8755fe9d45015d6c$var$currentPage = parseInt(this.getAttribute("data-page"));
            $8755fe9d45015d6c$var$renderBookList($8755fe9d45015d6c$var$currentPage);
            $8755fe9d45015d6c$var$renderPagination(bookIds);
        });
    });
}
const $8755fe9d45015d6c$var$bookList = document.getElementById("bookList");
$8755fe9d45015d6c$var$bookList.addEventListener("click", function(event) {
    const target = event.target;
    if (target.classList.contains("delete-book")) {
        const bookId = target.getAttribute("data-id");
        $8755fe9d45015d6c$var$removeBook(bookId);
        target.parentNode.parentNode.removeChild(target.parentNode);
    }
});
async function $8755fe9d45015d6c$var$removeBook(bookId) {
    let bookIds = await $8755fe9d45015d6c$export$b079286a3c21acde();
    bookIds = bookIds.filter((id)=>id !== bookId);
    $8755fe9d45015d6c$export$711eec9b17b1ec9d(bookIds);
    $8755fe9d45015d6c$var$renderPagination(bookIds);
    $8755fe9d45015d6c$var$renderBookList($8755fe9d45015d6c$var$currentPage);
}
//
$8755fe9d45015d6c$var$renderBookList($8755fe9d45015d6c$var$currentPage);
$8755fe9d45015d6c$var$renderPagination($8755fe9d45015d6c$export$b079286a3c21acde());


//# sourceMappingURL=shoppingList.8faad84c.js.map
