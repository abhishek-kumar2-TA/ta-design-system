"use strict";(self.webpackChunkstorybook_react19=self.webpackChunkstorybook_react19||[]).push([[602],{"./src/sideNavBar/SideNavBar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SideNavBar_stories});var react=__webpack_require__("../../node_modules/react/index.js"),grid=__webpack_require__("../../packages/react/dist/grid/index.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function isNavGroupItem(value){return"items"in value}var styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const NavContainer=styled_components_browser_esm.Ay.nav`
  width: 300px;
  flex-shrink: 0;
  height: 100%;
  overflow-y: auto;
  background-color: #f8f9fa;
`,NavList=styled_components_browser_esm.Ay.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`,NavItemWrapper=styled_components_browser_esm.Ay.div`
  padding-left: ${({level})=>16*level}px;
`,NavButton=styled_components_browser_esm.Ay.button`
  cursor: pointer;
  font-size: 1rem;
  background: none;
  border: none;
  padding: 8px;
  text-align: left;
  color: inherit;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: ${props=>props.selected?"bold":"inherit"};
`;var icons=__webpack_require__("../../packages/react/dist/icons/index.js");const SideNavBar=({navItems})=>(0,jsx_runtime.jsx)(NavContainer,{children:(0,jsx_runtime.jsx)(NavList,{children:navItems.map((item=>(0,jsx_runtime.jsx)(NavItemComponent,{item,level:0},item.name)))})}),NavItemComponent=({item,level})=>{return(0,jsx_runtime.jsx)(NavItemWrapper,{level,children:(0,jsx_runtime.jsxs)("li",{children:[(value=item,"items"in value?(0,jsx_runtime.jsxs)(NavButton,{onClick:item.onClick,selected:item.selected,"aria-expanded":item.isExpanded,children:[item.name,item.isExpanded?(0,jsx_runtime.jsx)(icons.UpArrowIcon,{width:"16px",height:"16px"}):(0,jsx_runtime.jsx)(icons.DownArrowIcon,{width:"16px",height:"16px"})]}):(0,jsx_runtime.jsx)(NavButton,{onClick:item.onClick,selected:item.selected,children:item.name})),isNavGroupItem(item)&&item.isExpanded&&(0,jsx_runtime.jsx)(NavList,{children:item.items.map((child=>(0,jsx_runtime.jsx)(NavItemComponent,{item:child,level:level+1},child.name)))})]})});var value};var utils=__webpack_require__("./src/utils/index.ts");const SideNavBar_stories={title:"SideNavBar",component:grid.H,parameters:{controls:{expanded:!0}},argTypes:{}},description=react.createElement(react.Fragment,null,react.createElement("span",null,"Under progress")),CodeAndAccessibility=(args=>react.createElement(react.Fragment,null,react.createElement(utils.Tx,{importStatement:"import { GridColumn, GridContainer } from '@tiger-analytics/react/grid';"}),react.createElement(grid.E,{showSideMargin:!1,style:{height:"200px"}},react.createElement(grid.H,null,react.createElement(SideNavBar,{navItems:[{name:"theme",items:[{name:"colors",onClick:()=>{},selected:!1}],hasGroupChildren:!0,isExpanded:!1,selected:!1},{name:"features",selected:!1,onClick:()=>{}},{name:"charts",selected:!1,onClick:()=>{}}]}))),react.createElement(utils.ur,{description}))).bind({});CodeAndAccessibility.args={sm:6,md:12,lg:12};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:"args => {\n  const navItems: NavItem[] = [{\n    name: 'theme',\n    items: [{\n      name: 'colors',\n      onClick: () => {},\n      selected: false\n    }],\n    hasGroupChildren: true,\n    isExpanded: false,\n    selected: false\n  }, {\n    name: 'features',\n    selected: false,\n    onClick: () => {}\n  }, {\n    name: 'charts',\n    selected: false,\n    onClick: () => {}\n  }];\n  return <>\n      <ImportBlock importStatement={importStatement} />\n      <GridContainer showSideMargin={false} style={{\n      height: '200px'\n    }}>\n        <GridColumn>\n          <SideNavBar navItems={navItems} />\n        </GridColumn>\n      </GridContainer>\n      <DescriptionBlock description={description} />\n    </>;\n}",...CodeAndAccessibility.parameters?.docs?.source}}}},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bO:()=>CommentBlock,ur:()=>DescriptionBlock,Tx:()=>ImportBlock});var grid=__webpack_require__("../../packages/react/dist/grid/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const ImportBlockDiv=styled_components_browser_esm.Ay.div`
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
//# sourceMappingURL=sideNavBar-SideNavBar-stories.0c063155.iframe.bundle.js.map