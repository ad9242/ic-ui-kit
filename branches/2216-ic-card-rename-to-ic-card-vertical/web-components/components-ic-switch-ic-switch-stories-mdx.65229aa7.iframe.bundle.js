/*! For license information please see components-ic-switch-ic-switch-stories-mdx.65229aa7.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[9232],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-switch/ic-switch.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,ariaLabel:()=>ariaLabel,checked:()=>checked,default:()=>ic_switch_stories,defaultArgs:()=>defaultArgs,defaultInForm:()=>defaultInForm,defaultStory:()=>defaultStory,disabled:()=>disabled,disabledNameAndState:()=>disabledNameAndState,disabledNameStateAndChecked:()=>disabledNameStateAndChecked,helperText:()=>helperText,name:()=>ic_switch_stories_name,playground:()=>playground,rightAdornment:()=>rightAdornment,small:()=>small,state:()=>state});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-switch\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute     | Description                                                                                                                                                                                                                                           | Type                   | Default        |\n| -------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | -------------- |\n| `checked`            | `checked`     | If `true`, the switch will display as checked.                                                                                                                                                                                                        | `boolean`              | `false`        |\n| `disabled`           | `disabled`    | If `true`, the disabled state will be set.                                                                                                                                                                                                            | `boolean`              | `false`        |\n| `helperText`         | `helper-text` | The helper text that will be displayed for additional field guidance.                                                                                                                                                                                 | `string`               | `""`           |\n| `hideLabel`          | `hide-label`  | If `true`, the label will be hidden and the required label value will be applied as an aria-label.                                                                                                                                                    | `boolean`              | `false`        |\n| `label` _(required)_ | `label`       | The aria-label applied to the switch when no visual \'name\' is provided.                                                                                                                                                                               | `string`               | `undefined`    |\n| `name`               | `name`        | The name of the control, which is submitted with the form data.                                                                                                                                                                                       | `string`               | `this.inputId` |\n| `showState`          | `show-state`  | If `true`, the switch will render the On/Off state text.                                                                                                                                                                                              | `boolean`              | `false`        |\n| `size`               | `size`        | The size of the switch component.                                                                                                                                                                                                                     | `"default" \\| "small"` | `"default"`    |\n| `value`              | `value`       | The value of the toggle does not mean if it\'s checked or not, use the `checked` property for that.  The value of a toggle is analogous to the value of a `<input type="checkbox">`, it\'s only used when the toggle participates in a native `<form>`. | `string`               | `"on"`         |\n\n\n## Events\n\n| Event      | Description                                  | Type                                     |\n| ---------- | -------------------------------------------- | ---------------------------------------- |\n| `icBlur`   | Emitted when the toggle loses focus.         | `CustomEvent<void>`                      |\n| `icChange` | Emitted when the value property has changed. | `CustomEvent<IcSwitchChangeEventDetail>` |\n| `icFocus`  | Emitted when the toggle has focus.           | `CustomEvent<void>`                      |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the switch.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot                | Description                                                  |\n| ------------------- | ------------------------------------------------------------ |\n| `"right-adornment"` | Content is placed to the right of switch before state label. |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-input-label](../ic-input-label)\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-switch --\x3e ic-input-label\n  ic-switch --\x3e ic-typography\n  ic-input-label --\x3e ic-typography\n  style ic-switch fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={label:"Custom Switch",helperText:"Custom helper text",disabled:!1,checked:!1,hideLabel:!1,showState:!1,size:"default"};function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Web Components/Switch",component:"ic-switch"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:readme_namespaceObject}),"\n","\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",parameters:{loki:{skip:!0}},children:lit_html.dy` <ic-switch label="Label"></ic-switch> `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"label",children:"Label"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Name",parameters:{loki:{skip:!0}},children:lit_html.dy` <ic-switch label="Label"></ic-switch> `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"state",children:"State"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"State",parameters:{loki:{skip:!0}},children:lit_html.dy`<div style="display:flex; justify-content: center">
      <ic-switch show-state="true" label="Label"></ic-switch>
    </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"checked",children:"Checked"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Checked",parameters:{loki:{skip:!0}},children:lit_html.dy`
      <ic-switch checked="true" label="Label" show-state="true"></ic-switch>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"small",children:"Small"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Small",parameters:{loki:{skip:!0}},children:lit_html.dy`
      <ic-switch size="small" show-state="true" label="Label"></ic-switch>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Disabled",parameters:{loki:{skip:!0}},children:lit_html.dy` <ic-switch disabled="true" label="Label"></ic-switch> `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled-name-and-state",children:"Disabled, name and state"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Disabled, name and state",parameters:{loki:{skip:!0}},children:lit_html.dy`
      <ic-switch disabled="true" show-state="true" label="Label"></ic-switch>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled-name-state-and-checked",children:"Disabled, name, state and checked"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Disabled, name, state and checked",parameters:{loki:{skip:!0}},children:lit_html.dy`
      <ic-switch
        disabled="true"
        show-state="true"
        label="Label"
        checked="true"
      ></ic-switch>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"hidden-label",children:"Hidden label"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"ARIA label",parameters:{loki:{skip:!0}},children:lit_html.dy` <ic-switch label="Custom label" hide-label="true"></ic-switch> `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"helper-text",children:"Helper text"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Helper text",parameters:{loki:{skip:!0}},children:lit_html.dy` <ic-switch label="Label" helper-text="Helper Text"></ic-switch>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"right-adornment",children:"Right adornment"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Right adornment",parameters:{loki:{skip:!0}},children:lit_html.dy` <ic-switch label="Right adornment">
      <svg
        slot="right-adornment"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z"
        />
      </svg>
    </ic-switch>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default-in-form",children:"Default in form"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default in form",parameters:{loki:{skip:!0}},children:lit_html.dy` <form id="form" aria-label="test form">
      <ic-switch id="switch" label="custom label" hide-label="true"></ic-switch>
      <br />
      <br />
      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" />
      <form>
        <script>
          const tcForm = document.getElementById("form");
          tcForm.addEventListener("submit", handleSubmit);
          function handleSubmit(e) {
            e.preventDefault();
            var data = "HTML Form Data (name: value): \\n";
            for (const element of document.getElementById("form").elements) {
              data += element.name + ": " + element.value + "\\n";
            }
            alert(data);
          }
        </script>
      </form>
    </form>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{args:defaultArgs,argTypes:{size:{options:["default","small"],control:{type:"inline-radio"}}},name:"Playground",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-switch
        disabled=${args.disabled}
        show-state=${args.showState}
        label=${args.label}
        checked=${args.checked}
        hide-label=${args.hideLabel}
        helper-text=${args.helperText}
        size=${args.size}
      ></ic-switch>`})})]})}const defaultStory=()=>lit_html.dy` <ic-switch label="Label"></ic-switch> `;defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'html` <ic-switch label="Label"></ic-switch> `'},loki:{skip:!0}};const ic_switch_stories_name=()=>lit_html.dy` <ic-switch label="Label"></ic-switch> `;ic_switch_stories_name.storyName="Name",ic_switch_stories_name.parameters={storySource:{source:'html` <ic-switch label="Label"></ic-switch> `'},loki:{skip:!0}};const state=()=>lit_html.dy`<div style="display:flex; justify-content: center">
      <ic-switch show-state="true" label="Label"></ic-switch>
    </div>`;state.storyName="State",state.parameters={storySource:{source:'html`<div style="display:flex; justify-content: center">\n      <ic-switch show-state="true" label="Label"></ic-switch>\n    </div>`'},loki:{skip:!0}};const checked=()=>lit_html.dy`
      <ic-switch checked="true" label="Label" show-state="true"></ic-switch>
    `;checked.storyName="Checked",checked.parameters={storySource:{source:'html`\n      <ic-switch checked="true" label="Label" show-state="true"></ic-switch>\n    `'},loki:{skip:!0}};const small=()=>lit_html.dy`
      <ic-switch size="small" show-state="true" label="Label"></ic-switch>
    `;small.storyName="Small",small.parameters={storySource:{source:'html`\n      <ic-switch size="small" show-state="true" label="Label"></ic-switch>\n    `'},loki:{skip:!0}};const disabled=()=>lit_html.dy` <ic-switch disabled="true" label="Label"></ic-switch> `;disabled.storyName="Disabled",disabled.parameters={storySource:{source:'html` <ic-switch disabled="true" label="Label"></ic-switch> `'},loki:{skip:!0}};const disabledNameAndState=()=>lit_html.dy`
      <ic-switch disabled="true" show-state="true" label="Label"></ic-switch>
    `;disabledNameAndState.storyName="Disabled, name and state",disabledNameAndState.parameters={storySource:{source:'html`\n      <ic-switch disabled="true" show-state="true" label="Label"></ic-switch>\n    `'},loki:{skip:!0}};const disabledNameStateAndChecked=()=>lit_html.dy`
      <ic-switch
        disabled="true"
        show-state="true"
        label="Label"
        checked="true"
      ></ic-switch>
    `;disabledNameStateAndChecked.storyName="Disabled, name, state and checked",disabledNameStateAndChecked.parameters={storySource:{source:'html`\n      <ic-switch\n        disabled="true"\n        show-state="true"\n        label="Label"\n        checked="true"\n      ></ic-switch>\n    `'},loki:{skip:!0}};const ariaLabel=()=>lit_html.dy` <ic-switch label="Custom label" hide-label="true"></ic-switch> `;ariaLabel.storyName="ARIA label",ariaLabel.parameters={storySource:{source:'html` <ic-switch label="Custom label" hide-label="true"></ic-switch> `'},loki:{skip:!0}};const helperText=()=>lit_html.dy` <ic-switch label="Label" helper-text="Helper Text"></ic-switch>`;helperText.storyName="Helper text",helperText.parameters={storySource:{source:'html` <ic-switch label="Label" helper-text="Helper Text"></ic-switch>`'},loki:{skip:!0}};const rightAdornment=()=>lit_html.dy` <ic-switch label="Right adornment">
      <svg
        slot="right-adornment"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z"
        />
      </svg>
    </ic-switch>`;rightAdornment.storyName="Right adornment",rightAdornment.parameters={storySource:{source:'html` <ic-switch label="Right adornment">\n      <svg\n        slot="right-adornment"\n        width="16"\n        height="16"\n        viewBox="0 0 16 16"\n        fill="none"\n        xmlns="http://www.w3.org/2000/svg"\n      >\n        <path\n          d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z"\n        />\n      </svg>\n    </ic-switch>`'},loki:{skip:!0}};const defaultInForm=()=>lit_html.dy` <form id="form" aria-label="test form">
      <ic-switch id="switch" label="custom label" hide-label="true"></ic-switch>
      <br />
      <br />
      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" />
      <form>
        <script>
          const tcForm = document.getElementById("form");
          tcForm.addEventListener("submit", handleSubmit);
          function handleSubmit(e) {
            e.preventDefault();
            var data = "HTML Form Data (name: value): \\n";
            for (const element of document.getElementById("form").elements) {
              data += element.name + ": " + element.value + "\\n";
            }
            alert(data);
          }
        </script>
      </form>
    </form>`;defaultInForm.storyName="Default in form",defaultInForm.parameters={storySource:{source:'html` <form id="form" aria-label="test form">\n      <ic-switch id="switch" label="custom label" hide-label="true"></ic-switch>\n      <br />\n      <br />\n      <input type="submit" value="Submit" />\n      <input type="reset" value="Reset" />\n      <form>\n        <script>\n          const tcForm = document.getElementById("form");\n          tcForm.addEventListener("submit", handleSubmit);\n          function handleSubmit(e) {\n            e.preventDefault();\n            var data = "HTML Form Data (name: value): \\\\n";\n            for (const element of document.getElementById("form").elements) {\n              data += element.name + ": " + element.value + "\\\\n";\n            }\n            alert(data);\n          }\n        <\/script>\n      </form>\n    </form>`'},loki:{skip:!0}};const playground=args=>lit_html.dy`<ic-switch
        disabled=${args.disabled}
        show-state=${args.showState}
        label=${args.label}
        checked=${args.checked}
        hide-label=${args.hideLabel}
        helper-text=${args.helperText}
        size=${args.size}
      ></ic-switch>`;playground.storyName="Playground",playground.argTypes={size:{options:["default","small"],control:{type:"inline-radio"}}},playground.args=defaultArgs,playground.parameters={storySource:{source:"args => html`<ic-switch\n        disabled=${args.disabled}\n        show-state=${args.showState}\n        label=${args.label}\n        checked=${args.checked}\n        hide-label=${args.hideLabel}\n        helper-text=${args.helperText}\n        size=${args.size}\n      ></ic-switch>`"},loki:{skip:!0}};const componentMeta={title:"Web Components/Switch",tags:["stories-mdx"],includeStories:["defaultStory","name","state","checked","small","disabled","disabledNameAndState","disabledNameStateAndChecked","ariaLabel","helperText","rightAdornment","defaultInForm","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_switch_stories=componentMeta,__namedExportsOrder=["defaultArgs","defaultStory","name","state","checked","small","disabled","disabledNameAndState","disabledNameStateAndChecked","ariaLabel","helperText","rightAdornment","defaultInForm","playground"]},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _t$litHtmlVersions;__webpack_require__.d(__webpack_exports__,{dy:()=>x});var t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h="lit$".concat((Math.random()+"").slice(9),"$"),o="?"+h,n="<".concat(o,">"),r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(">|".concat(d,"(?:([^\\s\"'>=/]+)(").concat(d,"*=").concat(d,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>function(i){for(var _len=arguments.length,s=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)s[_key-1]=arguments[_key];return{_$litType$:t,strings:i,values:s}},x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}var P=(t,i)=>{for(var r,s=t.length-1,o=[],l=2===i?"<svg>":"",c=f,_i=0;_i<s;_i++){for(var _s=t[_i],_a=void 0,_u=void 0,_d=-1,_y=0;_y<_s.length&&(c.lastIndex=_y,null!==(_u=c.exec(_s)));){var _r;_y=c.lastIndex,c===f?"!--"===_u[1]?c=v:void 0!==_u[1]?c=_:void 0!==_u[2]?($.test(_u[2])&&(r=RegExp("</"+_u[2],"g")),c=m):void 0!==_u[3]&&(c=m):c===m?">"===_u[0]?(c=null!==(_r=r)&&void 0!==_r?_r:f,_d=-1):void 0===_u[1]?_d=-2:(_d=c.lastIndex-_u[2].length,_a=_u[1],c=void 0===_u[3]?m:'"'===_u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0)}var _x=c===m&&t[_i+1].startsWith("/>")?" ":"";l+=c===f?_s+n:_d>=0?(o.push(_a),_s.slice(0,_d)+e+_s.slice(_d)+h+_x):_s+h+(-2===_d?_i:_x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor(_ref,n){var r,{strings:t,_$litType$:s}=_ref;this.parts=[];var c=0,a=0,u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){var _t=this.el.content.firstChild;_t.replaceWith(..._t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(var _t2 of r.getAttributeNames())if(_t2.endsWith(e)){var _i2=v[a++],_s2=r.getAttribute(_t2).split(h),_e=/([.?@])?(.*)/.exec(_i2);d.push({type:1,index:c,name:_e[2],strings:_s2,ctor:"."===_e[1]?k:"?"===_e[1]?H:"@"===_e[1]?I:R}),r.removeAttribute(_t2)}else _t2.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(_t2));if($.test(r.tagName)){var _t3=r.textContent.split(h),_s3=_t3.length-1;if(_s3>0){r.textContent=i?i.emptyScript:"";for(var _i3=0;_i3<_s3;_i3++)r.append(_t3[_i3],l()),E.nextNode(),d.push({type:2,index:++c});r.append(_t3[_s3],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else for(var _t4=-1;-1!==(_t4=r.data.indexOf(h,_t4+1));)d.push({type:7,index:c}),_t4+=h.length-1;c++}}static createElement(t,i){var s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i){var _s$_$Co,_h,_h2,_h2$_$AO,_s$_$Co2,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,e=arguments.length>3?arguments[3]:void 0;if(i===w)return i;var h=void 0!==e?null===(_s$_$Co=s._$Co)||void 0===_s$_$Co?void 0:_s$_$Co[e]:s._$Cl,o=c(i)?void 0:i._$litDirective$;return(null===(_h=h)||void 0===_h?void 0:_h.constructor)!==o&&(null!==(_h2=h)&&void 0!==_h2&&null!==(_h2$_$AO=_h2._$AO)&&void 0!==_h2$_$AO&&_h2$_$AO.call(_h2,!1),void 0===o?h=void 0:(h=new o(t))._$AT(t,s,e),void 0!==e?(null!==(_s$_$Co2=s._$Co)&&void 0!==_s$_$Co2?_s$_$Co2:s._$Co=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var _t$creationScope,{el:{content:i},parts:s}=this._$AD,e=(null!==(_t$creationScope=null==t?void 0:t.creationScope)&&void 0!==_t$creationScope?_t$creationScope:r).importNode(i,!0);E.currentNode=e;for(var h=E.nextNode(),o=0,n=0,l=s[0];void 0!==l;){var _l;if(o===l.index){var _i4=void 0;2===l.type?_i4=new M(h,h.nextSibling,this,t):1===l.type?_i4=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(_i4=new L(h,this,t)),this._$AV.push(_i4),l=s[++n]}o!==(null===(_l=l)||void 0===_l?void 0:_l.index)&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){var i=0;for(var _s4 of this._$AV)void 0!==_s4&&(void 0!==_s4.strings?(_s4._$AI(t,_s4,i),i+=_s4.strings.length-2):_s4._$AI(t[i])),i++}}class M{get _$AU(){var _this$_$AM$_$AU,_this$_$AM;return null!==(_this$_$AM$_$AU=null===(_this$_$AM=this._$AM)||void 0===_this$_$AM?void 0:_this$_$AM._$AU)&&void 0!==_this$_$AM$_$AU?_this$_$AM$_$AU:this._$Cv}constructor(t,i,s,e){var _e$isConnected;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=null===(_e$isConnected=null==e?void 0:e.isConnected)||void 0===_e$isConnected||_e$isConnected}get parentNode(){var _t5,t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(_t5=t)||void 0===_t5?void 0:_t5.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t){t=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){var _this$_$AH,{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if((null===(_this$_$AH=this._$AH)||void 0===_this$_$AH?void 0:_this$_$AH._$AD)===e)this._$AH.p(i);else{var _t6=new S(e,this),_s5=_t6.u(this.options);_t6.p(i),this.$(_s5),this._$AH=_t6}}_$AC(t){var i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());var s,i=this._$AH,e=0;for(var _h3 of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(_h3),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,i=arguments.length>1?arguments[1]:void 0;for(null===(_this$_$AP=this._$AP)||void 0===_this$_$AP||_this$_$AP.call(this,!1,!0,i);t&&t!==this._$AB;){var _this$_$AP,_i5=t.nextSibling;t.remove(),t=_i5}}setConnected(t){var _this$_$AP2;void 0===this._$AM&&(this._$Cv=t,null===(_this$_$AP2=this._$AP)||void 0===_this$_$AP2||_this$_$AP2.call(this,t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,s=arguments.length>2?arguments[2]:void 0,e=arguments.length>3?arguments[3]:void 0,h=this.strings,o=!1;if(void 0===h)t=N(this,t,i,0),(o=!c(t)||t!==this._$AH&&t!==w)&&(this._$AH=t);else{var _n,_r2,_e2=t;for(t=h[0],_n=0;_n<h.length-1;_n++){var _r3;(_r2=N(this,_e2[s+_n],i,_n))===w&&(_r2=this._$AH[_n]),o||(o=!c(_r2)||_r2!==this._$AH[_n]),_r2===T?t=T:t!==T&&(t+=(null!==(_r3=_r2)&&void 0!==_r3?_r3:"")+h[_n+1]),this._$AH[_n]=_r2}}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t){var _N;if((t=null!==(_N=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==_N?_N:T)!==w){var s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}}handleEvent(t){var _this$options$host,_this$options;"function"==typeof this._$AH?this._$AH.call(null!==(_this$options$host=null===(_this$options=this.options)||void 0===_this$options?void 0:_this$options.host)&&void 0!==_this$options$host?_this$options$host:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}var Z=t.litHtmlPolyfillSupport;null!=Z&&Z(V,M),(null!==(_t$litHtmlVersions=t.litHtmlVersions)&&void 0!==_t$litHtmlVersions?_t$litHtmlVersions:t.litHtmlVersions=[]).push("3.1.1")},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-switch-ic-switch-stories-mdx.65229aa7.iframe.bundle.js.map