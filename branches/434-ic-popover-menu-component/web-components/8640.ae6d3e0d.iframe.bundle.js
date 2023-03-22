"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[8640],{"./dist/esm/check-icon-abb210ec.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Check});var Check='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.70501L19.385 5.29501L8.79502 15.875Z" fill="currentColor"/>\n</svg>\n'},"./dist/esm/chevron-icon-7927f709.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Chevron});var Chevron='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.70687 6L8.29688 7.41L12.8769 12L8.29688 16.59L9.70687 18L15.7069 12L9.70687 6Z" fill="currentColor"/>\n</svg>\n'},"./dist/esm/ic-menu-button.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_menu_button:()=>MenuButton});__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/esm/index-90721b3c.js"),_helpers_1239d760_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./dist/esm/helpers-1239d760.js"),_check_icon_abb210ec_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./dist/esm/check-icon-abb210ec.js"),_chevron_icon_7927f709_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./dist/esm/chevron-icon-7927f709.js");__webpack_require__("./dist/esm/types-dd515332.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var MenuButton=function(){function MenuButton(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,MenuButton),(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.r)(this,hostRef),this.childBlur=(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.c)(this,"childBlur",7),this.triggerPopoverMenuInstance=(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.c)(this,"triggerPopoverMenuInstance",7),this.handleMenuButtonClick=(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.c)(this,"handleMenuButtonClick",7),this.handleClick=function(e){e.preventDefault(),void 0!==_this.submenuTriggerFor?_this.triggerPopoverMenuInstance.emit():"toggle"===_this.variant&&(_this.toggleChecked?_this.toggleChecked=!1:_this.toggleChecked=!0),_this.handleMenuButtonClick.emit({label:_this.label,hasSubMenu:!!_this.el.submenuTriggerFor})},this.getButtonAriaLabel=function(){var ariaLabel=_this.label;void 0!==_this.description&&(ariaLabel=ariaLabel+", "+_this.description),void 0!==_this.keyboardShortcut&&(ariaLabel=ariaLabel+", "+_this.keyboardShortcut);var parentEl=(0,_helpers_1239d760_js__WEBPACK_IMPORTED_MODULE_8__.H)(_this.el);return"IC-MENU-GROUP"===parentEl.tagName?ariaLabel+", "+parentEl.label+" menu group":ariaLabel},this.variant="default",this.label=void 0,this.description=void 0,this.disabled=!1,this.href=void 0,this.target=void 0,this.rel=void 0,this.hreflang=void 0,this.referrerpolicy=void 0,this.keyboardShortcut=void 0,this.submenuTriggerFor=void 0,this.toggleChecked=!1}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(MenuButton,[{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_1239d760_js__WEBPACK_IMPORTED_MODULE_8__.a)([{prop:this.label,propName:"label"}],"Menu Button"),void 0!==this.submenuTriggerFor&&"default"!==this.variant&&(this.variant="default")}},{key:"render",value:function render(){var _class,_class2,_class3,_this2=this,isPropDefined=function isPropDefined(prop){return void 0!==prop?prop:null};return(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)(_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.H,{class:(_class={},_class.disabled=this.disabled,_class)},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("li",{role:"toggle"===this.variant?"menuitemcheckbox":"menuitem","aria-disabled":!!this.disabled},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("ic-button",{disableTooltip:!0,fullWidth:!0,disabled:this.disabled,variant:"tertiary",onClick:this.handleClick,href:isPropDefined(this.href),hreflang:isPropDefined(this.hreflang),target:isPropDefined(this.target),rel:isPropDefined(this.rel),referrerpolicy:void 0!==this.referrerpolicy?this.referrerpolicy:null,"aria-label":this.getButtonAriaLabel(),"aria-checked":"toggle"===this.variant&&!0===this.toggleChecked||("toggle"!==this.variant||!1!==this.toggleChecked)&&void 0,"aria-controls":void 0!==this.submenuTriggerFor&&"ic-popover-submenu-"+this.submenuTriggerFor,"aria-haspopup":!(void 0===this.submenuTriggerFor&&!this.el.classList.contains("ic-popover-submenu-back-button"))&&"menu","aria-owns":void 0!==this.submenuTriggerFor&&"ic-popover-submenu-"+this.submenuTriggerFor},(0,_helpers_1239d760_js__WEBPACK_IMPORTED_MODULE_8__.i)(this.el,"icon")&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("span",{class:"icon"},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot",{name:"icon"})),(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)((function MenuButtonInformation(){return(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:"menu-button-info"},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:"menu-labels"},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("ic-typography",{class:"menu-button-label"},_this2.el.classList.contains("ic-popover-submenu-back-button")&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("span",{class:"visually-hidden"},"Go "),_this2.label,_this2.el.classList.contains("ic-popover-submenu-back-button")&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("span",{class:"visually-hidden"}," to previous menu")),_this2.keyboardShortcut&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("ic-typography",{variant:"caption",class:"shortcut"},_this2.keyboardShortcut)),_this2.description&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("ic-typography",{class:"menu-button-description",variant:"caption"},_this2.description))}),null),"toggle"===this.variant&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("span",{class:(_class2={},_class2["check-icon"]=!0,_class2.hide=!this.toggleChecked,_class2),"aria-hidden":"true",innerHTML:_check_icon_abb210ec_js__WEBPACK_IMPORTED_MODULE_10__.C}),void 0!==this.submenuTriggerFor&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("span",{class:(_class3={},_class3["submenu-icon"]=!0,_class3),"aria-hidden":"true",innerHTML:_chevron_icon_7927f709_js__WEBPACK_IMPORTED_MODULE_11__.C}))))}},{key:"el",get:function get(){return(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.g)(this)}}],[{key:"delegatesFocus",get:function get(){return!0}}]),MenuButton}();MenuButton.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}li{list-style:none;padding:0}:host::part(button){color:var(--ic-color-primary-text);padding:var(--ic-space-xs);display:flex;align-items:flex-start;gap:var(--ic-space-xs);border-radius:0;min-height:2.5rem;height:auto}:host(.disabled)::part(button){color:var(--ic-architectural-200) !important}:host(.disabled) .menu-button-label,:host(.disabled) .shortcut,:host(.disabled) .menu-button-description{color:var(--ic-architectural-200) !important}:host([variant="destructive"])::part(button){color:var(--ic-action-destructive)}:host::part(button):hover{background-color:var(--ic-action-dark-bg-hover)}:host::part(button):focus-visible,:host::part(button):focus{color:var(--ic-color-white-text);background-color:var(--ic-focus-blue);box-shadow:none}:host([variant="destructive"])::part(button):focus-visible,:host([variant="destructive"])::part(button):focus{background-color:var(--ic-action-destructive)}ic-button:focus-within .menu-button-label,ic-button:focus-within .shortcut,ic-button:focus-within .menu-button-description{color:var(--ic-color-white-text)}:host::part(button):active{background-color:var(--ic-action-dark-bg-active);color:var(--ic-color-primary-text) !important}.menu-button-info{display:flex;flex-direction:column;align-items:baseline;white-space:pre-line;text-align:left}.menu-labels{display:flex;align-items:baseline;gap:8px}.menu-button-description{color:var(--ic-color-secondary-text)}.shortcut{color:var(--ic-color-tertiary-text);display:flex;flex:min-content}:host([variant="destructive"]) .menu-button-label{text-transform:uppercase;font-weight:600;letter-spacing:0.025em}.check-icon,.icon,.submenu-icon{display:flex;flex:var(--ic-space-lg)}.check-icon svg,.submenu-icon svg{height:var(--ic-space-lg);width:var(--ic-space-lg)}.check-icon.hide{visibility:hidden}.visually-hidden{position:absolute;left:-625rem;top:auto;width:1px;height:1px;overflow:hidden}'}}]);