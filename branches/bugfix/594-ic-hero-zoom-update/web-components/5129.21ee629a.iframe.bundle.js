"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[5129],{"./dist/esm/close-icon-2f02b42a.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>closeIcon});var closeIcon='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>\n    <title>close icon</title>\n</svg>\n'},"./dist/esm/ic-alert.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_alert:()=>Alert});__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/esm/index-90721b3c.js"),_close_icon_2f02b42a_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./dist/esm/close-icon-2f02b42a.js"),_helpers_b2b47a7d_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./dist/esm/helpers-b2b47a7d.js"),_types_dd515332_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./dist/esm/types-dd515332.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var Alert=function(){function Alert(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Alert),(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.r)(this,hostRef),this.dismiss=(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.c)(this,"dismiss",7),this.icDismiss=(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.c)(this,"icDismiss",7),this.dismissAction=function(){_this.dismiss.emit(),_this.icDismiss.emit()},this.variant="neutral",this.heading="",this.message=void 0,this.titleAbove=!1,this.dismissible=!1,this.announced=!0,this.visible=!0,this.alertTitleWrap=!1}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Alert,[{key:"handleClick",value:function handleClick(){this.visible=!this.visible}},{key:"alertTitleShouldWrap",value:function alertTitleShouldWrap(){var _a;(null===(_a=this.el.shadowRoot.querySelector(".alert-title"))||void 0===_a?void 0:_a.clientHeight)>24&&(this.alertTitleWrap=!0)}},{key:"componentDidLoad",value:function componentDidLoad(){this.alertTitleShouldWrap()}},{key:"render",value:function render(){var _class,_class2,_class3,_class4,_class5,_class6,_class7,variant=this.variant,heading=this.heading,message=this.message,titleAbove=this.titleAbove,dismissible=this.dismissible,announced=this.announced;return this.visible&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)(_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.H,{role:announced&&"alert",class:(_class={},_class[_types_dd515332_js__WEBPACK_IMPORTED_MODULE_9__.I.Dark]=!0,_class)},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:(_class2={},_class2.container=!0,_class2["container-"+variant]=!0,_class2)},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:"alert-icon-container"},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:(_class3={},_class3.divider=!0,_class3["divider-"+variant]=!0,_class3)}),(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("span",{class:(_class4={},_class4["alert-icon"]=!0,_class4["svg-container"]=!0,_class4["icon-"+variant]=!0,_class4),innerHTML:_helpers_b2b47a7d_js__WEBPACK_IMPORTED_MODULE_8__.V[variant].icon})),(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:"alert-content"},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:(_class5={},_class5["alert-message"]=!0,_class5["alert-message-title-above"]=titleAbove||this.alertTitleWrap,_class5)},heading&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("ic-typography",{class:(_class6={},_class6["alert-title"]=!0,_class6["alert-title-above"]=titleAbove||this.alertTitleWrap,_class6),variant:"subtitle-large"},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("p",null,heading)),(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot",{name:"message"},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("ic-typography",{variant:"body"},message))),(0,_helpers_b2b47a7d_js__WEBPACK_IMPORTED_MODULE_8__.i)(this.el,"action")&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:"alert-action-container"},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot",{name:"action"}))),(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:"dismiss-icon-container"},dismissible&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("ic-button",{class:(_class7={},_class7["svg-container"]=!0,_class7["dismiss-icon"]=!0,_class7),innerHTML:_close_icon_2f02b42a_js__WEBPACK_IMPORTED_MODULE_10__.c,onClick:this.dismissAction,variant:"icon",appearance:_types_dd515332_js__WEBPACK_IMPORTED_MODULE_9__.I.Dark,title:"dismiss"}))))}},{key:"el",get:function get(){return(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.g)(this)}}]),Alert}();Alert.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block}.container{min-height:3.5rem;border-radius:var(--ic-border-radius);position:relative;display:flex;align-items:center}.container-neutral{background-color:var(--ic-architectural-40)}.container-info{background-color:var(--ic-status-info-background)}.container-warning{background-color:var(--ic-status-warning-background)}.container-error{background-color:var(--ic-status-error-background)}.container-success{background-color:var(--ic-status-success-background)}.alert-icon-container{height:100%;display:flex;align-items:center}.divider{height:100%;width:var(--ic-space-xs);border-radius:var(--ic-space-xxxs) 0 0 var(--ic-space-xxxs);position:absolute}.divider-neutral{background-color:var(--ic-architectural-500)}.divider-info{background-color:var(--ic-status-info)}.divider-warning{background-color:var(--ic-status-warning-mid)}.divider-error{background-color:var(--ic-status-error)}.divider-success{background-color:var(--ic-status-success)}.alert-icon{height:var(--ic-space-lg);width:1.375rem;margin-left:1.125rem}.alert-icon>svg{height:var(--ic-space-lg);width:var(--ic-space-lg);display:inline-block}.icon-neutral>svg{fill:var(--ic-architectural-500)}:host([variant="info"]) .alert-icon svg{fill:var(--ic-status-info)}:host([variant="warning"]) .alert-icon svg{fill:var(--ic-status-warning-mid)}:host([variant="error"]) .alert-icon svg{fill:var(--ic-status-error)}:host([variant="success"]) .alert-icon svg{fill:var(--ic-status-success)}.alert-content{display:flex;align-items:center;margin-left:0.625rem;width:100%}.alert-message{display:flex;align-items:center;padding:var(--ic-space-xs) var(--ic-space-xs) var(--ic-space-xs) 0;flex:1}.alert-message-title-above{display:inline;font-size:0}.alert-title{margin-right:var(--ic-space-xs)}.alert-title-above{white-space:normal}.alert-action-container{margin-right:var(--ic-space-xs);display:flex;align-items:center}.dismiss-icon{margin-right:var(--ic-space-xxxs);margin-left:-0.375rem;padding:0.375rem;border:none;border-radius:50%;background-color:inherit;display:flex;align-items:center;justify-content:center}.dismiss-icon:hover{cursor:pointer}@media (max-width: 628px){.alert-content{display:flex;flex-direction:column;align-items:flex-start}.alert-message{display:flex;flex-direction:column;align-items:flex-start}.alert-title{white-space:normal}.alert-action-container{margin-bottom:var(--ic-space-xs)}}@media (forced-colors: active){.container{border:var(--ic-hc-border)}}'}}]);