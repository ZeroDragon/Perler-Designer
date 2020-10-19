/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"bundle": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/assets/scripts/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/app.vue?vue&type=style&index=0&id=6c0a0fc1&lang=sass&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--1-2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/app.vue?vue&type=style&index=0&id=6c0a0fc1&lang=sass&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".canvasSpace[data-v-6c0a0fc1] {\\n  grid-area: canvas;\\n}\\n.bottom[data-v-6c0a0fc1] {\\n  grid-area: bottom;\\n}\\n.side[data-v-6c0a0fc1] {\\n  grid-area: side;\\n}\\n.framework[data-v-6c0a0fc1] {\\n  height: 100%;\\n  display: grid;\\n  grid-template-columns: 150px 1fr;\\n  grid-template-rows: 1fr 120px;\\n  grid-template-areas: \\\"side canvas\\\" \\\"side bottom\\\";\\n}\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/app.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--1-2!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/beadCount.vue?vue&type=style&index=0&id=c9927eae&lang=sass&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--1-2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/beadCount.vue?vue&type=style&index=0&id=c9927eae&lang=sass&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".beadItem[data-v-c9927eae] {\\n  display: flex;\\n  align-items: center;\\n  padding: 5px;\\n}\\n.bead[data-v-c9927eae] {\\n  display: inline-block;\\n  width: 20px;\\n  height: 20px;\\n  border-radius: 50%;\\n}\\nsvg[data-v-c9927eae] {\\n  margin-right: 5px;\\n}\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/beadCount.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--1-2!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/bottom.vue?vue&type=style&index=0&id=10e356bb&lang=sass&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--1-2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/bottom.vue?vue&type=style&index=0&id=10e356bb&lang=sass&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".pallete[data-v-10e356bb] {\\n  display: flex;\\n  width: 800px;\\n  flex-wrap: wrap;\\n}\\n.pallete input[data-v-10e356bb] {\\n  flex-grow: 1;\\n  flex-basis: 57.14px;\\n  height: 25px;\\n  border: none;\\n}\\n.pallete input[data-v-10e356bb]:hover {\\n  border: 1px solid #fff;\\n}\\n.selected[data-v-10e356bb] {\\n  margin: 2px 0;\\n  width: 800px;\\n  height: 10px;\\n}\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/bottom.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--1-2!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/projects.vue?vue&type=style&index=0&id=5711178a&lang=sass&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--1-2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/projects.vue?vue&type=style&index=0&id=5711178a&lang=sass&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".projects[data-v-5711178a] {\\n  margin-bottom: 10px;\\n  padding-right: 4px;\\n}\\n.project[data-v-5711178a] {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n.name[data-v-5711178a] {\\n  flex-grow: 1;\\n}\\ninput[data-v-5711178a] {\\n  width: 100%;\\n  border: none;\\n  font-size: 16px;\\n  padding: 2px;\\n}\\n.btn[data-v-5711178a] {\\n  margin: 0;\\n  padding: 4px;\\n  background-color: #0078f8;\\n  color: #fff;\\n  text-align: center;\\n}\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/projects.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--1-2!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/app.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/app.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayCanvas_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/displayCanvas.vue */ \"./src/components/displayCanvas.vue\");\n/* harmony import */ var _bottom_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/bottom.vue */ \"./src/components/bottom.vue\");\n/* harmony import */ var _side_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/side.vue */ \"./src/components/side.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    displaycanvas: _displayCanvas_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    side: _side_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    bottom: _bottom_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }\n});\n\n\n//# sourceURL=webpack:///./src/components/app.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/beadCount.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/beadCount.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Utils_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utils/store */ \"./src/assets/scripts/store.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  computed: {\n    beadList () {\n      const { unsavedPing, unsavedProject } = Utils_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"]\n      if (!unsavedProject) return {}\n      const beads = {}\n      unsavedProject.forEach(row => {\n        row.forEach(cell => {\n          if (!cell) return\n          if (!beads[cell.color]) beads[cell.color] = 0\n          beads[cell.color] += 1\n        })\n      })\n      return beads\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./src/components/beadCount.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/bottom.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/bottom.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Utils_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utils/store */ \"./src/assets/scripts/store.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: () => ({\n    colors: ['#7C7C7C', '#0000FC', '#0000BC', '#4428BC', '#940084', '#A80020', '#A81000', '#881400', '#503000', '#007800', '#006800', '#005800', '#004058', '#000000', '#BCBCBC', '#0078F8', '#0058F8', '#6844FC', '#D800CC', '#E40058', '#F83800', '#E45C10', '#AC7C00', '#00B800', '#00A800', '#00A844', '#008888', '#000000', '#F8F8F8', '#3CBCFC', '#6888FC', '#9878F8', '#F878F8', '#F85898', '#F87858', '#FCA044', '#F8B800', '#B8F818', '#58D854', '#58F898', '#00E8D8', '#787878', '#FCFCFC', '#A4E4FC', '#B8B8F8', '#D8B8F8', '#F8B8F8', '#F8A4C0', '#F0D0B0', '#FCE0A8', '#F8D878', '#D8F878', '#B8F8B8', '#B8F8D8', '#00FCFC', '#F8D8F8'],\n    selectedColor: '#7C7C7C'\n  }),\n  methods: {\n    changeColor (color) {\n      this.selectedColor = color\n      Object(Utils_store__WEBPACK_IMPORTED_MODULE_0__[\"commit\"])('selectedColor', this.selectedColor)\n    }\n  },\n  mounted () {\n    Object(Utils_store__WEBPACK_IMPORTED_MODULE_0__[\"commit\"])('selectedColor', this.selectedColor)\n  }\n});\n\n\n//# sourceURL=webpack:///./src/components/bottom.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/displayCanvas.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/displayCanvas.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Utils_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utils/store */ \"./src/assets/scripts/store.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: () => ({\n    canvas: null,\n    canvasSize: 800,\n    perlerSize: 8,\n    ctx: null,\n    grid: null,\n    newGrid: () => [...new Array(101)].map(_ => {\n      return []\n    })\n  }),\n\n  computed: {\n    width () { return this.canvasSize },\n    height () { return this.width },\n    selectedColor () {\n      return Utils_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].selectedColor\n    },\n    changeProject () {\n      if (Utils_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].selectedProject === 'clearGridnow') {\n        this.grid = this.newGrid()\n        this.drawBoard()\n        return ''\n      }\n      if (!Utils_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].selectedProject) return ''\n      this.grid = Utils_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].selectedProject\n      this.drawBoard()\n      return ''\n    }\n  },\n\n  methods: {\n    drawGrid (color, cellSize) {\n      const { perlerSize, width, height, ctx } = this\n      for (var cicler = 0; cicler <= width; cicler += cellSize) {\n        ctx.beginPath()\n        ctx.strokeStyle = color\n        ctx.moveTo(cicler, 0)\n        ctx.lineTo(cicler, height)\n        ctx.moveTo(0, cicler)\n        ctx.lineTo(width, cicler)\n        ctx.stroke()\n      }\n    },\n    drawPerler (color, x, y) {\n      const { ctx, perlerSize, width, height } = this\n      ctx.beginPath()\n      ctx.arc(x, y, perlerSize / 2, 0, 2 * Math.PI)\n      ctx.fillStyle = color\n      ctx.fill()\n      ctx.save()\n      ctx.beginPath()\n      ctx.arc(x, y, perlerSize / 8, 0, 2 * Math.PI)\n      ctx.clip()\n      ctx.clearRect(x - perlerSize / 2, y - perlerSize / 2, perlerSize, perlerSize)\n      ctx.restore()\n    },\n    drawBoard () {\n      const { drawGrid, grid, ctx, width, height, perlerSize, drawPerler } = this\n      ctx.clearRect(0, 0, width, height)\n      drawGrid('#eee', perlerSize)\n      drawGrid('#ccc', perlerSize * 5)\n      drawGrid('#aaa', perlerSize * 10)\n      drawGrid('#000', perlerSize * 50)\n      grid.forEach((row, rowK) => {\n        row.forEach((cell, cellK) => {\n          if (cell) {\n            const left = rowK * perlerSize - perlerSize / 2\n            const top = cellK * perlerSize - perlerSize / 2\n            drawPerler(\n              cell.color,\n              left,\n              top\n            )\n          }\n        })\n      })\n      Object(Utils_store__WEBPACK_IMPORTED_MODULE_0__[\"commit\"])('unsavedProject', this.grid)\n      Object(Utils_store__WEBPACK_IMPORTED_MODULE_0__[\"commit\"])('unsavedPing', new Date().getTime())\n    },\n    clickPerler (event) {\n      const { canvas, grid, drawBoard, selectedColor, perlerSize } = this\n      const canvasLeft = canvas.offsetLeft - perlerSize / 2\n      const canvasTop = canvas.offsetTop - perlerSize / 2\n      const left = Math.round((event.pageX - canvasLeft) / perlerSize)\n      const top = Math.round((event.pageY - canvasTop) / perlerSize)\n      if (!grid[left][top]) grid[left][top] = {}\n      grid[left][top] = { color: selectedColor }\n      drawBoard()\n    },\n    clearPerler (event) {\n      const { canvas, grid, drawBoard, perlerSize } = this\n      const canvasLeft = canvas.offsetLeft - perlerSize / 2\n      const canvasTop = canvas.offsetTop - perlerSize / 2\n      const left = Math.round((event.pageX - canvasLeft) / perlerSize)\n      const top = Math.round((event.pageY - canvasTop) / perlerSize)\n      grid[left][top] = false\n      drawBoard()\n    }\n  },\n\n  mounted () {\n    const { width, height, drawBoard } = this\n    const canvas = document.getElementById('perler')\n    const grid = this.newGrid()\n    canvas.width = width\n    canvas.height = height\n    this.canvas = canvas\n    this.grid = grid\n    this.ctx = canvas.getContext('2d')\n    drawBoard()\n  }\n});\n\n\n//# sourceURL=webpack:///./src/components/displayCanvas.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/projects.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/projects.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Utils_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utils/store */ \"./src/assets/scripts/store.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: () => ({\n    activeProjectKey: null,\n    projectName: '',\n    projects: {},\n    lastSaved: 0\n  }),\n  methods: {\n    createProject () {\n      if (!this.projectName) return\n      const activeGrid = JSON.parse(JSON.stringify(Utils_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].selectedProject))\n      this.projects[this.projectName] = activeGrid\n      localStorage.projects = JSON.stringify(this.projects)\n      const key = this.projectName.toString()\n      this.projectName = ''\n      this.viewProject(key)\n      this.saveProject(key)\n    },\n    viewProject (key) {\n      Object(Utils_store__WEBPACK_IMPORTED_MODULE_0__[\"commit\"])('selectedProject', this.projects[key])\n      this.activeProjectKey = key\n      this.projectName = key.toString()\n      this.lastSaved = new Date().getTime()\n    },\n    clearActive () {\n      this.projects = JSON.parse(localStorage.projects)\n      Object(Utils_store__WEBPACK_IMPORTED_MODULE_0__[\"commit\"])('selectedProject', 'clearGridnow')\n      this.activeProjectKey = null\n      this.projectName = null\n    },\n    saveProject (key) {\n      this.projects[key] = JSON.parse(JSON.stringify(Utils_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].unsavedProject))\n      localStorage.projects = JSON.stringify(this.projects)\n      this.lastSaved = new Date().getTime()\n      Object(Utils_store__WEBPACK_IMPORTED_MODULE_0__[\"commit\"])('unsavedPing', this.lastSaved)\n    },\n    deleteProject (key) {\n      this.clearActive()\n      this.projectName = key\n      delete this.projects[key]\n      localStorage.projects = JSON.stringify(this.projects)\n      this.projectName = ''\n    }\n  },\n  computed: {\n    isNotSaved () {\n      const lastSaved = Math.round(this.lastSaved / 1000)\n      const unsavedPing = Math.round(Utils_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].unsavedPing / 1000)\n      return lastSaved !== unsavedPing\n    }\n  },\n  beforeMount () {\n    this.projects = JSON.parse(localStorage.projects)\n  }\n});\n\n\n//# sourceURL=webpack:///./src/components/projects.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/side.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/side.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projects_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/projects.vue */ \"./src/components/projects.vue\");\n/* harmony import */ var _beadCount_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/beadCount.vue */ \"./src/components/beadCount.vue\");\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    projects: _projects_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    beadCount: _beadCount_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }\n});\n\n\n//# sourceURL=webpack:///./src/components/side.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/app.vue?vue&type=template&id=6c0a0fc1&scoped=true&lang=pug&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/components/app.vue?vue&type=template&id=6c0a0fc1&scoped=true&lang=pug& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"app--holder framework\" },\n    [_c(\"displaycanvas\"), _c(\"side\"), _c(\"bottom\")],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/app.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/beadCount.vue?vue&type=template&id=c9927eae&scoped=true&lang=pug&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/components/beadCount.vue?vue&type=template&id=c9927eae&scoped=true&lang=pug& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"beadsCount\" },\n    [\n      Object.keys(_vm.beadList).length > 0\n        ? [\n            _c(\"h3\", [_vm._v(\"Bead count\")]),\n            _vm._l(_vm.beadList, function(count, color) {\n              return _c(\"div\", { staticClass: \"beadItem\" }, [\n                _c(\n                  \"svg\",\n                  { staticClass: \"bead\", attrs: { width: \"20\", height: \"20\" } },\n                  [\n                    _c(\"defs\", [\n                      _c(\"mask\", { attrs: { id: \"hole\" } }, [\n                        _c(\"rect\", {\n                          attrs: {\n                            width: \"100%\",\n                            height: \"100%\",\n                            fill: \"white\"\n                          }\n                        }),\n                        _c(\"circle\", {\n                          attrs: { r: \"3\", cx: \"10\", cy: \"10\", fill: \"black\" }\n                        })\n                      ])\n                    ]),\n                    _c(\"circle\", {\n                      attrs: {\n                        id: \"donut\",\n                        r: \"10\",\n                        cx: \"10\",\n                        cy: \"10\",\n                        mask: \"url(#hole)\",\n                        fill: color\n                      }\n                    })\n                  ]\n                ),\n                _vm._v(_vm._s(count))\n              ])\n            })\n          ]\n        : _vm._e()\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/beadCount.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/bottom.vue?vue&type=template&id=10e356bb&scoped=true&lang=pug&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/components/bottom.vue?vue&type=template&id=10e356bb&scoped=true&lang=pug& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"bottom\" }, [\n    _c(\"div\", {\n      staticClass: \"selected\",\n      style: { backgroundColor: _vm.selectedColor }\n    }),\n    _c(\n      \"div\",\n      { staticClass: \"pallete\" },\n      _vm._l(_vm.colors, function(color) {\n        return _c(\"input\", {\n          style: { backgroundColor: color },\n          attrs: { type: \"button\" },\n          on: {\n            click: function($event) {\n              return _vm.changeColor(color)\n            }\n          }\n        })\n      }),\n      0\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/bottom.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/displayCanvas.vue?vue&type=template&id=b9f3904c&lang=pug&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/components/displayCanvas.vue?vue&type=template&id=b9f3904c&lang=pug& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"canvasSpace\" }, [\n    _vm._v(_vm._s(_vm.changeProject)),\n    _c(\"canvas\", {\n      attrs: { id: \"perler\" },\n      on: {\n        click: _vm.clickPerler,\n        contextmenu: function($event) {\n          $event.preventDefault()\n          return _vm.clearPerler($event)\n        }\n      }\n    })\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/displayCanvas.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/projects.vue?vue&type=template&id=5711178a&scoped=true&lang=pug&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/components/projects.vue?vue&type=template&id=5711178a&scoped=true&lang=pug& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"projects\" },\n    [\n      _c(\"h3\", [_vm._v(\"Projects\")]),\n      _vm._l(Object.keys(_vm.projects), function(project) {\n        return _c(\"div\", [\n          _c(\n            \"div\",\n            { staticClass: \"project\" },\n            [\n              _c(\"div\", { staticClass: \"name\" }, [_vm._v(_vm._s(project))]),\n              project === _vm.activeProjectKey\n                ? [\n                    _vm.isNotSaved\n                      ? _c(\n                          \"div\",\n                          {\n                            on: {\n                              click: function($event) {\n                                return _vm.saveProject(project)\n                              }\n                            }\n                          },\n                          [_vm._v(\"💾\")]\n                        )\n                      : _vm._e(),\n                    _c(\n                      \"div\",\n                      {\n                        on: {\n                          click: function($event) {\n                            return _vm.clearActive()\n                          }\n                        }\n                      },\n                      [_vm._v(\"✖️\")]\n                    )\n                  ]\n                : [\n                    _c(\n                      \"div\",\n                      {\n                        on: {\n                          click: function($event) {\n                            return _vm.viewProject(project)\n                          }\n                        }\n                      },\n                      [_vm._v(\"✏️\")]\n                    )\n                  ],\n              _c(\n                \"div\",\n                {\n                  on: {\n                    click: function($event) {\n                      return _vm.deleteProject(project)\n                    }\n                  }\n                },\n                [_vm._v(\"🗑️\")]\n              )\n            ],\n            2\n          )\n        ])\n      }),\n      _c(\"hr\"),\n      _c(\"div\", { staticClass: \"btn\", on: { click: _vm.createProject } }, [\n        _vm._v(\"Save as\")\n      ]),\n      _c(\"input\", {\n        directives: [\n          {\n            name: \"model\",\n            rawName: \"v-model\",\n            value: _vm.projectName,\n            expression: \"projectName\"\n          }\n        ],\n        attrs: { type: \"text\", placeholder: \"Name\" },\n        domProps: { value: _vm.projectName },\n        on: {\n          input: function($event) {\n            if ($event.target.composing) {\n              return\n            }\n            _vm.projectName = $event.target.value\n          }\n        }\n      })\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/projects.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/side.vue?vue&type=template&id=41a4bc32&lang=pug&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/components/side.vue?vue&type=template&id=41a4bc32&lang=pug& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"side\" },\n    [_c(\"projects\"), _c(\"beadCount\")],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/side.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functioal component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/app.vue?vue&type=style&index=0&id=6c0a0fc1&lang=sass&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--1-2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/app.vue?vue&type=style&index=0&id=6c0a0fc1&lang=sass&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js??ref--1-2!../../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=style&index=0&id=6c0a0fc1&lang=sass&scoped=true& */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/app.vue?vue&type=style&index=0&id=6c0a0fc1&lang=sass&scoped=true&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"0f67b555\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/app.vue?./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--1-2!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/beadCount.vue?vue&type=style&index=0&id=c9927eae&lang=sass&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--1-2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/beadCount.vue?vue&type=style&index=0&id=c9927eae&lang=sass&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js??ref--1-2!../../node_modules/vue-loader/lib??vue-loader-options!./beadCount.vue?vue&type=style&index=0&id=c9927eae&lang=sass&scoped=true& */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/beadCount.vue?vue&type=style&index=0&id=c9927eae&lang=sass&scoped=true&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"55960e14\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/beadCount.vue?./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--1-2!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/bottom.vue?vue&type=style&index=0&id=10e356bb&lang=sass&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--1-2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/bottom.vue?vue&type=style&index=0&id=10e356bb&lang=sass&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js??ref--1-2!../../node_modules/vue-loader/lib??vue-loader-options!./bottom.vue?vue&type=style&index=0&id=10e356bb&lang=sass&scoped=true& */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/bottom.vue?vue&type=style&index=0&id=10e356bb&lang=sass&scoped=true&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"ac47f3f2\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/bottom.vue?./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--1-2!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/projects.vue?vue&type=style&index=0&id=5711178a&lang=sass&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--1-2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/projects.vue?vue&type=style&index=0&id=5711178a&lang=sass&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js??ref--1-2!../../node_modules/vue-loader/lib??vue-loader-options!./projects.vue?vue&type=style&index=0&id=5711178a&lang=sass&scoped=true& */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/projects.vue?vue&type=style&index=0&id=5711178a&lang=sass&scoped=true&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"80ba91bc\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/projects.vue?./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--1-2!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addStylesClient; });\n/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ \"./node_modules/vue-style-loader/lib/listToStyles.js\");\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n  Modified by Evan You @yyx990803\n*/\n\n\n\nvar hasDocument = typeof document !== 'undefined'\n\nif (typeof DEBUG !== 'undefined' && DEBUG) {\n  if (!hasDocument) {\n    throw new Error(\n    'vue-style-loader cannot be used in a non-browser environment. ' +\n    \"Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.\"\n  ) }\n}\n\n/*\ntype StyleObject = {\n  id: number;\n  parts: Array<StyleObjectPart>\n}\n\ntype StyleObjectPart = {\n  css: string;\n  media: string;\n  sourceMap: ?string\n}\n*/\n\nvar stylesInDom = {/*\n  [id: number]: {\n    id: number,\n    refs: number,\n    parts: Array<(obj?: StyleObjectPart) => void>\n  }\n*/}\n\nvar head = hasDocument && (document.head || document.getElementsByTagName('head')[0])\nvar singletonElement = null\nvar singletonCounter = 0\nvar isProduction = false\nvar noop = function () {}\nvar options = null\nvar ssrIdKey = 'data-vue-ssr-id'\n\n// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n// tags it will allow on a page\nvar isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase())\n\nfunction addStylesClient (parentId, list, _isProduction, _options) {\n  isProduction = _isProduction\n\n  options = _options || {}\n\n  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parentId, list)\n  addStylesToDom(styles)\n\n  return function update (newList) {\n    var mayRemove = []\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i]\n      var domStyle = stylesInDom[item.id]\n      domStyle.refs--\n      mayRemove.push(domStyle)\n    }\n    if (newList) {\n      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parentId, newList)\n      addStylesToDom(styles)\n    } else {\n      styles = []\n    }\n    for (var i = 0; i < mayRemove.length; i++) {\n      var domStyle = mayRemove[i]\n      if (domStyle.refs === 0) {\n        for (var j = 0; j < domStyle.parts.length; j++) {\n          domStyle.parts[j]()\n        }\n        delete stylesInDom[domStyle.id]\n      }\n    }\n  }\n}\n\nfunction addStylesToDom (styles /* Array<StyleObject> */) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i]\n    var domStyle = stylesInDom[item.id]\n    if (domStyle) {\n      domStyle.refs++\n      for (var j = 0; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j])\n      }\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j]))\n      }\n      if (domStyle.parts.length > item.parts.length) {\n        domStyle.parts.length = item.parts.length\n      }\n    } else {\n      var parts = []\n      for (var j = 0; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j]))\n      }\n      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }\n    }\n  }\n}\n\nfunction createStyleElement () {\n  var styleElement = document.createElement('style')\n  styleElement.type = 'text/css'\n  head.appendChild(styleElement)\n  return styleElement\n}\n\nfunction addStyle (obj /* StyleObjectPart */) {\n  var update, remove\n  var styleElement = document.querySelector('style[' + ssrIdKey + '~=\"' + obj.id + '\"]')\n\n  if (styleElement) {\n    if (isProduction) {\n      // has SSR styles and in production mode.\n      // simply do nothing.\n      return noop\n    } else {\n      // has SSR styles but in dev mode.\n      // for some reason Chrome can't handle source map in server-rendered\n      // style tags - source maps in <style> only works if the style tag is\n      // created and inserted dynamically. So we remove the server rendered\n      // styles and inject new ones.\n      styleElement.parentNode.removeChild(styleElement)\n    }\n  }\n\n  if (isOldIE) {\n    // use singleton mode for IE9.\n    var styleIndex = singletonCounter++\n    styleElement = singletonElement || (singletonElement = createStyleElement())\n    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)\n    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)\n  } else {\n    // use multi-style-tag mode in all other cases\n    styleElement = createStyleElement()\n    update = applyToTag.bind(null, styleElement)\n    remove = function () {\n      styleElement.parentNode.removeChild(styleElement)\n    }\n  }\n\n  update(obj)\n\n  return function updateStyle (newObj /* StyleObjectPart */) {\n    if (newObj) {\n      if (newObj.css === obj.css &&\n          newObj.media === obj.media &&\n          newObj.sourceMap === obj.sourceMap) {\n        return\n      }\n      update(obj = newObj)\n    } else {\n      remove()\n    }\n  }\n}\n\nvar replaceText = (function () {\n  var textStore = []\n\n  return function (index, replacement) {\n    textStore[index] = replacement\n    return textStore.filter(Boolean).join('\\n')\n  }\n})()\n\nfunction applyToSingletonTag (styleElement, index, remove, obj) {\n  var css = remove ? '' : obj.css\n\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = replaceText(index, css)\n  } else {\n    var cssNode = document.createTextNode(css)\n    var childNodes = styleElement.childNodes\n    if (childNodes[index]) styleElement.removeChild(childNodes[index])\n    if (childNodes.length) {\n      styleElement.insertBefore(cssNode, childNodes[index])\n    } else {\n      styleElement.appendChild(cssNode)\n    }\n  }\n}\n\nfunction applyToTag (styleElement, obj) {\n  var css = obj.css\n  var media = obj.media\n  var sourceMap = obj.sourceMap\n\n  if (media) {\n    styleElement.setAttribute('media', media)\n  }\n  if (options.ssrId) {\n    styleElement.setAttribute(ssrIdKey, obj.id)\n  }\n\n  if (sourceMap) {\n    // https://developer.chrome.com/devtools/docs/javascript-debugging\n    // this makes source maps inside style tags work properly in Chrome\n    css += '\\n/*# sourceURL=' + sourceMap.sources[0] + ' */'\n    // http://stackoverflow.com/a/26603875\n    css += '\\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'\n  }\n\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild)\n    }\n    styleElement.appendChild(document.createTextNode(css))\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/vue-style-loader/lib/addStylesClient.js?");

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return listToStyles; });\n/**\n * Translates the list format produced by css-loader into something\n * easier to manipulate.\n */\nfunction listToStyles (parentId, list) {\n  var styles = []\n  var newStyles = {}\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i]\n    var id = item[0]\n    var css = item[1]\n    var media = item[2]\n    var sourceMap = item[3]\n    var part = {\n      id: parentId + ':' + i,\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    }\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = { id: id, parts: [part] })\n    } else {\n      newStyles[id].parts.push(part)\n    }\n  }\n  return styles\n}\n\n\n//# sourceURL=webpack:///./node_modules/vue-style-loader/lib/listToStyles.js?");

