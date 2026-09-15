import{r,j as e,cM as s}from"./dui-lib-D_5u_TrP.js";import{R as y}from"./panel-chipsview-BNR2dVxN.js";import{E as c,D as a,b as h,F as w,P as k}from"./panel-badgechip-qgj4nFkf.js";function E(){const[d,v]=r.useState(`// Pre-request script
const userId = dk.env.get('userId');
dk.request.setHeader('X-User-ID', userId);
console.log('userId:', userId);
const token = dk.env.get('token');
dk.request.setHeader('Authorization', 'Bearer ' + token);`),[u,g]=r.useState([3,5]),[l]=r.useState(3);return e.jsx("div",{children:e.jsx(y,{label:"DebugEditorView — breakpoint gutter, paused-line highlight, toggle on click",noPad:!0,code:`<DebugEditorView
  value={code}
  onChange={setCode}
  language="javascript"
  height={200}
  breakpoints={breakpoints}
  pausedLine={3}
  adapter={{ onToggleBreakpoint: (line) => setBreakpoints(prev =>
    prev.includes(line) ? prev.filter(l => l !== line) : [...prev, line]
  )}}
/>`,children:e.jsxs("div",{style:{width:"100%"},children:[e.jsx(s,{value:d,onChange:v,language:"javascript",height:"200px",breakpoints:u,pausedLine:l,adapter:{onToggleBreakpoint:i=>g(n=>n.includes(i)?n.filter(x=>x!==i):[...n,i])}}),e.jsxs("div",{style:{marginTop:6,fontSize:11,color:"var(--color-text-muted)"},children:["Click gutter to toggle breakpoints · Yellow = paused line · Active: ",u.join(", ")||"none"]})]})})})}const B=Object.freeze(Object.defineProperty({__proto__:null,DebugEditorViewLive:E},Symbol.toStringTag,{value:"Module"})),b=`async function fetchUser(userId) {
  const token = getAuthToken();
  const response = await fetch(\`/api/users/\${userId}\`, {
    headers: { Authorization: \`Bearer \${token}\` },
  });
  if (!response.ok) {
    throw new Error(\`HTTP \${response.status}\`);
  }
  return response.json();
}

async function loadDashboard() {
  const user = await fetchUser(42);
  console.log('Loaded:', user.name);
  return user;
}`,S=`import httpx

def fetch_user(user_id: int) -> dict:
    token = get_auth_token()
    headers = {"Authorization": f"Bearer {token}"}
    response = httpx.get(f"https://api.example.com/users/{user_id}", headers=headers)
    response.raise_for_status()
    return response.json()

def load_dashboard():
    user = fetch_user(42)
    print(f"Loaded: {user['name']}")
    return user`;function D(){const[d,v]=r.useState([3,7]),[u,g]=r.useState([3,7]),[l,i]=r.useState(5),[n,x]=r.useState(null),f={onToggleBreakpoint:o=>{v(t=>t.includes(o)?t.filter(p=>p!==o):[...t,o])}},m={onToggleBreakpoint:o=>{g(t=>t.includes(o)?t.filter(p=>p!==o):[...t,o])}},j={onToggleBreakpoint:o=>{g(t=>t.includes(o)?t.filter(p=>p!==o):[...t,o])},onEditorMount:(o,t)=>{x("Editor mounted — hover adapter ready")}};return e.jsxs("div",{children:[e.jsxs(c,{title:"JavaScript with Breakpoints (lines 3 and 7)",description:"Click in the gutter to toggle breakpoints — red dots appear on active breakpoint lines",code:`const [breakpoints, setBreakpoints] = useState([3, 7]);

<DebugEditorView
  value={jsSnippet}
  language="javascript"
  breakpoints={breakpoints}
  adapter={{
    onToggleBreakpoint: line =>
      setBreakpoints(prev =>
        prev.includes(line) ? prev.filter(l => l !== line) : [...prev, line]
      ),
  }}
/>`,children:[e.jsx("div",{style:{height:260,border:"1px solid var(--color-surface-border)",borderRadius:6,overflow:"hidden"},children:e.jsx(s,{value:b,language:"javascript",breakpoints:d,adapter:f,editorOptions:{minimap:!1}})}),e.jsxs("div",{style:{marginTop:6,fontSize:11,color:"var(--color-text-muted)"},children:["Active breakpoints: ",d.length>0?d.map(o=>`line ${o}`).join(", "):"none"," — click gutter to toggle"]})]}),e.jsxs(c,{title:"Paused at Line 5 — Highlighted",description:"pausedLine renders a yellow highlight bar across the current execution line",code:`<DebugEditorView
  value={jsSnippet}
  language="javascript"
  breakpoints={[3, 7]}
  pausedLine={5}
  adapter={adapter}
/>`,children:[e.jsx("div",{style:{height:260,border:"1px solid var(--color-surface-border)",borderRadius:6,overflow:"hidden"},children:e.jsx(s,{value:b,language:"javascript",breakpoints:u,pausedLine:l,adapter:m,editorOptions:{minimap:!1}})}),e.jsxs("div",{style:{marginTop:6,display:"flex",gap:8,alignItems:"center"},children:[e.jsxs("span",{style:{fontSize:11,color:"var(--color-text-muted)"},children:["Paused at: ",l!==null?`line ${l}`:"none"]}),e.jsx("button",{type:"button",onClick:()=>i(o=>o===5?9:5),style:{fontSize:11,padding:"2px 8px",borderRadius:4,border:"1px solid var(--color-surface-border)",background:"var(--color-panel)",color:"var(--color-text-secondary)",cursor:"pointer"},children:"Toggle paused line (5 ↔ 9)"}),e.jsx("button",{type:"button",onClick:()=>i(null),style:{fontSize:11,padding:"2px 8px",borderRadius:4,border:"1px solid var(--color-surface-border)",background:"var(--color-panel)",color:"var(--color-text-secondary)",cursor:"pointer"},children:"Clear"})]})]}),e.jsxs(c,{title:"Variable Hover Tooltip (onEditorMount adapter)",description:"adapter.onEditorMount gives access to the Monaco editor instance for hover tooltips and plugins",code:`const adapter = {
  onEditorMount: (editor, monaco) => {
    editor.addAction({
      id: 'show-hover',
      label: 'Show Variable Value',
      run: () => editor.trigger('', 'editor.action.showHover', {}),
    });
  },
};
<DebugEditorView value={snippet} language="javascript" adapter={adapter} />`,children:[e.jsx("div",{style:{height:240,border:"1px solid var(--color-surface-border)",borderRadius:6,overflow:"hidden"},children:e.jsx(s,{value:b,language:"javascript",breakpoints:[3],pausedLine:3,adapter:j,editorOptions:{minimap:!1}})}),n&&e.jsx("div",{style:{marginTop:6,fontSize:11,color:"var(--color-success)",fontFamily:"monospace"},children:n})]}),e.jsxs(c,{title:"Read-Only Debug Viewer",description:"readOnly=true — shows breakpoints and paused line for inspection without editing",code:`<DebugEditorView
  value={jsSnippet}
  language="javascript"
  breakpoints={[3, 7]}
  pausedLine={7}
  options={{ readOnly: true }}
/>`,children:[e.jsx("div",{style:{height:200,border:"1px solid var(--color-surface-border)",borderRadius:6,overflow:"hidden"},children:e.jsx(s,{value:b,language:"javascript",breakpoints:[3,7],pausedLine:7,readOnly:!0,editorOptions:{minimap:!1}})}),e.jsx("div",{style:{marginTop:6,fontSize:11,color:"var(--color-text-muted)"},children:"Read-only — editing is disabled, breakpoints visible"})]}),e.jsx(c,{title:"Python Snippet with Breakpoints",description:"DebugEditorView supports any Monaco language — here with a Python HTTP snippet",code:`<DebugEditorView
  value={pythonSnippet}
  language="python"
  breakpoints={[2, 8]}
  pausedLine={2}
  adapter={adapter}
/>`,children:e.jsx("div",{style:{height:240,border:"1px solid var(--color-surface-border)",borderRadius:6,overflow:"hidden"},children:e.jsx(s,{value:S,language:"python",breakpoints:[2,8],pausedLine:2,adapter:{onToggleBreakpoint:()=>{}},editorOptions:{minimap:!1}})})})]})}const L=Object.freeze(Object.defineProperty({__proto__:null,DebugEditorViewExamples:D},Symbol.toStringTag,{value:"Module"}));function T(){return e.jsxs("div",{style:{maxWidth:860},children:[e.jsx(a,{title:"Overview",children:e.jsxs(h,{type:"info",children:["DebugEditorView wraps ",e.jsx("strong",{children:"EditorView"})," (the DUI Monaco editor) with ",e.jsx("code",{children:"debugSupported=true"})," always set. It exposes a pluggable ",e.jsx("strong",{children:"DebugEditorAdapter"})," interface so consumers supply their own breakpoint callbacks without importing daakia-specific stores."]})}),e.jsx(a,{title:"Features",children:e.jsx(w,{features:[{label:"Monaco editor with debug gutter",color:"var(--color-primary)"},{label:"Breakpoint toggle on gutter click",color:"var(--color-success)"},{label:"Disabled breakpoints (greyed out)",color:"var(--color-info)"},{label:"Conditional breakpoints (amber)",color:"var(--color-warning)"},{label:"Paused line highlight (yellow bar)",color:"#a855f7"},{label:"Right-click glyph context menu",color:"#ec4899"},{label:"Adapter pattern (no store coupling)",color:"#14b8a6"},{label:"EditorMount callback for plugins",color:"#f97316"}]})}),e.jsx(a,{title:"DebugEditorAdapter",children:e.jsx(k,{props:[{name:"onToggleBreakpoint",type:"(line: number) => void",description:"Called when the user clicks in the breakpoint gutter to toggle a breakpoint."},{name:"onGlyphContextMenu",type:"(line: number, pos: { x, y }) => void",description:"Called when the user right-clicks a glyph in the gutter (for conditional breakpoints, etc.)."},{name:"onEditorMount",type:"(editor: unknown, monaco: unknown) => void",description:"Called after Monaco mounts. Use to attach AI autocomplete or other Monaco plugins."}]})}),e.jsx(a,{title:"Props",children:e.jsx(k,{props:[{name:"adapter",type:"DebugEditorAdapter",description:"Pluggable debug adapter — consumer supplies all callbacks."},{name:"breakpoints",type:"number[]",description:"Active breakpoint line numbers (shown with red dot in gutter)."},{name:"disabledBreakpoints",type:"number[]",description:"Line numbers with disabled breakpoints (shown grey)."},{name:"conditionalBreakpointLines",type:"number[]",description:"Line numbers with conditional breakpoints (shown amber)."},{name:"pausedLine",type:"number | null",description:"Currently paused line. Rendered with a yellow highlight bar."},{name:"...EditorViewProps",type:"EditorViewProps",description:"All other EditorView props (language, value, onChange, theme, etc.) pass through."}]})}),e.jsxs(a,{title:"Notes",children:[e.jsxs(h,{type:"tip",children:["DebugEditorView is a thin adapter layer. The heavy lifting is in ",e.jsx("code",{children:"EditorView"}),". If you need a plain Monaco editor without debug features, use ",e.jsx("code",{children:"EditorView"})," directly."]}),e.jsxs(h,{type:"warning",children:["The ",e.jsx("code",{children:"debugSupported"}),", ",e.jsx("code",{children:"onToggleBreakpoint"}),", ",e.jsx("code",{children:"onGlyphContextMenu"}),", and ",e.jsx("code",{children:"onEditorMount"})," props are stripped from the pass-through to prevent double-binding. Always use the ",e.jsx("code",{children:"adapter"})," prop for these callbacks."]})]}),e.jsx(a,{title:"DUI Sizing & Theming",description:"DebugEditorView does not read size, width, color, or borderRadius from the DuiProvider context — it is not part of the sized-component system and has no size prop to fall back to a provider default.",children:e.jsxs(h,{type:"info",children:["DebugEditorView is unaffected by ",e.jsx("code",{children:"<DuiProvider>"})," size/color context. Style it directly via its own props (and CSS variables where documented above) rather than expecting provider-level sizing to apply."]})})]})}const M=Object.freeze(Object.defineProperty({__proto__:null,DebugEditorViewDocs:T},Symbol.toStringTag,{value:"Module"}));export{B as D,L as a,M as b};
