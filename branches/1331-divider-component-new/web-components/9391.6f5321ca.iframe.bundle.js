"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[9391],{"./dist/esm/ic-divider.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_divider:()=>Divider});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-d1d2c456.js"),_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-1c9151ef.js");const Divider=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.foregroundColor=(0,_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.g)(),this.appearance="default",this.borderStyle="solid",this.weight="thin",this.orientation="horizontal",this.labelPlacement="center",this.label=void 0}themeChangeHandler(ev){const theme=ev.detail;this.foregroundColor=theme.mode}render(){const{orientation,borderStyle,weight,label,labelPlacement,foregroundColor}=this;let{appearance}=this;var placement;("left"!==labelPlacement&&"right"!==labelPlacement||"vertical"!==orientation)&&("top"!==labelPlacement&&"bottom"!==labelPlacement||"horizontal"!==orientation)||(placement=labelPlacement,console.error(`${placement.charAt(0).toUpperCase()+placement.slice(1)} label placement is not applicable for a ${orientation} ic-divider (web-components) / IcDivider (react)`));const getTypographyVariant=weight=>{switch(weight){case"very-thick":return"h4";case"thick":return"subtitle-large";default:return"label"}},renderLabel=()=>(0,_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.s)(this.el,"label")?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"label"}):(0,_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.d)(label)?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{class:"ic-divider-label",variant:getTypographyVariant(weight)},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("p",null,label)):null;return"IC-SIDE-NAVIGATION"===this.el.parentElement.tagName&&"theme"!==appearance&&(foregroundColor===_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.I.Light?appearance="light":foregroundColor===_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.I.Dark&&(appearance="dark")),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,Object.assign({class:{[`ic-divider-${appearance}`]:!0,[`ic-divider-${orientation}`]:!0,"ic-divider-weight":!0,[`ic-divider-${borderStyle}`]:!0}},("vertical"===orientation||!!renderLabel()&&!!(0,_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.d)(labelPlacement))&&{"aria-orientation":orientation,role:"separator"}),"horizontal"===orientation&&(!renderLabel()||!(0,_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.d)(labelPlacement))&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("hr",null),!!(0,_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.d)(labelPlacement)&&!!renderLabel()&&renderLabel(),"vertical"===orientation&&(!renderLabel()||!(0,_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.d)(labelPlacement))&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"vertical-divider"}))}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};Divider.style='.ic-divider-horizontal.sc-ic-divider-h{display:flex;width:var(--ic-divider-horizontal-width, 100%);align-items:center;-moz-column-gap:var(--ic-space-xxs);column-gap:var(--ic-space-xxs)}hr.sc-ic-divider{padding:0;margin:0;border:none;border-bottom:solid var(--ic-divider-weight, var(--ic-space-1px))\n    var(--ic-architectural-200);width:inherit}.ic-divider-horizontal.sc-ic-divider-h::before,.ic-divider-horizontal.sc-ic-divider-h::after{border-left:none !important}.ic-divider-horizontal[label-placement="right"].sc-ic-divider-h::before,.ic-divider-horizontal[label-placement="center"].sc-ic-divider-h::before,.ic-divider-horizontal[label-placement="left"].sc-ic-divider-h::after,.ic-divider-horizontal[label-placement="center"].sc-ic-divider-h::after{content:"";border:none;border-bottom:solid var(--ic-divider-weight, var(--ic-space-1px))\n    var(--ic-architectural-200);width:100%}.ic-divider-vertical.sc-ic-divider-h{display:flex;flex-direction:column;height:var(--ic-divider-vertical-height, inherit);width:-moz-max-content;width:max-content;align-items:center;-moz-column-gap:var(--ic-space-xxs);column-gap:var(--ic-space-xxs);border:none}.ic-divider-vertical[label-placement="bottom"].sc-ic-divider-h::before,.ic-divider-vertical[label-placement="center"].sc-ic-divider-h::before,.ic-divider-vertical[label-placement="top"].sc-ic-divider-h::after,.ic-divider-vertical[label-placement="center"].sc-ic-divider-h::after{content:"";border-left:solid var(--ic-divider-weight, var(--ic-space-1px))\n    var(--ic-architectural-200);height:100%}.ic-divider-vertical.sc-ic-divider-h div.vertical-divider.sc-ic-divider{display:flex;height:inherit}.ic-divider-dark.sc-ic-divider-h hr.sc-ic-divider,.ic-divider-dark.sc-ic-divider-h div.vertical-divider.sc-ic-divider,.ic-divider-dark[label-placement="bottom"].sc-ic-divider-h::before,.ic-divider-dark[label-placement="right"].sc-ic-divider-h::before,.ic-divider-dark[label-placement="center"].sc-ic-divider-h::before,.ic-divider-dark[label-placement="top"].sc-ic-divider-h::after,.ic-divider-dark[label-placement="left"].sc-ic-divider-h::after,.ic-divider-dark[label-placement="center"].sc-ic-divider-h::after{border-color:var(--ic-keyline-darken-rgb)}.ic-divider-light.sc-ic-divider-h hr.sc-ic-divider,.ic-divider-light.sc-ic-divider-h div.vertical-divider.sc-ic-divider,.ic-divider-light[label-placement="bottom"].sc-ic-divider-h::before,.ic-divider-light[label-placement="right"].sc-ic-divider-h::before,.ic-divider-light[label-placement="center"].sc-ic-divider-h::before,.ic-divider-light[label-placement="top"].sc-ic-divider-h::after,.ic-divider-light[label-placement="left"].sc-ic-divider-h::after,.ic-divider-light[label-placement="center"].sc-ic-divider-h::after{border-color:var(--ic-keyline-lighten-rgb)}.ic-divider-theme.sc-ic-divider-h hr.sc-ic-divider,.ic-divider-theme.sc-ic-divider-h div.vertical-divider.sc-ic-divider,.ic-divider-theme[label-placement="bottom"].sc-ic-divider-h::before,.ic-divider-theme[label-placement="right"].sc-ic-divider-h::before,.ic-divider-theme[label-placement="center"].sc-ic-divider-h::before,.ic-divider-theme[label-placement="top"].sc-ic-divider-h::after,.ic-divider-theme[label-placement="left"].sc-ic-divider-h::after,.ic-divider-theme[label-placement="center"].sc-ic-divider-h::after{border-color:var(--ic-theme-primary)}.ic-divider-very-thick.sc-ic-divider-h hr.sc-ic-divider,.ic-divider-very-thick[label-placement="right"].sc-ic-divider-h::before,.ic-divider-very-thick[label-placement="center"].sc-ic-divider-h::before,.ic-divider-very-thick[label-placement="left"].sc-ic-divider-h::after,.ic-divider-very-thick[label-placement="center"].sc-ic-divider-h::after{border-bottom-width:var(--ic-divider-weight, var(--ic-space-xs))}.ic-divider-very-thick.sc-ic-divider-h .vertical-divider.sc-ic-divider,.ic-divider-very-thick[label-placement="bottom"].sc-ic-divider-h::before,.ic-divider-very-thick[label-placement="center"].sc-ic-divider-h::before,.ic-divider-very-thick[label-placement="top"].sc-ic-divider-h::after,.ic-divider-very-thick[label-placement="center"].sc-ic-divider-h::after{border-left-width:var(--ic-divider-weight, var(--ic-space-xs))}.ic-divider-thick.sc-ic-divider-h hr.sc-ic-divider,.ic-divider-thick[label-placement="right"].sc-ic-divider-h::before,.ic-divider-thick[label-placement="center"].sc-ic-divider-h::before,.ic-divider-thick[label-placement="left"].sc-ic-divider-h::after,.ic-divider-thick[label-placement="center"].sc-ic-divider-h::after{border-bottom-width:var(--ic-divider-weight, var(--ic-space-xxs))}.ic-divider-thick.sc-ic-divider-h .vertical-divider.sc-ic-divider,.ic-divider-thick[label-placement="bottom"].sc-ic-divider-h::before,.ic-divider-thick[label-placement="center"].sc-ic-divider-h::before,.ic-divider-thick[label-placement="top"].sc-ic-divider-h::after,.ic-divider-thick[label-placement="center"].sc-ic-divider-h::after{border-left-width:var(---ic-divider-weight, var(--ic-space-xxs))}.ic-divider-medium.sc-ic-divider-h hr.sc-ic-divider,.ic-divider-medium[label-placement="right"].sc-ic-divider-h::before,.ic-divider-medium[label-placement="center"].sc-ic-divider-h::before,.ic-divider-medium[label-placement="left"].sc-ic-divider-h::after,.ic-divider-medium[label-placement="center"].sc-ic-divider-h::after{border-bottom-width:var(--ic-divider-weight, var(--ic-space-xxxs))}.ic-divider-medium.sc-ic-divider-h .vertical-divider.sc-ic-divider,.ic-divider-medium[label-placement="bottom"].sc-ic-divider-h::before,.ic-divider-medium[label-placement="center"].sc-ic-divider-h::before,.ic-divider-medium[label-placement="top"].sc-ic-divider-h::after,.ic-divider-medium[label-placement="center"].sc-ic-divider-h::after{border-left-width:var(--ic-divider-weight, var(--ic-space-xxxs))}.ic-divider-thin.sc-ic-divider-h hr.sc-ic-divider,.ic-divider-thin[label-placement="right"].sc-ic-divider-h::before,.ic-divider-thin[label-placement="center"].sc-ic-divider-h::before,.ic-divider-thin[label-placement="left"].sc-ic-divider-h::after,.ic-divider-thin[label-placement="center"].sc-ic-divider-h::after{border-bottom-width:var(--ic-divider-weight, var(--ic-space-1px))}.ic-divider-thin.sc-ic-divider-h .vertical-divider.sc-ic-divider,.ic-divider-thin[label-placement="bottom"].sc-ic-divider-h::before,.ic-divider-thin.ic-divider-vertical[label-placement="center"].sc-ic-divider-h::before,.ic-divider-thin[label-placement="top"].sc-ic-divider-h::after,.ic-divider-thin.ic-divider-vertical[label-placement="center"].sc-ic-divider-h::after{border-left-width:var(--ic-divider-weight, var(--ic-space-1px))}.ic-divider-solid.sc-ic-divider-h .vertical-divider.sc-ic-divider,.ic-divider-solid[label-placement="bottom"].sc-ic-divider-h::before,.ic-divider-solid[label-placement="center"].sc-ic-divider-h::before,.ic-divider-solid[label-placement="top"].sc-ic-divider-h::after,.ic-divider-solid[label-placement="center"].sc-ic-divider-h::after{border-left-style:solid}.ic-divider-dashed.sc-ic-divider-h hr.sc-ic-divider,.ic-divider-dashed[label-placement="right"].sc-ic-divider-h::before,.ic-divider-dashed[label-placement="center"].sc-ic-divider-h::before,.ic-divider-dashed[label-placement="left"].sc-ic-divider-h::after,.ic-divider-dashed[label-placement="center"].sc-ic-divider-h::after{border-bottom-style:dashed}.ic-divider-dashed.sc-ic-divider-h .vertical-divider.sc-ic-divider,.ic-divider-dashed[label-placement="bottom"].sc-ic-divider-h::before,.ic-divider-dashed[label-placement="center"].sc-ic-divider-h::before,.ic-divider-dashed[label-placement="top"].sc-ic-divider-h::after,.ic-divider-dashed[label-placement="center"].sc-ic-divider-h::after{border-left-style:dashed}.sc-ic-divider-h .ic-divider-label.sc-ic-divider p.sc-ic-divider,.sc-ic-divider-h.sc-ic-divider-s>ic-typography,.sc-ic-divider-h .sc-ic-divider-s>ic-typography{width:-moz-max-content;width:max-content}.ic-divider-default.sc-ic-divider-h .ic-divider-label.sc-ic-divider,.sc-ic-divider-h.ic-divider-default.sc-ic-divider-s>*,.sc-ic-divider-h.ic-divider-default .sc-ic-divider-s>*{color:var(--ic-architectural-200)}.ic-divider-light.sc-ic-divider-h .ic-divider-label.sc-ic-divider,.sc-ic-divider-h.ic-divider-light.sc-ic-divider-s>*,.sc-ic-divider-h.ic-divider-light .sc-ic-divider-s>*{color:var(--ic-keyline-lighten-rgb)}.ic-divider-dark.sc-ic-divider-h .ic-divider-label.sc-ic-divider,.sc-ic-divider-h.ic-divider-dark.sc-ic-divider-s>*,.sc-ic-divider-h.ic-divider-dark .sc-ic-divider-s>*{color:var(--ic-keyline-darken-rgb)}.ic-divider-theme.sc-ic-divider-h .ic-divider-label.sc-ic-divider,.sc-ic-divider-h.ic-divider-theme.sc-ic-divider-s>*,.sc-ic-divider-h.ic-divider-theme .sc-ic-divider-s>*{color:var(--ic-theme-primary)}'}}]);