/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/less/style.less":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/less/style.less ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n#gameBackground {\n  inline-size: 800px;\n  block-size: 800px;\n  background-color: gray;\n  position: relative;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n#score {\n  inline-size: 796px;\n  block-size: 40px;\n  font-size: 2em;\n  font-weight: bold;\n  color: purple;\n  border: 2px solid seagreen;\n  position: relative;\n  top: 800px;\n}\n#gameOverPanel {\n  width: inherit;\n  height: inherit;\n  opacity: 0.7;\n  background-color: black;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 5;\n  visibility: hidden;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n#gameOverPanel div:nth-child(1) {\n  width: 200px;\n  height: 200px;\n  font-size: 4rem;\n  font-weight: bold;\n  color: tomato;\n}\n#gameOverPanel div:nth-child(2) {\n  width: 600px;\n  height: 80px;\n  font-size: 2rem;\n  font-weight: bold;\n  color: gainsboro;\n  text-align: center;\n}\n#gameOverPanel #msg {\n  font-size: 3em;\n  color: #00FF7F;\n}\n#res {\n  height: 70px;\n  width: 160px;\n  background-color: white;\n  font-size: 2rem;\n  font-weight: bold;\n  text-align: center;\n  line-height: 70px;\n  border-radius: 16px;\n  box-shadow: -4px 4px gray;\n}\n#res:hover {\n  cursor: pointer;\n  color: blueviolet;\n}\n", "",{"version":3,"sources":["webpack://./src/less/style.less"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,UAAA;AACJ;AAMA;EACI,kBAAA;EACA,iBAAA;EACA,sBAAA;EACA,kBAAA;EACA,MAAA;EACA,SAAA;EACA,2BAAA;AAJJ;AAYA;EACI,kBAAA;EACA,gBAAA;EACA,cAAA;EACA,iBAAA;EACA,aAAA;EACA,0BAAA;EACA,kBAAA;EACA,UAAA;AAVJ;AAgBA;EACI,cAAA;EACA,eAAA;EACA,YAAA;EACA,uBAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,UAAA;EACA,kBAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAdJ;AAAA;EAsBY,YAAA;EACA,aAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;AAnBZ;AAPA;EAoCY,YAAA;EACA,YAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;AA1BZ;AAfA;EAgDQ,cAAA;EACA,cAAA;AA9BR;AAyCA;EACI,YAAA;EACA,YAAA;EACA,uBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,iBAAA;EACA,mBAAA;EACA,yBAAA;AAvCJ;AAwCI;EACI,eAAA;EACA,iBAAA;AAtCR","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\n//游戏的面板大小设置\n@gbg-width: 800px;\n@gbg-height: 800px;\n@gbg-bc: gray;\n#gameBackground {\n    inline-size: @gbg-width;\n    block-size: @gbg-height;\n    background-color: @gbg-bc;\n    position: relative;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n//分数栏的大小设置\n@s-width: 796px;\n@s-height: 40px;\n@s-text-color: purple;\n@s-fsize: 2em;\n#score {\n    inline-size: @s-width;\n    block-size: @s-height;\n    font-size: @s-fsize;\n    font-weight: bold;\n    color: @s-text-color;\n    border: 2px solid seagreen;\n    position: relative;\n    top: 800px;\n}\n\n//'game over'面板设置\n@go-bc: black;\n@go-zindex: 5;\n#gameOverPanel {\n    width: inherit;\n    height: inherit;\n    opacity: 0.7;\n    background-color: @go-bc;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: @go-zindex;\n    visibility: hidden;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    & {\n        //'GAME OVER'提示\n        @text-width: 200px;\n        @text-height: 200px;\n        @text-size: 4rem;\n        @text-color: tomato;\n        div:nth-child(1) {\n            width: @text-width;\n            height: @text-height;\n            font-size: @text-size; \n            font-weight: bold;\n            color: @text-color;\n        }\n    }\n    & {\n        //分数结算\n        @s-text-width: 600px;\n        @s-text-height: 80px;\n        @s-text-size: 2rem;\n        @s-text-color: gainsboro;\n        div:nth-child(2) {\n            width: @s-text-width;\n            height: @s-text-height;\n            font-size: @s-text-size;\n            font-weight: bold;\n            color: @s-text-color;\n            text-align: center;\n        }\n    }\n    //结束原因\n    @fsize: 3em;\n    @mcolor: #00FF7F; \n    #msg {\n        font-size: @fsize;\n        color: @mcolor;\n    }\n}\n\n\n//restart按钮设置\n@rebtn-w: 70px;\n@rebtn-h: 160px;\n@rebtn-bgc: white;\n@rebtn-fsize: 2rem;\n@rebtn-line-height: @rebtn-w;\n#res {\n    height: @rebtn-w;\n    width: @rebtn-h;\n    background-color: @rebtn-bgc;\n    font-size: @rebtn-fsize;\n    font-weight: bold;\n    text-align: center;\n    line-height: @rebtn-line-height;\n    border-radius: 16px;\n    box-shadow: -4px 4px gray;\n    &:hover {\n        cursor: pointer;\n        color: blueviolet;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/less/style.less":
/*!*****************************!*\
  !*** ./src/less/style.less ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./style.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/less/style.less");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ }),

/***/ "./src/food.ts":
/*!*********************!*\
  !*** ./src/food.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var index_1 = __webpack_require__(/*! ./index */ "./src/index.ts");
var initial_1 = __webpack_require__(/*! ./initial */ "./src/initial.ts");
var tools_1 = __webpack_require__(/*! ./tools */ "./src/tools.ts");
var default_1 = /** @class */ (function () {
    function default_1(opts) {
        if (opts === void 0) { opts = initial_1.initialFood; }
        this.opts = opts;
    }
    //食物在面板上的随机位置与背景色
    default_1.prototype.randomPlace = function () {
        this.opts.x = (0, tools_1.getRandomInt)(0, initial_1.cells.amountX) * initial_1.initialCell.width;
        this.opts.y = (0, tools_1.getRandomInt)(0, initial_1.cells.amountY) * initial_1.initialCell.height;
        this.opts.backgroundColor = (0, tools_1.getRandomColor)();
        return {
            x: this.opts.x,
            y: this.opts.y
        };
    };
    //创建一个随机颜色随机位置的食物
    default_1.prototype.createFood = function () {
        var width = initial_1.initialCell.width, height = initial_1.initialCell.height;
        var _a = this.randomPlace(), x = _a.x, y = _a.y;
        var newNode = document.createElement('div');
        newNode.setAttribute('id', 'food');
        newNode.style.cssText = "\n            position: absolute;\n            top: ".concat(y, "px;\n            left: ").concat(x, "px;\n            z-index: 2;\n            width: ").concat(width, "px;\n            height: ").concat(height, "px;\n            background-color: ").concat((0, tools_1.getRandomColor)(), ";\n            line-height: ").concat(height, "px;\n            text-align: center;\n        ");
        index_1.gameBackground.appendChild(newNode);
    };
    //食物的移除
    default_1.prototype.foodRemove = function () {
        var food = document.getElementById('food');
        if (food === null) {
            return;
        }
        else {
            index_1.gameBackground.removeChild(food);
        }
    };
    return default_1;
}());
exports["default"] = default_1;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.msg = exports.res = exports.score = exports.gameOverPanel = exports.gameBackground = void 0;
var food_1 = __importDefault(__webpack_require__(/*! ./food */ "./src/food.ts"));
var keyevent_1 = __importDefault(__webpack_require__(/*! ./keyevent */ "./src/keyevent.ts"));
__webpack_require__(/*! ./less/style.less */ "./src/less/style.less");
var snake_1 = __importDefault(__webpack_require__(/*! ./snake */ "./src/snake.ts"));
//创建游戏主面板
exports.gameBackground = document.createElement('div');
exports.gameBackground.setAttribute('id', 'gameBackground');
document.body.appendChild(exports.gameBackground);
//创建游戏结束的面板
exports.gameOverPanel = document.createElement("div");
exports.gameOverPanel.setAttribute("id", 'gameOverPanel');
exports.gameBackground.appendChild(exports.gameOverPanel);
//创建分数栏
exports.score = document.createElement("div");
exports.score.setAttribute("id", 'score');
exports.score.appendChild(document.createTextNode("score: 0"));
exports.gameBackground.appendChild(exports.score);
//创建‘GAME OVER’ 字样
var gameover = document.createElement("div");
gameover.appendChild(document.createTextNode('GAME OVER'));
//创建游戏结束面板上的分数栏
var gameoverScore = document.createElement("div");
gameoverScore.appendChild(document.createTextNode("score: 0"));
//创建‘restart' 按钮
exports.res = document.createElement('div');
exports.res.setAttribute('id', 'res');
exports.res.appendChild(document.createTextNode('restart'));
//游戏结束原因
exports.msg = document.createElement("div");
exports.msg.setAttribute('id', 'msg');
exports.msg.appendChild(document.createTextNode(""));
exports.msg.style.color = 'white';
exports.gameOverPanel.appendChild(gameover);
exports.gameOverPanel.appendChild(gameoverScore);
exports.gameOverPanel.appendChild(exports.res);
exports.gameOverPanel.appendChild(exports.msg);
var rat = new food_1.default();
rat.createFood();
var newSnake = new snake_1.default();
newSnake.renderHead();
newSnake.renderBody();
(0, keyevent_1.default)(newSnake, rat);


/***/ }),

