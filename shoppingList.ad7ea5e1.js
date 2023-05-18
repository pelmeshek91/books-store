(function () {
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
parcelRequire.register("9xqYB", function(module, exports) {

$parcel$export(module.exports, "register", function () { return $6f1c1f1b2dada3ed$export$6503ec6e8aabbaf; }, function (v) { return $6f1c1f1b2dada3ed$export$6503ec6e8aabbaf = v; });
$parcel$export(module.exports, "resolve", function () { return $6f1c1f1b2dada3ed$export$f7ad0328861e2f03; }, function (v) { return $6f1c1f1b2dada3ed$export$f7ad0328861e2f03 = v; });
var $6f1c1f1b2dada3ed$export$6503ec6e8aabbaf;
var $6f1c1f1b2dada3ed$export$f7ad0328861e2f03;
"use strict";
var $6f1c1f1b2dada3ed$var$mapping = {};
function $6f1c1f1b2dada3ed$var$register(pairs) {
    var keys = Object.keys(pairs);
    for(var i = 0; i < keys.length; i++)$6f1c1f1b2dada3ed$var$mapping[keys[i]] = pairs[keys[i]];
}
function $6f1c1f1b2dada3ed$var$resolve(id) {
    var resolved = $6f1c1f1b2dada3ed$var$mapping[id];
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return resolved;
}
$6f1c1f1b2dada3ed$export$6503ec6e8aabbaf = $6f1c1f1b2dada3ed$var$register;
$6f1c1f1b2dada3ed$export$f7ad0328861e2f03 = $6f1c1f1b2dada3ed$var$resolve;

});

parcelRequire.register("5KTTy", function(module, exports) {


module.exports = (parcelRequire("cHmwT")).getBundleURL("kUpB1") + (parcelRequire("9xqYB")).resolve("cCn1N");

});
parcelRequire.register("cHmwT", function(module, exports) {

$parcel$export(module.exports, "getBundleURL", function () { return $93eafa1434f2e08a$export$bdfd709ae4826697; }, function (v) { return $93eafa1434f2e08a$export$bdfd709ae4826697 = v; });
var $93eafa1434f2e08a$export$bdfd709ae4826697;
var $93eafa1434f2e08a$export$c9e73fbda7da57b6;
var $93eafa1434f2e08a$export$5a759dc7a1cfb72a;
"use strict";
var $93eafa1434f2e08a$var$bundleURL = {};
function $93eafa1434f2e08a$var$getBundleURLCached(id) {
    var value = $93eafa1434f2e08a$var$bundleURL[id];
    if (!value) {
        value = $93eafa1434f2e08a$var$getBundleURL();
        $93eafa1434f2e08a$var$bundleURL[id] = value;
    }
    return value;
}
function $93eafa1434f2e08a$var$getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return $93eafa1434f2e08a$var$getBaseURL(matches[2]);
    }
    return "/";
}
function $93eafa1434f2e08a$var$getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function $93eafa1434f2e08a$var$getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
$93eafa1434f2e08a$export$bdfd709ae4826697 = $93eafa1434f2e08a$var$getBundleURLCached;
$93eafa1434f2e08a$export$c9e73fbda7da57b6 = $93eafa1434f2e08a$var$getBaseURL;
$93eafa1434f2e08a$export$5a759dc7a1cfb72a = $93eafa1434f2e08a$var$getOrigin;

});


parcelRequire.register("5An5G", function(module, exports) {


module.exports = (parcelRequire("cHmwT")).getBundleURL("kUpB1") + (parcelRequire("9xqYB")).resolve("hd2jO");

});

parcelRequire.register("b6s0X", function(module, exports) {


module.exports = (parcelRequire("cHmwT")).getBundleURL("kUpB1") + (parcelRequire("9xqYB")).resolve("jfOl4");

});

var $43b2424b5be099e1$exports = {};

(parcelRequire("9xqYB")).register(JSON.parse('{"kUpB1":"shoppingList.ad7ea5e1.js","cCn1N":"support-svg.b733e313.svg","hd2jO":"modal-img.e86d48d2.svg","jfOl4":"img-books-322@2x.9420775c.png"}'));

