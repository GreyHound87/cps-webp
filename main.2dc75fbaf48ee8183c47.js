/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/polyfill/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! ./noConflict */ "./node_modules/@babel/polyfill/lib/noConflict.js");

var _global = _interopRequireDefault(__webpack_require__(/*! core-js/library/fn/global */ "./node_modules/core-js/library/fn/global.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (_global["default"]._babelPolyfill && typeof console !== "undefined" && console.warn) {
  console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended " + "and may have consequences if different versions of the polyfills are applied sequentially. " + "If you do need to load the polyfill more than once, use @babel/polyfill/noConflict " + "instead to bypass the warning.");
}

_global["default"]._babelPolyfill = true;

/***/ }),

/***/ "./node_modules/@babel/polyfill/lib/noConflict.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/noConflict.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/es6 */ "./node_modules/core-js/es6/index.js");

__webpack_require__(/*! core-js/fn/array/includes */ "./node_modules/core-js/fn/array/includes.js");

__webpack_require__(/*! core-js/fn/array/flat-map */ "./node_modules/core-js/fn/array/flat-map.js");

__webpack_require__(/*! core-js/fn/string/pad-start */ "./node_modules/core-js/fn/string/pad-start.js");

__webpack_require__(/*! core-js/fn/string/pad-end */ "./node_modules/core-js/fn/string/pad-end.js");

__webpack_require__(/*! core-js/fn/string/trim-start */ "./node_modules/core-js/fn/string/trim-start.js");

__webpack_require__(/*! core-js/fn/string/trim-end */ "./node_modules/core-js/fn/string/trim-end.js");

__webpack_require__(/*! core-js/fn/symbol/async-iterator */ "./node_modules/core-js/fn/symbol/async-iterator.js");

__webpack_require__(/*! core-js/fn/object/get-own-property-descriptors */ "./node_modules/core-js/fn/object/get-own-property-descriptors.js");

__webpack_require__(/*! core-js/fn/object/values */ "./node_modules/core-js/fn/object/values.js");

__webpack_require__(/*! core-js/fn/object/entries */ "./node_modules/core-js/fn/object/entries.js");

__webpack_require__(/*! core-js/fn/promise/finally */ "./node_modules/core-js/fn/promise/finally.js");

__webpack_require__(/*! core-js/web */ "./node_modules/core-js/web/index.js");

__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./src/js/callbackModal.js":
/*!*********************************!*\
  !*** ./src/js/callbackModal.js ***!
  \*********************************/
/***/ (() => {

var callButton = document.getElementById('callButton');
var callback = document.getElementById('callback');
var closeButton = document.getElementById('closeCallback');
var upenderException = document.getElementById('upenderException');
var modalBlurOverlay = document.getElementById('modalBlurOverlay');
function openModal() {
  callback.classList.remove('callback--hidden');
  upenderException.classList.add('upender__exception--blurred');
  modalBlurOverlay.classList.add('upender__blur-overlay--active');
  document.addEventListener('keydown', handleEscKey);
}
function closeModal() {
  callback.classList.add('callback--hidden');
  upenderException.classList.remove('upender__exception--blurred');
  modalBlurOverlay.classList.remove('upender__blur-overlay--active');
  document.removeEventListener('keydown', handleEscKey);
}
callButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
function handleEscKey(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

/***/ }),

/***/ "./src/js/feedbackModal.js":
/*!*********************************!*\
  !*** ./src/js/feedbackModal.js ***!
  \*********************************/
/***/ (() => {

var chatButton = document.getElementById('chatButton');
var feedback = document.getElementById('feedback');
var closeButton = document.getElementById('closeFeedback');
var upenderException = document.getElementById('upenderException');
var modalBlurOverlay = document.getElementById('modalBlurOverlay');
function openModal() {
  feedback.classList.remove('feedback--hidden');
  upenderException.classList.add('upender__exception--blurred');
  modalBlurOverlay.classList.add('upender__blur-overlay--active');
  document.addEventListener('keydown', handleEscKey);
}
function closeModal() {
  feedback.classList.add('feedback--hidden');
  upenderException.classList.remove('upender__exception--blurred');
  modalBlurOverlay.classList.remove('upender__blur-overlay--active');
  document.removeEventListener('keydown', handleEscKey);
}
chatButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
function handleEscKey(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

/***/ }),

/***/ "./src/js/menuBtn.js":
/*!***************************!*\
  !*** ./src/js/menuBtn.js ***!
  \***************************/
/***/ (() => {

function toggleBurgerButton() {
  var menu = document.getElementById("menu");
  var menuLogoWrapper = document.getElementById("menuLogoWrapper");
  var burgerButton = document.getElementById("burgerButton");
  var burgerLine1 = document.getElementById("burgerLine1");
  var burgerLine2 = document.getElementById("burgerLine2");
  var burgerLine3 = document.getElementById("burgerLine3");
  var logoLink = document.getElementById("logoLink");
  var logoImg = document.getElementById("logoImg");
  var searchButton = document.getElementById("searchButton");
  var navigation = document.getElementById("navigation");
  var navigationList = document.getElementById("navigationList");
  var navItem1 = document.getElementById("navItem1");
  var navLink1 = document.getElementById("navLink1");
  var navItem2 = document.getElementById("navItem2");
  var navLink2 = document.getElementById("navLink2");
  var navItem3 = document.getElementById("navItem3");
  var navLink3 = document.getElementById("navLink3");
  var navItem4 = document.getElementById("navItem4");
  var navLink4 = document.getElementById("navLink4");
  var navItem5 = document.getElementById("navItem5");
  var navLink5 = document.getElementById("navLink5");
  var navItem6 = document.getElementById("navItem6");
  var navLink6 = document.getElementById("navLink6");
  var navItem7 = document.getElementById("navItem7");
  var navLink7 = document.getElementById("navLink7");
  var navItem8 = document.getElementById("navItem8");
  var navLink8 = document.getElementById("navLink8");
  var modBtnWrapper = document.getElementById("modBtnWrapper");
  var callButton = document.getElementById("callButton");
  var chatButton = document.getElementById("chatButton");
  var profileButton = document.getElementById("profileButton");
  var mailtoLink = document.getElementById("mailtoLink");
  var calltoLink = document.getElementById("calltoLink");
  var langWrapper = document.getElementById("langWrapper");
  var langLink1 = document.getElementById("langLink1");
  var langLink2 = document.getElementById("langLink2");
  var langLink3 = document.getElementById("langLink3");
  var servicesBtnWrapper = document.getElementById("servicesBtnWrapper");
  var upenderException = document.getElementById("upenderException");
  var placeholder = document.getElementById("placeholder");
  var upenderBlurOverlay = document.getElementById("upenderBlurOverlay");
  var isButtonActive = burgerButton.classList.contains("menu__burger-btn--active");
  if (isButtonActive) {
    burgerButton.classList.remove("menu__burger-btn--active");
    burgerLine1.classList.remove("burger-btn__line--active");
    burgerLine2.classList.remove("burger-btn__line--active");
    burgerLine3.classList.remove("burger-btn__line--active");
    menuLogoWrapper.classList.remove("menu__logo-block--active");
    logoLink.classList.remove("menu__logo--active");
    logoImg.classList.remove("logo__img--active");
    searchButton.classList.remove("menu__search-btn--active");
    navigation.classList.remove("menu__navigation--active");
    navigationList.classList.remove("navigation__list--active");
    navItem1.classList.remove("navigation__item--active");
    navLink1.classList.remove("navigation__link-btn--active");
    navItem2.classList.remove("navigation__item--active");
    navLink2.classList.remove("navigation__link-btn--active");
    navItem3.classList.remove("navigation__item--active");
    navLink3.classList.remove("navigation__link-btn--active");
    navItem4.classList.remove("navigation__item--active");
    navLink4.classList.remove("navigation__link-btn--active");
    navItem5.classList.remove("navigation__item--active");
    navLink5.classList.remove("navigation__link-btn--active");
    navItem6.classList.remove("navigation__item--active");
    navLink6.classList.remove("navigation__link-btn--active");
    navItem7.classList.remove("navigation__item--active");
    navLink7.classList.remove("navigation__link-btn--active");
    navItem8.classList.remove("navigation__item--active");
    navLink8.classList.remove("navigation__link-btn--active");
    modBtnWrapper.classList.remove("menu__modal-block--active");
    callButton.classList.remove("menu__call-btn--active");
    chatButton.classList.remove("menu__chat-btn--active");
    profileButton.classList.remove("menu__profile-btn--active");
    mailtoLink.classList.remove("menu__mailto--active");
    calltoLink.classList.remove("menu__callto--active");
    langWrapper.classList.remove("menu__lang-block--active");
    langLink1.classList.remove("lang-radio-label--active");
    langLink2.classList.remove("lang-radio-label--active");
    langLink3.classList.remove("lang-radio-label--active");
    menu.classList.remove("menu--active");
    placeholder.classList.remove("placeholder--active");
    servicesBtnWrapper.classList.remove("services__btns-wrapper--hidden");
    upenderException.classList.remove("upender__exception--blurred");
    upenderBlurOverlay.classList.remove("upender__blur-overlay--active");
  } else {
    burgerButton.classList.add("menu__burger-btn--active");
    burgerLine1.classList.add("burger-btn__line--active");
    burgerLine2.classList.add("burger-btn__line--active");
    burgerLine3.classList.add("burger-btn__line--active");
    menuLogoWrapper.classList.add("menu__logo-block--active");
    logoLink.classList.add("menu__logo--active");
    logoImg.classList.add("logo__img--active");
    searchButton.classList.add("menu__search-btn--active");
    navigation.classList.add("menu__navigation--active");
    navigationList.classList.add("navigation__list--active");
    navItem1.classList.add("navigation__item--active");
    navLink1.classList.add("navigation__link-btn--active");
    navItem2.classList.add("navigation__item--active");
    navLink2.classList.add("navigation__link-btn--active");
    navItem3.classList.add("navigation__item--active");
    navLink3.classList.add("navigation__link-btn--active");
    navItem4.classList.add("navigation__item--active");
    navLink4.classList.add("navigation__link-btn--active");
    navItem5.classList.add("navigation__item--active");
    navLink5.classList.add("navigation__link-btn--active");
    navItem6.classList.add("navigation__item--active");
    navLink6.classList.add("navigation__link-btn--active");
    navItem7.classList.add("navigation__item--active");
    navLink7.classList.add("navigation__link-btn--active");
    navItem8.classList.add("navigation__item--active");
    navLink8.classList.add("navigation__link-btn--active");
    modBtnWrapper.classList.add("menu__modal-block--active");
    callButton.classList.add("menu__call-btn--active");
    chatButton.classList.add("menu__chat-btn--active");
    profileButton.classList.add("menu__profile-btn--active");
    mailtoLink.classList.add("menu__mailto--active");
    calltoLink.classList.add("menu__callto--active");
    langWrapper.classList.add("menu__lang-block--active");
    langLink1.classList.add("lang-radio-label--active");
    langLink2.classList.add("lang-radio-label--active");
    langLink3.classList.add("lang-radio-label--active");
    menu.classList.add("menu--active");
    placeholder.classList.add("placeholder--active");
    servicesBtnWrapper.classList.add("services__btns-wrapper--hidden");
    upenderException.classList.add("upender__exception--blurred");
    upenderBlurOverlay.classList.add("upender__blur-overlay--active");
  }
}
var upenderBlurOverlay = document.getElementById("upenderBlurOverlay");
upenderBlurOverlay.addEventListener("click", function () {
  if (upenderBlurOverlay.classList.contains("upender__blur-overlay--active")) {
    toggleBurgerButton();
  }
});
var burgerButton = document.getElementById("burgerButton");
burgerButton.addEventListener("click", toggleBurgerButton);
var chatButton = document.getElementById("chatButton");
chatButton.addEventListener("click", function () {
  var isButtonActive = burgerButton.classList.contains("menu__burger-btn--active");
  if (isButtonActive) {
    toggleBurgerButton();
  }
});
var callButton = document.getElementById("callButton");
callButton.addEventListener("click", function () {
  var isButtonActive = burgerButton.classList.contains("menu__burger-btn--active");
  if (isButtonActive) {
    toggleBurgerButton();
  }
});

/***/ }),

/***/ "./src/js/moreBtn.js":
/*!***************************!*\
  !*** ./src/js/moreBtn.js ***!
  \***************************/
/***/ (() => {

var brandsMoreBtn = document.getElementById('brandsMoreBtn');
var brandsMoreBtnTxt = document.getElementById('brandsMoreBtnTxt');
var brandsSwiperContainer = document.getElementById('brandsSwiperContainer');
brandsMoreBtn.addEventListener('click', function () {
  brandsSwiperContainer.classList.toggle('brands__swiper-container--expanded');
  brandsMoreBtn.classList.toggle('brands__more-btn--active');
  brandsMoreBtnTxt.textContent = brandsMoreBtn.classList.contains('brands__more-btn--active') ? 'Скрыть' : 'Показать все';
  var brandsSwiperSlides = document.querySelectorAll('.brands__swiper-slide');
  for (var i = 0; i < brandsSwiperSlides.length; i++) {
    brandsSwiperSlides[i].classList.toggle('brands__swiper-slide--visible');
  }
});
var techTypesMoreBtn = document.getElementById('techTypesMoreBtn');
var techTypesMoreBtnTxt = document.getElementById('techTypesMoreBtnTxt');
var techTypesSwiperContainer = document.getElementById('techTypesSwiperContainer');
techTypesMoreBtn.addEventListener('click', function () {
  techTypesSwiperContainer.classList.toggle('tech-types__swiper-container--expanded');
  techTypesMoreBtn.classList.toggle('tech-types__more-btn--active');
  techTypesMoreBtnTxt.textContent = techTypesMoreBtn.classList.contains('tech-types__more-btn--active') ? 'Скрыть' : 'Показать все';
  var techTypesSwiperSlides = document.querySelectorAll('.tech-types__swiper-slide');
  for (var i = 0; i < techTypesSwiperSlides.length; i++) {
    techTypesSwiperSlides[i].classList.toggle('tech-types__swiper-slide--visible');
  }
});

/***/ }),

/***/ "./src/js/sliderInit.js":
/*!******************************!*\
  !*** ./src/js/sliderInit.js ***!
  \******************************/
/***/ (() => {

var brandsSwiper = null;
var techTypesSwiper = null;
var pricesSwiper = null;
function initSwipers() {
  var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (windowWidth <= 767 && brandsSwiper === null) {
    document.querySelector('.brands__swiper-pagination').style.setProperty('--swiper-pagination-bottom', '110px');
    document.querySelector('.brands__swiper-pagination').style.setProperty('--swiper-pagination-bullet-horizontal-gap', '6px');
    brandsSwiper = new Swiper(".brands__swiper-container", {
      pagination: {
        el: ".brands__swiper-pagination",
        clickable: true
      },
      slidesPerGroup: 1,
      slidesPerView: 1.312,
      spaceBetween: 16,
      slidesOffsetBefore: 16,
      slidesOffsetAfter: 16
    });
  } else if (windowWidth > 767 && brandsSwiper !== null) {
    brandsSwiper.destroy();
    brandsSwiper = null;
  }
  if (windowWidth <= 767 && techTypesSwiper === null) {
    document.querySelector('.tech-types__swiper-pagination').style.setProperty('--swiper-pagination-bottom', '0px');
    document.querySelector('.tech-types__swiper-pagination').style.setProperty('--swiper-pagination-bullet-horizontal-gap', '6px');
    techTypesSwiper = new Swiper(".tech-types__swiper-container", {
      pagination: {
        el: ".tech-types__swiper-pagination",
        clickable: true
      },
      slidesPerGroup: 1,
      slidesPerView: 1.312,
      spaceBetween: 16,
      slidesOffsetBefore: 16,
      slidesOffsetAfter: 16
    });
  } else if (windowWidth > 767 && techTypesSwiper !== null) {
    techTypesSwiper.destroy();
    techTypesSwiper = null;
  }
  if (windowWidth <= 767 && pricesSwiper === null) {
    document.querySelector('.prices__swiper-pagination').style.setProperty('--swiper-pagination-bottom', '243px');
    document.querySelector('.prices__swiper-pagination').style.setProperty('--swiper-pagination-bullet-horizontal-gap', '6px');
    pricesSwiper = new Swiper(".prices__swiper-container", {
      pagination: {
        el: ".prices__swiper-pagination",
        clickable: true
      },
      slidesPerGroup: 1,
      slidesPerView: 1.217,
      spaceBetween: 16,
      slidesOffsetBefore: 8,
      slidesOffsetAfter: 8
    });
  } else if (windowWidth > 767 && pricesSwiper !== null) {
    pricesSwiper.destroy();
    pricesSwiper = null;
  }
}
window.addEventListener("load", function () {
  initSwipers();
});
window.addEventListener("resize", function () {
  initSwipers();
});

/***/ }),

/***/ "./node_modules/core-js/es6/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/es6/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
__webpack_require__(/*! ../modules/es6.object.create */ "./node_modules/core-js/modules/es6.object.create.js");
__webpack_require__(/*! ../modules/es6.object.define-property */ "./node_modules/core-js/modules/es6.object.define-property.js");
__webpack_require__(/*! ../modules/es6.object.define-properties */ "./node_modules/core-js/modules/es6.object.define-properties.js");
__webpack_require__(/*! ../modules/es6.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js");
__webpack_require__(/*! ../modules/es6.object.get-prototype-of */ "./node_modules/core-js/modules/es6.object.get-prototype-of.js");
__webpack_require__(/*! ../modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
__webpack_require__(/*! ../modules/es6.object.get-own-property-names */ "./node_modules/core-js/modules/es6.object.get-own-property-names.js");
__webpack_require__(/*! ../modules/es6.object.freeze */ "./node_modules/core-js/modules/es6.object.freeze.js");
__webpack_require__(/*! ../modules/es6.object.seal */ "./node_modules/core-js/modules/es6.object.seal.js");
__webpack_require__(/*! ../modules/es6.object.prevent-extensions */ "./node_modules/core-js/modules/es6.object.prevent-extensions.js");
__webpack_require__(/*! ../modules/es6.object.is-frozen */ "./node_modules/core-js/modules/es6.object.is-frozen.js");
__webpack_require__(/*! ../modules/es6.object.is-sealed */ "./node_modules/core-js/modules/es6.object.is-sealed.js");
__webpack_require__(/*! ../modules/es6.object.is-extensible */ "./node_modules/core-js/modules/es6.object.is-extensible.js");
__webpack_require__(/*! ../modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
__webpack_require__(/*! ../modules/es6.object.is */ "./node_modules/core-js/modules/es6.object.is.js");
__webpack_require__(/*! ../modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.function.bind */ "./node_modules/core-js/modules/es6.function.bind.js");
__webpack_require__(/*! ../modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
__webpack_require__(/*! ../modules/es6.function.has-instance */ "./node_modules/core-js/modules/es6.function.has-instance.js");
__webpack_require__(/*! ../modules/es6.parse-int */ "./node_modules/core-js/modules/es6.parse-int.js");
__webpack_require__(/*! ../modules/es6.parse-float */ "./node_modules/core-js/modules/es6.parse-float.js");
__webpack_require__(/*! ../modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
__webpack_require__(/*! ../modules/es6.number.to-fixed */ "./node_modules/core-js/modules/es6.number.to-fixed.js");
__webpack_require__(/*! ../modules/es6.number.to-precision */ "./node_modules/core-js/modules/es6.number.to-precision.js");
__webpack_require__(/*! ../modules/es6.number.epsilon */ "./node_modules/core-js/modules/es6.number.epsilon.js");
__webpack_require__(/*! ../modules/es6.number.is-finite */ "./node_modules/core-js/modules/es6.number.is-finite.js");
__webpack_require__(/*! ../modules/es6.number.is-integer */ "./node_modules/core-js/modules/es6.number.is-integer.js");
__webpack_require__(/*! ../modules/es6.number.is-nan */ "./node_modules/core-js/modules/es6.number.is-nan.js");
__webpack_require__(/*! ../modules/es6.number.is-safe-integer */ "./node_modules/core-js/modules/es6.number.is-safe-integer.js");
__webpack_require__(/*! ../modules/es6.number.max-safe-integer */ "./node_modules/core-js/modules/es6.number.max-safe-integer.js");
__webpack_require__(/*! ../modules/es6.number.min-safe-integer */ "./node_modules/core-js/modules/es6.number.min-safe-integer.js");
__webpack_require__(/*! ../modules/es6.number.parse-float */ "./node_modules/core-js/modules/es6.number.parse-float.js");
__webpack_require__(/*! ../modules/es6.number.parse-int */ "./node_modules/core-js/modules/es6.number.parse-int.js");
__webpack_require__(/*! ../modules/es6.math.acosh */ "./node_modules/core-js/modules/es6.math.acosh.js");
__webpack_require__(/*! ../modules/es6.math.asinh */ "./node_modules/core-js/modules/es6.math.asinh.js");
__webpack_require__(/*! ../modules/es6.math.atanh */ "./node_modules/core-js/modules/es6.math.atanh.js");
__webpack_require__(/*! ../modules/es6.math.cbrt */ "./node_modules/core-js/modules/es6.math.cbrt.js");
__webpack_require__(/*! ../modules/es6.math.clz32 */ "./node_modules/core-js/modules/es6.math.clz32.js");
__webpack_require__(/*! ../modules/es6.math.cosh */ "./node_modules/core-js/modules/es6.math.cosh.js");
__webpack_require__(/*! ../modules/es6.math.expm1 */ "./node_modules/core-js/modules/es6.math.expm1.js");
__webpack_require__(/*! ../modules/es6.math.fround */ "./node_modules/core-js/modules/es6.math.fround.js");
__webpack_require__(/*! ../modules/es6.math.hypot */ "./node_modules/core-js/modules/es6.math.hypot.js");
__webpack_require__(/*! ../modules/es6.math.imul */ "./node_modules/core-js/modules/es6.math.imul.js");
__webpack_require__(/*! ../modules/es6.math.log10 */ "./node_modules/core-js/modules/es6.math.log10.js");
__webpack_require__(/*! ../modules/es6.math.log1p */ "./node_modules/core-js/modules/es6.math.log1p.js");
__webpack_require__(/*! ../modules/es6.math.log2 */ "./node_modules/core-js/modules/es6.math.log2.js");
__webpack_require__(/*! ../modules/es6.math.sign */ "./node_modules/core-js/modules/es6.math.sign.js");
__webpack_require__(/*! ../modules/es6.math.sinh */ "./node_modules/core-js/modules/es6.math.sinh.js");
__webpack_require__(/*! ../modules/es6.math.tanh */ "./node_modules/core-js/modules/es6.math.tanh.js");
__webpack_require__(/*! ../modules/es6.math.trunc */ "./node_modules/core-js/modules/es6.math.trunc.js");
__webpack_require__(/*! ../modules/es6.string.from-code-point */ "./node_modules/core-js/modules/es6.string.from-code-point.js");
__webpack_require__(/*! ../modules/es6.string.raw */ "./node_modules/core-js/modules/es6.string.raw.js");
__webpack_require__(/*! ../modules/es6.string.trim */ "./node_modules/core-js/modules/es6.string.trim.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/es6.string.code-point-at */ "./node_modules/core-js/modules/es6.string.code-point-at.js");
__webpack_require__(/*! ../modules/es6.string.ends-with */ "./node_modules/core-js/modules/es6.string.ends-with.js");
__webpack_require__(/*! ../modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
__webpack_require__(/*! ../modules/es6.string.repeat */ "./node_modules/core-js/modules/es6.string.repeat.js");
__webpack_require__(/*! ../modules/es6.string.starts-with */ "./node_modules/core-js/modules/es6.string.starts-with.js");
__webpack_require__(/*! ../modules/es6.string.anchor */ "./node_modules/core-js/modules/es6.string.anchor.js");
__webpack_require__(/*! ../modules/es6.string.big */ "./node_modules/core-js/modules/es6.string.big.js");
__webpack_require__(/*! ../modules/es6.string.blink */ "./node_modules/core-js/modules/es6.string.blink.js");
__webpack_require__(/*! ../modules/es6.string.bold */ "./node_modules/core-js/modules/es6.string.bold.js");
__webpack_require__(/*! ../modules/es6.string.fixed */ "./node_modules/core-js/modules/es6.string.fixed.js");
__webpack_require__(/*! ../modules/es6.string.fontcolor */ "./node_modules/core-js/modules/es6.string.fontcolor.js");
__webpack_require__(/*! ../modules/es6.string.fontsize */ "./node_modules/core-js/modules/es6.string.fontsize.js");
__webpack_require__(/*! ../modules/es6.string.italics */ "./node_modules/core-js/modules/es6.string.italics.js");
__webpack_require__(/*! ../modules/es6.string.link */ "./node_modules/core-js/modules/es6.string.link.js");
__webpack_require__(/*! ../modules/es6.string.small */ "./node_modules/core-js/modules/es6.string.small.js");
__webpack_require__(/*! ../modules/es6.string.strike */ "./node_modules/core-js/modules/es6.string.strike.js");
__webpack_require__(/*! ../modules/es6.string.sub */ "./node_modules/core-js/modules/es6.string.sub.js");
__webpack_require__(/*! ../modules/es6.string.sup */ "./node_modules/core-js/modules/es6.string.sup.js");
__webpack_require__(/*! ../modules/es6.date.now */ "./node_modules/core-js/modules/es6.date.now.js");
__webpack_require__(/*! ../modules/es6.date.to-json */ "./node_modules/core-js/modules/es6.date.to-json.js");
__webpack_require__(/*! ../modules/es6.date.to-iso-string */ "./node_modules/core-js/modules/es6.date.to-iso-string.js");
__webpack_require__(/*! ../modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");
__webpack_require__(/*! ../modules/es6.date.to-primitive */ "./node_modules/core-js/modules/es6.date.to-primitive.js");
__webpack_require__(/*! ../modules/es6.array.is-array */ "./node_modules/core-js/modules/es6.array.is-array.js");
__webpack_require__(/*! ../modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");
__webpack_require__(/*! ../modules/es6.array.of */ "./node_modules/core-js/modules/es6.array.of.js");
__webpack_require__(/*! ../modules/es6.array.join */ "./node_modules/core-js/modules/es6.array.join.js");
__webpack_require__(/*! ../modules/es6.array.slice */ "./node_modules/core-js/modules/es6.array.slice.js");
__webpack_require__(/*! ../modules/es6.array.sort */ "./node_modules/core-js/modules/es6.array.sort.js");
__webpack_require__(/*! ../modules/es6.array.for-each */ "./node_modules/core-js/modules/es6.array.for-each.js");
__webpack_require__(/*! ../modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");
__webpack_require__(/*! ../modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");
__webpack_require__(/*! ../modules/es6.array.some */ "./node_modules/core-js/modules/es6.array.some.js");
__webpack_require__(/*! ../modules/es6.array.every */ "./node_modules/core-js/modules/es6.array.every.js");
__webpack_require__(/*! ../modules/es6.array.reduce */ "./node_modules/core-js/modules/es6.array.reduce.js");
__webpack_require__(/*! ../modules/es6.array.reduce-right */ "./node_modules/core-js/modules/es6.array.reduce-right.js");
__webpack_require__(/*! ../modules/es6.array.index-of */ "./node_modules/core-js/modules/es6.array.index-of.js");
__webpack_require__(/*! ../modules/es6.array.last-index-of */ "./node_modules/core-js/modules/es6.array.last-index-of.js");
__webpack_require__(/*! ../modules/es6.array.copy-within */ "./node_modules/core-js/modules/es6.array.copy-within.js");
__webpack_require__(/*! ../modules/es6.array.fill */ "./node_modules/core-js/modules/es6.array.fill.js");
__webpack_require__(/*! ../modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
__webpack_require__(/*! ../modules/es6.array.find-index */ "./node_modules/core-js/modules/es6.array.find-index.js");
__webpack_require__(/*! ../modules/es6.array.species */ "./node_modules/core-js/modules/es6.array.species.js");
__webpack_require__(/*! ../modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
__webpack_require__(/*! ../modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
__webpack_require__(/*! ../modules/es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
__webpack_require__(/*! ../modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
__webpack_require__(/*! ../modules/es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
__webpack_require__(/*! ../modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
__webpack_require__(/*! ../modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
__webpack_require__(/*! ../modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
__webpack_require__(/*! ../modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es6.map */ "./node_modules/core-js/modules/es6.map.js");
__webpack_require__(/*! ../modules/es6.set */ "./node_modules/core-js/modules/es6.set.js");
__webpack_require__(/*! ../modules/es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js");
__webpack_require__(/*! ../modules/es6.weak-set */ "./node_modules/core-js/modules/es6.weak-set.js");
__webpack_require__(/*! ../modules/es6.typed.array-buffer */ "./node_modules/core-js/modules/es6.typed.array-buffer.js");
__webpack_require__(/*! ../modules/es6.typed.data-view */ "./node_modules/core-js/modules/es6.typed.data-view.js");
__webpack_require__(/*! ../modules/es6.typed.int8-array */ "./node_modules/core-js/modules/es6.typed.int8-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint8-array */ "./node_modules/core-js/modules/es6.typed.uint8-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint8-clamped-array */ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js");
__webpack_require__(/*! ../modules/es6.typed.int16-array */ "./node_modules/core-js/modules/es6.typed.int16-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint16-array */ "./node_modules/core-js/modules/es6.typed.uint16-array.js");
__webpack_require__(/*! ../modules/es6.typed.int32-array */ "./node_modules/core-js/modules/es6.typed.int32-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint32-array */ "./node_modules/core-js/modules/es6.typed.uint32-array.js");
__webpack_require__(/*! ../modules/es6.typed.float32-array */ "./node_modules/core-js/modules/es6.typed.float32-array.js");
__webpack_require__(/*! ../modules/es6.typed.float64-array */ "./node_modules/core-js/modules/es6.typed.float64-array.js");
__webpack_require__(/*! ../modules/es6.reflect.apply */ "./node_modules/core-js/modules/es6.reflect.apply.js");
__webpack_require__(/*! ../modules/es6.reflect.construct */ "./node_modules/core-js/modules/es6.reflect.construct.js");
__webpack_require__(/*! ../modules/es6.reflect.define-property */ "./node_modules/core-js/modules/es6.reflect.define-property.js");
__webpack_require__(/*! ../modules/es6.reflect.delete-property */ "./node_modules/core-js/modules/es6.reflect.delete-property.js");
__webpack_require__(/*! ../modules/es6.reflect.enumerate */ "./node_modules/core-js/modules/es6.reflect.enumerate.js");
__webpack_require__(/*! ../modules/es6.reflect.get */ "./node_modules/core-js/modules/es6.reflect.get.js");
__webpack_require__(/*! ../modules/es6.reflect.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js");
__webpack_require__(/*! ../modules/es6.reflect.get-prototype-of */ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js");
__webpack_require__(/*! ../modules/es6.reflect.has */ "./node_modules/core-js/modules/es6.reflect.has.js");
__webpack_require__(/*! ../modules/es6.reflect.is-extensible */ "./node_modules/core-js/modules/es6.reflect.is-extensible.js");
__webpack_require__(/*! ../modules/es6.reflect.own-keys */ "./node_modules/core-js/modules/es6.reflect.own-keys.js");
__webpack_require__(/*! ../modules/es6.reflect.prevent-extensions */ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js");
__webpack_require__(/*! ../modules/es6.reflect.set */ "./node_modules/core-js/modules/es6.reflect.set.js");
__webpack_require__(/*! ../modules/es6.reflect.set-prototype-of */ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js");


/***/ }),

/***/ "./node_modules/core-js/fn/array/flat-map.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/array/flat-map.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.array.flat-map */ "./node_modules/core-js/modules/es7.array.flat-map.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Array.flatMap;


/***/ }),

/***/ "./node_modules/core-js/fn/array/includes.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/array/includes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Array.includes;


/***/ }),

/***/ "./node_modules/core-js/fn/object/entries.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/object/entries.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.object.entries */ "./node_modules/core-js/modules/es7.object.entries.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.entries;


/***/ }),

/***/ "./node_modules/core-js/fn/object/get-own-property-descriptors.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/fn/object/get-own-property-descriptors.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.getOwnPropertyDescriptors;


/***/ }),

