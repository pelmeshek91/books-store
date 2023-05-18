(function () {
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

parcelRequire.register("aDtmE", function(module, exports) {


module.exports = (parcelRequire("cHmwT")).getBundleURL("ikoiw") + (parcelRequire("9xqYB")).resolve("8xhEQ");

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


parcelRequire.register("d6kB7", function(module, exports) {


module.exports = (parcelRequire("cHmwT")).getBundleURL("ikoiw") + (parcelRequire("9xqYB")).resolve("hd2jO");

});

parcelRequire.register("1bxYP", function(module, exports) {


module.exports = (parcelRequire("cHmwT")).getBundleURL("ikoiw") + (parcelRequire("9xqYB")).resolve("cCn1N");

});

var $7ce0c1426007db40$exports = {};

(parcelRequire("9xqYB")).register(JSON.parse('{"ikoiw":"index.b74e5dc5.js","8xhEQ":"general-svg.svg.a33baf69.svg","hd2jO":"modal-img.e86d48d2.svg","cCn1N":"support-svg.b733e313.svg","58iZW":"shoppingList.eb5f154e.js","SrxM1":"shoppingList.4a972488.js"}'));


var $lsSx6 = parcelRequire("lsSx6");

var $aMsnd = parcelRequire("aMsnd");

var $c4lCt = parcelRequire("c4lCt");

var $8IhWy = parcelRequire("8IhWy");
const $277ee8bd84755064$var$divchik = document.querySelector(".backdrop");
const $277ee8bd84755064$var$body = document.querySelector("body");
const $277ee8bd84755064$var$signBtn = document.querySelector(".sign-btn");
(0, $aMsnd.sectionBooksEl).addEventListener("click", (e)=>{
    const item = e.target.closest(".book-card");
    if (!item) return;
    $277ee8bd84755064$var$selectBook(item);
});
async function $277ee8bd84755064$var$selectBook(item) {
    $277ee8bd84755064$var$divchik.classList.remove("is-hidden");
    $277ee8bd84755064$var$body.classList.add("no-scroll");
    $277ee8bd84755064$var$divchik.innerHTML = "";
    const id = item.getAttribute("data-id");
    const res = await (0, $lsSx6.fetchBooks)(id);
    const markup = $277ee8bd84755064$var$createMarkupForModal(res);
    $277ee8bd84755064$var$divchik.innerHTML = markup;
    const closeBtn = document.querySelector(".close-btn-modal");
    closeBtn.addEventListener("click", (e)=>{
        $277ee8bd84755064$var$divchik.innerHTML = "";
        $277ee8bd84755064$var$divchik.classList.add("is-hidden");
        $277ee8bd84755064$var$body.classList.remove("no-scroll");
    });
    document.addEventListener("click", clickBackdrop);
    function clickBackdrop(e) {
        if (e.target === $277ee8bd84755064$var$divchik) {
            $277ee8bd84755064$var$divchik.classList.add("is-hidden");
            document.removeEventListener("click", clickBackdrop);
            $277ee8bd84755064$var$body.classList.remove("no-scroll");
        }
    }
    document.addEventListener("keydown", onEscapePress);
    function onEscapePress(e) {
        if (e.key === "Escape") {
            $277ee8bd84755064$var$divchik.classList.add("is-hidden");
            $277ee8bd84755064$var$body.classList.remove("no-scroll");
            document.removeEventListener("keydown", onEscapePress);
        }
    }
    const chooseToLSBtn = document.querySelector(".btn-chose-book");
    const peshka = document.querySelector(".peshka");
    const text = $277ee8bd84755064$var$signBtn.textContent.trim();
    if (text === "Sign up") {
        chooseToLSBtn.disabled = true;
        (0, (/*@__PURE__*/$parcel$interopDefault($c4lCt))).Report.info("", "To make a purchase, please log in or register");
    }
    let data = [];
    if (localStorage.getItem("currentUser")) data = await (0, $8IhWy.getDB)();
    chooseToLSBtn.addEventListener("click", async ()=>{
        let data = await (0, $8IhWy.getDB)();
        $277ee8bd84755064$var$addAndRemuveBooksToLS(id);
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
async function $277ee8bd84755064$var$addAndRemuveBooksToLS(id) {
    let data = [];
    if (localStorage.getItem("currentUser")) data = await (0, $8IhWy.getDB)();
    const chooseToLSBtn = document.querySelector(".btn-chose-book");
    if (data.includes(id)) {
        chooseToLSBtn.textContent = "ADD TO SHOPING LIST";
        data = data.filter((item)=>item !== id);
    } else {
        chooseToLSBtn.textContent = "REMOVE FROM THE SHOPPING LIST";
        data.push(id);
    }
    (0, $8IhWy.setDB)(data);
}




function $277ee8bd84755064$var$createMarkupForModal({ description: description , book_image: book_image , author: author , title: title , buy_links: buy_links , list_name: list_name  }) {
    return `
    <div class="modal-add-book-window">
      <div class="all-book-modal">
        <button class="close-btn-modal">
          <svg class="close-svg-modal" width="28" height="28">
            <use href=${(parcelRequire("aDtmE"))}#icon-x-close></use>
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
    <use href=${(parcelRequire("d6kB7"))}#icon-amazon></use>
  </svg>
                </a>
              </li>
              <li class="logo-item">
                <a href="${buy_links[1].url}" target="_new rel="noopener noreferer" aria-label="link to Apple Books">
                  <svg class="svg-shop-link" width="33" height="32">
    <use href=${(parcelRequire("d6kB7"))}#icon-apple></use>
  </svg>
                </a>
              </li>
              <li class="logo-item">
                <a href="${buy_links[4].url}" target="_new rel="noopener noreferer" aria-label="link to Bookshop">
                  <svg class="svg-shop-link" width="38" height="36">
    <use href=${(parcelRequire("d6kB7"))}#icon-book_shop></use>
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



var $1tSQZ = parcelRequire("1tSQZ");

var $aMsnd = parcelRequire("aMsnd");
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
              <use href=${(parcelRequire("1bxYP"))}${charity.img}></use>
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


parcelRequire("9P1w3");
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


parcelRequire("4zWSn");
const $579934986f5d075e$var$scrollBtn = document.querySelector(".scroll-up-btn");
$579934986f5d075e$var$scrollBtn.addEventListener("click", $579934986f5d075e$var$onScrollBtn);
function $579934986f5d075e$var$onScrollBtn() {
    if (window.pageYOffset > 600) $579934986f5d075e$var$scrollBtn.style.opacity = "1";
    else $579934986f5d075e$var$scrollBtn.style.opacity = "0";
}
$579934986f5d075e$var$scrollBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
window.onscroll = $579934986f5d075e$var$onScrollBtn;


parcelRequire("9E0k7");
(0, $1tSQZ.categoriesList)((0, $1tSQZ.fetchList));
(0, $aMsnd.createMurkUpAllBooks)();
(0, $1tSQZ.listElem).addEventListener("click", (0, $1tSQZ.onHandleCategories));
(0, $aMsnd.sectionBooksEl).addEventListener("click", (0, $aMsnd.onHandleCategoriesForButton));

})();
//# sourceMappingURL=index.b74e5dc5.js.map
