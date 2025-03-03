"use strict";(self.webpackChunkstorybook_react19=self.webpackChunkstorybook_react19||[]).push([[714],{"./src/formFields/textInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_tiger_analytics_react_formFields__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/react/dist/formFields/index.js"),_tiger_analytics_react_grid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/react/dist/grid/index.js"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Form/TextInput",component:_tiger_analytics_react_formFields__WEBPACK_IMPORTED_MODULE_1__.ks,parameters:{controls:{expanded:!0}},argTypes:{id:{description:"Mandatory - unique id for testing",table:{defaultValue:{summary:""}},control:"text"},label:{description:"Label for the input",table:{defaultValue:{summary:""}},control:"text"},description:{description:"Additional description for the field",table:{defaultValue:{summary:""}},control:"text"},type:{options:["text","password","email","number"],description:"type of the input",table:{defaultValue:{summary:"text"}},control:{type:"select"}},size:{options:[_tiger_analytics_react_formFields__WEBPACK_IMPORTED_MODULE_1__.S9.Default,_tiger_analytics_react_formFields__WEBPACK_IMPORTED_MODULE_1__.S9.Small],description:"size of the input",table:{defaultValue:{summary:_tiger_analytics_react_formFields__WEBPACK_IMPORTED_MODULE_1__.S9.Default}},control:{type:"select"}},onChangeHandler:{description:"`(value: string) => void` Preferred method to use instead of onChange as it reduces the need to extract string from the event.",table:{category:"Events"},control:!1}}},description=react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"Note:")," TextInput is a customizable input field component and"," ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"it inherits all the properties of a standard HTML input element"),". You can use attributes like disabled, placeholder, style, etc.,"," ","just as you would with a regular <input> tag in addition to below\n    props."," ","It also has ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"onChangeHandler")," method of type ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"(value: string) => void")," which reduces the need to extract string from the event."," ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"For convenience, use the onChangeHandler")," to directly access the string value.",react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("i",null,"If both onChange and onChangeHandler are provided, onChange takes precedence."),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"Note :"),"To group multiple input fields, fieldset should be used.",react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset",target:"_blank",rel:"noreferrer"},"Read more about fieldset"))),CodeAndAccessibility=(args=>{const[inputValue,setInputValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_grid__WEBPACK_IMPORTED_MODULE_2__.E,{showSideMargin:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_3__.Tx,{importStatement:"import { TextInput } from '@tiger-analytics/react/formFields';"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_grid__WEBPACK_IMPORTED_MODULE_2__.H,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_formFields__WEBPACK_IMPORTED_MODULE_1__.ks,{...args,value:inputValue,onChangeHandler:setInputValue}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Entered text: ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{id:"entered-text"},inputValue))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_3__.ur,{description}))}).bind({});CodeAndAccessibility.args={id:"test-input",label:"Label",size:_tiger_analytics_react_formFields__WEBPACK_IMPORTED_MODULE_1__.S9.Default,description:"Some description",type:"text",disabled:!1,placeholder:"Enter text"};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:"(args: InputProps) => {\n  const [inputValue, setInputValue] = useState('');\n  return <GridContainer showSideMargin={false}>\n      <ImportBlock importStatement={`import { TextInput } from '@tiger-analytics/react/formFields';`} />\n      <GridColumn>\n        <TextInput {...args} value={inputValue} onChangeHandler={setInputValue} />\n        <p>\n          Entered text: <span id=\"entered-text\">{inputValue}</span>\n        </p>\n      </GridColumn>\n      <DescriptionBlock description={description} />\n    </GridContainer>;\n}",...CodeAndAccessibility.parameters?.docs?.source}}}},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bO:()=>CommentBlock,ur:()=>DescriptionBlock,Tx:()=>ImportBlock});var grid=__webpack_require__("../../packages/react/dist/grid/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const ImportBlockDiv=styled_components_browser_esm.Ay.div`
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
  display: flex;
  flex-wrap: wrap;
`,CommentBlock=({children})=>react.createElement(CommentContainer,null,children);CommentBlock.__docgenInfo={description:"",methods:[],displayName:"CommentBlock",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}}},"../../packages/react/dist/formFields/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Sc:()=>Checkbox,S9:()=>FieldSize,fs:()=>TextArea,ks:()=>TextInput,lM:()=>Toggle});var styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const FieldWrapper=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;

  ${({disabled:e=!1})=>e&&styled_components_browser_esm.AH`
      opacity: 0.6;
    `}
`;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const StyledTextArea=styled_components_browser_esm.Ay.textarea`
  width: 100%;
  font-size: 20px;
  padding-left: 4px;
  padding-right: 4px;
  border-radius: var(--global-componentRadius);
  border: 1px solid var(--colors-primary-base);
`,FieldDescription=styled_components_browser_esm.Ay.div`
  font-size: 14px;
`,TextArea=e=>{const{id:r,label:i,description:s,disabled:d=!1,rows:t=4,onChangeHandler:a,onChange:l,...o}=e;return(0,jsx_runtime.jsxs)(FieldWrapper,{disabled:d,children:[i&&(0,jsx_runtime.jsx)("label",{htmlFor:`${r}-input`,children:i}),(0,jsx_runtime.jsx)(StyledTextArea,{id:`${r}-input`,disabled:d,rows:t,"aria-describedby":s?`${r}-description`:"",onChange:e=>{l?l(e):a?.(e.target.value)},...o}),s&&(0,jsx_runtime.jsx)(FieldDescription,{id:`${r}-description`,children:s})]})};var FieldSize,e;(e=FieldSize||(FieldSize={})).Small="small",e.Default="default";const StyledInput=styled_components_browser_esm.Ay.input`
  width: 100%;
  font-size: 20px;
  padding-left: 4px;
  padding-right: 4px;
  height: ${({size:e})=>e===FieldSize.Default?"40px":"30px"};
  border-radius: var(--global-componentRadius);
  border: 1px solid var(--colors-primary-base);
`,TextInput=e=>{const{id:i,size:t=FieldSize.Default,type:r="text",label:s,description:d,disabled:l=!1,onChangeHandler:p,onChange:n,...o}=e;return(0,jsx_runtime.jsxs)(FieldWrapper,{disabled:l,children:[s&&(0,jsx_runtime.jsx)("label",{htmlFor:`${i}-input`,children:s}),(0,jsx_runtime.jsx)(StyledInput,{id:`${i}-input`,disabled:l,size:t,type:r,"aria-describedby":d?`${i}-description`:"",onChange:e=>{n?n(e):p?.(e.target.value)},...o}),d&&(0,jsx_runtime.jsx)(FieldDescription,{id:`${i}-description`,children:d})]})};var react=__webpack_require__("../../node_modules/react/index.js");const StyledCheckboxContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,StyledCheckboxInput=styled_components_browser_esm.Ay.input`
  position: absolute;
  opacity: 0;
  width: 0px;
  height: 0px;
`,StyledCheckbox=styled_components_browser_esm.Ay.div`
  width: ${({size:o})=>o===FieldSize.Default?"40px":"30px"};
  height: ${({size:o})=>o===FieldSize.Default?"40px":"30px"};
  border-radius: var(--global-componentRadius);
  border: 1px solid var(--colors-primary-base);
  background-color: white;
  transition: all 0.25s;
  cursor: pointer;

  ${({checked:o})=>o&&styled_components_browser_esm.AH`
      background-color: var(--colors-primary-base);
      border-color: var(--colors-primary-base);
    `}

  &:focus-within {
    outline: none;
    border: 2px solid var(--colors-primary-active);
  }
`,Checkbox=e=>{const{id:i,size:r=FieldSize.Default,label:c,description:d,disabled:t=!1,checked:o=!1,onChange:s,onChangeHandler:l,...n}=e,h=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)(FieldWrapper,{disabled:t,children:[(0,jsx_runtime.jsxs)(StyledCheckboxContainer,{children:[(0,jsx_runtime.jsx)(StyledCheckbox,{id:i,size:r,checked:o,onClick:()=>{h&&h.current&&!t&&h.current.click()},children:(0,jsx_runtime.jsx)(StyledCheckboxInput,{id:`${i}-checkbox`,ref:h,type:"checkbox",disabled:t,checked:o,"aria-describedby":d?`${i}-description`:"",onChange:e=>{s?s(e):l?.(e.target.checked)},...n})}),c&&(0,jsx_runtime.jsx)("label",{htmlFor:`${i}-checkbox`,children:c})]}),d&&(0,jsx_runtime.jsx)(FieldDescription,{id:`${i}-description`,children:d})]})},StyledToggleContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,StyledToggleInput=styled_components_browser_esm.Ay.input`
  position: absolute;
  opacity: 0;
  width: 0px;
  height: 0px;
`,StyledToggle=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  width: ${({size:e})=>e===FieldSize.Default?"50px":"40px"};
  height: ${({size:e})=>e===FieldSize.Default?"24px":"20px"};
  border-radius: 25px;
  border: 2px solid var(--colors-primary-base);
  background-color: white;
  transition: all 0.25s;
  cursor: pointer;

  &:hover {
    border: 2px solid var(--colors-primary-hover);
  }

  &::before {
    content: '';
    display: inline-block;
    width: ${({size:e})=>e===FieldSize.Default?"18px":"14px"};
    height: ${({size:e})=>e===FieldSize.Default?"18px":"14px"};
    background-color: ${({theme:e,checked:o})=>o?e.colors.success.base:e.colors.primary.hover};
    margin-left: 2px;
    border-radius: 50%;
    transition: all 0.25s;
  }

  ${({checked:e,size:o})=>e&&styled_components_browser_esm.AH`
      border-color: var(--colors-primary-base);

      &::before {
        transform: ${o===FieldSize.Default?"translateX(24px)":"translateX(18px)"};
      }
    `}

  &:focus-within {
    outline: none;
    border: 2px solid var(--colors-primary-hover);
  }
