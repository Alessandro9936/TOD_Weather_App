/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --light-gold: #ffe1a5;\n  --strong-gold: #fbd58a;\n  --white: #fff;\n  --gray-bg: #292929;\n  --gray-btn: #6f6f6f;\n  --gray-text: #aaaaaa;\n  --brown-text: #554221;\n  --general-border: 10px;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 2.6rem;\n  letter-spacing: 0.5px;\n  color: var(--brown-text);\n}\n\nmain {\n  height: 100vh;\n  width: 100vw;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(4, 1fr);\n  grid-template-areas:\n    \"a b\"\n    \"a b\"\n    \"a b\"\n    \"c c\";\n\n  height: 70%;\n  width: 55%;\n\n  background-color: var(--gray-bg);\n\n  border-radius: calc(var(--general-border) * 2);\n}\n/* DAY SPECIFICS */\n\n.day-specifics {\n  grid-area: a;\n\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: 1fr 6fr;\n  align-items: center;\n\n  column-gap: 2rem;\n\n  padding: 3rem;\n\n  color: white;\n}\n\n.temps {\n  display: flex;\n\n  height: 5.6rem;\n  width: 12.8rem;\n\n  overflow: hidden;\n\n  background-color: var(--gray-btn);\n\n  border-radius: var(--general-border);\n}\n\n.btn {\n  height: 100%;\n  width: 50%;\n\n  background-color: inherit;\n\n  border: none;\n\n  font-size: 2.6rem;\n  color: var(--white);\n\n  cursor: pointer;\n}\n\n.btn-focus {\n  z-index: 1;\n\n  font-weight: bold;\n  color: black;\n\n  background-color: #ffcc65;\n  border-radius: var(--general-border);\n\n  box-shadow: 0rem 0rem 2rem 0rem rgb(41, 41, 41, 0.5);\n}\n\n.input-container {\n  position: relative;\n}\n\n.input-search {\n  height: 5.6rem;\n  width: 80%;\n\n  padding-left: 2rem;\n\n  border: none;\n  border-radius: var(--general-border);\n  background-color: rgb(255, 255, 255, 0.1);\n\n  font-size: 2.4rem;\n  font-family: inherit;\n  color: var(--white);\n\n  outline: none;\n}\n\n.btn-search {\n  position: absolute;\n  width: 6rem;\n  height: 100%;\n\n  right: 20%;\n  border: none;\n  border-radius: var(--general-border);\n  background-color: rgb(255, 255, 255, 0.2);\n\n  cursor: pointer;\n}\n\n.btn-search svg {\n  color: var(--white);\n  height: 3rem;\n  width: 3rem;\n}\n\n.btn-search:hover {\n  animation-duration: 0.5s;\n  animation-fill-mode: forwards;\n  animation-name: fadeinday;\n}\n\n.btn-search:hover svg {\n  color: var(--gray-bg);\n}\n\n.desc-container {\n  grid-column: 1 / -1;\n\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n\n  font-size: 3rem;\n  font-weight: bold;\n\n  transform: translateY(-10%);\n\n  opacity: 0%;\n}\n\n.desc-container div {\n  display: flex;\n  gap: 2rem;\n}\n\n.desc-container div p {\n  font-weight: normal;\n}\n\n/* ------------------------------------- */\n\n/* DAY OVERVIEW */\n\n.day-overview {\n  grid-area: b;\n  padding: 4.8rem 6.4rem;\n\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: center;\n  gap: 1.6rem;\n\n  color: var(--white);\n}\n\n.day-overview span {\n  display: inline-block;\n}\n\n.day-overview h1 {\n  font-weight: lighter;\n  font-size: 14rem;\n  letter-spacing: -4px;\n}\n\n.day-overview h2 {\n  letter-spacing: 2px;\n  font-size: 4rem;\n}\n\n.day-overview p {\n  color: var(--gray-text);\n}\n\n.day-overview svg {\n  position: absolute;\n  height: 16rem;\n  width: 16rem;\n\n  bottom: 20%;\n  left: 15%;\n}\n\n/* DAYS PREVIEW */\n\n.days {\n  background-color: var(--light-gold);\n\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  grid-template-rows: 1fr;\n  grid-area: c;\n\n  overflow: hidden;\n  border-bottom-left-radius: var(--general-border);\n  border-bottom-right-radius: var(--general-border);\n}\n\n.day {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2.6rem;\n\n  justify-content: center;\n  background-color: var(--light-gold);\n  cursor: pointer;\n}\n\n.day:hover {\n  animation-duration: 0.5s;\n  animation-fill-mode: forwards;\n  animation-name: fadeinday;\n}\n\n.day p:first-of-type {\n  font-weight: 600;\n  font-size: 2.6rem;\n}\n\n.day svg {\n  height: 5rem;\n  width: 5rem;\n  font-weight: lighter;\n}\n\n.day1 {\n  background-color: var(--strong-gold);\n  box-shadow: 0rem 0rem 1.3rem 0rem rgb(41, 41, 41, 0.3);\n  z-index: 0;\n\n  border-radius: var(--general-border);\n}\n\n.fade-content {\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n  animation-name: fadeincont;\n}\n\n/* ------------------------------------- */\n\n/* ANIMATIONS */\n\n@keyframes fadeincont {\n  0% {\n    opacity: 0%;\n  }\n\n  100% {\n    opacity: 100%;\n  }\n}\n\n@keyframes fadeinday {\n  0% {\n    background-color: inherit;\n  }\n  100% {\n    background-color: var(--strong-gold);\n    box-shadow: 0rem 0rem 1.3rem 0rem rgb(41, 41, 41, 0.3);\n    z-index: 0;\n\n    border-radius: var(--general-border);\n  }\n}\n\n/* ------------------------------------- */\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --light-gold: #ffe1a5;\n  --strong-gold: #fbd58a;\n  --white: #fff;\n  --gray-bg: #292929;\n  --gray-btn: #6f6f6f;\n  --gray-text: #aaaaaa;\n  --brown-text: #554221;\n  --general-border: 10px;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 2.6rem;\n  letter-spacing: 0.5px;\n  color: var(--brown-text);\n}\n\nmain {\n  height: 100vh;\n  width: 100vw;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(4, 1fr);\n  grid-template-areas:\n    \"a b\"\n    \"a b\"\n    \"a b\"\n    \"c c\";\n\n  height: 70%;\n  width: 55%;\n\n  background-color: var(--gray-bg);\n\n  border-radius: calc(var(--general-border) * 2);\n}\n/* DAY SPECIFICS */\n\n.day-specifics {\n  grid-area: a;\n\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: 1fr 6fr;\n  align-items: center;\n\n  column-gap: 2rem;\n\n  padding: 3rem;\n\n  color: white;\n}\n\n.temps {\n  display: flex;\n\n  height: 5.6rem;\n  width: 12.8rem;\n\n  overflow: hidden;\n\n  background-color: var(--gray-btn);\n\n  border-radius: var(--general-border);\n}\n\n.btn {\n  height: 100%;\n  width: 50%;\n\n  background-color: inherit;\n\n  border: none;\n\n  font-size: 2.6rem;\n  color: var(--white);\n\n  cursor: pointer;\n}\n\n.btn-focus {\n  z-index: 1;\n\n  font-weight: bold;\n  color: black;\n\n  background-color: #ffcc65;\n  border-radius: var(--general-border);\n\n  box-shadow: 0rem 0rem 2rem 0rem rgb(41, 41, 41, 0.5);\n}\n\n.input-container {\n  position: relative;\n}\n\n.input-search {\n  height: 5.6rem;\n  width: 80%;\n\n  padding-left: 2rem;\n\n  border: none;\n  border-radius: var(--general-border);\n  background-color: rgb(255, 255, 255, 0.1);\n\n  font-size: 2.4rem;\n  font-family: inherit;\n  color: var(--white);\n\n  outline: none;\n}\n\n.btn-search {\n  position: absolute;\n  width: 6rem;\n  height: 100%;\n\n  right: 20%;\n  border: none;\n  border-radius: var(--general-border);\n  background-color: rgb(255, 255, 255, 0.2);\n\n  cursor: pointer;\n}\n\n.btn-search svg {\n  color: var(--white);\n  height: 3rem;\n  width: 3rem;\n}\n\n.btn-search:hover {\n  animation-duration: 0.5s;\n  animation-fill-mode: forwards;\n  animation-name: fadeinday;\n}\n\n.btn-search:hover svg {\n  color: var(--gray-bg);\n}\n\n.desc-container {\n  grid-column: 1 / -1;\n\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n\n  font-size: 3rem;\n  font-weight: bold;\n\n  transform: translateY(-10%);\n\n  opacity: 0%;\n}\n\n.desc-container div {\n  display: flex;\n  gap: 2rem;\n}\n\n.desc-container div p {\n  font-weight: normal;\n}\n\n/* ------------------------------------- */\n\n/* DAY OVERVIEW */\n\n.day-overview {\n  grid-area: b;\n  padding: 4.8rem 6.4rem;\n\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: center;\n  gap: 1.6rem;\n\n  color: var(--white);\n}\n\n.day-overview span {\n  display: inline-block;\n}\n\n.day-overview h1 {\n  font-weight: lighter;\n  font-size: 14rem;\n  letter-spacing: -4px;\n}\n\n.day-overview h2 {\n  letter-spacing: 2px;\n  font-size: 4rem;\n}\n\n.day-overview p {\n  color: var(--gray-text);\n}\n\n.day-overview svg {\n  position: absolute;\n  height: 16rem;\n  width: 16rem;\n\n  bottom: 20%;\n  left: 15%;\n}\n\n/* DAYS PREVIEW */\n\n.days {\n  background-color: var(--light-gold);\n\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  grid-template-rows: 1fr;\n  grid-area: c;\n\n  overflow: hidden;\n  border-bottom-left-radius: var(--general-border);\n  border-bottom-right-radius: var(--general-border);\n}\n\n.day {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2.6rem;\n\n  justify-content: center;\n  background-color: var(--light-gold);\n  cursor: pointer;\n}\n\n.day:hover {\n  animation-duration: 0.5s;\n  animation-fill-mode: forwards;\n  animation-name: fadeinday;\n}\n\n.day p:first-of-type {\n  font-weight: 600;\n  font-size: 2.6rem;\n}\n\n.day svg {\n  height: 5rem;\n  width: 5rem;\n  font-weight: lighter;\n}\n\n.day1 {\n  background-color: var(--strong-gold);\n  box-shadow: 0rem 0rem 1.3rem 0rem rgb(41, 41, 41, 0.3);\n  z-index: 0;\n\n  border-radius: var(--general-border);\n}\n\n.fade-content {\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n  animation-name: fadeincont;\n}\n\n/* ------------------------------------- */\n\n/* ANIMATIONS */\n\n@keyframes fadeincont {\n  0% {\n    opacity: 0%;\n  }\n\n  100% {\n    opacity: 100%;\n  }\n}\n\n@keyframes fadeinday {\n  0% {\n    background-color: inherit;\n  }\n  100% {\n    background-color: var(--strong-gold);\n    box-shadow: 0rem 0rem 1.3rem 0rem rgb(41, 41, 41, 0.3);\n    z-index: 0;\n\n    border-radius: var(--general-border);\n  }\n}\n\n/* ------------------------------------- */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

