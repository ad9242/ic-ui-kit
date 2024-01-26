/*! For license information please see 9139.648acd1a.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[9139],{"./dist/esm/ic-horizontal-scroll.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_horizontal_scroll:()=>HorizontalScroll});__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find-index.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.async-iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.math.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.json.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js");var _index_93509377_js__WEBPACK_IMPORTED_MODULE_29__=__webpack_require__("./dist/esm/index-93509377.js"),_helpers_268c2b7f_js__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("./dist/esm/helpers-268c2b7f.js"),_types_f605c21c_js__WEBPACK_IMPORTED_MODULE_31__=__webpack_require__("./dist/esm/types-f605c21c.js");function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw new Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}var HorizontalScroll=function(){function HorizontalScroll(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,HorizontalScroll),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_29__.r)(this,hostRef),this.buttonStateSet=!1,this.focusHandler=function(event){_this.itemFocusHandler(Array.from(_this.items).indexOf(event.target))},this.resizeObserverCallback=function(){_this.el.clientWidth>=_this.itemsContainerEl.scrollWidth?_this.itemOverflow=!1:_this.itemOverflow=(0,_helpers_268c2b7f_js__WEBPACK_IMPORTED_MODULE_30__.N)(_this.itemsContainerEl),_this.itemOverflow&&(_this.lastItemVisible=_this.itemsContainerEl.offsetWidth+_this.itemsContainerEl.scrollLeft>=_this.itemsContainerEl.scrollWidth)},this.runResizeObserver=function(){_this.resizeObserver=new ResizeObserver((function(){_this.resizeObserverCallback()})),_this.resizeObserver.observe(_this.itemsContainerEl)},this.scrollLeft=function(){_this.scrollItemIntoView(_this.getCurrentLeftItem()-1)},this.scrollRight=function(){_this.scrollItemIntoView(_this.getCurrentLeftItem()+1)},this.longScrollRight=function(){_this.scrollRight(),_this.scrollDelay=window.setTimeout(_this.longScrollRight,200)},this.longScrollLeft=function(){_this.scrollLeft(),_this.scrollDelay=window.setTimeout(_this.longScrollLeft,200)},this.leftArrowMouseDownHandler=function(e){e.preventDefault(),_this.scrollDelay=window.setTimeout(_this.longScrollLeft,200)},this.rightArrowMouseDownHandler=function(e){e.preventDefault(),_this.scrollDelay=window.setTimeout(_this.longScrollRight,200)},this.arrowMouseUpHandler=function(){window.clearTimeout(_this.scrollDelay)},this.getCurrentLeftItem=function(){var index=_this.itemOffsets.findIndex((function(el){return el>Math.round(_this.itemsContainerEl.scrollLeft)}));return index<0?0:index},this.scrollHandler=function(){window.clearTimeout(_this.isScrolling),_this.isScrolling=window.setTimeout(_this.scrollStopped,50)},this.scrollStopped=function(){var scrollLeft=Math.round(_this.itemsContainerEl.scrollLeft);!1===_this.buttonStateSet&&(_this.firstItemVisible=0===scrollLeft,_this.lastItemVisible=_this.itemsContainerEl.offsetWidth+scrollLeft>=_this.itemsContainerEl.scrollWidth),_this.buttonStateSet=!1},this.firstItemVisible=!0,this.itemOverflow=!1,this.lastItemVisible=!1,this.appearance="default",this.focusTrigger="focus"}var _scrollItemIntoView;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(HorizontalScroll,[{key:"componentWillLoad",value:function componentWillLoad(){var _this2=this;this.itemsContainerEl=this.el.children[0],this.itemsContainerEl.addEventListener("scroll",this.scrollHandler),this.items=(0,_helpers_268c2b7f_js__WEBPACK_IMPORTED_MODULE_30__.z)(this.itemsContainerEl)||Array.from(this.itemsContainerEl.children),this.items.forEach((function(item){item.addEventListener&&item.addEventListener(_this2.focusTrigger,_this2.focusHandler)}))}},{key:"componentDidLoad",value:function componentDidLoad(){var _this3=this,runningTotal=0;this.itemOffsets=this.items.map((function(item){return runningTotal+=item.offsetWidth})),(0,_helpers_268c2b7f_js__WEBPACK_IMPORTED_MODULE_30__.f)(this.runResizeObserver);var scrollArrows=Array.from(this.el.shadowRoot.querySelectorAll("div"));["mouseup","mouseleave"].forEach((function(event){scrollArrows.forEach((function(arrow){return arrow.addEventListener(event,_this3.arrowMouseUpHandler)}))}))}},{key:"disconnectedCallback",value:function disconnectedCallback(){var _this4=this;void 0!==this.resizeObserver&&this.resizeObserver.disconnect();var scrollArrows=Array.from(this.el.shadowRoot.querySelectorAll("div"));["mouseup","mouseleave"].forEach((function(event){scrollArrows.forEach((function(arrow){return arrow.removeEventListener(event,_this4.arrowMouseUpHandler)}))})),this.items.forEach((function(item){item.removeEventListener&&item.removeEventListener(_this4.focusTrigger,_this4.focusHandler)})),this.itemsContainerEl.removeEventListener("scroll",this.scrollHandler)}},{key:"scrollItemIntoView",value:(_scrollItemIntoView=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(itemPosition){var newScrollPos;return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.firstItemVisible=itemPosition<=0,newScrollPos=itemPosition<=0?0:this.itemOffsets[itemPosition-1],this.lastItemVisible=this.itemsContainerEl.offsetWidth+newScrollPos>=this.itemsContainerEl.scrollWidth,this.buttonStateSet=!0,this.itemsContainerEl.scrollLeft=newScrollPos;case 5:case"end":return _context.stop()}}),_callee,this)}))),function scrollItemIntoView(_x){return _scrollItemIntoView.apply(this,arguments)})},{key:"itemFocusHandler",value:function itemFocusHandler(itemPosition){this.itemOverflow&&this.scrollItemIntoView(itemPosition)}},{key:"render",value:function render(){var _class,_class2,_class3,appearance=this.appearance,firstItemVisible=this.firstItemVisible,lastItemVisible=this.lastItemVisible,itemOverflow=this.itemOverflow;return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_29__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_29__.H,{class:(_class={},_class.visible=itemOverflow,_class.dark=this.appearance===_types_f605c21c_js__WEBPACK_IMPORTED_MODULE_31__.I.Dark,_class.light=this.appearance===_types_f605c21c_js__WEBPACK_IMPORTED_MODULE_31__.I.Light,_class)},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_29__.h)("div",{"aria-hidden":"true",class:(_class2={},_class2["scroll-container-left"]=!0,_class2.hidden=!itemOverflow,_class2.disabled=firstItemVisible,_class2),role:"tab"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_29__.h)("ic-button",{class:"scroll-arrow",variant:"icon","aria-label":"Scroll left",appearance,innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n  <path d="M13.0875 6.175L11.9125 5L6.91251 10L11.9125 15L13.0875 13.825L9.27084 10L13.0875 6.175Z"/>\n</svg>',disabled:firstItemVisible,tabindex:"-1",onClick:this.scrollLeft,onMouseDown:this.leftArrowMouseDownHandler}),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_29__.h)("span",{class:"scroll-splitter-left"})),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_29__.h)("slot",null),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_29__.h)("div",{"aria-hidden":"true",class:(_class3={},_class3["scroll-container-right"]=!0,_class3.hidden=!itemOverflow,_class3.disabled=lastItemVisible,_class3),role:"tab"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_29__.h)("span",{class:"scroll-splitter-right"}),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_29__.h)("ic-button",{class:"scroll-arrow",variant:"icon","aria-label":"Scroll right",appearance,innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n  <path d="M8.08748 5L6.91248 6.175L10.7291 10L6.91248 13.825L8.08748 15L13.0875 10L8.08748 5Z"/>\n</svg>',disabled:lastItemVisible,tabindex:"-1",onClick:this.scrollRight,onMouseDown:this.rightArrowMouseDownHandler})))}},{key:"el",get:function get(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_29__.g)(this)}}]),HorizontalScroll}();HorizontalScroll.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{--border-bottom-color:var(--ic-architectural-300);--splitter-color:var(--ic-architectural-100);display:flex;max-width:100%}:host(.light){--splitter-color:var(--ic-keyline-lighten-rgb)}:host(.dark){--splitter-color:var(--ic-keyline-darken-rgb)}::slotted(*){overflow-x:scroll;overflow-y:hidden;scroll-behavior:smooth;scrollbar-width:none;-ms-overflow-style:none;margin:calc(var(--ic-space-xs) * -1) !important;padding:var(--ic-space-xs) !important}:host(.visible) ::slotted(*){margin:calc(var(--ic-space-xs) * -1) 0 !important;padding:var(--ic-space-xs) !important}.tabs-container::-webkit-scrollbar{display:none}.scroll-container-left,.scroll-container-right{display:flex}.scroll-container-left{margin-left:var(--ic-space-xxs)}.scroll-container-right{margin-right:var(--ic-space-xxs)}.hidden{display:none}.scroll-arrow{margin:var(--ic-space-xxs) 0}.disabled .ic-tooltip-container{display:none !important}.scroll-splitter-left,.scroll-splitter-right{display:flex;height:var(--ic-space-lg);width:var(--ic-space-1px);margin-top:var(--ic-space-xs);border-radius:var(--ic-space-1px);background-color:var(--splitter-color)}.scroll-splitter-left{margin-left:calc(var(--ic-space-xxs) - var(--ic-space-1px))}.scroll-splitter-right{margin-right:calc(var(--ic-space-xxs) - var(--ic-space-1px))}.disabled .scroll-splitter-left,.disabled .scroll-splitter-right{background-color:transparent}.disabled ic-button>svg{color:var(--ic-keyline-darken-rgb)}:host(.dark) .disabled ic-button>svg,:host(.light) .disabled ic-button>svg{color:var(--splitter-color) !important}'}}]);