/***/ }),

/***/ "./src/assets/scripts/main.js":
/*!************************************!*\
  !*** ./src/assets/scripts/main.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app.vue */ \"./src/components/app.vue\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  return new vue__WEBPACK_IMPORTED_MODULE_0___default.a({\n    el: '#app',\n    components: {\n      app: _app_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n  })\n})\n\n\n//# sourceURL=webpack:///./src/assets/scripts/main.js?");

/***/ }),

/***/ "./src/assets/scripts/store.js":
/*!*************************************!*\
  !*** ./src/assets/scripts/store.js ***!
  \*************************************/
/*! exports provided: store, commit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"commit\", function() { return commit; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* globals localStorage */\n\nlocalStorage.projects = localStorage.projects || JSON.stringify({})\n\nconst store = vue__WEBPACK_IMPORTED_MODULE_0___default.a.observable({\n  selectedColor: '#000000',\n  selectedProject: null,\n  unsavedProject: '',\n  unsavedPing: 0\n})\n\nconst commit = (field, value) => {\n  store[field] = value\n}\n\n\n//# sourceURL=webpack:///./src/assets/scripts/store.js?");

/***/ }),

/***/ "./src/components/app.vue":
/*!********************************!*\
  !*** ./src/components/app.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_vue_vue_type_template_id_6c0a0fc1_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.vue?vue&type=template&id=6c0a0fc1&scoped=true&lang=pug& */ \"./src/components/app.vue?vue&type=template&id=6c0a0fc1&scoped=true&lang=pug&\");\n/* harmony import */ var _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.vue?vue&type=script&lang=js& */ \"./src/components/app.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _app_vue_vue_type_style_index_0_id_6c0a0fc1_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.vue?vue&type=style&index=0&id=6c0a0fc1&lang=sass&scoped=true& */ \"./src/components/app.vue?vue&type=style&index=0&id=6c0a0fc1&lang=sass&scoped=true&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _app_vue_vue_type_template_id_6c0a0fc1_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _app_vue_vue_type_template_id_6c0a0fc1_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"6c0a0fc1\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/app.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/app.vue?");

