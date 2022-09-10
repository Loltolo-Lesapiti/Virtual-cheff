/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(http://fonts.cdnfonts.com/css/poppins);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n::after,\\n::before {\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n  -webkit-box-sizing: border-box;\\n  font-family: 'Poppins', sans-serif;\\n}\\n\\nul li {\\n  list-style: none;\\n}\\n\\nh1,\\nh1 span,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\n.btn {\\n  font-family: 'Poppins', sans-serif;\\n}\\n\\nbody {\\n  background: #383a59;\\n}\\n\\n.meal-details {\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  color: #000;\\n  background: bisque;\\n  width: 50%;\\n  height: 100%;\\n  overflow-y: scroll;\\n  border-radius: 0.2rem;\\n  text-align: center;\\n  padding: 2rem 0;\\n  display: none;\\n}\\n\\n.meal-details-resevation {\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  color: #000;\\n  background: bisque;\\n  width: 50%;\\n  height: 100%;\\n  overflow-y: scroll;\\n  border-radius: 0.2rem;\\n  text-align: center;\\n  padding: 2rem 0;\\n  display: none;\\n}\\n\\n.meal-details::-webkit-scrollbar {\\n  width: 10px;\\n}\\n\\n.meal-details::-webkit-scrollbar-thumb {\\n  background: #fff;\\n  border-radius: 2rem;\\n}\\n\\n.meal-details-resevation::-webkit-scrollbar {\\n  width: 10px;\\n}\\n\\n.meal-details-resevation::-webkit-scrollbar-thumb {\\n  background: #fff;\\n  border-radius: 2rem;\\n}\\n\\n.showComment {\\n  display: block;\\n  height: 100%;\\n  overflow: scroll;\\n}\\n\\n.meal-details-content {\\n  margin: 2rem;\\n}\\n\\n.close-btn {\\n  position: absolute;\\n  right: 2rem;\\n  top: 2rem;\\n  font-size: 1.8rem;\\n  background: #fff;\\n  border: none;\\n  width: 35px;\\n  height: 35px;\\n  border-radius: 50%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.meal-img {\\n  height: 250px;\\n  overflow: hidden;\\n}\\n\\n.meal-img img {\\n  width: 100%;\\n}\\n\\n.recipe-meal-img img {\\n  width: 150px;\\n  height: 150px;\\n  border-radius: 50%;\\n  margin: 0 auto;\\n  display: block;\\n}\\n\\n::placeholder {\\n  font-style: italic;\\n}\\n\\n.like-btn {\\n  cursor: pointer;\\n}\\n\\n.navbar {\\n  background-color: #eeeed6;\\n  font-size: 24px;\\n  font-family: 'Poppins', sans-serif;\\n}\\n\\n.nav-link:hover {\\n  text-decoration: underline;\\n}\\n\\n.footer {\\n  position: fixed;\\n  left: 0;\\n  bottom: 0;\\n  width: 100%;\\n  text-align: center;\\n  background-color: #eeeed6;\\n  padding: 20px;\\n}\\n\\n.footer a {\\n  text-decoration: none;\\n  font-style: italic;\\n}\\n\\n.footer a:hover {\\n  cursor: pointer;\\n  font-size: 18px;\\n}\\n\\n.recipe-title,\\n.recipe-instruct h4,\\n.comment-count,\\n.addComment,\\n.recipe-category,\\n.reservation-count,\\n.meal-recipe-rs h2 {\\n  color: #383a59;\\n}\\n\\n.commentBtn {\\n  margin-bottom: 30px;\\n}\\n\\n.showResevation {\\n  display: block;\\n  height: 100%;\\n  overflow: scroll;\\n}\\n\\n@media screen and (min-width: 768px) {\\n  footer {\\n    font-size: 18px;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/createMealLike.js":
/*!*******************************!*\
  !*** ./src/createMealLike.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createLike = async (mealId) => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8WhiXHgGMaGrsfo6vYsR/likes', {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: mealId,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n  return response.text();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createLike);\n\n\n//# sourceURL=webpack://webpack/./src/createMealLike.js?");

/***/ }),

