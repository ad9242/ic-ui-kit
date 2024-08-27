"use strict";(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[2017],{"./dist/esm/check-icon-f2346e76.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Check});const Check='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.70501L19.385 5.29501L8.79502 15.875Z" fill="currentColor"/>\n</svg>\n'},"./dist/esm/ic-menu.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_menu:()=>Menu});var _index_93509377_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-93509377.js"),_check_icon_f2346e76_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/esm/check-icon-f2346e76.js"),_helpers_0f5fe29b_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-0f5fe29b.js"),_popper_b8cc3f16_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/esm/popper-b8cc3f16.js");__webpack_require__("./dist/esm/types-f605c21c.js");const Menu=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.menuKeyPress=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"menuKeyPress",7),this.menuOptionId=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"menuOptionId",7),this.menuOptionSelect=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"menuOptionSelect",7),this.menuStateChange=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"menuStateChange",7),this.menuValueChange=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"menuValueChange",7),this.retryButtonClicked=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"retryButtonClicked",7),this.timeoutBlur=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"timeoutBlur",7),this.ungroupedOptionsSet=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ungroupedOptionsSet",7),this.disabledOptionSelected=!1,this.hasPreviouslyBlurred=!1,this.hasTimedOut=!1,this.isLoading=!1,this.isSearchBar=!1,this.isSearchableSelect=!1,this.preventClickOpen=!1,this.ungroupedOptions=[],this.handleClearListener=()=>{this.optionHighlighted=""},this.handleSubmitSearch=()=>{const highlightedOptionIndex=this.options.findIndex((option=>option[this.valueField]===this.optionHighlighted));this.setInputValue(highlightedOptionIndex)},this.handleMenuChange=(open,focusInput)=>{this.menuStateChange.emit({open,focusInput}),open||!1===focusInput||(this.inputEl.focus(),this.preventClickOpen=!1)},this.setNextOptionValue=selectedOptionIndex=>{this.ungroupedOptions[selectedOptionIndex+1]?this.menuOptionSelect.emit({value:this.ungroupedOptions[selectedOptionIndex+1][this.valueField],optionId:this.getOptionId(this.ungroupedOptions[selectedOptionIndex+1][this.valueField])}):this.menuOptionSelect.emit({value:this.ungroupedOptions[0][this.valueField],optionId:this.getOptionId(this.ungroupedOptions[0][this.valueField])})},this.setPreviousOptionValue=selectedOptionIndex=>{this.ungroupedOptions[selectedOptionIndex-1]?this.menuOptionSelect.emit({value:this.ungroupedOptions[selectedOptionIndex-1][this.valueField],optionId:this.getOptionId(this.ungroupedOptions[selectedOptionIndex-1][this.valueField])}):this.menuOptionSelect.emit({value:this.ungroupedOptions[this.ungroupedOptions.length-1][this.valueField],optionId:this.getOptionId(this.ungroupedOptions[this.ungroupedOptions.length-1][this.valueField])})},this.getParentEl=parent=>{"IC-SEARCH-BAR"===parent.tagName?this.isSearchBar=!0:"IC-SELECT"===parent.tagName&&null!==parent.getAttribute("searchable")&&void 0!==parent.getAttribute("searchable")&&(this.isSearchableSelect=!0)},this.arrowBehaviour=event=>{event.preventDefault(),this.handleMenuChange(!0)},this.setMenuOptions=()=>this.isSearchBar?this.options:this.ungroupedOptions,this.setHighlightedOption=highlightedIndex=>{const menuOptions=this.setMenuOptions();menuOptions[highlightedIndex]&&!menuOptions[highlightedIndex].timedOut&&(this.optionHighlighted=menuOptions[highlightedIndex][this.valueField]||void 0)},this.autoSetInputValueKeyboardOpen=event=>{const selectedOptionIndex=this.ungroupedOptions.findIndex((option=>option[this.valueField]===this.value));switch(this.keyboardNav=!1,event.key){case"ArrowDown":this.keyboardNav=!0,this.arrowBehaviour(event),this.setNextOptionValue(selectedOptionIndex);break;case"ArrowUp":this.keyboardNav=!0,this.arrowBehaviour(event),this.setPreviousOptionValue(selectedOptionIndex);break;case" ":case"Enter":"clear-button"!==event.target.id&&this.handleMenuChange(!0)}},this.manSetInputValueKeyboardOpen=event=>{const menuOptions=this.setMenuOptions(),highlightedOptionIndex=menuOptions.findIndex((option=>option[this.valueField]===this.optionHighlighted)),getOptionId=index=>{var _a;return null===(_a=Array.from(this.host.querySelectorAll("li"))[index])||void 0===_a?void 0:_a.id},isOpen=this.isSearchBar||this.isSearchableSelect||this.open;switch(event.key){case"ArrowDown":this.keyboardNav=!0,this.arrowBehaviour(event),highlightedOptionIndex<menuOptions.length-1?(this.setHighlightedOption(highlightedOptionIndex+1),this.menuOptionId.emit({optionId:getOptionId(highlightedOptionIndex+1)})):(this.setHighlightedOption(0),this.menuOptionId.emit({optionId:getOptionId(0)})),this.preventIncorrectTabOrder=!1,this.focusFromSearchKeypress=!1;break;case"ArrowUp":this.keyboardNav=!0,this.arrowBehaviour(event),highlightedOptionIndex<=0||highlightedOptionIndex>menuOptions.length+1?(this.setHighlightedOption(menuOptions.length-1),this.menuOptionId.emit({optionId:getOptionId(menuOptions.length-1)})):(this.setHighlightedOption(highlightedOptionIndex-1),this.menuOptionId.emit({optionId:getOptionId(highlightedOptionIndex-1)})),this.preventIncorrectTabOrder=!1,this.focusFromSearchKeypress=!1;break;case"Home":this.keyboardNav=!0,event.preventDefault(),this.arrowBehaviour(event),this.setHighlightedOption(0),this.menuOptionId.emit({optionId:getOptionId(0)});break;case"End":this.keyboardNav=!0,event.preventDefault(),this.arrowBehaviour(event),this.setHighlightedOption(menuOptions.length-1),this.menuOptionId.emit({optionId:getOptionId(menuOptions.length-1)});break;case" ":if(this.keyboardNav=!1,this.isSearchBar||this.isSearchableSelect)break;"clear-button"!==event.target.id&&this.handleMenuChange(!0);break;case"Enter":event.preventDefault(),this.keyboardNav=!1,isOpen?highlightedOptionIndex>=0?void 0!==menuOptions[highlightedOptionIndex]&&(this.isSearchBar&&!0===menuOptions[highlightedOptionIndex].disabled?this.disabledOptionSelected=!0:(this.setInputValue(highlightedOptionIndex),this.value=menuOptions[highlightedOptionIndex][this.valueField])):this.setInputValue(highlightedOptionIndex):this.handleMenuChange(!0);break;case"Escape":this.open&&event.stopImmediatePropagation(),this.handleMenuChange(!1),this.menuOptionId.emit({optionId:void 0});break;case"Shift":case"Tab":this.isSearchBar&&(this.keyboardNav=!0),this.preventIncorrectTabOrder=!0;break;default:this.keyboardNav=!1,this.focusOnSearchOrSelectInput(menuOptions,highlightedOptionIndex)}},this.setInputValue=highlightedOptionIndex=>{const menuOptions=this.setMenuOptions();void 0!==menuOptions[highlightedOptionIndex]&&(this.menuOptionSelect.emit({value:menuOptions[highlightedOptionIndex][this.valueField]}),this.optionHighlighted=void 0,this.menuOptionId.emit({optionId:void 0})),this.hasTimedOut?this.parentEl.setFocus():this.handleMenuChange(!1)},this.handleOptionClick=event=>{const{value,label}=event.target.dataset;this.menuOptionSelect.emit({value,label}),this.handleMenuChange(!1)},this.handleRetry=()=>{this.retryButtonClicked.emit({value:this.value})},this.handleRetryKeyDown=ev=>{"Enter"!==ev.key&&" "!==ev.key||(ev.preventDefault(),this.retryButtonClicked.emit({value:this.value,keyPressed:ev.key}))},this.handleBlur=event=>{event.relatedTarget!==this.inputEl?this.menu.contains(event.relatedTarget)||this.handleMenuChange(!1,this.hasPreviouslyBlurred):(this.handleMenuChange(!1),this.preventClickOpen=!0),this.isSearchBar||(this.hasPreviouslyBlurred=!!event.relatedTarget)},this.handleMouseDown=event=>{event.preventDefault()},this.handleMenuKeyDown=event=>{"automatic"===this.activationType?this.autoSetValueOnMenuKeyDown(event):"manual"!==this.activationType||this.isSearchBar||this.manSetInputValueKeyboardOpen(event)},this.emitMenuKeyPress=(isNavKey,key)=>{this.menuKeyPress.emit({isNavKey,key})},this.autoSetValueOnMenuKeyDown=event=>{event.cancelBubble=!0;const selectedOptionIndex=this.ungroupedOptions.findIndex((option=>option[this.valueField]===this.value)),isSearchableSelect="INPUT"===this.inputEl.tagName;switch(this.keyboardNav=!1,event.key){case" ":event.preventDefault();break;case"ArrowUp":this.hasTimedOut||(event.preventDefault(),this.setPreviousOptionValue(selectedOptionIndex),this.keyboardNav=!0);break;case"ArrowDown":this.hasTimedOut||(event.preventDefault(),this.setNextOptionValue(selectedOptionIndex),this.keyboardNav=!0);break;case"Home":this.menuOptionSelect.emit({value:this.ungroupedOptions[0][this.valueField]}),this.keyboardNav=!0;break;case"End":this.menuOptionSelect.emit({value:this.ungroupedOptions[this.ungroupedOptions.length-1][this.valueField]}),this.keyboardNav=!0;break;case"Enter":!this.hasTimedOut&&this.handleMenuChange(!1);break;case"Escape":this.handleMenuChange(!1);break;case"Backspace":isSearchableSelect&&this.inputEl.focus();break;case"Shift":break;default:isSearchableSelect&&"Tab"!==event.key&&!this.hasTimedOut&&this.inputEl.focus(),1===event.key.length&&(this.keyboardNav=!0)}this.emitMenuKeyPress(this.keyboardNav,event.key)},this.handleMenuKeyUp=event=>{"Tab"===event.key&&event.shiftKey&&(this.preventClickOpen=!1),"Enter"===event.key&&this.disabledOptionSelected&&(this.disabledOptionSelected=!1,event.stopImmediatePropagation())},this.getOptionId=value=>`${this.menuId}-${value}`,this.getOptionAriaLabel=(option,parentOption)=>{let ariaLabel=option[this.labelField];return option.description&&(ariaLabel=`${ariaLabel}, ${option.description}`),option.element&&(ariaLabel=`${ariaLabel}, ${option.element.ariaLabel}`),parentOption?`${ariaLabel}, ${parentOption[this.labelField]} group`:ariaLabel},this.getSortedOptions=options=>{let sorted=[];return options.sort&&(sorted=options.sort(((optionA,optionB)=>optionA.recommended&&!optionB.recommended?-1:0))),sorted},this.isManualMode="manual"===this.activationType,this.scrollToSelected=menu=>{const selectedOption=this.selectOnEnter?this.host.querySelector(`li[data-value="${this.optionHighlighted}"]`):menu.querySelector(".option[aria-selected='true']");if(selectedOption){const elTop=selectedOption.offsetTop+selectedOption.offsetHeight;(elTop>menu.scrollTop+menu.offsetHeight||elTop<menu.scrollTop+menu.offsetHeight)&&(menu.scrollTop=selectedOption.offsetTop),selectedOption.focus()}},this.loadUngroupedOptions=()=>{this.options.length>0&&this.options.map&&this.options.map((option=>{option.children?option.children.map((option=>!option.disabled&&this.ungroupedOptions.push(option))):option.disabled||this.ungroupedOptions.push(option)})),this.ungroupedOptions=this.getSortedOptions(this.ungroupedOptions),this.ungroupedOptionsSet.emit({options:this.ungroupedOptions})},this.setMenuScrollbar=()=>{let optionsHeight=0;this.host.querySelectorAll(".option").forEach((option=>optionsHeight+=option.clientHeight)),optionsHeight>=320&&this.menu.classList.add("menu-scroll")},this.handleTimeoutBlur=ev=>{this.timeoutBlur.emit({ev})},this.optionContent=option=>{var _a;return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.F,null,option.loading&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-loading-indicator",{size:"icon"}),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"option-text-container"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"option-label"},option.icon&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"option-icon",innerHTML:option.icon,"aria-hidden":"true"}),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"body","aria-hidden":"true"},option[this.labelField])),option.description&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{id:`${this.getOptionId(option[this.valueField])}-description`,class:"option-description",variant:"caption","aria-hidden":"true"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("p",null,option.description)),option.element&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"option-element",innerHTML:option.element.component,"aria-hidden":"true"})),!!option[this.valueField]&&!!this.value&&option[this.valueField].toLowerCase()===(null===(_a=this.value)||void 0===_a?void 0:_a.toLowerCase())&&"IC-SEARCH-BAR"!==this.parentEl.tagName&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"check-icon",innerHTML:_check_icon_f2346e76_js__WEBPACK_IMPORTED_MODULE_4__.C}))},this.displayOption=(option,index,parentOption)=>{const{open,value,keyboardNav,isManualMode,initialOptionsListRender,optionHighlighted,options}=this;return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",{id:this.getOptionId(option[this.valueField]),class:{option:!0,"focused-option":isManualMode?(keyboardNav||initialOptionsListRender)&&option[this.valueField]===optionHighlighted:keyboardNav&&option[this.valueField]===value,"last-recommended-option":option.recommended&&options[index+1]&&!options[index+1].recommended,"disabled-option":option.disabled,"loading-option":option.loading,timeout:option.timedOut},role:"option",tabindex:open&&(option[this.valueField]===value||option[this.valueField]===optionHighlighted)&&keyboardNav?"0":"-1","aria-label":this.getOptionAriaLabel(option,parentOption),"aria-selected":`${option[this.valueField]===value}`,"aria-disabled":option.disabled?"true":"false",onClick:!option.timedOut&&!option.loading&&this.handleOptionClick,onBlur:this.handleBlur,onMouseDown:this.handleMouseDown,"data-value":option[this.valueField],"data-label":option[this.labelField]},option.timedOut?(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.F,null,(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"loading-error-info"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{class:"error-icon-svg","aria-labelledby":"error-title",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#000000"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("title",{id:"error-title"},"Error"),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("g",{id:"close-octagon"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{id:"Vector",d:"M8.77 3L3.5 8.27V15.73L8.77 21H16.23L21.5 15.73V8.27L16.23 3M8.91 7L12.5 10.59L16.09 7L17.5 8.41L13.91 12L17.5 15.59L16.09 17L12.5 13.41L8.91 17L7.5 15.59L11.09 12L7.5 8.41"}))),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"label"},option[this.labelField])),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{size:"small",variant:"tertiary",onClick:this.handleRetry,onKeyDown:this.handleRetryKeyDown,onBlur:this.handleTimeoutBlur,id:"retry-button"},"Retry")):this.optionContent(option))},this.focusFromSearchKeypress=!1,this.initialOptionsListRender=!1,this.keyboardNav=!1,this.optionHighlighted=void 0,this.preventIncorrectTabOrder=!1,this.activationType="automatic",this.anchorEl=void 0,this.autoFocusOnSelected=!0,this.fullWidth=!1,this.inputEl=void 0,this.inputLabel=void 0,this.labelField="label",this.menuId=void 0,this.open=void 0,this.parentEl=void 0,this.searchMode="navigation",this.selectOnEnter=!1,this.size="medium",this.options=void 0,this.value=void 0,this.valueField="value"}watchOpenHandler(){!this.open&&this.popperInstance&&(this.popperInstance.destroy(),this.popperInstance=null)}watchOptionsHandler(newOptions){this.hasTimedOut=newOptions.some((opt=>opt.timedOut)),this.isLoading=newOptions.some((opt=>opt.loading)),this.ungroupedOptions=[],this.loadUngroupedOptions()}watchValueHandler(){this.menuValueChange.emit({value:this.value})}connectedCallback(){this.getParentEl(this.parentEl),this.isSearchBar&&("navigation"===this.searchMode&&this.setHighlightedOption(0),this.initialOptionsListRender=!0)}disconnectedCallback(){this.popperInstance&&this.popperInstance.destroy(),this.parentEl.removeEventListener("icClear",this.handleClearListener),this.parentEl.removeEventListener("icSubmitSearch",this.handleSubmitSearch)}componentWillLoad(){var _a,_b;this.loadUngroupedOptions(),this.parentEl.addEventListener("icClear",this.handleClearListener),this.parentEl.addEventListener("icSubmitSearch",this.handleSubmitSearch),this.hasTimedOut=null===(_a=this.options)||void 0===_a?void 0:_a.some((opt=>opt.timedOut)),this.isLoading=null===(_b=this.options)||void 0===_b?void 0:_b.some((opt=>opt.loading))}componentDidLoad(){this.isSearchBar&&this.parentEl.disableAutoFiltering&&(this.focusFromSearchKeypress=!0),(0,_helpers_0f5fe29b_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.open,propName:"open"},{prop:this.options,propName:"options"},{prop:this.menuId,propName:"menu-id"},{prop:this.inputLabel,propName:"input-label"}],"Menu")}componentDidUpdate(){const inputValueInOptions=this.options.some((option=>option[this.valueField]===this.value));if(this.open&&0!==this.options.length)if(this.value&&this.keyboardNav&&inputValueInOptions&&this.autoFocusOnSelected&&!this.isSearchableSelect)this.scrollToSelected(this.menu);else if("IC-TEXT-FIELD"!==this.inputEl.tagName&&"INPUT"!==this.inputEl.tagName)this.menu.focus();else if(this.optionHighlighted&&!this.focusFromSearchKeypress&&!this.preventIncorrectTabOrder){const highlightedEl=this.host.querySelector(`li[data-value="${this.optionHighlighted}"]`);highlightedEl&&highlightedEl.focus()}this.open&&!this.value&&this.selectOnEnter&&this.scrollToSelected(this.menu)}componentDidRender(){this.open&&!this.popperInstance&&this.anchorEl&&this.initPopperJs(this.anchorEl),this.open&&this.options.length&&this.setMenuScrollbar()}async handleClickOpen(){this.preventClickOpen||(this.menuStateChange.emit({open:!this.open}),this.keyboardNav=!1),this.preventClickOpen=!1}async handleKeyboardOpen(event){"automatic"===this.activationType?this.autoSetInputValueKeyboardOpen(event):this.manSetInputValueKeyboardOpen(event)}async handleSetFirstOption(){this.setHighlightedOption(0)}async initPopperJs(anchor){this.popperInstance=(0,_popper_b8cc3f16_js__WEBPACK_IMPORTED_MODULE_2__.c)(anchor,this.host,{placement:"bottom",modifiers:[{name:"offset",options:{offset:[0,7]}},{name:"flip",options:{fallbackPlacements:["top"],rootBoundary:"viewport"}}]})}focusOnSearchOrSelectInput(menuOptions,highlightedOptionIndex){menuOptions[highlightedOptionIndex]&&(this.isSearchBar&&(this.parentEl.setFocus(),"navigation"===this.searchMode&&this.setHighlightedOption(0)),this.isSearchableSelect&&this.parentEl.setFocus(),this.focusFromSearchKeypress=!0)}render(){const{inputLabel,options,menuId,value,fullWidth,hasTimedOut,isLoading,size,open,inputEl,keyboardNav}=this;return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{"ic-menu-full-width":fullWidth,"ic-menu-no-focus":"INPUT"===(null==inputEl?void 0:inputEl.tagName)||hasTimedOut||isLoading,[`ic-menu-${size}`]:!0,"ic-menu-open":open}},0!==options.length&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",{id:menuId,class:"menu",role:"listbox","aria-label":inputLabel,"aria-activedescendant":null!=value&&""!==value?this.getOptionId(value):"",tabindex:open&&!keyboardNav&&"INPUT"!==(null==inputEl?void 0:inputEl.tagName)?"0":"-1",ref:el=>this.menu=el,onKeyDown:this.handleMenuKeyDown,onKeyUp:this.handleMenuKeyUp,onBlur:this.handleBlur},this.getSortedOptions(options).map(((option,index)=>option.children?option.children.length>0?(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{class:"option-group-title",role:"presentation",variant:"subtitle-small"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("p",null,option[this.labelField])),option.children.map((childOption=>this.displayOption(childOption,index,option)))):null:this.displayOption(option,index)))))}get host(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{open:["watchOpenHandler"],options:["watchOptionsHandler"],value:["watchValueHandler"]}}};Menu.style='html.sc-ic-menu{line-height:1.15;-webkit-text-size-adjust:100%}body.sc-ic-menu{margin:0}main.sc-ic-menu{display:block}h1.sc-ic-menu{font-size:2em;margin:0.67em 0}hr.sc-ic-menu{box-sizing:content-box;height:0;overflow:visible}pre.sc-ic-menu{font-family:monospace, monospace;font-size:1em}a.sc-ic-menu{background-color:transparent}abbr[title].sc-ic-menu{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b.sc-ic-menu,strong.sc-ic-menu{font-weight:bolder}code.sc-ic-menu,kbd.sc-ic-menu,samp.sc-ic-menu{font-family:monospace, monospace;font-size:1em}small.sc-ic-menu{font-size:80%}sub.sc-ic-menu,sup.sc-ic-menu{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub.sc-ic-menu{bottom:-0.25em}sup.sc-ic-menu{top:-0.5em}img.sc-ic-menu{border-style:none}button.sc-ic-menu,input.sc-ic-menu,optgroup.sc-ic-menu,select.sc-ic-menu,textarea.sc-ic-menu{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button.sc-ic-menu,input.sc-ic-menu{overflow:visible}button.sc-ic-menu,select.sc-ic-menu{text-transform:none}button.sc-ic-menu,[type="button"].sc-ic-menu,[type="reset"].sc-ic-menu,[type="submit"].sc-ic-menu{-webkit-appearance:button}button.sc-ic-menu::-moz-focus-inner,[type="button"].sc-ic-menu::-moz-focus-inner,[type="reset"].sc-ic-menu::-moz-focus-inner,[type="submit"].sc-ic-menu::-moz-focus-inner{border-style:none;padding:0}button.sc-ic-menu:-moz-focusring,[type="button"].sc-ic-menu:-moz-focusring,[type="reset"].sc-ic-menu:-moz-focusring,[type="submit"].sc-ic-menu:-moz-focusring{outline:1px dotted ButtonText}fieldset.sc-ic-menu{padding:0.35em 0.75em 0.625em}legend.sc-ic-menu{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress.sc-ic-menu{vertical-align:baseline}textarea.sc-ic-menu{overflow:auto}[type="checkbox"].sc-ic-menu,[type="radio"].sc-ic-menu{box-sizing:border-box;padding:0}[type="number"].sc-ic-menu::-webkit-inner-spin-button,[type="number"].sc-ic-menu::-webkit-outer-spin-button{height:auto}[type="search"].sc-ic-menu{-webkit-appearance:textfield;outline-offset:-2px}[type="search"].sc-ic-menu::-webkit-search-decoration{-webkit-appearance:none}.sc-ic-menu::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details.sc-ic-menu{display:block}summary.sc-ic-menu{display:list-item}template.sc-ic-menu{display:none}[hidden].sc-ic-menu{display:none}html.sc-ic-menu,body.sc-ic-menu,div.sc-ic-menu,span.sc-ic-menu,applet.sc-ic-menu,object.sc-ic-menu,iframe.sc-ic-menu,h1.sc-ic-menu,h2.sc-ic-menu,h3.sc-ic-menu,h4.sc-ic-menu,h5.sc-ic-menu,h6.sc-ic-menu,p.sc-ic-menu,blockquote.sc-ic-menu,pre.sc-ic-menu,a.sc-ic-menu,abbr.sc-ic-menu,acronym.sc-ic-menu,address.sc-ic-menu,big.sc-ic-menu,cite.sc-ic-menu,code.sc-ic-menu,del.sc-ic-menu,dfn.sc-ic-menu,em.sc-ic-menu,img.sc-ic-menu,ins.sc-ic-menu,kbd.sc-ic-menu,q.sc-ic-menu,s.sc-ic-menu,samp.sc-ic-menu,small.sc-ic-menu,strike.sc-ic-menu,strong.sc-ic-menu,sub.sc-ic-menu,sup.sc-ic-menu,tt.sc-ic-menu,var.sc-ic-menu,b.sc-ic-menu,u.sc-ic-menu,i.sc-ic-menu,center.sc-ic-menu,dl.sc-ic-menu,dt.sc-ic-menu,dd.sc-ic-menu,ol.sc-ic-menu,ul.sc-ic-menu,li.sc-ic-menu,fieldset.sc-ic-menu,form.sc-ic-menu,label.sc-ic-menu,legend.sc-ic-menu,table.sc-ic-menu,caption.sc-ic-menu,tbody.sc-ic-menu,tfoot.sc-ic-menu,thead.sc-ic-menu,tr.sc-ic-menu,th.sc-ic-menu,td.sc-ic-menu,article.sc-ic-menu,aside.sc-ic-menu,canvas.sc-ic-menu,details.sc-ic-menu,embed.sc-ic-menu,figure.sc-ic-menu,figcaption.sc-ic-menu,footer.sc-ic-menu,header.sc-ic-menu,hgroup.sc-ic-menu,menu.sc-ic-menu,nav.sc-ic-menu,output.sc-ic-menu,ruby.sc-ic-menu,section.sc-ic-menu,summary.sc-ic-menu,time.sc-ic-menu,mark.sc-ic-menu,audio.sc-ic-menu,video.sc-ic-menu{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}@media (prefers-reduced-motion: no-preference){.ic-menu-open.sc-ic-menu-h .menu.sc-ic-menu{transition:max-height var(--ic-transition-duration-slow)}}.sc-ic-menu-h{border-radius:var(--ic-border-radius);max-height:0;width:var(--input-width, 20rem);color:var(--ic-color-primary-text);background-color:var(--ic-architectural-white);position:relative;z-index:var(--ic-z-index-menu);box-sizing:border-box;box-shadow:var(--ic-elevation-overlay)}.sc-ic-menu-h:not(.ic-menu-no-focus):focus-within{box-shadow:var(--ic-border-focus)}#retry-button.sc-ic-menu::part(button){height:var(--ic-space-lg)}.small.sc-ic-menu #retry-button.sc-ic-menu::part(button){height:var(--ic-space-md)}.on-dialog.sc-ic-menu-h{inset:auto !important}.menu.sc-ic-menu{text-decoration:none;list-style-type:none;border:var(--ic-border-width) solid var(--ic-architectural-400);border-radius:var(--ic-border-radius);background-color:var(--ic-architectural-white);visibility:hidden;max-height:0;overflow-y:hidden}.menu-scroll.sc-ic-menu{overflow-y:auto}.menu.sc-ic-menu:focus-visible{outline:none}.ic-menu-open.sc-ic-menu-h{max-height:none;display:block}.ic-menu-open.sc-ic-menu-h .menu.sc-ic-menu{visibility:visible;max-height:calc(var(--ic-space-xl) * 10 + var(--ic-space-xxxs))}.ic-menu-full-width.sc-ic-menu-h{width:100%}.option.sc-ic-menu{padding:var(--ic-space-xs) calc(var(--ic-space-xs) - var(--ic-space-1px));cursor:pointer;display:flex;align-items:center;overflow-wrap:anywhere}.option.sc-ic-menu:not(.loading-option){justify-content:space-between}.ic-menu-small.sc-ic-menu-h .option.sc-ic-menu{padding:var(--ic-space-xxs) calc(var(--ic-space-xs) - var(--ic-space-1px))}.ic-menu-large.sc-ic-menu-h .option.sc-ic-menu{padding:var(--ic-space-sm) calc(var(--ic-space-xs) - var(--ic-space-1px))}.option.sc-ic-menu:last-child{border-radius:0 0 var(--ic-space-1px) var(--ic-space-1px)}.option.sc-ic-menu:first-child{border-radius:var(--ic-space-1px) var(--ic-space-1px) 0 0}.option.sc-ic-menu:not(.disabled-option):hover{background-color:var(--ic-action-dark-bg-hover)}.option.sc-ic-menu:not(.disabled-option):active{background-color:var(--ic-action-dark-bg-active)}.option.sc-ic-menu:focus-visible{outline:var(--ic-hc-focus-outline)}.option.sc-ic-menu:not(.disabled-option) .option-description.sc-ic-menu{color:var(--ic-color-secondary-text)}.option.sc-ic-menu .option-label.sc-ic-menu{display:flex;flex-direction:row;align-items:top}.option.sc-ic-menu .option-element.sc-ic-menu{margin-top:var(--ic-space-xxs)}.option.sc-ic-menu .option-icon.sc-ic-menu{height:var(--ic-space-md);width:var(--ic-space-md);margin-top:var(--ic-space-xxs);margin-right:var(--ic-space-xxxs)}.option-text-container.sc-ic-menu{pointer-events:none}.option.loading-option.sc-ic-menu .option-text-container.sc-ic-menu{margin-left:calc(var(--ic-space-xs) + var(--ic-space-xxxs));color:var(--ic-color-secondary-text)}.error-icon-svg.sc-ic-menu{height:var(--ic-space-md);width:var(--ic-space-md);fill:var(--ic-status-error);align-self:center;display:flex;margin-right:calc(var(--ic-space-xxs) * 1.2)}.loading-error-info.sc-ic-menu{display:flex}.check-icon.sc-ic-menu{height:var(--ic-space-lg);width:var(--ic-space-lg);margin-left:var(--ic-space-xs);pointer-events:none}.focused-option.sc-ic-menu .check-icon.sc-ic-menu *.sc-ic-menu{fill:currentcolor}.option-group-title.sc-ic-menu{padding:var(--ic-space-lg) calc(var(--ic-space-xs) - var(--ic-space-1px))\n    var(--ic-space-xs);color:var(--ic-color-tertiary-text)}.ic-menu-small.sc-ic-menu-h .option-group-title.sc-ic-menu{padding:var(--ic-space-sm) calc(var(--ic-space-xs) - var(--ic-space-1px))\n    var(--ic-space-xxs)}.last-recommended-option.sc-ic-menu{border-bottom:var(--ic-border-default)}.disabled-option.sc-ic-menu{color:var(--ic-architectural-200);cursor:default;pointer-events:none}.focused-option.sc-ic-menu,.focused-option.sc-ic-menu .option-description.sc-ic-menu{background-color:var(--ic-focus-blue) !important;color:var(--ic-color-white-text) !important}.no-results.sc-ic-menu-h li.sc-ic-menu{cursor:no-drop}.no-results.sc-ic-menu-h li.sc-ic-menu:hover{background-color:transparent}@media (forced-colors: active){.focused-option.sc-ic-menu:focus{outline:none;border:0.125rem solid transparent}}'}}]);