/***/ }),

/***/ "./src/components/app.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./src/components/app.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./src/components/app.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/app.vue?");

/***/ }),

/***/ "./src/components/app.vue?vue&type=style&index=0&id=6c0a0fc1&lang=sass&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./src/components/app.vue?vue&type=style&index=0&id=6c0a0fc1&lang=sass&scoped=true& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_id_6c0a0fc1_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js??ref--1-2!../../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=style&index=0&id=6c0a0fc1&lang=sass&scoped=true& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/app.vue?vue&type=style&index=0&id=6c0a0fc1&lang=sass&scoped=true&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_id_6c0a0fc1_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_id_6c0a0fc1_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_id_6c0a0fc1_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_id_6c0a0fc1_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_id_6c0a0fc1_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/components/app.vue?");

/***/ }),

/***/ "./src/components/app.vue?vue&type=template&id=6c0a0fc1&scoped=true&lang=pug&":
/*!************************************************************************************!*\
  !*** ./src/components/app.vue?vue&type=template&id=6c0a0fc1&scoped=true&lang=pug& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_6c0a0fc1_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/pug-plain-loader!../../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=template&id=6c0a0fc1&scoped=true&lang=pug& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/app.vue?vue&type=template&id=6c0a0fc1&scoped=true&lang=pug&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_6c0a0fc1_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_6c0a0fc1_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/app.vue?");

/***/ }),