/***/ "./node_modules/core-js/fn/object/values.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/fn/object/values.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.object.values */ "./node_modules/core-js/modules/es7.object.values.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.values;


/***/ }),

/***/ "./node_modules/core-js/fn/promise/finally.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/fn/promise/finally.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(/*! ../../modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
__webpack_require__(/*! ../../modules/es7.promise.finally */ "./node_modules/core-js/modules/es7.promise.finally.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Promise["finally"];


/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-end.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-end.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.pad-end */ "./node_modules/core-js/modules/es7.string.pad-end.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.padEnd;


/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-start.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-start.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.pad-start */ "./node_modules/core-js/modules/es7.string.pad-start.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.padStart;


/***/ }),

/***/ "./node_modules/core-js/fn/string/trim-end.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/fn/string/trim-end.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.trim-right */ "./node_modules/core-js/modules/es7.string.trim-right.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.trimRight;


/***/ }),

/***/ "./node_modules/core-js/fn/string/trim-start.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/fn/string/trim-start.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.trim-left */ "./node_modules/core-js/modules/es7.string.trim-left.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.trimLeft;


/***/ }),

/***/ "./node_modules/core-js/fn/symbol/async-iterator.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/fn/symbol/async-iterator.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
module.exports = (__webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js").f)('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/fn/global.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/library/fn/global.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/es7.global */ "./node_modules/core-js/library/modules/es7.global.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").global;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/***/ ((module) => {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document);
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/***/ ((module) => {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.global.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.global.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.G, { global: __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_a-number-value.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_a-number-value.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/***/ ((module) => {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-copy-within.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-copy-within.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-fill.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_array-fill.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-reduce.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_array-reduce.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var fastKey = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey);
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var getWeak = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").getWeak);
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/***/ ((module) => {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-iso-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-iso-string.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;


/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-primitive.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-primitive.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/***/ ((module) => {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document);
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/***/ ((module) => {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails-is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(/*! ./es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flatten-into-array.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_flatten-into-array.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IS_CONCAT_SPREADABLE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/***/ ((module) => {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var document = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document);
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = (__webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set);
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/***/ ((module) => {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-integer.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/***/ ((module) => {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_math-expm1.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-expm1.js ***!
  \*****************************************************/
/***/ ((module) => {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;


/***/ }),

/***/ "./node_modules/core-js/modules/_math-fround.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_math-fround.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js");
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_math-log1p.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-log1p.js ***!
  \*****************************************************/
/***/ ((module) => {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_math-sign.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-sign.js ***!
  \****************************************************/
/***/ ((module) => {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var macrotask = (__webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set);
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  (__webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild)(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = (__webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat)('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-to-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-to-array.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var isEnum = (__webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f);
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Reflect = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect);
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_parse-float.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-float.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $parseFloat = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").parseFloat);
var $trim = (__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim);

module.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js") + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "./node_modules/core-js/modules/_parse-int.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-int.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $parseInt = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").parseInt);
var $trim = (__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim);
var ws = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

(__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource) = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/modules/_same-value.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \*****************************************************/
/***/ ((module) => {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f)(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var def = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_strict-method.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-context.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-html.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-pad.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-pad.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var repeat = __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-repeat.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-repeat.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-trim.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var spaces = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "./node_modules/core-js/modules/_string-ws.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-index.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_to-index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/***/ ((module) => {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_typed-array.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-array.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js")) {
  var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
  var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
  var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
  var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
  var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
  var $buffer = __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js");
  var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
  var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
  var propertyDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
  var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
  var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
  var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
  var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
  var toIndex = __webpack_require__(/*! ./_to-index */ "./node_modules/core-js/modules/_to-index.js");
  var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
  var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
  var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
  var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
  var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
  var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
  var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
  var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
  var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
  var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
  var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
  var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
  var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
  var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
  var createArrayIncludes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js");
  var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
  var ArrayIterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
  var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
  var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
  var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
  var arrayFill = __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js");
  var arrayCopyWithin = __webpack_require__(/*! ./_array-copy-within */ "./node_modules/core-js/modules/_array-copy-within.js");
  var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
  var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/modules/_typed-buffer.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-buffer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toIndex = __webpack_require__(/*! ./_to-index */ "./node_modules/core-js/modules/_to-index.js");
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var arrayFill = __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),

/***/ "./node_modules/core-js/modules/_typed.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_typed.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/***/ ((module) => {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var defineProperty = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol);
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = (__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod) = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.copy-within.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.copy-within.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { copyWithin: __webpack_require__(/*! ./_array-copy-within */ "./node_modules/core-js/modules/_array-copy-within.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('copyWithin');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.every.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.every.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $every = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(4);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.fill.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.fill.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { fill: __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('fill');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.filter.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.filter.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $filter = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(2);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find-index.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find-index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.for-each.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $forEach = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var STRICT = __webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.index-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.index-of.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $indexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.is-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.is-array.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.join.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.join.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js") != Object || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.last-index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.map.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.map.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $map = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(1);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.of.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.of.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce-right.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.slice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.slice.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.some.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.some.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $some = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(3);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.sort.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.species.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.species.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('Array');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.now.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.now.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-iso-string.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toISOString = __webpack_require__(/*! ./_date-to-iso-string */ "./node_modules/core-js/modules/_date-to-iso-string.js");

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-json.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-json.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ "./node_modules/core-js/modules/_date-to-primitive.js"));


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-string.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.bind.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.bind.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Function', { bind: __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.has-instance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.has-instance.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var HAS_INSTANCE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f)(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.acosh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.acosh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var log1p = __webpack_require__(/*! ./_math-log1p */ "./node_modules/core-js/modules/_math-log1p.js");
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.asinh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.asinh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.atanh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.atanh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cbrt.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cbrt.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var sign = __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js");

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.clz32.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.clz32.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cosh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cosh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.expm1.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.expm1.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.fround.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.fround.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { fround: __webpack_require__(/*! ./_math-fround */ "./node_modules/core-js/modules/_math-fround.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.hypot.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.hypot.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.imul.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.imul.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log10.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log10.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log1p.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log1p.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { log1p: __webpack_require__(/*! ./_math-log1p */ "./node_modules/core-js/modules/_math-log1p.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log2.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log2.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sign.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sign.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { sign: __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sinh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sinh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.tanh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.tanh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.trunc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.trunc.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var gOPD = (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f);
var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var $trim = (__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim);
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, NUMBER, $Number);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.epsilon.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.epsilon.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-finite.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-finite.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var _isFinite = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").isFinite);

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-integer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/modules/_is-integer.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-nan.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-safe-integer.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isInteger = __webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/modules/_is-integer.js");
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.max-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.min-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-float.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-float.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js");
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-int.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-int.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/modules/_parse-int.js");
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-fixed.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "./node_modules/core-js/modules/_a-number-value.js");
var repeat = __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js");
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-precision.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-precision.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "./node_modules/core-js/modules/_a-number-value.js");
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.create.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.create.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-properties.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-properties.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-property.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"), 'Object', { defineProperty: (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f) });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.freeze.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.freeze.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze);

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f);

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyNames', function () {
  return (__webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js").f);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-extensible.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-frozen.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-sealed.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { is: __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze);

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.seal.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.seal.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze);

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: (__webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set) });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-float.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-float.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js");
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-int.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-int.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/modules/_parse-int.js");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var task = (__webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set);
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.apply.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var rApply = ((__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect) || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js");
var rConstruct = ((__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect) || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var gOPD = (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f);
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js")(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var getProto = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.has.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var setProto = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js");

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  re2[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, 'RegExp', $RegExp);
}

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('RegExp');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f)(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@match logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.search.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var sameValue = __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@search logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.anchor.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.anchor.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.big.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.big.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.blink.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.blink.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.bold.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.bold.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.code-point-at.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.ends-with.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.ends-with.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fixed.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fixed.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontcolor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontsize.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontsize.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.from-code-point.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.includes.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.italics.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.italics.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.link.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.link.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.raw.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.raw.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.repeat.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.repeat.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.small.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.small.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.starts-with.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.starts-with.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.strike.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.strike.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sub.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sub.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sup.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sup.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.trim.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.trim.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var META = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY);
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f) = gOPNExt.f = $getOwnPropertyNames;
  (__webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f) = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.array-buffer.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
var buffer = __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var ArrayBuffer = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").ArrayBuffer);
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(ARRAY_BUFFER);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.data-view.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.data-view.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.G + $export.W + $export.F * !(__webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js").ABV), {
  DataView: (__webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js").DataView)
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float32-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float64-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float64-array.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int16-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int16-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int32-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int32-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int8-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int8-array.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint16-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint16-array.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint32-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint32-array.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-set.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-set.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.flat-map.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flat-map.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ "./node_modules/core-js/modules/_flatten-into-array.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('flatMap');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $includes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('includes');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.entries.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.entries.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $entries = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var ownKeys = __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.values.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.values.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.finally.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.finally.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-end.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-end.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-start.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-start.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-left.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-left.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-right.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-right.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.immediate.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/web.immediate.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js");
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});


/***/ }),

/***/ "./node_modules/core-js/web/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/web/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
__webpack_require__(/*! ../modules/web.immediate */ "./node_modules/core-js/modules/web.immediate.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!../node_modules/normalize.css/normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css_animations_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./style/css/animations.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/css/animations.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./style/css/style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/css/style.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css_menu_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./style/css/menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/css/menu.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css_services_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./style/css/services.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/css/services.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css_brands_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./style/css/brands.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/css/brands.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_8__);
// Imports









var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/TTLakes-Regular.eot */ "./src/fonts/TTLakes-Regular.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/TTLakes-Regular.woff */ "./src/fonts/TTLakes-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/TTLakes-Regular.ttf */ "./src/fonts/TTLakes-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/TTLakes-Medium.eot */ "./src/fonts/TTLakes-Medium.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/TTLakes-Medium.woff */ "./src/fonts/TTLakes-Medium.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/TTLakes-Medium.ttf */ "./src/fonts/TTLakes-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/TTLakes-Bold.eot */ "./src/fonts/TTLakes-Bold.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/TTLakes-Bold.woff */ "./src/fonts/TTLakes-Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/TTLakes-Bold.ttf */ "./src/fonts/TTLakes-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/go.svg */ "./src/img/go.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/goside.svg */ "./src/img/goside.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/more.svg */ "./src/img/more.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://unpkg.com/swiper/swiper-bundle.min.css);"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_style_css_animations_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_style_css_style_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_style_css_menu_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_style_css_services_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_style_css_brands_css__WEBPACK_IMPORTED_MODULE_7__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_8___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_8___default()(___CSS_LOADER_URL_IMPORT_0___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_8___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_8___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_8___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_8___default()(___CSS_LOADER_URL_IMPORT_3___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_8___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_8___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_8___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_8___default()(___CSS_LOADER_URL_IMPORT_6___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_8___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_8___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_8___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_8___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_8___default()(___CSS_LOADER_URL_IMPORT_11___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "TT Lakes";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  src: local("TT Lakes Regular"), local("TTLakes-Regular"), url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("embedded-opentype"), url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "TT Lakes";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  src: local("TT Lakes Medium"), local("TTLakes-Medium"), url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format("embedded-opentype"), url(${___CSS_LOADER_URL_REPLACEMENT_6___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_7___}) format("truetype");
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: "TT Lakes";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_8___});
  src: local("TT Lakes Bold"), local("TTLakes-Bold"), url(${___CSS_LOADER_URL_REPLACEMENT_9___}) format("embedded-opentype"), url(${___CSS_LOADER_URL_REPLACEMENT_10___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_11___}) format("truetype");
  font-weight: bold;
  font-style: normal;
}
.tech-types {
  box-sizing: border-box;
  height: 312px;
  background-color: #F8F8F8;
  border-top: 1px solid #D9FFF5;
  padding-bottom: 38px;
  transition: all 0.2s ease;
}
.tech-types__title {
  display: block;
  width: 100%;
  height: 80px;
  padding: 16px;
  background: linear-gradient(270deg, #F8F8F8 0%, #FFF 100%);
  color: #7E7E82;
  font-size: 16px;
  font-family: TT Lakes;
  font-weight: normal;
  line-height: 24px;
  letter-spacing: -0.2px;
  text-transform: uppercase;
}
.tech-types__swiper-container {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 211px;
  overflow: hidden;
  transition: all 0.2s ease;
}
.tech-types__swiper-container:after {
  content: "";
  position: absolute;
  top: 11px;
  right: 0;
  width: 24px;
  height: 166px;
  background: linear-gradient(270deg, #F8F8F8 0.04%, rgba(248, 248, 248, 0) 100%);
  z-index: 1;
}
.tech-types__swiper-wrapper {
  box-sizing: border-box;
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-top: 16px;
  transition: all 0.2s ease;
}
.tech-types__swiper-slide {
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  height: 160px;
  width: 240px;
  display: flex;
  justify-content: flex-start;
  padding: 16px;
  border-radius: 6px;
  border: 1px solid #EAEAEA;
  background-color: #FFF;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_12___});
  background-position: bottom 14px right 16px;
  background-repeat: no-repeat;
  transition: all 0.3s ease;
}
.tech-types__swiper-slide:hover {
  -webkit-transform: translateZ(10px);
          transform: translateZ(10px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
.tech-types__link-btn {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  color: #1B1C21;
  font-family: TT Lakes;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.2px;
}
.tech-types__more-btn {
  display: none;
}
.prices {
  box-sizing: border-box;
  width: 100%;
  height: 547px;
  background-color: #F8F8F8;
  border-top: 1px solid #D9FFF5;
  padding-bottom: 40px;
  transition: all 0.2s ease;
  position: relative;
}
.prices__title {
  display: block;
  width: 100%;
  height: 56px;
  padding: 16px;
  background: linear-gradient(270deg, #F8F8F8 0%, #FFF 100%);
  color: #7E7E82;
  font-size: 16px;
  font-family: TT Lakes;
  font-weight: normal;
  line-height: 24px;
  letter-spacing: -0.2px;
  text-transform: uppercase;
}
.prices__swiper-container {
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 228px;
  overflow: hidden;
  transition: all 0.2s ease;
  margin-bottom: 169px;
}
.prices__swiper-container::after {
  content: "";
  position: absolute;
  top: 72px;
  right: 0;
  width: 24px;
  height: 200px;
  background: linear-gradient(270deg, #F8F8F8 0.04%, rgba(248, 248, 248, 0) 100%);
  z-index: 1;
}
.prices__explanation {
  box-sizing: border-box;
  text-align: left;
  width: 90%;
  height: 137px;
  position: absolute;
  bottom: 94px;
  padding-left: 16px;
  color: #1B1C21;
  font-family: TT Lakes;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
}
.prices__table-header {
  display: none;
}
.prices__swiper-wrapper {
  box-sizing: border-box;
  border-spacing: 0px;
  border-collapse: collapse;
  padding-top: 16px;
  transition: all 0.2s ease;
}
.prices__swiper-slide {
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  height: 200px;
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 16px;
  border-radius: 6px;
  transition: all 0.3s ease;
  background-color: #FFF;
}
.prices__swiper-slide:hover {
  -webkit-transform: translateZ(10px);
          transform: translateZ(10px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
.prices__cell {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 13px;
}
.prices__cell-header {
  color: #7E7E82;
  font-family: TT Lakes;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  margin-bottom: 4px;
}
.prices__cell-content {
  color: #1B1C21;
  font-family: TT Lakes;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.1px;
}
.prices__order-btn {
  box-sizing: border-box;
  position: absolute;
  right: 16px;
  bottom: 18px;
  width: 119px;
  height: 32px;
  border-radius: 16px;
  background: #FF3E79;
  border: none;
  padding: 4px 12px;
  margin: 0;
  -webkit-appearance: none;
          appearance: none;
  color: #FFF;
  text-align: left;
  font-family: TT Lakes;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.15px;
  text-transform: uppercase;
  transition: -webkit-filter 0.3s ease, -webkit-transform 0.3s ease;
  transition: filter 0.3s ease, transform 0.3s ease;
  transition: filter 0.3s ease, transform 0.3s ease, -webkit-filter 0.3s ease, -webkit-transform 0.3s ease;
  cursor: pointer;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_13___});
  background-position: bottom 4px right 8px;
  background-repeat: no-repeat;
}
.prices__order-btn:hover {
  -webkit-filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.5)) saturate(1.8);
          filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.5)) saturate(1.8);
}

.offer-link {
  display: inline-block;
  box-sizing: border-box;
  width: 60%;
  outline: none;
  -webkit-text-decoration: none;
  text-decoration: none;
  color: #1B1C21;
  font-family: TT Lakes;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.2px;
  margin-left: 16px;
  vertical-align: center;
  transition: all 0.4s ease;
}
.offer-link:hover {
  -webkit-text-decoration: underline;
  text-decoration: underline;
  text-decoration-color: #FF3E79;
}
.offer-link__text::after {
  content: "";
  display: inline-block;
  width: 24px;
  height: 16px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_14___});
  background-repeat: no-repeat;
  background-position: center;
  transition: -webkit-transform 0.3s ease;
  transition: transform 0.3s ease;
  transition: transform 0.3s ease, -webkit-transform 0.3s ease;
  position: relative;
  bottom: -3px;
}
.offer-link__text:hover:after {
  -webkit-transform: scale(1.1) translateX(50%);
          transform: scale(1.1) translateX(50%);
}
.info {
  box-sizing: border-box;
  width: 100%;
  height: 147px;
  background-color: #F8F8F8;
  border-top: 1px solid #D9FFF5;
  padding: 16px 16px 18px 16px;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #7E7E82;
  text-align: center;
  font-family: TT Lakes;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
}
.info__link {
  outline: none;
  -webkit-text-decoration: none;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.3s ease;
  color: #7E7E82;
  font-family: TT Lakes;
}
.info__link:hover {
  -webkit-text-decoration: underline;
  text-decoration: underline;
  text-decoration-color: #7E7E82;
}

.own-n-dev {
  margin: 0;
}

.offer {
  margin: 0;
}
.close-btn {
  box-sizing: border-box;
  display: block;
}
.close-btn__line:nth-child(1) {
  display: block;
  box-sizing: border-box;
  width: 24px;
  height: 2px;
  border-radius: 1px;
  background-color: #FFFFFF;
  margin: auto;
  -webkit-transform: rotate(45deg) translateY(1px);
          transform: rotate(45deg) translateY(1px);
}
.close-btn__line:nth-child(2) {
  display: block;
  box-sizing: border-box;
  width: 24px;
  height: 2px;
  border-radius: 1px;
  background-color: #FFFFFF;
  margin: auto;
  -webkit-transform: rotate(-45deg) translateY(-1px);
          transform: rotate(-45deg) translateY(-1px);
}

.feedback {
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1000;
  width: 320px;
  height: 676px;
  background-color: #FFF;
  padding: 80px 16px 16px 16px;
  box-shadow: -16px 0px 52px 0px rgba(14, 24, 80, 0.2);
  transition: all 0.1s ease;
}
.feedback__title {
  color: #1B1C21;
  font-family: TT Lakes;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.6px;
  position: relative;
}
.feedback__title:before {
  box-sizing: border-box;
  position: absolute;
  content: "";
  left: -16px;
  bottom: 0;
  width: 4px;
  height: 40px;
  border-right: 4px solid #41F6D7;
  border-radius: 0 4px 4px 0;
}
.feedback__input {
  box-sizing: border-box;
  width: 288px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid #EAEAEA;
  margin-bottom: 16px;
  color: #B5B6BC;
  font-family: TT Lakes;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.2px;
  padding: 12px 16px;
}
.feedback__mess {
  box-sizing: border-box;
  width: 288px;
  height: 118px;
  border-radius: 8px;
  border: 1px solid #EAEAEA;
  color: #B5B6BC;
  font-family: TT Lakes;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.2px;
  padding: 12px 16px;
  resize: none;
}
.feedback__info {
  color: #7E7E82;
  font-family: TT Lakes;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  margin-top: 12px;
  margin-bottom: 18px;
}
.feedback__imp {
  color: #FF3E79;
}
.feedback__link {
  outline: none;
  -webkit-text-decoration: none;
  text-decoration: none;
  transition: all 0.3s ease;
  color: #FF3E79;
  font-family: TT Lakes;
  display: inline;
}
.feedback__link:hover {
  -webkit-text-decoration: underline;
  text-decoration: underline;
  text-decoration-color: #FF3E79;
}
.feedback__btn {
  box-sizing: border-box;
  width: 136px;
  height: 32px;
  border-radius: 16px;
  background: #FF3E79;
  border: none;
  padding: 4px 19px;
  margin: 0;
  -webkit-appearance: none;
          appearance: none;
  color: #FFF;
  text-align: left;
  font-family: TT Lakes;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.15px;
  text-transform: uppercase;
  transition: -webkit-filter 0.3s ease;
  transition: filter 0.3s ease;
  transition: filter 0.3s ease, -webkit-filter 0.3s ease;
  cursor: pointer;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_13___});
  background-position: bottom 4px right 11px;
  background-repeat: no-repeat;
  position: absolute;
  right: 16px;
}
.feedback__btn:hover {
  -webkit-filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.5)) saturate(1.8);
          filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.5)) saturate(1.8);
}
.feedback__close-btn {
  position: absolute;
  top: 24px;
  left: 16px;
}

.feedback--hidden {
  border: 0;
  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(50%);
          clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
}
.callback {
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1000;
  width: 320px;
  height: 676px;
  background-color: #FFF;
  padding: 80px 16px 16px 16px;
  box-shadow: -16px 0px 52px 0px rgba(14, 24, 80, 0.2);
  transition: all 0.1s ease;
}
.callback__title {
  color: #1B1C21;
  font-family: TT Lakes;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.6px;
  position: relative;
}
.callback__title:before {
  box-sizing: border-box;
  position: absolute;
  content: "";
  left: -16px;
  bottom: 0;
  width: 4px;
  height: 40px;
  border-right: 4px solid #41F6D7;
  border-radius: 0 4px 4px 0;
}
.callback__input {
  box-sizing: border-box;
  width: 288px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid #EAEAEA;
  margin-bottom: 4px;
  color: #B5B6BC;
  font-family: TT Lakes;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.2px;
  padding: 12px 16px;
}
.callback__info {
  color: #7E7E82;
  font-family: TT Lakes;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  margin-top: 12px;
  margin-bottom: 18px;
}
.callback__imp {
  color: #FF3E79;
}
.callback__link {
  outline: none;
  -webkit-text-decoration: none;
  text-decoration: none;
  transition: all 0.3s ease;
  color: #FF3E79;
  font-family: TT Lakes;
  display: inline;
}
.callback__link:hover {
  -webkit-text-decoration: underline;
  text-decoration: underline;
  text-decoration-color: #FF3E79;
}
.callback__btn {
  box-sizing: border-box;
  width: 136px;
  height: 32px;
  border-radius: 16px;
  background: #FF3E79;
  border: none;
  padding: 4px 19px;
  margin: 0;
  -webkit-appearance: none;
          appearance: none;
  color: #FFF;
  text-align: left;
  font-family: TT Lakes;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.15px;
  text-transform: uppercase;
  transition: -webkit-filter 0.3s ease;
  transition: filter 0.3s ease;
  transition: filter 0.3s ease, -webkit-filter 0.3s ease;
  cursor: pointer;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_13___});
  background-position: bottom 4px right 11px;
  background-repeat: no-repeat;
  position: absolute;
  right: 16px;
}
.callback__btn:hover {
  -webkit-filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.5)) saturate(1.8);
          filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.5)) saturate(1.8);
}
.callback__close-btn {
  position: absolute;
  top: 24px;
  left: 16px;
}

.callback--hidden {
  border: 0;
  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(50%);
          clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
}

@media (min-width: 768px){
  .tech-types {
    min-height: 322px;
    height: auto;
    padding-bottom: 34px;
    max-width: 1440px;
  }
  .tech-types__title {
    height: 56px;
    padding: 16px 24px;
  }
  .tech-types__swiper-container {
    height: 208px;
  }
  .tech-types__swiper-container--expanded {
    height: auto;
  }
  .tech-types__swiper-container:after {
    display: none;
  }
  .tech-types__swiper-wrapper {
    display: flex;
    flex-wrap: wrap;
    padding: 24px;
    padding-right: 0;
  }
  .tech-types__swiper-slide {
    flex-basis: calc(33.33% - 24px);
    margin-bottom: 16px;
    margin-right: 24px;
    z-index: 1;
  }
  .tech-types__swiper-slide:nth-child(n+4) {
    display: none;
  }
  .tech-types__swiper-slide--visible:nth-child(n+4) {
    display: block;
    flex-basis: calc(33.33% - 24px);
    margin-bottom: 16px;
    margin-right: 24px;
    z-index: 1;
  }
  .tech-types__more-btn {
    display: flex;
    width: 143px;
    margin-left: 24px;
    padding-left: 9px;
  }
  .tech-types__more-btn--active::before {
    -webkit-transform: rotate(180deg) translateY(50%);
            transform: rotate(180deg) translateY(50%);
  }
  .prices {
    height: 614px;
    padding-bottom: 47px;
  }
  .prices__title {
    padding: 16px 24px;
    margin-bottom: 3px;
  }
  .prices__swiper-container {
    display: table;
    width: 93.75%;
    margin: 0 24px;
    border-spacing: 0;
  }
  .prices__swiper-container::after {
    display: none;
  }
  .prices__explanation {
    width: 60%;
    height: 98px;
    position: static;
    padding-left: 0;
    padding-top: 24px;
    caption-side: bottom;
  }
  .prices__table-header {
    display: table-header-group;
    color: #7E7E82;
    font-family: TT Lakes;
    font-size: 14px;
    font-style: normal;
    line-height: 16px;
    text-align: left;
    height: 59px;
  }
  .prices__head-cell {
    font-weight: 500;
    padding: 16px;
    vertical-align: bottom;
  }
  .prices__head-cell:nth-child(1) {
    width: 51.5%;
  }
  .prices__head-cell:nth-child(2) {
    width: 13.5%;
  }
  .prices__head-cell:nth-child(3) {
    width: 35%;
  }
  .prices__swiper-wrapper {
    display: table-row-group;
    width: 720px;
    margin: 0 24px;
  }
  .prices__swiper-slide {
    height: 65px;
    width: 720px;
    display: table-row;
    padding: 0;
    border-radius: 6px;
    overflow: hidden;
    background-color: #F8F8F8;
  }
  .prices__swiper-slide:hover {
    -webkit-transform: translateZ(0) scaleX(0.99);
            transform: translateZ(0) scaleX(0.99);
    box-shadow: none;
  }
  .prices__cell {
    display: table-cell;
    padding: 0;
    padding-left: 16px;
    overflow: hidden;
    background-color: #FFF;
  }
  .prices__cell:first-child::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-top: 1px solid #EAEAEA;
    width: 95.56%;
    height: 1px;
    top: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
  }
  .prices__cell--ltc:first-child::before {
    display: none;
  }
  .prices__cell--ltc {
    border-radius: 6px 0 0 0;
    overflow: hidden;
  }
  .prices__cell--rtc {
    border-radius: 0 6px 0 0;
    overflow: hidden;
  }
  .prices__cell--lbc {
    border-radius: 0 0 0 6px;
    overflow: hidden;
  }
  .prices__cell--rbc {
    border-radius: 0 0 6px 0;
    overflow: hidden;
  }
  .prices__cell-header {
    display: none;
  }
  .prices__order-btn:hover {
    -webkit-transform: translateZ(-10px);
            transform: translateZ(-10px);
    -webkit-filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.5)) saturate(1.8);
            filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.5)) saturate(1.8);
  }
  .offer-link {
    width: 319px;
    margin-left: 24px;
  }
  .info {
    height: 105px;
    padding: 32px 24px 25px 24px;
    flex-direction: row;
    align-items: flex-start;
  }
  .own-n-dev {
    flex-basis: calc(33.33% - 22px);
    text-align: left;
  }
  .privacy-policy {
    flex-basis: calc(33.33% - 22px);
  }
  .offer {
    flex-basis: calc(33.33% - 22px);
    text-align: right;
  }
}