/***/ "./src/getMealLikes.js":
/*!*****************************!*\
  !*** ./src/getMealLikes.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getMealLikes = async () => {\n  const response = await fetch(\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8WhiXHgGMaGrsfo6vYsR/likes',\n  );\n  return response.json();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMealLikes);\n\n\n//# sourceURL=webpack://webpack/./src/getMealLikes.js?");

/***/ }),

/***/ "./src/getMeals.js":
/*!*************************!*\
  !*** ./src/getMeals.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getMeals = async () => {\n  const response = await fetch(\n    'https://www.themealdb.com/api/json/v1/1/filter.php?a=Jamaican',\n  );\n  const result = await response.json();\n  return result.meals;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMeals);\n\n\n//# sourceURL=webpack://webpack/./src/getMeals.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _getMeals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getMeals.js */ \"./src/getMeals.js\");\n/* harmony import */ var _mealList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mealList.js */ \"./src/mealList.js\");\n\n\n\n\nwindow.addEventListener('load', async () => {\n  (0,_mealList_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(await (0,_getMeals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n});\n\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/mealCommentCounter.js":
/*!***********************************!*\
  !*** ./src/mealCommentCounter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCounter = (myComment) => {\n  const count = myComment.length ? myComment.length : 0;\n  return count;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);\n\n//# sourceURL=webpack://webpack/./src/mealCommentCounter.js?");

/***/ }),