/***/ "./src/initial.ts":
/*!************************!*\
  !*** ./src/initial.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cells = exports.initialBodys = exports.initialSnakeHead = exports.initialFood = exports.initialPanel = exports.initialCell = void 0;
var tools_1 = __webpack_require__(/*! ./tools */ "./src/tools.ts");
//对于面板， 食物， 蛇的初始化
exports.initialCell = { width: 40, height: 40 };
exports.initialPanel = { width: 800, height: 800 };
exports.initialFood = { x: 0, y: 0, backgroundColor: 'red' };
exports.initialSnakeHead = { x: 40, y: 0, backgroundColor: 'yellow', nextActions: null };
exports.initialBodys = [
    { x: 0, y: 0 },
    { x: 0, y: 40 },
    { x: 0, y: 80 }
];
exports.cells = (0, tools_1.amountCell)(exports.initialPanel, exports.initialCell);


/***/ }),

/***/ "./src/keyevent.ts":
/*!*************************!*\
  !*** ./src/keyevent.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var logical_1 = __importDefault(__webpack_require__(/*! ./logical */ "./src/logical.ts"));
var types_1 = __webpack_require__(/*! ./types */ "./src/types/index.ts");
var LEFT = types_1.direction.LEFT, RIGHT = types_1.direction.RIGHT, UP = types_1.direction.UP, DOWN = types_1.direction.DOWN;
function default_1(snake, food) {
    logical_1.default.autoMove(snake, food);
    document.addEventListener('keydown', function (e) {
        switch (e.key) {
            case "ArrowUp":
                logical_1.default.compare(snake, UP) && logical_1.default.autoMove(snake, food, UP);
                break;
            case "ArrowDown":
                logical_1.default.compare(snake, DOWN) && logical_1.default.autoMove(snake, food, DOWN);
                break;
            case "ArrowLeft":
                logical_1.default.compare(snake, LEFT) && logical_1.default.autoMove(snake, food, LEFT);
                break;
            case "ArrowRight":
                logical_1.default.compare(snake, RIGHT) && logical_1.default.autoMove(snake, food, RIGHT);
                break;
            default: break;
        }
    });
}
exports["default"] = default_1;


/***/ }),

/***/ "./src/logical.ts":
/*!************************!*\
  !*** ./src/logical.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var index_1 = __webpack_require__(/*! ./index */ "./src/index.ts");
var initial_1 = __webpack_require__(/*! ./initial */ "./src/initial.ts");
var tools_1 = __webpack_require__(/*! ./tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/types/index.ts");
var RIGHT = types_1.direction.RIGHT;
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    //确定游戏面板的最小最大边界值
    default_1.minAndMaxBoundary = function () {
        var width = initial_1.initialCell.width, height = initial_1.initialCell.height;
        var _a = (0, tools_1.amountCell)(initial_1.initialPanel, initial_1.initialCell), amountX = _a.amountX, amountY = _a.amountY;
        var maxBoundaryX = (amountX - 1) * width;
        var maxBoundaryY = (amountY - 1) * height;
        return {
            minBoundary: 0,
            maxBoundaryX: maxBoundaryX,
            maxBoundaryY: maxBoundaryY
        };
    };
    //分数增长
    default_1.score = function () {
        return this.defaultScore += 10;
    };
    //判断snake的坐标值是否等于food 的坐标值,以此来判断是否吃食物
    default_1.eat = function (snake, food, scoreNode) {
        if (scoreNode === void 0) { scoreNode = index_1.score; }
        var _a = snake.opts, snakeX = _a.x, snakeY = _a.y;
        var _b = food.opts, foodX = _b.x, foodY = _b.y;
        if (snakeX === foodX && snakeY === foodY) {
            food.foodRemove();
            scoreNode.innerHTML = 'score: ' + this.score();
            food.createFood();
            snake.isGrow = true;
            return true;
        }
        return false;
    };
    //为当前静态属性autoFunc 绑定一个定时器    在一个方向上自动移动并处理动作的变更
    default_1.autoMove = function (snake, food, newAction) {
        var _this = this;
        if (newAction === void 0) { newAction = RIGHT; }
        //判断传入的新动作是否与上一次的动作相等，如果相等，直接执行bolsterMover函数
        //和eat函数，跳过对定时器的检测和变更
        if (this.autoOldAction === newAction) {
            snake.bolsterMove(newAction);
            this.eat(snake, food);
            return;
        }
        this.autoOldAction = newAction;
        var timer = function () {
            _this.autoFunc = setInterval(function () {
                snake.bolsterMove(newAction);
                _this.eat(snake, food);
            }, 500);
        };
        if (this.autoFunc === undefined) {
            timer();
        }
        else {
            clearInterval(this.autoFunc);
            timer();
        }
    };
    //过滤自动移动过程中反向动作
    default_1.compare = function (snake, action) {
        var nextActions = snake.opts.nextActions;
        if (nextActions === null)
            return true;
        if (snake.existActionInNextActions(action, nextActions)) {
            return true;
        }
        return false;
    };
    //游戏结束面板弹出
    default_1.gameOverPanel = function (reason) {
        index_1.gameOverPanel.style.visibility = 'visible';
        index_1.msg.innerHTML = reason;
        if (index_1.res.previousElementSibling === null)
            return;
        index_1.res.previousElementSibling.innerHTML = 'score: ' + this.defaultScore;
        index_1.res.addEventListener('click', function () {
            location.reload();
        });
        clearInterval(this.autoFunc);
        document.onkeydown = null;
    };
    default_1.defaultScore = 0;
    default_1.autoOldAction = null;
    return default_1;
}());
exports["default"] = default_1;


/***/ }),

/***/ "./src/snake.ts":
/*!**********************!*\
  !*** ./src/snake.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var index_1 = __webpack_require__(/*! ./index */ "./src/index.ts");
