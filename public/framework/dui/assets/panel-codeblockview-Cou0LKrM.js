import{j as e,C as o}from"./dui-lib-D_5u_TrP.js";import{E as t,D as r,F as p,P as h,b as a}from"./panel-badgechip-qgj4nFkf.js";const n=`{
  "user": {
    "id": 42,
    "name": "Jane Doe",
    "email": "jane@example.com",
    "roles": ["admin", "editor"],
    "active": true
  },
  "meta": {
    "requestId": "req_abc123",
    "timestamp": "2024-01-15T10:30:00Z"
  }
}`,g=`server:
  host: api.example.com
  port: 8443
  tls:
    enabled: true
    cert: /etc/ssl/certs/server.crt
    key:  /etc/ssl/private/server.key

database:
  url: postgres://user:pass@db:5432/myapp
  pool_size: 10
  max_overflow: 20`,c=`query GetUserProfile($userId: ID!, $includeOrders: Boolean = false) {
  user(id: $userId) {
    id
    name
    email
    avatar
    orders @include(if: $includeOrders) {
      id
      total
      status
      createdAt
    }
  }
}`,u=`curl -X POST https://api.example.com/v1/users \\
  -H 'Content-Type: application/json' \\
  -H 'Authorization: Bearer eyJhbGciOiJSUzI1NiJ9...' \\
  -d '{
    "name": "Jane Doe",
    "email": "jane@example.com",
    "role": "editor"
  }'`,m="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";function x(){return e.jsxs("div",{children:[e.jsx(t,{title:"JSON Response Block",description:'language="json" · showCopyButton (default) · syntax-highlighted',code:'<CodeBlockView code={jsonResponse} language="json" />',children:e.jsx(o,{code:n,language:"json"})}),e.jsx(t,{title:"YAML Config Example",description:'language="yaml" · common for environment config or OpenAPI specs',code:'<CodeBlockView code={yamlConfig} language="yaml" maxHeight="220px" />',children:e.jsx(o,{code:g,language:"yaml",maxHeight:"220px"})}),e.jsx(t,{title:"GraphQL Query Block",description:'language="graphql" via auto-highlight · operations with variables and directives',code:'<CodeBlockView code={gqlQuery} language="graphql" maxHeight="220px" />',children:e.jsx(o,{code:c,maxHeight:"220px"})}),e.jsx(t,{title:"cURL Command Block",description:'language="bash" · copyable cURL snippet generated from request',code:'<CodeBlockView code={curlCommand} language="bash" />',children:e.jsx(o,{code:u,language:"bash"})}),e.jsx(t,{title:"Line Numbers Enabled",description:"showLineNumbers=true — useful for long responses where line references matter",code:'<CodeBlockView code={jsonResponse} language="json" showLineNumbers />',children:e.jsx(o,{code:n,language:"json",showLineNumbers:!0,maxHeight:"260px"})}),e.jsx(t,{title:"Small Inline Code Block (no copy)",description:"showCopyButton=false · compact token / key display",code:'<CodeBlockView code={token} showCopyButton={false} maxHeight="60px" />',children:e.jsx(o,{code:m,showCopyButton:!1,maxHeight:"60px",accentColor:"var(--color-protocol-rest)"})}),e.jsx(t,{title:"Protocol-Accented Block",description:"accentColor overrides the default header border/accent to match a protocol theme",code:`<CodeBlockView code={query} language="graphql"
  accentColor="var(--color-protocol-graphql)" />`,children:e.jsx(o,{code:c,language:"graphql",accentColor:"var(--color-protocol-graphql)",maxHeight:"180px"})})]})}const j=Object.freeze(Object.defineProperty({__proto__:null,CodeBlockViewExamples:x},Symbol.toStringTag,{value:"Module"}));function f(){return e.jsxs("div",{style:{maxWidth:860},children:[e.jsx(r,{title:"Features",children:e.jsx(p,{features:[{label:"Syntax highlighting via highlight.js",color:"var(--color-primary)"},{label:"Auto language detection (highlightAuto)",color:"var(--color-success)"},{label:"Copy-to-clipboard button with feedback",color:"var(--color-info)"},{label:"Optional line numbers",color:"var(--color-warning)"},{label:"Configurable maxHeight + scroll overflow",color:"#a855f7"},{label:"Language label in header bar",color:"#ec4899"},{label:"Custom accent color for copy button hover",color:"#14b8a6"},{label:"11 pre-registered languages",color:"#f97316"}]})}),e.jsx(r,{title:"Supported languages",children:e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:["javascript (js, jsx)","typescript (ts, tsx)","json","xml (html)","css","bash (shell, sh)","yaml (yml)","python (py)"].map((s,d)=>{const l=["var(--color-primary)","var(--color-success)","var(--color-info)","var(--color-warning)","#a855f7","#ec4899","#14b8a6","#f97316"],i=l[d%l.length];return e.jsx("span",{style:{padding:"3px 10px",borderRadius:99,fontSize:11,fontWeight:600,background:`color-mix(in srgb, ${i} 14%, transparent)`,color:i,border:`1px solid color-mix(in srgb, ${i} 30%, transparent)`},children:s},s)})})}),e.jsx(r,{title:"Props",children:e.jsx(h,{props:[{name:"code",type:"string",required:!0,description:"The source code string to display."},{name:"language",type:"string",description:'Language identifier for syntax highlighting (e.g. "json", "typescript"). When omitted, highlightAuto is used.'},{name:"showCopyButton",type:"boolean",default:"true",description:"When true, shows a Copy button in the top bar that copies the code to the clipboard."},{name:"showLineNumbers",type:"boolean",default:"false",description:"When true, renders line numbers to the left of each code line."},{name:"maxHeight",type:"string",default:"'300px'",description:"CSS max-height for the scrollable code area. The block scrolls vertically when content exceeds this height."},{name:"accentColor",type:"string",description:"Color used for the copy button success state and hover. Defaults to var(--color-primary)."},{name:"className",type:"string",description:"Additional class names for the outer container div."},{name:"style",type:"CSSProperties",description:"Inline styles for the outer container div (merged before overflow:hidden)."}]})}),e.jsx(a,{type:"info",children:"When showLineNumbers=true, each line is highlighted individually using hljs.highlight(line, { language }). When false (default), the entire code string is highlighted in one pass, which is faster for large files."}),e.jsx(a,{type:"tip",children:'The copy button shows a green "Copied" state with a check icon for 1500ms after a successful copy, then reverts. The success color is var(--color-success) regardless of accentColor.'}),e.jsx(a,{type:"warning",children:"When language is set but not registered with highlight.js, the component falls back to highlightAuto on that specific code string. Unknown language values are silently ignored."}),e.jsx(r,{title:"DUI Sizing & Theming",description:"CodeBlockView does not read size, width, color, or borderRadius from the DuiProvider context — it is not part of the sized-component system and has no size prop to fall back to a provider default.",children:e.jsxs(a,{type:"info",children:["CodeBlockView is unaffected by ",e.jsx("code",{children:"<DuiProvider>"})," size/color context. Style it directly via its own props (and CSS variables where documented above) rather than expecting provider-level sizing to apply."]})})]})}const v=Object.freeze(Object.defineProperty({__proto__:null,CodeBlockViewDocs:f},Symbol.toStringTag,{value:"Module"}));export{j as C,v as a};
