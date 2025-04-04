"use strict";(self.webpackChunkstorybook_react19=self.webpackChunkstorybook_react19||[]).push([[365],{"./src/overlay/Drawer/Drawer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Drawer_stories});var react=__webpack_require__("../../node_modules/react/index.js"),overlay=__webpack_require__("../../packages/react/dist/overlay/index.js"),dist_button=__webpack_require__("../../packages/react/dist/button/index.js"),grid=__webpack_require__("../../packages/react/dist/grid/index.js"),formFields=__webpack_require__("../../packages/react/dist/formFields/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./src/utils/index.ts");const DrawerSlide2=()=>{const{setActiveSlide}=(0,overlay.dc)();return react.createElement(overlay.V,{id:"slide-2",title:"Slide 2"},react.createElement("div",null,react.createElement("div",null,"Step 2 Content"),react.createElement(dist_button.$n,{id:"demo-goToStep-method",onClick:()=>setActiveSlide(0)},"programmatically navigate to slide 1")))};DrawerSlide2.__docgenInfo={description:"",methods:[],displayName:"DrawerSlide2"};const Drawer_stories={title:"Overlay/Drawer/Drawer",component:overlay._s,parameters:{controls:{expanded:!0}},argTypes:{id:{description:"Mandatory - unique id for testing",table:{defaultValue:{summary:""}},control:"text"},visible:{description:"Controls the visibility of the drawer",table:{defaultValue:{summary:"false"}},control:!1},title:{description:"Mandatory - title to be displayed on the drawer",table:{defaultValue:{summary:""}},control:"text"},idToFocusOnClose:{description:"Accessibility - id of element to focus on close of Modal",table:{defaultValue:{summary:""}},control:!1},onClose:{description:"Task to perform on close of the drawer.",table:{category:"Custom Events"},control:!1},onSubmit:{description:"Task to perform on submit of the drawer. If the current DrawerSlide has validate property then its outcome (true/false) will decide if onSubmit will be executed or not.",table:{category:"Custom Events"},control:!1}}},description=react.createElement("div",null,"The Drawer component is used to display sliding drawers, typically from the right side of the screen. It is ideal for scenarios where you need to present additional content or actions without interrupting the main flow. It can support both single-step and multi-step content (automatically decided based on the number of DrawerSlide children).",react.createElement("br",null),react.createElement("br",null),react.createElement("b",null,"Note: "),"within any DrawerSlide component, useDrawerController hook can be used to programmatically navigate to specific slide:",react.createElement("br",null),react.createElement("pre",null,"const {setActiveSlide} = useDrawerController();")),ErrorContainer=styled_components_browser_esm.Ay.div`
  font-size: 0.8rem;
  color: red;
`,CodeAndAccessibility=(args=>{const[isSingleStepDrawrrVisible,setIsSingleStepDrawrrVisible]=(0,react.useState)(!1),[isMultiStepDrawrrVisible,setIsMultiStepDrawrrVisible]=(0,react.useState)(!1),[taskName,setTaskName]=(0,react.useState)(""),[taskDescription,setTaskDescription]=(0,react.useState)(""),[error,setError]=(0,react.useState)(""),[taskName2,setTaskName2]=(0,react.useState)(""),[taskDescription2,setTaskDescription2]=(0,react.useState)(""),[error2,setError2]=(0,react.useState)(""),drawerCloseHandler=(drawerId,drawerOpenerId)=>{const drawerActivateButton=document.getElementById(drawerOpenerId);drawerActivateButton&&drawerActivateButton.focus(),drawerId===`${args.id}-single`?(setIsSingleStepDrawrrVisible(!1),setTaskName(""),setTaskDescription(""),setError("")):(setIsMultiStepDrawrrVisible(!1),setTaskName2(""),setTaskDescription2(""),setError2(""))};return react.createElement(grid.E,{showSideMargin:!1},react.createElement(utils.Tx,{importStatement:"import { Drawer, DrawerSlide, useDrawerController } from '@tiger-analytics/react/overlay';"}),react.createElement(grid.H,{style:{gap:"10px"}},react.createElement(dist_button.$n,{id:"activate-drawer-single",onClick:()=>setIsSingleStepDrawrrVisible(!0),variant:dist_button.Ak.Secondary},"Show single step drawer"),react.createElement(dist_button.$n,{id:"activate-drawer-multi",onClick:()=>setIsMultiStepDrawrrVisible(!0),variant:dist_button.Ak.Secondary},"Show Multi step drawer"),react.createElement(overlay._s,{id:`${args.id}-single`,title:"Drawer Single-Step",visible:isSingleStepDrawrrVisible,onClose:()=>drawerCloseHandler(`${args.id}-single`,"activate-drawer-single"),onSubmit:()=>drawerCloseHandler(`${args.id}-single`,"activate-drawer-single")},react.createElement(overlay.V,{id:"slide-1",title:"Slide 1",validate:()=>!(!taskName||!taskDescription)||(setError("Both name and description are required."),!1)},react.createElement(formFields.ks,{id:"create-task-name",label:"Name",value:taskName,onChangeHandler:value=>{setTaskName(value),setError("")}}),react.createElement(formFields.fs,{id:"create-task-description",label:"Description",value:taskDescription,onChangeHandler:value=>{setTaskDescription(value),setError("")},required:!0}),react.createElement(ErrorContainer,null,error))),react.createElement(overlay._s,{id:`${args.id}-multi`,title:"Drawer Multi-Step",visible:isMultiStepDrawrrVisible,onClose:()=>drawerCloseHandler(`${args.id}-multi`,"activate-drawer-multi"),onSubmit:()=>drawerCloseHandler(`${args.id}-multi`,"activate-drawer-multi")},react.createElement(overlay.V,{id:"slide-2",title:"Slide 1",validate:()=>!(!taskName2||!taskDescription2)||(setError2("Both name and description are required."),!1)},react.createElement(formFields.ks,{id:"create-task-name-2",label:"Name",value:taskName2,onChangeHandler:value=>{setTaskName2(value),setError2("")}}),react.createElement(formFields.fs,{id:"create-task-description-2",label:"Description",value:taskDescription2,onChangeHandler:value=>{setTaskDescription2(value),setError2("")},required:!0}),react.createElement(ErrorContainer,null,error2)),react.createElement(DrawerSlide2,null),react.createElement(overlay.V,{id:"slide-3",title:"Slide 3"},"Slide 3 content"))),react.createElement(grid.H,null,react.createElement("div",{className:"story-title"},"       ")),react.createElement(grid.H,null,react.createElement(utils.ur,{description})))}).bind({});CodeAndAccessibility.args={id:"test-drawer",visible:!1};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:"args => {\n  const [isSingleStepDrawrrVisible, setIsSingleStepDrawrrVisible] = useState(false);\n  const [isMultiStepDrawrrVisible, setIsMultiStepDrawrrVisible] = useState(false);\n  const [taskName, setTaskName] = useState('');\n  const [taskDescription, setTaskDescription] = useState('');\n  const [error, setError] = useState('');\n  const [taskName2, setTaskName2] = useState('');\n  const [taskDescription2, setTaskDescription2] = useState('');\n  const [error2, setError2] = useState('');\n  const drawerCloseHandler = (drawerId: string, drawerOpenerId: string) => {\n    const drawerActivateButton = document.getElementById(drawerOpenerId);\n    if (drawerActivateButton) {\n      drawerActivateButton.focus();\n    }\n    if (drawerId === `${args.id}-single`) {\n      setIsSingleStepDrawrrVisible(false);\n      setTaskName('');\n      setTaskDescription('');\n      setError('');\n    } else {\n      setIsMultiStepDrawrrVisible(false);\n      setTaskName2('');\n      setTaskDescription2('');\n      setError2('');\n    }\n  };\n  const taskNameChangeHandler = (value: string) => {\n    setTaskName(value);\n    setError('');\n  };\n  const taskDescriptionChangeHandler = (value: string) => {\n    setTaskDescription(value);\n    setError('');\n  };\n  const taskNameChangeHandler2 = (value: string) => {\n    setTaskName2(value);\n    setError2('');\n  };\n  const taskDescriptionChangeHandler2 = (value: string) => {\n    setTaskDescription2(value);\n    setError2('');\n  };\n  const slide1Validator = (): boolean => {\n    if (!taskName || !taskDescription) {\n      setError('Both name and description are required.');\n      return false;\n    } else {\n      return true;\n    }\n  };\n  const slide1Validator2 = (): boolean => {\n    if (!taskName2 || !taskDescription2) {\n      setError2('Both name and description are required.');\n      return false;\n    } else {\n      return true;\n    }\n  };\n  return <GridContainer showSideMargin={false}>\n      <ImportBlock importStatement={`import { Drawer, DrawerSlide, useDrawerController } from '@tiger-analytics/react/overlay';`} />\n      <GridColumn style={{\n      gap: '10px'\n    }}>\n        <Button id=\"activate-drawer-single\" onClick={() => setIsSingleStepDrawrrVisible(true)} variant={ButtonVariant.Secondary}>\n          Show single step drawer\n        </Button>\n        <Button id=\"activate-drawer-multi\" onClick={() => setIsMultiStepDrawrrVisible(true)} variant={ButtonVariant.Secondary}>\n          Show Multi step drawer\n        </Button>\n        <Drawer id={`${args.id}-single`} title=\"Drawer Single-Step\" visible={isSingleStepDrawrrVisible} onClose={() => drawerCloseHandler(`${args.id}-single`, 'activate-drawer-single')} onSubmit={() => drawerCloseHandler(`${args.id}-single`, 'activate-drawer-single')}>\n          <DrawerSlide id=\"slide-1\" title=\"Slide 1\" validate={slide1Validator}>\n            <TextInput id=\"create-task-name\" label=\"Name\" value={taskName} onChangeHandler={taskNameChangeHandler} />\n            <TextArea id=\"create-task-description\" label=\"Description\" value={taskDescription} onChangeHandler={taskDescriptionChangeHandler} required />\n            <ErrorContainer>{error}</ErrorContainer>\n          </DrawerSlide>\n        </Drawer>\n        <Drawer id={`${args.id}-multi`} title=\"Drawer Multi-Step\" visible={isMultiStepDrawrrVisible} onClose={() => drawerCloseHandler(`${args.id}-multi`, 'activate-drawer-multi')} onSubmit={() => drawerCloseHandler(`${args.id}-multi`, 'activate-drawer-multi')}>\n          <DrawerSlide id=\"slide-2\" title=\"Slide 1\" validate={slide1Validator2}>\n            <TextInput id=\"create-task-name-2\" label=\"Name\" value={taskName2} onChangeHandler={taskNameChangeHandler2} />\n            <TextArea id=\"create-task-description-2\" label=\"Description\" value={taskDescription2} onChangeHandler={taskDescriptionChangeHandler2} required />\n            <ErrorContainer>{error2}</ErrorContainer>\n          </DrawerSlide>\n          <DrawerSlide2 />\n          <DrawerSlide id=\"slide-3\" title=\"Slide 3\">\n            Slide 3 content\n          </DrawerSlide>\n        </Drawer>\n      </GridColumn>\n\n      <GridColumn>\n        <div className=\"story-title\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>\n      </GridColumn>\n\n      <GridColumn>\n        <DescriptionBlock description={description} />\n      </GridColumn>\n    </GridContainer>;\n}",...CodeAndAccessibility.parameters?.docs?.source}}}},"../../packages/react/dist/formFields/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Sc:()=>Checkbox,S9:()=>FieldSize,fs:()=>TextArea,ks:()=>TextInput,lM:()=>Toggle});var styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const FieldWrapper=styled_components_browser_esm.Ay.div`
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
  width: ${({size:e})=>e===FieldSize.Default?"40px":"30px"};
  height: ${({size:e})=>e===FieldSize.Default?"40px":"30px"};
  border-radius: var(--global-componentRadius);
  border: 1px solid var(--colors-primary-base);
  background-color: var(--colors-background-base);
  transition: all 0.25s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({checked:e,size:o})=>e&&styled_components_browser_esm.AH`
      background-color: var(--colors-primary-base);
      border-color: var(--colors-primary-base);

      svg {
        fill: var(--colors-background-base);
        width: ${o===FieldSize.Default?"30px":"24px"};
        height: ${o===FieldSize.Default?"30px":"24px"};
      }
    `}

  &:focus-within {
    outline: none;
    border: 2px solid var(--colors-primary-active);
  }
`;var icons=__webpack_require__("../../packages/react/dist/icons/index.js");const Checkbox=e=>{const{id:i,size:r=FieldSize.Default,label:c,description:o,disabled:d=!1,checked:t=!1,onChange:s,onChangeHandler:n,...l}=e,h=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)(FieldWrapper,{disabled:d,children:[(0,jsx_runtime.jsxs)(StyledCheckboxContainer,{children:[(0,jsx_runtime.jsxs)(StyledCheckbox,{id:i,size:r,checked:t,onClick:()=>{h&&h.current&&!d&&h.current.click()},children:[(0,jsx_runtime.jsx)(StyledCheckboxInput,{id:`${i}-checkbox`,ref:h,type:"checkbox",disabled:d,checked:t,"aria-describedby":o?`${i}-description`:"",onChange:e=>{s?s(e):n?.(e.target.checked)},...l}),t?(0,jsx_runtime.jsx)(icons.DoneIcon,{}):null]}),c&&(0,jsx_runtime.jsx)("label",{htmlFor:`${i}-checkbox`,children:c})]}),o&&(0,jsx_runtime.jsx)(FieldDescription,{id:`${i}-description`,children:o})]})},StyledToggleContainer=styled_components_browser_esm.Ay.div`
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
`,Toggle=e=>{const{id:i,size:r=FieldSize.Default,label:l,description:d,disabled:t=!1,checked:o=!1,onChange:s,onChangeHandler:c,...n}=e,a=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)(FieldWrapper,{disabled:t,children:[(0,jsx_runtime.jsxs)(StyledToggleContainer,{children:[(0,jsx_runtime.jsx)(StyledToggle,{id:i,size:r,checked:o,onClick:()=>{a&&a.current&&!t&&a.current.click()},children:(0,jsx_runtime.jsx)(StyledToggleInput,{id:`${i}-checkbox`,ref:a,type:"checkbox",disabled:t,checked:o,"aria-describedby":d?`${i}-description`:"",onChange:e=>{s?s(e):c?.(e.target.checked)},...n})}),l&&(0,jsx_runtime.jsx)("label",{htmlFor:`${i}-checkbox`,children:l})]}),d&&(0,jsx_runtime.jsx)(FieldDescription,{id:`${i}-description`,children:d})]})}}}]);
//# sourceMappingURL=overlay-Drawer-Drawer-stories.ec79651d.iframe.bundle.js.map