/***/ "./src/mealList.js":
/*!*************************!*\
  !*** ./src/mealList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createMealLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMealLike.js */ \"./src/createMealLike.js\");\n/* harmony import */ var _getMealLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getMealLikes.js */ \"./src/getMealLikes.js\");\n/* harmony import */ var _mealCommentCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mealCommentCounter.js */ \"./src/mealCommentCounter.js\");\n/* harmony import */ var _mealRecipeCount_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mealRecipeCount.js */ \"./src/mealRecipeCount.js\");\n/* harmony import */ var _resevationCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resevationCounter.js */ \"./src/resevationCounter.js\");\n\n\n\n\n\n\nconst mainDiv = document.querySelector('#meal-items');\nconst btnClose = document.querySelector('.close-btn');\n\nconst mealRecipeDetails = document.querySelector('.meal-recipe');\nconst mealReseverDetails = document.querySelector('.meal-recipe-rs');\nconst btnCloseRS = document.querySelector('.close-btn-rs');\n\nconst mealLikesCount = (target, mealLikesArray, numOfLikes) => {\n  mealLikesArray.forEach((obj) => {\n    if (obj.item_id === target.id) {\n      numOfLikes.innerHTML = `${obj.likes} likes `;\n    }\n  });\n};\nconst mealList = async (data) => {\n  for (let i = 0; i <= data.length - 1; i += 1) {\n    const foodDiv = document.createElement('div');\n    foodDiv.classList.add('col-lg-4');\n\n    const listItem = document.createElement('div');\n    listItem.id = data[i].idMeal;\n    foodDiv.setAttribute('data-id', `${data[i].idMeal}`);\n    listItem.classList.add('meal-item', 'text-center', 'card', 'shadow', 'mb-4', 'border-0');\n\n    const itemImage = document.createElement('div');\n    itemImage.classList.add('meal-img');\n\n    const image = document.createElement('img');\n    image.src = data[i].strMealThumb;\n\n    itemImage.appendChild(image);\n    listItem.appendChild(itemImage);\n\n    const itemText = document.createElement('div');\n    itemText.classList.add('meal-name', 'd-flex', 'pt-3', 'justify-content-center', 'align-items-center');\n\n    const mealName = document.createElement('h3');\n    mealName.classList.add('fs-6', 'me-2', 'pt-1');\n    mealName.innerHTML = data[i].strMeal;\n\n    const likeBtn = document.createElement('i');\n    likeBtn.classList.add('bi', 'bi-heart', 'like-btn', 'text-danger');\n    likeBtn.id = data[i].idMeal;\n\n    itemText.appendChild(mealName);\n    itemText.appendChild(likeBtn);\n    listItem.appendChild(itemText);\n\n    const mealLikes = document.createElement('div');\n    const numOfLikes = document.createElement('small');\n    numOfLikes.innerHTML = '0 likes';\n    mealLikes.appendChild(numOfLikes);\n    listItem.appendChild(mealLikes);\n\n    const commentContainer = document.createElement('div');\n    commentContainer.classList.add('comment', 'mb-4', 'mt-2');\n\n    const cmtButton = document.createElement('button');\n    cmtButton.classList.add('btn', 'btn-secondary', 'rounded-pill', 'px-4', 'shadow', 'comment-btn');\n    cmtButton.setAttribute('id', `${data[i].idMeal}`);\n    cmtButton.setAttribute('type', 'button');\n    cmtButton.setAttribute('data-bs-toggle', 'modal');\n    cmtButton.setAttribute('data-bs-target', '#staticBackdrop');\n    cmtButton.innerHTML = 'comments';\n\n    commentContainer.appendChild(cmtButton);\n    listItem.appendChild(commentContainer);\n\n    const resevationContainer = document.createElement('div');\n    resevationContainer.classList.add('comment', 'mb-4', 'mt-2');\n\n    const rsvButton = document.createElement('button');\n    rsvButton.classList.add('btn', 'btn-secondary', 'rounded-pill', 'px-4', 'shadow', 'reservation-btn');\n    rsvButton.setAttribute('id', `${data[i].idMeal}`);\n    rsvButton.setAttribute('type', 'button');\n    rsvButton.setAttribute('data-bs-toggle', 'modal');\n    rsvButton.setAttribute('data-bs-target', '#staticBackdrop');\n    rsvButton.innerHTML = 'reservation';\n\n    resevationContainer.appendChild(rsvButton);\n    listItem.appendChild(resevationContainer);\n\n    foodDiv.appendChild(listItem);\n    mainDiv.appendChild(foodDiv);\n\n    foodDiv.appendChild(listItem);\n    mainDiv.appendChild(foodDiv);\n\n    // eslint-disable-next-line no-await-in-loop\n    const mealLikesArray = await (0,_getMealLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    mealLikesCount(likeBtn, mealLikesArray, numOfLikes);\n\n    likeBtn.addEventListener('click', async (e) => {\n      await (0,_createMealLike_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(likeBtn.id);\n      const newMealLikes = await (0,_getMealLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n      mealLikesCount(e.target, newMealLikes, numOfLikes);\n    });\n  }\n\n  const mealCount = document.querySelector('#meal-count');\n  mealCount.innerHTML = (0,_mealRecipeCount_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(data);\n};\n\nconst postComment = async (data) => {\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8WhiXHgGMaGrsfo6vYsR/comments';\n  const response = await fetch(url, {\n    method: 'POST',\n    headers: {\n      'Content-type': 'application/json',\n    },\n    body: JSON.stringify(data),\n  });\n  return response.ok;\n};\n\nconst getMealComment = async (item) => {\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8WhiXHgGMaGrsfo6vYsR/comments?item_id=${item.idMeal}`;\n  let myComment = await fetch(url).then((response) => response.json());\n  const ul = document.querySelector('#list-comment');\n  ul.innerHTML = '';\n  const h3 = document.querySelector('.comment-count');\n  h3.innerHTML = `Comments(${(0,_mealCommentCounter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(myComment)})`;\n  if (!myComment.length) myComment = [];\n  myComment.forEach((comment) => {\n    ul.innerHTML += `\n      <li class=\"d-flex justify-content-start align-items-center\">\n        <p class=\"me-3\">${comment.creation_date}</p>\n        <p class=\"me-3\">${comment.username}</p>\n        <p>${comment.comment}</p>\n      </li>\n    `;\n  });\n};\n\nconst mealModal = async (meal) => {\n  [meal] = meal;\n  mealRecipeDetails.innerHTML = `\n    <h2 class = \"recipe-title\">${meal.strMeal}</h2>\n    <div class = \"recipe-meal-img\">\n      <img src = \"${meal.strMealThumb}\" alt = \"\">\n    </div>\n    <div class = \"recipe-instruct\">\n      <h4>Instructions for making</h4>\n    <h4 class = \"recipe-category\">${meal.strCategory}</h4>\n      <p class=\"text-center mx-5\">${meal.strInstructions}</p>\n    </div>\n    \n    <h3 class=\"m-3 comment-count\"></h3>\n    <div class=\"d-flex justify-content-center align-items-center\">\n\n      <ul id=\"list-comment\" class=\"list-unstyled\">\n      </ul>\n    </div>\n    <h3 class=\"m-3 addComment\">Add a comment</h3>\n    <form autocomplete=\"off\" class=\"w-50 mx-auto\">\n <ul>\n  <li>\n      <input type=\"text\" class=\"form-control mb-2\" id=\"commentator\" placeholder=\"Your name\">\n</li>\n<li>\n      <textarea id=\"comment\" name=\"comment\" placeholder=\"Your comment...\"  rows=\"4\" cols=\"45\"></textarea>\n</li>\n<li>\n      <button type=\"button\" class=\"btn btn-secondary commentBtn\">Comment</button>\n </li>\n</ul>\n    </form>\n  `;\n  mealRecipeDetails.parentElement.classList.add('showComment');\n  const commentBtn = document.querySelector('.commentBtn');\n  commentBtn.addEventListener('click', () => {\n    const username = document.querySelector('#commentator').value;\n    const comment = document.querySelector('#comment').value;\n    const itemId = meal.idMeal;\n    const newData = {\n      item_id: itemId,\n      username,\n      comment,\n    };\n    postComment(newData);\n    document.querySelector('#commentator').value = '';\n    document.querySelector('#comment').value = '';\n    setTimeout(() => {\n      getMealComment(meal);\n    }, 1000);\n  });\n  getMealComment(meal);\n};\nconst getMeal = async (e) => {\n  e.preventDefault();\n  if (e.target.classList.contains('comment-btn')) {\n    const mealItem = e.target.parentElement.parentElement.parentElement;\n    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`;\n    const response = await fetch(url).then((response) => response.json()).then((data) => data);\n    mealModal(response.meals);\n  }\n};\n\nmainDiv.addEventListener('click', getMeal);\nbtnClose.addEventListener('click', () => {\n  mealRecipeDetails.parentElement.classList.remove('showComment');\n});\n\nconst postResevation = async (data) => {\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/l35PAuerIZ0jKQQ35zG1/reservations';\n  const response = await fetch(url, {\n    method: 'POST',\n    headers: {\n      'Content-type': 'application/json',\n    },\n    body: JSON.stringify(data),\n  });\n  return response.ok;\n};\nconst getMealResvation = async (item) => {\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/l35PAuerIZ0jKQQ35zG1/reservations?item_id=${item.idMeal}`;\n  let myResevation = await fetch(url).then((response) => response.json());\n  const ulR = document.querySelector('#list-resevation');\n  ulR.innerHTML = '';\n  /* eslint-disable no-multi-assign */\n  const h3 = document.querySelector('.reservation-count');\n  h3.innerHTML = `Reservation(${(0,_resevationCounter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(myResevation)})`;\n  if (!myResevation.length) myResevation = [];\n  myResevation.forEach((resevation) => {\n    ulR.innerHTML += `\n      <li class=\"d-flex justify-content-start align-items-center\">\n        <p class=\"me-3\">${resevation.date_start} - </p>\n        <p>${resevation.date_end} </p>\n        <p class=\"me-3\">&nbsp  by ${resevation.username}</p>\n        \n      </li>\n    `;\n  });\n};\n\nconst mealReseved = async (meal) => {\n  [meal] = meal;\n  mealReseverDetails.innerHTML = `\n<h2>${meal.strMeal}</h2>\n<div class = \"recipe-meal-img\">\n      <img src = \"${meal.strMealThumb}\" alt = \"\">\n</div>\n    <div class = \"recipe-instruct\">\n    <h4 class = \"recipe-title\">Recipe Details</h4>\n      <p class=\"text-center mx-5\">${meal.strInstructions}</p>\n    </div>\n    <h3 class=\"m-3 reservation-count\"></h3>\n    <div class=\"d-flex justify-content-center align-items-center\">\n      <ul id=\"list-resevation\" class=\"list-unstyled\">\n      </ul>\n    </div>\n    <h3 class=\"m-3 addComment\">Add a Reservation</h3>\n    <form autocomplete=\"off\" class=\"w-50 mx-auto\">\n <ul>\n  <li>\n      <input type=\"text\" class=\"form-control mb-2\" id=\"commentator\" placeholder=\"Your name\">\n</li>\n<li>\n<input type=\"date\" placeholder=\"Start Date\" class=\"form-control my-2\" id=\"Startdate\" >\n </li>\n<li>\n<input type=\"date\" placeholder=\"End Date\" class=\"form-control\" id=\"Enddate\" >\n</li>\n\n<li>\n      <button type=\"button\" class=\"btn btn-secondary reservationBtn  my-2\">Reserve</button>\n </li>\n</ul>\n    </form>\n  `;\n  mealReseverDetails.parentElement.classList.add('showResevation');\n  const commentBtn = document.querySelector('.reservationBtn');\n  commentBtn.addEventListener('click', () => {\n    let username = document.querySelector('#commentator').value;\n    /* eslint-disable camelcase */\n    let date_start = document.querySelector('#Startdate').value;\n    let date_end = document.querySelector('#Enddate').value;\n    const itemId = meal.idMeal;\n    const newData = {\n      item_id: itemId,\n      username,\n      date_start,\n      date_end,\n    };\n    postResevation(newData);\n    /* eslin-disablet no-undef */\n    username = document.querySelector('#commentator').value = '';\n    date_start = document.querySelector('#Startdate').value = '';\n    date_end = document.querySelector('#Enddate').value = '';\n    setTimeout(() => {\n      getMealResvation(meal);\n    }, 1000);\n  });\n  getMealResvation(meal);\n};\nconst getMealRs = async (e) => {\n  e.preventDefault();\n  if (e.target.classList.contains('reservation-btn')) {\n    const mealItem = e.target.parentElement.parentElement.parentElement;\n    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`;\n    const response = await fetch(url).then((response) => response.json()).then((data) => data);\n    mealReseved(response.meals);\n  }\n};\n\nmainDiv.addEventListener('click', getMealRs);\nbtnCloseRS.addEventListener('click', () => {\n  mealReseverDetails.parentElement.classList.remove('showResevation');\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mealList);\n\n//# sourceURL=webpack://webpack/./src/mealList.js?");

/***/ }),

/***/ "./src/mealRecipeCount.js":
/*!********************************!*\
  !*** ./src/mealRecipeCount.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mealCount = (mealData) => mealData.length;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mealCount);\n\n//# sourceURL=webpack://webpack/./src/mealRecipeCount.js?");

/***/ }),

/***/ "./src/resevationCounter.js":
/*!**********************************!*\
  !*** ./src/resevationCounter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst resevationCounter = (myReservation) => {\n  const count = myReservation.length ? myReservation.length : 0;\n  return count;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resevationCounter);\n\n//# sourceURL=webpack://webpack/./src/resevationCounter.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;