@media (min-width: 1426px){
  .tech-types {
    min-height: 340px;
    height: auto;
  }
  .tech-types__title {
    padding: 16px 32px;
  }
  .tech-types__swiper-wrapper {
    padding-left: 34px;
  }
  .tech-types__swiper-slide {
    flex-basis: calc(25% - 32px);
    margin-bottom: 16px;
    margin-right: 32px;
    z-index: 1;
  }
  .tech-types__swiper-slide:nth-child(n+4) {
    display: block;
    flex-basis: calc(25% - 32px);
    margin-bottom: 16px;
    margin-right: 32px;
    z-index: 1;
  }
  .tech-types__swiper-slide:nth-child(n+5) {
    display: none;
  }
  .tech-types__swiper-slide--visible:nth-child(n+5) {
    display: block;
    flex-basis: calc(25% - 32px);
    margin-bottom: 16px;
    margin-right: 32px;
    z-index: 1;
  }
  .tech-types__more-btn {
    margin-left: 32px;
  }
  .prices {
    height: 625px;
    padding-bottom: 50px;
  }
  .prices__title {
    padding: 16px 33px;
  }
  .prices__swiper-container {
    width: 94.3%;
    margin: 0 32px;
  }
  .prices__explanation {
    width: 40%;
    height: 107px;
    padding-top: 30px;
  }
  .prices__head-cell {
    padding: 16px 24px;
  }
  .prices__head-cell:nth-child(1) {
    width: 44.5%;
  }
  .prices__head-cell:nth-child(2) {
    width: 21.5%;
  }
  .prices__head-cell:nth-child(3) {
    width: 34%;
  }
  .prices__swiper-slide:hover {
    -webkit-transform: translateZ(0) scaleX(0.99);
            transform: translateZ(0) scaleX(0.99);
    box-shadow: none;
  }
  .prices__cell {
    padding-left: 24px;
  }
  .prices__order-btn {
    right: 25px;
  }
  .offer-link {
    width: 319px;
    margin-left: 33px;
  }
  .info {
    height: 85px;
    padding: 32px 34px 25px 32px;
  }
  .own-n-dev {
    flex-basis: calc(30% - 96px);
  }
  .privacy-policy {
    flex-basis: calc(30% - 96px);
  }
  .offer {
    flex-basis: calc(40% - 96px);
  }
}

