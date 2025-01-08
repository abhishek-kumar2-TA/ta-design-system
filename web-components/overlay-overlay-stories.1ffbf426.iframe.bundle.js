"use strict";(self.webpackChunkstorybook_ui=self.webpackChunkstorybook_ui||[]).push([[126],{"./src/overlay/overlay.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _tiger_analytics_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/ui/dist/index.js"),lit__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/lit/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Overlay/ta-overlay",component:"ta-overlay",parameters:{controls:{expanded:!0}},argTypes:{visible:{description:"Controls the visibility of the overlay",table:{defaultValue:{summary:"false"}},control:!1},containerId:{description:"id of the container to trap the focus within.",table:{defaultValue:{summary:""}},control:!1},overlayContentAlign:{options:[_tiger_analytics_ui__WEBPACK_IMPORTED_MODULE_0__.Lf.TopLeft,_tiger_analytics_ui__WEBPACK_IMPORTED_MODULE_0__.Lf.TopCenter,_tiger_analytics_ui__WEBPACK_IMPORTED_MODULE_0__.Lf.TopRight,_tiger_analytics_ui__WEBPACK_IMPORTED_MODULE_0__.Lf.MiddleLeft,_tiger_analytics_ui__WEBPACK_IMPORTED_MODULE_0__.Lf.MiddleCenter,_tiger_analytics_ui__WEBPACK_IMPORTED_MODULE_0__.Lf.MiddleRight,_tiger_analytics_ui__WEBPACK_IMPORTED_MODULE_0__.Lf.BottomLeft,_tiger_analytics_ui__WEBPACK_IMPORTED_MODULE_0__.Lf.BottomCenter,_tiger_analytics_ui__WEBPACK_IMPORTED_MODULE_0__.Lf.BottomRight],description:"Alignment of the overlay content",table:{defaultValue:{summary:_tiger_analytics_ui__WEBPACK_IMPORTED_MODULE_0__.Lf.MiddleCenter}},control:{type:"select"}},"on-active-focus":{description:"Event to focus the first actionable item on overlay activation",table:{category:"Custom Events"},control:!1},"on-close":{description:"Event to perform task on overlay deactivation",table:{category:"Custom Events"},control:!1}}},CodeAndAccessibility=(args=>{const toggleOverlayVisibility=()=>{const overlay=document.querySelector("ta-overlay"),isVisible=overlay?.hasAttribute("visible");isVisible?overlay.removeAttribute("visible"):overlay.setAttribute("visible","true")};return lit__WEBPACK_IMPORTED_MODULE_1__.qy`
    <ta-grid-container .showSideMargin="${!1}">
      <ta-grid-column style="gap: 10px">
        <ta-button
          id="activate-overlay"
          @click="${toggleOverlayVisibility}"
          variant="${_tiger_analytics_ui__WEBPACK_IMPORTED_MODULE_0__.Ak.Secondary}"
          >Show Overlay</ta-button
        >
        <ta-overlay
          id="test-overlay"
          .visible="${args.visible}"
          .overlayContentAlign="${args.overlayContentAlign}"
          @onActiveFocus="${()=>{const buttonComponent=document.getElementById("overlay-close");buttonComponent&&buttonComponent.focus()}}"
          @onClose="${()=>{const buttonComponent=document.getElementById("activate-overlay");buttonComponent&&buttonComponent.focus()}}">
          <div
            style="background: white; padding: 16px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);">
            <h2>Overlay Content</h2>
            <p>
              This is some content inside the overlay. Click the close button below to dismiss it.
            </p>
            <ta-button
              id="overlay-close"
              @click="${toggleOverlayVisibility}"
              variant="${_tiger_analytics_ui__WEBPACK_IMPORTED_MODULE_0__.Ak.Secondary}"
              >Close Overlay</ta-button
            >
            <ta-button id="overlay-dummy-button-1" @click="${()=>window.alert("Dummy button 1")}"
              >Dummy button 1</ta-button
            >
            <ta-button
              id="overlay-dummy-button-2"
              @click="${()=>window.alert("Dummy button 2")}"
              variant="${_tiger_analytics_ui__WEBPACK_IMPORTED_MODULE_0__.Ak.Destruct}"
              >Dummy button 2</ta-button
            >
          </div>
        </ta-overlay>
        <ta-button
          id="overlay-demo-button-1"
          @click="${()=>window.alert("Demo button 1")}"
          variant="${_tiger_analytics_ui__WEBPACK_IMPORTED_MODULE_0__.Ak.Destruct}"
          >Demo button 1</ta-button
        >
      </ta-grid-column>
      <ta-grid-column>
        <div class="story-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
      </ta-grid-column>
      <ta-grid-column>
        <div class="story-description">${"The ta-overlay component is the base for creating overlay-type components like modals. It provides a content slot and focus management for accessibility. Before creating a new component with ta-overlay, please check the components list for any existing overlay components, such as modals, that may suit your needs."}</div>
      </ta-grid-column>
    </ta-grid-container>
  `}).bind({});CodeAndAccessibility.args={visible:!1,overlayContentAlign:_tiger_analytics_ui__WEBPACK_IMPORTED_MODULE_0__.Lf.MiddleCenter};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:'args => {\n  // Create a function to toggle the visibility of the overlay\n  const toggleOverlayVisibility = () => {\n    const overlay = document.querySelector(\'ta-overlay\') as HTMLElement;\n    const isVisible = overlay?.hasAttribute(\'visible\');\n    if (isVisible) {\n      overlay.removeAttribute(\'visible\');\n    } else {\n      overlay.setAttribute(\'visible\', \'true\');\n    }\n  };\n  const onActiveFocusHandler = () => {\n    const buttonComponent = document.getElementById(\'overlay-close\');\n    if (buttonComponent) {\n      buttonComponent.focus();\n    }\n  };\n  const onCloseHandler = () => {\n    const buttonComponent = document.getElementById(\'activate-overlay\');\n    if (buttonComponent) {\n      buttonComponent.focus();\n    }\n  };\n  return html`\n    <ta-grid-container .showSideMargin="${false}">\n      <ta-grid-column style="gap: 10px">\n        <ta-button\n          id="activate-overlay"\n          @click="${toggleOverlayVisibility}"\n          variant="${ButtonVariant.Secondary}"\n          >Show Overlay</ta-button\n        >\n        <ta-overlay\n          id="test-overlay"\n          .visible="${args.visible}"\n          .overlayContentAlign="${args.overlayContentAlign}"\n          @onActiveFocus="${onActiveFocusHandler}"\n          @onClose="${onCloseHandler}">\n          <div\n            style="background: white; padding: 16px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);">\n            <h2>Overlay Content</h2>\n            <p>\n              This is some content inside the overlay. Click the close button below to dismiss it.\n            </p>\n            <ta-button\n              id="overlay-close"\n              @click="${toggleOverlayVisibility}"\n              variant="${ButtonVariant.Secondary}"\n              >Close Overlay</ta-button\n            >\n            <ta-button id="overlay-dummy-button-1" @click="${() => window.alert(\'Dummy button 1\')}"\n              >Dummy button 1</ta-button\n            >\n            <ta-button\n              id="overlay-dummy-button-2"\n              @click="${() => window.alert(\'Dummy button 2\')}"\n              variant="${ButtonVariant.Destruct}"\n              >Dummy button 2</ta-button\n            >\n          </div>\n        </ta-overlay>\n        <ta-button\n          id="overlay-demo-button-1"\n          @click="${() => window.alert(\'Demo button 1\')}"\n          variant="${ButtonVariant.Destruct}"\n          >Demo button 1</ta-button\n        >\n      </ta-grid-column>\n      <ta-grid-column>\n        <div class="story-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>\n      </ta-grid-column>\n      <ta-grid-column>\n        <div class="story-description">${description}</div>\n      </ta-grid-column>\n    </ta-grid-container>\n  `;\n}',...CodeAndAccessibility.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=overlay-overlay-stories.1ffbf426.iframe.bundle.js.map