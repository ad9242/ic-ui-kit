"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[3891],{"./dist/esm/close-icon-539ec8d1.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>closeIcon});const closeIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>\n    <title>close icon</title>\n</svg>\n'},"./dist/esm/ic-dialog.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_dialog:()=>Dialog});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-d1d2c456.js"),_close_icon_539ec8d1_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/esm/close-icon-539ec8d1.js"),_helpers_24ba0b83_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-24ba0b83.js");__webpack_require__("./dist/esm/types-6f6b41a5.js");const Dialog=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icDialogCancelled=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icDialogCancelled",7),this.icDialogClosed=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icDialogClosed",7),this.icDialogConfirmed=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icDialogConfirmed",7),this.icDialogOpened=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icDialogOpened",7),this.DATA_GETS_FOCUS="data-gets-focus",this.DATA_GETS_FOCUS_SELECTOR="[data-gets-focus]",this.DIALOG_CONTROLS="dialog-controls",this.dialogHeight=0,this.focusedElementIndex=0,this.IC_TEXT_FIELD="IC-TEXT-FIELD",this.IC_ACCORDION="IC-ACCORDION",this.IC_ACCORDION_GROUP="IC-ACCORDION-GROUP",this.resizeObserver=null,this.dialogOpened=()=>{var _a;this.dialogRendered=!0,this.disableHeightConstraint?this.dialogEl.show():null===(_a=this.dialogEl)||void 0===_a||_a.showModal(),setTimeout((()=>{this.fadeIn=!0,this.disableHeightConstraint&&0!==this.backdropEl.scrollTop&&(this.backdropEl.scrollTop=0)}),10),setTimeout((()=>{this.setInitialFocus(),(0,_helpers_24ba0b83_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.runResizeObserver)}),75),setTimeout((()=>{this.getFocusedElementIndex(),this.icDialogOpened.emit()}),80)},this.runResizeObserver=()=>{this.resizeObserver=new ResizeObserver((()=>{clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.resizeObserverCallback,80)})),this.resizeObserver.observe(this.dialogEl)},this.resizeObserverCallback=()=>{this.dialogEl.clientHeight!==this.dialogHeight&&(this.dialogHeight=this.dialogEl.clientHeight)},this.refreshInteractiveElementsOnSlotChange=()=>{this.contentArea=this.el.shadowRoot.querySelector("#dialog-content slot"),this.contentArea.addEventListener("slotchange",this.getInteractiveElements)},this.removeSlotChangeListener=()=>{this.contentArea&&this.contentArea.removeEventListener("slotchange",this.getInteractiveElements)},this.setInitialFocus=()=>{let focusedElement;this.sourceElement=document.activeElement,focusedElement=null!==this.el.querySelector(this.DATA_GETS_FOCUS_SELECTOR)?this.el.querySelector(this.DATA_GETS_FOCUS_SELECTOR):this.el.shadowRoot.querySelector(this.DATA_GETS_FOCUS_SELECTOR),focusedElement.tagName===this.IC_TEXT_FIELD||focusedElement.tagName===this.IC_ACCORDION_GROUP||focusedElement.tagName===this.IC_ACCORDION?focusedElement.setFocus():focusedElement.focus({preventScroll:!!this.disableHeightConstraint})},this.getFocusedElementIndex=()=>{for(let i=0;i<this.interactiveElementList.length;i++)this.interactiveElementList[i]===(this.el.shadowRoot.activeElement||document.activeElement)&&(this.focusedElementIndex=i)},this.setAlertVariant=()=>{if((0,_helpers_24ba0b83_js__WEBPACK_IMPORTED_MODULE_1__.d)(this.status)&&null!==this.status){this.el.shadowRoot.querySelector("ic-alert").setAttribute("variant",this.status)}},this.closeIconClick=()=>{this.open=!1},this.getInteractiveElements=()=>{this.interactiveElementList=Array.from(this.el.shadowRoot.querySelectorAll("ic-button"));const slottedInteractiveElements=Array.from(this.el.querySelectorAll('a[href], button, input:not(.ic-input), textarea, select, details, [tabindex]:not([tabindex="-1"]), \n          ic-button, ic-checkbox, ic-select, ic-search-bar, ic-tab-group, ic-radio-group, \n          ic-back-to-top, ic-breadcrumb, ic-chip[dismissible="true"], ic-footer-link, ic-link, ic-navigation-button, \n          ic-navigation-item, ic-switch, ic-text-field, ic-accordion-group, ic-accordion'));slottedInteractiveElements.length>0&&(slottedInteractiveElements[0].slot!==this.DIALOG_CONTROLS?slottedInteractiveElements[0].setAttribute(this.DATA_GETS_FOCUS,""):this.destructive||slottedInteractiveElements[slottedInteractiveElements.length-1].setAttribute(this.DATA_GETS_FOCUS,""));for(let i=0;i<slottedInteractiveElements.length;i++)this.interactiveElementList.splice(1+i,0,slottedInteractiveElements[i])},this.getNextFocusEl=focusedElementIndex=>this.interactiveElementList[focusedElementIndex],this.focusNextInteractiveElement=shiftKey=>{this.getFocusedElementIndex(),this.setFocusIndexBasedOnShiftKey(shiftKey),this.loopNextFocusIndexIfLastElement();let nextFocusEl=this.getNextFocusEl(this.focusedElementIndex);const isHidden="hidden"===getComputedStyle(nextFocusEl).visibility||nextFocusEl.tagName===this.IC_ACCORDION_GROUP&&nextFocusEl.hasAttribute("single-expansion");nextFocusEl.tagName===this.IC_TEXT_FIELD?nextFocusEl.setFocus():(isHidden&&(this.setFocusIndexBasedOnShiftKey(shiftKey),this.loopNextFocusIndexIfLastElement(),nextFocusEl=this.getNextFocusEl(this.focusedElementIndex)),nextFocusEl.tagName===this.IC_ACCORDION_GROUP||nextFocusEl.tagName===this.IC_ACCORDION?nextFocusEl.setFocus():nextFocusEl.focus())},this.setButtonOnClick=()=>{var _a,_b,_c;this.buttons&&(this.buttonOnclick0=new Function(null===(_a=this.buttonProps[0])||void 0===_a?void 0:_a.onclick),this.buttonOnclick1=new Function(null===(_b=this.buttonProps[1])||void 0===_b?void 0:_b.onclick),this.buttonOnclick2=new Function(null===(_c=this.buttonProps[2])||void 0===_c?void 0:_c.onclick))},this.getButtonOnclick=index=>0===index?this.buttonOnclick0():1===index?this.buttonOnclick1():this.buttonOnclick2(),this.getButtonVariant=index=>{const mainVariant=this.destructive?"destructive":"primary";return 1===this.buttonProps.length?mainVariant:2===this.buttonProps.length?0===index?"tertiary":mainVariant:2===index?mainVariant:"secondary"},this.renderDialog=()=>{const{alertHeading,alertMessage,buttons,buttonProps,size,heading,label,status,destructive,dismissLabel,hideCloseButton}=this;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("dialog",{class:{dialog:!0,[`${size}`]:!0,"disable-height-constraint":this.disableHeightConstraint,"disable-width-constraint":this.disableWidthConstraint},"aria-labelledby":"dialog-label dialog-heading","aria-describedby":"dialog-alert dialog-content",ref:el=>this.dialogEl=el},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"heading-area"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"heading-content"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"label"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"label"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"label",id:"dialog-label"},label))),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"heading"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"heading"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"h4",id:"dialog-heading"},heading)))),!hideCloseButton&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{class:"close-icon",variant:"icon",innerHTML:_close_icon_539ec8d1_js__WEBPACK_IMPORTED_MODULE_3__.c,"aria-label":dismissLabel,onClick:this.closeIconClick,"data-gets-focus":destructive||!buttons?"":null})),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"content-area"},(0,_helpers_24ba0b83_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"alert")?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"alert"}):status&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-alert",{variant:status,heading:alertHeading,message:alertMessage,"title-above":!0,class:"status-alert",id:"dialog-alert"}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{id:"dialog-content"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))),(buttons||(0,_helpers_24ba0b83_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,this.DIALOG_CONTROLS))&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{[this.DIALOG_CONTROLS]:!0,"triple-button":3===buttonProps.length}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:this.DIALOG_CONTROLS},!(0,_helpers_24ba0b83_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,this.DIALOG_CONTROLS)&&buttonProps.map(((props,index)=>index>2?void 0:(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{variant:this.getButtonVariant(index),onClick:()=>this.getButtonOnclick(index),class:"dialog-control-button","full-width":3===buttonProps.length,"data-gets-focus":"primary"===this.getButtonVariant(index)?"":null},props.label))))))},this.dialogRendered=!1,this.fadeIn=!1,this.alertHeading=void 0,this.alertMessage=void 0,this.buttons=!0,this.closeOnBackdropClick=!0,this.destructive=!1,this.dismissLabel="Dismiss",this.disableHeightConstraint=!1,this.disableWidthConstraint=!1,this.hideCloseButton=!1,this.heading=void 0,this.label=void 0,this.open=void 0,this.size="small",this.status=void 0,this.buttonProps=[{label:"Cancel",onclick:"this.cancelDialog();"},{label:"Confirm",onclick:"this.confirmDialog();"}]}watchOpenHandler(){this.open?this.dialogOpened():(this.fadeIn=!1,null!==this.resizeObserver&&this.resizeObserver.disconnect(),setTimeout((()=>{var _a;this.dialogRendered=!1,this.dialogEl.close(),null===(_a=this.sourceElement)||void 0===_a||_a.focus(),this.dialogHeight=0,this.icDialogClosed.emit()}),80))}watchPropHandler(){this.setButtonOnClick()}disconnectedCallback(){this.removeSlotChangeListener()}componentWillLoad(){this.buttonProps.length&&this.setButtonOnClick()}componentDidLoad(){this.getInteractiveElements(),this.setAlertVariant(),this.refreshInteractiveElementsOnSlotChange(),this.open&&this.dialogOpened()}componentDidRender(){"none"!==getComputedStyle(this.el).display&&this.disableHeightConstraint?document.body.style.overflow="hidden":document.body.style.overflow="auto"}handleKeyboard(ev){if(this.dialogRendered)switch(ev.key){case"Tab":ev.preventDefault(),this.focusNextInteractiveElement(ev.shiftKey);break;case"Escape":ev.repeat||(this.open=!1),ev.stopImmediatePropagation()}}handleClick(ev){const dialogElement=this.el.shadowRoot.querySelector("dialog");if(this.closeOnBackdropClick&&ev.composedPath().indexOf(dialogElement)<=0){const rect=this.dialogEl.getBoundingClientRect();rect.top<=ev.clientY&&ev.clientY<=rect.top+rect.height&&rect.left<=ev.clientX&&ev.clientX<=rect.left+rect.width||(this.open=!1)}}async showDialog(){this.open=!0}async hideDialog(){this.open=!1}async cancelDialog(){this.icDialogCancelled.emit(),this.open=!1}async confirmDialog(){this.icDialogConfirmed.emit()}loopNextFocusIndexIfLastElement(){this.focusedElementIndex>this.interactiveElementList.length-1?this.focusedElementIndex=0:this.focusedElementIndex<0&&(this.focusedElementIndex=this.interactiveElementList.length-1)}setFocusIndexBasedOnShiftKey(shiftKey){shiftKey?this.focusedElementIndex-=1:this.focusedElementIndex+=1}render(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{hidden:!this.dialogRendered,"fade-in":this.fadeIn,"disable-height-constraint":this.disableHeightConstraint}},this.disableHeightConstraint?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"backdrop",ref:el=>this.backdropEl=el},this.renderDialog()):this.renderDialog())}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{open:["watchOpenHandler"],buttonProps:["watchPropHandler"]}}};Dialog.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;min-height:100% !important;background:rgb(0 0 0 / 60%);z-index:var(--ic-z-index-dialog);opacity:0;transition:opacity var(--ic-easing-transition-slow)}:host(.disable-height-constraint){background:none;justify-content:unset;align-items:unset}.dialog.disable-height-constraint{max-height:none;position:relative}.dialog.disable-height-constraint .content-area{overflow-y:visible}:host(.fade-in){opacity:1;transition:opacity var(--ic-easing-transition-slow)}:host(.hidden){display:none}.dialog{background-color:var(--ic-architectural-white);border:var(--ic-border-default);border-radius:var(--ic-border-radius);padding:var(--ic-space-xs) 0 var(--ic-space-md);transform:translateY(-3rem);transition:transform 1000s;display:flex;flex-direction:column;box-sizing:border-box;overflow-x:visible}:host(.fade-in) .dialog{transform:translateY(0);transition:transform var(--ic-easing-transition-slow)}.small{width:50%;max-width:25rem;min-height:11rem;max-height:70vh}.medium{width:70vw;max-width:44rem;min-height:12.5rem;max-height:70vh}.large{width:90vw;max-width:62.5rem;min-height:12.5rem;max-height:90vh}.heading-area{display:flex;margin-bottom:var(--ic-space-xs);padding:0 var(--ic-space-md)}.heading{overflow-wrap:break-word}.close-icon{margin-left:auto}.content-area{-ms-overflow-style:none;scrollbar-width:none;padding:0 var(--ic-space-md);margin:0;overflow-y:auto}.content-area::-webkit-scrollbar{display:none}#dialog-content{margin-bottom:var(--ic-space-sm)}#dialog-content ::slotted(ic-typography){overflow-wrap:break-word}#dialog-content ::slotted(*){position:relative}.status-alert{margin-bottom:var(--ic-space-xs)}.dialog-controls{margin-top:auto;padding:var(--ic-space-xs) var(--ic-space-md) 0;display:flex;justify-content:flex-end;gap:var(--ic-space-md)}.dialog-control-button{width:-moz-fit-content;width:fit-content}.backdrop{overflow-y:auto;position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgb(0 0 0 / 60%);z-index:var(--ic-z-index-dialog);padding-top:16px;padding-bottom:16px}@media (min-width: 800px){:host([size="large"]) .dialog:not(.disable-width-constraint)>.content-area{width:75%}}@media (max-width: 576px){.dialog{width:100vw;height:100vh;transform:translateY(-5rem);max-width:none;max-height:none;box-sizing:border-box}.backdrop{padding:0}.dialog.disable-height-constraint{height:auto;min-height:100vh}}@media (max-width: 364px){.triple-button{flex-direction:column;gap:var(--ic-space-xs)}.dialog-control-button{width:unset}}'}}]);