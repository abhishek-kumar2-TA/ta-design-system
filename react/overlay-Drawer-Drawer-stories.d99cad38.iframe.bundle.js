"use strict";(self.webpackChunkstorybook_react19=self.webpackChunkstorybook_react19||[]).push([[365],{"./src/overlay/Drawer/Drawer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Drawer_stories});var react=__webpack_require__("../../node_modules/react/index.js"),overlay=__webpack_require__("../../packages/react/dist/overlay/index.js"),dist_button=__webpack_require__("../../packages/react/dist/button/index.js"),grid=__webpack_require__("../../packages/react/dist/grid/index.js"),formFields=__webpack_require__("../../packages/react/dist/formFields/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./src/utils/index.ts");const DrawerSlide2=()=>{const{setActiveSlide}=(0,overlay.dc)();return react.createElement(overlay.V,{id:"slide-2",title:"Slide 2"},react.createElement("div",null,react.createElement("div",null,"Step 2 Content"),react.createElement(dist_button.$n,{id:"demo-goToStep-method",onClick:()=>setActiveSlide(0)},"programmatically navigate to slide 1")))};DrawerSlide2.__docgenInfo={description:"",methods:[],displayName:"DrawerSlide2"};const Drawer_stories={title:"Overlay/Drawer/Drawer",component:overlay._s,parameters:{controls:{expanded:!0}},argTypes:{id:{description:"Mandatory - unique id for testing",table:{defaultValue:{summary:""}},control:"text"},visible:{description:"Controls the visibility of the drawer",table:{defaultValue:{summary:"false"}},control:!1},title:{description:"Mandatory - title to be displayed on the drawer",table:{defaultValue:{summary:""}},control:"text"},idToFocusOnClose:{description:"Accessibility - id of element to focus on close of Modal",table:{defaultValue:{summary:""}},control:!1},onClose:{description:"Task to perform on close of the drawer.",table:{category:"Custom Events"},control:!1},onSubmit:{description:"Task to perform on submit of the drawer. If the current DrawerSlide has validate property then its outcome (true/false) will decide if onSubmit will be executed or not.",table:{category:"Custom Events"},control:!1}}},description=react.createElement("div",null,"The Drawer component is used to display sliding drawers, typically from the right side of the screen. It is ideal for scenarios where you need to present additional content or actions without interrupting the main flow. It can support both single-step and multi-step content (automatically decided based on the number of DrawerSlide children).",react.createElement("br",null),react.createElement("br",null),react.createElement("b",null,"Note: "),"within any DrawerSlide component, useDrawerController hook can be used to programmatically navigate to specific slide:",react.createElement("br",null),react.createElement("pre",null,"const {setActiveSlide} = useDrawerController();")),ErrorContainer=styled_components_browser_esm.Ay.div`
  font-size: 0.8rem;
  color: red;
`,CodeAndAccessibility=(args=>{const[isSingleStepDrawrrVisible,setIsSingleStepDrawrrVisible]=(0,react.useState)(!1),[isMultiStepDrawrrVisible,setIsMultiStepDrawrrVisible]=(0,react.useState)(!1),[taskName,setTaskName]=(0,react.useState)(""),[taskDescription,setTaskDescription]=(0,react.useState)(""),[error,setError]=(0,react.useState)(""),[taskName2,setTaskName2]=(0,react.useState)(""),[taskDescription2,setTaskDescription2]=(0,react.useState)(""),[error2,setError2]=(0,react.useState)(""),drawerCloseHandler=(drawerId,drawerOpenerId)=>{const drawerActivateButton=document.getElementById(drawerOpenerId);drawerActivateButton&&drawerActivateButton.focus(),drawerId===`${args.id}-single`?(setIsSingleStepDrawrrVisible(!1),setTaskName(""),setTaskDescription(""),setError("")):(setIsMultiStepDrawrrVisible(!1),setTaskName2(""),setTaskDescription2(""),setError2(""))};return react.createElement(grid.E,{showSideMargin:!1},react.createElement(utils.Tx,{importStatement:"import { Drawer, DrawerSlide, useDrawerController } from '@tiger-analytics/react/overlay';"}),react.createElement(grid.H,{style:{gap:"10px"}},react.createElement(dist_button.$n,{id:"activate-drawer-single",onClick:()=>setIsSingleStepDrawrrVisible(!0),variant:dist_button.Ak.Secondary},"Show single step drawer"),react.createElement(dist_button.$n,{id:"activate-drawer-multi",onClick:()=>setIsMultiStepDrawrrVisible(!0),variant:dist_button.Ak.Secondary},"Show Multi step drawer"),react.createElement(overlay._s,{id:`${args.id}-single`,title:"Drawer Single-Step",visible:isSingleStepDrawrrVisible,onClose:()=>drawerCloseHandler(`${args.id}-single`,"activate-drawer-single"),onSubmit:()=>drawerCloseHandler(`${args.id}-single`,"activate-drawer-single")},react.createElement(overlay.V,{id:"slide-1",title:"Slide 1",validate:()=>!(!taskName||!taskDescription)||(setError("Both name and description are required."),!1)},react.createElement(formFields.ks,{id:"create-task-name",label:"Name",value:taskName,onChangeHandler:value=>{setTaskName(value),setError("")}}),react.createElement(formFields.fs,{id:"create-task-description",label:"Description",value:taskDescription,onChangeHandler:value=>{setTaskDescription(value),setError("")},required:!0}),react.createElement(ErrorContainer,null,error))),react.createElement(overlay._s,{id:`${args.id}-multi`,title:"Drawer Multi-Step",visible:isMultiStepDrawrrVisible,onClose:()=>drawerCloseHandler(`${args.id}-multi`,"activate-drawer-multi"),onSubmit:()=>drawerCloseHandler(`${args.id}-multi`,"activate-drawer-multi")},react.createElement(overlay.V,{id:"slide-2",title:"Slide 1",validate:()=>!(!taskName2||!taskDescription2)||(setError2("Both name and description are required."),!1)},react.createElement(formFields.ks,{id:"create-task-name-2",label:"Name",value:taskName2,onChangeHandler:value=>{setTaskName2(value),setError2("")}}),react.createElement(formFields.fs,{id:"create-task-description-2",label:"Description",value:taskDescription2,onChangeHandler:value=>{setTaskDescription2(value),setError2("")},required:!0}),react.createElement(ErrorContainer,null,error2)),react.createElement(DrawerSlide2,null),react.createElement(overlay.V,{id:"slide-3",title:"Slide 3"},"Slide 3 content"))),react.createElement(grid.H,null,react.createElement("div",{className:"story-title"},"       ")),react.createElement(grid.H,null,react.createElement(utils.ur,{description})))}).bind({});CodeAndAccessibility.args={id:"test-drawer",visible:!1};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:"args => {\n  const [isSingleStepDrawrrVisible, setIsSingleStepDrawrrVisible] = useState(false);\n  const [isMultiStepDrawrrVisible, setIsMultiStepDrawrrVisible] = useState(false);\n  const [taskName, setTaskName] = useState('');\n  const [taskDescription, setTaskDescription] = useState('');\n  const [error, setError] = useState('');\n  const [taskName2, setTaskName2] = useState('');\n  const [taskDescription2, setTaskDescription2] = useState('');\n  const [error2, setError2] = useState('');\n  const drawerCloseHandler = (drawerId: string, drawerOpenerId: string) => {\n    const drawerActivateButton = document.getElementById(drawerOpenerId);\n    if (drawerActivateButton) {\n      drawerActivateButton.focus();\n    }\n    if (drawerId === `${args.id}-single`) {\n      setIsSingleStepDrawrrVisible(false);\n      setTaskName('');\n      setTaskDescription('');\n      setError('');\n    } else {\n      setIsMultiStepDrawrrVisible(false);\n      setTaskName2('');\n      setTaskDescription2('');\n      setError2('');\n    }\n  };\n  const taskNameChangeHandler = (value: string) => {\n    setTaskName(value);\n    setError('');\n  };\n  const taskDescriptionChangeHandler = (value: string) => {\n    setTaskDescription(value);\n    setError('');\n  };\n  const taskNameChangeHandler2 = (value: string) => {\n    setTaskName2(value);\n    setError2('');\n  };\n  const taskDescriptionChangeHandler2 = (value: string) => {\n    setTaskDescription2(value);\n    setError2('');\n  };\n  const slide1Validator = (): boolean => {\n    if (!taskName || !taskDescription) {\n      setError('Both name and description are required.');\n      return false;\n    } else {\n      return true;\n    }\n  };\n  const slide1Validator2 = (): boolean => {\n    if (!taskName2 || !taskDescription2) {\n      setError2('Both name and description are required.');\n      return false;\n    } else {\n      return true;\n    }\n  };\n  return <GridContainer showSideMargin={false}>\n      <ImportBlock importStatement={`import { Drawer, DrawerSlide, useDrawerController } from '@tiger-analytics/react/overlay';`} />\n      <GridColumn style={{\n      gap: '10px'\n    }}>\n        <Button id=\"activate-drawer-single\" onClick={() => setIsSingleStepDrawrrVisible(true)} variant={ButtonVariant.Secondary}>\n          Show single step drawer\n        </Button>\n        <Button id=\"activate-drawer-multi\" onClick={() => setIsMultiStepDrawrrVisible(true)} variant={ButtonVariant.Secondary}>\n          Show Multi step drawer\n        </Button>\n        <Drawer id={`${args.id}-single`} title=\"Drawer Single-Step\" visible={isSingleStepDrawrrVisible} onClose={() => drawerCloseHandler(`${args.id}-single`, 'activate-drawer-single')} onSubmit={() => drawerCloseHandler(`${args.id}-single`, 'activate-drawer-single')}>\n          <DrawerSlide id=\"slide-1\" title=\"Slide 1\" validate={slide1Validator}>\n            <TextInput id=\"create-task-name\" label=\"Name\" value={taskName} onChangeHandler={taskNameChangeHandler} />\n            <TextArea id=\"create-task-description\" label=\"Description\" value={taskDescription} onChangeHandler={taskDescriptionChangeHandler} required />\n            <ErrorContainer>{error}</ErrorContainer>\n          </DrawerSlide>\n        </Drawer>\n        <Drawer id={`${args.id}-multi`} title=\"Drawer Multi-Step\" visible={isMultiStepDrawrrVisible} onClose={() => drawerCloseHandler(`${args.id}-multi`, 'activate-drawer-multi')} onSubmit={() => drawerCloseHandler(`${args.id}-multi`, 'activate-drawer-multi')}>\n          <DrawerSlide id=\"slide-2\" title=\"Slide 1\" validate={slide1Validator2}>\n            <TextInput id=\"create-task-name-2\" label=\"Name\" value={taskName2} onChangeHandler={taskNameChangeHandler2} />\n            <TextArea id=\"create-task-description-2\" label=\"Description\" value={taskDescription2} onChangeHandler={taskDescriptionChangeHandler2} required />\n            <ErrorContainer>{error2}</ErrorContainer>\n          </DrawerSlide>\n          <DrawerSlide2 />\n          <DrawerSlide id=\"slide-3\" title=\"Slide 3\">\n            Slide 3 content\n          </DrawerSlide>\n        </Drawer>\n      </GridColumn>\n\n      <GridColumn>\n        <div className=\"story-title\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>\n      </GridColumn>\n\n      <GridColumn>\n        <DescriptionBlock description={description} />\n      </GridColumn>\n    </GridContainer>;\n}",...CodeAndAccessibility.parameters?.docs?.source}}}},"../../packages/react/dist/button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$n:()=>Button,rl:()=>ButtonFillStyle,Mp:()=>ButtonSize,Ak:()=>ButtonVariant});var ButtonVariant,t,ButtonSize,ButtonFillStyle,styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("../../packages/react/dist/theme/utils/index.js");(t=ButtonVariant||(ButtonVariant={})).Primary="primary",t.Secondary="secondary",t.Destruct="destruct",function(t){t.Small="small",t.Default="default"}(ButtonSize||(ButtonSize={})),function(t){t.Filled="filled",t.Outline="outline",t.None="none"}(ButtonFillStyle||(ButtonFillStyle={}));const Button=styled_components_browser_esm.Ay.button`
  display: inline-flex;
  width: ${({iconOnly:r=!1,size:o=ButtonSize.Default})=>r?o===ButtonSize.Default?"44px":"30px":"100%"};
  align-items: center;
  justify-content: center;
  height: ${({size:r=ButtonSize.Default})=>r===ButtonSize.Small?"30px":"44px"};
  font-size: 20px;
  font-family: ${({theme:r})=>r.global.specificFontFamily};
  padding: ${({iconOnly:r=!1})=>r?0:" 0 1.5rem"};
  border: none;
  border-radius: ${({theme:r})=>r.global.componentRadius};
  transition: all 0.5s;
  cursor: pointer;
  flex-shrink: 0;

  background-color: ${({theme:r,variant:o=ButtonVariant.Primary})=>o===ButtonVariant.Primary?r.colors.primary.base:o===ButtonVariant.Secondary?(0,utils.WI)("secondary"):r.colors.error.base};

  color: ${({theme:r,variant:o=ButtonVariant.Primary})=>o===ButtonVariant.Primary?r.colors.textSecondary.base:o===ButtonVariant.Secondary?r.colors.textPrimary.base:r.colors.textSecondary.base};

  svg {
    fill: ${({theme:r,variant:o=ButtonVariant.Primary})=>o===ButtonVariant.Primary?r.colors.textSecondary.base:o===ButtonVariant.Secondary?r.colors.textPrimary.base:r.colors.textSecondary.base};
    transition: all 0.5s;
  }

  ${({theme:r,iconOnly:o=!1,size:a=ButtonSize.Default})=>styled_components_browser_esm.AH`
    @media screen and (min-width: ${`${r.breakpoints.medium}`}) {
      width: ${o?a===ButtonSize.Default?"44px":"30px":"max-content"};
      min-width: ${o?a===ButtonSize.Default?"44px":"30px":"120px"};
    }
  `}

  &:hover:not([disabled]) {
    background-color: ${({theme:r,variant:o=ButtonVariant.Primary})=>o===ButtonVariant.Primary?r.colors.primary.hover:o===ButtonVariant.Secondary?r.colors.secondary.hover:r.colors.error.hover};
  }

  &:focus:not([disabled]),
  &:active:not([disabled]) {
    background-color: ${({theme:r,variant:o=ButtonVariant.Primary})=>o===ButtonVariant.Primary?r.colors.primary.active:o===ButtonVariant.Secondary?r.colors.secondary.active:r.colors.error.active};
  }

  ${({theme:r,fill:o=ButtonFillStyle.Filled,variant:a=ButtonVariant.Primary})=>o===ButtonFillStyle.None?styled_components_browser_esm.AH`
        background-color: transparent;
        color: ${a===ButtonVariant.Primary?r.colors.primary.base:a===ButtonVariant.Secondary?r.colors.secondary.base:r.colors.error.base};

        svg {
          fill: ${a===ButtonVariant.Primary?r.colors.primary.base:a===ButtonVariant.Secondary?r.colors.secondary.base:r.colors.error.base};
        }

        &:hover:not([disabled]) {
          background-color: transparent;
          color: ${a===ButtonVariant.Primary?r.colors.primary.hover:a===ButtonVariant.Secondary?r.colors.secondary.hover:r.colors.error.hover};
          svg {
            fill: ${a===ButtonVariant.Primary?r.colors.primary.hover:a===ButtonVariant.Secondary?r.colors.secondary.hover:r.colors.error.hover};
          }
        }

        &:active:not([disabled]),
        &:focus:not([disabled]) {
          background-color: transparent;
          color: ${a===ButtonVariant.Primary?r.colors.primary.active:a===ButtonVariant.Secondary?r.colors.secondary.active:r.colors.error.active};
          svg {
            fill: ${a===ButtonVariant.Primary?r.colors.primary.active:a===ButtonVariant.Secondary?r.colors.secondary.active:r.colors.error.active};
          }
        }
      `:o===ButtonFillStyle.Outline?styled_components_browser_esm.AH`
        background-color: transparent;
        color: ${a===ButtonVariant.Primary?r.colors.primary.base:a===ButtonVariant.Secondary?r.colors.secondary.base:r.colors.error.base};
        border: 2px solid
          ${a===ButtonVariant.Primary?r.colors.primary.base:a===ButtonVariant.Secondary?r.colors.secondary.base:r.colors.error.base};

        svg {
          fill: ${a===ButtonVariant.Primary?r.colors.primary.base:a===ButtonVariant.Secondary?r.colors.secondary.base:r.colors.error.base};
        }

        &:hover:not([disabled]) {
          background-color: transparent;
          color: ${a===ButtonVariant.Primary?r.colors.primary.hover:a===ButtonVariant.Secondary?r.colors.secondary.hover:r.colors.error.hover};
          border: 2px solid
            ${a===ButtonVariant.Primary?r.colors.primary.hover:a===ButtonVariant.Secondary?r.colors.secondary.hover:r.colors.error.hover};

          svg {
            fill: ${a===ButtonVariant.Primary?r.colors.primary.hover:a===ButtonVariant.Secondary?r.colors.secondary.hover:r.colors.error.hover};
          }
        }

        &:focus:not([disabled]),
        &:active:not([disabled]) {
          background-color: transparent;
          color: ${a===ButtonVariant.Primary?r.colors.primary.active:a===ButtonVariant.Secondary?r.colors.secondary.active:r.colors.error.active};
          border: 2px solid
            ${a===ButtonVariant.Primary?r.colors.primary.active:a===ButtonVariant.Secondary?r.colors.secondary.active:r.colors.error.active};
          svg {
            fill: ${a===ButtonVariant.Primary?r.colors.primary.active:a===ButtonVariant.Secondary?r.colors.secondary.active:r.colors.error.active};
          }
        }
      `:void 0}

  &[disabled] {
    opacity: 0.7;
    cursor: inherit;
  }
`},"../../packages/react/dist/overlay/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i4:()=>ArcLoader,_s:()=>Drawer,V:()=>DrawerSlide,aF:()=>Modal,hJ:()=>Overlay,Lf:()=>OverlayContentAlign,DD:()=>SideSheet,dc:()=>useDrawerController});var OverlayContentAlign,t,jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es2015=__webpack_require__("../../node_modules/react-focus-lock/dist/es2015/index.js");(t=OverlayContentAlign||(OverlayContentAlign={})).TopLeft="top left",t.TopCenter="top center",t.TopRight="top right",t.MiddleLeft="middle left",t.MiddleCenter="middle center",t.MiddleRight="middle right",t.BottomLeft="bottom left",t.BottomCenter="bottom center",t.BottomRight="bottom right";var styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const OverlayContainer=styled_components_browser_esm.Ay.div`
  display: ${({visible:e})=>e?"flex":"none"};
  align-items: ${({overlayContentAlign:e})=>"middle"===e.split(" ")[0]?"center":"top"===e.split(" ")[0]?"flex-start":"flex-end"};

  justify-content: ${({overlayContentAlign:e})=>"center"===e.split(" ")[1]?"center":"left"===e.split(" ")[1]?"flex-start":"flex-end"};

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background: ${({visible:e})=>e?"rgba(0, 0, 0, 0.5)":"none"};
  transition: all 0.3s ease;
`,Overlay=e=>{const{id:o,visible:t,overlayContentAlign:n=OverlayContentAlign.MiddleCenter,idToFocusOnClose:r,children:i}=e;return(0,jsx_runtime.jsx)(es2015.Ay,{disabled:!t,onDeactivation:()=>{r&&setTimeout((()=>{document.getElementById(r)?.focus()}),0)},children:(0,jsx_runtime.jsx)(OverlayContainer,{id:o,visible:t,overlayContentAlign:n,children:i})})},ModalContainer=styled_components_browser_esm.Ay.div`
  background: var(--colors-background-hover);
  border-radius: var(--global-componentRadius);
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem 1rem;
  width: 90%;
  max-width: 550px;

  ${({theme:e})=>styled_components_browser_esm.AH`
    @media screen and (min-width: ${`${e.breakpoints.medium}`}) {
      width: 70%;
      max-width: 600px;
    }
    @media (min-width: 768px) {
    }
  `}

  @media (min-width: 1024px) {
    width: 50%;
    max-width: 800px;
  }
`,ModalHeader=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`,ModalHeaderTitle=styled_components_browser_esm.Ay.h2`
  flex-grow: 1;
  color: var(--colors-secondary-base);
`;var dist_button=__webpack_require__("../../packages/react/dist/button/index.js"),icons=__webpack_require__("../../packages/react/dist/icons/index.js");const Modal=o=>{const{id:l,title:e,visible:t=!1,onClose:i,children:a,idToFocusOnClose:r}=o;return(0,jsx_runtime.jsx)(Overlay,{id:`${l}-modal-overlay`,visible:t,idToFocusOnClose:r,children:(0,jsx_runtime.jsxs)(ModalContainer,{role:"dialog","aria-modal":"true","aria-labelledby":"${`${this.id}-modal-title`}",children:[(0,jsx_runtime.jsxs)(ModalHeader,{children:[(0,jsx_runtime.jsx)(ModalHeaderTitle,{id:`${l}-modal-title`,children:e}),(0,jsx_runtime.jsx)(dist_button.$n,{id:`${l}-close-button`,iconOnly:!0,fill:dist_button.rl.None,variant:dist_button.Ak.Primary,"aria-label":"Close",onClick:o=>{i?.(o),r&&document.getElementById(r)?.focus()},children:(0,jsx_runtime.jsx)(icons.CloseIcon,{})})]}),a]})})};var react=__webpack_require__("../../node_modules/react/index.js");const DrawerContainer=styled_components_browser_esm.Ay.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 0.6rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 444px;
  height: 100%;
  background-color: white;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.1);
  transform: translateX(100%);
  animation: ${({visible:o})=>o?"slideIn 0.4s ease-in-out forwards":"none"};

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @media (min-width: 768px) {
    width: 70%;
    max-width: 600px;
  }

  h2 {
    border: 1px solid var(--colors-textPrimary-hover);
    border-bottom: 2px solid var(--colors-warning-base);
    border-radius: 5px 5px 0 0;
    padding: 0 8px;
  }
`,DrawerBody=styled_components_browser_esm.Ay.div`
  flex-grow: 1;
  overflow-y: auto;
`,DrawerFooter=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
  border-top: 1px solid var(--colors-textPrimary-hover);

  button {
    width: fit-content;
  }
`,DrawerSlideContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
`,DrawerContext=(0,react.createContext)({setActiveSlide:()=>{}}),useDrawerController=()=>{let e=e=>{};const t=(0,react.useContext)(DrawerContext);return t?e=t?.setActiveSlide:(r=>{if("undefined"==typeof jest)throw new Error(r);console.warn(r)})("useDrawerController must be used within a Drawer"),{setActiveSlide:e}},Drawer=t=>{const{id:e,visible:o,title:r,onClose:i,onSubmit:n,idToFocusOnClose:a,children:l}=t,[s,c]=(0,react.useState)([]),[d,u]=(0,react.useState)(0);(0,react.useEffect)((()=>{c(react.Children.toArray(l)),o&&u(0)}),[o,l]);const p=d===s.length-1;return(0,jsx_runtime.jsx)(Overlay,{id:`${e}-overlay-container`,visible:o,idToFocusOnClose:a,children:(0,jsx_runtime.jsx)(DrawerContext.Provider,{value:{setActiveSlide:t=>{t>=0&&t<s.length&&u(t)}},children:(0,jsx_runtime.jsxs)(DrawerContainer,{visible:o,role:"dialog","aria-labelledby":`${e}-drawer-title`,children:[(0,jsx_runtime.jsx)(dist_button.$n,{style:{alignSelf:"end"},id:"${`${this.id}-close-button`}",iconOnly:!0,fill:dist_button.rl.None,variant:dist_button.Ak.Primary,"aria-label":"Close",onClick:t=>{t.stopPropagation(),i?.()},children:(0,jsx_runtime.jsx)(icons.CloseIcon,{})}),(0,jsx_runtime.jsx)("h2",{id:`${e}-drawer-title`,children:r}),(0,jsx_runtime.jsx)(DrawerBody,{children:s[d]}),(0,jsx_runtime.jsxs)(DrawerFooter,{children:[(0,jsx_runtime.jsx)(dist_button.$n,{id:`${e}-next-or-button`,variant:dist_button.Ak.Secondary,onClick:d===s.length-1?async t=>{t.stopPropagation();const e=s[d];e?.props?.validate?await e.props.validate()&&n?.():n?.()}:async()=>{if(d<s.length-1){const t=s[d];t?.props?.validate?await t.props.validate()&&u(d+1):u(d+1)}},children:p?"Submit":"Next"}),(0,jsx_runtime.jsx)(dist_button.$n,{id:`${e}-previous-button`,fill:dist_button.rl.None,onClick:()=>{d>0&&u(d-1)},style:{display:0===d?"none":""},children:"Previous"})]})]})})})},DrawerSlide=r=>{const{id:e,title:i,children:t}=r;return(0,jsx_runtime.jsx)(DrawerSlideContainer,{id:e,children:t})},rotate=styled_components_browser_esm.i7`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,LoaderWrapper=styled_components_browser_esm.Ay.div`
  width: ${({size:r})=>`${r}px`};
  height: ${({size:r})=>`${r}px`};
  border-radius: 50%;
  border: ${({borderColor:r})=>`4px solid ${r}`};
  border-top-color: transparent;
  animation: ${rotate} 1s linear infinite;
`,ArcLoader=r=>{const{visible:o=!1,idToFocusOnClose:e,size:s=40,color:a="var(--colors-primary-base)"}=r;return(0,jsx_runtime.jsx)(Overlay,{id:"loader-overlay",visible:o,idToFocusOnClose:e,children:(0,jsx_runtime.jsx)(LoaderWrapper,{size:s,borderColor:a})})},SideSheetContainer=styled_components_browser_esm.Ay.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 0.6rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 444px;
  height: 100%;
  background-color: white;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.1);
  transform: translateX(100%);
  animation: ${({visible:e})=>e?"slideIn 0.4s ease-in-out forwards":"none"};

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @media (min-width: 768px) {
    width: 80%;
    max-width: 800px;
  }

  h2 {
  }
`,SideSheetHeader=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
`,SideSheetBody=styled_components_browser_esm.Ay.div`
  flex-grow: 1;
  overflow-y: auto;
`,SideSheet=(styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
`,e=>{const{id:i,visible:t,title:o,onClose:l,idToFocusOnClose:r,children:n}=e;return(0,jsx_runtime.jsx)(Overlay,{id:`${i}-overlay-container`,visible:t,idToFocusOnClose:r,children:(0,jsx_runtime.jsxs)(SideSheetContainer,{visible:t,role:"dialog","aria-labelledby":`${i}-drawer-title`,children:[(0,jsx_runtime.jsxs)(SideSheetHeader,{children:[(0,jsx_runtime.jsx)(dist_button.$n,{style:{alignSelf:"end"},id:"${`${this.id}-close-button`}",iconOnly:!0,fill:dist_button.rl.None,variant:dist_button.Ak.Primary,"aria-label":"Close",onClick:e=>{e.stopPropagation(),l?.()},children:(0,jsx_runtime.jsx)(icons.CloseIcon,{})}),(0,jsx_runtime.jsx)("h2",{id:`${i}-drawer-title`,children:o})]}),(0,jsx_runtime.jsx)(SideSheetBody,{children:n})]})})})}}]);
//# sourceMappingURL=overlay-Drawer-Drawer-stories.d99cad38.iframe.bundle.js.map