var initial_1 = __webpack_require__(/*! ./initial */ "./src/initial.ts");
var logical_1 = __importDefault(__webpack_require__(/*! ./logical */ "./src/logical.ts"));
var types_1 = __webpack_require__(/*! ./types */ "./src/types/index.ts");
var LEFT = types_1.direction.LEFT, RIGHT = types_1.direction.RIGHT, UP = types_1.direction.UP, DOWN = types_1.direction.DOWN;
var width = initial_1.initialCell.width, height = initial_1.initialCell.height;
var default_1 = /** @class */ (function () {
    function default_1(opts) {
        if (opts === void 0) { opts = initial_1.initialSnakeHead; }
        this.opts = opts;
        this._isGrow = false;
    }
    Object.defineProperty(default_1.prototype, "isGrow", {
        get: function () {
            return this._isGrow;
        },
        set: function (value) {
            this._isGrow = value;
        },
        enumerable: false,
        configurable: true
    });
    //创建蛇头并上样式
    default_1.prototype.renderHead = function () {
        var _a = this.opts, x = _a.x, y = _a.y, backgroundColor = _a.backgroundColor;
        var newNode = document.createElement("div");
        newNode.setAttribute('id', 'head');
        newNode.style.cssText = "\n            position: absolute;\n            z-index: 2;\n            top: ".concat(y, "px;\n            left: ").concat(x, "px;\n            width: ").concat(width, "px;\n            height: ").concat(height, "px;\n            background-color: ").concat(backgroundColor, ";\n        ");
        index_1.gameBackground.appendChild(newNode);
    };
    //渲染蛇身
    default_1.prototype.renderBody = function (oldCoor) {
        oldCoor === undefined
            ? this.bodyStyle()
            : this.bodyStyle(this.dealHeadCoor(oldCoor, initial_1.initialBodys));
    };
    //为身体设置样式
    default_1.prototype.bodyStyle = function (bodyArr) {
        if (bodyArr === void 0) { bodyArr = initial_1.initialBodys; }
        var len = bodyArr.length;
        for (var i = 0; i < len; i++) {
            var newNode = document.createElement("div");
            newNode.setAttribute('class', 'body');
            newNode.style.cssText = "\n               position: absolute;\n               z-index: 1;\n               top: ".concat(bodyArr[i].y, "px;\n               left: ").concat(bodyArr[i].x, "px; \n               width: ").concat(width, "px;\n               height: ").concat(height, "px;\n               background-color: blue;\n           ");
            index_1.gameBackground.appendChild(newNode);
        }
    };
    //移除蛇头元素
    default_1.prototype.removeHeadEle = function () {
        var head = document.getElementById('head');
        if (head === null)
            return;
        index_1.gameBackground.removeChild(head);
    };
    //移除身体元素
    default_1.prototype.removeBodysEle = function () {
        var bodys = document.getElementsByClassName('body');
        if (bodys.length === 0)
            return;
        for (var i = bodys.length - 1; i >= 0; i--) {
            index_1.gameBackground.removeChild(bodys[i]);
        }
    };
    //当前蛇头的朝向
    //依据蛇头与身体数组的第一值就可以判断蛇的朝向, 即长方形的长的方向
    default_1.prototype.headDirection = function (headCoor, bodysFirstCoor) {
        if (bodysFirstCoor === void 0) { bodysFirstCoor = initial_1.initialBodys[0]; }
        if (headCoor.y === bodysFirstCoor.y) {
            if (headCoor.x < bodysFirstCoor.x)
                return LEFT;
            return RIGHT;
        }
        else {
            if (headCoor.y < bodysFirstCoor.y)
                return UP;
            return DOWN;
        }
    };
    //蛇头的移动 
    default_1.prototype.move = function (action, oldCoor) {
        var x = oldCoor.x, y = oldCoor.y;
        switch (action) {
            case LEFT:
                x -= width;
                break;
            case RIGHT:
                x += width;
                break;
            case UP:
                y -= height;
                break;
            case DOWN:
                y += height;
                break;
            default: break;
        }
        this.opts.x = x;
        this.opts.y = y;
        this.removeHeadEle();
        this.removeBodysEle();
        this.renderHead();
        this.renderBody(oldCoor);
        this.headCollideBody();
        return { x: x, y: y };
    };
    //蛇头的移动过程中为nextActions添加动作
    default_1.prototype.bolsterMove = function (action, nextActions, currentCoor) {
        if (currentCoor === void 0) { currentCoor = { x: this.opts.x, y: this.opts.y }; }
        nextActions = this.opts.nextActions || { RIGHT: RIGHT, DOWN: DOWN, UP: UP };
        var stopRender = this.preventBoundary(action, currentCoor);
        if (stopRender) {
            return;
        }
        else {
            var isExist = this.existActionInNextActions(action, nextActions);
            if (isExist) {
                var newCoor = this.move(action, currentCoor);
                if (typeof newCoor === 'undefined')
                    return;
                var headDirection = this.headDirection(newCoor);
                nextActions = this.addActions(headDirection);
                this.opts.nextActions = nextActions;
            }
        }
    };
    //判断当前动作是否可以在nextActions中找到
    default_1.prototype.existActionInNextActions = function (action, nextActions) {
        for (var nextAction in nextActions) {
            if (action === nextActions[nextAction]) {
                return true;
            }
        }
        return false;
    };
    //边界的判断以及对出界时的阻止
    default_1.prototype.preventBoundary = function (action, coor) {
        var _a = logical_1.default.minAndMaxBoundary(), minBoundary = _a.minBoundary, maxBoundaryX = _a.maxBoundaryX, maxBoundaryY = _a.maxBoundaryY;
        var x = coor.x, y = coor.y;
        var stopRender = false;
        var Isstop = function () { return stopRender = !stopRender; };
        switch (action) {
            case UP:
                (y <= minBoundary) && Isstop() && logical_1.default.gameOverPanel("你撞墙了!");
                break;
            case DOWN:
                (y >= maxBoundaryY) && Isstop() && logical_1.default.gameOverPanel("你撞墙了!");
                break;
            case LEFT:
                (x <= minBoundary) && Isstop() && logical_1.default.gameOverPanel("你撞墙了!");
                break;
            case RIGHT:
                (x >= maxBoundaryX) && Isstop() && logical_1.default.gameOverPanel("你撞墙了!");
                break;
            default: break;
        }
        return stopRender;
    };
    //为head上的添加动作
    default_1.prototype.addActions = function (headDirection) {
        var actionsX = { LEFT: LEFT, RIGHT: RIGHT };
        var actionsY = { UP: UP, DOWN: DOWN };
        var actions = {};
        switch (headDirection) {
            case UP:
                actions = __assign({ UP: UP }, actionsX);
                break;
            case DOWN:
                actions = __assign({ DOWN: DOWN }, actionsX);
                break;
            case LEFT:
                actions = __assign({ LEFT: LEFT }, actionsY);
                break;
            case RIGHT:
                actions = __assign({ RIGHT: RIGHT }, actionsY);
                break;
            default: break;
        }
        return actions;
    };
    //根据蛇身是否增长来改变身体坐标的数组
    default_1.prototype.dealHeadCoor = function (oldHeadCoor, bodysArr) {
        var _a = this.opts, headCurrentX = _a.x, headCurrentY = _a.y;
        //如果蛇头触界则蛇头的新旧坐标值应当相等， 所以蛇身数组不变更
        if (headCurrentX === oldHeadCoor.x && headCurrentY === oldHeadCoor.y) {
            return bodysArr;
        }
        //如果增长变更isGrow的值，跳过一次pop(), 否则正常在数组前插入head的老坐标，删除
        //数组最后一项
        this.isGrow
            ? this.isGrow = !this.isGrow
            : bodysArr.pop();
        bodysArr.unshift(oldHeadCoor);
        return bodysArr;
    };
    //蛇头是否碰到蛇身， 如果碰到停止移动，弹出结束面板
    default_1.prototype.headCollideBody = function () {
        var _a = this.opts, currentHeadX = _a.x, currentHeadY = _a.y;
        var bodys = initial_1.initialBodys;
        for (var _i = 0, bodys_1 = bodys; _i < bodys_1.length; _i++) {
            var val = bodys_1[_i];
            if (currentHeadX === val.x && currentHeadY === val.y) {
                logical_1.default.gameOverPanel("你撞到自己了!");
            }
        }
    };
    return default_1;
}());
exports["default"] = default_1;


/***/ }),

/***/ "./src/tools.ts":
/*!**********************!*\
  !*** ./src/tools.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.amountCell = exports.getRandomColor = exports.getRandomInt = void 0;
//获取随机整数
var getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};
exports.getRandomInt = getRandomInt;
//获取随机rgb值
var getRandomColor = function () {
    var color = [0, 0, 0];
    for (var i = 0; i < color.length; i++) {
        color[i] = (0, exports.getRandomInt)(0, 255);
    }
    return "rgb(".concat(color[0], ", ").concat(color[1], ", ").concat(color[2], ")");
};
exports.getRandomColor = getRandomColor;
//计算x,y轴上的单元格数量
var amountCell = function (panel, cell) {
    var amountX = panel.width / cell.width;
    var amountY = panel.height / cell.height;
    return { amountX: amountX, amountY: amountY };
};
exports.amountCell = amountCell;


/***/ }),

