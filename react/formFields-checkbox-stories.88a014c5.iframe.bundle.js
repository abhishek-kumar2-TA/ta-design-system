"use strict";(self.webpackChunkstorybook_react19=self.webpackChunkstorybook_react19||[]).push([[68],{"./src/formFields/checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_tiger_analytics_ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/ui/dist/index.js"),_tiger_analytics_react_formFields__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/react/dist/formFields/index.js"),_tiger_analytics_react_grid__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/react/dist/grid/index.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Form/Checkbox",component:_tiger_analytics_react_formFields__WEBPACK_IMPORTED_MODULE_2__.Sc,parameters:{controls:{expanded:!0}},argTypes:{id:{description:"Mandatory - unique id for testing",table:{defaultValue:{summary:""}},control:"text"},label:{description:"Label for the checkbox",table:{defaultValue:{summary:""}},control:"text"},description:{description:"Additional description for the field",table:{defaultValue:{summary:""}},control:"text"},checked:{description:"Whether the checkbox is checked or not",table:{defaultValue:{summary:"false"}},control:"boolean"},disabled:{description:"Enable or disable the checkbox",table:{defaultValue:{summary:"false"}},control:"boolean"},required:{description:"Mark checkbox as required",table:{defaultValue:{summary:"false"}},control:"boolean"},size:{options:[_tiger_analytics_ui__WEBPACK_IMPORTED_MODULE_1__.S9.Default,_tiger_analytics_ui__WEBPACK_IMPORTED_MODULE_1__.S9.Small],description:"Size of the checkbox",table:{defaultValue:{summary:_tiger_analytics_ui__WEBPACK_IMPORTED_MODULE_1__.S9.Default}},control:{type:"select"}},onChange:{description:"Triggered when the checkbox value is changed",table:{category:"Events"},control:!1},focus:{description:"Focuses the checkbox",table:{category:"Methods"},control:!1}}},description=react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Custom checkbox input field"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"Note :"),"To group multiple input fields, fieldset should be used.",react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset",target:"_blank",rel:"noreferrer"},"Read more about fieldset"))),CodeAndAccessibility=(args=>{const[inputValue,setInputValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_grid__WEBPACK_IMPORTED_MODULE_3__.E,{showSideMargin:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_4__.Tx,{importStatement:"import { Checkbox } from '@tiger-analytics/react/formFields';"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_grid__WEBPACK_IMPORTED_MODULE_3__.H,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_formFields__WEBPACK_IMPORTED_MODULE_2__.Sc,{...args,checked:inputValue,onChange:e=>(event=>{const inputTarget=event.target;setInputValue(inputTarget.checked)})(e)}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Status: ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{id:"entered-text"},inputValue?"Checked":"Unchecked"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_4__.ur,{description}))}).bind({});CodeAndAccessibility.args={id:"test-checkbox",label:"Accept Terms",size:_tiger_analytics_ui__WEBPACK_IMPORTED_MODULE_1__.S9.Default,disabled:!1,description:"Please check this box to agree to the terms and conditions.",checked:!1,required:!1};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:"(args: CheckboxProps) => {\n  const [inputValue, setInputValue] = useState(false);\n  const checkboxChangeHandler = (event: FormEvent) => {\n    const inputTarget = event.target as HTMLInputElement;\n    setInputValue(inputTarget.checked);\n  };\n  return <GridContainer showSideMargin={false}>\n      <ImportBlock importStatement={`import { Checkbox } from '@tiger-analytics/react/formFields';`} />\n      <GridColumn>\n        <Checkbox {...args} checked={inputValue} onChange={(e: FormEvent) => checkboxChangeHandler(e)} />\n        <p>\n          Status: <span id=\"entered-text\">{inputValue ? 'Checked' : 'Unchecked'}</span>\n        </p>\n      </GridColumn>\n      <DescriptionBlock description={description} />\n    </GridContainer>;\n}",...CodeAndAccessibility.parameters?.docs?.source}}}},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bO:()=>CommentBlock,ur:()=>DescriptionBlock,Tx:()=>ImportBlock});var grid=__webpack_require__("../../packages/react/dist/grid/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const ImportBlockDiv=styled_components_browser_esm.Ay.div`
  padding-bottom: 10px;
  border-bottom: 1px solid var(--colors-primary-base);
  margin-bottom: 10px;
  width: 100%;
`,ImportBlock=({importStatement})=>react.createElement(grid.H,null,react.createElement(ImportBlockDiv,null,importStatement));ImportBlock.__docgenInfo={description:"",methods:[],displayName:"ImportBlock",props:{importStatement:{required:!0,tsType:{name:"ReactNode"},description:""}}};const DescriptionBeforeSpacer=(0,styled_components_browser_esm.Ay)(grid.H)`
  border-bottom: 1px solid var(--colors-primary-base);
  font-weight: bold;
`,DescriptionContent=(0,styled_components_browser_esm.Ay)(grid.H)`
  font-size: 14px;
`,DescriptionBlock=({description})=>react.createElement(grid.E,{showSideMargin:!1},react.createElement(grid.H,null,react.createElement(DescriptionBeforeSpacer,null,"       ")),react.createElement(DescriptionContent,null,description));DescriptionBlock.__docgenInfo={description:"",methods:[],displayName:"DescriptionBlock",props:{description:{required:!0,tsType:{name:"ReactNode"},description:""}}};const CommentContainer=styled_components_browser_esm.Ay.div`
  width: 100%;
  font-size: 12px;
  color: var(--colors-success-base);
`,CommentBlock=({children})=>react.createElement(CommentContainer,null,children);CommentBlock.__docgenInfo={description:"",methods:[],displayName:"CommentBlock",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}}},"../../packages/react/dist/formFields/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Sc:()=>Checkbox,pd:()=>Input,fs:()=>TextArea,lM:()=>Toggle});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const TextArea=e=>{const r={id:e.id};return e.label&&(r.label=e.label),e.description&&(r.description=e.description),e.type&&(r.type=e.type),e.value&&(r.value=e.value),e.disabled&&(r.disabled=e.disabled),e.placeholder&&(r.placeholder=e.placeholder),e.required&&(r.required=e.required),e.minlength&&(r.minlength=e.minlength),e.maxlength&&(r.maxlength=e.maxlength),e.rows&&(r.rows=e.rows),(0,jsx_runtime.jsx)("ta-text-area",{...r})},Input=e=>{const t={id:e.id};return e.label&&(t.label=e.label),e.description&&(t.description=e.description),e.type&&(t.type=e.type),e.value&&(t.value=e.value),e.size&&(t.size=e.size),e.disabled&&(t.disabled=e.disabled),e.placeholder&&(t.placeholder=e.placeholder),e.required&&(t.required=e.required),e.minlength&&(t.minlength=e.minlength),e.maxlength&&(t.maxlength=e.maxlength),e.pattern&&(t.pattern=e.pattern),e.onInput&&(t.onInput=e.onInput),(0,jsx_runtime.jsx)("ta-input",{...t})};var react=__webpack_require__("../../node_modules/react/index.js");const Checkbox=e=>{const c={id:e.id};return e.label&&(c.label=e.label),e.description&&(c.description=e.description),e.size&&(c.size=e.size),e.checked&&(c.checked=e.checked),e.disabled&&(c.disabled=e.disabled),e.required&&(c.required=e.required),(0,react.useEffect)((()=>{const c=c=>{if(e.onChange){const t=c;e.onChange(t)}},t=document.getElementById(e.id);return t&&t.addEventListener("change",c),()=>{t&&t.removeEventListener("change",c)}}),[e.id,e.onChange]),(0,jsx_runtime.jsx)("ta-checkbox",{...c})},Toggle=e=>{const t={id:e.id};return e.label&&(t.label=e.label),e.description&&(t.description=e.description),e.size&&(t.size=e.size),e.checked&&(t.checked=e.checked),e.disabled&&(t.disabled=e.disabled),e.required&&(t.required=e.required),(0,react.useEffect)((()=>{const t=t=>{if(e.onChange){const r=t;e.onChange(r)}},r=document.getElementById(e.id);return r&&r.addEventListener("change",t),()=>{r&&r.removeEventListener("change",t)}}),[e.id,e.onChange]),(0,jsx_runtime.jsx)("ta-toggle",{...t})}},"../../packages/react/dist/grid/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>GridColumn,E:()=>GridContainer});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const GridColumn=r=>{const s={};return r.sm&&(s.sm=r.sm),r.md&&(s.md=r.md),r.lg&&(s.lg=r.lg),r.style&&(s.style=r.style),(0,jsx_runtime.jsx)("ta-grid-column",{...s,children:r.children})},GridContainer=t=>{const r={};return t.showSideMargin&&(r.showSideMargin=t.showSideMargin),t.restrictHeightToMaxContent&&(r.restrictHeightToMaxContent=t.restrictHeightToMaxContent),t.style&&(r.style=t.style),(0,jsx_runtime.jsx)("ta-grid-container",{...r,children:t.children})}}}]);
//# sourceMappingURL=formFields-checkbox-stories.88a014c5.iframe.bundle.js.map