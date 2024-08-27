"use strict";(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[8029],{"./dist/esm/helpers-f543bc77.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>isPropDefined,B:()=>isNumeric,C:()=>capitalize,D:()=>checkResizeObserver,E:()=>isMacDevice,I:()=>IcThemeForegroundEnum,a:()=>isEmptyString,b:()=>getSlotContent,c:()=>checkSlotInChildMutations,d:()=>debounce,e:()=>IcDayNames,f:()=>IcDateInputMonths,g:()=>getThemeFromContext,h:()=>IcWeekDays,i:()=>isSlotUsed,j:()=>IcShortDayNames,k:()=>getLabelFromValue,l:()=>getFilteredMenuOptions,m:()=>getOptionsWithoutGroupTitlesCount,n:()=>removeFormResetListener,o:()=>onComponentRequiredPropUndefined,p:()=>pxToRem,q:()=>inheritAttributes,r:()=>removeDisabledFalse,s:()=>stringEnumToArray,t:()=>addFormResetListener,u:()=>renderHiddenInput,v:()=>getInputDescribedByText,w:()=>isMobileOrTablet,x:()=>hasValidationStatus,y:()=>IC_INHERITED_ARIA,z:()=>IcInformationStatus});const IC_INHERITED_ARIA=["aria-atomic","aria-autocomplete","aria-busy","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-dropeffect","aria-errormessage","aria-expanded","aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"],IC_BLOCK_COLOR_COMPONENTS=["ic-hero","ic-top-navigation","ic-footer","ic-side-navigation","ic-alert"],IC_FIXED_COLOR_COMPONENTS=["ic-alert"],IC_BLOCK_COLOR_EXCEPTIONS={"ic-alert":["ic-link"]};var IcInformationStatus,IcThemeForegroundEnum,IcDateInputMonths,IcShortDayNames,IcDayNames,IcWeekDays;!function(IcInformationStatus){IcInformationStatus.Warning="warning",IcInformationStatus.Error="error",IcInformationStatus.Success="success"}(IcInformationStatus||(IcInformationStatus={})),function(IcThemeForegroundEnum){IcThemeForegroundEnum.Default="default",IcThemeForegroundEnum.Dark="dark",IcThemeForegroundEnum.Light="light"}(IcThemeForegroundEnum||(IcThemeForegroundEnum={})),function(IcDateInputMonths){IcDateInputMonths[IcDateInputMonths.January=0]="January",IcDateInputMonths[IcDateInputMonths.February=1]="February",IcDateInputMonths[IcDateInputMonths.March=2]="March",IcDateInputMonths[IcDateInputMonths.April=3]="April",IcDateInputMonths[IcDateInputMonths.May=4]="May",IcDateInputMonths[IcDateInputMonths.June=5]="June",IcDateInputMonths[IcDateInputMonths.July=6]="July",IcDateInputMonths[IcDateInputMonths.August=7]="August",IcDateInputMonths[IcDateInputMonths.September=8]="September",IcDateInputMonths[IcDateInputMonths.October=9]="October",IcDateInputMonths[IcDateInputMonths.November=10]="November",IcDateInputMonths[IcDateInputMonths.December=11]="December"}(IcDateInputMonths||(IcDateInputMonths={})),function(IcShortDayNames){IcShortDayNames[IcShortDayNames.Sun=0]="Sun",IcShortDayNames[IcShortDayNames.Mon=1]="Mon",IcShortDayNames[IcShortDayNames.Tue=2]="Tue",IcShortDayNames[IcShortDayNames.Wed=3]="Wed",IcShortDayNames[IcShortDayNames.Thu=4]="Thu",IcShortDayNames[IcShortDayNames.Fri=5]="Fri",IcShortDayNames[IcShortDayNames.Sat=6]="Sat"}(IcShortDayNames||(IcShortDayNames={})),function(IcDayNames){IcDayNames[IcDayNames.Sunday=0]="Sunday",IcDayNames[IcDayNames.Monday=1]="Monday",IcDayNames[IcDayNames.Tuesday=2]="Tuesday",IcDayNames[IcDayNames.Wednesday=3]="Wednesday",IcDayNames[IcDayNames.Thursday=4]="Thursday",IcDayNames[IcDayNames.Friday=5]="Friday",IcDayNames[IcDayNames.Saturday=6]="Saturday"}(IcDayNames||(IcDayNames={})),function(IcWeekDays){IcWeekDays[IcWeekDays.Sunday=0]="Sunday",IcWeekDays[IcWeekDays.Monday=1]="Monday",IcWeekDays[IcWeekDays.Tuesday=2]="Tuesday",IcWeekDays[IcWeekDays.Wednesday=3]="Wednesday",IcWeekDays[IcWeekDays.Thursday=4]="Thursday",IcWeekDays[IcWeekDays.Friday=5]="Friday",IcWeekDays[IcWeekDays.Saturday=6]="Saturday"}(IcWeekDays||(IcWeekDays={}));const stringEnumToArray=theEnum=>{const arr=[];return Object.values(theEnum).forEach((val=>{if(isNaN(Number(val))){const str=val;arr.push(str)}})),arr},inheritAttributes=(element,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(element.hasAttribute(attr)){null!==element.getAttribute(attr)&&(attributeObject[attr]=element.getAttribute(attr)),element.removeAttribute(attr)}})),attributeObject},debounce=(func,wait=0)=>{let timer;return(...args)=>{clearTimeout(timer),timer=setTimeout(func,wait,...args)}},renderHiddenInput=(always,container,name,value,disabled)=>{if(void 0!==name&&(always||hasShadowDom(container))){const inputs=container.querySelectorAll("input.ic-input");let input=Array.from(inputs).filter((el=>container===el.parentElement))[0];null==input&&(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("ic-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,value instanceof Date?input.value=value?value.toISOString():null:input.value=value||""}},getThemeFromContext=(el,themeFromEvent=null)=>{var _a;const blockColorParent=(el.parentElement||el.getRootNode().host.parentElement).closest(IC_BLOCK_COLOR_COMPONENTS.join(","));if(null!==blockColorParent){const parentTag=blockColorParent.tagName.toLowerCase(),currentTag=el.tagName.toLowerCase();return(null===(_a=IC_BLOCK_COLOR_EXCEPTIONS[parentTag])||void 0===_a?void 0:_a.includes(currentTag))?IcThemeForegroundEnum.Default:null===themeFromEvent||IC_FIXED_COLOR_COMPONENTS.includes(parentTag)?blockColorParent.classList.contains(IcThemeForegroundEnum.Dark)?IcThemeForegroundEnum.Dark:IcThemeForegroundEnum.Light:themeFromEvent}return IcThemeForegroundEnum.Default},isEmptyString=value=>!value||0===value.trim().length,isPropDefined=prop=>void 0!==prop?prop:null,getCssProperty=cssVar=>getComputedStyle(document.documentElement).getPropertyValue(cssVar),getSlotContent=(element,name)=>{const slot=((element,name)=>element&&element.querySelector?element.querySelector(`[slot="${name}"]`):null)(element,name);return slot?getSlotElements(slot):null},getSlotElements=slot=>{const slotContent=slot.firstElementChild;if(null!==slotContent){const elements=slotContent.assignedElements?slotContent.assignedElements():slotContent.childNodes;return elements.length?elements:slot.tagName?[slot]:null}return null===slot?null:[slot]};Number(getCssProperty("--ic-breakpoint-xs").replace("px","")),Number(getCssProperty("--ic-breakpoint-sm").replace("px","")),Number(getCssProperty("--ic-breakpoint-md").replace("px","")),Number(getCssProperty("--ic-breakpoint-lg").replace("px","")),Number(getCssProperty("--ic-breakpoint-xl").replace("px",""));const isSlotUsed=(element,slotName)=>Array.from(element.children).some((child=>child.getAttribute("slot")===slotName)),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,getInputDescribedByText=(inputId,helperText,validationText)=>{return`${helperText?(id=inputId,id+"-helper-text"):""} ${validationText?(id=>id+"-validation-text")(inputId):""}`.trim();var id},isMobileOrTablet=()=>"maxTouchPoints"in navigator&&navigator.maxTouchPoints>0,getLabelFromValue=(value,options,valueField="value",labelField="label")=>{const ungroupedOptions=[];if(options.length>0&&options.map){options.map((option=>{option.children?option.children.map((option=>ungroupedOptions.push(option))):ungroupedOptions.push(option)}));const matchingValue=ungroupedOptions.find((option=>option[valueField]===value));if(void 0!==matchingValue)return matchingValue[labelField]}},getFilteredMenuOptions=(options,includeDescriptions,searchString,position,labelField="label")=>options.filter((option=>{var _a;const label=option[labelField].toLowerCase(),description=null===(_a=option.description)||void 0===_a?void 0:_a.toLowerCase(),lowerSearchString=searchString.toLowerCase();return"anywhere"===position?includeDescriptions?label.includes(lowerSearchString)||(null==description?void 0:description.includes(lowerSearchString)):label.includes(lowerSearchString):includeDescriptions?label.startsWith(lowerSearchString)||(null==description?void 0:description.startsWith(lowerSearchString)):label.startsWith(lowerSearchString)})),getOptionsWithoutGroupTitlesCount=options=>{const optionsWithoutGroupTitles=[];return options.length>0&&options.map&&options.map((option=>{option.children?option.children.map((option=>optionsWithoutGroupTitles.push(option))):optionsWithoutGroupTitles.push(option)})),optionsWithoutGroupTitles.length},pxToRem=(px,base=16)=>1/base*parseInt(px)+"rem",isNumeric=value=>/^-?\d+$/.test(value),hasValidationStatus=(status,disabled)=>""!==status&&!disabled,onComponentRequiredPropUndefined=(props,component)=>{for(let i=0;i<props.length;i++){const{prop,propName}=props[i];null==prop&&console.error(`No ${propName} specified for ${component} component - prop '${propName}' (web components) / '${kebabToCamelCase(propName)}' (react) required`)}},kebabToCamelCase=kebabCase=>{const individualWords=(kebabCase=kebabCase.toLowerCase()).split("-");let camelCase=individualWords[0];for(let i=1;i<individualWords.length;i++)camelCase+=individualWords[i].substring(0,1).toUpperCase()+individualWords[i].substring(1);return camelCase},checkResizeObserver=callbackFn=>{"undefined"!=typeof window&&void 0!==window.ResizeObserver&&callbackFn()},getForm=el=>el.closest("FORM"),addFormResetListener=(el,callbackFn)=>{const form=getForm(el);null!==form&&form.addEventListener("reset",callbackFn)},removeFormResetListener=(el,callbackFn)=>{const form=getForm(el);null!==form&&form.removeEventListener("reset",callbackFn)},removeDisabledFalse=(disabled,element)=>{disabled||element.removeAttribute("disabled")},isMacDevice=()=>window.navigator.userAgent.toUpperCase().indexOf("MAC")>=0,capitalize=text=>text.charAt(0).toUpperCase()+text.slice(1),checkSlotInChildMutations=(addedNodes,removedNodes,slotName)=>{const hasSlot=nodeList=>Array.from(nodeList).some((node=>node.slot===slotName));return hasSlot(addedNodes)||hasSlot(removedNodes)}},"./dist/esm/ic-empty-state_2.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_empty_state:()=>EmptyState,ic_pagination_bar:()=>PaginationBar});var _index_93509377_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-93509377.js"),_helpers_0f5fe29b_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-0f5fe29b.js"),_helpers_f543bc77_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/esm/helpers-f543bc77.js");__webpack_require__("./dist/esm/types-f605c21c.js");const EmptyState=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.hostMutationObserver=null,this.hostMutationCallback=mutationList=>{mutationList.some((({type,addedNodes,removedNodes})=>"childList"===type&&(0,_helpers_0f5fe29b_js__WEBPACK_IMPORTED_MODULE_1__.c)(addedNodes,removedNodes,["image","actions"])))&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)},this.aligned="left",this.body=void 0,this.maxLines=void 0,this.heading=void 0,this.imageSize="medium",this.subheading=void 0}disconnectedCallback(){var _a;null===(_a=this.hostMutationObserver)||void 0===_a||_a.disconnect()}componentDidLoad(){!(0,_helpers_0f5fe29b_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"heading")&&(0,_helpers_0f5fe29b_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.heading,propName:"heading"}],"Empty State"),this.hostMutationObserver=new MutationObserver(this.hostMutationCallback),this.hostMutationObserver.observe(this.el,{childList:!0})}render(){const{aligned,body,maxLines,heading,imageSize,subheading}=this;return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{[`ic-empty-state-${aligned}`]:!0,[`image-${imageSize}`]:(0,_helpers_0f5fe29b_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"image")}},(0,_helpers_0f5fe29b_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"image")&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"image"}),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"heading"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"h4"},heading)),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"subheading"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"subtitle-small"},subheading)),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"body"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{maxLines},body))),(0,_helpers_0f5fe29b_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"actions")&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"action-area"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"actions"})))}get el(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};EmptyState.style=":host{gap:var(--ic-space-xs);padding:var(--ic-space-xs)}:host,.action-area{display:flex;flex-direction:column}.action-area{gap:var(--ic-space-md)}:host ::slotted(svg),:host ::slotted(img){border-radius:var(--ic-space-xxs)}:host(.ic-empty-state-right),:host(.ic-empty-state-right) .action-area{align-items:flex-end;text-align:right}:host(.ic-empty-state-center),:host(.ic-empty-state-center) .action-area{align-items:center;text-align:center}:host(.image-medium) ::slotted(svg),:host(.image-medium) ::slotted(img){height:calc(3 * var(--ic-space-lg)) !important;width:calc(3 * var(--ic-space-lg)) !important}:host(.image-small) ::slotted(svg),:host(.image-small) ::slotted(img){height:var(--ic-space-xxl) !important;width:var(--ic-space-xxl) !important}:host(.image-large) ::slotted(svg),:host(.image-large) ::slotted(img){height:calc(4 * var(--ic-space-xl)) !important;width:calc(4 * var(--ic-space-xl)) !important}";const PaginationBar=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icPageChange=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icPageChange",7),this.icItemsPerPageChange=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icItemsPerPageChange",7),this.PAGE_INPUT_FIELD_ID="go-to-page-input",this.INVALID_PAGE_ERROR="Please enter a valid page",this.resizeObserver=null,this.changeItemsPerPage=()=>{this.setItemsPerPage(Number(this.pageDropdownEl.value))},this.changePage=page=>{this.currentPage=page,this.lowerBound=1!==page?(page-1)*this.itemsPerPage+1:page,this.setUpperBound()},this.focusElFromLabel=el=>{var _a;null===(_a=this.paginationBarEl.querySelector(el))||void 0===_a||_a.setFocus()},this.goToPage=()=>{const input=this.pageInputEl,page=Number(input.value);page<=this.totalPages&&page>0?(this.changePage(page),this.paginationEl.setCurrentPage(page),this.currentPage=page,input.value="",this.icPageChange.emit({value:page}),this.pageInputTooltipEl.displayTooltip(!1,!1),input.validationStatus=""):this.setInputError(input,this.INVALID_PAGE_ERROR)},this.goToPageLabelClickHandler=()=>{this.focusElFromLabel("ic-text-field")},this.handleBlur=()=>{const textField=this.pageInputEl;(Number(textField.value)<=this.totalPages&&Number(textField.value)>0||""===textField.value)&&(textField.validationStatus=""),this.pageInputTooltipEl.displayTooltip(!1,!1)},this.handleFocus=()=>{"error"===this.pageInputEl.validationStatus&&this.pageInputTooltipEl.displayTooltip(!0,!0)},this.handleInputChange=()=>{const inputValue=parseInt(this.pageInputEl.value);(inputValue>this.totalPages||inputValue<=0)&&(this.setInputError(this.pageInputEl,this.INVALID_PAGE_ERROR),this.pageInputTooltipEl.displayTooltip(!0,!0))},this.handleKeydown=ev=>{"Enter"===ev.key?"error"===this.pageInputEl.validationStatus?this.pageInputTooltipEl.displayTooltip(!0,!0):this.goToPage():(this.pageInputTooltipEl.displayTooltip(!1,!1),this.pageInputEl.validationStatus="")},this.handleKeyUp=ev=>{Number.isNaN(parseInt(this.pageInputEl.value))&&"Backspace"!==ev.key&&"Enter"!==ev.key&&"Tab"!==ev.key&&"Shift"!==ev.key&&(this.setInputError(this.pageInputEl,"Please enter a number",!1),this.pageInputTooltipEl.displayTooltip(!0,!1))},this.itemsPerPageLabelClickHandler=()=>{this.focusElFromLabel("ic-select")},this.paginationShouldWrap=()=>{"simple"===this.type&&(this.paginationWrapped=this.paginationEl.clientHeight>63)},this.runResizeObserver=()=>{this.resizeObserver=new ResizeObserver((()=>{const{clientWidth}=this.paginationBarEl;(clientWidth-this.paginationWidth>50||clientWidth-this.paginationWidth<-50)&&(this.paginationWidth=clientWidth,this.paginationShouldWrap())})),this.resizeObserver.observe(this.paginationBarEl)},this.setInputError=(el,error,focus=!0)=>{this.inputError=error,el.validationStatus="error",focus&&el.setFocus()},this.setItemsPerPage=newValue=>{this.itemsPerPage!==newValue&&(this.itemsPerPage=newValue,this.itemsPerPageString=newValue.toString(),this.icItemsPerPageChange.emit({value:this.itemsPerPage})),this.totalPages=this.totalItems>this.itemsPerPage?Math.ceil(this.totalItems/this.itemsPerPage):1,this.setUpperBound(),this.currentPage>this.totalPages&&(this.paginationEl.setCurrentPage(this.totalPages),this.currentPage=this.totalPages),this.icPageChange.emit({value:this.currentPage})},this.setPaginationBarContent=()=>{var _a;const displayedItemsPerPageOptions=(null===(_a=this.itemsPerPageOptions)||void 0===_a?void 0:_a.slice(0,3))||(this.totalItems<=100?[{label:"10",value:"10"},{label:"25",value:"25"},{label:"50",value:"50"}]:[{label:"25",value:"25"},{label:"100",value:"100"},{label:"1000",value:"1000"}]);displayedItemsPerPageOptions.push({label:"All",value:String(this.totalItems)}),this.displayedItemsPerPageOptions=displayedItemsPerPageOptions.filter((({value})=>this.totalItems>=Number(value)));let lastOptionValue=0;const updated=this.displayedItemsPerPageOptions.some((({value})=>(lastOptionValue=Number(value),this.itemsPerPage<=lastOptionValue)));this.setItemsPerPage(updated||!updated&&this.itemsPerPage>lastOptionValue?lastOptionValue:this.itemsPerPage)},this.setUpperBound=()=>{this.upperBound=Math.min(this.lowerBound+this.itemsPerPage-1,this.totalItems)},this.capitalizedItemLabel=void 0,this.capitalizedPageLabel=void 0,this.currentPage=1,this.displayedItemsPerPageOptions=void 0,this.inputError="Please enter a valid page",this.itemsPerPage=0,this.itemsPerPageString="0",this.lowerBound=1,this.lowerCaseItemLabel=void 0,this.lowerCasePageLabel=void 0,this.paginationWidth=void 0,this.paginationWrapped=!1,this.totalPages=void 0,this.upperBound=void 0,this.alignment="right",this.appearance="default",this.itemLabel="Item",this.itemsPerPageOptions=void 0,this.type="simple",this.rangeLabelType="page",this.pageLabel="Page",this.showGoToPageControl=!1,this.hideRangeLabel=!1,this.showItemsPerPageControl=!1,this.totalItems=void 0}watchItemLabelHandler(){this.capitalizedItemLabel=(0,_helpers_f543bc77_js__WEBPACK_IMPORTED_MODULE_2__.C)(this.itemLabel),this.lowerCaseItemLabel=this.itemLabel.toLowerCase()}watchItemsPerPageOptionsHandler(newVal,oldVal){JSON.stringify(newVal)!==JSON.stringify(oldVal)&&this.setPaginationBarContent()}watchPageLabelHandler(){this.capitalizedPageLabel=(0,_helpers_f543bc77_js__WEBPACK_IMPORTED_MODULE_2__.C)(this.pageLabel),this.lowerCasePageLabel=this.pageLabel.toLowerCase()}watchTotalItemsHandler(){this.setPaginationBarContent()}disconnectedCallback(){var _a;null===(_a=this.resizeObserver)||void 0===_a||_a.disconnect()}componentWillLoad(){this.watchPageLabelHandler(),this.watchItemLabelHandler(),this.setPaginationBarContent()}componentDidLoad(){var _a,_b;this.paginationWidth=this.paginationBarEl.clientWidth,(0,_helpers_f543bc77_js__WEBPACK_IMPORTED_MODULE_2__.D)(this.runResizeObserver);const textField=null===(_a=this.el.shadowRoot)||void 0===_a?void 0:_a.querySelector(`.${this.PAGE_INPUT_FIELD_ID}`);if(textField){const input=null===(_b=null==textField?void 0:textField.shadowRoot)||void 0===_b?void 0:_b.querySelector("input");input&&(input.style.textAlign="center",input.style.padding="0")}this.paginationShouldWrap()}pageChangeHandler(ev){const page=ev.detail.value;this.changePage(page)}render(){const{appearance,alignment,displayedItemsPerPageOptions,PAGE_INPUT_FIELD_ID,type,rangeLabelType,hideRangeLabel,showItemsPerPageControl,showGoToPageControl,pageLabel,capitalizedPageLabel,lowerCasePageLabel,capitalizedItemLabel,lowerCaseItemLabel,totalPages,currentPage,itemsPerPageString}=this;return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"pagination-bar":!0,[`pagination-bar-${alignment}`]:!0},ref:el=>this.paginationBarEl=el},(!hideRangeLabel||showItemsPerPageControl)&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"item-controls"},showItemsPerPageControl&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"items-per-page-holder"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{class:{[`pagination-text-${appearance}`]:!0,"items-per-page-control-label":!0},variant:"label",onClick:this.itemsPerPageLabelClickHandler},capitalizedItemLabel,"s per ",lowerCasePageLabel),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-select",{size:"small",label:"items-per-page-input",class:"items-per-page-input",hideLabel:!0,options:displayedItemsPerPageOptions,value:itemsPerPageString,onIcChange:this.changeItemsPerPage,ref:el=>this.pageDropdownEl=el})),!hideRangeLabel&&("data"===rangeLabelType?(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{class:{[`pagination-text-${appearance}`]:!0,"item-pagination-label":!0},variant:"label","aria-live":"polite"},0===this.upperBound&&`0 ${lowerCaseItemLabel}s`,this.upperBound>0&&`${this.lowerBound} - ${this.upperBound} of ${this.totalItems} ${lowerCaseItemLabel}${this.totalItems>1?"s":""}`):(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{class:{[`pagination-text-${appearance}`]:!0,"page-pagination-label":!0},variant:"label","aria-live":"polite"},capitalizedPageLabel," ",currentPage," of ",totalPages))),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"pagination-controls":!0,"pagination-controls-wrap":this.paginationWrapped}},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"pagination-holder"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-pagination",{appearance,type,pages:totalPages,label:pageLabel,ref:el=>this.paginationEl=el})),showGoToPageControl&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"go-to-page-holder"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{class:{[`pagination-text-${appearance}`]:!0},variant:"label",onClick:this.goToPageLabelClickHandler},"Go to ",lowerCasePageLabel),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-tooltip",{label:this.inputError,target:`#${PAGE_INPUT_FIELD_ID}`,disableHover:!0,disableClick:!0,ref:el=>this.pageInputTooltipEl=el},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-text-field",{type:"number",size:"small",label:PAGE_INPUT_FIELD_ID,class:PAGE_INPUT_FIELD_ID,id:PAGE_INPUT_FIELD_ID,hideLabel:!0,onKeyDown:this.handleKeydown,onKeyUp:this.handleKeyUp,onInput:this.handleInputChange,max:totalPages,min:"1",validationInlineInternal:!0,onBlur:this.handleBlur,onFocus:this.handleFocus,ref:el=>this.pageInputEl=el})),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{appearance,variant:"secondary",onClick:this.goToPage,size:"small",class:"go-to-page-button"},"Go"))))}get el(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{itemLabel:["watchItemLabelHandler"],itemsPerPageOptions:["watchItemsPerPageOptionsHandler"],pageLabel:["watchPageLabelHandler"],totalItems:["watchTotalItemsHandler"]}}};PaginationBar.style=":host(){display:block}.pagination-bar{height:3.5rem;display:flex;align-items:center;justify-content:flex-end;gap:var(--ic-space-xl);padding:var(--ic-space-xs) var(--ic-space-md);box-sizing:border-box}.pagination-bar-left{justify-content:flex-start}.item-controls{display:flex;align-items:center;gap:var(--ic-space-xl)}.pagination-bar-space-between .item-controls{margin-right:auto}.items-per-page-holder{display:flex;align-items:center;gap:var(--ic-space-xs)}.items-per-page-input{--input-width:5rem}.pagination-controls{display:flex;align-items:center;gap:var(--ic-space-xl)}.pagination-controls-wrap{flex-direction:column;align-items:flex-end;gap:var(--ic-space-xs)}.pagination-bar-space-between .pagination-controls{margin-left:auto}.go-to-page-holder{display:flex;align-items:center;gap:var(--ic-space-xs)}.go-to-page-input{--input-width:var(--ic-space-xl)}.go-to-page-button{--min-width:var(--ic-space-xl)}.pagination-text-default,.pagination-text-dark,.pagination-text-light{white-space:nowrap}.pagination-text-light{color:var(--ic-color-white-text)}@media screen and (max-width: 768px){.pagination-bar{flex-direction:column;align-items:flex-end;height:-moz-fit-content;height:fit-content;gap:var(--ic-space-xs)}.pagination-bar-left{align-items:flex-start}}@media screen and (max-width: 320px){.item-controls,.pagination-controls{flex-direction:column;align-items:flex-end;gap:var(--ic-space-xs)}.pagination-bar-left .item-controls,.pagination-bar-left .pagination-controls,.pagination-bar-space-between .item-controls,.pagination-bar-space-between .pagination-controls{align-items:flex-start}}"}}]);