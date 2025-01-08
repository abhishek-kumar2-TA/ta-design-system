"use strict";(self.webpackChunkstorybook_ui=self.webpackChunkstorybook_ui||[]).push([[893],{"./src/overlay/modal.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _tiger_analytics_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/ui/dist/index.js"),lit__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/lit/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Overlay/ta-modal",component:"ta-modal",parameters:{controls:{expanded:!0}},argTypes:{id:{description:"Mandatory - unique id for testing",table:{defaultValue:{summary:""}},control:"text"},visible:{description:"Controls the visibility of modal",table:{defaultValue:{summary:"false"}},control:!1},title:{description:"Title for the modal",table:{defaultValue:{summary:""}},control:"text"},onClose:{description:"Task to perform on close of the modal. Developers should use this to focus on the button which activated the modal for accessibility",table:{category:"Custom Events"},control:!1}}},CodeAndAccessibility=(args=>{const toggleOverlayVisibility=()=>{const overlay=document.querySelector("ta-modal"),isVisible=overlay?.hasAttribute("visible");if(isVisible){overlay.removeAttribute("visible");const modalActivateButton=document.getElementById("activate-modal");modalActivateButton&&modalActivateButton.focus()}else overlay.setAttribute("visible","true")};return lit__WEBPACK_IMPORTED_MODULE_1__.qy`
    <ta-grid-container .showSideMargin="${!1}">
      <ta-grid-column style="gap: 10px">
        <ta-button
          id="activate-modal"
          @click="${toggleOverlayVisibility}"
          variant="${_tiger_analytics_ui__WEBPACK_IMPORTED_MODULE_0__.Ak.Secondary}"
          >Show Overlay</ta-button
        >
        <ta-modal
          id="${args.id}"
          .visible="${args.visible}"
          .title="${args.title}"
          @onClose="${toggleOverlayVisibility}">
          <p>
            This is some content inside the overlay. Click the close button below to dismiss it.
          </p>
          <ta-button id="overlay-demo-button-1" @click="${()=>window.alert("Dummy button")}"
            >Demo button 1</ta-button
          >
        </ta-modal>
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
        <div class="story-description">${"The ta-modal component is used to display overlay dialogs for important content or actions, such as forms, notifications, or confirmations. It is ideal for scenarios where you need to focus the user's attention on a task while temporarily blocking interaction with the rest of the page. Use it when you want to present modal windows that require user interaction before proceeding."}</div>
      </ta-grid-column>
    </ta-grid-container>
  `}).bind({});CodeAndAccessibility.args={id:"test-modal",visible:!1,title:"Modal title"};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:'args => {\n  const toggleOverlayVisibility = () => {\n    const overlay = document.querySelector(\'ta-modal\') as HTMLElement;\n    const isVisible = overlay?.hasAttribute(\'visible\');\n    if (isVisible) {\n      overlay.removeAttribute(\'visible\');\n      const modalActivateButton = document.getElementById(\'activate-modal\');\n      if (modalActivateButton) {\n        modalActivateButton.focus();\n      }\n    } else {\n      overlay.setAttribute(\'visible\', \'true\');\n    }\n  };\n  return html`\n    <ta-grid-container .showSideMargin="${false}">\n      <ta-grid-column style="gap: 10px">\n        <ta-button\n          id="activate-modal"\n          @click="${toggleOverlayVisibility}"\n          variant="${ButtonVariant.Secondary}"\n          >Show Overlay</ta-button\n        >\n        <ta-modal\n          id="${args.id}"\n          .visible="${args.visible}"\n          .title="${args.title}"\n          @onClose="${toggleOverlayVisibility}">\n          <p>\n            This is some content inside the overlay. Click the close button below to dismiss it.\n          </p>\n          <ta-button id="overlay-demo-button-1" @click="${() => window.alert(\'Dummy button\')}"\n            >Demo button 1</ta-button\n          >\n        </ta-modal>\n        <ta-button\n          id="overlay-demo-button-1"\n          @click="${() => window.alert(\'Demo button 1\')}"\n          variant="${ButtonVariant.Destruct}"\n          >Demo button 1</ta-button\n        >\n      </ta-grid-column>\n      <ta-grid-column>\n        <div class="story-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>\n      </ta-grid-column>\n      <ta-grid-column>\n        <div class="story-description">${description}</div>\n      </ta-grid-column>\n    </ta-grid-container>\n  `;\n}',...CodeAndAccessibility.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=overlay-modal-stories.47180d9d.iframe.bundle.js.map