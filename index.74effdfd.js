function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
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

parcelRequire.register("j2LHK", function(module, exports) {

module.exports = new URL((parcelRequire("lW9CP")).resolve("6B5km"), import.meta.url).toString();

});

parcelRequire.register("40SF9", function(module, exports) {

module.exports = new URL((parcelRequire("lW9CP")).resolve("cpiP6"), import.meta.url).toString();

});

parcelRequire.register("g6XLO", function(module, exports) {

module.exports = new URL((parcelRequire("lW9CP")).resolve("9lMr0"), import.meta.url).toString();

});

var $6a06b128d629bec5$exports = {};

(parcelRequire("lW9CP")).register(JSON.parse('{"7BhwC":"index.74effdfd.js","cpiP6":"modal-img.e86d48d2.svg","9lMr0":"support-svg.b733e313.svg","6B5km":"general-svg.svg.a33baf69.svg","dACBT":"shoppingList.bc5ba1d4.js","2ba0z":"shoppingList.fc030349.js"}'));


var $i7Hen = parcelRequire("i7Hen");

var $4HIy1 = parcelRequire("4HIy1");

var $fm5uq = parcelRequire("fm5uq");

var $1X6tl = parcelRequire("1X6tl");
const $d8472b3929a34f55$var$divchik = document.querySelector(".backdrop");
const $d8472b3929a34f55$var$body = document.querySelector("body");
const $d8472b3929a34f55$var$signBtn = document.querySelector(".sign-btn");
(0, $4HIy1.sectionBooksEl).addEventListener("click", (e)=>{
    const item = e.target.closest(".book-card");
    if (!item) return;
    $d8472b3929a34f55$var$selectBook(item);
});
async function $d8472b3929a34f55$var$selectBook(item) {
    $d8472b3929a34f55$var$divchik.classList.remove("is-hidden");
    $d8472b3929a34f55$var$body.classList.add("no-scroll");
    $d8472b3929a34f55$var$divchik.innerHTML = "";
    const id = item.getAttribute("data-id");
    const res = await (0, $i7Hen.fetchBooks)(id);
    const markup = $d8472b3929a34f55$var$createMarkupForModal(res);
    $d8472b3929a34f55$var$divchik.innerHTML = markup;
    const closeBtn = document.querySelector(".close-btn-modal");
    closeBtn.addEventListener("click", (e)=>{
        $d8472b3929a34f55$var$divchik.innerHTML = "";
        $d8472b3929a34f55$var$divchik.classList.add("is-hidden");
        $d8472b3929a34f55$var$body.classList.remove("no-scroll");
    });
    document.addEventListener("click", clickBackdrop);
    function clickBackdrop(e) {
        if (e.target === $d8472b3929a34f55$var$divchik) {
            $d8472b3929a34f55$var$divchik.classList.add("is-hidden");
            document.removeEventListener("click", clickBackdrop);
            $d8472b3929a34f55$var$body.classList.remove("no-scroll");
        }
    }
    document.addEventListener("keydown", onEscapePress);
    function onEscapePress(e) {
        if (e.key === "Escape") {
            $d8472b3929a34f55$var$divchik.classList.add("is-hidden");
            $d8472b3929a34f55$var$body.classList.remove("no-scroll");
            document.removeEventListener("keydown", onEscapePress);
        }
    }
    const chooseToLSBtn = document.querySelector(".btn-chose-book");
    const peshka = document.querySelector(".peshka");
    const text = $d8472b3929a34f55$var$signBtn.textContent.trim();
    if (text === "Sign up") {
        chooseToLSBtn.disabled = true;
        (0, (/*@__PURE__*/$parcel$interopDefault($fm5uq))).Report.info("", "To make a purchase, please log in or register");
    }
    let data = [];
    if (localStorage.getItem("currentUser")) data = await (0, $1X6tl.getDB)();
    chooseToLSBtn.addEventListener("click", async ()=>{
        let data = await (0, $1X6tl.getDB)();
        $d8472b3929a34f55$var$addAndRemuveBooksToLS(id);
        if (!data.includes(id)) peshka.innerHTML = `Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.`;
        else peshka.innerHTML = "";
    });
    if (data.includes(id)) {
        chooseToLSBtn.textContent = "REMOVE FROM THE SHOPPING LIST";
        peshka.innerHTML = `Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.`;
    } else {
        chooseToLSBtn.textContent = "ADD TO SHOPING LIST";
        peshka.innerHTML = "";
    }
}
async function $d8472b3929a34f55$var$addAndRemuveBooksToLS(id) {
    let data = [];
    if (localStorage.getItem("currentUser")) data = await (0, $1X6tl.getDB)();
    const chooseToLSBtn = document.querySelector(".btn-chose-book");
    if (data.includes(id)) {
        chooseToLSBtn.textContent = "ADD TO SHOPING LIST";
        data = data.filter((item)=>item !== id);
    } else {
        chooseToLSBtn.textContent = "REMOVE FROM THE SHOPPING LIST";
        data.push(id);
    }
    (0, $1X6tl.setDB)(data);
}