@media (min-width: 1440px){
  .feedback {
    width: 440px;
    height: 940px;
    padding: 17px 32px 32px 32px;
    border-left: 1px solid #D9FFF5;
  }
  .feedback__title:before {
    width: 3px;
    left: -34px;
    border-radius: 2px;
  }
  .feedback__input {
    width: 376px;
  }
  .feedback__mess {
    width: 376px;
  }
  .feedback__info {
    margin-top: 12px;
    margin-bottom: 18px;
  }
  .feedback__btn {
    right: 32px;
  }
  .feedback__close-btn {
    top: 32px;
    left: -73px;
  }
  .callback {
    width: 440px;
    height: 940px;
    padding: 17px 32px 32px 32px;
    border-left: 1px solid #D9FFF5;
  }
  .callback__title:before {
    width: 3px;
    left: -34px;
    border-radius: 2px;
  }
  .callback__input {
    width: 376px;
  }
  .callback__info {
    margin-top: 12px;
    margin-bottom: 18px;
  }
  .callback__btn {
    right: 32px;
  }
  .callback__close-btn {
    top: 32px;
    left: -73px;
  }
}`, "",{"version":3,"sources":["webpack://./src/style/scss/fonts.scss","webpack://./../CPS%20webpack/src/index.scss","webpack://./src/style/scss/tech-types.scss","webpack://./src/style/scss/var.scss","webpack://./src/style/scss/prices.scss","webpack://./src/style/scss/info.scss","webpack://./src/style/scss/feedback.scss","webpack://./src/style/scss/callback.scss","webpack://./<no source>","webpack://./src/index.scss"],"names":[],"mappings":"AAAA;EACI,uBAAA;EACA,4CAAA;EACA,iPAAA;EAIA,mBAAA;EACA,kBAAA;ACKJ;ADFE;EACE,uBAAA;EACA,4CAAA;EACA,+OAAA;EAIA,gBAAA;EACA,kBAAA;ACCJ;ADEE;EACE,uBAAA;EACA,4CAAA;EACA,6OAAA;EAIA,iBAAA;EACA,kBAAA;ACHJ;ACzBA;EACI,sBAAA;EACA,aAAA;EACA,yBCLM;EDMN,6BAAA;EACA,oBAAA;EACA,yBAAA;AD2BJ;ACzBI;EACI,cAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,0DAAA;EACA,cCfK;EDgBL,eAAA;EACA,qBAAA;EACA,mBAAA;EACA,iBAAA;EACA,sBAAA;EACA,yBAAA;AD2BR;ACxBI;EACI,sBAAA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;EACA,gBAAA;EACA,yBAAA;AD0BR;ACvBI;EACI,WAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,aAAA;EACA,+EAAA;EACA,UAAA;ADyBR;ACrBI;EACI,sBAAA;EACA,qBAAA;EACA,SAAA;EACA,UAAA;EACA,iBAAA;EACA,yBAAA;ADuBR;ACpBI;EACI,sBAAA;EACA,kBAAA;EACA,UAAA;EACA,aAAA;EACA,YAAA;EACA,aAAA;EACA,2BAAA;EACA,aAAA;EACA,kBAAA;EACA,yBAAA;EACA,sBChEG;EDiEH,0DAAA;EACA,2CAAA;EACA,4BAAA;EACA,yBAAA;ADsBR;ACnBI;EACI,mCAAA;UAAA,2BAAA;EACA,yCAAA;ADqBR;ACjBI;EACI,aAAA;EACA,WAAA;EACA,8BAAA;EACA,uBAAA;EACA,cAAA;EACA,cClFI;EDmFJ,qBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;ADmBR;AChBI;EACI,aAAA;ADkBR;AGjHA;EACI,sBAAA;EACA,WAAA;EACA,aAAA;EACA,yBDJM;ECKN,6BAAA;EACA,oBAAA;EACA,yBAAA;EACA,kBAAA;AH8MJ;AG5MI;EACI,cAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,0DAAA;EACA,cDfK;ECgBL,eAAA;EACA,qBAAA;EACA,mBAAA;EACA,iBAAA;EACA,sBAAA;EACA,yBAAA;AH8MR;AG3MI;EACI,sBAAA;EACA,cAAA;EACA,WAAA;EACA,aAAA;EACA,gBAAA;EACA,yBAAA;EACA,oBAAA;AH6MR;AG1MI;EACI,WAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,aAAA;EACA,+EAAA;EACA,UAAA;AH4MR;AGzMI;EACI,sBAAA;EACA,gBAAA;EACA,UAAA;EACA,aAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,cDnDI;ECoDJ,qBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;AH2MR;AGxMI;EACI,aAAA;AH0MR;AGvMI;EACI,sBAAA;EACA,mBAAA;EACA,yBAAA;EACA,iBAAA;EACA,yBAAA;AHyMR;AGtMI;EACI,sBAAA;EACA,kBAAA;EACA,UAAA;EACA,aAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,aAAA;EACA,kBAAA;EACA,yBAAA;EACA,sBDrFG;AF6RX;AGrMI;EACI,mCAAA;UAAA,2BAAA;EACA,yCAAA;AHuMR;AGpMI;EACI,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;AHsMR;AGnMI;EACI,cDvGK;ECwGL,qBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;AHqMR;AGlMI;EACI,cD/GI;ECgHJ,qBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;AHoMR;AGjMI;EACI,sBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,YAAA;EACA,mBAAA;EACA,mBD3HG;EC4HH,YAAA;EACA,iBAAA;EACA,SAAA;EACA,wBAAA;UAAA,gBAAA;EACA,WDtIG;ECuIH,gBAAA;EACA,qBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,uBAAA;EACA,yBAAA;EACA,iEAAA;EAAA,iDAAA;EAAA,wGAAA;EACA,eAAA;EACA,0DAAA;EACA,yCAAA;EACA,4BAAA;AHmMR;AGhMI;EACI,yEAAA;UAAA,iEAAA;AHkMR;;AG9LA;EACI,qBAAA;EACA,sBAAA;EACA,UAAA;EACA,aAAA;EACA,6BAAA;EAAA,qBAAA;EACA,cDhKQ;ECiKR,qBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;EACA,iBAAA;EACA,sBAAA;EACA,yBAAA;AHiMJ;AG/LI;EACI,kCAAA;EAAA,0BAAA;EACA,8BDxKG;AFyWX;AG9LI;EACI,WAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;EACA,0DAAA;EACA,4BAAA;EACA,2BAAA;EACA,uCAAA;EAAA,+BAAA;EAAA,4DAAA;EACA,kBAAA;EACA,YAAA;AHgMR;AG7LI;EACI,6CAAA;UAAA,qCAAA;AH+LR;AIhYA;EACI,sBAAA;EACA,WAAA;EACA,aAAA;EACA,yBFJM;EEKN,6BAAA;EACA,4BAAA;EACA,yBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,8BAAA;EACA,cFXS;EEYT,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;AJqiBJ;AIniBI;EACI,aAAA;EACA,6BAAA;EAAA,qBAAA;EACA,mBAAA;EACA,yBAAA;EACA,cFxBK;EEyBL,qBAAA;AJqiBR;AIniBQ;EACI,kCAAA;EAAA,0BAAA;EACA,8BF7BC;AFkkBb;;AIhiBA;EACI,SAAA;AJmiBJ;;AIhiBA;EACI,SAAA;AJmiBJ;AK3kBA;EACI,sBAAA;EACA,cAAA;ALgnBJ;AK7mBI;EACI,cAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;EACA,kBAAA;EACA,yBAAA;EACA,YAAA;EACA,gDAAA;UAAA,wCAAA;AL+mBR;AK3mBM;EACE,cAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;EACA,kBAAA;EACA,yBAAA;EACA,YAAA;EACA,kDAAA;UAAA,0CAAA;AL6mBR;;AKzmBA;EACI,sBAAA;EACA,kBAAA;EACA,MAAA;EACA,QAAA;EACA,aAAA;EACA,YAAA;EACA,aAAA;EACA,sBHnCO;EGoCP,4BAAA;EACA,oDAAA;EACA,yBAAA;AL4mBJ;AK1mBI;EACI,cAAA;EACA,qBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;EACA,kBAAA;AL4mBR;AK1mBQ;EACI,sBAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,+BAAA;EACA,0BAAA;AL4mBZ;AKxmBI;EACI,sBAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,yBAAA;EACA,mBAAA;EACA,cHpEI;EGqEJ,qBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;EACA,kBAAA;AL0mBR;AKvmBI;EACI,sBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,yBAAA;EACA,cHpFI;EGqFJ,qBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;EACA,kBAAA;EACA,YAAA;ALymBR;AKtmBI;EACI,cHnGK;EGoGL,qBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBAAA;ALwmBR;AKrmBI;EACI,cHvGG;AF8sBX;AKpmBI;EACI,aAAA;EACA,6BAAA;EAAA,qBAAA;EACA,yBAAA;EACA,cH9GG;EG+GH,qBAAA;EACA,eAAA;ALsmBR;AKpmBQ;EACI,kCAAA;EAAA,0BAAA;EACA,8BHpHD;AF0tBX;AKlmBI;EACI,sBAAA;EACA,YAAA;EACA,YAAA;EACA,mBAAA;EACA,mBH7HG;EG8HH,YAAA;EACA,iBAAA;EACA,SAAA;EACA,wBAAA;UAAA,gBAAA;EACA,WHxIG;EGyIH,gBAAA;EACA,qBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,uBAAA;EACA,yBAAA;EACA,oCAAA;EAAA,4BAAA;EAAA,sDAAA;EACA,eAAA;EACA,0DAAA;EACA,0CAAA;EACA,4BAAA;EACA,kBAAA;EACA,WAAA;ALomBR;AKhmBI;EACI,yEAAA;UAAA,iEAAA;ALkmBR;AK/lBI;EACI,kBAAA;EACA,SAAA;EACA,UAAA;ALimBR;;AK1lBA;EACI,SAAA;EACH,mBAAA;EACA,6BAAA;UAAA,qBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,UAAA;EACA,kBAAA;EACA,UAAA;EACA,mBAAA;AL6lBD;AMlxBA;EACI,sBAAA;EACA,kBAAA;EACA,MAAA;EACA,QAAA;EACA,aAAA;EACA,YAAA;EACA,aAAA;EACA,sBJNO;EIOP,4BAAA;EACA,oDAAA;EACA,yBAAA;ANmzBJ;AMjzBI;EACI,cAAA;EACA,qBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;EACA,kBAAA;ANmzBR;AMjzBQ;EACI,sBAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,+BAAA;EACA,0BAAA;ANmzBZ;AM/yBI;EACI,sBAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,yBAAA;EACA,kBAAA;EACA,cJvCI;EIwCJ,qBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;EACA,kBAAA;ANizBR;AM9yBI;EACI,cJrDK;EIsDL,qBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBAAA;ANgzBR;AM7yBI;EACI,cJzDG;AFw2BX;AM5yBI;EACI,aAAA;EACA,6BAAA;EAAA,qBAAA;EACA,yBAAA;EACA,cJhEG;EIiEH,qBAAA;EACA,eAAA;AN8yBR;AM5yBQ;EACI,kCAAA;EAAA,0BAAA;EACA,8BJtED;AFo3BX;AM1yBI;EACI,sBAAA;EACA,YAAA;EACA,YAAA;EACA,mBAAA;EACA,mBJ/EG;EIgFH,YAAA;EACA,iBAAA;EACA,SAAA;EACA,wBAAA;UAAA,gBAAA;EACA,WJ1FG;EI2FH,gBAAA;EACA,qBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,uBAAA;EACA,yBAAA;EACA,oCAAA;EAAA,4BAAA;EAAA,sDAAA;EACA,eAAA;EACA,0DAAA;EACA,0CAAA;EACA,4BAAA;EACA,kBAAA;EACA,WAAA;AN4yBR;AMxyBI;EACI,yEAAA;UAAA,iEAAA;AN0yBR;AMvyBI;EACI,kBAAA;EACA,SAAA;EACA,UAAA;ANyyBR;;AMlyBA;EACI,SAAA;EACH,mBAAA;EACA,6BAAA;UAAA,qBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,UAAA;EACA,kBAAA;EACA,UAAA;EACA,mBAAA;ANqyBD;;AO56BA;ENqGI;IACI,iBAAA;IACA,YAAA;IACA,oBAAA;IACA,iBAAA;EDgBN;ECdM;IACI,YAAA;IACA,kBAAA;EDgBV;ECbM;IACI,aAAA;EDeV;ECbU;IACI,YAAA;EDed;ECXM;IACI,aAAA;EDaV;ECVM;IACI,aAAA;IACA,eAAA;IACA,aAAA;IACA,gBAAA;EDYV;ECTM;IACI,+BAAA;IACA,mBAAA;IACA,kBAAA;IACA,UAAA;EDWV;ECRM;IACI,aAAA;EDUV;ECPM;IACI,cAAA;IACA,+BAAA;IACA,mBAAA;IACA,kBAAA;IACA,UAAA;EDSV;ECNM;IACI,aAAA;IACA,YAAA;IACA,iBAAA;IACA,iBAAA;EDQV;ECLM;IACI,iDAAA;YAAA,yCAAA;EDOV;EGmCE;IACI,aAAA;IACA,oBAAA;EH4LN;EG1LM;IACI,kBAAA;IACA,kBAAA;EH4LV;EGzLM;IACI,cAAA;IACA,aAAA;IACA,cAAA;IACA,iBAAA;EH2LV;EGxLM;IACI,aAAA;EH0LV;EGvLM;IACI,UAAA;IACA,YAAA;IACA,gBAAA;IACA,eAAA;IACA,iBAAA;IACA,oBAAA;EHyLV;EGtLM;IACI,2BAAA;IACA,cDtOC;ICuOD,qBAAA;IACA,eAAA;IACA,kBAAA;IACA,iBAAA;IACA,gBAAA;IACA,YAAA;EHwLV;EGrLM;IACI,gBAAA;IACA,aAAA;IACA,sBAAA;EHuLV;EGpLM;IACI,YAAA;EHsLV;EGnLM;IACI,YAAA;EHqLV;EGlLM;IACI,UAAA;EHoLV;EGjLM;IACI,wBAAA;IACA,YAAA;IACA,cAAA;EHmLV;EGhLM;IACI,YAAA;IACA,YAAA;IACA,kBAAA;IACA,UAAA;IACA,kBAAA;IACA,gBAAA;IACA,yBD/QF;EFicR;EG/KM;IACI,6CAAA;YAAA,qCAAA;IACA,gBAAA;EHiLV;EG9KM;IACI,mBAAA;IACA,UAAA;IACA,kBAAA;IACA,gBAAA;IACA,sBD1RD;EF0cT;EG7KM;IACI,WAAA;IACA,cAAA;IACA,sBAAA;IACA,kBAAA;IACA,6BAAA;IACA,aAAA;IACA,WAAA;IACA,MAAA;IACA,SAAA;IACA,mCAAA;YAAA,2BAAA;EH+KV;EG5KM;IACI,aAAA;EH8KV;EG3KM;IACI,wBAAA;IACA,gBAAA;EH6KV;EG1KM;IACI,wBAAA;IACA,gBAAA;EH4KV;EGzKM;IACI,wBAAA;IACA,gBAAA;EH2KV;EGxKM;IACI,wBAAA;IACA,gBAAA;EH0KV;EGvKM;IACI,aAAA;EHyKV;EGtKM;IACI,oCAAA;YAAA,4BAAA;IACA,yEAAA;YAAA,iEAAA;EHwKV;EGnKE;IACI,YAAA;IACA,iBAAA;EHqKN;EI1cE;IACI,aAAA;IACA,4BAAA;IACA,mBAAA;IACA,uBAAA;EJmiBN;EIhiBE;IACI,+BAAA;IACA,gBAAA;EJkiBN;EI/hBE;IACI,+BAAA;EJiiBN;EI9hBE;IACI,+BAAA;IACA,iBAAA;EJgiBN;AQwMF;;ADtyBA;ENqKI;IACI,iBAAA;IACA,YAAA;EDIN;ECFM;IACI,kBAAA;EDIV;ECDM;IACI,kBAAA;EDGV;ECAM;IACI,4BAAA;IACA,mBAAA;IACA,kBAAA;IACA,UAAA;EDEV;ECCM;IACI,cAAA;IACA,4BAAA;IACA,mBAAA;IACA,kBAAA;IACA,UAAA;EDCV;ECEM;IACI,aAAA;EDAV;ECGM;IACI,cAAA;IACA,4BAAA;IACA,mBAAA;IACA,kBAAA;IACA,UAAA;EDDV;ECIM;IACI,iBAAA;EDFV;EG4IM;IACI,aAAA;IACA,oBAAA;EHmKV;EGjKU;IACI,kBAAA;EHmKd;EGhKU;IACI,YAAA;IACA,cAAA;EHkKd;EG/JU;IACI,UAAA;IACA,aAAA;IACA,iBAAA;EHiKd;EG9JU;IACI,kBAAA;EHgKd;EG7JU;IACI,YAAA;EH+Jd;EG5JU;IACI,YAAA;EH8Jd;EG3JU;IACI,UAAA;EH6Jd;EG1JU;IACI,6CAAA;YAAA,qCAAA;IACA,gBAAA;EH4Jd;EGzJU;IACI,kBAAA;EH2Jd;EGxJU;IACI,WAAA;EH0Jd;EGtJM;IACI,YAAA;IACA,iBAAA;EHwJV;EI/dE;IACI,YAAA;IACA,4BAAA;EJ+hBN;EI5hBE;IACI,4BAAA;EJ8hBN;EI3hBE;IACI,4BAAA;EJ6hBN;EI1hBE;IACI,4BAAA;EJ4hBN;AQuRF;;ADp4BA;EF0LI;IACI,YAAA;IACA,aAAA;IACA,4BAAA;IACA,8BAAA;EL4lBN;EKxlBU;IACI,UAAA;IACA,WAAA;IACA,kBAAA;EL0lBd;EKtlBM;IACI,YAAA;ELwlBV;EKrlBM;IACI,YAAA;ELulBV;EKplBM;IACI,gBAAA;IACA,mBAAA;ELslBV;EKnlBM;IACI,WAAA;ELqlBV;EKllBM;IACI,SAAA;IACA,WAAA;ELolBV;EMpqBE;IACI,YAAA;IACA,aAAA;IACA,4BAAA;IACA,8BAAA;ENoyBN;EMjyBU;IACI,UAAA;IACA,WAAA;IACA,kBAAA;ENmyBd;EM/xBM;IACI,YAAA;ENiyBV;EM9xBM;IACI,gBAAA;IACA,mBAAA;ENgyBV;EM7xBM;IACI,WAAA;EN+xBV;EM5xBM;IACI,SAAA;IACA,WAAA;EN8xBV;AQXF","sourcesContent":["@font-face {\r\n    font-family: 'TT Lakes';\r\n    src: url('../../fonts/TTLakes-Regular.eot');\r\n    src: local('TT Lakes Regular'), local('TTLakes-Regular'),\r\n      url('../../fonts/TTLakes-Regular.eot?#iefix') format('embedded-opentype'),\r\n      url('../../fonts/TTLakes-Regular.woff') format('woff'),\r\n      url('../../fonts/TTLakes-Regular.ttf') format('truetype');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n  }\r\n  \r\n  @font-face {\r\n    font-family: 'TT Lakes';\r\n    src: url('../../fonts/TTLakes-Medium.eot');\r\n    src: local('TT Lakes Medium'), local('TTLakes-Medium'),\r\n      url('../../fonts/TTLakes-Medium.eot?#iefix') format('embedded-opentype'),\r\n      url('../../fonts/TTLakes-Medium.woff') format('woff'),\r\n      url('../../fonts/TTLakes-Medium.ttf') format('truetype');\r\n    font-weight: 500;\r\n    font-style: normal;\r\n  }\r\n  \r\n  @font-face {\r\n    font-family: 'TT Lakes';\r\n    src: url('../../fonts/TTLakes-Bold.eot');\r\n    src: local('TT Lakes Bold'), local('TTLakes-Bold'),\r\n      url('../../fonts/TTLakes-Bold.eot?#iefix') format('embedded-opentype'),\r\n      url('../../fonts/TTLakes-Bold.woff') format('woff'),\r\n      url('../../fonts/TTLakes-Bold.ttf') format('truetype');\r\n    font-weight: bold;\r\n    font-style: normal;\r\n  }\r\n  ","@import '~normalize.css';\n@import 'https://unpkg.com/swiper/swiper-bundle.min.css';\n@import 'style/css/animations.css';\n@import 'style/css/style.css';\n@import 'style/css/menu.css';\n@import 'style/css/services.css';\n@import 'style/css/brands.css';\n@font-face {\n  font-family: \"TT Lakes\";\n  src: url(\"../../fonts/TTLakes-Regular.eot\");\n  src: local(\"TT Lakes Regular\"), local(\"TTLakes-Regular\"), url(\"../../fonts/TTLakes-Regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../fonts/TTLakes-Regular.woff\") format(\"woff\"), url(\"../../fonts/TTLakes-Regular.ttf\") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"TT Lakes\";\n  src: url(\"../../fonts/TTLakes-Medium.eot\");\n  src: local(\"TT Lakes Medium\"), local(\"TTLakes-Medium\"), url(\"../../fonts/TTLakes-Medium.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../fonts/TTLakes-Medium.woff\") format(\"woff\"), url(\"../../fonts/TTLakes-Medium.ttf\") format(\"truetype\");\n  font-weight: 500;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"TT Lakes\";\n  src: url(\"../../fonts/TTLakes-Bold.eot\");\n  src: local(\"TT Lakes Bold\"), local(\"TTLakes-Bold\"), url(\"../../fonts/TTLakes-Bold.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../fonts/TTLakes-Bold.woff\") format(\"woff\"), url(\"../../fonts/TTLakes-Bold.ttf\") format(\"truetype\");\n  font-weight: bold;\n  font-style: normal;\n}\n.tech-types {\n  box-sizing: border-box;\n  height: 312px;\n  background-color: #F8F8F8;\n  border-top: 1px solid #D9FFF5;\n  padding-bottom: 38px;\n  transition: all 0.2s ease;\n}\n.tech-types__title {\n  display: block;\n  width: 100%;\n  height: 80px;\n  padding: 16px;\n  background: linear-gradient(270deg, #F8F8F8 0%, #FFF 100%);\n  color: #7E7E82;\n  font-size: 16px;\n  font-family: TT Lakes;\n  font-weight: normal;\n  line-height: 24px;\n  letter-spacing: -0.2px;\n  text-transform: uppercase;\n}\n.tech-types__swiper-container {\n  box-sizing: border-box;\n  position: relative;\n  width: 100%;\n  height: 211px;\n  overflow: hidden;\n  transition: all 0.2s ease;\n}\n.tech-types__swiper-container:after {\n  content: \"\";\n  position: absolute;\n  top: 11px;\n  right: 0;\n  width: 24px;\n  height: 166px;\n  background: linear-gradient(270deg, #F8F8F8 0.04%, rgba(248, 248, 248, 0) 100%);\n  z-index: 1;\n}\n.tech-types__swiper-wrapper {\n  box-sizing: border-box;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  padding-top: 16px;\n  transition: all 0.2s ease;\n}\n.tech-types__swiper-slide {\n  box-sizing: border-box;\n  position: relative;\n  z-index: 1;\n  height: 160px;\n  width: 240px;\n  display: flex;\n  justify-content: flex-start;\n  padding: 16px;\n  border-radius: 6px;\n  border: 1px solid #EAEAEA;\n  background-color: #FFF;\n  background-image: url(\"../../img/go.svg\");\n  background-position: bottom 14px right 16px;\n  background-repeat: no-repeat;\n  transition: all 0.3s ease;\n}\n.tech-types__swiper-slide:hover {\n  transform: translateZ(10px);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n}\n.tech-types__link-btn {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: flex-start;\n  flex-shrink: 0;\n  color: #1B1C21;\n  font-family: TT Lakes;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: -0.2px;\n}\n.tech-types__more-btn {\n  display: none;\n}\n\n@media (min-width: 768px) {\n  .tech-types {\n    min-height: 322px;\n    height: auto;\n    padding-bottom: 34px;\n    max-width: 1440px;\n  }\n  .tech-types__title {\n    height: 56px;\n    padding: 16px 24px;\n  }\n  .tech-types__swiper-container {\n    height: 208px;\n  }\n  .tech-types__swiper-container--expanded {\n    height: auto;\n  }\n  .tech-types__swiper-container:after {\n    display: none;\n  }\n  .tech-types__swiper-wrapper {\n    display: flex;\n    flex-wrap: wrap;\n    padding: 24px;\n    padding-right: 0;\n  }\n  .tech-types__swiper-slide {\n    flex-basis: calc(33.33% - 24px);\n    margin-bottom: 16px;\n    margin-right: 24px;\n    z-index: 1;\n  }\n  .tech-types__swiper-slide:nth-child(n+4) {\n    display: none;\n  }\n  .tech-types__swiper-slide--visible:nth-child(n+4) {\n    display: block;\n    flex-basis: calc(33.33% - 24px);\n    margin-bottom: 16px;\n    margin-right: 24px;\n    z-index: 1;\n  }\n  .tech-types__more-btn {\n    display: flex;\n    width: 143px;\n    margin-left: 24px;\n    padding-left: 9px;\n  }\n  .tech-types__more-btn--active::before {\n    transform: rotate(180deg) translateY(50%);\n  }\n}\n@media (min-width: 1426px) {\n  .tech-types {\n    min-height: 340px;\n    height: auto;\n  }\n  .tech-types__title {\n    padding: 16px 32px;\n  }\n  .tech-types__swiper-wrapper {\n    padding-left: 34px;\n  }\n  .tech-types__swiper-slide {\n    flex-basis: calc(25% - 32px);\n    margin-bottom: 16px;\n    margin-right: 32px;\n    z-index: 1;\n  }\n  .tech-types__swiper-slide:nth-child(n+4) {\n    display: block;\n    flex-basis: calc(25% - 32px);\n    margin-bottom: 16px;\n    margin-right: 32px;\n    z-index: 1;\n  }\n  .tech-types__swiper-slide:nth-child(n+5) {\n    display: none;\n  }\n  .tech-types__swiper-slide--visible:nth-child(n+5) {\n    display: block;\n    flex-basis: calc(25% - 32px);\n    margin-bottom: 16px;\n    margin-right: 32px;\n    z-index: 1;\n  }\n  .tech-types__more-btn {\n    margin-left: 32px;\n  }\n}\n.prices {\n  box-sizing: border-box;\n  width: 100%;\n  height: 547px;\n  background-color: #F8F8F8;\n  border-top: 1px solid #D9FFF5;\n  padding-bottom: 40px;\n  transition: all 0.2s ease;\n  position: relative;\n}\n.prices__title {\n  display: block;\n  width: 100%;\n  height: 56px;\n  padding: 16px;\n  background: linear-gradient(270deg, #F8F8F8 0%, #FFF 100%);\n  color: #7E7E82;\n  font-size: 16px;\n  font-family: TT Lakes;\n  font-weight: normal;\n  line-height: 24px;\n  letter-spacing: -0.2px;\n  text-transform: uppercase;\n}\n.prices__swiper-container {\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  height: 228px;\n  overflow: hidden;\n  transition: all 0.2s ease;\n  margin-bottom: 169px;\n}\n.prices__swiper-container::after {\n  content: \"\";\n  position: absolute;\n  top: 72px;\n  right: 0;\n  width: 24px;\n  height: 200px;\n  background: linear-gradient(270deg, #F8F8F8 0.04%, rgba(248, 248, 248, 0) 100%);\n  z-index: 1;\n}\n.prices__explanation {\n  box-sizing: border-box;\n  text-align: left;\n  width: 90%;\n  height: 137px;\n  position: absolute;\n  bottom: 94px;\n  padding-left: 16px;\n  color: #1B1C21;\n  font-family: TT Lakes;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 20px;\n  letter-spacing: 0.1px;\n}\n.prices__table-header {\n  display: none;\n}\n.prices__swiper-wrapper {\n  box-sizing: border-box;\n  border-spacing: 0px;\n  border-collapse: collapse;\n  padding-top: 16px;\n  transition: all 0.2s ease;\n}\n.prices__swiper-slide {\n  box-sizing: border-box;\n  position: relative;\n  z-index: 1;\n  height: 200px;\n  width: 260px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 16px;\n  border-radius: 6px;\n  transition: all 0.3s ease;\n  background-color: #FFF;\n}\n.prices__swiper-slide:hover {\n  transform: translateZ(10px);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n}\n.prices__cell {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin-bottom: 13px;\n}\n.prices__cell-header {\n  color: #7E7E82;\n  font-family: TT Lakes;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 16px;\n  margin-bottom: 4px;\n}\n.prices__cell-content {\n  color: #1B1C21;\n  font-family: TT Lakes;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 18px;\n  letter-spacing: 0.1px;\n}\n.prices__order-btn {\n  box-sizing: border-box;\n  position: absolute;\n  right: 16px;\n  bottom: 18px;\n  width: 119px;\n  height: 32px;\n  border-radius: 16px;\n  background: #FF3E79;\n  border: none;\n  padding: 4px 12px;\n  margin: 0;\n  appearance: none;\n  color: #FFF;\n  text-align: left;\n  font-family: TT Lakes;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 24px;\n  letter-spacing: -0.15px;\n  text-transform: uppercase;\n  transition: filter 0.3s ease, transform 0.3s ease;\n  cursor: pointer;\n  background-image: url(\"../../img/goside.svg\");\n  background-position: bottom 4px right 8px;\n  background-repeat: no-repeat;\n}\n.prices__order-btn:hover {\n  filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.5)) saturate(1.8);\n}\n\n.offer-link {\n  display: inline-block;\n  box-sizing: border-box;\n  width: 60%;\n  outline: none;\n  text-decoration: none;\n  color: #1B1C21;\n  font-family: TT Lakes;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: -0.2px;\n  margin-left: 16px;\n  vertical-align: center;\n  transition: all 0.4s ease;\n}\n.offer-link:hover {\n  text-decoration: underline;\n  text-decoration-color: #FF3E79;\n}\n.offer-link__text::after {\n  content: \"\";\n  display: inline-block;\n  width: 24px;\n  height: 16px;\n  background-image: url(\"../../img/more.svg\");\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: transform 0.3s ease;\n  position: relative;\n  bottom: -3px;\n}\n.offer-link__text:hover:after {\n  transform: scale(1.1) translateX(50%);\n}\n\n@media (min-width: 768px) {\n  .prices {\n    height: 614px;\n    padding-bottom: 47px;\n  }\n  .prices__title {\n    padding: 16px 24px;\n    margin-bottom: 3px;\n  }\n  .prices__swiper-container {\n    display: table;\n    width: 93.75%;\n    margin: 0 24px;\n    border-spacing: 0;\n  }\n  .prices__swiper-container::after {\n    display: none;\n  }\n  .prices__explanation {\n    width: 60%;\n    height: 98px;\n    position: static;\n    padding-left: 0;\n    padding-top: 24px;\n    caption-side: bottom;\n  }\n  .prices__table-header {\n    display: table-header-group;\n    color: #7E7E82;\n    font-family: TT Lakes;\n    font-size: 14px;\n    font-style: normal;\n    line-height: 16px;\n    text-align: left;\n    height: 59px;\n  }\n  .prices__head-cell {\n    font-weight: 500;\n    padding: 16px;\n    vertical-align: bottom;\n  }\n  .prices__head-cell:nth-child(1) {\n    width: 51.5%;\n  }\n  .prices__head-cell:nth-child(2) {\n    width: 13.5%;\n  }\n  .prices__head-cell:nth-child(3) {\n    width: 35%;\n  }\n  .prices__swiper-wrapper {\n    display: table-row-group;\n    width: 720px;\n    margin: 0 24px;\n  }\n  .prices__swiper-slide {\n    height: 65px;\n    width: 720px;\n    display: table-row;\n    padding: 0;\n    border-radius: 6px;\n    overflow: hidden;\n    background-color: #F8F8F8;\n  }\n  .prices__swiper-slide:hover {\n    transform: translateZ(0) scaleX(0.99);\n    box-shadow: none;\n  }\n  .prices__cell {\n    display: table-cell;\n    padding: 0;\n    padding-left: 16px;\n    overflow: hidden;\n    background-color: #FFF;\n  }\n  .prices__cell:first-child::before {\n    content: \"\";\n    display: block;\n    box-sizing: border-box;\n    position: absolute;\n    border-top: 1px solid #EAEAEA;\n    width: 95.56%;\n    height: 1px;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n  .prices__cell--ltc:first-child::before {\n    display: none;\n  }\n  .prices__cell--ltc {\n    border-radius: 6px 0 0 0;\n    overflow: hidden;\n  }\n  .prices__cell--rtc {\n    border-radius: 0 6px 0 0;\n    overflow: hidden;\n  }\n  .prices__cell--lbc {\n    border-radius: 0 0 0 6px;\n    overflow: hidden;\n  }\n  .prices__cell--rbc {\n    border-radius: 0 0 6px 0;\n    overflow: hidden;\n  }\n  .prices__cell-header {\n    display: none;\n  }\n  .prices__order-btn:hover {\n    transform: translateZ(-10px);\n    filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.5)) saturate(1.8);\n  }\n  .offer-link {\n    width: 319px;\n    margin-left: 24px;\n  }\n}\n@media (min-width: 1426px) {\n  .prices {\n    height: 625px;\n    padding-bottom: 50px;\n  }\n  .prices__title {\n    padding: 16px 33px;\n  }\n  .prices__swiper-container {\n    width: 94.3%;\n    margin: 0 32px;\n  }\n  .prices__explanation {\n    width: 40%;\n    height: 107px;\n    padding-top: 30px;\n  }\n  .prices__head-cell {\n    padding: 16px 24px;\n  }\n  .prices__head-cell:nth-child(1) {\n    width: 44.5%;\n  }\n  .prices__head-cell:nth-child(2) {\n    width: 21.5%;\n  }\n  .prices__head-cell:nth-child(3) {\n    width: 34%;\n  }\n  .prices__swiper-slide:hover {\n    transform: translateZ(0) scaleX(0.99);\n    box-shadow: none;\n  }\n  .prices__cell {\n    padding-left: 24px;\n  }\n  .prices__order-btn {\n    right: 25px;\n  }\n  .offer-link {\n    width: 319px;\n    margin-left: 33px;\n  }\n}\n.info {\n  box-sizing: border-box;\n  width: 100%;\n  height: 147px;\n  background-color: #F8F8F8;\n  border-top: 1px solid #D9FFF5;\n  padding: 16px 16px 18px 16px;\n  transition: all 0.2s ease;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  color: #7E7E82;\n  text-align: center;\n  font-family: TT Lakes;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 16px;\n}\n.info__link {\n  outline: none;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: all 0.3s ease;\n  color: #7E7E82;\n  font-family: TT Lakes;\n}\n.info__link:hover {\n  text-decoration: underline;\n  text-decoration-color: #7E7E82;\n}\n\n.own-n-dev {\n  margin: 0;\n}\n\n.offer {\n  margin: 0;\n}\n\n@media (min-width: 768px) {\n  .info {\n    height: 105px;\n    padding: 32px 24px 25px 24px;\n    flex-direction: row;\n    align-items: flex-start;\n  }\n  .own-n-dev {\n    flex-basis: calc(33.33% - 22px);\n    text-align: left;\n  }\n  .privacy-policy {\n    flex-basis: calc(33.33% - 22px);\n  }\n  .offer {\n    flex-basis: calc(33.33% - 22px);\n    text-align: right;\n  }\n}\n@media (min-width: 1426px) {\n  .info {\n    height: 85px;\n    padding: 32px 34px 25px 32px;\n  }\n  .own-n-dev {\n    flex-basis: calc(30% - 96px);\n  }\n  .privacy-policy {\n    flex-basis: calc(30% - 96px);\n  }\n  .offer {\n    flex-basis: calc(40% - 96px);\n  }\n}\n.close-btn {\n  box-sizing: border-box;\n  display: block;\n}\n.close-btn__line:nth-child(1) {\n  display: block;\n  box-sizing: border-box;\n  width: 24px;\n  height: 2px;\n  border-radius: 1px;\n  background-color: #FFFFFF;\n  margin: auto;\n  transform: rotate(45deg) translateY(1px);\n}\n.close-btn__line:nth-child(2) {\n  display: block;\n  box-sizing: border-box;\n  width: 24px;\n  height: 2px;\n  border-radius: 1px;\n  background-color: #FFFFFF;\n  margin: auto;\n  transform: rotate(-45deg) translateY(-1px);\n}\n\n.feedback {\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 1000;\n  width: 320px;\n  height: 676px;\n  background-color: #FFF;\n  padding: 80px 16px 16px 16px;\n  box-shadow: -16px 0px 52px 0px rgba(14, 24, 80, 0.2);\n  transition: all 0.1s ease;\n}\n.feedback__title {\n  color: #1B1C21;\n  font-family: TT Lakes;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 32px;\n  letter-spacing: -0.6px;\n  position: relative;\n}\n.feedback__title:before {\n  box-sizing: border-box;\n  position: absolute;\n  content: \"\";\n  left: -16px;\n  bottom: 0;\n  width: 4px;\n  height: 40px;\n  border-right: 4px solid #41F6D7;\n  border-radius: 0 4px 4px 0;\n}\n.feedback__input {\n  box-sizing: border-box;\n  width: 288px;\n  height: 48px;\n  border-radius: 8px;\n  border: 1px solid #EAEAEA;\n  margin-bottom: 16px;\n  color: #B5B6BC;\n  font-family: TT Lakes;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: -0.2px;\n  padding: 12px 16px;\n}\n.feedback__mess {\n  box-sizing: border-box;\n  width: 288px;\n  height: 118px;\n  border-radius: 8px;\n  border: 1px solid #EAEAEA;\n  color: #B5B6BC;\n  font-family: TT Lakes;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: -0.2px;\n  padding: 12px 16px;\n  resize: none;\n}\n.feedback__info {\n  color: #7E7E82;\n  font-family: TT Lakes;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 16px;\n  margin-top: 12px;\n  margin-bottom: 18px;\n}\n.feedback__imp {\n  color: #FF3E79;\n}\n.feedback__link {\n  outline: none;\n  text-decoration: none;\n  transition: all 0.3s ease;\n  color: #FF3E79;\n  font-family: TT Lakes;\n  display: inline;\n}\n.feedback__link:hover {\n  text-decoration: underline;\n  text-decoration-color: #FF3E79;\n}\n.feedback__btn {\n  box-sizing: border-box;\n  width: 136px;\n  height: 32px;\n  border-radius: 16px;\n  background: #FF3E79;\n  border: none;\n  padding: 4px 19px;\n  margin: 0;\n  appearance: none;\n  color: #FFF;\n  text-align: left;\n  font-family: TT Lakes;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 24px;\n  letter-spacing: -0.15px;\n  text-transform: uppercase;\n  transition: filter 0.3s ease;\n  cursor: pointer;\n  background-image: url(\"../../img/goside.svg\");\n  background-position: bottom 4px right 11px;\n  background-repeat: no-repeat;\n  position: absolute;\n  right: 16px;\n}\n.feedback__btn:hover {\n  filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.5)) saturate(1.8);\n}\n.feedback__close-btn {\n  position: absolute;\n  top: 24px;\n  left: 16px;\n}\n\n.feedback--hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap;\n}\n\n@media (min-width: 1440px) {\n  .feedback {\n    width: 440px;\n    height: 940px;\n    padding: 17px 32px 32px 32px;\n    border-left: 1px solid #D9FFF5;\n  }\n  .feedback__title:before {\n    width: 3px;\n    left: -34px;\n    border-radius: 2px;\n  }\n  .feedback__input {\n    width: 376px;\n  }\n  .feedback__mess {\n    width: 376px;\n  }\n  .feedback__info {\n    margin-top: 12px;\n    margin-bottom: 18px;\n  }\n  .feedback__btn {\n    right: 32px;\n  }\n  .feedback__close-btn {\n    top: 32px;\n    left: -73px;\n  }\n}\n.callback {\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 1000;\n  width: 320px;\n  height: 676px;\n  background-color: #FFF;\n  padding: 80px 16px 16px 16px;\n  box-shadow: -16px 0px 52px 0px rgba(14, 24, 80, 0.2);\n  transition: all 0.1s ease;\n}\n.callback__title {\n  color: #1B1C21;\n  font-family: TT Lakes;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 32px;\n  letter-spacing: -0.6px;\n  position: relative;\n}\n.callback__title:before {\n  box-sizing: border-box;\n  position: absolute;\n  content: \"\";\n  left: -16px;\n  bottom: 0;\n  width: 4px;\n  height: 40px;\n  border-right: 4px solid #41F6D7;\n  border-radius: 0 4px 4px 0;\n}\n.callback__input {\n  box-sizing: border-box;\n  width: 288px;\n  height: 48px;\n  border-radius: 8px;\n  border: 1px solid #EAEAEA;\n  margin-bottom: 4px;\n  color: #B5B6BC;\n  font-family: TT Lakes;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: -0.2px;\n  padding: 12px 16px;\n}\n.callback__info {\n  color: #7E7E82;\n  font-family: TT Lakes;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 16px;\n  margin-top: 12px;\n  margin-bottom: 18px;\n}\n.callback__imp {\n  color: #FF3E79;\n}\n.callback__link {\n  outline: none;\n  text-decoration: none;\n  transition: all 0.3s ease;\n  color: #FF3E79;\n  font-family: TT Lakes;\n  display: inline;\n}\n.callback__link:hover {\n  text-decoration: underline;\n  text-decoration-color: #FF3E79;\n}\n.callback__btn {\n  box-sizing: border-box;\n  width: 136px;\n  height: 32px;\n  border-radius: 16px;\n  background: #FF3E79;\n  border: none;\n  padding: 4px 19px;\n  margin: 0;\n  appearance: none;\n  color: #FFF;\n  text-align: left;\n  font-family: TT Lakes;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 24px;\n  letter-spacing: -0.15px;\n  text-transform: uppercase;\n  transition: filter 0.3s ease;\n  cursor: pointer;\n  background-image: url(\"../../img/goside.svg\");\n  background-position: bottom 4px right 11px;\n  background-repeat: no-repeat;\n  position: absolute;\n  right: 16px;\n}\n.callback__btn:hover {\n  filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.5)) saturate(1.8);\n}\n.callback__close-btn {\n  position: absolute;\n  top: 24px;\n  left: 16px;\n}\n\n.callback--hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap;\n}\n\n@media (min-width: 1440px) {\n  .callback {\n    width: 440px;\n    height: 940px;\n    padding: 17px 32px 32px 32px;\n    border-left: 1px solid #D9FFF5;\n  }\n  .callback__title:before {\n    width: 3px;\n    left: -34px;\n    border-radius: 2px;\n  }\n  .callback__input {\n    width: 376px;\n  }\n  .callback__info {\n    margin-top: 12px;\n    margin-bottom: 18px;\n  }\n  .callback__btn {\n    right: 32px;\n  }\n  .callback__close-btn {\n    top: 32px;\n    left: -73px;\n  }\n}","\r\n\r\n.tech-types {\r\n    box-sizing: border-box;\r\n    height: 312px;\r\n    background-color: $sect-bg;\r\n    border-top: 1px solid $decor-col1;\r\n    padding-bottom: 38px;\r\n    transition: all 0.2s ease;\r\n\r\n    &__title {\r\n        display: block;\r\n        width: 100%;\r\n        height: 80px;\r\n        padding: 16px;\r\n        background: linear-gradient(270deg, #F8F8F8 0%, #FFF 100%);\r\n        color: $sect-title;\r\n        font-size: 16px;\r\n        font-family: TT Lakes;\r\n        font-weight: normal;\r\n        line-height: 24px;\r\n        letter-spacing: -0.2px;\r\n        text-transform: uppercase\r\n    }\r\n\r\n    &__swiper-container {\r\n        box-sizing: border-box;\r\n        position: relative;\r\n        width: 100%;\r\n        height: 211px;\r\n        overflow: hidden;\r\n        transition: all 0.2s ease;\r\n    }    \r\n\r\n    &__swiper-container:after {\r\n        content: '';\r\n        position: absolute;\r\n        top: 11px;\r\n        right: 0;\r\n        width: 24px;\r\n        height: 166px;\r\n        background: linear-gradient(270deg, #F8F8F8 0.04%, rgba(248, 248, 248, 0.00) 100%);\r\n        z-index: 1;\r\n    }\r\n    \r\n\r\n    &__swiper-wrapper {\r\n        box-sizing: border-box;\r\n        list-style-type: none;\r\n        margin: 0;\r\n        padding: 0;\r\n        padding-top: 16px;\r\n        transition: all 0.2s ease;\r\n    }\r\n\r\n    &__swiper-slide {\r\n        box-sizing: border-box;\r\n        position: relative;\r\n        z-index: 1;\r\n        height: 160px;\r\n        width: 240px;\r\n        display: flex;\r\n        justify-content:flex-start;\r\n        padding: 16px;\r\n        border-radius: 6px;\r\n        border: 1px solid $decor-col2;\r\n        background-color: $slide-bg;\r\n        background-image: url(\"../../img/go.svg\");\r\n        background-position: bottom 14px right 16px;;\r\n        background-repeat: no-repeat;\r\n        transition: all 0.3s ease;\r\n    }\r\n\r\n    &__swiper-slide:hover {\r\n        transform: translateZ(10px);\r\n        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\r\n    }\r\n    \r\n\r\n    &__link-btn {\r\n        display: flex;\r\n        width: 100%;\r\n        justify-content: space-between;\r\n        align-items: flex-start;\r\n        flex-shrink: 0;\r\n        color: $slide-txt;\r\n        font-family: TT Lakes;\r\n        font-size: 16px;\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        line-height: 24px;\r\n        letter-spacing: -0.2px;\r\n    }\r\n\r\n    &__more-btn {\r\n        display: none;\r\n    }\r\n}\r\n        \r\n@media (min-width: 768px) {\r\n\r\n    .tech-types {\r\n        min-height: 322px;\r\n        height: auto;\r\n        padding-bottom: 34px;\r\n        max-width: 1440px;\r\n\r\n        &__title {\r\n            height: 56px;\r\n            padding: 16px 24px;\r\n        }\r\n\r\n        &__swiper-container {\r\n            height: 208px;\r\n            \r\n            &--expanded {\r\n                height: auto;\r\n            }   \r\n        }            \r\n\r\n        &__swiper-container:after {\r\n            display: none;\r\n        }\r\n\r\n        &__swiper-wrapper {\r\n            display: flex;\r\n            flex-wrap: wrap;\r\n            padding: 24px;\r\n            padding-right: 0;\r\n        }\r\n\r\n        &__swiper-slide {\r\n            flex-basis: calc(33.33% - 24px);\r\n            margin-bottom: 16px;\r\n            margin-right: 24px;\r\n            z-index: 1;\r\n        }            \r\n\r\n        &__swiper-slide:nth-child(n+4) {\r\n            display: none;\r\n        }\r\n\r\n        &__swiper-slide--visible:nth-child(n+4) {\r\n            display: block;\r\n            flex-basis: calc(33.33% - 24px);\r\n            margin-bottom: 16px;\r\n            margin-right: 24px;\r\n            z-index: 1;\r\n        }\r\n\r\n        &__more-btn {\r\n            display: flex;\r\n            width: 143px;\r\n            margin-left: 24px;\r\n            padding-left: 9px;\r\n        }\r\n\r\n        &__more-btn--active::before {\r\n            transform: rotate(180deg) translateY(50%);\r\n        }\r\n    }\r\n}\r\n\r\n@media (min-width: 1426px) {\r\n\r\n    .tech-types {\r\n        min-height: 340px;\r\n        height: auto;\r\n\r\n        &__title {\r\n            padding: 16px 32px;    \r\n        }\r\n\r\n        &__swiper-wrapper {\r\n            padding-left: 34px;\r\n        }\r\n\r\n        &__swiper-slide {\r\n            flex-basis: calc(25% - 32px);\r\n            margin-bottom: 16px;\r\n            margin-right: 32px;\r\n            z-index: 1;\r\n        }\r\n\r\n        &__swiper-slide:nth-child(n+4) {\r\n            display: block;\r\n            flex-basis: calc(25% - 32px);\r\n            margin-bottom: 16px;\r\n            margin-right: 32px;\r\n            z-index: 1;\r\n        }\r\n\r\n        &__swiper-slide:nth-child(n+5) {\r\n            display: none;\r\n        }\r\n\r\n        &__swiper-slide--visible:nth-child(n+5) {\r\n            display: block;\r\n            flex-basis: calc(25% - 32px);\r\n            margin-bottom: 16px;\r\n            margin-right: 32px;\r\n            z-index: 1;\r\n        }\r\n\r\n        &__more-btn {\r\n            margin-left: 32px;\r\n        }\r\n\r\n    }\r\n}\r\n","$sect-bg: #F8F8F8;\r\n$sect-title: #7E7E82;\r\n$slide-bg: #FFF;\r\n$slide-txt: #1B1C21;\r\n$input-txt: #B5B6BC;\r\n$decor-col0: #41F6D7;\r\n$decor-col1: #D9FFF5;\r\n$decor-col2: #EAEAEA;\r\n$btns-col: #FF3E79;",".prices {\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    height: 547px;\r\n    background-color: $sect-bg;\r\n    border-top: 1px solid $decor-col1;\r\n    padding-bottom: 40px;\r\n    transition: all 0.2s ease;\r\n    position: relative;\r\n\r\n    &__title {\r\n        display: block;\r\n        width: 100%;\r\n        height: 56px;\r\n        padding: 16px;\r\n        background: linear-gradient(270deg, #F8F8F8 0%, #FFF 100%);\r\n        color: $sect-title;\r\n        font-size: 16px;\r\n        font-family: TT Lakes;\r\n        font-weight: normal;\r\n        line-height: 24px;\r\n        letter-spacing: -0.2px;\r\n        text-transform: uppercase\r\n    }\r\n\r\n    &__swiper-container {\r\n        box-sizing: border-box;\r\n        display: block;\r\n        width: 100%;\r\n        height: 228px;\r\n        overflow: hidden;\r\n        transition: all 0.2s ease;\r\n        margin-bottom: 169px;\r\n    }\r\n\r\n    &__swiper-container::after {\r\n        content: '';\r\n        position: absolute;\r\n        top: 72px;\r\n        right: 0;\r\n        width: 24px;\r\n        height: 200px;\r\n        background: linear-gradient(270deg, #F8F8F8 0.04%, rgba(248, 248, 248, 0.00) 100%);\r\n        z-index: 1;\r\n    }\r\n    \r\n    &__explanation {\r\n        box-sizing: border-box;\r\n        text-align: left;\r\n        width: 90%;\r\n        height: 137px;\r\n        position: absolute;\r\n        bottom: 94px;\r\n        padding-left: 16px;\r\n        color: $slide-txt;\r\n        font-family: TT Lakes;\r\n        font-size: 14px;\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        line-height: 20px;\r\n        letter-spacing: 0.1px;\r\n    }\r\n\r\n    &__table-header {\r\n        display: none;\r\n    }\r\n\r\n    &__swiper-wrapper {\r\n        box-sizing: border-box;\r\n        border-spacing: 0px;\r\n        border-collapse: collapse;\r\n        padding-top: 16px;\r\n        transition: all 0.2s ease;\r\n    }\r\n\r\n    &__swiper-slide {\r\n        box-sizing: border-box;\r\n        position: relative;\r\n        z-index: 1;\r\n        height: 200px;\r\n        width: 260px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content:flex-start;\r\n        padding: 16px;\r\n        border-radius: 6px;\r\n        transition: all 0.3s ease;        \r\n        background-color: $slide-bg;\r\n    }\r\n\r\n    &__swiper-slide:hover {\r\n        transform: translateZ(10px);\r\n        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\r\n    }\r\n\r\n    &__cell {\r\n        box-sizing: border-box;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content:flex-start;\r\n        margin-bottom: 13px;        \r\n    }\r\n\r\n    &__cell-header {\r\n        color: $sect-title;\r\n        font-family: TT Lakes;\r\n        font-size: 14px;\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        line-height: 16px;\r\n        margin-bottom: 4px;\r\n    }\r\n\r\n    &__cell-content {\r\n        color: $slide-txt;\r\n        font-family: TT Lakes;\r\n        font-size: 14px;\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        line-height: 18px;\r\n        letter-spacing: 0.1px;\r\n    }\r\n\r\n    &__order-btn {\r\n        box-sizing: border-box;\r\n        position: absolute;\r\n        right: 16px;\r\n        bottom: 18px;\r\n        width: 119px;\r\n        height: 32px;\r\n        border-radius: 16px;\r\n        background: $btns-col;\r\n        border: none;\r\n        padding: 4px 12px;\r\n        margin: 0;\r\n        appearance: none;\r\n        color: $slide-bg;\r\n        text-align: left;\r\n        font-family: TT Lakes;\r\n        font-size: 12px;\r\n        font-style: normal;\r\n        font-weight: 700;\r\n        line-height: 24px;\r\n        letter-spacing: -0.15px;\r\n        text-transform: uppercase;\r\n        transition: filter 0.3s ease, transform 0.3s ease;\r\n        cursor: pointer;\r\n        background-image: url(\"../../img/goside.svg\");\r\n        background-position: bottom 4px right 8px;;\r\n        background-repeat: no-repeat; \r\n    }\r\n\r\n    &__order-btn:hover {\r\n        filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.5)) saturate(1.8);\r\n    }\r\n}\r\n\r\n.offer-link {\r\n    display: inline-block;\r\n    box-sizing:border-box;\r\n    width: 60%;\r\n    outline: none;\r\n    text-decoration: none;\r\n    color: $slide-txt;\r\n    font-family: TT Lakes;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px;\r\n    letter-spacing: -0.2px;\r\n    margin-left: 16px;\r\n    vertical-align: center;\r\n    transition: all 0.4s ease;    \r\n\r\n    &:hover{\r\n        text-decoration: underline;\r\n        text-decoration-color: $btns-col;\r\n    }    \r\n\r\n    &__text::after {\r\n        content: '';\r\n        display: inline-block;\r\n        width: 24px; \r\n        height: 16px;\r\n        background-image: url('../../img/more.svg'); \r\n        background-repeat: no-repeat;\r\n        background-position: center;\r\n        transition: transform 0.3s ease;\r\n        position: relative;\r\n        bottom: -3px;\r\n    }\r\n\r\n    &__text:hover:after{\r\n        transform: scale(1.1) translateX(50%);\r\n    }    \r\n\r\n}\r\n\r\n@media (min-width: 768px) {\r\n\r\n    .prices {\r\n        height: 614px;\r\n        padding-bottom: 47px;\r\n    \r\n        &__title {\r\n            padding: 16px 24px;\r\n            margin-bottom: 3px;\r\n        }\r\n    \r\n        &__swiper-container {\r\n            display: table;\r\n            width: 93.75%;\r\n            margin: 0 24px;\r\n            border-spacing: 0;\r\n        }\r\n    \r\n        &__swiper-container::after {\r\n            display: none;            \r\n        }\r\n        \r\n        &__explanation {\r\n            width: 60%;\r\n            height: 98px;\r\n            position: static;\r\n            padding-left: 0;\r\n            padding-top: 24px;\r\n            caption-side: bottom;\r\n        }\r\n    \r\n        &__table-header {\r\n            display: table-header-group;\r\n            color: $sect-title;\r\n            font-family: TT Lakes;\r\n            font-size: 14px;\r\n            font-style: normal;\r\n            line-height: 16px;\r\n            text-align: left;\r\n            height: 59px;\r\n        }\r\n\r\n        &__head-cell {\r\n            font-weight: 500;\r\n            padding: 16px;\r\n            vertical-align: bottom;\r\n        }\r\n\r\n        &__head-cell:nth-child(1) {\r\n            width: 51.5%;\r\n        }\r\n\r\n        &__head-cell:nth-child(2) {\r\n            width: 13.5%;\r\n        }\r\n\r\n        &__head-cell:nth-child(3) {\r\n            width: 35%;\r\n        }\r\n    \r\n        &__swiper-wrapper {\r\n            display: table-row-group;\r\n            width: 720px;\r\n            margin: 0 24px;        \r\n        }\r\n    \r\n        &__swiper-slide {\r\n            height: 65px;\r\n            width: 720px;\r\n            display: table-row;\r\n            padding: 0;\r\n            border-radius: 6px;\r\n            overflow: hidden;\r\n            background-color: $sect-bg;\r\n        }\r\n\r\n        &__swiper-slide:hover {\r\n            transform: translateZ(0) scaleX(0.99);\r\n            box-shadow: none;\r\n        }\r\n    \r\n        &__cell {\r\n            display: table-cell;\r\n            padding: 0;\r\n            padding-left: 16px;\r\n            overflow: hidden;            \r\n            background-color: $slide-bg;\r\n        }\r\n\r\n        &__cell:first-child::before {\r\n            content: '';\r\n            display: block;\r\n            box-sizing:border-box;\r\n            position: absolute;\r\n            border-top: 1px solid $decor-col2;\r\n            width: 95.56%;\r\n            height: 1px;\r\n            top: 0;\r\n            left: 50%;\r\n            transform: translateX(-50%);\r\n        }\r\n\r\n        &__cell--ltc:first-child::before {\r\n            display: none;\r\n        }\r\n\r\n        &__cell--ltc {\r\n            border-radius: 6px 0 0 0;\r\n            overflow: hidden;\r\n        }\r\n\r\n        &__cell--rtc {\r\n            border-radius: 0 6px 0 0;\r\n            overflow: hidden;\r\n        }\r\n\r\n        &__cell--lbc {\r\n            border-radius: 0 0 0 6px;\r\n            overflow: hidden;\r\n        }        \r\n\r\n        &__cell--rbc {\r\n            border-radius: 0 0 6px 0;\r\n            overflow: hidden;\r\n        }        \r\n    \r\n        &__cell-header {\r\n            display: none;\r\n        }    \r\n    \r\n        &__order-btn:hover {\r\n            transform: translateZ(-10px);\r\n            filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.5)) saturate(1.8);\r\n        }\r\n    }\r\n\r\n    \r\n    .offer-link {\r\n        width: 319px;\r\n        margin-left: 24px;\r\n    }\r\n}\r\n\r\n    @media (min-width: 1426px) {\r\n\r\n        .prices {\r\n            height: 625px;\r\n            padding-bottom: 50px;\r\n        \r\n            &__title {\r\n                padding: 16px 33px;\r\n            }\r\n        \r\n            &__swiper-container {\r\n                width: 94.3%;\r\n                margin: 0 32px;\r\n            }\r\n            \r\n            &__explanation {\r\n                width: 40%;\r\n                height: 107px;\r\n                padding-top: 30px;\r\n            }\r\n    \r\n            &__head-cell {\r\n                padding: 16px 24px;\r\n            }\r\n    \r\n            &__head-cell:nth-child(1) {\r\n                width: 44.5%;\r\n            }\r\n    \r\n            &__head-cell:nth-child(2) {\r\n                width: 21.5%;\r\n            }\r\n    \r\n            &__head-cell:nth-child(3) {\r\n                width: 34%;\r\n            }\r\n    \r\n            &__swiper-slide:hover {\r\n                transform: translateZ(0) scaleX(0.99);\r\n                box-shadow: none;\r\n            }\r\n        \r\n            &__cell {\r\n                padding-left: 24px;\r\n            }\r\n            \r\n            &__order-btn {\r\n                right: 25px;\r\n            }\r\n        }\r\n        \r\n        .offer-link {\r\n            width: 319px;\r\n            margin-left: 33px;         \r\n        }\r\n\r\n    }",".info {\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    height: 147px;\r\n    background-color: $sect-bg;\r\n    border-top: 1px solid $decor-col1;\r\n    padding: 16px 16px 18px 16px;\r\n    transition: all 0.2s ease;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    color: $sect-title;\r\n    text-align: center;\r\n    font-family: TT Lakes;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 16px;\r\n\r\n    &__link{\r\n        outline: none;\r\n        text-decoration: none;\r\n        white-space: nowrap;\r\n        transition: all 0.3s ease;\r\n        color: $sect-title;\r\n        font-family: TT Lakes;\r\n\r\n        &:hover {            \r\n            text-decoration: underline;\r\n            text-decoration-color: $sect-title;              \r\n        }\r\n    }\r\n}\r\n\r\n.own-n-dev {\r\n    margin: 0;\r\n}\r\n\r\n.offer {\r\n    margin: 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .info {\r\n        height: 105px;\r\n        padding: 32px 24px 25px 24px;\r\n        flex-direction: row;\r\n        align-items: flex-start;\r\n        }\r\n    \r\n    .own-n-dev {\r\n        flex-basis: calc(33.33% - 22px);\r\n        text-align: left;\r\n    }\r\n\r\n    .privacy-policy {\r\n        flex-basis: calc(33.33% - 22px);\r\n    }\r\n    \r\n    .offer {\r\n        flex-basis: calc(33.33% - 22px);\r\n        text-align: right;\r\n    }   \r\n}\r\n\r\n@media (min-width: 1426px) {\r\n    .info {\r\n        height: 85px;\r\n        padding: 32px 34px 25px 32px;\r\n        }\r\n    \r\n    .own-n-dev {\r\n        flex-basis: calc(30% - 96px);\r\n    }\r\n\r\n    .privacy-policy {\r\n        flex-basis: calc(30% - 96px);\r\n    }\r\n    \r\n    .offer {\r\n        flex-basis: calc(40% - 96px);\r\n    }   \r\n}\r\n",".close-btn {\r\n    box-sizing:border-box;\r\n    display: block;\r\n    \r\n\r\n    &__line:nth-child(1) {\r\n        display: block;\r\n        box-sizing: border-box;\r\n        width: 24px;\r\n        height: 2px;\r\n        border-radius: 1px;\r\n        background-color: #FFFFFF;\r\n        margin: auto;\r\n        transform: rotate(45deg) translateY(1px);\r\n        \r\n      }\r\n      \r\n      &__line:nth-child(2) {\r\n        display: block;\r\n        box-sizing: border-box;\r\n        width: 24px;\r\n        height: 2px;\r\n        border-radius: 1px;\r\n        background-color: #FFFFFF;\r\n        margin: auto;\r\n        transform: rotate(-45deg) translateY(-1px);\r\n      }\r\n  }\r\n\r\n.feedback {\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    z-index: 1000;\r\n    width: 320px;\r\n    height: 676px;\r\n    background-color: $slide-bg;\r\n    padding: 80px 16px 16px 16px;\r\n    box-shadow: -16px 0px 52px 0px rgba(14, 24, 80, 0.20);\r\n    transition: all 0.1s ease;\r\n\r\n    &__title {\r\n        color: #1B1C21;\r\n        font-family: TT Lakes;\r\n        font-size: 24px;\r\n        font-style: normal;\r\n        font-weight: 700;\r\n        line-height: 32px;\r\n        letter-spacing: -0.6px;\r\n        position: relative;\r\n\r\n        &:before {\r\n            box-sizing: border-box;\r\n            position: absolute;\r\n            content: '';\r\n            left: -16px;\r\n            bottom: 0;\r\n            width: 4px;\r\n            height: 40px;\r\n            border-right: 4px solid $decor-col0;\r\n            border-radius: 0 4px 4px 0; \r\n        }\r\n    }\r\n\r\n    &__input {\r\n        box-sizing:border-box;\r\n        width: 288px;\r\n        height: 48px;\r\n        border-radius: 8px;\r\n        border: 1px solid $decor-col2;\r\n        margin-bottom: 16px;\r\n        color: $input-txt;\r\n        font-family: TT Lakes;\r\n        font-size: 16px;\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        line-height: 24px;\r\n        letter-spacing: -0.2px;\r\n        padding: 12px 16px;\r\n    }\r\n\r\n    &__mess {\r\n        box-sizing:border-box;\r\n        width: 288px;\r\n        height: 118px;\r\n        border-radius: 8px;\r\n        border: 1px solid $decor-col2;\r\n        color: $input-txt;\r\n        font-family: TT Lakes;\r\n        font-size: 16px;\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        line-height: 24px;\r\n        letter-spacing: -0.2px;\r\n        padding: 12px 16px;\r\n        resize: none;\r\n    }\r\n\r\n    &__info {\r\n        color: $sect-title;\r\n        font-family: TT Lakes;\r\n        font-size: 14px;\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        line-height: 16px;\r\n        margin-top: 12px;\r\n        margin-bottom: 18px;\r\n    }\r\n\r\n    &__imp {\r\n        color: $btns-col;\r\n    }\r\n\r\n    &__link {\r\n        outline: none;\r\n        text-decoration: none;\r\n        transition: all 0.3s ease;\r\n        color: $btns-col;\r\n        font-family: TT Lakes;\r\n        display: inline;\r\n\r\n        &:hover {            \r\n            text-decoration: underline;\r\n            text-decoration-color: $btns-col;              \r\n        }\r\n    }\r\n\r\n    &__btn {\r\n        box-sizing: border-box;\r\n        width: 136px;\r\n        height: 32px;\r\n        border-radius: 16px;\r\n        background: $btns-col;\r\n        border: none;\r\n        padding: 4px 19px;\r\n        margin: 0;\r\n        appearance: none;\r\n        color: $slide-bg;\r\n        text-align: left;\r\n        font-family: TT Lakes;\r\n        font-size: 12px;\r\n        font-style: normal;\r\n        font-weight: 700;\r\n        line-height: 24px;\r\n        letter-spacing: -0.15px;\r\n        text-transform: uppercase;\r\n        transition: filter 0.3s ease;\r\n        cursor: pointer;\r\n        background-image: url(\"../../img/goside.svg\");\r\n        background-position: bottom 4px right 11px;;\r\n        background-repeat: no-repeat;\r\n        position: absolute;\r\n        right: 16px;\r\n\r\n    }\r\n\r\n    &__btn:hover {\r\n        filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.5)) saturate(1.8);\r\n    }\r\n\r\n    &__close-btn {\r\n        position: absolute;\r\n        top: 24px;\r\n        left: 16px;\r\n    }\r\n\r\n\r\n    \r\n}\r\n\r\n.feedback--hidden {\r\n    border: 0;\r\n\tclip: rect(0 0 0 0);\r\n\tclip-path: inset(50%);\r\n\theight: 1px;\r\n\tmargin: -1px;\r\n\toverflow: hidden;\r\n\tpadding: 0;\r\n\tposition: absolute;\r\n\twidth: 1px;\r\n\twhite-space: nowrap;\r\n}\r\n\r\n@media (min-width: 1440px) {\r\n\r\n    .feedback {\r\n        width: 440px;\r\n        height: 940px;\r\n        padding: 17px 32px 32px 32px;\r\n        border-left: 1px solid $decor-col1;\r\n\r\n    \r\n        &__title {    \r\n            &:before {\r\n                width: 3px;\r\n                left: -34px;\r\n                border-radius: 2px;\r\n            }\r\n        }\r\n    \r\n        &__input {\r\n            width: 376px;\r\n        }\r\n    \r\n        &__mess {\r\n            width: 376px;\r\n        }\r\n    \r\n        &__info {\r\n            margin-top: 12px;\r\n            margin-bottom: 18px;\r\n        }\r\n   \r\n        &__btn {\r\n            right: 32px;    \r\n        }\r\n    \r\n        &__close-btn {\r\n            top: 32px;\r\n            left: -73px;\r\n        }\r\n    \r\n    \r\n        \r\n    }\r\n    \r\n\r\n}",".callback {\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    z-index: 1000;\r\n    width: 320px;\r\n    height: 676px;\r\n    background-color: $slide-bg;\r\n    padding: 80px 16px 16px 16px;    \r\n    box-shadow: -16px 0px 52px 0px rgba(14, 24, 80, 0.20);\r\n    transition: all 0.1s ease;\r\n\r\n    &__title {\r\n        color: #1B1C21;\r\n        font-family: TT Lakes;\r\n        font-size: 24px;\r\n        font-style: normal;\r\n        font-weight: 700;\r\n        line-height: 32px;\r\n        letter-spacing: -0.6px;\r\n        position: relative;\r\n\r\n        &:before {\r\n            box-sizing: border-box;\r\n            position: absolute;\r\n            content: '';\r\n            left: -16px;\r\n            bottom: 0;\r\n            width: 4px;\r\n            height: 40px;\r\n            border-right: 4px solid $decor-col0;\r\n            border-radius: 0 4px 4px 0; \r\n        }\r\n    }\r\n\r\n    &__input {\r\n        box-sizing:border-box;\r\n        width: 288px;\r\n        height: 48px;\r\n        border-radius: 8px;\r\n        border: 1px solid $decor-col2;\r\n        margin-bottom: 4px;\r\n        color: $input-txt;\r\n        font-family: TT Lakes;\r\n        font-size: 16px;\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        line-height: 24px;\r\n        letter-spacing: -0.2px;\r\n        padding: 12px 16px;\r\n    }\r\n\r\n    &__info {\r\n        color: $sect-title;\r\n        font-family: TT Lakes;\r\n        font-size: 14px;\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        line-height: 16px;\r\n        margin-top: 12px;\r\n        margin-bottom: 18px;\r\n    }\r\n\r\n    &__imp {\r\n        color: $btns-col;\r\n    }\r\n\r\n    &__link {\r\n        outline: none;\r\n        text-decoration: none;\r\n        transition: all 0.3s ease;\r\n        color: $btns-col;\r\n        font-family: TT Lakes;\r\n        display: inline;\r\n\r\n        &:hover {            \r\n            text-decoration: underline;\r\n            text-decoration-color: $btns-col;              \r\n        }\r\n    }\r\n\r\n    &__btn {\r\n        box-sizing: border-box;\r\n        width: 136px;\r\n        height: 32px;\r\n        border-radius: 16px;\r\n        background: $btns-col;\r\n        border: none;\r\n        padding: 4px 19px;\r\n        margin: 0;\r\n        appearance: none;\r\n        color: $slide-bg;\r\n        text-align: left;\r\n        font-family: TT Lakes;\r\n        font-size: 12px;\r\n        font-style: normal;\r\n        font-weight: 700;\r\n        line-height: 24px;\r\n        letter-spacing: -0.15px;\r\n        text-transform: uppercase;\r\n        transition: filter 0.3s ease;\r\n        cursor: pointer;\r\n        background-image: url(\"../../img/goside.svg\");\r\n        background-position: bottom 4px right 11px;;\r\n        background-repeat: no-repeat;\r\n        position: absolute;\r\n        right: 16px;\r\n\r\n    }\r\n\r\n    &__btn:hover {\r\n        filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.5)) saturate(1.8);\r\n    }\r\n\r\n    &__close-btn {\r\n        position: absolute;\r\n        top: 24px;\r\n        left: 16px;\r\n    }\r\n\r\n\r\n    \r\n}\r\n\r\n.callback--hidden {\r\n    border: 0;\r\n\tclip: rect(0 0 0 0);\r\n\tclip-path: inset(50%);\r\n\theight: 1px;\r\n\tmargin: -1px;\r\n\toverflow: hidden;\r\n\tpadding: 0;\r\n\tposition: absolute;\r\n\twidth: 1px;\r\n\twhite-space: nowrap;\r\n}\r\n\r\n@media (min-width: 1440px) {\r\n\r\n    .callback {\r\n        width: 440px;\r\n        height: 940px;\r\n        padding: 17px 32px 32px 32px;\r\n        border-left: 1px solid $decor-col1;\r\n    \r\n        &__title {    \r\n            &:before {\r\n                width: 3px;\r\n                left: -34px;\r\n                border-radius: 2px;\r\n            }\r\n        }\r\n    \r\n        &__input {\r\n            width: 376px;\r\n        }\r\n    \r\n        &__info {\r\n            margin-top: 12px;\r\n            margin-bottom: 18px;\r\n        }\r\n   \r\n        &__btn {\r\n            right: 32px;    \r\n        }\r\n    \r\n        &__close-btn {\r\n            top: 32px;\r\n            left: -73px;\r\n        }\r\n    }\r\n}",null,"@import '~normalize.css';\n@import 'https://unpkg.com/swiper/swiper-bundle.min.css';\n@import 'style/scss/var.scss';\n@import 'style/css/animations.css';\n@import 'style/css/style.css';\n@import 'style/css/menu.css';\n@import 'style/css/services.css';\n@import 'style/css/brands.css';\n@import 'style/scss/fonts.scss';\n@import 'style/scss/tech-types.scss';\n@import 'style/scss/prices.scss';\n@import 'style/scss/info.scss';\n@import 'style/scss/feedback.scss';\n@import 'style/scss/callback.scss'"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/css/animations.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/css/animations.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes loop-loop {
  20% {
    transform: rotate(-30deg) translate(-5px, 5px) scale(1.2);
  }
  40% {
    transform: rotate(0) scale(0.8);
  }
  60% {
    transform: rotate(30deg) translate(5px, -5px) scale(1.2);
  }
  80% {
    transform: rotate(0) scale(0.8);
  }
}

@keyframes ding-dong {
  33% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(0);
  }
  66% {
    transform: rotate(10deg);
  }
}

@keyframes message {
  0% {
    transform: scale(0.3) translate(-10px, 10px);
  }
  100% {
    transform: scale(1.2);
  }
}

@keyframes look-around {
  33% {
    transform: skewX(15deg) translate(-3px);
  }
  50% {
    transform: skewX(0);
  }
  66% {
    transform: skewX(-15deg) translate(3px);
  }
}
`, "",{"version":3,"sources":["webpack://./src/style/css/animations.css"],"names":[],"mappings":"AAAA;EACE;IACE,yDAAyD;EAC3D;EACA;IACE,+BAA+B;EACjC;EACA;IACE,wDAAwD;EAC1D;EACA;IACE,+BAA+B;EACjC;AACF;;AAEA;EACE;IACE,yBAAyB;EAC3B;EACA;IACE,oBAAoB;EACtB;EACA;IACE,wBAAwB;EAC1B;AACF;;AAEA;EACE;IACE,4CAA4C;EAC9C;EACA;IACE,qBAAqB;EACvB;AACF;;AAEA;EACE;IACE,uCAAuC;EACzC;EACA;IACE,mBAAmB;EACrB;EACA;IACE,uCAAuC;EACzC;AACF","sourcesContent":["@keyframes loop-loop {\r\n  20% {\r\n    transform: rotate(-30deg) translate(-5px, 5px) scale(1.2);\r\n  }\r\n  40% {\r\n    transform: rotate(0) scale(0.8);\r\n  }\r\n  60% {\r\n    transform: rotate(30deg) translate(5px, -5px) scale(1.2);\r\n  }\r\n  80% {\r\n    transform: rotate(0) scale(0.8);\r\n  }\r\n}\r\n\r\n@keyframes ding-dong {\r\n  33% {\r\n    transform: rotate(-10deg);\r\n  }\r\n  50% {\r\n    transform: rotate(0);\r\n  }\r\n  66% {\r\n    transform: rotate(10deg);\r\n  }\r\n}\r\n\r\n@keyframes message {\r\n  0% {\r\n    transform: scale(0.3) translate(-10px, 10px);\r\n  }\r\n  100% {\r\n    transform: scale(1.2);\r\n  }\r\n}\r\n\r\n@keyframes look-around {\r\n  33% {\r\n    transform: skewX(15deg) translate(-3px);\r\n  }\r\n  50% {\r\n    transform: skewX(0);\r\n  }\r\n  66% {\r\n    transform: skewX(-15deg) translate(3px);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/css/brands.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/css/brands.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.brands {
  box-sizing: border-box;
  width: 100%;
  height: 218px;
  background-color: #F8F8F8;
  border-top: 1px solid #D9FFF5;
  padding-bottom: 38px;
  transition: all 0.2s ease;
}

.brands__title {
  display: block;
  width: 100%;
  height: 80px;
  padding: 16px;
  background: linear-gradient(270deg, #F8F8F8 0%, #FFF 100%);
  color: #7E7E82;
  font-size: 16px;
  font-family: TT Lakes;
  font-weight: normal;
  line-height: 24px;
  letter-spacing: -0.2px;
  text-transform: uppercase;
}

.brands__swiper-container {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 231px;
  overflow: hidden;
  transition: all 0.2s ease;
}

.brands__swiper-container:after {
  content: '';
  position: absolute;
  top: 11px;
  right: 0;
  width: 24px;
  height: 81px;
  background: linear-gradient(270deg, #F8F8F8 0.04%, rgba(248, 248, 248, 0.00) 100%);
  z-index: 1;
}

.brands__swiper-wrapper {
  box-sizing: border-box;
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-top: 16px;
  transition: all 0.2s ease;
}

.brands__swiper-slide {
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  height: 72px;
  width: 240px;
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 6px;
  border: 1px solid #EAEAEA;
  background: #FFF;
  transition: all 0.3s ease;
}

.brands__swiper-slide:hover {
  transform: translateZ(10px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.brands__link-btn {
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-shrink: 0;
}

.brands__more-btn {
  display: none;
}

@media (min-width: 768px) {
  .brands {
    min-height: 320px;
    height: auto;
    padding-bottom: 34px;
    max-width: 1440px;
  }

  .brands__title {
    height: 56px;
    padding: 16px 24px;
  }

  .brands__swiper-container {
    height: 208px;
  }

  .brands__swiper-container--expanded {
    height: auto;
  }

  .brands__swiper-container:after {
    display: none;
  }

  .brands__swiper-wrapper {
    display: flex;
    flex-wrap: wrap;
    padding: 24px;
    padding-right: 0;
  }

  .brands__swiper-slide {
    flex-basis: calc(33.33% - 24px);
    margin-bottom: 16px;
    margin-right: 24px;
    display: flex;
    align-items: center;
    z-index: 1;
  }

  .brands__swiper-slide:nth-child(n+7) {
    display: none;
  }

  .brands__swiper-slide--visible:nth-child(n+7) {
    flex-basis: calc(33.33% - 24px);
    margin-bottom: 16px;
    margin-right: 24px;
    display: flex;
    align-items: center;
    z-index: 1;
  }

  .brands__more-btn {
    display: flex;
    width: 143px;
    margin-left: 24px;
    padding-left: 9px;
  }

  .brands__more-btn--active::before {
    transform: rotate(180deg) translateY(50%);
  }

}

@media (min-width: 1426px) {
  .brands {
    min-height: 338px;
    height: auto;
  }

  .brands__title {
    padding: 16px 32px;
  }

  .brands__swiper-container {
    height: 208px;
  }

  .brands__swiper-container--expanded {
    height: auto;
  }

  .brands__swiper-wrapper {
    padding-left: 32px;
    padding-right: 0;
  }

  .brands__swiper-slide {
    flex-basis: calc(25% - 32px);
    margin-bottom: 16px;
    margin-right: 32px;
    display: flex;
    align-items: center;
    z-index: 1;
  }

  .brands__swiper-slide:nth-child(n+7) {
    flex-basis: calc(25% - 32px);
    margin-bottom: 16px;
    margin-right: 32px;
    display: flex;
    align-items: center;
    z-index: 1;
  }

  .brands__swiper-slide:nth-child(n+9) {
    display: none;
  }

  .brands__swiper-slide--visible:nth-child(n+9) {
    flex-basis: calc(25% - 32px);
    margin-bottom: 16px;
    margin-right: 32px;
    display: flex;
    align-items: center;
    z-index: 1;
  }

  .brands__more-btn {
    margin-left: 32px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style/css/brands.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,WAAW;EACX,aAAa;EACb,yBAAyB;EACzB,6BAA6B;EAC7B,oBAAoB;EACpB,yBAAyB;AAC3B;;AAEA;EACE,cAAc;EACd,WAAW;EACX,YAAY;EACZ,aAAa;EACb,0DAA0D;EAC1D,cAAc;EACd,eAAe;EACf,qBAAqB;EACrB,mBAAmB;EACnB,iBAAiB;EACjB,sBAAsB;EACtB,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,kFAAkF;EAClF,UAAU;AACZ;;AAEA;EACE,sBAAsB;EACtB,qBAAqB;EACrB,SAAS;EACT,UAAU;EACV,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,yBAAyB;EACzB,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;EAC3B,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,WAAW;EACX,8BAA8B;EAC9B,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE;IACE,iBAAiB;IACjB,YAAY;IACZ,oBAAoB;IACpB,iBAAiB;EACnB;;EAEA;IACE,YAAY;IACZ,kBAAkB;EACpB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,aAAa;IACb,eAAe;IACf,aAAa;IACb,gBAAgB;EAClB;;EAEA;IACE,+BAA+B;IAC/B,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,UAAU;EACZ;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,+BAA+B;IAC/B,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,UAAU;EACZ;;EAEA;IACE,aAAa;IACb,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;EACnB;;EAEA;IACE,yCAAyC;EAC3C;;AAEF;;AAEA;EACE;IACE,iBAAiB;IACjB,YAAY;EACd;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,kBAAkB;IAClB,gBAAgB;EAClB;;EAEA;IACE,4BAA4B;IAC5B,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,UAAU;EACZ;;EAEA;IACE,4BAA4B;IAC5B,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,UAAU;EACZ;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,4BAA4B;IAC5B,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,UAAU;EACZ;;EAEA;IACE,iBAAiB;EACnB;AACF","sourcesContent":[".brands {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  height: 218px;\r\n  background-color: #F8F8F8;\r\n  border-top: 1px solid #D9FFF5;\r\n  padding-bottom: 38px;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.brands__title {\r\n  display: block;\r\n  width: 100%;\r\n  height: 80px;\r\n  padding: 16px;\r\n  background: linear-gradient(270deg, #F8F8F8 0%, #FFF 100%);\r\n  color: #7E7E82;\r\n  font-size: 16px;\r\n  font-family: TT Lakes;\r\n  font-weight: normal;\r\n  line-height: 24px;\r\n  letter-spacing: -0.2px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.brands__swiper-container {\r\n  box-sizing: border-box;\r\n  position: relative;\r\n  width: 100%;\r\n  height: 231px;\r\n  overflow: hidden;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.brands__swiper-container:after {\r\n  content: '';\r\n  position: absolute;\r\n  top: 11px;\r\n  right: 0;\r\n  width: 24px;\r\n  height: 81px;\r\n  background: linear-gradient(270deg, #F8F8F8 0.04%, rgba(248, 248, 248, 0.00) 100%);\r\n  z-index: 1;\r\n}\r\n\r\n.brands__swiper-wrapper {\r\n  box-sizing: border-box;\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  padding-top: 16px;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.brands__swiper-slide {\r\n  box-sizing: border-box;\r\n  position: relative;\r\n  z-index: 1;\r\n  height: 72px;\r\n  width: 240px;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 16px;\r\n  border-radius: 6px;\r\n  border: 1px solid #EAEAEA;\r\n  background: #FFF;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.brands__swiper-slide:hover {\r\n  transform: translateZ(10px);\r\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.brands__link-btn {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.brands__more-btn {\r\n  display: none;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .brands {\r\n    min-height: 320px;\r\n    height: auto;\r\n    padding-bottom: 34px;\r\n    max-width: 1440px;\r\n  }\r\n\r\n  .brands__title {\r\n    height: 56px;\r\n    padding: 16px 24px;\r\n  }\r\n\r\n  .brands__swiper-container {\r\n    height: 208px;\r\n  }\r\n\r\n  .brands__swiper-container--expanded {\r\n    height: auto;\r\n  }\r\n\r\n  .brands__swiper-container:after {\r\n    display: none;\r\n  }\r\n\r\n  .brands__swiper-wrapper {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    padding: 24px;\r\n    padding-right: 0;\r\n  }\r\n\r\n  .brands__swiper-slide {\r\n    flex-basis: calc(33.33% - 24px);\r\n    margin-bottom: 16px;\r\n    margin-right: 24px;\r\n    display: flex;\r\n    align-items: center;\r\n    z-index: 1;\r\n  }\r\n\r\n  .brands__swiper-slide:nth-child(n+7) {\r\n    display: none;\r\n  }\r\n\r\n  .brands__swiper-slide--visible:nth-child(n+7) {\r\n    flex-basis: calc(33.33% - 24px);\r\n    margin-bottom: 16px;\r\n    margin-right: 24px;\r\n    display: flex;\r\n    align-items: center;\r\n    z-index: 1;\r\n  }\r\n\r\n  .brands__more-btn {\r\n    display: flex;\r\n    width: 143px;\r\n    margin-left: 24px;\r\n    padding-left: 9px;\r\n  }\r\n\r\n  .brands__more-btn--active::before {\r\n    transform: rotate(180deg) translateY(50%);\r\n  }\r\n\r\n}\r\n\r\n@media (min-width: 1426px) {\r\n  .brands {\r\n    min-height: 338px;\r\n    height: auto;\r\n  }\r\n\r\n  .brands__title {\r\n    padding: 16px 32px;\r\n  }\r\n\r\n  .brands__swiper-container {\r\n    height: 208px;\r\n  }\r\n\r\n  .brands__swiper-container--expanded {\r\n    height: auto;\r\n  }\r\n\r\n  .brands__swiper-wrapper {\r\n    padding-left: 32px;\r\n    padding-right: 0;\r\n  }\r\n\r\n  .brands__swiper-slide {\r\n    flex-basis: calc(25% - 32px);\r\n    margin-bottom: 16px;\r\n    margin-right: 32px;\r\n    display: flex;\r\n    align-items: center;\r\n    z-index: 1;\r\n  }\r\n\r\n  .brands__swiper-slide:nth-child(n+7) {\r\n    flex-basis: calc(25% - 32px);\r\n    margin-bottom: 16px;\r\n    margin-right: 32px;\r\n    display: flex;\r\n    align-items: center;\r\n    z-index: 1;\r\n  }\r\n\r\n  .brands__swiper-slide:nth-child(n+9) {\r\n    display: none;\r\n  }\r\n\r\n  .brands__swiper-slide--visible:nth-child(n+9) {\r\n    flex-basis: calc(25% - 32px);\r\n    margin-bottom: 16px;\r\n    margin-right: 32px;\r\n    display: flex;\r\n    align-items: center;\r\n    z-index: 1;\r\n  }\r\n\r\n  .brands__more-btn {\r\n    margin-left: 32px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/css/menu.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/css/menu.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.menu {
  box-sizing: border-box;
  max-width: 768px;
  min-height: 88px;
  background-color: #FFFFFF;
}

.menu--active {
  z-index: 999999;
  width: 320px;
  height: 676px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex-shrink: 0;
  position: absolute;
  transform: translate(0, 0);
  box-shadow: 16px 0px 52px 0px rgba(14, 24, 80, 0.20);
}

.logo-block {
  box-sizing: border-box;
  width: 186px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  padding: 18px 0;
}

.menu__logo-block:after {
  box-sizing: border-box;
  position: absolute;
  content: '';
  transform: translateX(94px);
  width: 2px;
  height: 32px;
  background: #EAEAEA;;
  border-radius: 1px;
}

.menu__logo-block--active {
  display: flex;
  align-items: center;
  width: 226px;
  justify-content: flex-start;
  position: relative;
  padding: 18px 16px 0 16px;
  margin-bottom: 23px;
}

.menu__logo-block--active:before,
.menu__logo-block--active:after,
.menu__modal-block--active:after {
  display:  none;
}

.burger-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

.burger-btn__line:nth-child(1) {
  width: 18px;
  height: 2px;
  border-radius: 1px;
  background-color: #FFFFFF;
  margin: auto auto 5px auto;
  transition: all 0.3s ease;
}

.burger-btn__line:nth-child(2) {
  width: 10px;
  height: 2px;
  border-radius: 1px;
  background-color: #FFFFFF;
  margin: 0 19px 5px 11px;
  transition: all 0.3s ease;
}

.burger-btn__line:nth-child(3) {
  width: 14px;
  height: 2px;
  border-radius: 1px;
  background-color: #FFFFFF;
  margin: 0 15px auto 11px;
  transition: all 0.3s ease;
}

.burger-btn__line--active:nth-child(1) {
  transform: rotate(765deg) translate(5px, 5px);
  width: 24px;
}

.burger-btn__line--active:nth-child(2) {
  transform: translateX(40px);
  opacity: 0;
}

.burger-btn__line--active:nth-child(3) {
  transform: rotate(-765deg) translate(6px, -4px);
  width: 24px;
}

.menu__logo {
  box-sizing: border-box;
}

.menu__logo:hover {
  transform: scale(1.05);
}

.menu__logo--active {
  margin-left: 16px;
  margin-right: 93px;
}

.logo__img {
  display: block;
  box-sizing: border-box;
  margin: auto 0;
}

.logo__img--active {
  height: 52px;
}

.menu__search-btn {
  display: none;
  transition: all 0.3s ease;
}

.menu__search-btn:hover .search-btn__img {
  animation-name: loop-loop;
  animation-duration: 2s;
}

.menu__search-btn--active {
  display: block;
}

.navigation {
  box-sizing: border-box;
  transition: all 0.1s ease;
}

.menu__navigation {
  display: none;
}

.menu__navigation--active {
  display: flex;
  flex-direction: column;
  padding-left: 0;
}

.navigation__list {
  transition: all 0.1s ease;
}

.navigation__list--active {
  display: flex;
  height: 383px;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 11px;
  padding-left: 0;
  overflow: visible;
}

.navigation__item {
  transition: all 0.2s ease;
}

.navigation__item--active {
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  height: 100%;
}

.navigation__link-btn--active {
  font-family: 'TT Lakes';
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #1B1C21;
  font-weight: 500;
  margin-left: 12px;
}

.navigation__link-btn--active:before {
  position: relative;
  box-sizing: border-box;
  content: '';
  left: -12px;
  width: 4px;
  height: 28px;
  border-right: 4px solid #41F6D7;
  border-radius: 0 4px 4px 0;
  opacity: 0;
  transition: all 0.3s ease;
}

.navigation__link-btn--active:hover:before,
.navigation__link-btn--active:focus:before {
  opacity: 1;
}

.navigation__link-btn--current {
  color: #7E7E82;
}

.navigation__link-btn--current:before {
  opacity: 1;
}

.menu__modal-block {
  display: none;
  transition: all 0.05s ease;
}

.menu__call-btn:hover .call-btn__img {
  animation-name: ding-dong;
  animation-duration: 0.15s;
  animation-iteration-count: 3;
  animation-timing-function: linear;
}

.menu__chat-btn:hover .chat-btn__img {
  animation-name: message;
  animation-duration: 0.3s;
}

.menu__profile-btn:hover .profile-btn__img {
  animation-name: look-around;
  animation-duration: 0.9s;
  animation-timing-function: linear;
}

.menu__modal-block--active {
  box-sizing: border-box;
  align-items: center;
  width: 373px;
  margin-right: 0;
  padding-right: 0;
  display: flex;
  justify-content: flex-start;
  padding-left: 16px;
  margin-bottom: 16px;
}

.menu__call-btn--active,
.menu__chat-btn--active {
  margin-right: 16px;
}

.menu__mailto {
  display: none;
  transition: all 0.3s ease;
}

.menu__mailto--active {
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  outline: none;
  text-decoration: none;
  white-space: nowrap;
  font-family: 'TT Lakes';
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #1B1C21;
  padding-left: 16px;
  margin-bottom: 13px;
  font-weight: 500;
}

.menu__callto {
  display: none;
  transition: all 0.3s ease;
}

.menu__callto--active {
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  outline: none;
  text-decoration: none;
  white-space: nowrap;
  font-family: 'TT Lakes';
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.6px;
  color: #1B1C21;
  padding-left: 16px;
  margin-bottom: 6px;
  font-weight: bold;
}

.menu__lang-block {
  display: none;
  transition: all 0.3s ease;
}

.menu__lang-block--active {
  padding-left: 16px;
  display: flex;
}

.lang-radio-label--active {
  font-family: 'TT Lakes';
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #1B1C21;
  margin-right: 8px;
  font-weight: 500;
  cursor: pointer;
}

.lang-radio {
  box-sizing: border-box;
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
}

.lang-radio:checked + .lang-radio-label {
  color: #7E7E82;
}

@media (min-width: 360px) {
  .menu--active {
    width: 360px;
  }

  .menu__logo-block--active {
    padding: 18px 16px 0 24px;
    margin-bottom: 21px;
  }

  .menu__logo--active {
    margin-right: 112px;
  }

  .logo__img--active {
    height: 55px;
  }

  .navigation__list--active {
    margin-bottom: 11px;
  }

  .navigation__link-btn--active {
    margin-left: 19px;
  }

  .navigation__link-btn--active:before {
    left: -19px;
  }

  .menu__modal-block--active,
  .menu__mailto--active,
  .menu__callto--active,
  .menu__lang-block--active {
    padding-left: 24px;
  }
}

@media (min-width: 768px) {
  .menu {
    display: flex;
    justify-content: space-between;
    max-width: 1440px;
  }

  .menu--active {
    width: 320px;
    height: 1024px;
    justify-content: flex-start;
  }

  .menu__logo-block {
    width: 226px;
    justify-content: space-around;
    position: relative;
    padding: 18px 2px;
  }

  .menu__logo-block:before {
    box-sizing: border-box;
    position: absolute;
    content: '';
    right: 140px;
    width: 2px;
    height: 32px;
    background: #EAEAEA;;
    border-radius: 1px;
  }

  .menu__logo-block:after {
    transform: scale(0);
    opacity: 0;
  }

  .menu__logo-block--active {
    margin-left: 48px;
    margin-bottom: 30px;
  }

  .menu__logo--active {
    margin-right: 78px;
  }

  .logo__img {
    width: 97px;
  }

  .logo__img--active {
    height: 52px;
  }

  .menu__navigation {
    margin-bottom: 302px;
  }

  .navigation__list--active {
    margin-bottom: 0;
    overflow: visible;
  }

  .navigation__item--active {
    margin-bottom: 28px;
  }

  .menu__modal-block {
    box-sizing: border-box;
    width: 156px;
    margin-right: 158px;
    padding-right: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menu__modal-block:after {
    box-sizing: border-box;
    display: block;
    position: absolute;
    content: '';
    right: 140px;
    width: 2px;
    height: 32px;
    background: #EAEAEA;;
    border-radius: 1px;
  }

  .menu__modal-block--active {
    margin-bottom: 17px;
  }

  .menu__modal-block--active:after {
    display:  none;
  }

  .menu__callto--active {
    margin-bottom: 39px;
  }

  .menu__lang-block--active {
    margin-bottom: 0;
  }
}

@media (min-width: 1426px) {
  .menu {
    width: 306px;
    height: 1925px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    flex-shrink: 0;
  }

  .menu--active {
    width: 320px;
    height: 1024px;
    justify-content: flex-start;
  }

  .menu__logo-block {
    width: 100%;
    justify-content: space-between;
    padding-left: 22px;
    padding-right: 29px;
    padding-top: 29px;
    margin-bottom: 16px;
  }

  .menu__logo-block--active {
    margin-left: 0;
  }

  .menu__logo-block:before,
  .menu__logo-block:after {
    display: none;
  }

  .menu__burger-btn {
    display: none;
  }

  .menu__search-btn {
    display: block;
  }

  .menu__navigation {
    display: flex;
    flex-direction: column;
    margin-bottom: 0px;
  }

  .navigation__list {
    display: flex;
    height: 397px;
    justify-content: space-between;
    flex-direction: column;
    margin-bottom: 216px;
  }

  .navigation__item {
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    height: 100%;
  }

  .navigation__link-btn {
    font-family: 'TT Lakes';
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #1B1C21;
    font-weight: 500;
    margin-left: 20px;
  }

  .navigation__link-btn:before {
    position: relative;
    box-sizing: border-box;
    content: '';
    left: -18px;
    width: 4px;
    height: 28px;
    border-right: 4px solid #41F6D7;
    border-radius: 4px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .navigation__link-btn:hover:before,
  .navigation__link-btn:focus:before {
    opacity: 1;
  }

  .navigation__link-btn--current {
    color: #7E7E82;
  }

  .navigation__link-btn--current:before {
    opacity: 1;
  }

  .menu__modal-block {
    width: 373px;
    margin-right: 0;
    padding-right: 0;
    display: flex;
    justify-content: flex-start;
    padding-left: 19px;
    margin-bottom: 16px;
  }

  .menu__modal-block:after {
    display: none;
  }

  .menu__call-btn,
  .menu__chat-btn {
    margin-right: 16px;
  }

  .menu__mailto {
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    outline: none;
    text-decoration: none;
    white-space: nowrap;
    font-family: 'TT Lakes';
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #1B1C21;
    padding-left: 19px;
    margin-bottom: 16px;
    font-weight: 500;
  }

  .menu__callto {
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    outline: none;
    text-decoration: none;
    white-space: nowrap;
    font-family: 'TT Lakes';
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.6px;
    color: #1B1C21;
    padding-left: 19px;
    margin-bottom: 40px;
    font-weight: bold;
  }

  .menu__lang-block {
    padding-left: 22px;
    display: flex;
  }

  .lang-block {
    padding-left: 22px;
    display: flex;
  }
  
  .lang-radio-label {
    font-family: 'TT Lakes';
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #1B1C21;
    margin-right: 8px;
    font-weight: 500;
    cursor: pointer;
  }
  
  .lang-radio {
    box-sizing: border-box;
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
  }

  .lang-radio:checked + .lang-radio-label {
    color: #7E7E82;
  }
  
}
`, "",{"version":3,"sources":["webpack://./src/style/css/menu.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,aAAa;EACb,2BAA2B;EAC3B,sBAAsB;EACtB,cAAc;EACd,kBAAkB;EAClB,0BAA0B;EAC1B,oDAAoD;AACtD;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,WAAW;EACX,2BAA2B;EAC3B,UAAU;EACV,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,2BAA2B;EAC3B,kBAAkB;EAClB,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;;;EAGE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,yBAAyB;EACzB,0BAA0B;EAC1B,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,yBAAyB;EACzB,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,yBAAyB;EACzB,wBAAwB;EACxB,yBAAyB;AAC3B;;AAEA;EACE,6CAA6C;EAC7C,WAAW;AACb;;AAEA;EACE,2BAA2B;EAC3B,UAAU;AACZ;;AAEA;EACE,+CAA+C;EAC/C,WAAW;AACb;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,sBAAsB;EACtB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,aAAa;EACb,8BAA8B;EAC9B,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,2BAA2B;EAC3B,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,eAAe;EACf,iBAAiB;EACjB,sBAAsB;EACtB,cAAc;EACd,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,WAAW;EACX,WAAW;EACX,UAAU;EACV,YAAY;EACZ,+BAA+B;EAC/B,0BAA0B;EAC1B,UAAU;EACV,yBAAyB;AAC3B;;AAEA;;EAEE,UAAU;AACZ;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,0BAA0B;AAC5B;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,4BAA4B;EAC5B,iCAAiC;AACnC;;AAEA;EACE,uBAAuB;EACvB,wBAAwB;AAC1B;;AAEA;EACE,2BAA2B;EAC3B,wBAAwB;EACxB,iCAAiC;AACnC;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,2BAA2B;EAC3B,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,aAAa;EACb,qBAAqB;EACrB,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,iBAAiB;EACjB,sBAAsB;EACtB,cAAc;EACd,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,aAAa;EACb,qBAAqB;EACrB,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,iBAAiB;EACjB,sBAAsB;EACtB,cAAc;EACd,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,uBAAuB;EACvB,eAAe;EACf,iBAAiB;EACjB,sBAAsB;EACtB,cAAc;EACd,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,mBAAmB;EACnB,UAAU;EACV,WAAW;EACX,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE;IACE,YAAY;EACd;;EAEA;IACE,yBAAyB;IACzB,mBAAmB;EACrB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,WAAW;EACb;;EAEA;;;;IAIE,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,aAAa;IACb,8BAA8B;IAC9B,iBAAiB;EACnB;;EAEA;IACE,YAAY;IACZ,cAAc;IACd,2BAA2B;EAC7B;;EAEA;IACE,YAAY;IACZ,6BAA6B;IAC7B,kBAAkB;IAClB,iBAAiB;EACnB;;EAEA;IACE,sBAAsB;IACtB,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,UAAU;IACV,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;EACpB;;EAEA;IACE,mBAAmB;IACnB,UAAU;EACZ;;EAEA;IACE,iBAAiB;IACjB,mBAAmB;EACrB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,oBAAoB;EACtB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,sBAAsB;IACtB,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;EACrB;;EAEA;IACE,sBAAsB;IACtB,cAAc;IACd,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,UAAU;IACV,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;EACpB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,YAAY;IACZ,cAAc;IACd,yBAAyB;IACzB,aAAa;IACb,2BAA2B;IAC3B,sBAAsB;IACtB,cAAc;EAChB;;EAEA;IACE,YAAY;IACZ,cAAc;IACd,2BAA2B;EAC7B;;EAEA;IACE,WAAW;IACX,8BAA8B;IAC9B,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;EACrB;;EAEA;IACE,cAAc;EAChB;;EAEA;;IAEE,aAAa;EACf;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,kBAAkB;EACpB;;EAEA;IACE,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,sBAAsB;IACtB,oBAAoB;EACtB;;EAEA;IACE,sBAAsB;IACtB,aAAa;IACb,2BAA2B;IAC3B,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;EACd;;EAEA;IACE,uBAAuB;IACvB,eAAe;IACf,iBAAiB;IACjB,sBAAsB;IACtB,cAAc;IACd,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,kBAAkB;IAClB,sBAAsB;IACtB,WAAW;IACX,WAAW;IACX,UAAU;IACV,YAAY;IACZ,+BAA+B;IAC/B,kBAAkB;IAClB,UAAU;IACV,6BAA6B;EAC/B;;EAEA;;IAEE,UAAU;EACZ;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,2BAA2B;IAC3B,kBAAkB;IAClB,mBAAmB;EACrB;;EAEA;IACE,aAAa;EACf;;EAEA;;IAEE,kBAAkB;EACpB;;EAEA;IACE,sBAAsB;IACtB,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,iBAAiB;IACjB,sBAAsB;IACtB,cAAc;IACd,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;EAClB;;EAEA;IACE,sBAAsB;IACtB,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,iBAAiB;IACjB,sBAAsB;IACtB,cAAc;IACd,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;EACnB;;EAEA;IACE,kBAAkB;IAClB,aAAa;EACf;;EAEA;IACE,kBAAkB;IAClB,aAAa;EACf;;EAEA;IACE,uBAAuB;IACvB,eAAe;IACf,iBAAiB;IACjB,sBAAsB;IACtB,cAAc;IACd,iBAAiB;IACjB,gBAAgB;IAChB,eAAe;EACjB;;EAEA;IACE,sBAAsB;IACtB,kBAAkB;IAClB,mBAAmB;IACnB,UAAU;IACV,WAAW;IACX,YAAY;EACd;;EAEA;IACE,cAAc;EAChB;;AAEF","sourcesContent":[".menu {\r\n  box-sizing: border-box;\r\n  max-width: 768px;\r\n  min-height: 88px;\r\n  background-color: #FFFFFF;\r\n}\r\n\r\n.menu--active {\r\n  z-index: 999999;\r\n  width: 320px;\r\n  height: 676px;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  flex-direction: column;\r\n  flex-shrink: 0;\r\n  position: absolute;\r\n  transform: translate(0, 0);\r\n  box-shadow: 16px 0px 52px 0px rgba(14, 24, 80, 0.20);\r\n}\r\n\r\n.logo-block {\r\n  box-sizing: border-box;\r\n  width: 186px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  position: relative;\r\n  padding: 18px 0;\r\n}\r\n\r\n.menu__logo-block:after {\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  content: '';\r\n  transform: translateX(94px);\r\n  width: 2px;\r\n  height: 32px;\r\n  background: #EAEAEA;;\r\n  border-radius: 1px;\r\n}\r\n\r\n.menu__logo-block--active {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 226px;\r\n  justify-content: flex-start;\r\n  position: relative;\r\n  padding: 18px 16px 0 16px;\r\n  margin-bottom: 23px;\r\n}\r\n\r\n.menu__logo-block--active:before,\r\n.menu__logo-block--active:after,\r\n.menu__modal-block--active:after {\r\n  display:  none;\r\n}\r\n\r\n.burger-btn {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.burger-btn__line:nth-child(1) {\r\n  width: 18px;\r\n  height: 2px;\r\n  border-radius: 1px;\r\n  background-color: #FFFFFF;\r\n  margin: auto auto 5px auto;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.burger-btn__line:nth-child(2) {\r\n  width: 10px;\r\n  height: 2px;\r\n  border-radius: 1px;\r\n  background-color: #FFFFFF;\r\n  margin: 0 19px 5px 11px;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.burger-btn__line:nth-child(3) {\r\n  width: 14px;\r\n  height: 2px;\r\n  border-radius: 1px;\r\n  background-color: #FFFFFF;\r\n  margin: 0 15px auto 11px;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.burger-btn__line--active:nth-child(1) {\r\n  transform: rotate(765deg) translate(5px, 5px);\r\n  width: 24px;\r\n}\r\n\r\n.burger-btn__line--active:nth-child(2) {\r\n  transform: translateX(40px);\r\n  opacity: 0;\r\n}\r\n\r\n.burger-btn__line--active:nth-child(3) {\r\n  transform: rotate(-765deg) translate(6px, -4px);\r\n  width: 24px;\r\n}\r\n\r\n.menu__logo {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.menu__logo:hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\n.menu__logo--active {\r\n  margin-left: 16px;\r\n  margin-right: 93px;\r\n}\r\n\r\n.logo__img {\r\n  display: block;\r\n  box-sizing: border-box;\r\n  margin: auto 0;\r\n}\r\n\r\n.logo__img--active {\r\n  height: 52px;\r\n}\r\n\r\n.menu__search-btn {\r\n  display: none;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.menu__search-btn:hover .search-btn__img {\r\n  animation-name: loop-loop;\r\n  animation-duration: 2s;\r\n}\r\n\r\n.menu__search-btn--active {\r\n  display: block;\r\n}\r\n\r\n.navigation {\r\n  box-sizing: border-box;\r\n  transition: all 0.1s ease;\r\n}\r\n\r\n.menu__navigation {\r\n  display: none;\r\n}\r\n\r\n.menu__navigation--active {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-left: 0;\r\n}\r\n\r\n.navigation__list {\r\n  transition: all 0.1s ease;\r\n}\r\n\r\n.navigation__list--active {\r\n  display: flex;\r\n  height: 383px;\r\n  justify-content: space-between;\r\n  flex-direction: column;\r\n  margin-bottom: 11px;\r\n  padding-left: 0;\r\n  overflow: visible;\r\n}\r\n\r\n.navigation__item {\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.navigation__item--active {\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n  position: relative;\r\n  height: 100%;\r\n}\r\n\r\n.navigation__link-btn--active {\r\n  font-family: 'TT Lakes';\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  letter-spacing: -0.2px;\r\n  color: #1B1C21;\r\n  font-weight: 500;\r\n  margin-left: 12px;\r\n}\r\n\r\n.navigation__link-btn--active:before {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  content: '';\r\n  left: -12px;\r\n  width: 4px;\r\n  height: 28px;\r\n  border-right: 4px solid #41F6D7;\r\n  border-radius: 0 4px 4px 0;\r\n  opacity: 0;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.navigation__link-btn--active:hover:before,\r\n.navigation__link-btn--active:focus:before {\r\n  opacity: 1;\r\n}\r\n\r\n.navigation__link-btn--current {\r\n  color: #7E7E82;\r\n}\r\n\r\n.navigation__link-btn--current:before {\r\n  opacity: 1;\r\n}\r\n\r\n.menu__modal-block {\r\n  display: none;\r\n  transition: all 0.05s ease;\r\n}\r\n\r\n.menu__call-btn:hover .call-btn__img {\r\n  animation-name: ding-dong;\r\n  animation-duration: 0.15s;\r\n  animation-iteration-count: 3;\r\n  animation-timing-function: linear;\r\n}\r\n\r\n.menu__chat-btn:hover .chat-btn__img {\r\n  animation-name: message;\r\n  animation-duration: 0.3s;\r\n}\r\n\r\n.menu__profile-btn:hover .profile-btn__img {\r\n  animation-name: look-around;\r\n  animation-duration: 0.9s;\r\n  animation-timing-function: linear;\r\n}\r\n\r\n.menu__modal-block--active {\r\n  box-sizing: border-box;\r\n  align-items: center;\r\n  width: 373px;\r\n  margin-right: 0;\r\n  padding-right: 0;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  padding-left: 16px;\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.menu__call-btn--active,\r\n.menu__chat-btn--active {\r\n  margin-right: 16px;\r\n}\r\n\r\n.menu__mailto {\r\n  display: none;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.menu__mailto--active {\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  outline: none;\r\n  text-decoration: none;\r\n  white-space: nowrap;\r\n  font-family: 'TT Lakes';\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  letter-spacing: -0.2px;\r\n  color: #1B1C21;\r\n  padding-left: 16px;\r\n  margin-bottom: 13px;\r\n  font-weight: 500;\r\n}\r\n\r\n.menu__callto {\r\n  display: none;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.menu__callto--active {\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  outline: none;\r\n  text-decoration: none;\r\n  white-space: nowrap;\r\n  font-family: 'TT Lakes';\r\n  font-size: 24px;\r\n  line-height: 32px;\r\n  letter-spacing: -0.6px;\r\n  color: #1B1C21;\r\n  padding-left: 16px;\r\n  margin-bottom: 6px;\r\n  font-weight: bold;\r\n}\r\n\r\n.menu__lang-block {\r\n  display: none;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.menu__lang-block--active {\r\n  padding-left: 16px;\r\n  display: flex;\r\n}\r\n\r\n.lang-radio-label--active {\r\n  font-family: 'TT Lakes';\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  letter-spacing: -0.2px;\r\n  color: #1B1C21;\r\n  margin-right: 8px;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n}\r\n\r\n.lang-radio {\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  clip: rect(0 0 0 0);\r\n  width: 1px;\r\n  height: 1px;\r\n  margin: -1px;\r\n}\r\n\r\n.lang-radio:checked + .lang-radio-label {\r\n  color: #7E7E82;\r\n}\r\n\r\n@media (min-width: 360px) {\r\n  .menu--active {\r\n    width: 360px;\r\n  }\r\n\r\n  .menu__logo-block--active {\r\n    padding: 18px 16px 0 24px;\r\n    margin-bottom: 21px;\r\n  }\r\n\r\n  .menu__logo--active {\r\n    margin-right: 112px;\r\n  }\r\n\r\n  .logo__img--active {\r\n    height: 55px;\r\n  }\r\n\r\n  .navigation__list--active {\r\n    margin-bottom: 11px;\r\n  }\r\n\r\n  .navigation__link-btn--active {\r\n    margin-left: 19px;\r\n  }\r\n\r\n  .navigation__link-btn--active:before {\r\n    left: -19px;\r\n  }\r\n\r\n  .menu__modal-block--active,\r\n  .menu__mailto--active,\r\n  .menu__callto--active,\r\n  .menu__lang-block--active {\r\n    padding-left: 24px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .menu {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    max-width: 1440px;\r\n  }\r\n\r\n  .menu--active {\r\n    width: 320px;\r\n    height: 1024px;\r\n    justify-content: flex-start;\r\n  }\r\n\r\n  .menu__logo-block {\r\n    width: 226px;\r\n    justify-content: space-around;\r\n    position: relative;\r\n    padding: 18px 2px;\r\n  }\r\n\r\n  .menu__logo-block:before {\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    content: '';\r\n    right: 140px;\r\n    width: 2px;\r\n    height: 32px;\r\n    background: #EAEAEA;;\r\n    border-radius: 1px;\r\n  }\r\n\r\n  .menu__logo-block:after {\r\n    transform: scale(0);\r\n    opacity: 0;\r\n  }\r\n\r\n  .menu__logo-block--active {\r\n    margin-left: 48px;\r\n    margin-bottom: 30px;\r\n  }\r\n\r\n  .menu__logo--active {\r\n    margin-right: 78px;\r\n  }\r\n\r\n  .logo__img {\r\n    width: 97px;\r\n  }\r\n\r\n  .logo__img--active {\r\n    height: 52px;\r\n  }\r\n\r\n  .menu__navigation {\r\n    margin-bottom: 302px;\r\n  }\r\n\r\n  .navigation__list--active {\r\n    margin-bottom: 0;\r\n    overflow: visible;\r\n  }\r\n\r\n  .navigation__item--active {\r\n    margin-bottom: 28px;\r\n  }\r\n\r\n  .menu__modal-block {\r\n    box-sizing: border-box;\r\n    width: 156px;\r\n    margin-right: 158px;\r\n    padding-right: 4px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n\r\n  .menu__modal-block:after {\r\n    box-sizing: border-box;\r\n    display: block;\r\n    position: absolute;\r\n    content: '';\r\n    right: 140px;\r\n    width: 2px;\r\n    height: 32px;\r\n    background: #EAEAEA;;\r\n    border-radius: 1px;\r\n  }\r\n\r\n  .menu__modal-block--active {\r\n    margin-bottom: 17px;\r\n  }\r\n\r\n  .menu__modal-block--active:after {\r\n    display:  none;\r\n  }\r\n\r\n  .menu__callto--active {\r\n    margin-bottom: 39px;\r\n  }\r\n\r\n  .menu__lang-block--active {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 1426px) {\r\n  .menu {\r\n    width: 306px;\r\n    height: 1925px;\r\n    background-color: #FFFFFF;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    flex-direction: column;\r\n    flex-shrink: 0;\r\n  }\r\n\r\n  .menu--active {\r\n    width: 320px;\r\n    height: 1024px;\r\n    justify-content: flex-start;\r\n  }\r\n\r\n  .menu__logo-block {\r\n    width: 100%;\r\n    justify-content: space-between;\r\n    padding-left: 22px;\r\n    padding-right: 29px;\r\n    padding-top: 29px;\r\n    margin-bottom: 16px;\r\n  }\r\n\r\n  .menu__logo-block--active {\r\n    margin-left: 0;\r\n  }\r\n\r\n  .menu__logo-block:before,\r\n  .menu__logo-block:after {\r\n    display: none;\r\n  }\r\n\r\n  .menu__burger-btn {\r\n    display: none;\r\n  }\r\n\r\n  .menu__search-btn {\r\n    display: block;\r\n  }\r\n\r\n  .menu__navigation {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-bottom: 0px;\r\n  }\r\n\r\n  .navigation__list {\r\n    display: flex;\r\n    height: 397px;\r\n    justify-content: space-between;\r\n    flex-direction: column;\r\n    margin-bottom: 216px;\r\n  }\r\n\r\n  .navigation__item {\r\n    box-sizing: border-box;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: flex-start;\r\n    position: relative;\r\n    height: 100%;\r\n  }\r\n\r\n  .navigation__link-btn {\r\n    font-family: 'TT Lakes';\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    letter-spacing: -0.2px;\r\n    color: #1B1C21;\r\n    font-weight: 500;\r\n    margin-left: 20px;\r\n  }\r\n\r\n  .navigation__link-btn:before {\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    content: '';\r\n    left: -18px;\r\n    width: 4px;\r\n    height: 28px;\r\n    border-right: 4px solid #41F6D7;\r\n    border-radius: 4px;\r\n    opacity: 0;\r\n    transition: opacity 0.3s ease;\r\n  }\r\n\r\n  .navigation__link-btn:hover:before,\r\n  .navigation__link-btn:focus:before {\r\n    opacity: 1;\r\n  }\r\n\r\n  .navigation__link-btn--current {\r\n    color: #7E7E82;\r\n  }\r\n\r\n  .navigation__link-btn--current:before {\r\n    opacity: 1;\r\n  }\r\n\r\n  .menu__modal-block {\r\n    width: 373px;\r\n    margin-right: 0;\r\n    padding-right: 0;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    padding-left: 19px;\r\n    margin-bottom: 16px;\r\n  }\r\n\r\n  .menu__modal-block:after {\r\n    display: none;\r\n  }\r\n\r\n  .menu__call-btn,\r\n  .menu__chat-btn {\r\n    margin-right: 16px;\r\n  }\r\n\r\n  .menu__mailto {\r\n    box-sizing: border-box;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    outline: none;\r\n    text-decoration: none;\r\n    white-space: nowrap;\r\n    font-family: 'TT Lakes';\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    letter-spacing: -0.2px;\r\n    color: #1B1C21;\r\n    padding-left: 19px;\r\n    margin-bottom: 16px;\r\n    font-weight: 500;\r\n  }\r\n\r\n  .menu__callto {\r\n    box-sizing: border-box;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    outline: none;\r\n    text-decoration: none;\r\n    white-space: nowrap;\r\n    font-family: 'TT Lakes';\r\n    font-size: 24px;\r\n    line-height: 32px;\r\n    letter-spacing: -0.6px;\r\n    color: #1B1C21;\r\n    padding-left: 19px;\r\n    margin-bottom: 40px;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .menu__lang-block {\r\n    padding-left: 22px;\r\n    display: flex;\r\n  }\r\n\r\n  .lang-block {\r\n    padding-left: 22px;\r\n    display: flex;\r\n  }\r\n  \r\n  .lang-radio-label {\r\n    font-family: 'TT Lakes';\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    letter-spacing: -0.2px;\r\n    color: #1B1C21;\r\n    margin-right: 8px;\r\n    font-weight: 500;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .lang-radio {\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    clip: rect(0 0 0 0);\r\n    width: 1px;\r\n    height: 1px;\r\n    margin: -1px;\r\n  }\r\n\r\n  .lang-radio:checked + .lang-radio-label {\r\n    color: #7E7E82;\r\n  }\r\n  \r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/css/services.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/css/services.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/service.svg */ "./src/img/service.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/status.svg */ "./src/img/status.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.services {
  box-sizing: border-box;
  max-width: 768px;
  min-height: 497px;
  background-color: #F8F8F8;
}

.services__title-block {
  box-sizing: border-box;
  padding-left: 16px;
  padding-right: 32px;
  padding-top: 24px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.services__title-block:before {
  box-sizing: border-box;
  position: absolute;
  content: '';
  left: 0;
  width: 4px;
  height: 40px;
  border-right: 4px solid #41F6D7;
  border-radius: 0 4px 4px 0; 
}

.title {
  box-sizing: border-box;
  margin: 0;  
}

.services__title {
  font-family: 'TT Lakes';
  font-size: 28px;
  line-height: 40px;
  color: #1B1C21;
  letter-spacing: -0.6px;
  width: 233px;
  flex-shrink: 0;
  white-space: nowrap;
}

.services__btns-wrapper {
  box-sizing: border-box;
  width: 96px;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  position: relative;
  top: -88px;
  left: -41px;
}

.services__submit-btn {
  background-image: url( ${___CSS_LOADER_URL_REPLACEMENT_0___} );
  background-repeat: no-repeat;
  background-position: center;
}

.services__status-btn {
  background-image: url( ${___CSS_LOADER_URL_REPLACEMENT_1___} );
  background-repeat: no-repeat;
  background-position: center;
}


.services__btns-wrapper--hidden {
  display: none;
}

.submit-txt, .status-txt {
  box-sizing: border-box;
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
}

.services__navigation {
  height: 40px;
  padding-left: 16px;
  position: relative;
}

.services__navigation:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 100%;
  background: linear-gradient(270deg, #F8F8F8 0.04%, rgba(248, 248, 248, 0.00) 100%);
  z-index: 1;
}

.services__list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  overflow-x: auto;
  overflow-y: visible;
}

.services__item {
  box-sizing: border-box;
  display: flex;
  justify-content: center;  
  align-items: center;  
}

.services__link-btn {
  height: 40px;
  font-family: 'TT Lakes';
  font-size: 16px;
  line-height: 24px;
  color: #7E7E82;
  padding: 0 16px;
  transition: all 0.3s ease;
}

.services__link-btn--current {
  background: #FFFFFF;
  border-radius: 6px;
  box-shadow: inset 0 0 2px 0 rgba(184, 255, 236, 0), inset 0 0 0 2px rgba(184, 255, 236, 1);
}

.services__link-btn:hover, .services__link-btn:focus {
  border-radius: 6px;
  box-shadow: inset 0 0 2px 0 rgba(184, 255, 236, 0), inset 0 0 0 2px rgba(184, 255, 236, 1);
}

.services__article {
  padding: 24px 16px 16px 16px;  
}

.services__text{
  box-sizing: border-box;
  font-family: 'TT Lakes';
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1px;
  color: #1B1C21;
  margin: 0;
  margin-bottom: 16px;
}

.services__text--tabl, .services__text--desk {
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
}

@media (min-width: 768px) {

  .services {
      max-width: 1440px;
      min-height: 407px;
  }
  
  .services__title-block {
      padding-left: 24px;
      margin-bottom: 31px;
  }
  
  .services__btns-wrapper {
      left: 7px;
  }
  
  .services__navigation {
      padding-left: 25px;
  }
  
  .services__content {
      padding-top: 32px;
      overflow: hidden;
  }
  
  .services__article {
      float: left;
      width: 40.625%;
      margin-left: 3.125%;
      margin-right: 3.125%;
      padding: 0;
  }
  
  .services__text {    
      line-height: 20px;
      margin-bottom: 20px;
  }
  
  .services__text--tabl {
      position: static;
      clip: auto;
      width: auto;
      height: auto;
      margin: 0;
      margin-bottom: 10px;
  }
  
  .services__more-btn {
      padding-left: 9px;
  }
  
  .services__image {
      float: right;
      width: 46.825%;
      margin-left: 3.125%;
      margin-right: 3.125%;
      min-height: 208px;
      max-height: 247px;
      border-radius: 5px;
      overflow: hidden;
      object-fit: cover;
  }    
}

@media (min-width: 1426px) {

  .services {    
      min-height: 536px;
  }
  
  .services__title-block {
      justify-content: space-between;
      padding-top: 42px;
      padding-left: 31px;
      margin-bottom: 8px;
  }
  
  .services__title-block:before {
      position: relative;
      left: -29px;
      width: 4px;
      height: 40px;
      border-radius: 4px; 
  }
  
  .services__title {
      margin-right: 726px;
  }
  
  .services__btns-wrapper {
      position: static;
      justify-content: flex-end;
  }
  
  .services__submit-btn {
      margin-right: 32px;
  }
  
  .services__submit-txt, .services__status-txt {
      position: static;
      clip: auto;
      width: auto;
      height: auto;
      font-family: 'TT Lakes';
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.2px;
      color: #1B1C21;
      margin: auto 0;
      cursor: pointer;
      white-space: nowrap;    
      margin-right: 9px;
  }
  
  .services__link-btn {
      padding: 0 14px 0 24px;
  }
  
  .services__navigation {
      padding-left: 35px;
      max-height: 40px;
      overflow: visible;
  }
  
  .services__navigation:after {
      display: none;
  }
  
  .services__list {
      flex-wrap: wrap;
  }
  
  .services__item {
      margin-bottom: 4px;
  }
  
  .services__content {
      min-height: 368px;
  }
  
  .services__article {
      width: 43.75%;
      margin-left: 3.036%;
      margin-right: 1.339%;
  }
  
  .services__text--visible {
      margin-top: 27px;
  }
  
  .services__text--desk {
      position: static;
      clip: auto;
      width: auto;
      height: auto;
      margin: 0;
  }
  
  .services__image {
      width: 47.411%;
      margin-left: 1.339%;
      margin-right: 2.5%;
      margin-top: 16px;
      min-height: 307px;
      overflow: hidden;
      
  }
  
}`, "",{"version":3,"sources":["webpack://./src/style/css/services.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;EACnB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,WAAW;EACX,OAAO;EACP,UAAU;EACV,YAAY;EACZ,+BAA+B;EAC/B,0BAA0B;AAC5B;;AAEA;EACE,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,uBAAuB;EACvB,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,sBAAsB;EACtB,YAAY;EACZ,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,cAAc;EACd,kBAAkB;EAClB,UAAU;EACV,WAAW;AACb;;AAEA;EACE,2DAAgD;EAChD,4BAA4B;EAC5B,2BAA2B;AAC7B;;AAEA;EACE,2DAA+C;EAC/C,4BAA4B;EAC5B,2BAA2B;AAC7B;;;AAGA;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,mBAAmB;EACnB,UAAU;EACV,WAAW;EACX,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,kFAAkF;EAClF,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,cAAc;EACd,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,0FAA0F;AAC5F;;AAEA;EACE,kBAAkB;EAClB,0FAA0F;AAC5F;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,cAAc;EACd,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,UAAU;EACV,WAAW;EACX,YAAY;AACd;;AAEA;;EAEE;MACI,iBAAiB;MACjB,iBAAiB;EACrB;;EAEA;MACI,kBAAkB;MAClB,mBAAmB;EACvB;;EAEA;MACI,SAAS;EACb;;EAEA;MACI,kBAAkB;EACtB;;EAEA;MACI,iBAAiB;MACjB,gBAAgB;EACpB;;EAEA;MACI,WAAW;MACX,cAAc;MACd,mBAAmB;MACnB,oBAAoB;MACpB,UAAU;EACd;;EAEA;MACI,iBAAiB;MACjB,mBAAmB;EACvB;;EAEA;MACI,gBAAgB;MAChB,UAAU;MACV,WAAW;MACX,YAAY;MACZ,SAAS;MACT,mBAAmB;EACvB;;EAEA;MACI,iBAAiB;EACrB;;EAEA;MACI,YAAY;MACZ,cAAc;MACd,mBAAmB;MACnB,oBAAoB;MACpB,iBAAiB;MACjB,iBAAiB;MACjB,kBAAkB;MAClB,gBAAgB;MAChB,iBAAiB;EACrB;AACF;;AAEA;;EAEE;MACI,iBAAiB;EACrB;;EAEA;MACI,8BAA8B;MAC9B,iBAAiB;MACjB,kBAAkB;MAClB,kBAAkB;EACtB;;EAEA;MACI,kBAAkB;MAClB,WAAW;MACX,UAAU;MACV,YAAY;MACZ,kBAAkB;EACtB;;EAEA;MACI,mBAAmB;EACvB;;EAEA;MACI,gBAAgB;MAChB,yBAAyB;EAC7B;;EAEA;MACI,kBAAkB;EACtB;;EAEA;MACI,gBAAgB;MAChB,UAAU;MACV,WAAW;MACX,YAAY;MACZ,uBAAuB;MACvB,gBAAgB;MAChB,eAAe;MACf,iBAAiB;MACjB,sBAAsB;MACtB,cAAc;MACd,cAAc;MACd,eAAe;MACf,mBAAmB;MACnB,iBAAiB;EACrB;;EAEA;MACI,sBAAsB;EAC1B;;EAEA;MACI,kBAAkB;MAClB,gBAAgB;MAChB,iBAAiB;EACrB;;EAEA;MACI,aAAa;EACjB;;EAEA;MACI,eAAe;EACnB;;EAEA;MACI,kBAAkB;EACtB;;EAEA;MACI,iBAAiB;EACrB;;EAEA;MACI,aAAa;MACb,mBAAmB;MACnB,oBAAoB;EACxB;;EAEA;MACI,gBAAgB;EACpB;;EAEA;MACI,gBAAgB;MAChB,UAAU;MACV,WAAW;MACX,YAAY;MACZ,SAAS;EACb;;EAEA;MACI,cAAc;MACd,mBAAmB;MACnB,kBAAkB;MAClB,gBAAgB;MAChB,iBAAiB;MACjB,gBAAgB;;EAEpB;;AAEF","sourcesContent":[".services {\r\n  box-sizing: border-box;\r\n  max-width: 768px;\r\n  min-height: 497px;\r\n  background-color: #F8F8F8;\r\n}\r\n\r\n.services__title-block {\r\n  box-sizing: border-box;\r\n  padding-left: 16px;\r\n  padding-right: 32px;\r\n  padding-top: 24px;\r\n  margin-bottom: 24px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.services__title-block:before {\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  content: '';\r\n  left: 0;\r\n  width: 4px;\r\n  height: 40px;\r\n  border-right: 4px solid #41F6D7;\r\n  border-radius: 0 4px 4px 0; \r\n}\r\n\r\n.title {\r\n  box-sizing: border-box;\r\n  margin: 0;  \r\n}\r\n\r\n.services__title {\r\n  font-family: 'TT Lakes';\r\n  font-size: 28px;\r\n  line-height: 40px;\r\n  color: #1B1C21;\r\n  letter-spacing: -0.6px;\r\n  width: 233px;\r\n  flex-shrink: 0;\r\n  white-space: nowrap;\r\n}\r\n\r\n.services__btns-wrapper {\r\n  box-sizing: border-box;\r\n  width: 96px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-shrink: 0;\r\n  position: relative;\r\n  top: -88px;\r\n  left: -41px;\r\n}\r\n\r\n.services__submit-btn {\r\n  background-image: url( '../../img/service.svg' );\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n.services__status-btn {\r\n  background-image: url( '../../img/status.svg' );\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n\r\n.services__btns-wrapper--hidden {\r\n  display: none;\r\n}\r\n\r\n.submit-txt, .status-txt {\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  clip: rect(0 0 0 0);\r\n  width: 1px;\r\n  height: 1px;\r\n  margin: -1px;\r\n}\r\n\r\n.services__navigation {\r\n  height: 40px;\r\n  padding-left: 16px;\r\n  position: relative;\r\n}\r\n\r\n.services__navigation:after {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  width: 24px;\r\n  height: 100%;\r\n  background: linear-gradient(270deg, #F8F8F8 0.04%, rgba(248, 248, 248, 0.00) 100%);\r\n  z-index: 1;\r\n}\r\n\r\n.services__list {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-shrink: 0;\r\n  overflow-x: auto;\r\n  overflow-y: visible;\r\n}\r\n\r\n.services__item {\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  justify-content: center;  \r\n  align-items: center;  \r\n}\r\n\r\n.services__link-btn {\r\n  height: 40px;\r\n  font-family: 'TT Lakes';\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  color: #7E7E82;\r\n  padding: 0 16px;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.services__link-btn--current {\r\n  background: #FFFFFF;\r\n  border-radius: 6px;\r\n  box-shadow: inset 0 0 2px 0 rgba(184, 255, 236, 0), inset 0 0 0 2px rgba(184, 255, 236, 1);\r\n}\r\n\r\n.services__link-btn:hover, .services__link-btn:focus {\r\n  border-radius: 6px;\r\n  box-shadow: inset 0 0 2px 0 rgba(184, 255, 236, 0), inset 0 0 0 2px rgba(184, 255, 236, 1);\r\n}\r\n\r\n.services__article {\r\n  padding: 24px 16px 16px 16px;  \r\n}\r\n\r\n.services__text{\r\n  box-sizing: border-box;\r\n  font-family: 'TT Lakes';\r\n  font-weight: 500;\r\n  font-size: 14px;\r\n  line-height: 18px;\r\n  letter-spacing: 0.1px;\r\n  color: #1B1C21;\r\n  margin: 0;\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.services__text--tabl, .services__text--desk {\r\n  position: absolute;\r\n  clip: rect(0 0 0 0);\r\n  width: 1px;\r\n  height: 1px;\r\n  margin: -1px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n\r\n  .services {\r\n      max-width: 1440px;\r\n      min-height: 407px;\r\n  }\r\n  \r\n  .services__title-block {\r\n      padding-left: 24px;\r\n      margin-bottom: 31px;\r\n  }\r\n  \r\n  .services__btns-wrapper {\r\n      left: 7px;\r\n  }\r\n  \r\n  .services__navigation {\r\n      padding-left: 25px;\r\n  }\r\n  \r\n  .services__content {\r\n      padding-top: 32px;\r\n      overflow: hidden;\r\n  }\r\n  \r\n  .services__article {\r\n      float: left;\r\n      width: 40.625%;\r\n      margin-left: 3.125%;\r\n      margin-right: 3.125%;\r\n      padding: 0;\r\n  }\r\n  \r\n  .services__text {    \r\n      line-height: 20px;\r\n      margin-bottom: 20px;\r\n  }\r\n  \r\n  .services__text--tabl {\r\n      position: static;\r\n      clip: auto;\r\n      width: auto;\r\n      height: auto;\r\n      margin: 0;\r\n      margin-bottom: 10px;\r\n  }\r\n  \r\n  .services__more-btn {\r\n      padding-left: 9px;\r\n  }\r\n  \r\n  .services__image {\r\n      float: right;\r\n      width: 46.825%;\r\n      margin-left: 3.125%;\r\n      margin-right: 3.125%;\r\n      min-height: 208px;\r\n      max-height: 247px;\r\n      border-radius: 5px;\r\n      overflow: hidden;\r\n      object-fit: cover;\r\n  }    \r\n}\r\n\r\n@media (min-width: 1426px) {\r\n\r\n  .services {    \r\n      min-height: 536px;\r\n  }\r\n  \r\n  .services__title-block {\r\n      justify-content: space-between;\r\n      padding-top: 42px;\r\n      padding-left: 31px;\r\n      margin-bottom: 8px;\r\n  }\r\n  \r\n  .services__title-block:before {\r\n      position: relative;\r\n      left: -29px;\r\n      width: 4px;\r\n      height: 40px;\r\n      border-radius: 4px; \r\n  }\r\n  \r\n  .services__title {\r\n      margin-right: 726px;\r\n  }\r\n  \r\n  .services__btns-wrapper {\r\n      position: static;\r\n      justify-content: flex-end;\r\n  }\r\n  \r\n  .services__submit-btn {\r\n      margin-right: 32px;\r\n  }\r\n  \r\n  .services__submit-txt, .services__status-txt {\r\n      position: static;\r\n      clip: auto;\r\n      width: auto;\r\n      height: auto;\r\n      font-family: 'TT Lakes';\r\n      font-weight: 500;\r\n      font-size: 16px;\r\n      line-height: 24px;\r\n      letter-spacing: -0.2px;\r\n      color: #1B1C21;\r\n      margin: auto 0;\r\n      cursor: pointer;\r\n      white-space: nowrap;    \r\n      margin-right: 9px;\r\n  }\r\n  \r\n  .services__link-btn {\r\n      padding: 0 14px 0 24px;\r\n  }\r\n  \r\n  .services__navigation {\r\n      padding-left: 35px;\r\n      max-height: 40px;\r\n      overflow: visible;\r\n  }\r\n  \r\n  .services__navigation:after {\r\n      display: none;\r\n  }\r\n  \r\n  .services__list {\r\n      flex-wrap: wrap;\r\n  }\r\n  \r\n  .services__item {\r\n      margin-bottom: 4px;\r\n  }\r\n  \r\n  .services__content {\r\n      min-height: 368px;\r\n  }\r\n  \r\n  .services__article {\r\n      width: 43.75%;\r\n      margin-left: 3.036%;\r\n      margin-right: 1.339%;\r\n  }\r\n  \r\n  .services__text--visible {\r\n      margin-top: 27px;\r\n  }\r\n  \r\n  .services__text--desk {\r\n      position: static;\r\n      clip: auto;\r\n      width: auto;\r\n      height: auto;\r\n      margin: 0;\r\n  }\r\n  \r\n  .services__image {\r\n      width: 47.411%;\r\n      margin-left: 1.339%;\r\n      margin-right: 2.5%;\r\n      margin-top: 16px;\r\n      min-height: 307px;\r\n      overflow: hidden;\r\n      \r\n  }\r\n  \r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/css/style.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/css/style.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/placeholder.jpg */ "./src/img/placeholder.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/more-btn.svg */ "./src/img/more-btn.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  display: block;
  margin: 0;
}

.upender {
  box-sizing: border-box;
  transition: all 0.5s ease;
  height: auto;
  max-width: 1925px;
  position: relative;
  margin: 0 auto;  
}

.upender__exception {
  box-sizing: border-box;
  transition: all 0.5s ease;
  height: auto;
  position: relative;
}

.upender__exception--blurred {
  filter: blur(2px);
  pointer-events: none;
}

.placeholder {
  box-sizing: border-box;
  display: none;
  transition: all 0.01s ease;
}

.placeholder--active {
  display: block;
  min-height: 88px;
  width: 100%;
  background-color: #FFFFFF;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-position: right;
  background-repeat: no-repeat;
}

.blur-overlay {
  box-sizing: border-box;
}

.upender__blur-overlay {
  box-sizing: border-box;
  top: -100%;
  transition: all 0.2s ease;
}

.upender__blur-overlay--active {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: auto;
  z-index: 2;
  opacity: 0.9;
  background: #FFF;
}

.link-btn, .lang-link{
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.3s ease;
}

.title{
  box-sizing: border-box;
}

.list{
  box-sizing: border-box;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.more-btn{
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 141px;
  height: 24px;
  padding: 0;
  font-family: 'TT Lakes';
  font-size: 16px;
  color: #1B1C21;
  line-height: 24px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-weight: 500;
  padding-right: 9px;
  position: relative;
}

.more-btn::before {
  content: '';
  display: block;
  width: 24px; 
  height: 24px; 
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___}); 
  background-repeat: no-repeat;
  background-position: center;
  position: absolute; 
  right: 125px; 
  top: 50%; 
  transform: translateY(-50%);
  transition: transform 0.3s ease;
}


.burger-btn,
.search-btn, 
.call-btn, 
.chat-btn, 
.profile-btn,
.submit-btn,
.status-btn,
.close-btn {
  box-sizing: border-box;
  border: none;
  padding: 0;
  margin: 0;
  appearance: none;
  border-radius: 0;
  background: transparent;
  flex-shrink: 0;
  cursor: pointer;
  overflow: hidden;
  transition: filter 0.3s ease, transform 0.3s ease;
  background-color: #FF3E79;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.burger-btn:hover,
.search-btn:hover,
.call-btn:hover,
.chat-btn:hover,
.profile-btn:hover,
.submit-btn:hover,
.status-btn:hover,
.close-btn:hover {
  filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.5)) saturate(1.8);
}

.burger-btn__img,
.search-btn__img,
.call-btn__img,
.chat-btn__img,
.profile-btn__img {
  box-sizing: border-box;
  display: block;
  margin: auto;
  transition: all 0.3s ease;
}

.content {
  box-sizing: border-box;
}

.article {
  box-sizing: border-box;
}

.swiper-pagination {
  position: absolute;
  z-index: 2;
}

.swiper-pagination-bullet {
  background-color: #DDDDDD;
  width: 12px;
  height: 12px;
}

.swiper-pagination-bullet-active {
  background-color: #B5B6BC;
  width: 12px;
  height: 12px;
}



@media (min-width: 768px) {
  .swiper-pagination {
    display: none;
  }

  .upender__blur-overlay--active {
    min-height: 1857px;
  }

  .more-btn::before {
    right: 117px;
  }
}

@media (min-width: 1426px) {
  .upender {
    display: flex;
    justify-content: center;
    flex-shrink: 0;
  }

  .upender__exception {
    max-width: 1925px;
  }

  .upender__blur-overlay--active {
    min-height: 1925px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style/css/style.css"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,SAAS;AACX;;AAEA;EACE,sBAAsB;EACtB,yBAAyB;EACzB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,sBAAsB;EACtB,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,0BAA0B;AAC5B;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,WAAW;EACX,yBAAyB;EACzB,yDAAkD;EAClD,0BAA0B;EAC1B,4BAA4B;AAC9B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,UAAU;EACV,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,qBAAqB;EACrB,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,qBAAqB;EACrB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,yBAAyB;EACzB,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,UAAU;EACV,uBAAuB;EACvB,eAAe;EACf,cAAc;EACd,iBAAiB;EACjB,YAAY;EACZ,6BAA6B;EAC7B,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,WAAW;EACX,YAAY;EACZ,yDAA+C;EAC/C,4BAA4B;EAC5B,2BAA2B;EAC3B,kBAAkB;EAClB,YAAY;EACZ,QAAQ;EACR,2BAA2B;EAC3B,+BAA+B;AACjC;;;AAGA;;;;;;;;EAQE,sBAAsB;EACtB,YAAY;EACZ,UAAU;EACV,SAAS;EACT,gBAAgB;EAChB,gBAAgB;EAChB,uBAAuB;EACvB,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,iDAAiD;EACjD,yBAAyB;EACzB,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;;;;;;;;EAQE,iEAAiE;AACnE;;AAEA;;;;;EAKE,sBAAsB;EACtB,cAAc;EACd,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,YAAY;AACd;;;;AAIA;EACE;IACE,aAAa;EACf;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,aAAa;IACb,uBAAuB;IACvB,cAAc;EAChB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,kBAAkB;EACpB;AACF","sourcesContent":["body {\r\n  display: block;\r\n  margin: 0;\r\n}\r\n\r\n.upender {\r\n  box-sizing: border-box;\r\n  transition: all 0.5s ease;\r\n  height: auto;\r\n  max-width: 1925px;\r\n  position: relative;\r\n  margin: 0 auto;  \r\n}\r\n\r\n.upender__exception {\r\n  box-sizing: border-box;\r\n  transition: all 0.5s ease;\r\n  height: auto;\r\n  position: relative;\r\n}\r\n\r\n.upender__exception--blurred {\r\n  filter: blur(2px);\r\n  pointer-events: none;\r\n}\r\n\r\n.placeholder {\r\n  box-sizing: border-box;\r\n  display: none;\r\n  transition: all 0.01s ease;\r\n}\r\n\r\n.placeholder--active {\r\n  display: block;\r\n  min-height: 88px;\r\n  width: 100%;\r\n  background-color: #FFFFFF;\r\n  background-image: url(\"../../img/placeholder.jpg\");\r\n  background-position: right;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.blur-overlay {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.upender__blur-overlay {\r\n  box-sizing: border-box;\r\n  top: -100%;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.upender__blur-overlay--active {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  pointer-events: auto;\r\n  z-index: 2;\r\n  opacity: 0.9;\r\n  background: #FFF;\r\n}\r\n\r\n.link-btn, .lang-link{\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  outline: none;\r\n  text-decoration: none;\r\n  white-space: nowrap;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.title{\r\n  box-sizing: border-box;\r\n}\r\n\r\n.list{\r\n  box-sizing: border-box;\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.more-btn{\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  width: 141px;\r\n  height: 24px;\r\n  padding: 0;\r\n  font-family: 'TT Lakes';\r\n  font-size: 16px;\r\n  color: #1B1C21;\r\n  line-height: 24px;\r\n  border: none;\r\n  background-color: transparent;\r\n  cursor: pointer;\r\n  font-weight: 500;\r\n  padding-right: 9px;\r\n  position: relative;\r\n}\r\n\r\n.more-btn::before {\r\n  content: '';\r\n  display: block;\r\n  width: 24px; \r\n  height: 24px; \r\n  background-image: url('../../img/more-btn.svg'); \r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  position: absolute; \r\n  right: 125px; \r\n  top: 50%; \r\n  transform: translateY(-50%);\r\n  transition: transform 0.3s ease;\r\n}\r\n\r\n\r\n.burger-btn,\r\n.search-btn, \r\n.call-btn, \r\n.chat-btn, \r\n.profile-btn,\r\n.submit-btn,\r\n.status-btn,\r\n.close-btn {\r\n  box-sizing: border-box;\r\n  border: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  appearance: none;\r\n  border-radius: 0;\r\n  background: transparent;\r\n  flex-shrink: 0;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  transition: filter 0.3s ease, transform 0.3s ease;\r\n  background-color: #FF3E79;\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.burger-btn:hover,\r\n.search-btn:hover,\r\n.call-btn:hover,\r\n.chat-btn:hover,\r\n.profile-btn:hover,\r\n.submit-btn:hover,\r\n.status-btn:hover,\r\n.close-btn:hover {\r\n  filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.5)) saturate(1.8);\r\n}\r\n\r\n.burger-btn__img,\r\n.search-btn__img,\r\n.call-btn__img,\r\n.chat-btn__img,\r\n.profile-btn__img {\r\n  box-sizing: border-box;\r\n  display: block;\r\n  margin: auto;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.content {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.article {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.swiper-pagination {\r\n  position: absolute;\r\n  z-index: 2;\r\n}\r\n\r\n.swiper-pagination-bullet {\r\n  background-color: #DDDDDD;\r\n  width: 12px;\r\n  height: 12px;\r\n}\r\n\r\n.swiper-pagination-bullet-active {\r\n  background-color: #B5B6BC;\r\n  width: 12px;\r\n  height: 12px;\r\n}\r\n\r\n\r\n\r\n@media (min-width: 768px) {\r\n  .swiper-pagination {\r\n    display: none;\r\n  }\r\n\r\n  .upender__blur-overlay--active {\r\n    min-height: 1857px;\r\n  }\r\n\r\n  .more-btn::before {\r\n    right: 117px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1426px) {\r\n  .upender {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-shrink: 0;\r\n  }\r\n\r\n  .upender__exception {\r\n    max-width: 1925px;\r\n  }\r\n\r\n  .upender__blur-overlay--active {\r\n    min-height: 1925px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logo.svg */ "./src/img/logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/search.svg */ "./src/img/search.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/call.svg */ "./src/img/call.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/message.svg */ "./src/img/message.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/profile.svg */ "./src/img/profile.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/cps.jpg */ "./src/img/cps.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/lenovo.svg */ "./src/img/lenovo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/go.svg */ "./src/img/go.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/samsung.svg */ "./src/img/samsung.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/apple.svg */ "./src/img/apple.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/viewsonic.svg */ "./src/img/viewsonic.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/bosch.svg */ "./src/img/bosch.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/hp.svg */ "./src/img/hp.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./img/acer.svg */ "./src/img/acer.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./img/sony.svg */ "./src/img/sony.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var code = "<!DOCTYPE html>\r\n<html lang=\"ru\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Сервисный центр CPS</title>\r\n</head>\r\n<body id=\"body\">\r\n    <div class=\"upender\">\r\n        <header id=\"menu\" class=\"menu\">\r\n            <div id=\"menuLogoWrapper\" class=\"logo-block menu__logo-block\">\r\n                <button id=\"burgerButton\" class=\"burger-btn menu__burger-btn\">\r\n                    <span id=\"burgerLine1\" class=\"burger-btn__line\"></span>\r\n                    <span id=\"burgerLine2\" class=\"burger-btn__line\"></span>\r\n                    <span id=\"burgerLine3\" class=\"burger-btn__line\"></span>\r\n                </button>\r\n                <a href=\"#\" id=\"logoLink\" class=\"logo menu__logo\">\r\n                    <img id=\"logoImg\" class=\"logo__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"Логотип компании Си-Пи-Эс\">\r\n                </a>\r\n                <button id=\"searchButton\" class=\"search-btn menu__search-btn\">\r\n                    <img class=\"search-btn__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Поиск\">\r\n                </button>\r\n            </div>\r\n            <nav id=\"navigation\" class=\"navigation menu__navigation\">\r\n                <ul id=\"navigationList\" class=\"list navigation__list\">\r\n                    <li id=\"navItem1\" class=\"navigation__item\">\r\n                        <a href=\"#\" id=\"navLink1\" class=\"link-btn navigation__link-btn\">Ремонт техники</a>\r\n                    </li>\r\n                    <li id=\"navItem2\" class=\"navigation__item\">\r\n                        <a href=\"#\" id=\"navLink2\" class=\"link-btn navigation__link-btn navigation__link-btn--current\">Услуги и сервисы</a>\r\n                    </li>\r\n                    <li id=\"navItem3\" class=\"navigation__item\">\r\n                        <a href=\"#\" id=\"navLink3\" class=\"link-btn navigation__link-btn\">Корпоративным клиентам</a>\r\n                    </li>\r\n                    <li id=\"navItem4\" class=\"navigation__item\">\r\n                        <a href=\"#\" id=\"navLink4\" class=\"link-btn navigation__link-btn\">Продавцам техники</a>\r\n                    </li>\r\n                    <li id=\"navItem5\" class=\"navigation__item\">\r\n                        <a href=\"#\" id=\"navLink5\" class=\"link-btn navigation__link-btn\">Партнерам</a>\r\n                    </li>\r\n                    <li id=\"navItem6\" class=\"navigation__item\">\r\n                        <a href=\"#\" id=\"navLink6\" class=\"link-btn navigation__link-btn\">Производителям</a>\r\n                    </li>\r\n                    <li id=\"navItem7\" class=\"navigation__item\">\r\n                        <a href=\"#\" id=\"navLink7\" class=\"link-btn navigation__link-btn\">Наши сервисные центры</a>\r\n                    </li>\r\n                    <li id=\"navItem8\" class=\"navigation__item\">\r\n                        <a href=\"#\" id=\"navLink8\" class=\"link-btn navigation__link-btn\">Контакты</a>\r\n                    </li>\r\n                </ul>\r\n            </nav>\r\n            <div id=\"modBtnWrapper\" class=\"modal-block menu__modal-block\">\r\n                <button id=\"callButton\" class=\"call-btn menu__call-btn\">\r\n                    <img class=\"call-btn__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Звонок\">\r\n                </button>\r\n                <button id=\"chatButton\" class=\"chat-btn menu__chat-btn\">\r\n                    <img class=\"chat-btn__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Чат\">\r\n                </button>\r\n                <button id=\"profileButton\" class=\"profile-btn menu__profile-btn\">\r\n                    <img class=\"profile-btn__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Профиль\">\r\n                </button>\r\n            </div>\r\n            <a id=\"mailtoLink\" class=\"mailto menu__mailto\" href=\"mailto:mail@cps.com\">mail@cps.com</a>\r\n            <a id=\"calltoLink\" class=\"callto menu__callto\" href=\"tel:88008908900\">8 800 890 8900</a>\r\n            <div id=\"langWrapper\" class=\"lang-block menu__lang-block\">\r\n                <input id=\"langRadio1\" type=\"radio\" name=\"langRadio\" value=\"RU\" class=\"lang-radio\" checked>\r\n                <label Id=\"langLink1\" for=\"langRadio1\" class=\"lang-radio-label\">\r\n                    RU\r\n                </label>                \r\n                <input id=\"langRadio2\" type=\"radio\" name=\"langRadio\" value=\"EN\" class=\"lang-radio\">\r\n                <label Id=\"langLink2\" for=\"langRadio2\" class=\"lang-radio-label\">\r\n                    EN\r\n                </label>                \r\n                <input id=\"langRadio3\" type=\"radio\" name=\"langRadio\" value=\"CH\" class=\"lang-radio\">\r\n                <label Id=\"langLink3\" for=\"langRadio3\" class=\"lang-radio-label\">\r\n                    CH\r\n                </label>\r\n            </div>\r\n        </header>\r\n        <div id=\"upenderException\" class=\"upender__exception\">\r\n            <div id=\"placeholder\" class=\"placeholder\"></div>\r\n            <main>\r\n                <section class=\"services\">\r\n                    <div class=\"title-block services__title-block\">\r\n                        <h1 class=\"title services__title\">\r\n                            Услуги и сервисы\r\n                        </h1>\r\n                        <div id=\"servicesBtnWrapper\" class=\"btns-wrapper services__btns-wrapper\">\r\n                            <label class=\"submit-txt services__submit-txt\" for=\"submit\">Оставить заявку</label>\r\n                            <button id=\"submit\" class=\"submit-btn services__submit-btn\">\r\n                            </button>\r\n                            <label class=\"status-txt services__status-txt\" for=\"status\">Статус ремонта</label>\r\n                            <button id=\"status\" class=\"status-btn services__status-btn\">\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                    <nav class=\"navigation services__navigation\">\r\n                        <ul class=\"list services__list\">\r\n                            <li class=\"services__item\">\r\n                                <a href=\"#\" class=\"link-btn services__link-btn services__link-btn--current\">Ремонтируемые устройства</a>\r\n                            </li>\r\n                            <li class=\"services__item\">\r\n                                <a href=\"#\" class=\"link-btn services__link-btn\">Ремонтируемые бренды</a>\r\n                            </li>\r\n                            <li class=\"services__item\">\r\n                                <a href=\"#\" class=\"link-btn services__link-btn\">Цены на услуги</a>\r\n                            </li>\r\n                            <li class=\"services__item\">\r\n                                <a href=\"#\" class=\"link-btn services__link-btn\">Адреса сервисных центров</a>\r\n                            </li>\r\n                            <li class=\"services__item\">\r\n                                <a href=\"#\" class=\"link-btn services__link-btn\">Специальные цены</a>\r\n                            </li>\r\n                            <li class=\"services__item\">\r\n                                <a href=\"#\" class=\"link-btn services__link-btn\">Отзывы</a>\r\n                            </li>\r\n                        </ul>\r\n                    </nav>\r\n                    <div class=\"content services__content\">\r\n                        <article class=\"article services__article\">\r\n                            <p id=\"servTxt1\" class=\"services__text services__text--visible\">\r\n                                Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы\r\n                                можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.\r\n                            </p>\r\n                            <p id=\"servTxt2\" class=\"services__text services__text--tabl\">\r\n                                Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера,\r\n                                <span id=\"servTxt3\" class=\"services__text services__text--desk\">что подтверждает большое количество постоянных\r\n                                    клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и,\r\n                                    в свою очередь, советуют нас родным и близким.\r\n                                </span>\r\n                            </p>\r\n                            <button id=\"servicesMoreBtn\" class=\"more-btn services__more-btn\">\r\n                                <Span id=\"servicesMoreBtnTxt\">Читать далее</Span>\r\n                            </button>\r\n                       </article>\r\n                    <img class=\"services__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Си-Пи-Эс\">\r\n                    </div>\r\n                </section>\r\n                <section class=\"brands\">\r\n                    <h2 id=\"brandsTitle\" class=\"title brands__title\">\r\n                      Ремонт техники различных брендов\r\n                    </h2>\r\n                    <div id=\"brandsSwiperContainer\" class=\"swiper-container brands__swiper-container\">\r\n                      <ul id=\"brandsSwiperWrapper\" class=\"swiper-wrapper brands__swiper-wrapper\">\r\n                        <li class=\"swiper-slide brands__swiper-slide\">\r\n                          <a href=\"#\" class=\"link-btn brands__link-btn\"><img class=\"brands__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"lenovo\"><img class=\"brands__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"перейти\"></a>\r\n                        </li>\r\n                        <li class=\"swiper-slide brands__swiper-slide\">\r\n                          <a href=\"#\" class=\"link-btn brands__link-btn\"><img class=\"brands__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"samsung\"><img class=\"brands__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"перейти\"></a>\r\n                        </li>\r\n                        <li class=\"swiper-slide brands__swiper-slide\">\r\n                          <a href=\"#\" class=\"link-btn brands__link-btn\"><img class=\"brands__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"apple\"><img class=\"brands__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"перейти\"></a>\r\n                        </li>\r\n                        <li class=\"swiper-slide brands__swiper-slide\">\r\n                          <a href=\"#\" class=\"link-btn brands__link-btn\"><img class=\"brands__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"viewsonic\"><img class=\"brands__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"перейти\"></a>\r\n                        </li>\r\n                        <li class=\"swiper-slide brands__swiper-slide\">\r\n                          <a href=\"#\" class=\"link-btn brands__link-btn\"><img class=\"brands__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"bosch\"><img class=\"brands__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"перейти\"></a>\r\n                        </li>\r\n                        <li class=\"swiper-slide brands__swiper-slide\">\r\n                          <a href=\"#\" class=\"link-btn brands__link-btn\"><img class=\"brands__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"hp\"><img class=\"brands__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"перейти\"></a>\r\n                        </li>\r\n                        <li class=\"swiper-slide brands__swiper-slide\">\r\n                          <a href=\"#\" class=\"link-btn brands__link-btn\"><img class=\"brands__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"acer\"><img class=\"brands__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"перейти\"></a>\r\n                        </li>\r\n                        <li class=\"swiper-slide brands__swiper-slide\">\r\n                          <a href=\"#\" class=\"link-btn brands__link-btn\"><img class=\"brands__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"sony\"><img class=\"brands__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"перейти\"></a>\r\n                        </li>\r\n                        <li class=\"swiper-slide brands__swiper-slide\">\r\n                          <a href=\"#\" class=\"link-btn brands__link-btn\"><img class=\"brands__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"lenovo\"><img class=\"brands__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"перейти\"></a>\r\n                        </li>\r\n                        <li class=\"swiper-slide brands__swiper-slide\">\r\n                          <a href=\"#\" class=\"link-btn brands__link-btn\"><img class=\"brands__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"samsung\"><img class=\"brands__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"перейти\"></a>\r\n                        </li>\r\n                        <li class=\"swiper-slide brands__swiper-slide\">\r\n                          <a href=\"#\" class=\"link-btn brands__link-btn\"><img class=\"brands__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"apple\"><img class=\"brands__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"перейти\"></a>\r\n                        </li>\r\n                      </ul>\r\n                      <div id=\"brandsSwiperPagination\" class=\"swiper-pagination brands__swiper-pagination\"></div>\r\n                    </div>\r\n                    <button id=\"brandsMoreBtn\" class=\"more-btn brands__more-btn\">\r\n                        <Span id=\"brandsMoreBtnTxt\">Показать все</Span>\r\n                    </button>\r\n                </section>\r\n                <section class=\"tech-types\">\r\n                    <h2 id=\"techTypesTitle\" class=\"title tech-types__title\">\r\n                      Ремонт различных видов техники\r\n                    </h2>\r\n                    <div id=\"techTypesSwiperContainer\" class=\"swiper-container tech-types__swiper-container\">\r\n                      <ul id=\"techTypesSwiperWrapper\" class=\"swiper-wrapper tech-types__swiper-wrapper\">\r\n                        <li class=\"swiper-slide tech-types__swiper-slide\">\r\n                          <a href=\"#\" class=\"link-btn tech-types__link-btn\">Ремонт ноутбуков </a>\r\n                        </li>\r\n                        <li class=\"swiper-slide tech-types__swiper-slide\">\r\n                          <a href=\"#\" class=\"link-btn tech-types__link-btn\">Ремонт планшетов </a>\r\n                        </li>\r\n                        <li class=\"swiper-slide tech-types__swiper-slide\">\r\n                          <a href=\"#\" class=\"link-btn tech-types__link-btn\">Ремонт ПК </a>\r\n                        </li>\r\n                        <li class=\"swiper-slide tech-types__swiper-slide\">\r\n                          <a href=\"#\" class=\"link-btn tech-types__link-btn\">Ремонт  мониторов </a>\r\n                        </li>\r\n                        <li class=\"swiper-slide tech-types__swiper-slide\">\r\n                          <a href=\"#\" class=\"link-btn tech-types__link-btn\">Ремонт ноутбуков</a>\r\n                        </li>\r\n                        <li class=\"swiper-slide tech-types__swiper-slide\">\r\n                          <a href=\"#\" class=\"link-btn tech-types__link-btn\">Ремонт планшетов</a>\r\n                        </li>\r\n                        <li class=\"swiper-slide tech-types__swiper-slide\">\r\n                          <a href=\"#\" class=\"link-btn tech-types__link-btn\">Ремонт ПК</a>\r\n                        </li>\r\n                        <li class=\"swiper-slide tech-types__swiper-slide\">\r\n                          <a href=\"#\" class=\"link-btn tech-types__link-btn\">Ремонт  мониторов</a>\r\n                        </li>\r\n                        <li class=\"swiper-slide tech-types__swiper-slide\">\r\n                          <a href=\"#\" class=\"link-btn tech-types__link-btn\">Ремонт ноутбуков</a>\r\n                        </li>\r\n                      </ul>\r\n                      <div id=\"techTypesSwiperPagination\" class=\"swiper-pagination tech-types__swiper-pagination\"></div>\r\n                    </div>\r\n                    <button id=\"techTypesMoreBtn\" class=\"more-btn tech-types__more-btn\">\r\n                        <Span id=\"techTypesMoreBtnTxt\">Показать все</Span>\r\n                    </button>\r\n                </section>\r\n                <section class=\"prices\">\r\n                  <h2 id=\"pricesTitle\" class=\"title prices__title\">\r\n                    Цены на услуги\r\n                  </h2>\r\n                  <table id=\"pricesSwiperContainer\" class=\"swiper-container prices__swiper-container\">\r\n                    <caption class=\"prices__explanation\">\r\n                      Все цены указаны с учетом НДС. Стоимость ремонта указана на единичную услугу. Для получения коммерческого предложения на постоянное обслуживание, оставьте заявку.\r\n                    </caption>\r\n                    <thead class=\"prices__table-header\">\r\n                      <tr>\r\n                        <th class=\"prices__head-cell\">Ремонтные услуги</th>\r\n                        <th class=\"prices__head-cell\">Цена</th>\r\n                        <th class=\"prices__head-cell\">Срок</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody id=\"pricesSwiperWrapper\" class=\"swiper-wrapper prices__swiper-wrapper\">\r\n                      <tr class=\"swiper-slide prices__swiper-slide\">\r\n                        <td class=\"prices__cell prices__cell--ltc\">\r\n                          <span class=\"prices__cell-header\">Ремонтные услуги</span>\r\n                          <span class=\"prices__cell-content\">Диагностика</span>\r\n                        </td>\r\n                        <td class=\"prices__cell\">\r\n                          <span class=\"prices__cell-header\">Цена</span>\r\n                          <span class=\"prices__cell-content\">Бесплатно</span>\r\n                        </td>\r\n                        <td class=\"prices__cell prices__cell--rtc\">\r\n                          <span class=\"prices__cell-header\">Срок</span>\r\n                          <span class=\"prices__cell-content\">30 мин</span>\r\n                          <button class=\"order-btn prices__order-btn\">Заказать</button>                          \r\n                        </td>                        \r\n                      </tr>\r\n                      <tr class=\"swiper-slide prices__swiper-slide\">\r\n                        <td class=\"prices__cell\">\r\n                          <span class=\"prices__cell-header\">Ремонтные услуги</span>\r\n                          <span class=\"prices__cell-content\">Замена дисплея</span>\r\n                        </td>\r\n                        <td class=\"prices__cell\">\r\n                          <span class=\"prices__cell-header\">Цена</span>\r\n                          <span class=\"prices__cell-content\">1 000 ₽</span>\r\n                        </td>\r\n                        <td class=\"prices__cell\">\r\n                          <span class=\"prices__cell-header\">Срок</span>\r\n                          <span class=\"prices__cell-content\">30-120 мин</span>\r\n                          <button class=\"order-btn prices__order-btn\">Заказать</button>                          \r\n                        </td>                        \r\n                      </tr>\r\n                      <tr class=\"swiper-slide prices__swiper-slide\">\r\n                        <td class=\"prices__cell\">\r\n                          <span class=\"prices__cell-header\">Ремонтные услуги</span>\r\n                          <span class=\"prices__cell-content\">Замена полифонического динамика</span>\r\n                        </td>\r\n                        <td class=\"prices__cell\">\r\n                          <span class=\"prices__cell-header\">Цена</span>\r\n                          <span class=\"prices__cell-content\">1 000 ₽</span>\r\n                        </td>\r\n                        <td class=\"prices__cell\">\r\n                          <span class=\"prices__cell-header\">Срок</span>\r\n                          <span class=\"prices__cell-content\">30-120 мин</span>\r\n                          <button class=\"order-btn prices__order-btn\">Заказать</button>                          \r\n                        </td>                        \r\n                      </tr>\r\n                      <tr class=\"swiper-slide prices__swiper-slide\">\r\n                        <td class=\"prices__cell\">\r\n                          <span class=\"prices__cell-header\">Ремонтные услуги</span>\r\n                          <span class=\"prices__cell-content\">Тестирование с выдачей технического заключения</span>\r\n                        </td>\r\n                        <td class=\"prices__cell\">\r\n                          <span class=\"prices__cell-header\">Цена</span>\r\n                          <span class=\"prices__cell-content\">1 000 ₽</span>\r\n                        </td>\r\n                        <td class=\"prices__cell\">\r\n                          <span class=\"prices__cell-header\">Срок</span>\r\n                          <span class=\"prices__cell-content\">30-120 мин</span>\r\n                          <button class=\"order-btn prices__order-btn\">Заказать</button>                          \r\n                        </td>                        \r\n                      </tr>\r\n                      <tr class=\"swiper-slide prices__swiper-slide\">\r\n                        <td class=\"prices__cell prices__cell--lbc\">\r\n                          <span class=\"prices__cell-header\">Ремонтные услуги</span>\r\n                          <span class=\"prices__cell-content\">Замена программного обеспечения</span>\r\n                        </td>\r\n                        <td class=\"prices__cell\">\r\n                          <span class=\"prices__cell-header\">Цена</span>\r\n                          <span class=\"prices__cell-content\">1 000 ₽</span>\r\n                        </td>\r\n                        <td class=\"prices__cell prices__cell--rbc\">\r\n                          <span class=\"prices__cell-header\">Срок</span>\r\n                          <span class=\"prices__cell-content\">30-120 мин</span>\r\n                          <button class=\"order-btn prices__order-btn\">Заказать</button>                          \r\n                        </td>                        \r\n                      </tr>\r\n                    </tbody>\r\n                    <div id=\"pricesSwiperPagination\" class=\"swiper-pagination prices__swiper-pagination\"></div>\r\n                  </table>\r\n                  <a class=\"offer-link\" href=\"#\"><span class=\"offer-link__text\">Получить коммерческое предложение</span></a>\r\n                </section>\r\n            </main>\r\n            <footer class=\"info\">\r\n              <p class=\"own-n-dev\">\r\n                © 2019 <a href=\"#\" class=\"link info__link\">CPS</a> <br>\r\n                Разработано командой <a href=\"#\" class=\"link info__link\">Apesong</a> \r\n              </p>\r\n              <a href=\"#\" class=\"link info__link privacy-policy\">Политика конфиденциальности</a>\r\n              <p class=\"offer\">Информация, размещенная на данной странице, не является публичной офертой</p>\r\n            </footer>\r\n        </div>\r\n        <div id=\"upenderBlurOverlay\" class=\"blur-overlay upender__blur-overlay\"></div>\r\n        <div id=\"modalBlurOverlay\" class=\"blur-overlay upender__blur-overlay\"></div>\r\n        <section id=\"feedback\" class=\"feedback feedback--hidden\">\r\n          <h3 class=\"feedback__title\">Обратная связь</h3>\r\n          <form action=\"#\" class=\"feedback__form\">\r\n            <input class=\"feedback__input\" name=\"name\" required placeholder=\"Имя\" type=\"text\">\r\n            <input class=\"feedback__input\" name=\"phone\" required placeholder=\"Телефон\" type=\"tel\">\r\n            <input class=\"feedback__input\" name=\"email\" required placeholder=\"Электронная почта\" type=\"email\">\r\n            <textarea class=\"feedback__mess\" name=\"message\" placeholder=\"Сообщение\" id=\"feedbackMess\" rows=\"5\"></textarea>\r\n            <p class=\"feedback__info\">\r\n              Нажимая “отправить”, вы даете согласие на <span class=\"feedback__imp\">обработку персональных данных</span>\r\n              и соглашаетесь с нашей <a href=\"#\" class=\"feedback__link\">политикой конфиденциальности</a>\r\n            </p>\r\n            <button class=\"feedback__btn\">ОТПРАВИТЬ</button>\r\n          </form>          \r\n          <button id=\"closeFeedback\" class=\"close-btn feedback__close-btn\">\r\n            <span class=\"close-btn__line\"></span>\r\n            <span class=\"close-btn__line\"></span>\r\n          </button>\r\n        </section>\r\n        <section id=\"callback\" class=\"callback callback--hidden\">\r\n          <h3 class=\"callback__title\">Заказать звонок</h3>\r\n          <form action=\"#\" class=\"callback__form\">\r\n            <input class=\"callback__input\" name=\"phone\" required placeholder=\"Телефон\" type=\"tel\">\r\n            <p class=\"callback__info\">\r\n              Нажимая “отправить”, вы даете согласие на <span class=\"callback__imp\">обработку персональных данных</span>\r\n              и соглашаетесь с нашей <a href=\"#\" class=\"callback__link\">политикой конфиденциальности</a>\r\n            </p>\r\n            <button class=\"callback__btn\">ОТПРАВИТЬ</button>\r\n          </form>          \r\n          <button id=\"closeCallback\" class=\"close-btn callback__close-btn\">\r\n            <span class=\"close-btn__line\"></span>\r\n            <span class=\"close-btn__line\"></span>\r\n          </button>\r\n        </section>\r\n\r\n    </div>\r\n    <" + "script src=\"https://unpkg.com/swiper/swiper-bundle.min.js\"><" + "/script>\r\n</body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; };
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) });

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
  defineProperty(
    GeneratorFunctionPrototype,
    "constructor",
    { value: GeneratorFunction, configurable: true }
  );
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    defineProperty(this, "_invoke", { value: enqueue });
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method;
    var method = delegate.iterator[methodName];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method, or a missing .next mehtod, always terminate the
      // yield* loop.
      context.delegate = null;

      // Note: ["return"] must be used for ES3 parsing compatibility.
      if (methodName === "throw" && delegate.iterator["return"]) {
        // If the delegate iterator has a return method, give it a
        // chance to clean up.
        context.method = "return";
        context.arg = undefined;
        maybeInvokeDelegate(delegate, context);

        if (context.method === "throw") {
          // If maybeInvokeDelegate(context) changed context.method from
          // "return" to "throw", let that override the TypeError below.
          return ContinueSentinel;
        }
      }
      if (methodName !== "return") {
        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a '" + methodName + "' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(val) {
    var object = Object(val);
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/group-css-media-queries-loader/lib/index.js!../node_modules/resolve-url-loader/index.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/TTLakes-Bold.eot":
/*!************************************!*\
  !*** ./src/fonts/TTLakes-Bold.eot ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/TTLakes-Bold.eot";

/***/ }),

/***/ "./src/fonts/TTLakes-Bold.ttf":
/*!************************************!*\
  !*** ./src/fonts/TTLakes-Bold.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/TTLakes-Bold.ttf";

/***/ }),

/***/ "./src/fonts/TTLakes-Bold.woff":
/*!*************************************!*\
  !*** ./src/fonts/TTLakes-Bold.woff ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/TTLakes-Bold.woff";

/***/ }),

/***/ "./src/fonts/TTLakes-Medium.eot":
/*!**************************************!*\
  !*** ./src/fonts/TTLakes-Medium.eot ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/TTLakes-Medium.eot";

/***/ }),

/***/ "./src/fonts/TTLakes-Medium.ttf":
/*!**************************************!*\
  !*** ./src/fonts/TTLakes-Medium.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/TTLakes-Medium.ttf";

/***/ }),

/***/ "./src/fonts/TTLakes-Medium.woff":
/*!***************************************!*\
  !*** ./src/fonts/TTLakes-Medium.woff ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/TTLakes-Medium.woff";

/***/ }),

