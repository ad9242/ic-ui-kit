"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[4029],{"../web-components/dist/esm/close-icon-539ec8d1.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>closeIcon});var closeIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>\n    <title>close icon</title>\n</svg>\n'},"../web-components/dist/esm/ic-dialog.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_dialog:()=>Dialog});var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__),_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_close_icon_539ec8d1_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../web-components/dist/esm/close-icon-539ec8d1.js"),_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../web-components/dist/esm/helpers-35ac5e03.js"),Dialog=(__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js"),function(){function Dialog(hostRef){var _this=this;(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__.A)(this,Dialog),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,hostRef),this.icDialogCancelled=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"icDialogCancelled",7),this.icDialogClosed=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"icDialogClosed",7),this.icDialogConfirmed=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"icDialogConfirmed",7),this.icDialogOpened=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"icDialogOpened",7),this.DATA_GETS_FOCUS="data-gets-focus",this.DATA_GETS_FOCUS_SELECTOR="[data-gets-focus]",this.DIALOG_CONTROLS="dialog-controls",this.dialogHeight=0,this.focusedElementIndex=0,this.IC_TEXT_FIELD="IC-TEXT-FIELD",this.IC_ACCORDION="IC-ACCORDION",this.IC_ACCORDION_GROUP="IC-ACCORDION-GROUP",this.resizeObserver=null,this.dialogOpened=function(){var _a;_this.dialogRendered=!0,_this.disableHeightConstraint?_this.dialogEl.show():null===(_a=_this.dialogEl)||void 0===_a||_a.showModal(),setTimeout((function(){_this.fadeIn=!0,_this.disableHeightConstraint&&0!==_this.backdropEl.scrollTop&&(_this.backdropEl.scrollTop=0)}),10),setTimeout((function(){_this.setInitialFocus(),(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_2__.j)(_this.runResizeObserver)}),75),setTimeout((function(){_this.getFocusedElementIndex(),_this.icDialogOpened.emit()}),80)},this.runResizeObserver=function(){_this.resizeObserver=new ResizeObserver((function(){clearTimeout(_this.resizeTimeout),_this.resizeTimeout=window.setTimeout(_this.resizeObserverCallback,80)})),_this.resizeObserver.observe(_this.dialogEl)},this.resizeObserverCallback=function(){_this.dialogEl.clientHeight!==_this.dialogHeight&&(_this.dialogHeight=_this.dialogEl.clientHeight)},this.refreshInteractiveElementsOnSlotChange=function(){_this.contentArea=_this.el.shadowRoot.querySelector("#dialog-content slot"),_this.contentArea.addEventListener("slotchange",_this.getInteractiveElements)},this.removeSlotChangeListener=function(){_this.contentArea&&_this.contentArea.removeEventListener("slotchange",_this.getInteractiveElements)},this.setInitialFocus=function(){var focusedElement;_this.sourceElement=document.activeElement,(focusedElement=null!==_this.el.querySelector(_this.DATA_GETS_FOCUS_SELECTOR)?_this.el.querySelector(_this.DATA_GETS_FOCUS_SELECTOR):_this.el.shadowRoot.querySelector(_this.DATA_GETS_FOCUS_SELECTOR)).tagName===_this.IC_TEXT_FIELD||focusedElement.tagName===_this.IC_ACCORDION_GROUP||focusedElement.tagName===_this.IC_ACCORDION?focusedElement.setFocus():focusedElement.focus({preventScroll:!!_this.disableHeightConstraint})},this.getFocusedElementIndex=function(){for(var i=0;i<_this.interactiveElementList.length;i++)_this.interactiveElementList[i]===(_this.el.shadowRoot.activeElement||document.activeElement)&&(_this.focusedElementIndex=i)},this.closeIconClick=function(){_this.open=!1},this.getInteractiveElements=function(){_this.interactiveElementList=Array.from(_this.el.shadowRoot.querySelectorAll("ic-button"));var slottedInteractiveElements=Array.from(_this.el.querySelectorAll('a[href], button, input:not(.ic-input), textarea, select, details, [tabindex]:not([tabindex="-1"]), \n          ic-button, ic-checkbox, ic-select, ic-search-bar, ic-tab-group, ic-radio-group, \n          ic-back-to-top, ic-breadcrumb, ic-chip[dismissible="true"], ic-footer-link, ic-link, ic-navigation-button, \n          ic-navigation-item, ic-switch, ic-text-field, ic-accordion-group, ic-accordion'));slottedInteractiveElements.length>0&&(slottedInteractiveElements[0].slot!==_this.DIALOG_CONTROLS?slottedInteractiveElements[0].setAttribute(_this.DATA_GETS_FOCUS,""):_this.destructive||slottedInteractiveElements[slottedInteractiveElements.length-1].setAttribute(_this.DATA_GETS_FOCUS,""));for(var i=0;i<slottedInteractiveElements.length;i++)_this.interactiveElementList.splice(1+i,0,slottedInteractiveElements[i])},this.getNextFocusEl=function(focusedElementIndex){return _this.interactiveElementList[focusedElementIndex]},this.focusNextInteractiveElement=function(shiftKey){_this.getFocusedElementIndex(),_this.setFocusIndexBasedOnShiftKey(shiftKey),_this.loopNextFocusIndexIfLastElement();var nextFocusEl=_this.getNextFocusEl(_this.focusedElementIndex),isHidden="hidden"===getComputedStyle(nextFocusEl).visibility||nextFocusEl.tagName===_this.IC_ACCORDION_GROUP&&nextFocusEl.hasAttribute("single-expansion");nextFocusEl.tagName===_this.IC_TEXT_FIELD?nextFocusEl.setFocus():(isHidden&&(_this.setFocusIndexBasedOnShiftKey(shiftKey),_this.loopNextFocusIndexIfLastElement(),nextFocusEl=_this.getNextFocusEl(_this.focusedElementIndex)),nextFocusEl.tagName===_this.IC_ACCORDION_GROUP||nextFocusEl.tagName===_this.IC_ACCORDION?nextFocusEl.setFocus():nextFocusEl.focus())},this.renderDialog=function(){var buttons=_this.buttons,size=_this.size,heading=_this.heading,label=_this.label,destructive=_this.destructive,dismissLabel=_this.dismissLabel,hideCloseButton=_this.hideCloseButton;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("dialog",{class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)({},"dialog",!0),"".concat(size),!0),"disable-height-constraint",_this.disableHeightConstraint),"disable-width-constraint",_this.disableWidthConstraint),"aria-labelledby":"dialog-label dialog-heading","aria-describedby":"dialog-alert dialog-content",ref:function ref(el){return _this.dialogEl=el}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"heading-area"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"heading-content"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"label"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{name:"label"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-typography",{variant:"label",id:"dialog-label"},label))),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"heading"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{name:"heading"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-typography",{variant:"h4",id:"dialog-heading"},heading)))),!hideCloseButton&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-button",{class:"close-icon",variant:"icon",innerHTML:_close_icon_539ec8d1_js__WEBPACK_IMPORTED_MODULE_6__.c,"aria-label":dismissLabel,onClick:_this.closeIconClick,"data-gets-focus":destructive||!buttons?"":null})),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"content-area"},(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_2__.i)(_this.el,"alert")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{name:"alert"}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{id:"dialog-content"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",null))),buttons&&((0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_2__.i)(_this.el,_this.DIALOG_CONTROLS)?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)({},_this.DIALOG_CONTROLS,!0)},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{name:_this.DIALOG_CONTROLS})):(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)({},_this.DIALOG_CONTROLS,!0)},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-button",{variant:"tertiary",onClick:function onClick(){return _this.cancelDialog()},class:"dialog-control-button","data-gets-focus":null},"Cancel"),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-button",{variant:_this.destructive?"destructive":"primary",onClick:function onClick(){return _this.confirmDialog()},class:"dialog-control-button","data-gets-focus":""},"Confirm"))))},this.dialogRendered=!1,this.fadeIn=!1,this.buttons=!0,this.closeOnBackdropClick=!0,this.destructive=!1,this.dismissLabel="Dismiss",this.disableHeightConstraint=!1,this.disableWidthConstraint=!1,this.hideCloseButton=!1,this.heading=void 0,this.label=void 0,this.open=void 0,this.size="small"}var _confirmDialog,_cancelDialog;return(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__.A)(Dialog,[{key:"watchOpenHandler",value:function watchOpenHandler(){var _this2=this;this.open?this.dialogOpened():(this.fadeIn=!1,null!==this.resizeObserver&&this.resizeObserver.disconnect(),setTimeout((function(){var _a;_this2.dialogRendered=!1,_this2.dialogEl.close(),null===(_a=_this2.sourceElement)||void 0===_a||_a.focus(),_this2.dialogHeight=0,_this2.icDialogClosed.emit()}),80))}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.removeSlotChangeListener()}},{key:"componentDidLoad",value:function componentDidLoad(){this.getInteractiveElements(),this.refreshInteractiveElementsOnSlotChange(),this.open&&this.dialogOpened(),!(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el,"heading")&&(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_2__.a)([{prop:this.heading,propName:"heading"}],"Dialog")}},{key:"componentDidRender",value:function componentDidRender(){"none"!==getComputedStyle(this.el).display&&this.disableHeightConstraint?document.body.style.overflow="hidden":document.body.style.overflow="auto"}},{key:"handleKeyboard",value:function handleKeyboard(ev){if(this.dialogRendered)switch(ev.key){case"Tab":ev.preventDefault(),this.focusNextInteractiveElement(ev.shiftKey);break;case"Escape":ev.repeat||(this.open=!1),ev.stopImmediatePropagation()}}},{key:"handleClick",value:function handleClick(ev){var dialogElement=this.el.shadowRoot.querySelector("dialog");if(this.closeOnBackdropClick&&ev.composedPath().indexOf(dialogElement)<=0){var rect=this.dialogEl.getBoundingClientRect();rect.top<=ev.clientY&&ev.clientY<=rect.top+rect.height&&rect.left<=ev.clientX&&ev.clientX<=rect.left+rect.width||(this.open=!1)}}},{key:"cancelDialog",value:(_cancelDialog=(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__.A)(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _callee(){return _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.icDialogCancelled.emit(),this.open=!1;case 2:case"end":return _context.stop()}}),_callee,this)}))),function cancelDialog(){return _cancelDialog.apply(this,arguments)})},{key:"confirmDialog",value:(_confirmDialog=(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__.A)(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _callee2(){return _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:this.icDialogConfirmed.emit();case 1:case"end":return _context2.stop()}}),_callee2,this)}))),function confirmDialog(){return _confirmDialog.apply(this,arguments)})},{key:"loopNextFocusIndexIfLastElement",value:function loopNextFocusIndexIfLastElement(){this.focusedElementIndex>this.interactiveElementList.length-1?this.focusedElementIndex=0:this.focusedElementIndex<0&&(this.focusedElementIndex=this.interactiveElementList.length-1)}},{key:"setFocusIndexBasedOnShiftKey",value:function setFocusIndexBasedOnShiftKey(shiftKey){shiftKey?this.focusedElementIndex-=1:this.focusedElementIndex+=1}},{key:"render",value:function render(){var _this3=this;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.H,{class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)({},"ic-dialog-hidden",!this.dialogRendered),"ic-dialog-fade-in",this.fadeIn),"disable-height-constraint",this.disableHeightConstraint)},this.disableHeightConstraint?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"backdrop",ref:function ref(el){return _this3.backdropEl=el}},this.renderDialog()):this.renderDialog())}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.g)(this)}}],[{key:"watchers",get:function get(){return{open:["watchOpenHandler"]}}}]),Dialog}());Dialog.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;min-height:100% !important;background:rgb(0 0 0 / 60%);z-index:var(--ic-z-index-dialog);opacity:0}:host(.ic-dialog-fade-in){opacity:1}:host(.disable-height-constraint){background:none;justify-content:unset;align-items:unset}.dialog.disable-height-constraint{max-height:none;position:relative}.dialog.disable-height-constraint .content-area{overflow-y:visible}@media (prefers-reduced-motion: no-preference){:host{transition:opacity var(--ic-easing-transition-slow)}.dialog{transform:translateY(-3rem);transition:transform 1000s}:host(.ic-dialog-fade-in) .dialog{transform:translateY(0);transition:transform var(--ic-easing-transition-slow)}}:host(.ic-dialog-hidden){display:none}.dialog{background-color:var(--ic-architectural-white);color:var(--ic-architectural-black);border:var(--ic-border-default);border-radius:var(--ic-border-radius);padding:var(--ic-space-xs) 0 var(--ic-space-md);display:flex;flex-direction:column;box-sizing:border-box;overflow-x:visible}.small{width:50%;max-width:25rem;min-height:11rem;max-height:70vh}.medium{width:70vw;max-width:44rem;min-height:12.5rem;max-height:70vh}.large{width:90vw;max-width:62.5rem;min-height:12.5rem;max-height:90vh}.heading-area{display:flex;margin-bottom:var(--ic-space-xs);padding:0 var(--ic-space-md)}.heading{overflow-wrap:break-word}.close-icon{margin-left:auto}.content-area{-ms-overflow-style:none;scrollbar-width:none;padding:0 var(--ic-space-md);margin:0;overflow-y:auto}.content-area::-webkit-scrollbar{display:none}#dialog-content{margin-bottom:var(--ic-space-sm)}#dialog-content ::slotted(ic-typography){overflow-wrap:break-word}#dialog-content ::slotted(*){position:relative}.dialog-controls{margin-top:auto;padding:var(--ic-space-xs) var(--ic-space-md) 0;display:flex;justify-content:flex-end;gap:var(--ic-space-md)}.dialog-control-button{width:-moz-fit-content;width:fit-content}.backdrop{overflow-y:auto;position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgb(0 0 0 / 60%);z-index:var(--ic-z-index-dialog);padding-top:16px;padding-bottom:16px}@media (min-width: 800px){:host([size="large"]) .dialog:not(.disable-width-constraint)>.content-area{width:75%}}@media (max-width: 576px){.dialog{width:100vw;height:100vh;transform:translateY(-5rem);max-width:none;max-height:none;box-sizing:border-box}.backdrop{padding:0}.dialog.disable-height-constraint{height:auto;min-height:100vh}}@media (max-width: 364px){.dialog-control-button{width:unset}}'}}]);