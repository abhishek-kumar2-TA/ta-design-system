"use strict";(self.webpackChunkstorybook_react19=self.webpackChunkstorybook_react19||[]).push([[156],{"./src/table/remote.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_tiger_analytics_react_grid__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/react/dist/grid/index.js"),_tiger_analytics_react_table__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/react/dist/table/index.js"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Table/Remote",component:_tiger_analytics_react_table__WEBPACK_IMPORTED_MODULE_2__.XI,parameters:{controls:{expanded:!0}},argTypes:{}},description=react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"This story simulates server-side pagination and sorting using a mock fetch function.")),fullData=Array.from({length:23},((_,index)=>({id:index+1,name:`User ${index+1}`,email:`user${index+1}@example.com`,age:20+index%10}))),columns=[{accessorKey:"name",header:"Name",enableSorting:!0},{accessorKey:"email",header:"Email",enableSorting:!1},{accessorKey:"age",header:"Age",enableSorting:!0}],mockFetchData=async url=>{const parsed=new URL(url,"http://localhost"),page=parseInt(parsed.searchParams.get("page")||"1",10)-1,pageSize=parseInt(parsed.searchParams.get("pageSize")||"10",10),sortBy=parsed.searchParams.getAll("sortBy"),sortDir=parsed.searchParams.getAll("sortDir"),sortedData=[...fullData];sortBy.length&&sortDir.length&&sortedData.sort(((a,b)=>{for(let i=0;i<sortBy.length;i++){const key=sortBy[i],direction=sortDir[i];if(a[key]<b[key])return"asc"===direction?-1:1;if(a[key]>b[key])return"asc"===direction?1:-1}return 0}));const sliced=sortedData.slice(page*pageSize,(page+1)*pageSize);return new Promise((resolve=>{setTimeout((()=>{resolve({data:sliced,totalRows:sortedData.length})}),300)}))},CodeAndAccessibility=(()=>{const[selectedRows,setSelectedRows]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),[filterState]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),tableProps=(0,_tiger_analytics_react_table__WEBPACK_IMPORTED_MODULE_2__.gk)({baseUrl:"/users",columns,pageSizes:[5,10],filterState,fetchData:mockFetchData,enableRowSelection:!0,onRowSelection:setSelectedRows,selectedRows});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_3__.Tx,{importStatement:"import { Table } from '@tiger-analytics/react/table';"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_grid__WEBPACK_IMPORTED_MODULE_1__.E,{showSideMargin:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_grid__WEBPACK_IMPORTED_MODULE_1__.H,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_table__WEBPACK_IMPORTED_MODULE_2__.XI,tableProps))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_3__.ur,{description}))}).bind({});CodeAndAccessibility.args={};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:"() => {\n  const [selectedRows, setSelectedRows] = useState<RowSelectionState>({});\n  const [filterState] = useState<{\n    key: string;\n    value: any;\n  }[]>([]);\n  const tableProps = useRemoteTable<User>({\n    baseUrl: '/users',\n    columns,\n    pageSizes: [5, 10],\n    filterState,\n    fetchData: mockFetchData,\n    enableRowSelection: true,\n    onRowSelection: setSelectedRows,\n    selectedRows\n  });\n  return <>\n      <ImportBlock importStatement={importStatement} />\n      <GridContainer showSideMargin={false}>\n        <GridColumn>\n          <Table {...tableProps} />\n        </GridColumn>\n      </GridContainer>\n      <DescriptionBlock description={description} />\n    </>;\n}",...CodeAndAccessibility.parameters?.docs?.source}}}},"../../packages/react/dist/button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$n:()=>Button,rl:()=>ButtonFillStyle,Mp:()=>ButtonSize,Ak:()=>ButtonVariant});var ButtonVariant,t,ButtonSize,ButtonFillStyle,styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("../../packages/react/dist/theme/utils/index.js");(t=ButtonVariant||(ButtonVariant={})).Primary="primary",t.Secondary="secondary",t.Destruct="destruct",function(t){t.Small="small",t.Default="default"}(ButtonSize||(ButtonSize={})),function(t){t.Filled="filled",t.Outline="outline",t.None="none"}(ButtonFillStyle||(ButtonFillStyle={}));const Button=styled_components_browser_esm.Ay.button`
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
`},"../../packages/react/dist/table/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>Table,CQ:()=>useInMemoryTable,gk:()=>useRemoteTable});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@tanstack/table-core/build/lib/index.mjs"),build_lib=__webpack_require__("../../node_modules/@tanstack/react-table/build/lib/index.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),formFields=__webpack_require__("../../packages/react/dist/formFields/index.js");const useInMemoryTable=({data:e,columns:t,initialSorting:o=[],initialColumnFilters:a=[],enableRowSelection:l=!1,selectedRows:i={},onRowSelection:n=()=>{},pageSizes:g=[]})=>{const[s,d]=(0,react.useState)(o),[r,c]=(0,react.useState)(a),[S,R]=(0,react.useState)({pageIndex:0,pageSize:g[0]??10}),w=l?[{id:"select",header:({table:e})=>(0,jsx_runtime.jsx)(formFields.Sc,{id:"table-header-select",size:formFields.S9.Small,checked:e.getIsAllPageRowsSelected(),onChange:e.getToggleAllPageRowsSelectedHandler()}),cell:({row:e})=>(0,jsx_runtime.jsx)("div",{className:"px-1",children:(0,jsx_runtime.jsx)(formFields.Sc,{id:e.id,size:formFields.S9.Small,checked:e.getIsSelected(),disabled:!e.getCanSelect(),onChange:e.getToggleSelectedHandler()})})},...t]:t,m={data:e,columns:w,state:{sorting:s,columnFilters:r,pagination:S},onSortingChange:d,onColumnFiltersChange:c,onPaginationChange:R,getCoreRowModel:(0,lib.HT)(),getSortedRowModel:(0,lib.h5)(),getFilteredRowModel:(0,lib.hM)(),getPaginationRowModel:(0,lib.kW)()};return l&&(m.enableRowSelection=l,m.onRowSelectionChange=n,m.state&&(m.state.rowSelection=i)),{table:(0,build_lib.N4)(m),isLoading:!1,pageCount:Math.ceil(e.length/S.pageSize),pagination:{currentPage:S.pageIndex,currentPageSize:S.pageSize,pageSizes:g,onPageSizeSelection:e=>{const t=parseInt(e,10);if(!isNaN(t)){const e={...S};e.pageSize=t,R(e)}}},isRemote:!1}};var dist_button=__webpack_require__("../../packages/react/dist/button/index.js"),icons=__webpack_require__("../../packages/react/dist/icons/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 20px;
  font-size: 1rem;
`,SortIconContainer=styled_components_browser_esm.Ay.span`
  width: 1rem;
  height: 1rem;
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: ${({theme:e,isHidden:t})=>t?"none":`1px solid ${e.colors.secondaryBackground.active}`};
  background: ${({theme:e,isHidden:t})=>t?"transparent":`${e.colors.background.base}`};

  svg {
    width: 0.8rem;
    height: 0.8rem;
  }
`,TableWrapper=styled_components_browser_esm.Ay.div`
  width: 100%;
  overflow: auto;
`,StyledTable=styled_components_browser_esm.Ay.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 0.75rem;
    text-align: left;
  }

  th {
    background-color: ${({theme:e})=>e.colors.secondaryBackground.base};
    font-weight: bold;
    user-select: none;

    &:first-child {
      border-top-left-radius: ${({theme:e})=>e.global.componentRadius};
    }

    &:last-child {
      border-top-right-radius: ${({theme:e})=>e.global.componentRadius};
    }
  }

  tbody {
    tr {
      border-top: 2px solid ${({theme:e})=>e.colors.secondaryBackground.active};
    }
  }