`,Toggle=e=>{const{id:i,size:r=FieldSize.Default,label:l,description:d,disabled:t=!1,checked:o=!1,onChange:s,onChangeHandler:c,...n}=e,a=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)(FieldWrapper,{disabled:t,children:[(0,jsx_runtime.jsxs)(StyledToggleContainer,{children:[(0,jsx_runtime.jsx)(StyledToggle,{id:i,size:r,checked:o,onClick:()=>{a&&a.current&&!t&&a.current.click()},children:(0,jsx_runtime.jsx)(StyledToggleInput,{id:`${i}-checkbox`,ref:a,type:"checkbox",disabled:t,checked:o,"aria-describedby":d?`${i}-description`:"",onChange:e=>{s?s(e):c?.(e.target.checked)},...n})}),l&&(0,jsx_runtime.jsx)("label",{htmlFor:`${i}-checkbox`,children:l})]}),d&&(0,jsx_runtime.jsx)(FieldDescription,{id:`${i}-description`,children:d})]})}},"../../packages/react/dist/grid/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>GridColumn,E:()=>GridContainer});var styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const GridColumn=styled_components_browser_esm.Ay.div`
  grid-column: ${e=>`span ${e.sm||e.theme.grid.small.columns}`};
  display: ${e=>0===e.sm?"none":"flex"};
  flex-direction: column;
  align-items: 'flex-start';

  ${({theme:e,md:n,lg:m})=>styled_components_browser_esm.AH`
    @media screen and (min-width: ${`${e.breakpoints.medium}`}) {
      grid-column: ${e=>`span ${n||m||e.theme.grid.medium.columns}`};
      display: ${0===n?"none":"flex"};
    }

    @media screen and (min-width: ${`${e.breakpoints.large}`}) {
      grid-column: ${e=>`span ${m||e.theme.grid.large.columns}`};
      display: ${0===m?"none":"flex"};
    }
  `}