const $9376ae70bdfee9e8$export$be3a9fe2f1492e90 = [
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

function $9376ae70bdfee9e8$export$7d89385b23a8f22b(charities) {
    let count = 1;
    return charities.map((charity)=>{
        const markup = `<li class="support-item block">
          <span class="support-nmbr">${count.toString().padStart(2, "0")}</span>
          <a href="${charity.url}" class="support-link" target="_new">
            <svg class="icon">
              <use href=${(parcelRequire("5KTTy"))}${charity.img}></use>
            </svg>
          </a>
        </li>`;
        count++;
        return markup;
    }).join("");
}


const $45db6a970b4525a3$var$list = document.querySelector(".support-list");
$45db6a970b4525a3$var$list.insertAdjacentHTML("beforeend", (0, $9376ae70bdfee9e8$export$7d89385b23a8f22b)((0, $9376ae70bdfee9e8$export$be3a9fe2f1492e90)));
const $45db6a970b4525a3$var$supportContainer = document.querySelector(".support-container");
const $45db6a970b4525a3$var$supportList = document.querySelector(".support-list");
const $45db6a970b4525a3$var$supportItems = document.querySelectorAll(".support-item");
const $45db6a970b4525a3$var$scrollBtn = document.querySelector(".scroll-btn");
$45db6a970b4525a3$var$scrollBtn.addEventListener("click", $45db6a970b4525a3$var$onScrollBtnClick);
let $45db6a970b4525a3$var$isExpanded = false;
let $45db6a970b4525a3$var$isContainerExpanded = false;
let $45db6a970b4525a3$var$visibleItemsCount = $45db6a970b4525a3$var$getVisibleItemsCount();
$45db6a970b4525a3$var$supportItems.forEach((item, index)=>{
    if (index >= $45db6a970b4525a3$var$visibleItemsCount) item.style.display = "none";
});
$45db6a970b4525a3$var$supportContainer.style.height = "fit-content";
$45db6a970b4525a3$var$scrollBtn.style.transform = "rotate(0deg)";
$45db6a970b4525a3$var$supportList.classList.add("show");
function $45db6a970b4525a3$var$onScrollBtnClick() {
    $45db6a970b4525a3$var$visibleItemsCount = $45db6a970b4525a3$var$getVisibleItemsCount();
    if (!$45db6a970b4525a3$var$isExpanded && !$45db6a970b4525a3$var$isContainerExpanded) {
        $45db6a970b4525a3$var$supportItems.forEach((item, index)=>{
            if (index >= $45db6a970b4525a3$var$visibleItemsCount) item.style.display = "flex";
        });
        $45db6a970b4525a3$var$scrollBtn.style.transform = "rotate(180deg)";
        $45db6a970b4525a3$var$supportContainer.style.transition = "all 500ms cubic-bezier(0.4, 0, 0.2, 1)";
    } else {
        $45db6a970b4525a3$var$supportItems.forEach((item, index)=>{
            if (index >= $45db6a970b4525a3$var$visibleItemsCount) item.style.display = "none";
        });
        $45db6a970b4525a3$var$supportContainer.style.height = "fit-content";
        $45db6a970b4525a3$var$scrollBtn.style.transform = "rotate(0deg)";
        $45db6a970b4525a3$var$supportContainer.style.transition = "all 500ms cubic-bezier(0.4, 0, 0.2, 1)";
    }
    $45db6a970b4525a3$var$isExpanded = !$45db6a970b4525a3$var$isExpanded;
    $45db6a970b4525a3$var$isContainerExpanded = !$45db6a970b4525a3$var$isContainerExpanded;
}
function $45db6a970b4525a3$var$getVisibleItemsCount() {
    const windowWidth = window.screen.width;
    if (windowWidth > 768) return 6;
    else return 4;
}
window.addEventListener("resize", $45db6a970b4525a3$var$onWindowResize);
function $45db6a970b4525a3$var$onWindowResize() {
    $45db6a970b4525a3$var$visibleItemsCount = $45db6a970b4525a3$var$getVisibleItemsCount();
    $45db6a970b4525a3$var$supportItems.forEach((item, index)=>{
        if (index >= $45db6a970b4525a3$var$visibleItemsCount) item.style.display = "none";
        else item.style.display = "flex";
    });
}


const $45c631fb1edb45ca$var$input = document.querySelector("#theme-switch-toggle");
const $45c631fb1edb45ca$var$body = document.querySelector("body");
const $45c631fb1edb45ca$var$theme = {
    LIGHT: "light-theme",
    DARK: "dark-theme"
};
$45c631fb1edb45ca$var$body.classList.add($45c631fb1edb45ca$var$theme.LIGHT);
$45c631fb1edb45ca$var$input.addEventListener("change", $45c631fb1edb45ca$var$switchTheme);
function $45c631fb1edb45ca$var$switchTheme() {
    $45c631fb1edb45ca$var$body.classList.toggle($45c631fb1edb45ca$var$theme.DARK);
    $45c631fb1edb45ca$var$body.classList.toggle($45c631fb1edb45ca$var$theme.LIGHT);
    $45c631fb1edb45ca$var$setThemeInfoToLocalStorage();
}
function $45c631fb1edb45ca$var$setThemeInfoToLocalStorage() {
    if ($45c631fb1edb45ca$var$body.classList.contains($45c631fb1edb45ca$var$theme.LIGHT)) {
        $45c631fb1edb45ca$var$input.setAttribute("checked", false);
        localStorage.setItem("active-theme", $45c631fb1edb45ca$var$theme.LIGHT);
    } else if ($45c631fb1edb45ca$var$body.classList.contains($45c631fb1edb45ca$var$theme.DARK)) {
        $45c631fb1edb45ca$var$input.setAttribute("checked", true);
        localStorage.setItem("active-theme", $45c631fb1edb45ca$var$theme.DARK);
    }
}
$45c631fb1edb45ca$var$getThemeInfoFromLocalStorage();
function $45c631fb1edb45ca$var$getThemeInfoFromLocalStorage() {
    if (localStorage.getItem("active-theme") === $45c631fb1edb45ca$var$theme.DARK) $45c631fb1edb45ca$var$switchTheme();
}



var $jdzJh = parcelRequire("jdzJh");
parcelRequire("9gZIu");
parcelRequire("8cZNZ");

var $9MBDy = parcelRequire("9MBDy");
const $c043ed0f4ddacedb$var$firebaseConfig = {
    apiKey: "AIzaSyDdiX4miDnvSyE7S-piSDUDrOT024HmPxc",
    authDomain: "partybookshard.firebaseapp.com",
    databaseURL: "https://partybookshard-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "partybookshard",
    storageBucket: "partybookshard.appspot.com",
    messagingSenderId: "572831827905",
    appId: "1:572831827905:web:09a3282865bb9169df1140"
};
(0, $jdzJh.default).initializeApp($c043ed0f4ddacedb$var$firebaseConfig);
const $c043ed0f4ddacedb$var$db = (0, $jdzJh.default).firestore();
async function $c043ed0f4ddacedb$export$711eec9b17b1ec9d(array) {
    const userID = localStorage.getItem("currentUser");
    await (0, $9MBDy.setDoc)((0, $9MBDy.doc)($c043ed0f4ddacedb$var$db, "users", userID), {
        booksArray: array
    });
}
async function $c043ed0f4ddacedb$export$b079286a3c21acde() {
    const userID = localStorage.getItem("currentUser");
    const docRef = (0, $9MBDy.doc)($c043ed0f4ddacedb$var$db, "users", userID);
    const docSnap = await (0, $9MBDy.getDoc)(docRef);
    if (docSnap.exists()) return docSnap.data().booksArray;
    else console.log("No such document!");
}
//
const $c043ed0f4ddacedb$var$booksPerPage = 3;
let $c043ed0f4ddacedb$var$currentPage = 1;





async function $c043ed0f4ddacedb$var$renderBookList(page) {
    const bookIds = await $c043ed0f4ddacedb$export$b079286a3c21acde();
    const startIndex = (page - 1) * $c043ed0f4ddacedb$var$booksPerPage;
    const endIndex = startIndex + $c043ed0f4ddacedb$var$booksPerPage;
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
    <use href=${(parcelRequire("5An5G"))}#icon-amazon></use>
  </svg>
                </a>
              </li>
              <li class="logo-item">
                <a href="${buy_links[1].url}" target="_new rel="noopener noreferer" aria-label="link to Apple Books">
                  <svg class="svg-shop-link logo-apple" width="16" height="16">
    <use href=${(parcelRequire("5An5G"))}#icon-apple></use>
  </svg>
                </a>
              </li>
              <li class="logo-item">
                <a href="${buy_links[4].url}" target="_new rel="noopener noreferer" aria-label="link to Bookshop">
                  <svg class="svg-shop-link logo-bookshop-mini" width="16" height="16">
    <use href=${(parcelRequire("5An5G"))}#icon-book_shop></use>
  </svg>
                  </a>
              </li>
            </ul>
 
    </div>
     </div>
   <button class='delete-book' data-id='${_id}'>
     <svg class="delete-icon" width='16px' height='16px'>
              <use href=${(parcelRequire("5KTTy"))}#icon-trash></use>
            </svg>
    </button>
</div>`;
        }).join("");
        const bookList = document.getElementById("bookList");
        bookList.innerHTML = booksMarkup;
        // check books
        if (data.length === 0) {
            // if not books here
            if ($c043ed0f4ddacedb$var$currentPage === 1) {
                bookList.innerHTML = "<p>No books found</p>";
                if (!bookIds.length) {
                    bookList.classList.add("empty-section");
                    bookList.innerHTML = `<p class="empty-store-text-img">This page is empty, add some books and proceed to order.</p> 
             <img class="empty-image" src="${(parcelRequire("b6s0X"))}" alt="books">
           `;
                }
            } else {
                // Иначе перенаправляем пользователя на предыдущую страницу
                const previousPage = $c043ed0f4ddacedb$var$currentPage - 1;
                const previousUrl = `${window.location.pathname}?page=${previousPage}`;
                window.location.replace(previousUrl);
            }
        } else $c043ed0f4ddacedb$var$renderPagination(bookIds);
    }).catch((error)=>{
        console.error(error);
    });
    const bookImages = document.querySelectorAll(".book__image");
    bookImages.forEach((image)=>{
        image.classList.add("animate");
    });
}
function $c043ed0f4ddacedb$var$renderPagination(bookIds) {
    const totalPages = Math.ceil(bookIds.length / $c043ed0f4ddacedb$var$booksPerPage);
    if (totalPages < 2) {
        document.getElementById("pagination").innerHTML = "";
        return;
    }
    let buttons = "";
    buttons += `
    <button class="pagination-button black" data-page="1">&lt;&lt;</button>
    <button class="pagination-button black" data-page="${$c043ed0f4ddacedb$var$currentPage > 1 ? $c043ed0f4ddacedb$var$currentPage - 1 : 1}">&lt;</button>
  `;
    const maxVisibleButtons = 4;
    const maxVisiblePages = maxVisibleButtons - 1; // max count visible
    const halfVisibleButtons = Math.floor(maxVisibleButtons / 2);
    let firstVisiblePage = 1;
    let lastVisiblePage = totalPages;
    if (totalPages > maxVisibleButtons) {
        const leftSideButtons = halfVisibleButtons;
        const rightSideButtons = maxVisibleButtons - leftSideButtons - 1;
        if ($c043ed0f4ddacedb$var$currentPage <= halfVisibleButtons) lastVisiblePage = maxVisiblePages;
        else if ($c043ed0f4ddacedb$var$currentPage >= totalPages - halfVisibleButtons + 1) firstVisiblePage = totalPages - maxVisiblePages + 1;
        else {
            firstVisiblePage = $c043ed0f4ddacedb$var$currentPage - halfVisibleButtons + 1;
            lastVisiblePage = $c043ed0f4ddacedb$var$currentPage + rightSideButtons - 1;
        }
        if (firstVisiblePage > 1) buttons += `
        <button class="pagination-button notclick">...</button>
      `;
    }
    for(let i = firstVisiblePage; i <= lastVisiblePage; i++){
        const activeClass = i === $c043ed0f4ddacedb$var$currentPage ? "active" : "";
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
    <button class="pagination-button yellow" data-page="${$c043ed0f4ddacedb$var$currentPage < totalPages ? $c043ed0f4ddacedb$var$currentPage + 1 : totalPages}">&gt;</button>
    <button class="pagination-button yellow" data-page="${totalPages}">&gt;&gt;</button>
  `;
    const paginationContainer = document.getElementById("pagination");
    paginationContainer.innerHTML = buttons;
    const paginationButtons = document.querySelectorAll(".pagination-button");
    paginationButtons.forEach((button)=>{
        button.addEventListener("click", function() {
            $c043ed0f4ddacedb$var$currentPage = parseInt(this.getAttribute("data-page"));
            $c043ed0f4ddacedb$var$renderBookList($c043ed0f4ddacedb$var$currentPage);
            $c043ed0f4ddacedb$var$renderPagination(bookIds);
        });
    });
}
const $c043ed0f4ddacedb$var$bookList = document.getElementById("bookList");
$c043ed0f4ddacedb$var$bookList.addEventListener("click", function(event) {
    const target = event.target;
    if (target.classList.contains("delete-book")) {
        const bookId = target.getAttribute("data-id");
        $c043ed0f4ddacedb$var$removeBook(bookId);
        target.parentNode.parentNode.removeChild(target.parentNode);
    }
});
async function $c043ed0f4ddacedb$var$removeBook(bookId) {
    let bookIds = await $c043ed0f4ddacedb$export$b079286a3c21acde();
    bookIds = bookIds.filter((id)=>id !== bookId);
    $c043ed0f4ddacedb$export$711eec9b17b1ec9d(bookIds);
    $c043ed0f4ddacedb$var$renderPagination(bookIds);
    $c043ed0f4ddacedb$var$renderBookList($c043ed0f4ddacedb$var$currentPage);
}
//
$c043ed0f4ddacedb$var$renderBookList($c043ed0f4ddacedb$var$currentPage);
$c043ed0f4ddacedb$var$renderPagination($c043ed0f4ddacedb$export$b079286a3c21acde());

})();
//# sourceMappingURL=shoppingList.ad7ea5e1.js.map