/***/ "./src/fonts/TTLakes-Regular.eot":
/*!***************************************!*\
  !*** ./src/fonts/TTLakes-Regular.eot ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/TTLakes-Regular.eot";

/***/ }),

/***/ "./src/fonts/TTLakes-Regular.ttf":
/*!***************************************!*\
  !*** ./src/fonts/TTLakes-Regular.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/TTLakes-Regular.ttf";

/***/ }),

/***/ "./src/fonts/TTLakes-Regular.woff":
/*!****************************************!*\
  !*** ./src/fonts/TTLakes-Regular.woff ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/TTLakes-Regular.woff";

/***/ }),

/***/ "./src/img/acer.svg":
/*!**************************!*\
  !*** ./src/img/acer.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/acer.svg";

/***/ }),

/***/ "./src/img/apple.svg":
/*!***************************!*\
  !*** ./src/img/apple.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/apple.svg";

/***/ }),

/***/ "./src/img/bosch.svg":
/*!***************************!*\
  !*** ./src/img/bosch.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/bosch.svg";

/***/ }),

/***/ "./src/img/call.svg":
/*!**************************!*\
  !*** ./src/img/call.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/call.svg";

/***/ }),

/***/ "./src/img/cps.jpg":
/*!*************************!*\
  !*** ./src/img/cps.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/cps.jpg";

/***/ }),