`,GridContainer=styled_components_browser_esm.Ay.div`
  display: grid;
  width: 100%;
  grid-gap: ${({theme:i})=>i.grid.small.gutter};
  grid-template-columns: repeat(${({theme:i})=>i.grid.small.columns}, 1fr);
  grid-template-rows: initial;
  grid-auto-rows: initial;
  margin: 0;
  max-width: 100%;
  grid-column: span ${({theme:i})=>i.grid.small.columns};

  ${({showSideMargin:i})=>i&&styled_components_browser_esm.AH`
      max-width: calc(100% - ${({theme:i})=>i.grid.small.margin} * 2);
      margin-left: ${({theme:i})=>i.grid.small.margin} !important;
      margin-right: ${({theme:i})=>i.grid.small.margin} !important;
    `}

  ${({restrictHeightToMaxContent:i})=>i&&styled_components_browser_esm.AH`
      grid-template-rows: max-content;
      grid-auto-rows: max-content;
    `}

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(${({theme:i})=>i.grid.medium.columns}, 1fr);
    margin: 0;
    grid-gap: ${({theme:i})=>i.grid.medium.gutter};
    max-width: 100%;
    grid-column: span ${({theme:i})=>i.grid.medium.columns};

    ${({showSideMargin:i})=>i&&styled_components_browser_esm.AH`
        max-width: calc(100% - ${({theme:i})=>i.grid.medium.margin} * 2);
        margin-left: ${({theme:i})=>i.grid.medium.margin} !important;
        margin-right: ${({theme:i})=>i.grid.medium.margin} !important;
      `}
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(${({theme:i})=>i.grid.large.columns}, 1fr);
    margin: 0;
    grid-gap: ${({theme:i})=>i.grid.large.gutter};
    grid-column: span ${({theme:i})=>i.grid.large.columns};

    ${({showSideMargin:i})=>i&&styled_components_browser_esm.AH`
        max-width: calc(100% - ${({theme:i})=>i.grid.large.margin} * 2);
        margin-left: ${({theme:i})=>i.grid.large.margin} !important;
        margin-right: ${({theme:i})=>i.grid.large.margin} !important;
      `}
  }
`}}]);
//# sourceMappingURL=formFields-textInput-stories.54c4b86e.iframe.bundle.js.map