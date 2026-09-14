import{r as d,j as e,H as o,J as L,K as O,N as I,O as A,Q as j,o as k,p as N,I as z,W as M,m as W,g as D}from"./dui-lib-BoPcLOzx.js";import{E as l,D as c,F as y,a as v,I as u,P as b,c as i,S as T}from"./panel-chipsview-DUXBy88l.js";const P=`{
  "userId": 42,
  "name": "Alice Wonderland",
  "role": "admin",
  "active": true,
  "tags": ["beta", "power-user"],
  "meta": { "joined": "2024-01-15", "requests": 1248 }
}`;function g({label:a,children:s,noPad:p,code:t}){const[x,f]=d.useState(!1);return e.jsxs("div",{style:{marginBottom:16,border:"1px solid var(--color-surface-border)",borderRadius:10,background:"var(--color-surface)",overflow:"hidden"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"7px 14px",background:"color-mix(in srgb, var(--color-surface-border) 30%, transparent)",borderBottom:"1px solid var(--color-surface-border)"},children:[e.jsx("span",{style:{fontSize:11,fontWeight:600,color:"var(--color-text-muted)"},children:a}),t&&e.jsx("button",{type:"button",onClick:()=>f(r=>!r),style:{fontSize:10,color:"var(--color-primary)",background:"none",border:"none",cursor:"pointer",padding:"2px 6px"},children:x?"Hide code":"Show code"})]}),x&&t&&e.jsx("pre",{style:{margin:0,padding:"10px 14px",fontSize:11,lineHeight:1.6,background:"var(--color-panel)",overflow:"auto",borderBottom:"1px solid var(--color-surface-border)"},children:e.jsx("code",{style:{color:"var(--color-text-secondary)",fontFamily:"monospace"},children:t})}),e.jsx("div",{style:{padding:p?0:"12px 14px"},children:s})]})}function B(){const[a,s]=d.useState(`{
  "userId": 42,
  "name": "Alice",
  "role": "admin"
}`),[p,t]=d.useState("");return e.jsxs("div",{style:{width:"100%"},children:[e.jsx(o,{value:a,onChange:s,language:"json",height:"160px",contextMenuMode:"dui",contextMenuItems:[{id:"format",label:"Format Document",icon:e.jsx(k,{size:13}),onClick:()=>t("Format Document")},{id:"copy",label:"Copy All",icon:e.jsx(N,{size:13}),onClick:()=>{navigator.clipboard.writeText(a),t("Copied")}},{id:"sep",label:"",separator:!0},{id:"ai",label:"AI Assist",icon:e.jsx(W,{size:13}),children:[{id:"ai-explain",label:"Explain",icon:e.jsx(z,{size:13}),onClick:()=>t("AI → Explain")},{id:"ai-fix",label:"Fix issues",icon:e.jsx(M,{size:13}),onClick:()=>t("AI → Fix")}]},{id:"clear",label:"Clear",icon:e.jsx(D,{size:13}),danger:!0,onClick:()=>{s(""),t("Cleared")}}]}),p&&e.jsxs("div",{style:{marginTop:6,fontSize:11,color:"var(--color-text-muted)"},children:["Last action: ",e.jsx("strong",{style:{color:"var(--color-text-primary)"},children:p})]}),e.jsx("div",{style:{marginTop:4,fontSize:11,color:"var(--color-text-muted)"},children:"Right-click in the editor to open the custom DUI context menu"})]})}function R(){const[a,s]=d.useState(P);return e.jsxs("div",{children:[e.jsx(g,{label:"JSON editor (editable)",noPad:!0,code:'<EditorView value={body} onChange={setBody} language="json" height="200px" />',children:e.jsx(o,{value:a,onChange:s,language:"json",height:"200px"})}),e.jsx(g,{label:"GraphQL (placeholder shown when empty)",noPad:!0,code:'<EditorView value="" language="graphql" height="120px" placeholder="query { ... }" />',children:e.jsx(o,{value:"",language:"graphql",height:"120px",placeholder:"query { ... }"})}),e.jsx(g,{label:"readOnly=true",noPad:!0,code:`<EditorView value='{ "status": "read-only" }' language="json" height="80px" readOnly />`,children:e.jsx(o,{value:'{ "status": "read-only" }',language:"json",height:"80px",readOnly:!0})}),e.jsx(g,{label:'contextMenuMode="dui" — right-click shows DUI ContextMenuView (submenus, icons, danger, separators)',noPad:!0,code:`<EditorView
  contextMenuMode="dui"
  contextMenuItems={[
    { id: 'format', label: 'Format Document', icon: <CodeIcon />, onClick: () => {} },
    { id: 'sep', label: '', separator: true },
    { id: 'ai', label: 'AI Assist', icon: <SparkleIcon />,
      children: [
        { id: 'ai-explain', label: 'Explain', onClick: () => {} },
      ] },
    { id: 'clear', label: 'Clear', danger: true, onClick: () => {} },
  ]}
/>`,children:e.jsx(B,{})}),e.jsx(g,{label:'contextMenuMode="native" (default) — Monaco built-in context menu',noPad:!0,code:'<EditorView value={body} language="json" height="100px" />',children:e.jsx(o,{value:'{ "mode": "native — right-click me" }',language:"json",height:"100px"})}),e.jsx(g,{label:"editorOptions — fine-grained Monaco options via DUI enums (block cursor, relative lines, whitespace visible)",noPad:!0,code:`import { EditorLineNumbers, EditorCursorStyle, EditorCursorBlinking, EditorRenderWhitespace, EditorFoldingControls } from 'dui';

<EditorView
  language="javascript"
  height="160px"
  editorOptions={{
    lineNumbers: EditorLineNumbers.RELATIVE,
    cursorStyle: EditorCursorStyle.BLOCK,
    cursorBlinking: EditorCursorBlinking.SOLID,
    renderWhitespace: EditorRenderWhitespace.ALL,
    minimap: true,
    smoothScrolling: true,
    tabSize: 4,
    folding: true,
    showFoldingControls: EditorFoldingControls.ALWAYS,
  }}
/>`,children:e.jsx(o,{value:`function greet(name) {
  const msg = \`Hello, \${name}!\`;
  console.log(msg);
  return msg;
}`,language:"javascript",height:"160px",editorOptions:{lineNumbers:j.RELATIVE,cursorStyle:A.BLOCK,cursorBlinking:I.SOLID,renderWhitespace:O.ALL,minimap:!0,smoothScrolling:!0,tabSize:4,folding:!0,showFoldingControls:L.ALWAYS}})})]})}const Y=Object.freeze(Object.defineProperty({__proto__:null,EditorViewLive:R},Symbol.toStringTag,{value:"Module"})),m=`{
  "userId": 42,
  "name": "Alice Wonderland",
  "role": "admin",
  "active": true,
  "tags": ["beta", "power-user"],
  "meta": { "joined": "2024-01-15", "requests": 1248 }
}`,E=`query GetUser($id: ID!) {
  user(id: $id) {
    id
    name
    email
    posts(limit: 10) {
      id
      title
      createdAt
    }
  }
}`,S=`openapi: "3.0.3"
info:
  title: Daakia API
  version: "1.0.0"
paths:
  /users:
    get:
      summary: List all users
      responses:
        "200":
          description: A list of users`,V=`{
  "status": "ok",
  "data": {
    "users": [
      { "id": 1, "name": "Alice" },
      { "id": 2, "name": "Bob" }
    ],
    "total": 2,
    "page": 1
  }
}`,_=`// Word wrap demo: long lines that would normally require horizontal scrolling are wrapped to the next line, improving readability.
const result = await fetch("https://api.example.com/users?limit=100&offset=0&sort=createdAt&order=desc&filter=active", { method: "GET", headers: { "Authorization": "Bearer token123" } });`,U=`async function fetchUsers(token) {
  const res = await fetch('https://api.example.com/users', {
    method: 'GET',
    headers: { Authorization: \`Bearer \${token}\` },
  });
  if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
  const data = await res.json();
  return data.users;
}`,F=`<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Header>
    <auth:Token xmlns:auth="urn:auth">Bearer eyJhbGci...</auth:Token>
  </soap:Header>
  <soap:Body>
    <GetUserRequest xmlns="urn:example.com">
      <userId>42</userId>
    </GetUserRequest>
  </soap:Body>
</soap:Envelope>`,q=`User Report — 2024-01-15
========================
Total users:   1,248
Active:        1,031 (82.6%)
Inactive:        217 (17.4%)

Top roles:
  1. viewer      812
  2. editor      298
  3. admin       138

Generated by Daakia API Client v2.1.0`,h={lineNumbers:j.ON};function H(){const[a,s]=d.useState(m),[p,t]=d.useState(E),[x,f]=d.useState(S),[r,w]=d.useState("json"),C=[{value:"json",label:"JSON"},{value:"graphql",label:"GraphQL"},{value:"yaml",label:"YAML"},{value:"javascript",label:"JavaScript"},{value:"xml",label:"XML"},{value:"proto",label:"Protocol Buffers"},{value:"plaintext",label:"Plain Text"}];return e.jsxs("div",{children:[e.jsx(l,{title:"JSON Request Body Editor",description:"Editable JSON body with syntax highlighting and line numbers",code:`<EditorView
  value={jsonBody}
  onChange={setJsonBody}
  language="json"
  height="180px"
  editorOptions={{ lineNumbers: EditorLineNumbers.ON }}
/>`,noPad:!0,children:e.jsx(o,{value:a,onChange:s,language:"json",height:"180px",editorOptions:h})}),e.jsx(l,{title:"GraphQL Query Editor",description:"GQL syntax highlighting — language='graphql' enables field completion",code:`<EditorView
  value={gqlQuery}
  onChange={setGqlQuery}
  language="graphql"
  height="200px"
  editorOptions={{ lineNumbers: EditorLineNumbers.ON }}
/>`,noPad:!0,children:e.jsx(o,{value:p,onChange:t,language:"graphql",height:"200px",editorOptions:h})}),e.jsx(l,{title:"YAML Config Editor",description:"OpenAPI / environment config editor in YAML mode",code:`<EditorView
  value={yamlConfig}
  onChange={setYamlConfig}
  language="yaml"
  height="200px"
  editorOptions={{ lineNumbers: EditorLineNumbers.ON }}
/>`,noPad:!0,children:e.jsx(o,{value:x,onChange:f,language:"yaml",height:"200px",editorOptions:h})}),e.jsx(l,{title:"Read-Only Response Viewer",description:"readOnly=true — display-only mode for response bodies and logs",code:`<EditorView
  value={SAMPLE_RESPONSE}
  language="json"
  height="160px"
  readOnly
  editorOptions={{ lineNumbers: EditorLineNumbers.ON }}
/>`,noPad:!0,children:e.jsx(o,{value:V,language:"json",height:"160px",readOnly:!0,editorOptions:h})}),e.jsx(l,{title:"Word Wrap On",description:"wordWrap=true prevents horizontal scrolling for long single-line content",code:`<EditorView
  value={longText}
  language="javascript"
  height="100px"
  wordWrap
/>`,noPad:!0,children:e.jsx(o,{value:_,language:"javascript",height:"100px",wordWrap:!0})}),e.jsx(l,{title:"Custom fontSize and Height",description:"fontSize overrides the DUI size token — use for dense logs or large editors",code:`// Dense log viewer
<EditorView value={text} language="plaintext" height="80px" fontSize={10} />

// Comfortable full-page editor
<EditorView value={text} language="json" height="300px" fontSize={14}
  editorOptions={{ lineNumbers: EditorLineNumbers.ON }} />`,noPad:!0,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{padding:"6px 12px",fontSize:10,color:"var(--color-text-muted)",background:"color-mix(in srgb, var(--color-surface-border) 30%, transparent)"},children:"fontSize=10 (dense)"}),e.jsx(o,{value:m,language:"json",height:"80px",fontSize:10}),e.jsx("div",{style:{padding:"6px 12px",fontSize:10,color:"var(--color-text-muted)",background:"color-mix(in srgb, var(--color-surface-border) 30%, transparent)",borderTop:"1px solid var(--color-surface-border)"},children:"fontSize=14 (comfortable)"}),e.jsx(o,{value:m,language:"json",height:"140px",fontSize:14,editorOptions:h})]})}),e.jsx(l,{title:"Language Switcher",description:"Switch language mode dynamically — useful for multi-format body editors",code:`const [lang, setLang] = useState<EditorLanguage>('json');

<EditorView value={body} language={lang} height="160px" />`,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap"},children:C.map(n=>e.jsx("button",{type:"button",onClick:()=>w(n.value),style:{padding:"3px 10px",borderRadius:5,fontSize:11,cursor:"pointer",border:"1px solid var(--color-surface-border)",background:r===n.value?"var(--color-primary)":"var(--color-surface)",color:r===n.value?"#fff":"var(--color-text-secondary)",fontFamily:"inherit"},children:n.label},n.value))}),e.jsx(o,{value:r==="graphql"?E:r==="yaml"?S:r==="javascript"?U:r==="xml"?F:r==="plaintext"?q:m,language:r,height:"160px",editorOptions:h})]})}),e.jsx(l,{title:"Size Variants",description:"size token controls font size — sm=11px, md=12px, lg=13px, xl=14px",code:`<EditorView value={code} language="json" size="sm" height="80px" />
<EditorView value={code} language="json" size="md" height="80px" />
<EditorView value={code} language="json" size="lg" height="80px" />
<EditorView value={code} language="json" size="xl" height="80px" />`,children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:["sm","md","lg","xl"].map(n=>e.jsxs("div",{children:[e.jsxs("div",{style:{fontSize:10,color:"var(--color-text-muted)",marginBottom:4},children:['size="',n,'"']}),e.jsx(o,{value:m,language:"json",size:n,height:"70px",readOnly:!0})]},n))})})]})}const K=Object.freeze(Object.defineProperty({__proto__:null,EditorViewExamples:H},Symbol.toStringTag,{value:"Module"}));function G(){return e.jsxs("div",{style:{maxWidth:860},children:[e.jsx(c,{title:"Features",children:e.jsx(y,{features:[{label:"Monaco Editor core",color:"var(--color-primary)"},{label:"12 languages",color:"var(--color-info)"},{label:"Read-only mode",color:"var(--color-text-muted)"},{label:"DUI context menu",color:"var(--color-success)"},{label:"Native context menu",color:"var(--color-text-muted)"},{label:"EditorOptions API",color:"#a855f7"},{label:"9 Monaco enums",color:"#ec4899"},{label:"Auto-layout",color:"var(--color-warning)"},{label:"Theme sync",color:"var(--color-success)"},{label:"dk.* IntelliSense",color:"#14b8a6"},{label:"GraphQL completions",color:"var(--color-primary)"},{label:"XML auto-format",color:"var(--color-info)"}]})}),e.jsxs(v,{type:"tip",children:["Use ",e.jsx(u,{children:'contextMenuMode="dui"'})," with ",e.jsx(u,{children:"contextMenuItems"})," to replace Monaco's default right-click menu with DUI's recursive ContextMenuView — supports icons, submenus, danger items, and separators."]}),e.jsx(c,{title:"Props",children:e.jsx(b,{props:[{name:"value",type:"string",required:!0,description:"Current editor content — controlled."},{name:"onChange",type:"(val: string) => void",description:"Called on every change with the new full content string."},{name:"language",type:"EditorLanguage",default:"'json'",description:"Syntax highlighting language. See EditorLanguage enum below."},{name:"height",type:"string | number",default:"300",description:"Editor container height. Pass a number (pixels) or a CSS string like '200px' or '40vh'."},{name:"readOnly",type:"boolean",default:"false",description:"Disable all editing. Editor becomes a styled read-only viewer."},{name:"fontSize",type:"number",default:"12",description:"Editor font size in pixels."},{name:"wordWrap",type:"'on' | 'off'",default:"'off'",description:"Quick soft word-wrap toggle. Overridden by editorOptions.wordWrap if both are set — use one or the other."},{name:"glyphMargin",type:"boolean",default:"false",description:"Reserve space for the glyph margin column. Required when using DebugEditorView breakpoint glyphs."},{name:"placeholder",type:"string",description:"Placeholder text shown when the editor is empty."},{name:"contextMenuMode",type:"EditorContextMenuMode",default:"'native'",description:"Controls right-click menu. 'native' = Monaco default. 'dui' = suppress Monaco menu and show DUI ContextMenuView at cursor position."},{name:"contextMenuItems",type:"ContextMenuItem[]",description:"Menu items for DUI context menu. Only active when contextMenuMode='dui'. Supports icons, separators, danger, submenus."},{name:"editorOptions",type:"EditorOptions",description:"Fine-grained Monaco editor options. Consumer values override DUI defaults. DUI always controls: automaticLayout, contextmenu, fixedOverflowWidgets, glyphMargin."},{name:"accentColor",type:"string",description:"CSS color for cursor and selection highlight."},{name:"style",type:"CSSProperties",description:"Style applied to the editor container div."},{name:"className",type:"string",description:"CSS class name for the editor container."}]})}),e.jsx(c,{title:"EditorLanguage",description:"Syntax highlighting languages supported by MonacoEditor.",children:e.jsx(i,{name:"EditorLanguage",values:[{value:"json",description:"JSON — default language"},{value:"javascript",description:"JavaScript (.js)"},{value:"typescript",description:"TypeScript (.ts)"},{value:"graphql",description:"GraphQL schema + queries",color:"#e535ab"},{value:"xml",description:"XML / SOAP / HTML"},{value:"html",description:"HTML markup"},{value:"css",description:"CSS stylesheets"},{value:"yaml",description:"YAML configuration"},{value:"python",description:"Python (.py)"},{value:"markdown",description:"Markdown text"},{value:"plaintext",description:"No highlighting"},{value:"java",description:"Java source"},{value:"proto",description:"Protocol Buffers (.proto)"}]})}),e.jsx(c,{title:"EditorContextMenuMode",description:"Controls which context menu appears on right-click.",children:e.jsx(i,{name:"EditorContextMenuMode",values:[{value:"native",description:"Monaco's default context menu (Format, Find, etc.)",color:"var(--color-text-muted)"},{value:"dui",description:"Suppress Monaco menu — show DUI ContextMenuView with contextMenuItems",color:"var(--color-success)"}]})}),e.jsx(c,{title:"EditorOptions",description:"All fields are optional. Consumer values override DUI defaults. Structural options (automaticLayout, contextmenu, fixedOverflowWidgets, glyphMargin) are always controlled by DUI and cannot be overridden.",children:e.jsx(b,{props:[{name:"lineNumbers",type:"EditorLineNumbers",default:"'on'",description:"Line number display mode."},{name:"lineHeight",type:"number",description:"Line height in pixels."},{name:"letterSpacing",type:"number",description:"Letter spacing in pixels."},{name:"rulers",type:"number[]",description:"Column ruler positions (e.g. [80, 120])."},{name:"renderWhitespace",type:"EditorRenderWhitespace",default:"'none'",description:"Whitespace character rendering."},{name:"minimap",type:"boolean",default:"false",description:"Show Monaco minimap."},{name:"scrollBeyondLastLine",type:"boolean",default:"false",description:"Allow scrolling past the last line."},{name:"smoothScrolling",type:"boolean",default:"false",description:"Smooth animated scrolling."},{name:"mouseWheelZoom",type:"boolean",default:"false",description:"Ctrl+scroll to zoom font size."},{name:"cursorStyle",type:"EditorCursorStyle",default:"'line'",description:"Shape of the text cursor."},{name:"cursorBlinking",type:"EditorCursorBlinking",default:"'blink'",description:"Cursor blink animation style."},{name:"tabSize",type:"number",default:"2",description:"Number of spaces per tab character."},{name:"wordWrap",type:"EditorWordWrap",default:"'off'",description:"Word wrap behavior."},{name:"formatOnPaste",type:"boolean",default:"false",description:"Auto-format content on paste."},{name:"formatOnType",type:"boolean",default:"false",description:"Auto-format as user types."},{name:"autoIndent",type:"EditorAutoIndent",default:"'keep'",description:"Auto-indent strategy."},{name:"folding",type:"boolean",default:"true",description:"Enable code folding."},{name:"showFoldingControls",type:"EditorFoldingControls",default:"'mouseover'",description:"When to show folding arrows."},{name:"matchBrackets",type:"EditorMatchBrackets",default:"'always'",description:"Bracket matching highlight."},{name:"bracketPairColorization",type:"boolean",default:"true",description:"Color-code bracket pairs."},{name:"quickSuggestions",type:"boolean",default:"true",description:"IntelliSense auto-trigger suggestions."},{name:"suggestOnTriggerCharacters",type:"boolean",default:"true",description:"Show suggestions on trigger chars (., (, etc.)."},{name:"acceptSuggestionOnEnter",type:"EditorAcceptSuggestion",default:"'on'",description:"Accept suggestion on Enter key."},{name:"parameterHints",type:"boolean",default:"true",description:"Show function parameter hints."},{name:"hover",type:"boolean",default:"true",description:"Show hover tooltip on token."},{name:"codeLens",type:"boolean",default:"false",description:"Show CodeLens annotations above code."},{name:"inlayHints",type:"boolean",default:"false",description:"Show inline type/value hints."},{name:"colorDecorators",type:"boolean",default:"true",description:"Color swatch decorators for CSS color values."},{name:"linkedEditing",type:"boolean",default:"false",description:"Linked renaming (rename tag opens closing tag)."},{name:"copyWithSyntaxHighlighting",type:"boolean",default:"true",description:"Include syntax highlighting when copying to clipboard."},{name:"padding",type:"{ top?: number; bottom?: number }",description:"Editor content padding in pixels."}]})}),e.jsxs(c,{title:"Monaco Enums",description:"Use these const enum objects instead of raw strings for type-safety and IntelliSense.",children:[e.jsx(i,{name:"EditorLineNumbers",values:[{value:"EditorLineNumbers.ON",description:"Show absolute line numbers",color:"var(--color-success)"},{value:"EditorLineNumbers.OFF",description:"Hide line numbers",color:"var(--color-text-muted)"},{value:"EditorLineNumbers.RELATIVE",description:"Show relative line numbers (vim-style)",color:"var(--color-primary)"},{value:"EditorLineNumbers.INTERVAL",description:"Show numbers at intervals only",color:"var(--color-info)"}]}),e.jsx(i,{name:"EditorCursorStyle",values:[{value:"EditorCursorStyle.LINE",description:"Thin vertical bar (default)",color:"var(--color-primary)"},{value:"EditorCursorStyle.BLOCK",description:"Full block cursor",color:"#a855f7"},{value:"EditorCursorStyle.UNDERLINE",description:"Underline cursor",color:"var(--color-info)"},{value:"EditorCursorStyle.LINE_THIN",description:"Thinner line",color:"var(--color-text-muted)"},{value:"EditorCursorStyle.BLOCK_OUTLINE",description:"Block outline only",color:"var(--color-warning)"},{value:"EditorCursorStyle.UNDERLINE_THIN",description:"Thin underline",color:"var(--color-text-muted)"}]}),e.jsx(i,{name:"EditorCursorBlinking",values:[{value:"EditorCursorBlinking.BLINK",description:"Standard on/off blink",color:"var(--color-primary)"},{value:"EditorCursorBlinking.SMOOTH",description:"Fade in/out blink",color:"var(--color-success)"},{value:"EditorCursorBlinking.PHASE",description:"Phase animation",color:"#a855f7"},{value:"EditorCursorBlinking.EXPAND",description:"Expand animation",color:"var(--color-warning)"},{value:"EditorCursorBlinking.SOLID",description:"No blinking — always visible",color:"var(--color-info)"}]}),e.jsx(i,{name:"EditorWordWrap",values:[{value:"EditorWordWrap.OFF",description:"No word wrap (default)",color:"var(--color-text-muted)"},{value:"EditorWordWrap.ON",description:"Wrap at viewport width",color:"var(--color-success)"},{value:"EditorWordWrap.WORD_WRAP_COLUMN",description:"Wrap at wordWrapColumn setting",color:"var(--color-primary)"},{value:"EditorWordWrap.BOUNDED",description:"Wrap at min(viewport, wordWrapColumn)",color:"var(--color-info)"}]}),e.jsx(i,{name:"EditorRenderWhitespace",values:[{value:"EditorRenderWhitespace.NONE",description:"Hidden (default)",color:"var(--color-text-muted)"},{value:"EditorRenderWhitespace.BOUNDARY",description:"Only leading/trailing",color:"var(--color-warning)"},{value:"EditorRenderWhitespace.SELECTION",description:"Only in selected text",color:"var(--color-info)"},{value:"EditorRenderWhitespace.TRAILING",description:"Only trailing whitespace",color:"#ec4899"},{value:"EditorRenderWhitespace.ALL",description:"All whitespace visible",color:"var(--color-success)"}]}),e.jsx(i,{name:"EditorFoldingControls",values:[{value:"EditorFoldingControls.ALWAYS",description:"Always show fold arrows",color:"var(--color-primary)"},{value:"EditorFoldingControls.NEVER",description:"Hide fold arrows entirely",color:"var(--color-text-muted)"},{value:"EditorFoldingControls.MOUSEOVER",description:"Show on hover (default)",color:"var(--color-success)"}]}),e.jsx(i,{name:"EditorAutoIndent",values:[{value:"EditorAutoIndent.NONE",description:"No auto-indent",color:"var(--color-text-muted)"},{value:"EditorAutoIndent.KEEP",description:"Keep current indentation (default)",color:"var(--color-info)"},{value:"EditorAutoIndent.BRACKETS",description:"Indent inside brackets",color:"var(--color-primary)"},{value:"EditorAutoIndent.ADVANCED",description:"Language-aware advanced indent",color:"var(--color-warning)"},{value:"EditorAutoIndent.FULL",description:"Full language-specific indent",color:"var(--color-success)"}]}),e.jsx(i,{name:"EditorAcceptSuggestion",values:[{value:"EditorAcceptSuggestion.ON",description:"Enter always accepts suggestion (default)",color:"var(--color-success)"},{value:"EditorAcceptSuggestion.OFF",description:"Enter never accepts",color:"var(--color-text-muted)"},{value:"EditorAcceptSuggestion.SMART",description:"Enter accepts only when suggestion is first",color:"var(--color-primary)"}]})]}),e.jsxs(v,{type:"warning",children:[e.jsx("strong",{children:"DUI-owned options"})," — these are always set by DUI and cannot be overridden via ",e.jsx(u,{children:"editorOptions"}),":"," ",e.jsx(u,{children:"automaticLayout"}),", ",e.jsx(u,{children:"contextmenu"}),", ",e.jsx(u,{children:"fixedOverflowWidgets"}),", ",e.jsx(u,{children:"glyphMargin"}),". They are structural requirements of the DUI editor shell and breakpoint gutter."]}),e.jsxs(v,{type:"info",children:[e.jsx("strong",{children:"DebugEditorView"})," is a specialized variant of EditorView that adds breakpoint gutter clicks, paused-line highlight, and variable-hover tooltips. See the DebugEditorView panel for its own props and adapter API."]}),e.jsxs(c,{title:"DUI Sizing & Theming",description:"EditorView maps its size prop to an editor-specific font-size scale (mirroring useEditorBase / DUI_EDITOR_FONT_SIZE) rather than the standard input height/padding tokens, since code needs a larger, monospaced font than label-sized UI text. An explicit fontSize prop always takes precedence over size.",children:[e.jsx(y,{features:[{label:"Editor font-size scale (DUI_EDITOR_FONT_SIZE)",color:"var(--color-primary)"},{label:"fontSize prop overrides size",color:"var(--color-success)"}]}),e.jsx(T,{sizes:[{size:"xxs",height:"—",font:"10px",desc:"editor font-size"},{size:"xs",height:"—",font:"11px",desc:"editor font-size"},{size:"sm",height:"—",font:"11px",desc:"editor font-size"},{size:"md",height:"—",font:"12px",desc:"editor font-size (default)"},{size:"lg",height:"—",font:"13px",desc:"editor font-size"},{size:"xl",height:"—",font:"14px",desc:"editor font-size"},{size:"xxl",height:"—",font:"15px",desc:"editor font-size"},{size:"xxxl",height:"—",font:"16px",desc:"editor font-size"}]}),e.jsxs(v,{type:"info",children:["These values come from ",e.jsx("code",{children:"DUI_EDITOR_FONT_SIZE"})," in ",e.jsx("code",{children:"DuiTokens.ts"})," — deliberately larger than the standard ",e.jsx("code",{children:"DUI_FONT_SIZE"})," scale used by label-sized components. Omitting size falls back to 'md' (12px); EditorView does not read ambient ","<DuiProvider>"," size context directly."]})]})]})}const $=Object.freeze(Object.defineProperty({__proto__:null,EditorViewDocs:G},Symbol.toStringTag,{value:"Module"}));export{Y as E,K as a,$ as b};
