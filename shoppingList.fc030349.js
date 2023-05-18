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
parcelRequire.register("aaoiW", function(module, exports) {
(()=>{
    const refs = {
        openModalBtn: document.querySelector(".burger-modal-open"),
        closeModalBtn: document.querySelector(".burger-modal-close"),
        modal: document.querySelector("[burger-data-modal]"),
        body: document.querySelector("body"),
        signBtn: document.querySelector(".sign-btn")
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
        refs.closeModalBtn.classList.toggle("hiden-burger");
        refs.openModalBtn.classList.toggle("hiden-burger");
        refs.body.classList.toggle("is-open-body");
        if (refs.body.classList.contains("is-open-body")) refs.signBtn.classList.add("is-visible");
        else refs.signBtn.classList.remove("is-visible");
    }
})();

});


//# sourceMappingURL=shoppingList.fc030349.js.map