/***/ "./src/types/index.ts":
/*!****************************!*\
  !*** ./src/types/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.direction = void 0;
//四个方向的枚举
var direction;
(function (direction) {
    direction[direction["LEFT"] = 0] = "LEFT";
    direction[direction["RIGHT"] = 1] = "RIGHT";
    direction[direction["UP"] = 2] = "UP";
    direction[direction["DOWN"] = 3] = "DOWN";
})(direction = exports.direction || (exports.direction = {}));


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NuYWtlX3RzLy4vc3JjL2xlc3Mvc3R5bGUubGVzcyIsIndlYnBhY2s6Ly9zbmFrZV90cy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc25ha2VfdHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zbmFrZV90cy8uL3NyYy9sZXNzL3N0eWxlLmxlc3M/NDI0YiIsIndlYnBhY2s6Ly9zbmFrZV90cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zbmFrZV90cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc25ha2VfdHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc25ha2VfdHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc25ha2VfdHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zbmFrZV90cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NuYWtlX3RzLy4vc3JjL2Zvb2QudHMiLCJ3ZWJwYWNrOi8vc25ha2VfdHMvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc25ha2VfdHMvLi9zcmMvaW5pdGlhbC50cyIsIndlYnBhY2s6Ly9zbmFrZV90cy8uL3NyYy9rZXlldmVudC50cyIsIndlYnBhY2s6Ly9zbmFrZV90cy8uL3NyYy9sb2dpY2FsLnRzIiwid2VicGFjazovL3NuYWtlX3RzLy4vc3JjL3NuYWtlLnRzIiwid2VicGFjazovL3NuYWtlX3RzLy4vc3JjL3Rvb2xzLnRzIiwid2VicGFjazovL3NuYWtlX3RzLy4vc3JjL3R5cGVzL2luZGV4LnRzIiwid2VicGFjazovL3NuYWtlX3RzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NuYWtlX3RzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NuYWtlX3RzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zbmFrZV90cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NuYWtlX3RzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc25ha2VfdHMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9zbmFrZV90cy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vc25ha2VfdHMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4jZ2FtZUJhY2tncm91bmQge1xcbiAgaW5saW5lLXNpemU6IDgwMHB4O1xcbiAgYmxvY2stc2l6ZTogODAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbn1cXG4jc2NvcmUge1xcbiAgaW5saW5lLXNpemU6IDc5NnB4O1xcbiAgYmxvY2stc2l6ZTogNDBweDtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogcHVycGxlO1xcbiAgYm9yZGVyOiAycHggc29saWQgc2VhZ3JlZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDgwMHB4O1xcbn1cXG4jZ2FtZU92ZXJQYW5lbCB7XFxuICB3aWR0aDogaW5oZXJpdDtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2dhbWVPdmVyUGFuZWwgZGl2Om50aC1jaGlsZCgxKSB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogdG9tYXRvO1xcbn1cXG4jZ2FtZU92ZXJQYW5lbCBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIGhlaWdodDogODBweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IGdhaW5zYm9ybztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2dhbWVPdmVyUGFuZWwgI21zZyB7XFxuICBmb250LXNpemU6IDNlbTtcXG4gIGNvbG9yOiAjMDBGRjdGO1xcbn1cXG4jcmVzIHtcXG4gIGhlaWdodDogNzBweDtcXG4gIHdpZHRoOiAxNjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogNzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBib3gtc2hhZG93OiAtNHB4IDRweCBncmF5O1xcbn1cXG4jcmVzOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiBibHVldmlvbGV0O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbGVzcy9zdHlsZS5sZXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFDSjtBQU1BO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FBSko7QUFZQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFWSjtBQWdCQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBZEo7QUFBQTtFQXNCWSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFuQlo7QUFQQTtFQW9DWSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUExQlo7QUFmQTtFQWdEUSxjQUFBO0VBQ0EsY0FBQTtBQTlCUjtBQXlDQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQXZDSjtBQXdDSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQXRDUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vL+a4uOaIj+eahOmdouadv+Wkp+Wwj+iuvue9rlxcbkBnYmctd2lkdGg6IDgwMHB4O1xcbkBnYmctaGVpZ2h0OiA4MDBweDtcXG5AZ2JnLWJjOiBncmF5O1xcbiNnYW1lQmFja2dyb3VuZCB7XFxuICAgIGlubGluZS1zaXplOiBAZ2JnLXdpZHRoO1xcbiAgICBibG9jay1zaXplOiBAZ2JnLWhlaWdodDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGdiZy1iYztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbn1cXG5cXG4vL+WIhuaVsOagj+eahOWkp+Wwj+iuvue9rlxcbkBzLXdpZHRoOiA3OTZweDtcXG5Acy1oZWlnaHQ6IDQwcHg7XFxuQHMtdGV4dC1jb2xvcjogcHVycGxlO1xcbkBzLWZzaXplOiAyZW07XFxuI3Njb3JlIHtcXG4gICAgaW5saW5lLXNpemU6IEBzLXdpZHRoO1xcbiAgICBibG9jay1zaXplOiBAcy1oZWlnaHQ7XFxuICAgIGZvbnQtc2l6ZTogQHMtZnNpemU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogQHMtdGV4dC1jb2xvcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgc2VhZ3JlZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA4MDBweDtcXG59XFxuXFxuLy8nZ2FtZSBvdmVyJ+mdouadv+iuvue9rlxcbkBnby1iYzogYmxhY2s7XFxuQGdvLXppbmRleDogNTtcXG4jZ2FtZU92ZXJQYW5lbCB7XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGdvLWJjO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogQGdvLXppbmRleDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAmIHtcXG4gICAgICAgIC8vJ0dBTUUgT1ZFUifmj5DnpLpcXG4gICAgICAgIEB0ZXh0LXdpZHRoOiAyMDBweDtcXG4gICAgICAgIEB0ZXh0LWhlaWdodDogMjAwcHg7XFxuICAgICAgICBAdGV4dC1zaXplOiA0cmVtO1xcbiAgICAgICAgQHRleHQtY29sb3I6IHRvbWF0bztcXG4gICAgICAgIGRpdjpudGgtY2hpbGQoMSkge1xcbiAgICAgICAgICAgIHdpZHRoOiBAdGV4dC13aWR0aDtcXG4gICAgICAgICAgICBoZWlnaHQ6IEB0ZXh0LWhlaWdodDtcXG4gICAgICAgICAgICBmb250LXNpemU6IEB0ZXh0LXNpemU7IFxcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIGNvbG9yOiBAdGV4dC1jb2xvcjtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAmIHtcXG4gICAgICAgIC8v5YiG5pWw57uT566XXFxuICAgICAgICBAcy10ZXh0LXdpZHRoOiA2MDBweDtcXG4gICAgICAgIEBzLXRleHQtaGVpZ2h0OiA4MHB4O1xcbiAgICAgICAgQHMtdGV4dC1zaXplOiAycmVtO1xcbiAgICAgICAgQHMtdGV4dC1jb2xvcjogZ2FpbnNib3JvO1xcbiAgICAgICAgZGl2Om50aC1jaGlsZCgyKSB7XFxuICAgICAgICAgICAgd2lkdGg6IEBzLXRleHQtd2lkdGg7XFxuICAgICAgICAgICAgaGVpZ2h0OiBAcy10ZXh0LWhlaWdodDtcXG4gICAgICAgICAgICBmb250LXNpemU6IEBzLXRleHQtc2l6ZTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICBjb2xvcjogQHMtdGV4dC1jb2xvcjtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgLy/nu5PmnZ/ljp/lm6BcXG4gICAgQGZzaXplOiAzZW07XFxuICAgIEBtY29sb3I6ICMwMEZGN0Y7IFxcbiAgICAjbXNnIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogQGZzaXplO1xcbiAgICAgICAgY29sb3I6IEBtY29sb3I7XFxuICAgIH1cXG59XFxuXFxuXFxuLy9yZXN0YXJ05oyJ6ZKu6K6+572uXFxuQHJlYnRuLXc6IDcwcHg7XFxuQHJlYnRuLWg6IDE2MHB4O1xcbkByZWJ0bi1iZ2M6IHdoaXRlO1xcbkByZWJ0bi1mc2l6ZTogMnJlbTtcXG5AcmVidG4tbGluZS1oZWlnaHQ6IEByZWJ0bi13O1xcbiNyZXMge1xcbiAgICBoZWlnaHQ6IEByZWJ0bi13O1xcbiAgICB3aWR0aDogQHJlYnRuLWg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IEByZWJ0bi1iZ2M7XFxuICAgIGZvbnQtc2l6ZTogQHJlYnRuLWZzaXplO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogQHJlYnRuLWxpbmUtaGVpZ2h0O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBib3gtc2hhZG93OiAtNHB4IDRweCBncmF5O1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGNvbG9yOiBibHVldmlvbGV0O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmxlc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5sZXNzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGluZGV4XzEgPSByZXF1aXJlKFwiLi9pbmRleFwiKTtcbnZhciBpbml0aWFsXzEgPSByZXF1aXJlKFwiLi9pbml0aWFsXCIpO1xudmFyIHRvb2xzXzEgPSByZXF1aXJlKFwiLi90b29sc1wiKTtcbnZhciBkZWZhdWx0XzEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gZGVmYXVsdF8xKG9wdHMpIHtcbiAgICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0gaW5pdGlhbF8xLmluaXRpYWxGb29kOyB9XG4gICAgICAgIHRoaXMub3B0cyA9IG9wdHM7XG4gICAgfVxuICAgIC8v6aOf54mp5Zyo6Z2i5p2/5LiK55qE6ZqP5py65L2N572u5LiO6IOM5pmv6ImyXG4gICAgZGVmYXVsdF8xLnByb3RvdHlwZS5yYW5kb21QbGFjZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5vcHRzLnggPSAoMCwgdG9vbHNfMS5nZXRSYW5kb21JbnQpKDAsIGluaXRpYWxfMS5jZWxscy5hbW91bnRYKSAqIGluaXRpYWxfMS5pbml0aWFsQ2VsbC53aWR0aDtcbiAgICAgICAgdGhpcy5vcHRzLnkgPSAoMCwgdG9vbHNfMS5nZXRSYW5kb21JbnQpKDAsIGluaXRpYWxfMS5jZWxscy5hbW91bnRZKSAqIGluaXRpYWxfMS5pbml0aWFsQ2VsbC5oZWlnaHQ7XG4gICAgICAgIHRoaXMub3B0cy5iYWNrZ3JvdW5kQ29sb3IgPSAoMCwgdG9vbHNfMS5nZXRSYW5kb21Db2xvcikoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHRoaXMub3B0cy54LFxuICAgICAgICAgICAgeTogdGhpcy5vcHRzLnlcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8v5Yib5bu65LiA5Liq6ZqP5py66aKc6Imy6ZqP5py65L2N572u55qE6aOf54mpXG4gICAgZGVmYXVsdF8xLnByb3RvdHlwZS5jcmVhdGVGb29kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd2lkdGggPSBpbml0aWFsXzEuaW5pdGlhbENlbGwud2lkdGgsIGhlaWdodCA9IGluaXRpYWxfMS5pbml0aWFsQ2VsbC5oZWlnaHQ7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucmFuZG9tUGxhY2UoKSwgeCA9IF9hLngsIHkgPSBfYS55O1xuICAgICAgICB2YXIgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdOb2RlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vZCcpO1xuICAgICAgICBuZXdOb2RlLnN0eWxlLmNzc1RleHQgPSBcIlxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICB0b3A6IFwiLmNvbmNhdCh5LCBcInB4O1xcbiAgICAgICAgICAgIGxlZnQ6IFwiKS5jb25jYXQoeCwgXCJweDtcXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgICAgIHdpZHRoOiBcIikuY29uY2F0KHdpZHRoLCBcInB4O1xcbiAgICAgICAgICAgIGhlaWdodDogXCIpLmNvbmNhdChoZWlnaHQsIFwicHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogXCIpLmNvbmNhdCgoMCwgdG9vbHNfMS5nZXRSYW5kb21Db2xvcikoKSwgXCI7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IFwiKS5jb25jYXQoaGVpZ2h0LCBcInB4O1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIFwiKTtcbiAgICAgICAgaW5kZXhfMS5nYW1lQmFja2dyb3VuZC5hcHBlbmRDaGlsZChuZXdOb2RlKTtcbiAgICB9O1xuICAgIC8v6aOf54mp55qE56e76ZmkXG4gICAgZGVmYXVsdF8xLnByb3RvdHlwZS5mb29kUmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZm9vZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb29kJyk7XG4gICAgICAgIGlmIChmb29kID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpbmRleF8xLmdhbWVCYWNrZ3JvdW5kLnJlbW92ZUNoaWxkKGZvb2QpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gZGVmYXVsdF8xO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmF1bHRfMTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5tc2cgPSBleHBvcnRzLnJlcyA9IGV4cG9ydHMuc2NvcmUgPSBleHBvcnRzLmdhbWVPdmVyUGFuZWwgPSBleHBvcnRzLmdhbWVCYWNrZ3JvdW5kID0gdm9pZCAwO1xudmFyIGZvb2RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9mb29kXCIpKTtcbnZhciBrZXlldmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2tleWV2ZW50XCIpKTtcbnJlcXVpcmUoXCIuL2xlc3Mvc3R5bGUubGVzc1wiKTtcbnZhciBzbmFrZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NuYWtlXCIpKTtcbi8v5Yib5bu65ri45oiP5Li76Z2i5p2/XG5leHBvcnRzLmdhbWVCYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5leHBvcnRzLmdhbWVCYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ2FtZUJhY2tncm91bmQnKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZXhwb3J0cy5nYW1lQmFja2dyb3VuZCk7XG4vL+WIm+W7uua4uOaIj+e7k+adn+eahOmdouadv1xuZXhwb3J0cy5nYW1lT3ZlclBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmV4cG9ydHMuZ2FtZU92ZXJQYW5lbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCAnZ2FtZU92ZXJQYW5lbCcpO1xuZXhwb3J0cy5nYW1lQmFja2dyb3VuZC5hcHBlbmRDaGlsZChleHBvcnRzLmdhbWVPdmVyUGFuZWwpO1xuLy/liJvlu7rliIbmlbDmoI9cbmV4cG9ydHMuc2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZXhwb3J0cy5zY29yZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCAnc2NvcmUnKTtcbmV4cG9ydHMuc2NvcmUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJzY29yZTogMFwiKSk7XG5leHBvcnRzLmdhbWVCYWNrZ3JvdW5kLmFwcGVuZENoaWxkKGV4cG9ydHMuc2NvcmUpO1xuLy/liJvlu7rigJhHQU1FIE9WRVLigJkg5a2X5qC3XG52YXIgZ2FtZW92ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZ2FtZW92ZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0dBTUUgT1ZFUicpKTtcbi8v5Yib5bu65ri45oiP57uT5p2f6Z2i5p2/5LiK55qE5YiG5pWw5qCPXG52YXIgZ2FtZW92ZXJTY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5nYW1lb3ZlclNjb3JlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwic2NvcmU6IDBcIikpO1xuLy/liJvlu7rigJhyZXN0YXJ0JyDmjInpkq5cbmV4cG9ydHMucmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5leHBvcnRzLnJlcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JlcycpO1xuZXhwb3J0cy5yZXMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ3Jlc3RhcnQnKSk7XG4vL+a4uOaIj+e7k+adn+WOn+WboFxuZXhwb3J0cy5tc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZXhwb3J0cy5tc2cuc2V0QXR0cmlidXRlKCdpZCcsICdtc2cnKTtcbmV4cG9ydHMubXNnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpKTtcbmV4cG9ydHMubXNnLnN0eWxlLmNvbG9yID0gJ3doaXRlJztcbmV4cG9ydHMuZ2FtZU92ZXJQYW5lbC5hcHBlbmRDaGlsZChnYW1lb3Zlcik7XG5leHBvcnRzLmdhbWVPdmVyUGFuZWwuYXBwZW5kQ2hpbGQoZ2FtZW92ZXJTY29yZSk7XG5leHBvcnRzLmdhbWVPdmVyUGFuZWwuYXBwZW5kQ2hpbGQoZXhwb3J0cy5yZXMpO1xuZXhwb3J0cy5nYW1lT3ZlclBhbmVsLmFwcGVuZENoaWxkKGV4cG9ydHMubXNnKTtcbnZhciByYXQgPSBuZXcgZm9vZF8xLmRlZmF1bHQoKTtcbnJhdC5jcmVhdGVGb29kKCk7XG52YXIgbmV3U25ha2UgPSBuZXcgc25ha2VfMS5kZWZhdWx0KCk7XG5uZXdTbmFrZS5yZW5kZXJIZWFkKCk7XG5uZXdTbmFrZS5yZW5kZXJCb2R5KCk7XG4oMCwga2V5ZXZlbnRfMS5kZWZhdWx0KShuZXdTbmFrZSwgcmF0KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jZWxscyA9IGV4cG9ydHMuaW5pdGlhbEJvZHlzID0gZXhwb3J0cy5pbml0aWFsU25ha2VIZWFkID0gZXhwb3J0cy5pbml0aWFsRm9vZCA9IGV4cG9ydHMuaW5pdGlhbFBhbmVsID0gZXhwb3J0cy5pbml0aWFsQ2VsbCA9IHZvaWQgMDtcbnZhciB0b29sc18xID0gcmVxdWlyZShcIi4vdG9vbHNcIik7XG4vL+WvueS6jumdouadv++8jCDpo5/nianvvIwg6JuH55qE5Yid5aeL5YyWXG5leHBvcnRzLmluaXRpYWxDZWxsID0geyB3aWR0aDogNDAsIGhlaWdodDogNDAgfTtcbmV4cG9ydHMuaW5pdGlhbFBhbmVsID0geyB3aWR0aDogODAwLCBoZWlnaHQ6IDgwMCB9O1xuZXhwb3J0cy5pbml0aWFsRm9vZCA9IHsgeDogMCwgeTogMCwgYmFja2dyb3VuZENvbG9yOiAncmVkJyB9O1xuZXhwb3J0cy5pbml0aWFsU25ha2VIZWFkID0geyB4OiA0MCwgeTogMCwgYmFja2dyb3VuZENvbG9yOiAneWVsbG93JywgbmV4dEFjdGlvbnM6IG51bGwgfTtcbmV4cG9ydHMuaW5pdGlhbEJvZHlzID0gW1xuICAgIHsgeDogMCwgeTogMCB9LFxuICAgIHsgeDogMCwgeTogNDAgfSxcbiAgICB7IHg6IDAsIHk6IDgwIH1cbl07XG5leHBvcnRzLmNlbGxzID0gKDAsIHRvb2xzXzEuYW1vdW50Q2VsbCkoZXhwb3J0cy5pbml0aWFsUGFuZWwsIGV4cG9ydHMuaW5pdGlhbENlbGwpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgbG9naWNhbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2xvZ2ljYWxcIikpO1xudmFyIHR5cGVzXzEgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcbnZhciBMRUZUID0gdHlwZXNfMS5kaXJlY3Rpb24uTEVGVCwgUklHSFQgPSB0eXBlc18xLmRpcmVjdGlvbi5SSUdIVCwgVVAgPSB0eXBlc18xLmRpcmVjdGlvbi5VUCwgRE9XTiA9IHR5cGVzXzEuZGlyZWN0aW9uLkRPV047XG5mdW5jdGlvbiBkZWZhdWx0XzEoc25ha2UsIGZvb2QpIHtcbiAgICBsb2dpY2FsXzEuZGVmYXVsdC5hdXRvTW92ZShzbmFrZSwgZm9vZCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgICAgICAgbG9naWNhbF8xLmRlZmF1bHQuY29tcGFyZShzbmFrZSwgVVApICYmIGxvZ2ljYWxfMS5kZWZhdWx0LmF1dG9Nb3ZlKHNuYWtlLCBmb29kLCBVUCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgICAgICAgICAgbG9naWNhbF8xLmRlZmF1bHQuY29tcGFyZShzbmFrZSwgRE9XTikgJiYgbG9naWNhbF8xLmRlZmF1bHQuYXV0b01vdmUoc25ha2UsIGZvb2QsIERPV04pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgICAgICAgIGxvZ2ljYWxfMS5kZWZhdWx0LmNvbXBhcmUoc25ha2UsIExFRlQpICYmIGxvZ2ljYWxfMS5kZWZhdWx0LmF1dG9Nb3ZlKHNuYWtlLCBmb29kLCBMRUZUKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgICAgICAgICAgbG9naWNhbF8xLmRlZmF1bHQuY29tcGFyZShzbmFrZSwgUklHSFQpICYmIGxvZ2ljYWxfMS5kZWZhdWx0LmF1dG9Nb3ZlKHNuYWtlLCBmb29kLCBSSUdIVCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OiBicmVhaztcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gZGVmYXVsdF8xO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuL2luZGV4XCIpO1xudmFyIGluaXRpYWxfMSA9IHJlcXVpcmUoXCIuL2luaXRpYWxcIik7XG52YXIgdG9vbHNfMSA9IHJlcXVpcmUoXCIuL3Rvb2xzXCIpO1xudmFyIHR5cGVzXzEgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcbnZhciBSSUdIVCA9IHR5cGVzXzEuZGlyZWN0aW9uLlJJR0hUO1xudmFyIGRlZmF1bHRfMSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBkZWZhdWx0XzEoKSB7XG4gICAgfVxuICAgIC8v56Gu5a6a5ri45oiP6Z2i5p2/55qE5pyA5bCP5pyA5aSn6L6555WM5YC8XG4gICAgZGVmYXVsdF8xLm1pbkFuZE1heEJvdW5kYXJ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd2lkdGggPSBpbml0aWFsXzEuaW5pdGlhbENlbGwud2lkdGgsIGhlaWdodCA9IGluaXRpYWxfMS5pbml0aWFsQ2VsbC5oZWlnaHQ7XG4gICAgICAgIHZhciBfYSA9ICgwLCB0b29sc18xLmFtb3VudENlbGwpKGluaXRpYWxfMS5pbml0aWFsUGFuZWwsIGluaXRpYWxfMS5pbml0aWFsQ2VsbCksIGFtb3VudFggPSBfYS5hbW91bnRYLCBhbW91bnRZID0gX2EuYW1vdW50WTtcbiAgICAgICAgdmFyIG1heEJvdW5kYXJ5WCA9IChhbW91bnRYIC0gMSkgKiB3aWR0aDtcbiAgICAgICAgdmFyIG1heEJvdW5kYXJ5WSA9IChhbW91bnRZIC0gMSkgKiBoZWlnaHQ7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtaW5Cb3VuZGFyeTogMCxcbiAgICAgICAgICAgIG1heEJvdW5kYXJ5WDogbWF4Qm91bmRhcnlYLFxuICAgICAgICAgICAgbWF4Qm91bmRhcnlZOiBtYXhCb3VuZGFyeVlcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8v5YiG5pWw5aKe6ZW/XG4gICAgZGVmYXVsdF8xLnNjb3JlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0U2NvcmUgKz0gMTA7XG4gICAgfTtcbiAgICAvL+WIpOaWrXNuYWtl55qE5Z2Q5qCH5YC85piv5ZCm562J5LqOZm9vZCDnmoTlnZDmoIflgLws5Lul5q2k5p2l5Yik5pat5piv5ZCm5ZCD6aOf54mpXG4gICAgZGVmYXVsdF8xLmVhdCA9IGZ1bmN0aW9uIChzbmFrZSwgZm9vZCwgc2NvcmVOb2RlKSB7XG4gICAgICAgIGlmIChzY29yZU5vZGUgPT09IHZvaWQgMCkgeyBzY29yZU5vZGUgPSBpbmRleF8xLnNjb3JlOyB9XG4gICAgICAgIHZhciBfYSA9IHNuYWtlLm9wdHMsIHNuYWtlWCA9IF9hLngsIHNuYWtlWSA9IF9hLnk7XG4gICAgICAgIHZhciBfYiA9IGZvb2Qub3B0cywgZm9vZFggPSBfYi54LCBmb29kWSA9IF9iLnk7XG4gICAgICAgIGlmIChzbmFrZVggPT09IGZvb2RYICYmIHNuYWtlWSA9PT0gZm9vZFkpIHtcbiAgICAgICAgICAgIGZvb2QuZm9vZFJlbW92ZSgpO1xuICAgICAgICAgICAgc2NvcmVOb2RlLmlubmVySFRNTCA9ICdzY29yZTogJyArIHRoaXMuc2NvcmUoKTtcbiAgICAgICAgICAgIGZvb2QuY3JlYXRlRm9vZCgpO1xuICAgICAgICAgICAgc25ha2UuaXNHcm93ID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIC8v5Li65b2T5YmN6Z2Z5oCB5bGe5oCnYXV0b0Z1bmMg57uR5a6a5LiA5Liq5a6a5pe25ZmoICAgIOWcqOS4gOS4quaWueWQkeS4iuiHquWKqOenu+WKqOW5tuWkhOeQhuWKqOS9nOeahOWPmOabtFxuICAgIGRlZmF1bHRfMS5hdXRvTW92ZSA9IGZ1bmN0aW9uIChzbmFrZSwgZm9vZCwgbmV3QWN0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChuZXdBY3Rpb24gPT09IHZvaWQgMCkgeyBuZXdBY3Rpb24gPSBSSUdIVDsgfVxuICAgICAgICAvL+WIpOaWreS8oOWFpeeahOaWsOWKqOS9nOaYr+WQpuS4juS4iuS4gOasoeeahOWKqOS9nOebuOetie+8jOWmguaenOebuOetie+8jOebtOaOpeaJp+ihjGJvbHN0ZXJNb3ZlcuWHveaVsFxuICAgICAgICAvL+WSjGVhdOWHveaVsO+8jOi3s+i/h+WvueWumuaXtuWZqOeahOajgOa1i+WSjOWPmOabtFxuICAgICAgICBpZiAodGhpcy5hdXRvT2xkQWN0aW9uID09PSBuZXdBY3Rpb24pIHtcbiAgICAgICAgICAgIHNuYWtlLmJvbHN0ZXJNb3ZlKG5ld0FjdGlvbik7XG4gICAgICAgICAgICB0aGlzLmVhdChzbmFrZSwgZm9vZCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hdXRvT2xkQWN0aW9uID0gbmV3QWN0aW9uO1xuICAgICAgICB2YXIgdGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hdXRvRnVuYyA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzbmFrZS5ib2xzdGVyTW92ZShuZXdBY3Rpb24pO1xuICAgICAgICAgICAgICAgIF90aGlzLmVhdChzbmFrZSwgZm9vZCk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5hdXRvRnVuYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aW1lcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmF1dG9GdW5jKTtcbiAgICAgICAgICAgIHRpbWVyKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8v6L+H5ruk6Ieq5Yqo56e75Yqo6L+H56iL5Lit5Y+N5ZCR5Yqo5L2cXG4gICAgZGVmYXVsdF8xLmNvbXBhcmUgPSBmdW5jdGlvbiAoc25ha2UsIGFjdGlvbikge1xuICAgICAgICB2YXIgbmV4dEFjdGlvbnMgPSBzbmFrZS5vcHRzLm5leHRBY3Rpb25zO1xuICAgICAgICBpZiAobmV4dEFjdGlvbnMgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKHNuYWtlLmV4aXN0QWN0aW9uSW5OZXh0QWN0aW9ucyhhY3Rpb24sIG5leHRBY3Rpb25zKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgLy/muLjmiI/nu5PmnZ/pnaLmnb/lvLnlh7pcbiAgICBkZWZhdWx0XzEuZ2FtZU92ZXJQYW5lbCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgaW5kZXhfMS5nYW1lT3ZlclBhbmVsLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIGluZGV4XzEubXNnLmlubmVySFRNTCA9IHJlYXNvbjtcbiAgICAgICAgaWYgKGluZGV4XzEucmVzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGluZGV4XzEucmVzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gJ3Njb3JlOiAnICsgdGhpcy5kZWZhdWx0U2NvcmU7XG4gICAgICAgIGluZGV4XzEucmVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuYXV0b0Z1bmMpO1xuICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSBudWxsO1xuICAgIH07XG4gICAgZGVmYXVsdF8xLmRlZmF1bHRTY29yZSA9IDA7XG4gICAgZGVmYXVsdF8xLmF1dG9PbGRBY3Rpb24gPSBudWxsO1xuICAgIHJldHVybiBkZWZhdWx0XzE7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gZGVmYXVsdF8xO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGluZGV4XzEgPSByZXF1aXJlKFwiLi9pbmRleFwiKTtcbnZhciBpbml0aWFsXzEgPSByZXF1aXJlKFwiLi9pbml0aWFsXCIpO1xudmFyIGxvZ2ljYWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9sb2dpY2FsXCIpKTtcbnZhciB0eXBlc18xID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XG52YXIgTEVGVCA9IHR5cGVzXzEuZGlyZWN0aW9uLkxFRlQsIFJJR0hUID0gdHlwZXNfMS5kaXJlY3Rpb24uUklHSFQsIFVQID0gdHlwZXNfMS5kaXJlY3Rpb24uVVAsIERPV04gPSB0eXBlc18xLmRpcmVjdGlvbi5ET1dOO1xudmFyIHdpZHRoID0gaW5pdGlhbF8xLmluaXRpYWxDZWxsLndpZHRoLCBoZWlnaHQgPSBpbml0aWFsXzEuaW5pdGlhbENlbGwuaGVpZ2h0O1xudmFyIGRlZmF1bHRfMSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBkZWZhdWx0XzEob3B0cykge1xuICAgICAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7IG9wdHMgPSBpbml0aWFsXzEuaW5pdGlhbFNuYWtlSGVhZDsgfVxuICAgICAgICB0aGlzLm9wdHMgPSBvcHRzO1xuICAgICAgICB0aGlzLl9pc0dyb3cgPSBmYWxzZTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlZmF1bHRfMS5wcm90b3R5cGUsIFwiaXNHcm93XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNHcm93O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5faXNHcm93ID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvL+WIm+W7uuibh+WktOW5tuS4iuagt+W8j1xuICAgIGRlZmF1bHRfMS5wcm90b3R5cGUucmVuZGVySGVhZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5vcHRzLCB4ID0gX2EueCwgeSA9IF9hLnksIGJhY2tncm91bmRDb2xvciA9IF9hLmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgdmFyIG5ld05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuZXdOb2RlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZCcpO1xuICAgICAgICBuZXdOb2RlLnN0eWxlLmNzc1RleHQgPSBcIlxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgICAgIHRvcDogXCIuY29uY2F0KHksIFwicHg7XFxuICAgICAgICAgICAgbGVmdDogXCIpLmNvbmNhdCh4LCBcInB4O1xcbiAgICAgICAgICAgIHdpZHRoOiBcIikuY29uY2F0KHdpZHRoLCBcInB4O1xcbiAgICAgICAgICAgIGhlaWdodDogXCIpLmNvbmNhdChoZWlnaHQsIFwicHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogXCIpLmNvbmNhdChiYWNrZ3JvdW5kQ29sb3IsIFwiO1xcbiAgICAgICAgXCIpO1xuICAgICAgICBpbmRleF8xLmdhbWVCYWNrZ3JvdW5kLmFwcGVuZENoaWxkKG5ld05vZGUpO1xuICAgIH07XG4gICAgLy/muLLmn5Pom4fouqtcbiAgICBkZWZhdWx0XzEucHJvdG90eXBlLnJlbmRlckJvZHkgPSBmdW5jdGlvbiAob2xkQ29vcikge1xuICAgICAgICBvbGRDb29yID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gdGhpcy5ib2R5U3R5bGUoKVxuICAgICAgICAgICAgOiB0aGlzLmJvZHlTdHlsZSh0aGlzLmRlYWxIZWFkQ29vcihvbGRDb29yLCBpbml0aWFsXzEuaW5pdGlhbEJvZHlzKSk7XG4gICAgfTtcbiAgICAvL+S4uui6q+S9k+iuvue9ruagt+W8j1xuICAgIGRlZmF1bHRfMS5wcm90b3R5cGUuYm9keVN0eWxlID0gZnVuY3Rpb24gKGJvZHlBcnIpIHtcbiAgICAgICAgaWYgKGJvZHlBcnIgPT09IHZvaWQgMCkgeyBib2R5QXJyID0gaW5pdGlhbF8xLmluaXRpYWxCb2R5czsgfVxuICAgICAgICB2YXIgbGVuID0gYm9keUFyci5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBuZXdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG5ld05vZGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdib2R5Jyk7XG4gICAgICAgICAgICBuZXdOb2RlLnN0eWxlLmNzc1RleHQgPSBcIlxcbiAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgICAgICAgIHRvcDogXCIuY29uY2F0KGJvZHlBcnJbaV0ueSwgXCJweDtcXG4gICAgICAgICAgICAgICBsZWZ0OiBcIikuY29uY2F0KGJvZHlBcnJbaV0ueCwgXCJweDsgXFxuICAgICAgICAgICAgICAgd2lkdGg6IFwiKS5jb25jYXQod2lkdGgsIFwicHg7XFxuICAgICAgICAgICAgICAgaGVpZ2h0OiBcIikuY29uY2F0KGhlaWdodCwgXCJweDtcXG4gICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICAgICAgICAgXCIpO1xuICAgICAgICAgICAgaW5kZXhfMS5nYW1lQmFja2dyb3VuZC5hcHBlbmRDaGlsZChuZXdOb2RlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy/np7vpmaTom4flpLTlhYPntKBcbiAgICBkZWZhdWx0XzEucHJvdG90eXBlLnJlbW92ZUhlYWRFbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWQnKTtcbiAgICAgICAgaWYgKGhlYWQgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGluZGV4XzEuZ2FtZUJhY2tncm91bmQucmVtb3ZlQ2hpbGQoaGVhZCk7XG4gICAgfTtcbiAgICAvL+enu+mZpOi6q+S9k+WFg+e0oFxuICAgIGRlZmF1bHRfMS5wcm90b3R5cGUucmVtb3ZlQm9keXNFbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBib2R5cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JvZHknKTtcbiAgICAgICAgaWYgKGJvZHlzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgZm9yICh2YXIgaSA9IGJvZHlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBpbmRleF8xLmdhbWVCYWNrZ3JvdW5kLnJlbW92ZUNoaWxkKGJvZHlzW2ldKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy/lvZPliY3om4flpLTnmoTmnJ3lkJFcbiAgICAvL+S+neaNruibh+WktOS4jui6q+S9k+aVsOe7hOeahOesrOS4gOWAvOWwseWPr+S7peWIpOaWreibh+eahOacneWQkSwg5Y2z6ZW/5pa55b2i55qE6ZW/55qE5pa55ZCRXG4gICAgZGVmYXVsdF8xLnByb3RvdHlwZS5oZWFkRGlyZWN0aW9uID0gZnVuY3Rpb24gKGhlYWRDb29yLCBib2R5c0ZpcnN0Q29vcikge1xuICAgICAgICBpZiAoYm9keXNGaXJzdENvb3IgPT09IHZvaWQgMCkgeyBib2R5c0ZpcnN0Q29vciA9IGluaXRpYWxfMS5pbml0aWFsQm9keXNbMF07IH1cbiAgICAgICAgaWYgKGhlYWRDb29yLnkgPT09IGJvZHlzRmlyc3RDb29yLnkpIHtcbiAgICAgICAgICAgIGlmIChoZWFkQ29vci54IDwgYm9keXNGaXJzdENvb3IueClcbiAgICAgICAgICAgICAgICByZXR1cm4gTEVGVDtcbiAgICAgICAgICAgIHJldHVybiBSSUdIVDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChoZWFkQ29vci55IDwgYm9keXNGaXJzdENvb3IueSlcbiAgICAgICAgICAgICAgICByZXR1cm4gVVA7XG4gICAgICAgICAgICByZXR1cm4gRE9XTjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy/om4flpLTnmoTnp7vliqggXG4gICAgZGVmYXVsdF8xLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKGFjdGlvbiwgb2xkQ29vcikge1xuICAgICAgICB2YXIgeCA9IG9sZENvb3IueCwgeSA9IG9sZENvb3IueTtcbiAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgTEVGVDpcbiAgICAgICAgICAgICAgICB4IC09IHdpZHRoO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBSSUdIVDpcbiAgICAgICAgICAgICAgICB4ICs9IHdpZHRoO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBVUDpcbiAgICAgICAgICAgICAgICB5IC09IGhlaWdodDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRE9XTjpcbiAgICAgICAgICAgICAgICB5ICs9IGhlaWdodDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0cy54ID0geDtcbiAgICAgICAgdGhpcy5vcHRzLnkgPSB5O1xuICAgICAgICB0aGlzLnJlbW92ZUhlYWRFbGUoKTtcbiAgICAgICAgdGhpcy5yZW1vdmVCb2R5c0VsZSgpO1xuICAgICAgICB0aGlzLnJlbmRlckhlYWQoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJCb2R5KG9sZENvb3IpO1xuICAgICAgICB0aGlzLmhlYWRDb2xsaWRlQm9keSgpO1xuICAgICAgICByZXR1cm4geyB4OiB4LCB5OiB5IH07XG4gICAgfTtcbiAgICAvL+ibh+WktOeahOenu+WKqOi/h+eoi+S4reS4um5leHRBY3Rpb25z5re75Yqg5Yqo5L2cXG4gICAgZGVmYXVsdF8xLnByb3RvdHlwZS5ib2xzdGVyTW92ZSA9IGZ1bmN0aW9uIChhY3Rpb24sIG5leHRBY3Rpb25zLCBjdXJyZW50Q29vcikge1xuICAgICAgICBpZiAoY3VycmVudENvb3IgPT09IHZvaWQgMCkgeyBjdXJyZW50Q29vciA9IHsgeDogdGhpcy5vcHRzLngsIHk6IHRoaXMub3B0cy55IH07IH1cbiAgICAgICAgbmV4dEFjdGlvbnMgPSB0aGlzLm9wdHMubmV4dEFjdGlvbnMgfHwgeyBSSUdIVDogUklHSFQsIERPV046IERPV04sIFVQOiBVUCB9O1xuICAgICAgICB2YXIgc3RvcFJlbmRlciA9IHRoaXMucHJldmVudEJvdW5kYXJ5KGFjdGlvbiwgY3VycmVudENvb3IpO1xuICAgICAgICBpZiAoc3RvcFJlbmRlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGlzRXhpc3QgPSB0aGlzLmV4aXN0QWN0aW9uSW5OZXh0QWN0aW9ucyhhY3Rpb24sIG5leHRBY3Rpb25zKTtcbiAgICAgICAgICAgIGlmIChpc0V4aXN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0Nvb3IgPSB0aGlzLm1vdmUoYWN0aW9uLCBjdXJyZW50Q29vcik7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXdDb29yID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHZhciBoZWFkRGlyZWN0aW9uID0gdGhpcy5oZWFkRGlyZWN0aW9uKG5ld0Nvb3IpO1xuICAgICAgICAgICAgICAgIG5leHRBY3Rpb25zID0gdGhpcy5hZGRBY3Rpb25zKGhlYWREaXJlY3Rpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0cy5uZXh0QWN0aW9ucyA9IG5leHRBY3Rpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvL+WIpOaWreW9k+WJjeWKqOS9nOaYr+WQpuWPr+S7peWcqG5leHRBY3Rpb25z5Lit5om+5YiwXG4gICAgZGVmYXVsdF8xLnByb3RvdHlwZS5leGlzdEFjdGlvbkluTmV4dEFjdGlvbnMgPSBmdW5jdGlvbiAoYWN0aW9uLCBuZXh0QWN0aW9ucykge1xuICAgICAgICBmb3IgKHZhciBuZXh0QWN0aW9uIGluIG5leHRBY3Rpb25zKSB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uID09PSBuZXh0QWN0aW9uc1tuZXh0QWN0aW9uXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIC8v6L6555WM55qE5Yik5pat5Lul5Y+K5a+55Ye655WM5pe255qE6Zi75q2iXG4gICAgZGVmYXVsdF8xLnByb3RvdHlwZS5wcmV2ZW50Qm91bmRhcnkgPSBmdW5jdGlvbiAoYWN0aW9uLCBjb29yKSB7XG4gICAgICAgIHZhciBfYSA9IGxvZ2ljYWxfMS5kZWZhdWx0Lm1pbkFuZE1heEJvdW5kYXJ5KCksIG1pbkJvdW5kYXJ5ID0gX2EubWluQm91bmRhcnksIG1heEJvdW5kYXJ5WCA9IF9hLm1heEJvdW5kYXJ5WCwgbWF4Qm91bmRhcnlZID0gX2EubWF4Qm91bmRhcnlZO1xuICAgICAgICB2YXIgeCA9IGNvb3IueCwgeSA9IGNvb3IueTtcbiAgICAgICAgdmFyIHN0b3BSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgdmFyIElzc3RvcCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0b3BSZW5kZXIgPSAhc3RvcFJlbmRlcjsgfTtcbiAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgVVA6XG4gICAgICAgICAgICAgICAgKHkgPD0gbWluQm91bmRhcnkpICYmIElzc3RvcCgpICYmIGxvZ2ljYWxfMS5kZWZhdWx0LmdhbWVPdmVyUGFuZWwoXCLkvaDmkp7lopnkuoYhXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBET1dOOlxuICAgICAgICAgICAgICAgICh5ID49IG1heEJvdW5kYXJ5WSkgJiYgSXNzdG9wKCkgJiYgbG9naWNhbF8xLmRlZmF1bHQuZ2FtZU92ZXJQYW5lbChcIuS9oOaSnuWimeS6hiFcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIExFRlQ6XG4gICAgICAgICAgICAgICAgKHggPD0gbWluQm91bmRhcnkpICYmIElzc3RvcCgpICYmIGxvZ2ljYWxfMS5kZWZhdWx0LmdhbWVPdmVyUGFuZWwoXCLkvaDmkp7lopnkuoYhXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBSSUdIVDpcbiAgICAgICAgICAgICAgICAoeCA+PSBtYXhCb3VuZGFyeVgpICYmIElzc3RvcCgpICYmIGxvZ2ljYWxfMS5kZWZhdWx0LmdhbWVPdmVyUGFuZWwoXCLkvaDmkp7lopnkuoYhXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3BSZW5kZXI7XG4gICAgfTtcbiAgICAvL+S4umhlYWTkuIrnmoTmt7vliqDliqjkvZxcbiAgICBkZWZhdWx0XzEucHJvdG90eXBlLmFkZEFjdGlvbnMgPSBmdW5jdGlvbiAoaGVhZERpcmVjdGlvbikge1xuICAgICAgICB2YXIgYWN0aW9uc1ggPSB7IExFRlQ6IExFRlQsIFJJR0hUOiBSSUdIVCB9O1xuICAgICAgICB2YXIgYWN0aW9uc1kgPSB7IFVQOiBVUCwgRE9XTjogRE9XTiB9O1xuICAgICAgICB2YXIgYWN0aW9ucyA9IHt9O1xuICAgICAgICBzd2l0Y2ggKGhlYWREaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgVVA6XG4gICAgICAgICAgICAgICAgYWN0aW9ucyA9IF9fYXNzaWduKHsgVVA6IFVQIH0sIGFjdGlvbnNYKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRE9XTjpcbiAgICAgICAgICAgICAgICBhY3Rpb25zID0gX19hc3NpZ24oeyBET1dOOiBET1dOIH0sIGFjdGlvbnNYKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgTEVGVDpcbiAgICAgICAgICAgICAgICBhY3Rpb25zID0gX19hc3NpZ24oeyBMRUZUOiBMRUZUIH0sIGFjdGlvbnNZKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUklHSFQ6XG4gICAgICAgICAgICAgICAgYWN0aW9ucyA9IF9fYXNzaWduKHsgUklHSFQ6IFJJR0hUIH0sIGFjdGlvbnNZKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY3Rpb25zO1xuICAgIH07XG4gICAgLy/moLnmja7om4fouqvmmK/lkKblop7plb/mnaXmlLnlj5jouqvkvZPlnZDmoIfnmoTmlbDnu4RcbiAgICBkZWZhdWx0XzEucHJvdG90eXBlLmRlYWxIZWFkQ29vciA9IGZ1bmN0aW9uIChvbGRIZWFkQ29vciwgYm9keXNBcnIpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5vcHRzLCBoZWFkQ3VycmVudFggPSBfYS54LCBoZWFkQ3VycmVudFkgPSBfYS55O1xuICAgICAgICAvL+WmguaenOibh+WktOinpueVjOWImeibh+WktOeahOaWsOaXp+WdkOagh+WAvOW6lOW9k+ebuOetie+8jCDmiYDku6Xom4fouqvmlbDnu4TkuI3lj5jmm7RcbiAgICAgICAgaWYgKGhlYWRDdXJyZW50WCA9PT0gb2xkSGVhZENvb3IueCAmJiBoZWFkQ3VycmVudFkgPT09IG9sZEhlYWRDb29yLnkpIHtcbiAgICAgICAgICAgIHJldHVybiBib2R5c0FycjtcbiAgICAgICAgfVxuICAgICAgICAvL+WmguaenOWinumVv+WPmOabtGlzR3Jvd+eahOWAvO+8jOi3s+i/h+S4gOasoXBvcCgpLCDlkKbliJnmraPluLjlnKjmlbDnu4TliY3mj5LlhaVoZWFk55qE6ICB5Z2Q5qCH77yM5Yig6ZmkXG4gICAgICAgIC8v5pWw57uE5pyA5ZCO5LiA6aG5XG4gICAgICAgIHRoaXMuaXNHcm93XG4gICAgICAgICAgICA/IHRoaXMuaXNHcm93ID0gIXRoaXMuaXNHcm93XG4gICAgICAgICAgICA6IGJvZHlzQXJyLnBvcCgpO1xuICAgICAgICBib2R5c0Fyci51bnNoaWZ0KG9sZEhlYWRDb29yKTtcbiAgICAgICAgcmV0dXJuIGJvZHlzQXJyO1xuICAgIH07XG4gICAgLy/om4flpLTmmK/lkKbnorDliLDom4fouqvvvIwg5aaC5p6c56Kw5Yiw5YGc5q2i56e75Yqo77yM5by55Ye657uT5p2f6Z2i5p2/XG4gICAgZGVmYXVsdF8xLnByb3RvdHlwZS5oZWFkQ29sbGlkZUJvZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMub3B0cywgY3VycmVudEhlYWRYID0gX2EueCwgY3VycmVudEhlYWRZID0gX2EueTtcbiAgICAgICAgdmFyIGJvZHlzID0gaW5pdGlhbF8xLmluaXRpYWxCb2R5cztcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBib2R5c18xID0gYm9keXM7IF9pIDwgYm9keXNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciB2YWwgPSBib2R5c18xW19pXTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50SGVhZFggPT09IHZhbC54ICYmIGN1cnJlbnRIZWFkWSA9PT0gdmFsLnkpIHtcbiAgICAgICAgICAgICAgICBsb2dpY2FsXzEuZGVmYXVsdC5nYW1lT3ZlclBhbmVsKFwi5L2g5pKe5Yiw6Ieq5bex5LqGIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIGRlZmF1bHRfMTtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZhdWx0XzE7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuYW1vdW50Q2VsbCA9IGV4cG9ydHMuZ2V0UmFuZG9tQ29sb3IgPSBleHBvcnRzLmdldFJhbmRvbUludCA9IHZvaWQgMDtcbi8v6I635Y+W6ZqP5py65pW05pWwXG52YXIgZ2V0UmFuZG9tSW50ID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG59O1xuZXhwb3J0cy5nZXRSYW5kb21JbnQgPSBnZXRSYW5kb21JbnQ7XG4vL+iOt+WPlumaj+acunJnYuWAvFxudmFyIGdldFJhbmRvbUNvbG9yID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjb2xvciA9IFswLCAwLCAwXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbG9yLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbG9yW2ldID0gKDAsIGV4cG9ydHMuZ2V0UmFuZG9tSW50KSgwLCAyNTUpO1xuICAgIH1cbiAgICByZXR1cm4gXCJyZ2IoXCIuY29uY2F0KGNvbG9yWzBdLCBcIiwgXCIpLmNvbmNhdChjb2xvclsxXSwgXCIsIFwiKS5jb25jYXQoY29sb3JbMl0sIFwiKVwiKTtcbn07XG5leHBvcnRzLmdldFJhbmRvbUNvbG9yID0gZ2V0UmFuZG9tQ29sb3I7XG4vL+iuoeeul3gseei9tOS4iueahOWNleWFg+agvOaVsOmHj1xudmFyIGFtb3VudENlbGwgPSBmdW5jdGlvbiAocGFuZWwsIGNlbGwpIHtcbiAgICB2YXIgYW1vdW50WCA9IHBhbmVsLndpZHRoIC8gY2VsbC53aWR0aDtcbiAgICB2YXIgYW1vdW50WSA9IHBhbmVsLmhlaWdodCAvIGNlbGwuaGVpZ2h0O1xuICAgIHJldHVybiB7IGFtb3VudFg6IGFtb3VudFgsIGFtb3VudFk6IGFtb3VudFkgfTtcbn07XG5leHBvcnRzLmFtb3VudENlbGwgPSBhbW91bnRDZWxsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRpcmVjdGlvbiA9IHZvaWQgMDtcbi8v5Zub5Liq5pa55ZCR55qE5p6a5Li+XG52YXIgZGlyZWN0aW9uO1xuKGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbiAgICBkaXJlY3Rpb25bZGlyZWN0aW9uW1wiTEVGVFwiXSA9IDBdID0gXCJMRUZUXCI7XG4gICAgZGlyZWN0aW9uW2RpcmVjdGlvbltcIlJJR0hUXCJdID0gMV0gPSBcIlJJR0hUXCI7XG4gICAgZGlyZWN0aW9uW2RpcmVjdGlvbltcIlVQXCJdID0gMl0gPSBcIlVQXCI7XG4gICAgZGlyZWN0aW9uW2RpcmVjdGlvbltcIkRPV05cIl0gPSAzXSA9IFwiRE9XTlwiO1xufSkoZGlyZWN0aW9uID0gZXhwb3J0cy5kaXJlY3Rpb24gfHwgKGV4cG9ydHMuZGlyZWN0aW9uID0ge30pKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==