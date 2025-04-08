"use strict";(self.webpackChunkstorybook_react19=self.webpackChunkstorybook_react19||[]).push([[870],{"./src/overlay/Overlay.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_tiger_analytics_react_overlay__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/react/dist/overlay/index.js"),_tiger_analytics_react_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/react/dist/button/index.js"),_tiger_analytics_react_grid__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/react/dist/grid/index.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Overlay/Overlay",component:_tiger_analytics_react_overlay__WEBPACK_IMPORTED_MODULE_1__.hJ,parameters:{controls:{expanded:!0}},argTypes:{id:{description:"Mandatory - unique id for testing",table:{defaultValue:{summary:""}},control:"text"},visible:{description:"Controls the visibility of the overlay",table:{defaultValue:{summary:"false"}},control:!1},overlayContentAlign:{options:[_tiger_analytics_react_overlay__WEBPACK_IMPORTED_MODULE_1__.Lf.TopLeft,_tiger_analytics_react_overlay__WEBPACK_IMPORTED_MODULE_1__.Lf.TopCenter,_tiger_analytics_react_overlay__WEBPACK_IMPORTED_MODULE_1__.Lf.TopRight,_tiger_analytics_react_overlay__WEBPACK_IMPORTED_MODULE_1__.Lf.MiddleLeft,_tiger_analytics_react_overlay__WEBPACK_IMPORTED_MODULE_1__.Lf.MiddleCenter,_tiger_analytics_react_overlay__WEBPACK_IMPORTED_MODULE_1__.Lf.MiddleRight,_tiger_analytics_react_overlay__WEBPACK_IMPORTED_MODULE_1__.Lf.BottomLeft,_tiger_analytics_react_overlay__WEBPACK_IMPORTED_MODULE_1__.Lf.BottomCenter,_tiger_analytics_react_overlay__WEBPACK_IMPORTED_MODULE_1__.Lf.BottomRight],description:"Alignment of the overlay content",table:{defaultValue:{summary:_tiger_analytics_react_overlay__WEBPACK_IMPORTED_MODULE_1__.Lf.MiddleCenter}},control:{type:"select"}},idToFocusOnClose:{description:"Accessibility - id of element to focus on close of overlay.",table:{defaultValue:{summary:""}},control:!1}}},CodeAndAccessibility=(args=>{const[isVisible,setIsVisible]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),toggleOverlayVisibility=()=>{setIsVisible(!isVisible)};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_grid__WEBPACK_IMPORTED_MODULE_3__.E,{showSideMargin:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_4__.Tx,{importStatement:"import { Overlay } from '@tiger-analytics/react/overlay';"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_grid__WEBPACK_IMPORTED_MODULE_3__.H,{style:{gap:"10px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_button__WEBPACK_IMPORTED_MODULE_2__.$n,{id:"activate-overlay",onClick:toggleOverlayVisibility,variant:_tiger_analytics_react_button__WEBPACK_IMPORTED_MODULE_2__.Ak.Secondary},"Show Overlay"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_overlay__WEBPACK_IMPORTED_MODULE_1__.hJ,{id:"test-overlay",visible:isVisible,overlayContentAlign:args.overlayContentAlign,idToFocusOnClose:"activate-overlay"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{id:"children-content-wrapper",style:{background:"white",padding:"16px",borderRadius:"8px",boxShadow:"0 4px 10px rgba(0, 0, 0, 0.25)"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",null,"Overlay Content"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"This is some content inside the overlay. Click the close button below to dismiss it."),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_button__WEBPACK_IMPORTED_MODULE_2__.$n,{id:"overlay-close",onClick:toggleOverlayVisibility,variant:_tiger_analytics_react_button__WEBPACK_IMPORTED_MODULE_2__.Ak.Secondary},"Close Overlay"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_button__WEBPACK_IMPORTED_MODULE_2__.$n,{id:"overlay-dummy-button-1",onClick:()=>window.alert("Dummy button 1")},"Dummy button 1"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_button__WEBPACK_IMPORTED_MODULE_2__.$n,{id:"overlay-dummy-button-2",onClick:()=>window.alert("Dummy button 2"),variant:_tiger_analytics_react_button__WEBPACK_IMPORTED_MODULE_2__.Ak.Destruct},"Dummy button 2")))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_grid__WEBPACK_IMPORTED_MODULE_3__.H,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"story-title"},"       ")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_grid__WEBPACK_IMPORTED_MODULE_3__.H,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_4__.ur,{description:"The Overlay component is the base for creating overlay-type components like modals. It provides focus management for accessibility. Before creating a new component with Overlay, please check the components list for any existing overlay components, such as modals, that may suit your needs."})))}).bind({});CodeAndAccessibility.args={id:"test-overlay",visible:!1,overlayContentAlign:_tiger_analytics_react_overlay__WEBPACK_IMPORTED_MODULE_1__.Lf.MiddleCenter,idToFocusOnClose:"activate-overlay"};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:"args => {\n  const [isVisible, setIsVisible] = useState(false);\n  const toggleOverlayVisibility = () => {\n    setIsVisible(!isVisible);\n  };\n  return <GridContainer showSideMargin={false}>\n      <ImportBlock importStatement={`import { Overlay } from '@tiger-analytics/react/overlay';`} />\n      <GridColumn style={{\n      gap: '10px'\n    }}>\n        <Button id=\"activate-overlay\" onClick={toggleOverlayVisibility} variant={ButtonVariant.Secondary}>\n          Show Overlay\n        </Button>\n\n        <Overlay id=\"test-overlay\" visible={isVisible} overlayContentAlign={args.overlayContentAlign} idToFocusOnClose=\"activate-overlay\">\n          <div id=\"children-content-wrapper\" style={{\n          background: 'white',\n          padding: '16px',\n          borderRadius: '8px',\n          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.25)'\n        }}>\n            <h2>Overlay Content</h2>\n            <p>\n              This is some content inside the overlay. Click the close button below to dismiss it.\n            </p>\n            <Button id=\"overlay-close\" onClick={toggleOverlayVisibility} variant={ButtonVariant.Secondary}>\n              Close Overlay\n            </Button>\n            <Button id=\"overlay-dummy-button-1\" onClick={() => window.alert('Dummy button 1')}>\n              Dummy button 1\n            </Button>\n            <Button id=\"overlay-dummy-button-2\" onClick={() => window.alert('Dummy button 2')} variant={ButtonVariant.Destruct}>\n              Dummy button 2\n            </Button>\n          </div>\n        </Overlay>\n      </GridColumn>\n\n      <GridColumn>\n        <div className=\"story-title\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>\n      </GridColumn>\n\n      <GridColumn>\n        <DescriptionBlock description={description} />\n      </GridColumn>\n    </GridContainer>;\n}",...CodeAndAccessibility.parameters?.docs?.source}}}},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bO:()=>CommentBlock,ur:()=>DescriptionBlock,Tx:()=>ImportBlock});var grid=__webpack_require__("../../packages/react/dist/grid/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const ImportBlockDiv=styled_components_browser_esm.Ay.div`
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
`,CommentBlock=({children})=>react.createElement(CommentContainer,null,children);CommentBlock.__docgenInfo={description:"",methods:[],displayName:"CommentBlock",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}}},"../../packages/react/dist/button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$n:()=>Button,rl:()=>ButtonFillStyle,Mp:()=>ButtonSize,Ak:()=>ButtonVariant});var ButtonVariant,t,ButtonSize,ButtonFillStyle,styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("../../packages/react/dist/theme/utils/index.js");(t=ButtonVariant||(ButtonVariant={})).Primary="primary",t.Secondary="secondary",t.Destruct="destruct",function(t){t.Small="small",t.Default="default"}(ButtonSize||(ButtonSize={})),function(t){t.Filled="filled",t.Outline="outline",t.None="none"}(ButtonFillStyle||(ButtonFillStyle={}));const Button=styled_components_browser_esm.Ay.button`
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
`},"../../packages/react/dist/grid/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>GridColumn,E:()=>GridContainer});var styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const GridColumn=styled_components_browser_esm.Ay.div`
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
`},"../../packages/react/dist/overlay/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i4:()=>ArcLoader,_s:()=>Drawer,V:()=>DrawerSlide,aF:()=>Modal,hJ:()=>Overlay,Lf:()=>OverlayContentAlign,dc:()=>useDrawerController});var OverlayContentAlign,t,jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es2015=__webpack_require__("../../node_modules/react-focus-lock/dist/es2015/index.js");(t=OverlayContentAlign||(OverlayContentAlign={})).TopLeft="top left",t.TopCenter="top center",t.TopRight="top right",t.MiddleLeft="middle left",t.MiddleCenter="middle center",t.MiddleRight="middle right",t.BottomLeft="bottom left",t.BottomCenter="bottom center",t.BottomRight="bottom right";var styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const OverlayContainer=styled_components_browser_esm.Ay.div`
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
`,ArcLoader=r=>{const{visible:o=!1,idToFocusOnClose:e,size:s=40,color:a="var(--colors-primary-base)"}=r;return(0,jsx_runtime.jsx)(Overlay,{id:"loader-overlay",visible:o,idToFocusOnClose:e,children:(0,jsx_runtime.jsx)(LoaderWrapper,{size:s,borderColor:a})})}}}]);
//# sourceMappingURL=overlay-Overlay-stories.bb6e60cf.iframe.bundle.js.map