/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const burger = __webpack_require__(/*! ./module/burger.js */ \"./src/js/module/burger.js\");\nconst anim = __webpack_require__(/*! ./module/anim.js */ \"./src/js/module/anim.js\");\nconst scroll = __webpack_require__(/*! ./module/scroll.js */ \"./src/js/module/scroll.js\");\n\n//# sourceURL=webpack://WorkDirectory/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/anim.js":
/*!*******************************!*\
  !*** ./src/js/module/anim.js ***!
  \*******************************/
/***/ (function() {

eval("AOS.init();\n\nAOS.init({\n\t// Global settings:\n\tdisable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function\n\tstartEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on\n\tinitClassName: 'aos-init', // class applied after initialization\n\tanimatedClassName: 'aos-animate', // class applied on animation\n\tuseClassNames: false, // if true, will add content of `data-aos` as classes on scroll\n\tdisableMutationObserver: false, // disables automatic mutations' detections (advanced)\n\tdebounceDelay: 50, // the delay on debounce used while resizing window (advanced)\n\tthrottleDelay: 99, // the delay on throttle used while scrolling the page (advanced)\n\n\n\t// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:\n\toffset: 120, // offset (in px) from the original trigger point\n\tdelay: 0, // values from 0 to 3000, with step 50ms\n\tduration: 400, // values from 0 to 3000, with step 50ms\n\teasing: 'ease', // default easing for AOS animations\n\tonce: true, // whether animation should happen only once - while scrolling down\n\tmirror: false, // whether elements should animate out while scrolling past them\n\tanchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation\n\n});\n\n//# sourceURL=webpack://WorkDirectory/./src/js/module/anim.js?");

/***/ }),

/***/ "./src/js/module/burger.js":
/*!*********************************!*\
  !*** ./src/js/module/burger.js ***!
  \*********************************/
/***/ (function() {

eval("const burgerTrigger = document.querySelectorAll(\".burger__trigger\");\nconst burgerBody = document.querySelectorAll(\".burger__body\");\nlet htmlBody = document.getElementsByTagName(\"body\");\nlet subMenu = document.querySelectorAll(\".header__nav-sub-menu\")\nlet navItem = document.querySelectorAll(\".header__nav-item\")\nconst style = \"active\";\nconst contentWidth = \"100vh\";\n\n\nburgerTrigger.forEach((item, i) => {\n    burgerBody[i].style.height = \"0\";\n    item.addEventListener(\"click\", () => {\n        if (!(style === \"none\")) { item.classList.toggle(style) };\n        item.classList.contains(\"active\")\n            ? htmlBody[0].style.overflow = \"hidden\"\n            : htmlBody[0].style.overflowY = \"scroll\";\n        burgerBody[i].style.height === \"0px\"\n            ? burgerBody[i].style.height = contentWidth\n            : burgerBody[i].style.height = \"0\";\n    });\n    window.addEventListener(\"resize\", () => {\n        let pageWidth = document.documentElement.scrollWidth;\n        if (pageWidth >= 1000) {\n            burgerBody[i].style.height = \"0\";\n            item.classList.remove(\"active\")\n        }\n        if (!(item.classList.contains(\"active\"))) htmlBody[0].style.overflowY = \"scroll\";\n\n    })\n});\nnavItem.forEach((nav) => {\n    nav.addEventListener(\"click\", (event) => {\n        let currentItem = event.target.nextElementSibling\n        if (typeof (currentItem) != 'undefined' && currentItem != null) { currentItem.classList.toggle(\"sub-menu-active\"); }\n    })\n})\n\n\n//# sourceURL=webpack://WorkDirectory/./src/js/module/burger.js?");

/***/ }),

/***/ "./src/js/module/scroll.js":
/*!*********************************!*\
  !*** ./src/js/module/scroll.js ***!
  \*********************************/
/***/ (function() {

eval("const smoothLinks = document.querySelectorAll('a[href^=\"#\"]');\nfor (let smoothLink of smoothLinks) {\n\tsmoothLink.addEventListener('click', function (e) {\n\t\te.preventDefault();\n\t\tconst id = smoothLink.getAttribute('href');\n\n\t\tdocument.querySelector(id).scrollIntoView({\n\t\t\tbehavior: 'smooth',\n\t\t\tblock: 'start'\n\t\t});\n\t});\n};\n\n//# sourceURL=webpack://WorkDirectory/./src/js/module/scroll.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;