"use strict";(self.webpackChunkstorybook_react19=self.webpackChunkstorybook_react19||[]).push([[859],{"./src/link/BaseLink.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BaseLink_stories});var react=__webpack_require__("../../node_modules/react/index.js"),dist_link=__webpack_require__("../../packages/ui/dist/link/index.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Link=e=>{const n={id:e.id};return e.variant&&(n.variant=e.variant),e.size&&(n.size=e.size),e.disabled&&(n.disabled=e.disabled),e.href&&(n.href=e.href),e.openInNewTab&&(n.openInNewTab=e.openInNewTab),(0,jsx_runtime.jsx)("ta-Link",{...n,children:e.children})};var utils=__webpack_require__("./src/utils/index.ts");const BaseLink_stories={title:"Link",component:Link,parameters:{controls:{expanded:!0}},argTypes:{id:{description:"Mandatory - unique id for testing",table:{defaultValue:{summary:""}},control:"text"},variant:{options:[dist_link.W9.Primary,dist_link.W9.Secondary,dist_link.W9.Destruct],description:"Different styles of the link",table:{defaultValue:{summary:dist_link.W9.Primary}},control:{type:"select"}},size:{options:[dist_link.sP.Default,dist_link.sP.Small],description:"Size of the link",table:{defaultValue:{summary:dist_link.sP.Default}},control:{type:"select"}},disabled:{description:"Enable or disable the link",table:{defaultValue:{summary:"false"}},control:"boolean"},href:{description:"URL the link points to",table:{defaultValue:{summary:"#"}},control:"text"},openInNewTab:{description:"Set this to true to open the link in a new tab",table:{defaultValue:{summary:"false"}},control:"boolean"},focus:{description:"Focuses the link",table:{category:"Methods"},control:!1}}},CodeAndAccessibility=(args=>react.createElement(react.Fragment,null,react.createElement(utils.Tx,{importStatement:"import { Link } from '@tiger-analytics/react/link';"}),react.createElement(Link,args,"Link"),react.createElement(utils.ur,{description:"The Link component is a flexible link element designed for various UI needs, supporting different variants and sizes. It can be styled as primary, secondary, or default, and is customizable in terms of size. The link can also be disabled for specific use cases."}))).bind({});CodeAndAccessibility.args={id:"test-link",variant:dist_link.W9.Primary,size:dist_link.sP.Default,disabled:!1,href:"https://google.com",openInNewTab:!1};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:"(args: LinkProps) => {\n  return <>\n      <ImportBlock importStatement={`import { Link } from '@tiger-analytics/react/link';`} />\n      <Link {...args}>Link</Link>\n      <DescriptionBlock description={description} />\n    </>;\n}",...CodeAndAccessibility.parameters?.docs?.source}}}},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bO:()=>CommentBlock,ur:()=>DescriptionBlock,Tx:()=>ImportBlock});var grid=__webpack_require__("../../packages/react/dist/grid/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const ImportBlockDiv=styled_components_browser_esm.Ay.div`
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
`,CommentBlock=({children})=>react.createElement(CommentContainer,null,children);CommentBlock.__docgenInfo={description:"",methods:[],displayName:"CommentBlock",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}}},"../../packages/react/dist/grid/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>GridColumn,E:()=>GridContainer});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const GridColumn=r=>{const s={};return r.sm&&(s.sm=r.sm),r.md&&(s.md=r.md),r.lg&&(s.lg=r.lg),r.style&&(s.style=r.style),(0,jsx_runtime.jsx)("ta-grid-column",{...s,children:r.children})},GridContainer=t=>{const r={};return t.showSideMargin&&(r.showSideMargin=t.showSideMargin),t.restrictHeightToMaxContent&&(r.restrictHeightToMaxContent=t.restrictHeightToMaxContent),t.style&&(r.style=t.style),(0,jsx_runtime.jsx)("ta-grid-container",{...r,children:t.children})}}}]);
//# sourceMappingURL=link-BaseLink-stories.d769637d.iframe.bundle.js.map