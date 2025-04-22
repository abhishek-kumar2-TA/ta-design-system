"use strict";(self.webpackChunkstorybook_react19=self.webpackChunkstorybook_react19||[]).push([[764],{"./src/overlay/SideSheet.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_tiger_analytics_react_overlay__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/react/dist/overlay/index.js"),_tiger_analytics_react_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/react/dist/button/index.js"),_tiger_analytics_react_grid__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/react/dist/grid/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Overlay/SideSheet",component:_tiger_analytics_react_overlay__WEBPACK_IMPORTED_MODULE_1__.DD,parameters:{controls:{expanded:!0}},argTypes:{id:{description:"Mandatory - unique id for testing",table:{defaultValue:{summary:""}},control:"text"},visible:{description:"Controls the visibility of the sideSheet",table:{defaultValue:{summary:"false"}},control:!1},title:{description:"Mandatory - title to be displayed on the sideSheet",table:{defaultValue:{summary:""}},control:"text"},idToFocusOnClose:{description:"Accessibility - id of element to focus on close of Modal",table:{defaultValue:{summary:""}},control:!1},onClose:{description:"Task to perform on close of the sideSheet.",table:{category:"Custom Events"},control:!1}}},description=react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"The SideSheet component is used to display sliding sideSheets, typically from the right side of the screen. It is ideal for scenarios where you need to present additional content or actions without interrupting the main flow.",react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null)),CodeAndAccessibility=(styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div`
  font-size: 0.8rem;
  color: red;
`,(args=>{const[isSingleStepDrawrrVisible,setIsSingleStepDrawrrVisible]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_grid__WEBPACK_IMPORTED_MODULE_3__.E,{showSideMargin:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_4__.Tx,{importStatement:"import { SideSheet, SideSheetSlide, useSideSheetController } from '@tiger-analytics/react/overlay';"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_grid__WEBPACK_IMPORTED_MODULE_3__.H,{style:{gap:"10px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_button__WEBPACK_IMPORTED_MODULE_2__.$n,{id:"activate-sideSheet-single",onClick:()=>setIsSingleStepDrawrrVisible(!0),variant:_tiger_analytics_react_button__WEBPACK_IMPORTED_MODULE_2__.Ak.Secondary},"Show sideSheet"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_overlay__WEBPACK_IMPORTED_MODULE_1__.DD,{id:`${args.id}-single`,title:"SideSheet Single-Step",visible:isSingleStepDrawrrVisible,idToFocusOnClose:"activate-sideSheet-single",onClose:()=>setIsSingleStepDrawrrVisible(!1)},"Content")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_grid__WEBPACK_IMPORTED_MODULE_3__.H,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"story-title"},"       ")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_grid__WEBPACK_IMPORTED_MODULE_3__.H,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_4__.ur,{description})))}).bind({}));CodeAndAccessibility.args={id:"test-sideSheet",visible:!1};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:'args => {\n  const [isSingleStepDrawrrVisible, setIsSingleStepDrawrrVisible] = useState(false);\n  return <GridContainer showSideMargin={false}>\n      <ImportBlock importStatement={`import { SideSheet, SideSheetSlide, useSideSheetController } from \'@tiger-analytics/react/overlay\';`} />\n      <GridColumn style={{\n      gap: \'10px\'\n    }}>\n        <Button id="activate-sideSheet-single" onClick={() => setIsSingleStepDrawrrVisible(true)} variant={ButtonVariant.Secondary}>\n          Show sideSheet\n        </Button>\n        <SideSheet id={`${args.id}-single`} title="SideSheet Single-Step" visible={isSingleStepDrawrrVisible} idToFocusOnClose="activate-sideSheet-single" onClose={() => setIsSingleStepDrawrrVisible(false)}>\n          Content\n        </SideSheet>\n      </GridColumn>\n\n      <GridColumn>\n        <div className="story-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>\n      </GridColumn>\n\n      <GridColumn>\n        <DescriptionBlock description={description} />\n      </GridColumn>\n    </GridContainer>;\n}',...CodeAndAccessibility.parameters?.docs?.source}}}},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bO:()=>CommentBlock,ur:()=>DescriptionBlock,Tx:()=>ImportBlock});var grid=__webpack_require__("../../packages/react/dist/grid/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const ImportBlockDiv=styled_components_browser_esm.Ay.div`
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
`,CommentBlock=({children})=>react.createElement(CommentContainer,null,children);CommentBlock.__docgenInfo={description:"",methods:[],displayName:"CommentBlock",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}}},"../../packages/react/dist/grid/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>GridColumn,E:()=>GridContainer});var styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const GridColumn=styled_components_browser_esm.Ay.div`
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
//# sourceMappingURL=overlay-SideSheet-stories.fd8e4463.iframe.bundle.js.map