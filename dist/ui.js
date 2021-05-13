/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ui.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Footer; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\n\nclass Footer extends HTMLElement {\n  constructor() {\n    super();\n    this.attachShadow({ mode: \"open\" });\n\n    const template = document.createElement(\"template\");\n    template.innerHTML = _utils__WEBPACK_IMPORTED_MODULE_0__[\"html\"]`\n      <div id=\"container\" part=\"container\">\n        <div class=\"icons\">\n          <a href=\"https://www.facebook.com/block0space\" target=\"_blank\"\n            ><img src=\"assets/imgs/fb.png\"\n          /></a>\n          <a href=\"https://www.instagram.com/block0space/\" target=\"_blank\"\n            ><img src=\"assets/imgs/insta.png\"\n          /></a>\n          <a href=\"https://twitter.com/block0space\" target=\"_blank\"\n            ><img src=\"assets/imgs/twitter.png\"\n          /></a>\n          <a href=\"https://vm.tiktok.com/ZMexL6cqY/\" target=\"_blank\"\n            ><img src=\"assets/imgs/tiktok.png\"\n          /></a>\n        </div>\n        <div class=\"text\">END OF BLOCK ZERO</div>\n        <div class=\"tm\">2021 invi & codercat</div>\n      </div>\n    `;\n\n    const styleString = _utils__WEBPACK_IMPORTED_MODULE_0__[\"css\"]`\n      @font-face {\n        font-family: AbolitionRegular;\n        src: url(assets/fonts/Abolition-Regular.ttf);\n      }\n\n      @font-face {\n        font-family: Lato;\n        src: url(assets/fonts/Lato-Regular.ttf);\n      }\n\n      #container {\n        height: 140px;\n        width: 100vw;\n        background-color: black;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n      }\n\n      #container img {\n        width: 35px;\n        height: 35px;\n      }\n\n      .icons {\n        display: flex;\n      }\n\n      .icons * {\n        margin: 5px;\n      }\n\n      .text {\n        font-family: AbolitionRegular;\n        font-size: 20px;\n        letter-spacing: 9px;\n        color: white;\n        margin-top: 3px;\n      }\n\n      .tm {\n        color: #717171;\n        font-family: Lato;\n        font-size: 12px;\n        margin-top: 11px;\n      }\n    `;\n\n    const style = document.createElement(\"style\");\n    style.textContent = styleString;\n\n    this.shadowRoot.append(style, template.content.cloneNode(true));\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/Footer.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\n\nclass Header extends HTMLElement {\n  constructor() {\n    super();\n    this.attachShadow({ mode: \"open\" });\n\n    const template = document.createElement(\"template\");\n    template.innerHTML = `\n      <div id=\"title-container\" part=\"container\">\n        <a href=\"${\"https://codercatclub.github.io/block0-landing/\"}\">\n          <div id=\"title\">BLOCK ZERO</div>\n        </a>\n        <nav id=\"nav\">\n          <a href=\"projects.html\">projects</a>\n          <div class=\"nav-div\">|</div>\n          <a class=\"about\" href=\"#?s=about\">about us</a>\n          <div class=\"nav-div\">|</div>\n          <a href=\"news.html\">news</a>\n          <div class=\"nav-div\">|</div>\n          <a href=\"contacts.html\">contacts</a>\n        </nav>\n      </div>\n    `;\n\n    const tab = window.location.pathname.split(\"/\").pop();\n\n    const styleString = _utils__WEBPACK_IMPORTED_MODULE_0__[\"css\"]`\n      @font-face {\n        font-family: AbolitionRegular;\n        src: url(assets/fonts/Abolition-Regular.ttf);\n      }\n\n      @font-face {\n        font-family: Lato;\n        src: url(assets/fonts/Lato-Regular.ttf);\n      }\n\n      @font-face {\n        font-family: LatoBold;\n        src: url(assets/fonts/Lato-Bold.ttf);\n      }\n\n      #title {\n        font-family: AbolitionRegular;\n        font-size: 48px;\n        letter-spacing: 52px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin: 0;\n        text-align: center;\n      }\n\n      #title-container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n\n      nav {\n        display: flex;\n        margin-top: 40px;\n      }\n\n      nav a[href=\"<tab>\"] {\n        text-decoration: underline;\n      }\n\n      .nav-div {\n        margin: 0 10px 0 10px;\n        line-height: 1.6;\n      }\n\n      a {\n        text-decoration: none;\n        color: black;\n        font-family: Lato;\n        font-size: 20px;\n        letter-spacing: 5px;\n      }\n\n      nav a:nth-child(1) {\n        color: #e83731;\n        /* color: #c82d28; */\n      }\n\n      nav a:nth-child(3) {\n        color: #e2b422;\n        /* color: #bd9516; */\n      }\n\n      nav a:nth-child(5) {\n        color: #008bc5;\n        /* color: #0678a8; */\n      }\n\n      nav a:nth-child(7) {\n        color: #3da9a4;\n        /* color: #34918c; */\n      }\n\n      @media screen and (max-width: 768px) {\n        #title {\n          letter-spacing: 10px;\n        }\n\n        nav {\n          margin-top: 25px;\n        }\n\n        a {\n          text-decoration: none;\n          color: black;\n          font-family: Lato;\n          font-size: 18px;\n          letter-spacing:1px;\n        }\n      }\n    `;\n\n    const style = document.createElement(\"style\");\n    style.textContent = styleString[0].replace(\"<tab>\", tab);\n\n    this.shadowRoot.append(style, template.content.cloneNode(true));\n\n    const about = this.shadowRoot.querySelector('.about')\n\n    about.addEventListener('click', e => {\n      if (location.href !== \"https://codercatclub.github.io/block0-landing/\") {\n        location.href = `${\"https://codercatclub.github.io/block0-landing/\"}/#?s=about`;\n      };\n\n      const cam = document.querySelector('a-camera');\n\n      cam.components['scroll'].scrollToAbout();\n    });\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/Header.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Footer */ \"./src/components/Footer.js\");\n// Web components\n\n\n\n// Register web components\ncustomElements.define(\"header-section\", _components_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\ncustomElements.define(\"footer-section\", _components_Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n//# sourceURL=webpack:///./src/ui.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: html, css, lerp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"html\", function() { return html; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"css\", function() { return css; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lerp\", function() { return lerp; });\nconst html = strings => strings;\nconst css = strings => strings;\n\nfunction lerp (p1, p2, t) {\n  return p1 + (p2 - p1) * t;\n}\n\n//# sourceURL=webpack:///./src/utils/index.js?");

/***/ })

/******/ });