/***/ "./src/components/beadCount.vue":
/*!**************************************!*\
  !*** ./src/components/beadCount.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _beadCount_vue_vue_type_template_id_c9927eae_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./beadCount.vue?vue&type=template&id=c9927eae&scoped=true&lang=pug& */ \"./src/components/beadCount.vue?vue&type=template&id=c9927eae&scoped=true&lang=pug&\");\n/* harmony import */ var _beadCount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./beadCount.vue?vue&type=script&lang=js& */ \"./src/components/beadCount.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _beadCount_vue_vue_type_style_index_0_id_c9927eae_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./beadCount.vue?vue&type=style&index=0&id=c9927eae&lang=sass&scoped=true& */ \"./src/components/beadCount.vue?vue&type=style&index=0&id=c9927eae&lang=sass&scoped=true&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _beadCount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _beadCount_vue_vue_type_template_id_c9927eae_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _beadCount_vue_vue_type_template_id_c9927eae_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"c9927eae\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/beadCount.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/beadCount.vue?");

/***/ }),

/***/ "./src/components/beadCount.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/components/beadCount.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_beadCount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./beadCount.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./src/components/beadCount.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_beadCount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/beadCount.vue?");

/***/ }),

/***/ "./src/components/beadCount.vue?vue&type=style&index=0&id=c9927eae&lang=sass&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./src/components/beadCount.vue?vue&type=style&index=0&id=c9927eae&lang=sass&scoped=true& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_beadCount_vue_vue_type_style_index_0_id_c9927eae_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js??ref--1-2!../../node_modules/vue-loader/lib??vue-loader-options!./beadCount.vue?vue&type=style&index=0&id=c9927eae&lang=sass&scoped=true& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/beadCount.vue?vue&type=style&index=0&id=c9927eae&lang=sass&scoped=true&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_beadCount_vue_vue_type_style_index_0_id_c9927eae_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_beadCount_vue_vue_type_style_index_0_id_c9927eae_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_beadCount_vue_vue_type_style_index_0_id_c9927eae_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_beadCount_vue_vue_type_style_index_0_id_c9927eae_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_beadCount_vue_vue_type_style_index_0_id_c9927eae_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/components/beadCount.vue?");