/***/ "./src/img/go.svg":
/*!************************!*\
  !*** ./src/img/go.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/go.svg";

/***/ }),

/***/ "./src/img/goside.svg":
/*!****************************!*\
  !*** ./src/img/goside.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/goside.svg";

/***/ }),

/***/ "./src/img/hp.svg":
/*!************************!*\
  !*** ./src/img/hp.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/hp.svg";

/***/ }),

/***/ "./src/img/lenovo.svg":
/*!****************************!*\
  !*** ./src/img/lenovo.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/lenovo.svg";

/***/ }),

/***/ "./src/img/logo.svg":
/*!**************************!*\
  !*** ./src/img/logo.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/logo.svg";

/***/ }),

/***/ "./src/img/message.svg":
/*!*****************************!*\
  !*** ./src/img/message.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/message.svg";

/***/ }),

/***/ "./src/img/more-btn.svg":
/*!******************************!*\
  !*** ./src/img/more-btn.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/more-btn.svg";

/***/ }),

/***/ "./src/img/more.svg":
/*!**************************!*\
  !*** ./src/img/more.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/more.svg";

/***/ }),

/***/ "./src/img/placeholder.jpg":
/*!*********************************!*\
  !*** ./src/img/placeholder.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/placeholder.jpg";

/***/ }),

