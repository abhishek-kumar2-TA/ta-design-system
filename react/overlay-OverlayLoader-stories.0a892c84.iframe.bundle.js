"use strict";(self.webpackChunkstorybook_react19=self.webpackChunkstorybook_react19||[]).push([[91],{"./src/overlay/OverlayLoader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_tiger_analytics_react_overlay__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/react/dist/overlay/index.js"),_tiger_analytics_react_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/react/dist/button/index.js"),_tiger_analytics_react_grid__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/react/dist/grid/index.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Overlay/OverlayLoader",component:_tiger_analytics_react_overlay__WEBPACK_IMPORTED_MODULE_1__.Ud,parameters:{controls:{expanded:!0}},argTypes:{visible:{description:"Controls the visibility of loader",table:{defaultValue:{summary:"false"}},control:!1},idToFocusOnClose:{description:"Accessibility - id of element to focus on loader disable",table:{defaultValue:{summary:""}},control:!1},size:{description:"Size of the loader",table:{defaultValue:{summary:"40"}},control:"text"},color:{description:"border color of the loader",table:{defaultValue:{summary:"var(--colors-primary-base)"}},control:"text"}}},CodeAndAccessibility=(args=>{const[isVisible,setIsVisible]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_grid__WEBPACK_IMPORTED_MODULE_3__.E,{showSideMargin:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_4__.Tx,{importStatement:"import { OverlayLoader } from '@tiger-analytics/react/overlay';"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_grid__WEBPACK_IMPORTED_MODULE_3__.H,{style:{gap:"10px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_button__WEBPACK_IMPORTED_MODULE_2__.$n,{id:"activate-loader",onClick:()=>setIsVisible(!0),variant:_tiger_analytics_react_button__WEBPACK_IMPORTED_MODULE_2__.Ak.Secondary},"Show loader"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_overlay__WEBPACK_IMPORTED_MODULE_1__.Ud,{visible:isVisible,size:args.size,color:args.color})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_grid__WEBPACK_IMPORTED_MODULE_3__.H,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"story-title"},"       ")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_grid__WEBPACK_IMPORTED_MODULE_3__.H,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_4__.ur,{description:"A full page Loader component"})))}).bind({});CodeAndAccessibility.args={visible:!1,idToFocusOnClose:"activate-loader",size:"40",color:"var(--colors-primary-base)"};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:"args => {\n  const [isVisible, setIsVisible] = useState(false);\n  return <GridContainer showSideMargin={false}>\n      <ImportBlock importStatement={`import { OverlayLoader } from '@tiger-analytics/react/overlay';`} />\n      <GridColumn style={{\n      gap: '10px'\n    }}>\n        <Button id=\"activate-loader\" onClick={() => setIsVisible(true)} variant={ButtonVariant.Secondary}>\n          Show loader\n        </Button>\n\n        <OverlayLoader visible={isVisible} size={args.size} color={args.color} />\n      </GridColumn>\n\n      <GridColumn>\n        <div className=\"story-title\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>\n      </GridColumn>\n\n      <GridColumn>\n        <DescriptionBlock description={description} />\n      </GridColumn>\n    </GridContainer>;\n}",...CodeAndAccessibility.parameters?.docs?.source}}}},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bO:()=>CommentBlock,ur:()=>DescriptionBlock,Tx:()=>ImportBlock});var grid=__webpack_require__("../../packages/react/dist/grid/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const ImportBlockDiv=styled_components_browser_esm.Ay.div`
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
  grid-column: ${props=>`span ${props.sm||props.theme.grid.small.columns}`};
  display: ${props=>0===props.sm?"none":"flex"};
  flex-direction: column;
  align-items: 'flex-start';

  ${({theme,md,lg})=>styled_components_browser_esm.AH`
    @media screen and (min-width: ${`${theme.breakpoints.medium}`}) {
      grid-column: ${props=>`span ${md||lg||props.theme.grid.medium.columns}`};
      display: ${0===md?"none":"flex"};
    }

    @media screen and (min-width: ${`${theme.breakpoints.large}`}) {
      grid-column: ${props=>`span ${lg||props.theme.grid.large.columns}`};
      display: ${0===lg?"none":"flex"};
    }
  `}
`,GridContainer=styled_components_browser_esm.Ay.div`
  display: grid;
  width: 100%;
  grid-gap: ${({theme})=>theme.grid.small.gutter};
  grid-template-columns: repeat(${({theme})=>theme.grid.small.columns}, 1fr);
  grid-template-rows: initial;
  grid-auto-rows: initial;
  margin: 0;
  max-width: 100%;
  grid-column: span ${({theme})=>theme.grid.small.columns};

  ${({showSideMargin})=>showSideMargin&&styled_components_browser_esm.AH`
      max-width: calc(100% - ${({theme})=>theme.grid.small.margin} * 2);
      margin-left: ${({theme})=>theme.grid.small.margin} !important;
      margin-right: ${({theme})=>theme.grid.small.margin} !important;
    `}

  ${({restrictHeightToMaxContent})=>restrictHeightToMaxContent&&styled_components_browser_esm.AH`
      grid-template-rows: max-content;
      grid-auto-rows: max-content;
    `}

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(${({theme})=>theme.grid.medium.columns}, 1fr);
    margin: 0;
    grid-gap: ${({theme})=>theme.grid.medium.gutter};
    max-width: 100%;
    grid-column: span ${({theme})=>theme.grid.medium.columns};

    ${({showSideMargin})=>showSideMargin&&styled_components_browser_esm.AH`
        max-width: calc(100% - ${({theme})=>theme.grid.medium.margin} * 2);
        margin-left: ${({theme})=>theme.grid.medium.margin} !important;
        margin-right: ${({theme})=>theme.grid.medium.margin} !important;
      `}
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(${({theme})=>theme.grid.large.columns}, 1fr);
    margin: 0;
    grid-gap: ${({theme})=>theme.grid.large.gutter};
    grid-column: span ${({theme})=>theme.grid.large.columns};

    ${({showSideMargin})=>showSideMargin&&styled_components_browser_esm.AH`
        max-width: calc(100% - ${({theme})=>theme.grid.large.margin} * 2);
        margin-left: ${({theme})=>theme.grid.large.margin} !important;
        margin-right: ${({theme})=>theme.grid.large.margin} !important;
      `}
  }
`}}]);
//# sourceMappingURL=overlay-OverlayLoader-stories.0a892c84.iframe.bundle.js.map