/***/ }),

/***/ "./src/components/beadCount.vue?vue&type=template&id=c9927eae&scoped=true&lang=pug&":
/*!******************************************************************************************!*\
  !*** ./src/components/beadCount.vue?vue&type=template&id=c9927eae&scoped=true&lang=pug& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_beadCount_vue_vue_type_template_id_c9927eae_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/pug-plain-loader!../../node_modules/vue-loader/lib??vue-loader-options!./beadCount.vue?vue&type=template&id=c9927eae&scoped=true&lang=pug& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/beadCount.vue?vue&type=template&id=c9927eae&scoped=true&lang=pug&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_beadCount_vue_vue_type_template_id_c9927eae_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_beadCount_vue_vue_type_template_id_c9927eae_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/beadCount.vue?");

/***/ }),

/***/ "./src/components/bottom.vue":
/*!***********************************!*\
  !*** ./src/components/bottom.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bottom_vue_vue_type_template_id_10e356bb_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bottom.vue?vue&type=template&id=10e356bb&scoped=true&lang=pug& */ \"./src/components/bottom.vue?vue&type=template&id=10e356bb&scoped=true&lang=pug&\");\n/* harmony import */ var _bottom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bottom.vue?vue&type=script&lang=js& */ \"./src/components/bottom.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _bottom_vue_vue_type_style_index_0_id_10e356bb_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bottom.vue?vue&type=style&index=0&id=10e356bb&lang=sass&scoped=true& */ \"./src/components/bottom.vue?vue&type=style&index=0&id=10e356bb&lang=sass&scoped=true&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _bottom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _bottom_vue_vue_type_template_id_10e356bb_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _bottom_vue_vue_type_template_id_10e356bb_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"10e356bb\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/bottom.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/bottom.vue?");

