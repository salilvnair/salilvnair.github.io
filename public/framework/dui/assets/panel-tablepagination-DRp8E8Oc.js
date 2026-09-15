import{r as o,j as e,bS as a}from"./dui-lib-D_5u_TrP.js";import{E as t,D as r,F as l,P as b,b as s,S as y}from"./panel-badgechip-qgj4nFkf.js";function R(){const[p,c]=o.useState(1),[P,d]=o.useState(10),[n,i]=o.useState(1),[g,h]=o.useState(25),[u,w]=o.useState(1),[x,m]=o.useState(3);return e.jsxs("div",{children:[e.jsx(t,{title:"Default Pagination",description:"Standard footer with rows-per-page selector and page range",code:`const [page, setPage] = useState(1);
const [rowsPerPage, setRowsPerPage] = useState(10);

<TablePaginationView
  page={page}
  totalRows={247}
  rowsPerPage={rowsPerPage}
  onPageChange={setPage}
  onRowsPerPageChange={setRowsPerPage}
/>`,children:e.jsx(a,{page:p,totalRows:247,rowsPerPage:P,onPageChange:c,onRowsPerPageChange:d})}),e.jsxs(t,{title:"Request Log Table Footer (interactive)",description:"Paging through a large API request log — page and rowsPerPage both drive a real query in a full app",code:`const [page, setPage] = useState(1);
const [rowsPerPage, setRowsPerPage] = useState(25);

<TablePaginationView
  page={page}
  totalRows={3820}
  rowsPerPage={rowsPerPage}
  rowsPerPageOptions={[25, 50, 100]}
  onPageChange={setPage}
  onRowsPerPageChange={rpp => { setRowsPerPage(rpp); setPage(1); }}
/>`,children:[e.jsx(a,{page:n,totalRows:3820,rowsPerPage:g,rowsPerPageOptions:[25,50,100],onPageChange:i,onRowsPerPageChange:f=>{h(f),i(1)}}),e.jsxs("div",{style:{marginTop:8,fontSize:11,color:"var(--color-text-muted)"},children:["Showing page ",n," at ",g," rows/page of 3,820 total requests"]})]}),e.jsx(t,{title:"Custom Rows-Per-Page Options",description:"Override rowsPerPageOptions for a compact webhook delivery log",code:`<TablePaginationView
  page={page}
  totalRows={58}
  rowsPerPage={5}
  rowsPerPageOptions={[5, 10, 20]}
  onPageChange={setPage}
  onRowsPerPageChange={() => {}}
/>`,children:e.jsx(a,{page:x,totalRows:58,rowsPerPage:5,rowsPerPageOptions:[5,10,20],onPageChange:m,onRowsPerPageChange:()=>{},color:"var(--color-info)"})}),e.jsx(t,{title:"Compact Size for Dense Panels",description:"size='sm' reduces padding/font — good for a docked response inspector",code:`<TablePaginationView
  page={page}
  totalRows={94}
  rowsPerPage={10}
  size="sm"
  onPageChange={setPage}
  onRowsPerPageChange={() => {}}
/>`,children:e.jsx(a,{page:u,totalRows:94,rowsPerPage:10,size:"sm",onPageChange:w,onRowsPerPageChange:()=>{}})}),e.jsx(t,{title:"Empty Result Set",description:"totalRows=0 — the range collapses to 0–0 of 0 and paging is effectively disabled",code:`<TablePaginationView
  page={1}
  totalRows={0}
  rowsPerPage={10}
  onPageChange={() => {}}
  onRowsPerPageChange={() => {}}
/>`,children:e.jsx(a,{page:1,totalRows:0,rowsPerPage:10,onPageChange:()=>{},onRowsPerPageChange:()=>{}})})]})}const S=Object.freeze(Object.defineProperty({__proto__:null,TablePaginationViewExamples:R},Symbol.toStringTag,{value:"Module"}));function v(){return e.jsxs("div",{style:{maxWidth:860},children:[e.jsx(r,{title:"Features",children:e.jsx(l,{features:[{label:"Rows-per-page selector",color:"var(--color-primary)"},{label:"Page-number footer",color:"var(--color-success)"},{label:'Auto-computed "from–to of total" range',color:"var(--color-info)"},{label:"Configurable rowsPerPageOptions",color:"var(--color-warning)"},{label:"Built on PaginationView + SelectInputView",color:"#a855f7"},{label:"Rows-per-page + page footer layout",color:"#ec4899"}]})}),e.jsx(r,{title:"Props",children:e.jsx(b,{props:[{name:"page",type:"number",required:!0,description:"Current 1-indexed page number."},{name:"totalRows",type:"number",required:!0,description:"Total row count across all pages."},{name:"rowsPerPage",type:"number",required:!0,description:"Number of rows shown per page."},{name:"onPageChange",type:"(page: number) => void",required:!0,description:"Called when the user navigates to a different page."},{name:"onRowsPerPageChange",type:"(rowsPerPage: number) => void",required:!0,description:"Called when the user changes the rows-per-page selector. Consider resetting page to 1 in this handler."},{name:"rowsPerPageOptions",type:"number[]",default:"[10, 25, 50, 100]",description:"Options shown in the rows-per-page dropdown."},{name:"size",type:"DuiSize",default:"context",description:"Controls font size and padding density."},{name:"color",type:"string",description:"Accent color for the page control; defaults to var(--color-primary) via useTableBase."},{name:"className",type:"string",description:"Additional class names on the outer footer container."},{name:"style",type:"CSSProperties",description:"Inline style override on the outer footer container."}]})}),e.jsx(s,{type:"tip",children:"TablePaginationView does not slice your data itself — it is purely a controlled footer UI. Compute the visible slice in the parent using page and rowsPerPage (or forward them to a server-side query)."}),e.jsx(s,{type:"warning",children:"When onRowsPerPageChange fires, the current page number is not automatically reset. If page 5 no longer exists after switching to a larger page size, reset page to 1 in your handler."}),e.jsxs(r,{title:"DUI Sizing & Theming",description:"TablePaginationView reads its dimensions from the shared table category base hook (useTableBase). Omitting size or color on TablePaginationView falls back to the nearest <DuiProvider> context value, so a single provider-level change can restyle every table-category component at once.",children:[e.jsx(l,{features:[{label:"useTableBase",color:"var(--color-primary)"},{label:"Falls back to DuiProvider context",color:"var(--color-success)"},{label:"size / color",color:"var(--color-info)"}]}),e.jsx(y,{sizes:[{size:"xxs",height:"18px",font:"8px",desc:"header 10px"},{size:"xs",height:"22px",font:"9px",desc:"header 10px"},{size:"sm",height:"26px",font:"10px",desc:"header 9px"},{size:"md",height:"30px",font:"11px",desc:"header 9px"},{size:"lg",height:"36px",font:"12px",desc:"header 10px"},{size:"xl",height:"40px",font:"13px",desc:"header 10px"},{size:"xxl",height:"46px",font:"14px",desc:"header 10px"},{size:"xxxl",height:"54px",font:"16px",desc:"header 10px"}]}),e.jsxs(s,{type:"info",children:["These values come from the Table category tokens in ",e.jsx("code",{children:"DuiTokens.ts"}),". Set a local ",e.jsx("code",{children:"size"})," prop to override the provider default for this instance only, or change ",e.jsx("code",{children:'<DuiProvider size="...">'})," to restyle every table-category component in the tree."]})]})]})}const T=Object.freeze(Object.defineProperty({__proto__:null,TablePaginationViewDocs:v},Symbol.toStringTag,{value:"Module"}));export{S as T,T as a};