/***/ "./src/img/profile.svg":
/*!*****************************!*\
  !*** ./src/img/profile.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/profile.svg";

/***/ }),

/***/ "./src/img/samsung.svg":
/*!*****************************!*\
  !*** ./src/img/samsung.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/samsung.svg";

/***/ }),

/***/ "./src/img/search.svg":
/*!****************************!*\
  !*** ./src/img/search.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/search.svg";

/***/ }),

/***/ "./src/img/service.svg":
/*!*****************************!*\
  !*** ./src/img/service.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/service.svg";

/***/ }),

/***/ "./src/img/sony.svg":
/*!**************************!*\
  !*** ./src/img/sony.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/sony.svg";

/***/ }),

/***/ "./src/img/status.svg":
/*!****************************!*\
  !*** ./src/img/status.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/status.svg";

/***/ }),

/***/ "./src/img/viewsonic.svg":
/*!*******************************!*\
  !*** ./src/img/viewsonic.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/viewsonic.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _js_menuBtn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/menuBtn.js */ "./src/js/menuBtn.js");
/* harmony import */ var _js_menuBtn_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_menuBtn_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_moreBtn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/moreBtn.js */ "./src/js/moreBtn.js");
/* harmony import */ var _js_moreBtn_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_moreBtn_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_feedbackModal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/feedbackModal.js */ "./src/js/feedbackModal.js");
/* harmony import */ var _js_feedbackModal_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_feedbackModal_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_callbackModal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/callbackModal.js */ "./src/js/callbackModal.js");
/* harmony import */ var _js_callbackModal_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_callbackModal_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _js_sliderInit_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/sliderInit.js */ "./src/js/sliderInit.js");
/* harmony import */ var _js_sliderInit_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_js_sliderInit_js__WEBPACK_IMPORTED_MODULE_7__);








})();

/******/ })()
;
//# sourceMappingURL=main.2dc75fbaf48ee8183c47.js.map