/***/ }),

/***/ "./src/components/bottom.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/components/bottom.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./bottom.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./src/components/bottom.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/bottom.vue?");

/***/ }),

/***/ "./src/components/bottom.vue?vue&type=style&index=0&id=10e356bb&lang=sass&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./src/components/bottom.vue?vue&type=style&index=0&id=10e356bb&lang=sass&scoped=true& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_type_style_index_0_id_10e356bb_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js??ref--1-2!../../node_modules/vue-loader/lib??vue-loader-options!./bottom.vue?vue&type=style&index=0&id=10e356bb&lang=sass&scoped=true& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/bottom.vue?vue&type=style&index=0&id=10e356bb&lang=sass&scoped=true&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_type_style_index_0_id_10e356bb_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_type_style_index_0_id_10e356bb_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_type_style_index_0_id_10e356bb_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_type_style_index_0_id_10e356bb_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_type_style_index_0_id_10e356bb_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/components/bottom.vue?");

/***/ }),

/***/ "./src/components/bottom.vue?vue&type=template&id=10e356bb&scoped=true&lang=pug&":
/*!***************************************************************************************!*\
  !*** ./src/components/bottom.vue?vue&type=template&id=10e356bb&scoped=true&lang=pug& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_type_template_id_10e356bb_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/pug-plain-loader!../../node_modules/vue-loader/lib??vue-loader-options!./bottom.vue?vue&type=template&id=10e356bb&scoped=true&lang=pug& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/bottom.vue?vue&type=template&id=10e356bb&scoped=true&lang=pug&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_type_template_id_10e356bb_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_type_template_id_10e356bb_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/bottom.vue?");

/***/ }),

