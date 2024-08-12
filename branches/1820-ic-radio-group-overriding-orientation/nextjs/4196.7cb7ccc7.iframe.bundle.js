"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[4196],{"../web-components/dist/esm/ic-radio-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_radio_group:()=>RadioGroup});var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_3905ccc4_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-3905ccc4.js"),RadioGroup=(__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js"),function(){function RadioGroup(hostRef){var _this=this;(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__.A)(this,RadioGroup),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icChange=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icChange",7),this.resizeObserver=null,this.additionalField="additional-field",this.radioHorizontal="horizontal",this.radioVertical="vertical",this.runResizeObserver=function(){_this.resizeObserver=new ResizeObserver((function(){_this.checkOrientation()})),_this.resizeObserver.observe(_this.el)},this.handleKeyDown=function(event){switch(event.key){case"ArrowDown":case"ArrowRight":_this.radioOptions[_this.getNextItemToSelect(_this.selectedChild,!0)].click(),event.preventDefault();break;case"ArrowUp":case"ArrowLeft":_this.radioOptions[_this.getNextItemToSelect(_this.selectedChild,!1)].click(),event.preventDefault()}},this.getNextItemToSelect=function(currentItem,movingDown){var numRadios=_this.radioOptions.length-1;currentItem<1&&(currentItem=0);var nextItem=movingDown?currentItem+1:currentItem-1;return nextItem<0?nextItem=numRadios:nextItem>numRadios&&(nextItem=0),_this.radioOptions[nextItem].disabled&&(nextItem=_this.getNextItemToSelect(nextItem,movingDown)),nextItem},this.addSlotChangeListener=function(){_this.radioContainer.addEventListener("slotchange",_this.setRadioOptions)},this.setFirstRadioOptionTabIndex=function(value){_this.radioOptions[0].setTabIndex(value)},this.setRadioOptions=function(){_this.selectedChild=-1,_this.checkedValue="",_this.radioOptions=Array.from(_this.el.querySelectorAll("ic-radio-option")),_this.radioOptions.length>0&&(_this.radioOptions.forEach((function(radioOption,index){radioOption.selected||(radioOption.selected=_this.checkedValue===radioOption.value),radioOption.name=_this.name,radioOption.groupLabel=_this.label,radioOption.selected&&(_this.selectedChild=index,_this.checkedValue=radioOption.value)})),_this.setFirstRadioOptionTabIndex(_this.selectedChild>0?-1:0),_this.initialOrientation===_this.radioHorizontal&&void 0!==_this.radioOptions&&(_this.radioOptions.length>2||2===_this.radioOptions.length&&((0,_helpers_3905ccc4_js__WEBPACK_IMPORTED_MODULE_1__.i)(_this.radioOptions[0],_this.additionalField)||(0,_helpers_3905ccc4_js__WEBPACK_IMPORTED_MODULE_1__.i)(_this.radioOptions[1],_this.additionalField)))&&(_this.currentOrientation=_this.radioVertical))},this.checkedValue="",this.currentOrientation=void 0,this.initialOrientation=void 0,this.selectedChild=-1,this.disabled=!1,this.helperText=void 0,this.hideLabel=!1,this.label=void 0,this.name=void 0,this.orientation="vertical",this.required=!1,this.size="default",this.small=!1,this.validationStatus="",this.validationText=""}return(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__.A)(RadioGroup,[{key:"orientationChangeHandler",value:function orientationChangeHandler(){this.initialOrientation=this.orientation,this.checkOrientation()}},{key:"disconnectedCallback",value:function disconnectedCallback(){var _a,_b;null===(_a=this.resizeObserver)||void 0===_a||_a.disconnect(),null===(_b=this.radioContainer)||void 0===_b||_b.removeEventListener("slotchange",this.setRadioOptions)}},{key:"componentWillLoad",value:function componentWillLoad(){(0,_helpers_3905ccc4_js__WEBPACK_IMPORTED_MODULE_1__.k)(this.disabled,this.el),this.orientationChangeHandler(),this.currentOrientation=this.initialOrientation}},{key:"componentDidLoad",value:function componentDidLoad(){this.setRadioOptions(),(0,_helpers_3905ccc4_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.runResizeObserver),this.addSlotChangeListener(),(0,_helpers_3905ccc4_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.label,propName:"label"},{prop:this.name,propName:"name"}],"Radio Group")}},{key:"selectHandler",value:function selectHandler(_ref){var _a,_this2=this,detail=_ref.detail,target=_ref.target;this.checkedValue=detail.value;var selectedOption=target;this.icChange.emit({value:this.checkedValue,selectedOption:{radio:selectedOption,textFieldValue:null===(_a=null==selectedOption?void 0:selectedOption.querySelector("ic-text-field"))||void 0===_a?void 0:_a.value}}),void 0!==this.radioOptions&&(this.radioOptions.forEach((function(radioOption,index){radioOption.selected=_this2.checkedValue===radioOption.value,radioOption.selected&&(_this2.selectedChild=index)})),this.setFirstRadioOptionTabIndex(this.selectedChild>0?-1:0))}},{key:"changeHandler",value:function changeHandler(){var selectedOption=this.radioOptions.findIndex((function(radioOption){return radioOption.selected}));selectedOption<0&&(this.setFirstRadioOptionTabIndex(0),this.selectedChild=selectedOption)}},{key:"checkOrientation",value:function checkOrientation(){var _a,_b;if(this.initialOrientation===this.radioHorizontal){var totalWidth=0;Array.isArray(this.radioOptions)&&this.radioOptions.length>0?this.radioOptions.forEach((function(_ref2,i,arr){var clientWidth=_ref2.clientWidth;totalWidth+=clientWidth,i<arr.length-1&&(totalWidth+=40)})):totalWidth=0,this.initialOrientation==this.radioHorizontal&&(void 0!==this.radioOptions&&(this.radioOptions.length>2||2===this.radioOptions.length&&((0,_helpers_3905ccc4_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.radioOptions[0],this.additionalField)||(0,_helpers_3905ccc4_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.radioOptions[1],this.additionalField)))||totalWidth>=(null===(_a=this.radioContainer)||void 0===_a?void 0:_a.clientWidth)?this.currentOrientation=this.radioVertical:totalWidth<(null===(_b=this.radioContainer)||void 0===_b?void 0:_b.clientWidth)&&(this.currentOrientation=this.radioHorizontal))}}},{key:"render",value:function render(){var _this3=this;return(0,_helpers_3905ccc4_js__WEBPACK_IMPORTED_MODULE_1__.p)(!0,this.el,this.name,this.checkedValue,this.disabled),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{onKeyDown:this.handleKeyDown,class:{small:this.small||"small"===this.size}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{role:"radiogroup","aria-label":"".concat(this.label).concat(this.required?", required":"")},!this.hideLabel&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-label",{class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)({},"".concat(this.validationStatus),!0),label:this.label,helperText:this.helperText,required:this.required,disabled:this.disabled}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"radio-buttons-container":!0,horizontal:this.currentOrientation===this.radioHorizontal},ref:function ref(el){return _this3.radioContainer=el}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))),(0,_helpers_3905ccc4_js__WEBPACK_IMPORTED_MODULE_1__.t)(this.validationStatus,this.disabled)&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-validation",{ariaLiveMode:"polite",status:this.validationStatus,message:this.validationText}))}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}],[{key:"watchers",get:function get(){return{orientation:["orientationChangeHandler"]}}}]),RadioGroup}());RadioGroup.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block}ic-input-label.error{color:var(--ic-status-error)}ic-input-validation{margin-top:var(--ic-space-sm)}:host(.small) ic-input-validation{margin-top:calc(var(--ic-space-sm) / 2)}ic-input-label ic-typography{margin-bottom:var(--ic-space-sm)}:host(.small) ic-input-label ic-typography{margin-bottom:calc(var(--ic-space-sm) / 2)}:host .radio-buttons-container{display:flex;flex-direction:column;gap:var(--ic-space-xxs)}:host(.small) .radio-buttons-container{gap:var(--ic-space-xxxs)}:host .radio-buttons-container.horizontal{display:flex;flex-direction:row;gap:calc(var(--ic-space-xl) + var(--ic-space-xs))}:host(.small) .radio-buttons-container.horizontal{gap:var(--ic-space-xl)}'}}]);