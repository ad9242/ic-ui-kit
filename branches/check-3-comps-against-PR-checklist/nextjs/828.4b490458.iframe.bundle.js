"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[828],{"../web-components/dist/esm/ic-theme.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_theme:()=>Theme});var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_59cac3e8_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-59cac3e8.js"),console=(__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js"),__webpack_require__("./node_modules/console-browserify/index.js")),Theme=function(){function Theme(hostRef){var _this=this;(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__.A)(this,Theme),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.themeChange=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"themeChange",7),this.checkThemeColorContrast=function(){(0,_helpers_59cac3e8_js__WEBPACK_IMPORTED_MODULE_1__.J)()<_helpers_59cac3e8_js__WEBPACK_IMPORTED_MODULE_1__.K&&(0,_helpers_59cac3e8_js__WEBPACK_IMPORTED_MODULE_1__.J)()>_helpers_59cac3e8_js__WEBPACK_IMPORTED_MODULE_1__.W&&console.warn("The theme colour does not provide enough contrast with either of the ICDS black or white foreground colours. Consider choosing a colour with a different brightness to achieve sufficient colour contrast for good visibility. See https://www.w3.org/TR/AERT/#color-contrast for more information about colour contrast.")},this.setThemeColor=function(){if(null!==_this.color&&null!==(0,_helpers_59cac3e8_js__WEBPACK_IMPORTED_MODULE_1__.c)(_this.color)){var colorRGBA=(0,_helpers_59cac3e8_js__WEBPACK_IMPORTED_MODULE_1__.c)(_this.color);_this.setThemeRGBA(colorRGBA)}},this.setThemeRGBA=function(colorRGBA){if(null!==colorRGBA){var root=document.documentElement;root.style.setProperty("--ic-theme-primary-r",colorRGBA.r.toString()),root.style.setProperty("--ic-theme-primary-g",colorRGBA.g.toString()),root.style.setProperty("--ic-theme-primary-b",colorRGBA.b.toString()),root.style.setProperty("--ic-theme-primary-a",colorRGBA.a.toString()),_this.checkThemeColorContrast();var foregroundColor=(0,_helpers_59cac3e8_js__WEBPACK_IMPORTED_MODULE_1__.u)();_this.themeChange.emit({mode:foregroundColor,color:colorRGBA})}},this.color=null}return(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__.A)(Theme,[{key:"watchColorPropHandler",value:function watchColorPropHandler(){this.setThemeColor()}},{key:"componentWillLoad",value:function componentWillLoad(){this.setThemeColor()}},{key:"render",value:function render(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,null)}}],[{key:"watchers",get:function get(){return{color:["watchColorPropHandler"]}}}]),Theme}()}}]);