/***/ "./src/components/displayCanvas.vue":
/*!******************************************!*\
  !*** ./src/components/displayCanvas.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayCanvas_vue_vue_type_template_id_b9f3904c_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayCanvas.vue?vue&type=template&id=b9f3904c&lang=pug& */ \"./src/components/displayCanvas.vue?vue&type=template&id=b9f3904c&lang=pug&\");\n/* harmony import */ var _displayCanvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayCanvas.vue?vue&type=script&lang=js& */ \"./src/components/displayCanvas.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _displayCanvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _displayCanvas_vue_vue_type_template_id_b9f3904c_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _displayCanvas_vue_vue_type_template_id_b9f3904c_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/displayCanvas.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/displayCanvas.vue?");

/***/ }),

/***/ "./src/components/displayCanvas.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/components/displayCanvas.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_displayCanvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./displayCanvas.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./src/components/displayCanvas.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_displayCanvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/displayCanvas.vue?");

/***/ }),

/***/ "./src/components/displayCanvas.vue?vue&type=template&id=b9f3904c&lang=pug&":
/*!**********************************************************************************!*\
  !*** ./src/components/displayCanvas.vue?vue&type=template&id=b9f3904c&lang=pug& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_displayCanvas_vue_vue_type_template_id_b9f3904c_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/pug-plain-loader!../../node_modules/vue-loader/lib??vue-loader-options!./displayCanvas.vue?vue&type=template&id=b9f3904c&lang=pug& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/displayCanvas.vue?vue&type=template&id=b9f3904c&lang=pug&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_displayCanvas_vue_vue_type_template_id_b9f3904c_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_displayCanvas_vue_vue_type_template_id_b9f3904c_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/displayCanvas.vue?");

/***/ }),

