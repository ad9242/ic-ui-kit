"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[4793],{"../canary-web-components/dist/esm/chevron-icon-875b7af2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Chevron});const Chevron='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.70687 6L8.29688 7.41L12.8769 12L8.29688 16.59L9.70687 18L15.7069 12L9.70687 6Z" fill="currentColor"/>\n</svg>\n'},"../canary-web-components/dist/esm/ic-breadcrumb.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_breadcrumb:()=>Breadcrumb});var _index_93509377_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../canary-web-components/dist/esm/index-93509377.js"),_chevron_icon_875b7af2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../canary-web-components/dist/esm/chevron-icon-875b7af2.js"),_helpers_c326255f_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../canary-web-components/dist/esm/helpers-c326255f.js");const Breadcrumb=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.renderDefaultBreadcrumb=(current,pageTitle,describedById,href)=>{const hasPageTitle=null!==pageTitle&&(0,_helpers_c326255f_js__WEBPACK_IMPORTED_MODULE_1__.d)(pageTitle)&&""!==pageTitle;return current&&hasPageTitle?(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:{"current-page-container":current}},(0,_helpers_c326255f_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"icon")&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"icon"}),pageTitle):(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-link",{theme:this.theme,monochrome:this.monochrome,href,class:"breadcrumb-link","aria-describedby":this.showBackIcon&&describedById&&describedById},this.showBackIcon&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"back-icon",innerHTML:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="currentColor"/>\n</svg>\n'}),(0,_helpers_c326255f_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"icon")&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"icon"}),pageTitle)},this.setSlottedCurrentPageClass=()=>{const icLink=this.el.querySelector("ic-link");if(icLink&&(icLink.classList.remove("current-page"),this.current)){icLink.classList.contains("current-page")||icLink.classList.add("breadcrumb-link","current-page")}},this.current=!1,this.href=void 0,this.monochrome=!1,this.pageTitle=void 0,this.showBackIcon=!1,this.theme="inherit"}componentWillRender(){this.setSlottedCurrentPageClass()}async setFocus(){this.el.shadowRoot.querySelector("ic-link")&&this.el.shadowRoot.querySelector("ic-link").focus()}render(){const{current,href,pageTitle}=this,describedById=`${pageTitle&&pageTitle.toLowerCase().replace(" ","-")}-describedby`,hasPageTitle=null!==pageTitle&&(0,_helpers_c326255f_js__WEBPACK_IMPORTED_MODULE_1__.d)(pageTitle)&&""!==pageTitle,hasHref=null!==href&&(0,_helpers_c326255f_js__WEBPACK_IMPORTED_MODULE_1__.d)(href)&&""!==href;return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{"ic-breadcrumb-back":this.showBackIcon,[`ic-theme-${this.theme}`]:"inherit"!==this.theme,"ic-breadcrumb-monochrome":this.monochrome},"aria-current":current&&"page",role:"listitem"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"breadcrumb"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{innerHTML:_chevron_icon_875b7af2_js__WEBPACK_IMPORTED_MODULE_2__.C,class:"chevron","aria-hidden":"true"}),this.showBackIcon&&describedById&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{id:describedById,class:"hide"},`Back to ${pageTitle}`),hasPageTitle&&hasHref?this.renderDefaultBreadcrumb(current,pageTitle,describedById,href):(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))}static get delegatesFocus(){return!0}get el(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};Breadcrumb.style=':host{display:block;margin:var(--ic-space-xs) var(--ic-space-xs) var(--ic-space-xs) 0}:host .breadcrumb{display:flex;align-items:center;white-space:nowrap;gap:var(--ic-space-xs);min-height:var(--ic-space-lg)}:host .chevron{width:var(--ic-space-lg);height:var(--ic-space-lg)}:host .chevron svg{color:var(--ic-breadcrumb-icon-chevron)}:host(.ic-breadcrumb-monochrome) .chevron svg{color:var(--ic-breadcrumb-icon-chevron-monochrome)}:host(:first-child) .chevron{display:none}.back-icon svg{color:var(--ic-breadcrumb-page-icon)}:host(.ic-breadcrumb-monochrome) .back-icon svg{color:var(--ic-breadcrumb-page-icon-monochrome)}:host(.ic-breadcrumb-back){display:flex;align-items:center}:host(.ic-breadcrumb-back) .chevron{display:none}ic-link{--breadcrumb-link-display:inline-flex;--breadcrumb-link-align-items:center;--breadcrumb-link-gap:var(--ic-space-xs)}:host([aria-current="page"]) .current-page-container{display:flex;align-items:center;gap:var(--ic-space-xs);color:var(--ic-breadcrumb-text)}:host([aria-current="page"].ic-breadcrumb-monochrome) .current-page-container{color:var(--ic-breadcrumb-text-monochrome)}:host(.collapsed-breadcrumb-wrapper){margin-right:var(--ic-space-xs) !important;display:flex;align-items:center;gap:var(--ic-space-xs)}:host(.collapsed-breadcrumb-wrapper) ::slotted(.collapsed-breadcrumb){border:none;background-color:transparent;color:var(--ic-color-hyperlink-default);text-decoration:underline;font-weight:var(--ic-font-weight-bold);cursor:pointer}:host(.collapsed-breadcrumb-wrapper) ::slotted(.collapsed-breadcrumb:hover),:host(.collapsed-breadcrumb-wrapper) ::slotted(.collapsed-breadcrumb:focus){outline:var(--ic-hc-focus-outline);border-bottom:0.25rem solid !important;margin-bottom:-0.25rem !important;text-decoration:none}.hide,:host(.collapsed-breadcrumb-wrapper) ::slotted(.hide){display:none}@media (forced-colors: active){.back-icon svg{color:currentcolor}}@supports (text-underline-offset: 25%){ic-link{--breadcrumb-link-display:flex}:host(.collapsed-breadcrumb-wrapper) ::slotted(.collapsed-breadcrumb:hover),:host(.collapsed-breadcrumb-wrapper) ::slotted(.collapsed-breadcrumb:focus){text-decoration-line:underline;text-decoration-thickness:25%;text-underline-offset:25%;border-bottom:0 !important;margin-bottom:0 !important}}'}}]);