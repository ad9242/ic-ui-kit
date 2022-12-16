"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[3063],{"./dist/esm/ic-switch.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_switch:()=>Switch});__webpack_require__("./node_modules/core-js/modules/es.string.small.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./dist/esm/index-1500de1f.js"),_helpers_3c43cc46_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./dist/esm/helpers-3c43cc46.js");__webpack_require__("./dist/esm/types-dd515332.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var inputIds=0,Switch=function(){function Switch(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Switch),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__.r)(this,hostRef),this.icChange=(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__.c)(this,"icChange",7),this.icFocus=(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__.c)(this,"icFocus",7),this.icBlur=(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__.c)(this,"icBlur",7),this.inputId="ic-switch-input-"+inputIds++,this.handleChange=function(){_this.checkedState=!_this.checkedState,_this.icChange.emit({checked:_this.checkedState,value:_this.value})},this.onFocus=function(){_this.icFocus.emit()},this.onBlur=function(){_this.icBlur.emit()},this.handleFormReset=function(){_this.checkedState=_this.initiallyChecked},this.label=void 0,this.hideLabel=!1,this.helperText="",this.checked=!1,this.small=!1,this.disabled=!1,this.name=this.inputId,this.showState=!1,this.value="on",this.checkedState=!1,this.initiallyChecked=this.checked}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Switch,[{key:"componentWillLoad",value:function componentWillLoad(){this.checkedState=this.checked,(0,_helpers_3c43cc46_js__WEBPACK_IMPORTED_MODULE_10__.b)(this.el,this.handleFormReset)}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_3c43cc46_js__WEBPACK_IMPORTED_MODULE_10__.a)([{prop:this.label,propName:"label"}],"Switch")}},{key:"disconnectedCallback",value:function disconnectedCallback(){(0,_helpers_3c43cc46_js__WEBPACK_IMPORTED_MODULE_10__.r)(this.el,this.handleFormReset)}},{key:"render",value:function render(){var _class,_class2,label=this.label,checkedState=this.checkedState,small=this.small,disabled=this.disabled,name=this.name,showState=this.showState,value=this.value,hideLabel=this.hideLabel,helperText=this.helperText,inputId=this.inputId;(0,_helpers_3c43cc46_js__WEBPACK_IMPORTED_MODULE_10__.d)(!0,this.el,name,checkedState?value:"",disabled);var describedBy=(0,_helpers_3c43cc46_js__WEBPACK_IMPORTED_MODULE_10__.f)(inputId,""!==helperText,!1);return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__.h)(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__.H,null,(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__.h)("label",{class:(_class={},_class["ic-switch-container"]=!0,_class["ic-switch-disabled"]=disabled,_class["ic-switch-small"]=small,_class),htmlFor:inputId},!hideLabel&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__.h)("ic-input-label",{for:inputId,label,helperText,readonly:!0,disabled,class:(_class2={},_class2["ic-switch-label"]=!0,_class2["ic-switch-label-small"]=small,_class2)}),!hideLabel&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__.h)("span",{class:"ic-switch-line-break"}),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__.h)("input",{checked:checkedState,disabled,"aria-label":label,"aria-checked":checkedState?"true":"false","aria-describedby":describedBy,role:"switch",class:"ic-switch-input",type:"checkbox",name:"toggle",id:inputId,onFocus:this.onFocus,onBlur:this.onBlur,onChange:this.handleChange}),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__.h)("span",{class:"ic-switch-toggle"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__.h)("svg",{class:"ic-switch-icon","aria-hidden":"true",focusable:"false",viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__.h)("line",{class:"ic-switch-icon-line",x1:"9",y1:small?"2":"1",x2:"9",y2:small?"8":"9"})),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__.h)("svg",{class:"ic-switch-icon","aria-hidden":"true",focusable:"false",viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__.h)("circle",{class:"ic-switch-icon-circle",fill:"none",cx:"5",cy:"5",r:small?"3.335":"4.445"}))),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__.h)("slot",{name:"right-adornment"}),showState&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__.h)("ic-typography",{"aria-hidden":"true",variant:"label",class:"ic-switch-checked-status"},checkedState?"On":"Off")))}},{key:"el",get:function get(){return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__.g)(this)}}]),Switch}();Switch.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:inline-block}input{overflow:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.ic-switch-container{display:flex;flex-wrap:wrap;align-items:center;gap:var(--ic-space-xxs);cursor:pointer}.ic-switch-label{margin-left:var(--ic-space-xxs);margin-bottom:var(--ic-space-sm)}.ic-switch-label-small{margin-bottom:10px}.ic-switch-toggle{display:flex;align-items:center;justify-content:space-around;width:64px;height:var(--ic-space-xl);position:relative;border-radius:100vw;background-color:var(--ic-architectural-200);border:1px solid var(--ic-architectural-700);box-sizing:border-box;transition:var(--ic-transition-duration-fast)}.ic-switch-line-break{flex:1 0 100%}.ic-switch-checked-status{padding-left:var(--ic-space-xxs)}.ic-switch-toggle::before{content:"";width:21.33px;height:21.33px;border-radius:50%;position:absolute;z-index:2;top:50%;left:5.33px;transform:translate(0, -50%);background-color:var(--ic-architectural-700);transition:var(--ic-transition-duration-slow)}.ic-switch-icon{display:inline-block;vertical-align:middle;width:10px;height:10px}.ic-switch-icon-circle,.ic-switch-icon-line{stroke-width:1}.ic-switch-icon-circle{stroke:var(--ic-architectural-700)}.ic-switch-icon-line{stroke:var(--ic-architectural-white)}@media (prefers-reduced-motion: reduce){.ic-switch-toggle::before{transition-duration:0ms}}.ic-switch-input:checked+.ic-switch-toggle{background-color:var(--ic-action-default);border:none}.ic-switch-input:checked+.ic-switch-toggle::before{transform:translate(var(--ic-space-xl), -50%);background-color:var(--ic-architectural-white)}.ic-switch-input:not([disabled])+.ic-switch-toggle:hover::before{box-shadow:0 0 0 12px var(--ic-action-dark-bg-hover)}.ic-switch-input:not([disabled])+.ic-switch-toggle:active::before{box-shadow:0 0 0 12px var(--ic-action-dark-bg-active)}.ic-switch-input:not([disabled]):checked+.ic-switch-toggle:hover::before{box-shadow:0 0 0 12px var(--ic-action-default-bg-hover)}.ic-switch-input:not([disabled]):checked+.ic-switch-toggle:active::before{box-shadow:0 0 0 12px var(--ic-action-default-bg-active)}.ic-switch-input:focus:not([disabled])+.ic-switch-toggle,.ic-switch-input:focus-visible:not([disabled])+.ic-switch-toggle{box-shadow:0 0 0 1px var(--ic-architectural-white),\n    0 0 0 3px var(--ic-action-default),\n    0 0 0 8px var(--ic-action-default-active-alpha)}.ic-switch-disabled{cursor:default}.ic-switch-disabled .ic-switch-icon-circle{stroke:var(--ic-architectural-300)}.ic-switch-disabled .ic-switch-icon-line{stroke:var(--ic-action-default-bg-active)}.ic-switch-input:disabled+.ic-switch-toggle{background-color:var(--ic-architectural-80);border:1px dashed var(--ic-architectural-300)}.ic-switch-input:disabled~.ic-switch-checked-status{color:var(--ic-architectural-300)}.ic-switch-input:disabled+.ic-switch-toggle::before{background-color:var(--ic-architectural-300)}.ic-switch-input:disabled:checked+.ic-switch-toggle{background-color:var(--ic-status-info-background);border:1px dashed #98c9f5}.ic-switch-input:disabled:checked+.ic-switch-toggle::before{background-color:var(--ic-architectural-white)}.ic-switch-small{gap:var(--ic-space-xxxs)}.ic-switch-small .ic-switch-checked-status{padding-left:6px}.ic-switch-small .ic-switch-toggle{width:var(--ic-space-xxl);height:var(--ic-space-lg)}.ic-switch-small .ic-switch-toggle::before{width:var(--ic-space-md);height:var(--ic-space-md);left:var(--ic-space-xxs)}.ic-switch-small .ic-switch-input:checked+.ic-switch-toggle::before{transform:translate(var(--ic-space-lg), -50%)}::slotted(*){margin-left:var(--ic-space-sm)}::slotted(svg){fill:currentColor}@media (forced-colors: active){.ic-switch-toggle::before,.ic-switch-input:checked+.ic-switch-toggle{border:var(--ic-hc-border)}.ic-switch-input:checked+.ic-switch-toggle::before{transform:translate(calc(var(--ic-space-xl) - 2px), -50%)}.ic-switch-input:disabled+.ic-switch-toggle,.ic-switch-input:disabled:checked+.ic-switch-toggle,.ic-switch-input:disabled+.ic-switch-toggle::before{border-color:GrayText}.ic-switch-input:disabled~.ic-switch-checked-status{color:GrayText}.ic-switch-disabled .ic-switch-icon-circle,.ic-switch-disabled .ic-switch-icon-line{stroke:GrayText}}'}}]);