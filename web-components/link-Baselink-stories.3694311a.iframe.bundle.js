"use strict";(self.webpackChunkstorybook_ui=self.webpackChunkstorybook_ui||[]).push([[803],{"./src/link/Baselink.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lit/index.js"),_tiger_analytics_ui_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/ui/dist/link/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Link/ta-link",component:"ta-link",parameters:{controls:{expanded:!0}},argTypes:{id:{description:"Mandatory - unique id for testing",table:{defaultValue:{summary:""}},control:"text"},variant:{options:[_tiger_analytics_ui_link__WEBPACK_IMPORTED_MODULE_1__.W9.Primary,_tiger_analytics_ui_link__WEBPACK_IMPORTED_MODULE_1__.W9.Secondary,_tiger_analytics_ui_link__WEBPACK_IMPORTED_MODULE_1__.W9.Destruct],description:"Different styles of the link",table:{defaultValue:{summary:_tiger_analytics_ui_link__WEBPACK_IMPORTED_MODULE_1__.W9.Primary}},control:{type:"select"}},size:{options:[_tiger_analytics_ui_link__WEBPACK_IMPORTED_MODULE_1__.sP.Default,_tiger_analytics_ui_link__WEBPACK_IMPORTED_MODULE_1__.sP.Small],description:"Size of the link",table:{defaultValue:{summary:_tiger_analytics_ui_link__WEBPACK_IMPORTED_MODULE_1__.sP.Default}},control:{type:"select"}},disabled:{description:"Enable or disable the link",table:{defaultValue:{summary:"false"}},control:"boolean"},href:{description:"URL the link points to",table:{defaultValue:{summary:"#"}},control:"text"},openInNewTab:{description:"Set this to true to open the link in a new tab",table:{defaultValue:{summary:"false"}},control:"boolean"},focus:{description:"Focuses the link",table:{category:"Methods"},control:!1}}},CodeAndAccessibility=(args=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
  <ta-link
    id="${args.id}"
    .variant="${args.variant}"
    .size="${args.size}"
    ?disabled="${args.disabled}"
    href="${args.href}"
    .openInNewTab="${args.openInNewTab}"
    >Link</ta-link
  >
  <ta-grid-container .showSideMargin="${!1}">
    <ta-grid-column
      ><div class="story-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></ta-grid-column
    >
    <ta-grid-column><div class="story-description">${"The ta-link component is a flexible link element designed for various UI needs, supporting different variants and sizes. It can be styled as primary, secondary, or default, and is customizable in terms of size. The link can also be disabled for specific use cases."}</div></ta-grid-column>
  </ta-grid-container>
`).bind({});CodeAndAccessibility.args={id:"test-link",variant:_tiger_analytics_ui_link__WEBPACK_IMPORTED_MODULE_1__.W9.Primary,size:_tiger_analytics_ui_link__WEBPACK_IMPORTED_MODULE_1__.sP.Default,disabled:!1,href:"https://google.com",openInNewTab:!0};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:'args => html`\n  <ta-link\n    id="${args.id}"\n    .variant="${args.variant}"\n    .size="${args.size}"\n    ?disabled="${args.disabled}"\n    href="${args.href}"\n    .openInNewTab="${args.openInNewTab}"\n    >Link</ta-link\n  >\n  <ta-grid-container .showSideMargin="${false}">\n    <ta-grid-column\n      ><div class="story-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></ta-grid-column\n    >\n    <ta-grid-column><div class="story-description">${description}</div></ta-grid-column>\n  </ta-grid-container>\n`',...CodeAndAccessibility.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=link-Baselink-stories.3694311a.iframe.bundle.js.map