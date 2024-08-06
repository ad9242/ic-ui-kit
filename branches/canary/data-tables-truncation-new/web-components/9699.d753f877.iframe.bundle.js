"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[9699],{"./dist/esm/ic-pagination.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_pagination:()=>Pagination});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-d1d2c456.js"),_helpers_354dbb8d_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-354dbb8d.js");__webpack_require__("./dist/esm/types-6f6b41a5.js");const paginationNextPrevious='<svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M2.08748 0L0.912476 1.175L4.72914 5L0.912476 8.825L2.08748 10L7.08748 5L2.08748 0Z" fill="currentColor"/>\n</svg>\n',paginationFirstLast='<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M11.1709 8.825L7.34589 5L11.1709 1.175L9.99589 0L4.99589 5L9.99589 10L11.1709 8.825ZM0.829224 0H2.49589V10H0.829224V0Z" fill="currentColour"/>\n</svg>',Pagination=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icPageChange=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icPageChange",7),this.handleClickFirst=()=>{this.currentPage=1,this.icPageChange.emit({value:this.currentPage})},this.handleClickPrevious=()=>{this.currentPage--,this.icPageChange.emit({value:this.currentPage})},this.handleClickNext=()=>{this.currentPage++,this.icPageChange.emit({value:this.currentPage})},this.handleClickLast=()=>{this.currentPage=this.pages,this.icPageChange.emit({value:this.currentPage})},this.firstButton=()=>(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{id:"first-page-button","aria-label":"Go to first page",appearance:this.appearance,onClick:this.handleClickFirst,class:"page-button first-last",disabled:1===this.currentPage||this.disabled,variant:"icon",innerHTML:paginationFirstLast}),this.previousButton=()=>(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{id:"previous-page-button","aria-label":"Go to previous page",appearance:this.appearance,onClick:this.handleClickPrevious,class:"page-button next-previous flip",disabled:1===this.currentPage||this.disabled,variant:"icon",innerHTML:paginationNextPrevious}),this.nextButton=()=>(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{id:"next-page-button","aria-label":"Go to next page",appearance:this.appearance,onClick:this.handleClickNext,class:"page-button next-previous",disabled:this.currentPage===this.pages||this.disabled,variant:"icon",innerHTML:paginationNextPrevious}),this.lastButton=()=>(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{id:"last-page-button","aria-label":"Go to last page",appearance:this.appearance,onClick:this.handleClickLast,class:"page-button first-last flip",disabled:this.currentPage===this.pages||this.disabled,variant:"icon",innerHTML:paginationFirstLast}),this.renderStartEllipsis=()=>(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-pagination-item",{appearance:this.appearance,type:"ellipsis",id:"start-ellipsis",disabled:this.disabled}),this.renderEndEllipsis=()=>(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-pagination-item",{appearance:this.appearance,type:"ellipsis",id:"end-ellipsis",disabled:this.disabled}),this.renderStartItems=()=>this.startItems.map((page=>(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-pagination-item",{appearance:this.appearance,selected:page===this.currentPage,id:`pagination-item-${page}`,type:"page",page,disabled:this.disabled}))),this.renderEndItems=()=>this.endItems.map((page=>(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-pagination-item",{appearance:this.appearance,selected:page===this.currentPage,id:`pagination-item-${page}`,type:"page",page,disabled:this.disabled}))),this.renderMiddleItems=()=>this.midItems.map((page=>(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-pagination-item",{appearance:this.appearance,selected:page===this.currentPage,id:`pagination-item-${page}`,type:"page",page,disabled:this.disabled}))),this.endEllipsis=!1,this.endItems=[],this.midItems=[],this.startEllipsis=!1,this.startItems=[],this.adjacentCount=1,this.appearance="default",this.boundaryCount=1,this.defaultPage=1,this.disabled=!1,this.hideCurrentPage=!1,this.hideFirstAndLastPageButton=!1,this.label="Page",this.pages=void 0,this.type="simple",this.currentPage=this.defaultPage}watchAdjacentCountHandler(){this.adjacentCount>2&&(this.adjacentCount=2)}watchBoundaryCountHandler(){this.boundaryCount>2&&(this.boundaryCount=2)}watchNumberPagesHandler(){this.watchPageChangeHandler()}watchTypeHandler(){this.watchPageChangeHandler()}watchPageChangeHandler(){if("simple"===this.type)return;this.startEllipsis=!1,this.endEllipsis=!1,this.startItems=[],this.endItems=[],this.midItems=[];const startItems=[];let startItemCount=0;const endItems=[];let endStart=this.pages;const midItems=[];let midStart,midEnd,startEllipsis=!1,endEllipsis=!1;if(this.pages<=2*this.boundaryCount+2*this.adjacentCount+3){this.startEllipsis=!1,this.endEllipsis=!1;for(let i=1;i<=this.pages;i++)startItems.push(i);this.startItems=startItems}else{if(startItemCount=0===this.boundaryCount?1:this.boundaryCount,endStart=0===this.boundaryCount?this.pages:this.pages-this.boundaryCount+1,this.currentPage<=this.adjacentCount+this.boundaryCount+2){startEllipsis=!1,endEllipsis=!0;let numItems=2*this.adjacentCount+1;0===this.boundaryCount&&numItems--,midStart=startItemCount+1,midEnd=midStart+numItems}else if(startEllipsis=!0,this.currentPage>this.pages-(this.adjacentCount+this.boundaryCount+2)){let numItems=2*this.adjacentCount+1;0===this.boundaryCount&&numItems--,midEnd=0===this.boundaryCount?this.pages-1:this.pages-this.boundaryCount,midStart=midEnd-numItems}else endEllipsis=!0,midStart=this.currentPage-this.adjacentCount,midEnd=this.currentPage+this.adjacentCount;if(this.boundaryCount>0||0===this.boundaryCount&&!1===startEllipsis)for(let i=1;i<=startItemCount;i++)startItems.push(i);if(this.boundaryCount>0||0===this.boundaryCount&&!1===endEllipsis)for(let i=endStart;i<=this.pages;i++)endItems.push(i);for(let i=midStart;i<=midEnd;i++)midItems.push(i);this.startEllipsis=startEllipsis,this.endEllipsis=endEllipsis,this.startItems=startItems,this.endItems=endItems,this.midItems=midItems}}componentWillLoad(){this.watchPageChangeHandler(),this.watchBoundaryCountHandler(),this.watchAdjacentCountHandler(),(0,_helpers_354dbb8d_js__WEBPACK_IMPORTED_MODULE_1__.k)(this.disabled,this.el)}componentDidLoad(){(0,_helpers_354dbb8d_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.pages,propName:"pages"}],"Pagination")}paginationItemClickHandler(ev){const page=ev.detail.page;this.currentPage=page,this.icPageChange.emit({value:this.currentPage})}async setCurrentPage(page){"number"==typeof page&&page>0&&page<=this.pages?this.currentPage=page:console.error("Current page must be a number greater than zero but less than or equal to the total number of pages")}render(){const{type,currentPage,hideCurrentPage,disabled,hideFirstAndLastPageButton,label}=this;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,null,"simple"===type&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{class:{disabled},role:"navigation","aria-label":"Pagination Navigation"},hideFirstAndLastPageButton?null:this.firstButton(),this.previousButton(),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-pagination-item",{appearance:this.appearance,type:"simple-current",page:currentPage,label,class:{"hide-current-page":hideCurrentPage},disabled}),this.nextButton(),hideFirstAndLastPageButton?null:this.lastButton()),"complex"===type&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{class:{disabled},role:"navigation","aria-label":"Pagination Navigation"},hideFirstAndLastPageButton?null:this.firstButton(),this.previousButton(),this.renderStartItems(),this.startEllipsis&&this.renderStartEllipsis(),this.renderMiddleItems(),this.endEllipsis&&this.renderEndEllipsis(),this.renderEndItems(),this.nextButton(),hideFirstAndLastPageButton?null:this.lastButton()))}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{adjacentCount:["watchAdjacentCountHandler"],boundaryCount:["watchBoundaryCountHandler"],pages:["watchNumberPagesHandler"],type:["watchTypeHandler"],currentPage:["watchPageChangeHandler"]}}};Pagination.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{box-sizing:border-box;width:100%;display:flex;justify-content:center}nav{width:100%;display:flex;flex-flow:row wrap;justify-content:flex-start;align-items:center}ic-button{cursor:pointer}ic-button.next-previous{--icon-width:var(--ic-space-xs);--icon-height:calc(var(--ic-space-xs) + var(--ic-space-xxxs));padding:0 var(--ic-space-xxs) 0 var(--ic-space-xxxs)}ic-button.first-last{--icon-width:calc(var(--ic-space-sm) + var(--ic-space-xxxs));--icon-height:calc(var(--ic-space-xs) + var(--ic-space-xxxs))}.disabled{color:var(--ic-architectural-200);pointer-events:none;cursor:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.hide-current-page{display:none}'}}]);