"use strict";(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[1737],{"./dist/esm/ic-divider.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_divider:()=>Divider});__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_93509377_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/esm/index-93509377.js"),_helpers_268c2b7f_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./dist/esm/helpers-268c2b7f.js"),_types_f605c21c_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./dist/esm/types-f605c21c.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}var Divider=function(){function Divider(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Divider),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_7__.r)(this,hostRef),this.foregroundColor=(0,_helpers_268c2b7f_js__WEBPACK_IMPORTED_MODULE_8__.u)()}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Divider,[{key:"themeChangeHandler",value:function themeChangeHandler(ev){var theme=ev.detail;this.foregroundColor=theme.mode}},{key:"render",value:function render(){var _class;return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_7__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_7__.H,{"aria-hidden":"true"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_7__.h)("hr",{class:(_class={},_class.light=this.foregroundColor===_types_f605c21c_js__WEBPACK_IMPORTED_MODULE_9__.I.Light,_class)}))}}]),Divider}();Divider.style="hr.sc-ic-divider{padding:0;margin:0;border:none;height:var(--ic-space-1px);background-color:var(--ic-keyline-darken-rgb)}hr.light.sc-ic-divider{background-color:var(--ic-keyline-lighten-rgb)}"}}]);