/***/ "./src/components/projects.vue":
/*!*************************************!*\
  !*** ./src/components/projects.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projects_vue_vue_type_template_id_5711178a_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.vue?vue&type=template&id=5711178a&scoped=true&lang=pug& */ \"./src/components/projects.vue?vue&type=template&id=5711178a&scoped=true&lang=pug&\");\n/* harmony import */ var _projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.vue?vue&type=script&lang=js& */ \"./src/components/projects.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _projects_vue_vue_type_style_index_0_id_5711178a_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.vue?vue&type=style&index=0&id=5711178a&lang=sass&scoped=true& */ \"./src/components/projects.vue?vue&type=style&index=0&id=5711178a&lang=sass&scoped=true&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _projects_vue_vue_type_template_id_5711178a_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _projects_vue_vue_type_template_id_5711178a_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"5711178a\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/projects.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/projects.vue?");

/***/ }),

/***/ "./src/components/projects.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/components/projects.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./projects.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./src/components/projects.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/projects.vue?");

/***/ }),

/***/ "./src/components/projects.vue?vue&type=style&index=0&id=5711178a&lang=sass&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./src/components/projects.vue?vue&type=style&index=0&id=5711178a&lang=sass&scoped=true& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_style_index_0_id_5711178a_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js??ref--1-2!../../node_modules/vue-loader/lib??vue-loader-options!./projects.vue?vue&type=style&index=0&id=5711178a&lang=sass&scoped=true& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/projects.vue?vue&type=style&index=0&id=5711178a&lang=sass&scoped=true&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_style_index_0_id_5711178a_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_style_index_0_id_5711178a_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_style_index_0_id_5711178a_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_style_index_0_id_5711178a_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_style_index_0_id_5711178a_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/components/projects.vue?");

/***/ }),

/***/ "./src/components/projects.vue?vue&type=template&id=5711178a&scoped=true&lang=pug&":
/*!*****************************************************************************************!*\
  !*** ./src/components/projects.vue?vue&type=template&id=5711178a&scoped=true&lang=pug& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_template_id_5711178a_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/pug-plain-loader!../../node_modules/vue-loader/lib??vue-loader-options!./projects.vue?vue&type=template&id=5711178a&scoped=true&lang=pug& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/projects.vue?vue&type=template&id=5711178a&scoped=true&lang=pug&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_template_id_5711178a_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_template_id_5711178a_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/projects.vue?");

/***/ }),

/***/ "./src/components/side.vue":
/*!*********************************!*\
  !*** ./src/components/side.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _side_vue_vue_type_template_id_41a4bc32_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side.vue?vue&type=template&id=41a4bc32&lang=pug& */ \"./src/components/side.vue?vue&type=template&id=41a4bc32&lang=pug&\");\n/* harmony import */ var _side_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side.vue?vue&type=script&lang=js& */ \"./src/components/side.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _side_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _side_vue_vue_type_template_id_41a4bc32_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _side_vue_vue_type_template_id_41a4bc32_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/side.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/side.vue?");

/***/ }),

/***/ "./src/components/side.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./src/components/side.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_side_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./side.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./src/components/side.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_side_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/side.vue?");

/***/ }),

/***/ "./src/components/side.vue?vue&type=template&id=41a4bc32&lang=pug&":
/*!*************************************************************************!*\
  !*** ./src/components/side.vue?vue&type=template&id=41a4bc32&lang=pug& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_side_vue_vue_type_template_id_41a4bc32_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/pug-plain-loader!../../node_modules/vue-loader/lib??vue-loader-options!./side.vue?vue&type=template&id=41a4bc32&lang=pug& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/side.vue?vue&type=template&id=41a4bc32&lang=pug&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_side_vue_vue_type_template_id_41a4bc32_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_side_vue_vue_type_template_id_41a4bc32_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/side.vue?");

/***/ })

/******/ });