`,HeaderCell=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`,PaginationControls=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 1rem;
`,Loading=styled_components_browser_esm.Ay.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.25rem;
`,Table=e=>{const{table:n,isLoading:o,pagination:t,isRemote:l,pageCount:r}=e,i=t.currentPage,a=0===i,s=i+1>=r;return(0,jsx_runtime.jsxs)(Container,{children:[o?(0,jsx_runtime.jsx)(Loading,{children:"Loading..."}):(0,jsx_runtime.jsx)(TableWrapper,{children:(0,jsx_runtime.jsxs)(StyledTable,{children:[(0,jsx_runtime.jsx)("thead",{children:n.getHeaderGroups().map((e=>(0,jsx_runtime.jsx)("tr",{children:e.headers.map((e=>{const n=e.column.getCanSort();return(0,jsx_runtime.jsx)("th",{onClick:n?e.column.getToggleSortingHandler():void 0,style:{cursor:n?"pointer":"default"},children:e.isPlaceholder?null:(0,jsx_runtime.jsxs)(HeaderCell,{children:[(0,build_lib.Kv)(e.column.columnDef.header,e.getContext()),n&&({asc:(0,jsx_runtime.jsx)(SortIconContainer,{children:(0,jsx_runtime.jsx)(icons.UpArrowIcon,{})}),desc:(0,jsx_runtime.jsx)(SortIconContainer,{children:(0,jsx_runtime.jsx)(icons.DownArrowIcon,{})})}[e.column.getIsSorted()]??(0,jsx_runtime.jsx)(SortIconContainer,{isHidden:!0}))]})},e.id)}))},e.id)))}),(0,jsx_runtime.jsx)("tbody",{children:n.getRowModel().rows.map((e=>(0,jsx_runtime.jsx)("tr",{children:e.getVisibleCells().map((e=>(0,jsx_runtime.jsx)("td",{children:(0,build_lib.Kv)(e.column.columnDef.cell,e.getContext())},e.id)))},e.id)))})]})}),(0,jsx_runtime.jsxs)(PaginationControls,{children:[(0,jsx_runtime.jsx)(dist_button.$n,{id:"previous-table-page",size:dist_button.Mp.Small,fill:dist_button.rl.None,onClick:()=>{l?!a&&t.onPageIndexSelection&&t.onPageIndexSelection(i-1):n.previousPage()},disabled:l?a:!n.getCanPreviousPage(),iconOnly:!0,"aria-label":"go to previous page",children:(0,jsx_runtime.jsx)(icons.LessThanIcon,{})}),(0,jsx_runtime.jsxs)("span",{children:["Page ",i+1," of ",r]}),(0,jsx_runtime.jsx)(dist_button.$n,{id:"next-table-page",size:dist_button.Mp.Small,fill:dist_button.rl.None,onClick:()=>{l?!s&&t.onPageIndexSelection&&t.onPageIndexSelection(i+1):n.nextPage()},disabled:l?s:!n.getCanNextPage(),iconOnly:!0,"aria-label":"go to next page",children:(0,jsx_runtime.jsx)(icons.GreaterThanIcon,{})})]})]})},useRemoteTable=({baseUrl:e,columns:t,fetchData:a,generateFetchUrl:o,filterState:n=[],initialSorting:i=[],enableRowSelection:s=!1,selectedRows:l={},onRowSelection:c=()=>{},pageSizes:r=[]})=>{const[g,d]=(0,react.useState)(i),[S,p]=(0,react.useState)({pageIndex:0,pageSize:r[0]??10}),[u,h]=(0,react.useState)([]),[m,x]=(0,react.useState)(0),[z,R]=(0,react.useState)(!1);(0,react.useEffect)((()=>{(async()=>{const t=o?e+o(S,n,g):(()=>{const t=new URLSearchParams;return t.append("page",(S.pageIndex+1).toString()),t.append("pageSize",S.pageSize.toString()),g.forEach((e=>{t.append("sortBy",e.id),t.append("sortOrder",e.desc?"desc":"asc")})),n.forEach((e=>{void 0!==e.value&&""!==e.value&&t.append(e.key,String(e.value))})),`${e}?${t.toString()}`})();R(!0);const i=await a(t);h(i.data),x(i.totalRows),R(!1)})()}),[S.pageIndex,S.pageSize,JSON.stringify(g),JSON.stringify(n),e]);const f=s?[{id:"select",header:({table:e})=>(0,jsx_runtime.jsx)(formFields.Sc,{id:"table-header-select",size:formFields.S9.Small,checked:e.getIsAllPageRowsSelected(),onChange:e.getToggleAllPageRowsSelectedHandler()}),cell:({row:e})=>(0,jsx_runtime.jsx)("div",{className:"px-1",children:(0,jsx_runtime.jsx)(formFields.Sc,{id:e.id,size:formFields.S9.Small,checked:e.getIsSelected(),disabled:!e.getCanSelect(),onChange:e.getToggleSelectedHandler()})})},...t]:t,w={data:u,columns:f,state:{sorting:g,pagination:S},onSortingChange:d,getCoreRowModel:(0,lib.HT)()};return s&&(w.enableRowSelection=s,w.onRowSelectionChange=c,w.state={...w.state,rowSelection:l}),{table:(0,build_lib.N4)(w),isLoading:z,pageCount:Math.ceil(m/S.pageSize),pagination:{currentPage:S.pageIndex,currentPageSize:S.pageSize,pageSizes:r,onPageSizeSelection:e=>{const t=parseInt(e,10);isNaN(t)||p({pageIndex:0,pageSize:t})},onPageIndexSelection:e=>{const t={...S};t.pageIndex=e,p(t)}},isRemote:!0}}}}]);
//# sourceMappingURL=table-remote-stories.a79e2901.iframe.bundle.js.map