/*
async function hallo() {
  const res = await fetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat=67.0522&lon=110.2437&exclude=minutely,hourly&appid=ab730ae7d0667fef9151fd3329107d0d"
  );
  const data = await res.json();
  console.log(data);
}
hallo();
*/

//day-specifics
//day-overview
//.fade-content

const a = document.querySelector(".desc-container");
window.addEventListener("load", () => {
  a.classList.add("fade-content");
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsTUFBTSxhQUFhLE1BQU0sV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLGNBQWMsWUFBWSxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLGFBQWEsWUFBWSxZQUFZLGNBQWMsV0FBVyxPQUFPLEtBQUssV0FBVyxZQUFZLFlBQVksWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsV0FBVyxhQUFhLFdBQVcsWUFBWSxjQUFjLGFBQWEsYUFBYSxjQUFjLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxXQUFXLFVBQVUsVUFBVSxZQUFZLGNBQWMsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxhQUFhLFdBQVcsWUFBWSxZQUFZLFVBQVUsYUFBYSxjQUFjLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLGFBQWEsY0FBYyxNQUFNLFVBQVUsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxhQUFhLE1BQU0sYUFBYSxXQUFXLFlBQVksYUFBYSxZQUFZLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFlBQVksWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxhQUFhLFlBQVksS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVB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QSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1saWdodC1nb2xkOiAjZmZlMWE1O1xcbiAgLS1zdHJvbmctZ29sZDogI2ZiZDU4YTtcXG4gIC0td2hpdGU6ICNmZmY7XFxuICAtLWdyYXktYmc6ICMyOTI5Mjk7XFxuICAtLWdyYXktYnRuOiAjNmY2ZjZmO1xcbiAgLS1ncmF5LXRleHQ6ICNhYWFhYWE7XFxuICAtLWJyb3duLXRleHQ6ICM1NTQyMjE7XFxuICAtLWdlbmVyYWwtYm9yZGVyOiAxMHB4O1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMi42cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgY29sb3I6IHZhcigtLWJyb3duLXRleHQpO1xcbn1cXG5cXG5tYWluIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJhIGJcXFwiXFxuICAgIFxcXCJhIGJcXFwiXFxuICAgIFxcXCJhIGJcXFwiXFxuICAgIFxcXCJjIGNcXFwiO1xcblxcbiAgaGVpZ2h0OiA3MCU7XFxuICB3aWR0aDogNTUlO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS1iZyk7XFxuXFxuICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWdlbmVyYWwtYm9yZGVyKSAqIDIpO1xcbn1cXG4vKiBEQVkgU1BFQ0lGSUNTICovXFxuXFxuLmRheS1zcGVjaWZpY3Mge1xcbiAgZ3JpZC1hcmVhOiBhO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDZmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBjb2x1bW4tZ2FwOiAycmVtO1xcblxcbiAgcGFkZGluZzogM3JlbTtcXG5cXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRlbXBzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuXFxuICBoZWlnaHQ6IDUuNnJlbTtcXG4gIHdpZHRoOiAxMi44cmVtO1xcblxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktYnRuKTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWdlbmVyYWwtYm9yZGVyKTtcXG59XFxuXFxuLmJ0biB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogNTAlO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG5cXG4gIGZvbnQtc2l6ZTogMi42cmVtO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0bi1mb2N1cyB7XFxuICB6LWluZGV4OiAxO1xcblxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogYmxhY2s7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYzY1O1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZ2VuZXJhbC1ib3JkZXIpO1xcblxcbiAgYm94LXNoYWRvdzogMHJlbSAwcmVtIDJyZW0gMHJlbSByZ2IoNDEsIDQxLCA0MSwgMC41KTtcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5pbnB1dC1zZWFyY2gge1xcbiAgaGVpZ2h0OiA1LjZyZW07XFxuICB3aWR0aDogODAlO1xcblxcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcblxcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZ2VuZXJhbC1ib3JkZXIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuXFxuICBmb250LXNpemU6IDIuNHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5idG4tc2VhcmNoIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA2cmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgcmlnaHQ6IDIwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWdlbmVyYWwtYm9yZGVyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjIpO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuLXNlYXJjaCBzdmcge1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbn1cXG5cXG4uYnRuLXNlYXJjaDpob3ZlciB7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlaW5kYXk7XFxufVxcblxcbi5idG4tc2VhcmNoOmhvdmVyIHN2ZyB7XFxuICBjb2xvcjogdmFyKC0tZ3JheS1iZyk7XFxufVxcblxcbi5kZXNjLWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJyZW07XFxuXFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcXG5cXG4gIG9wYWNpdHk6IDAlO1xcbn1cXG5cXG4uZGVzYy1jb250YWluZXIgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5kZXNjLWNvbnRhaW5lciBkaXYgcCB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogREFZIE9WRVJWSUVXICovXFxuXFxuLmRheS1vdmVydmlldyB7XFxuICBncmlkLWFyZWE6IGI7XFxuICBwYWRkaW5nOiA0LjhyZW0gNi40cmVtO1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMS42cmVtO1xcblxcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLmRheS1vdmVydmlldyBzcGFuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmRheS1vdmVydmlldyBoMSB7XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gIGZvbnQtc2l6ZTogMTRyZW07XFxuICBsZXR0ZXItc3BhY2luZzogLTRweDtcXG59XFxuXFxuLmRheS1vdmVydmlldyBoMiB7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4uZGF5LW92ZXJ2aWV3IHAge1xcbiAgY29sb3I6IHZhcigtLWdyYXktdGV4dCk7XFxufVxcblxcbi5kYXktb3ZlcnZpZXcgc3ZnIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTZyZW07XFxuICB3aWR0aDogMTZyZW07XFxuXFxuICBib3R0b206IDIwJTtcXG4gIGxlZnQ6IDE1JTtcXG59XFxuXFxuLyogREFZUyBQUkVWSUVXICovXFxuXFxuLmRheXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgZ3JpZC1hcmVhOiBjO1xcblxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLWdlbmVyYWwtYm9yZGVyKTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiB2YXIoLS1nZW5lcmFsLWJvcmRlcik7XFxufVxcblxcbi5kYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyLjZyZW07XFxuXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGF5OmhvdmVyIHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVpbmRheTtcXG59XFxuXFxuLmRheSBwOmZpcnN0LW9mLXR5cGUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMi42cmVtO1xcbn1cXG5cXG4uZGF5IHN2ZyB7XFxuICBoZWlnaHQ6IDVyZW07XFxuICB3aWR0aDogNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbn1cXG5cXG4uZGF5MSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdHJvbmctZ29sZCk7XFxuICBib3gtc2hhZG93OiAwcmVtIDByZW0gMS4zcmVtIDByZW0gcmdiKDQxLCA0MSwgNDEsIDAuMyk7XFxuICB6LWluZGV4OiAwO1xcblxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZ2VuZXJhbC1ib3JkZXIpO1xcbn1cXG5cXG4uZmFkZS1jb250ZW50IHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlaW5jb250O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogQU5JTUFUSU9OUyAqL1xcblxcbkBrZXlmcmFtZXMgZmFkZWluY29udCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZWluZGF5IHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdHJvbmctZ29sZCk7XFxuICAgIGJveC1zaGFkb3c6IDByZW0gMHJlbSAxLjNyZW0gMHJlbSByZ2IoNDEsIDQxLCA0MSwgMC4zKTtcXG4gICAgei1pbmRleDogMDtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tZ2VuZXJhbC1ib3JkZXIpO1xcbiAgfVxcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZOztFQUVaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxrQ0FBa0M7RUFDbEM7Ozs7U0FJTzs7RUFFUCxXQUFXO0VBQ1gsVUFBVTs7RUFFVixnQ0FBZ0M7O0VBRWhDLDhDQUE4QztBQUNoRDtBQUNBLGtCQUFrQjs7QUFFbEI7RUFDRSxZQUFZOztFQUVaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNC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SUFDdEQsVUFBVTs7SUFFVixvQ0FBb0M7RUFDdEM7QUFDRjs7QUFFQSwwQ0FBMENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1saWdodC1nb2xkOiAjZmZlMWE1O1xcbiAgLS1zdHJvbmctZ29sZDogI2ZiZDU4YTtcXG4gIC0td2hpdGU6ICNmZmY7XFxuICAtLWdyYXktYmc6ICMyOTI5Mjk7XFxuICAtLWdyYXktYnRuOiAjNmY2ZjZmO1xcbiAgLS1ncmF5LXRleHQ6ICNhYWFhYWE7XFxuICAtLWJyb3duLXRleHQ6ICM1NTQyMjE7XFxuICAtLWdlbmVyYWwtYm9yZGVyOiAxMHB4O1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMi42cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgY29sb3I6IHZhcigtLWJyb3duLXRleHQpO1xcbn1cXG5cXG5tYWluIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJhIGJcXFwiXFxuICAgIFxcXCJhIGJcXFwiXFxuICAgIFxcXCJhIGJcXFwiXFxuICAgIFxcXCJjIGNcXFwiO1xcblxcbiAgaGVpZ2h0OiA3MCU7XFxuICB3aWR0aDogNTUlO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS1iZyk7XFxuXFxuICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWdlbmVyYWwtYm9yZGVyKSAqIDIpO1xcbn1cXG4vKiBEQVkgU1BFQ0lGSUNTICovXFxuXFxuLmRheS1zcGVjaWZpY3Mge1xcbiAgZ3JpZC1hcmVhOiBhO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDZmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBjb2x1bW4tZ2FwOiAycmVtO1xcblxcbiAgcGFkZGluZzogM3JlbTtcXG5cXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRlbXBzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuXFxuICBoZWlnaHQ6IDUuNnJlbTtcXG4gIHdpZHRoOiAxMi44cmVtO1xcblxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktYnRuKTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWdlbmVyYWwtYm9yZGVyKTtcXG59XFxuXFxuLmJ0biB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogNTAlO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG5cXG4gIGZvbnQtc2l6ZTogMi42cmVtO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0bi1mb2N1cyB7XFxuICB6LWluZGV4OiAxO1xcblxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogYmxhY2s7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYzY1O1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZ2VuZXJhbC1ib3JkZXIpO1xcblxcbiAgYm94LXNoYWRvdzogMHJlbSAwcmVtIDJyZW0gMHJlbSByZ2IoNDEsIDQxLCA0MSwgMC41KTtcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5pbnB1dC1zZWFyY2gge1xcbiAgaGVpZ2h0OiA1LjZyZW07XFxuICB3aWR0aDogODAlO1xcblxcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcblxcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZ2VuZXJhbC1ib3JkZXIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuXFxuICBmb250LXNpemU6IDIuNHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5idG4tc2VhcmNoIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA2cmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgcmlnaHQ6IDIwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWdlbmVyYWwtYm9yZGVyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjIpO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuLXNlYXJjaCBzdmcge1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbn1cXG5cXG4uYnRuLXNlYXJjaDpob3ZlciB7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlaW5kYXk7XFxufVxcblxcbi5idG4tc2VhcmNoOmhvdmVyIHN2ZyB7XFxuICBjb2xvcjogdmFyKC0tZ3JheS1iZyk7XFxufVxcblxcbi5kZXNjLWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJyZW07XFxuXFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcXG5cXG4gIG9wYWNpdHk6IDAlO1xcbn1cXG5cXG4uZGVzYy1jb250YWluZXIgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5kZXNjLWNvbnRhaW5lciBkaXYgcCB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogREFZIE9WRVJWSUVXICovXFxuXFxuLmRheS1vdmVydmlldyB7XFxuICBncmlkLWFyZWE6IGI7XFxuICBwYWRkaW5nOiA0LjhyZW0gNi40cmVtO1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMS42cmVtO1xcblxcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLmRheS1vdmVydmlldyBzcGFuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmRheS1vdmVydmlldyBoMSB7XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gIGZvbnQtc2l6ZTogMTRyZW07XFxuICBsZXR0ZXItc3BhY2luZzogLTRweDtcXG59XFxuXFxuLmRheS1vdmVydmlldyBoMiB7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4uZGF5LW92ZXJ2aWV3IHAge1xcbiAgY29sb3I6IHZhcigtLWdyYXktdGV4dCk7XFxufVxcblxcbi5kYXktb3ZlcnZpZXcgc3ZnIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTZyZW07XFxuICB3aWR0aDogMTZyZW07XFxuXFxuICBib3R0b206IDIwJTtcXG4gIGxlZnQ6IDE1JTtcXG59XFxuXFxuLyogREFZUyBQUkVWSUVXICovXFxuXFxuLmRheXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgZ3JpZC1hcmVhOiBjO1xcblxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLWdlbmVyYWwtYm9yZGVyKTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiB2YXIoLS1nZW5lcmFsLWJvcmRlcik7XFxufVxcblxcbi5kYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyLjZyZW07XFxuXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGF5OmhvdmVyIHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVpbmRheTtcXG59XFxuXFxuLmRheSBwOmZpcnN0LW9mLXR5cGUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMi42cmVtO1xcbn1cXG5cXG4uZGF5IHN2ZyB7XFxuICBoZWlnaHQ6IDVyZW07XFxuICB3aWR0aDogNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbn1cXG5cXG4uZGF5MSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdHJvbmctZ29sZCk7XFxuICBib3gtc2hhZG93OiAwcmVtIDByZW0gMS4zcmVtIDByZW0gcmdiKDQxLCA0MSwgNDEsIDAuMyk7XFxuICB6LWluZGV4OiAwO1xcblxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZ2VuZXJhbC1ib3JkZXIpO1xcbn1cXG5cXG4uZmFkZS1jb250ZW50IHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlaW5jb250O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogQU5JTUFUSU9OUyAqL1xcblxcbkBrZXlmcmFtZXMgZmFkZWluY29udCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZWluZGF5IHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdHJvbmctZ29sZCk7XFxuICAgIGJveC1zaGFkb3c6IDByZW0gMHJlbSAxLjNyZW0gMHJlbSByZ2IoNDEsIDQxLCA0MSwgMC4zKTtcXG4gICAgei1pbmRleDogMDtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tZ2VuZXJhbC1ib3JkZXIpO1xcbiAgfVxcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbi8qXG5hc3luYyBmdW5jdGlvbiBoYWxsbygpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgXCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9NjcuMDUyMiZsb249MTEwLjI0MzcmZXhjbHVkZT1taW51dGVseSxob3VybHkmYXBwaWQ9YWI3MzBhZTdkMDY2N2ZlZjkxNTFmZDMzMjkxMDdkMGRcIlxuICApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgY29uc29sZS5sb2coZGF0YSk7XG59XG5oYWxsbygpO1xuKi9cblxuLy9kYXktc3BlY2lmaWNzXG4vL2RheS1vdmVydmlld1xuLy8uZmFkZS1jb250ZW50XG5cbmNvbnN0IGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2MtY29udGFpbmVyXCIpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgYS5jbGFzc0xpc3QuYWRkKFwiZmFkZS1jb250ZW50XCIpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=