function $d8472b3929a34f55$var$createMarkupForModal({ description: description , book_image: book_image , author: author , title: title , buy_links: buy_links , list_name: list_name  }) {
    return `
    <div class="modal-add-book-window">
      <div class="all-book-modal">
        <button class="close-btn-modal">
          <svg class="close-svg-modal" width="28" height="28">
            <use href=${(parcelRequire("j2LHK"))}#icon-x-close></use>
          </svg>
        </button>
        <img class="img-book-modal" src="${book_image}" alt="${list_name}" />
          <div class="book-modal">
            <h3 class="title-book-modal">${title}</h3>
            <p class="author-book-modal">${author}</p>
            <p class="text-book-modal">${description || "no description"}</p>
            <ul class="logotip-list">
              <li class="logo-item">
                <a href="${buy_links[0].url}" target="_new" rel="noopener noreferer" aria-label="link to Amazon">
                 <svg class="svg-shop-link" width="62" height="19">
    <use href=${(parcelRequire("40SF9"))}#icon-amazon></use>
  </svg>
                </a>
              </li>
              <li class="logo-item">
                <a href="${buy_links[1].url}" target="_new rel="noopener noreferer" aria-label="link to Apple Books">
                  <svg class="svg-shop-link" width="33" height="32">
    <use href=${(parcelRequire("40SF9"))}#icon-apple></use>
  </svg>
                </a>
              </li>
              <li class="logo-item">
                <a href="${buy_links[4].url}" target="_new rel="noopener noreferer" aria-label="link to Bookshop">
                  <svg class="svg-shop-link" width="38" height="36">
    <use href=${(parcelRequire("40SF9"))}#icon-book_shop></use>
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



var $cRUaa = parcelRequire("cRUaa");

var $4HIy1 = parcelRequire("4HIy1");
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


parcelRequire("9L5PP");
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


parcelRequire("8fbZH");
const $7d68434c71fcea9c$var$scrollBtn = document.querySelector(".scroll-up-btn");
$7d68434c71fcea9c$var$scrollBtn.addEventListener("click", $7d68434c71fcea9c$var$onScrollBtn);
function $7d68434c71fcea9c$var$onScrollBtn() {
    if (window.pageYOffset > 600) $7d68434c71fcea9c$var$scrollBtn.style.opacity = "1";
    else $7d68434c71fcea9c$var$scrollBtn.style.opacity = "0";
}
$7d68434c71fcea9c$var$scrollBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
window.onscroll = $7d68434c71fcea9c$var$onScrollBtn;


parcelRequire("aaoiW");
(0, $cRUaa.categoriesList)((0, $cRUaa.fetchList));
(0, $4HIy1.createMurkUpAllBooks)();
(0, $cRUaa.listElem).addEventListener("click", (0, $cRUaa.onHandleCategories));
(0, $4HIy1.sectionBooksEl).addEventListener("click", (0, $4HIy1.onHandleCategoriesForButton));


//# sourceMappingURL=index.74effdfd.js.map
