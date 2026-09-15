import{r as n,j as e,dh as a,K as h}from"./dui-lib-CMA--A_A.js";import{E as s,D as d,F as y,P as C,a as c}from"./panel-badgechip-DpEaHX-u.js";function o({name:l,value:i}){return e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"4px 12px",fontSize:12},children:[e.jsx("span",{style:{color:"var(--color-text-secondary)",fontFamily:"monospace"},children:l}),e.jsx("span",{style:{color:"var(--color-success)",fontFamily:"monospace"},children:i})]})}function p({fn:l,file:i,line:r}){return e.jsxs("div",{style:{padding:"3px 12px",fontSize:12},children:[e.jsx("span",{style:{color:"var(--color-text-primary)",fontFamily:"monospace"},children:l}),e.jsxs("span",{style:{color:"var(--color-text-muted)",marginLeft:8},children:[i,":",r]})]})}function w(){const[l,i]=n.useState(!0),[r,x]=n.useState(!1),[u,g]=n.useState(!0),[m,b]=n.useState(!0),[v,f]=n.useState(!0),[S,j]=n.useState(!1);return e.jsxs("div",{children:[e.jsx(s,{title:"Variables Section — Expanded with Badge",description:"Shows 3 local variables; badge=3 signals how many vars are in scope",code:`<CollapsibleSectionView
  title="Variables"
  expanded={open}
  onToggle={() => setOpen(v => !v)}
  badge={3}
>
  <VariableRow name="userId" value="42" />
  <VariableRow name="email"  value='"alice@example.com"' />
  <VariableRow name="roles"  value='["admin","user"]' />
</CollapsibleSectionView>`,children:e.jsxs(a,{title:"Variables",expanded:l,onToggle:()=>i(t=>!t),badge:3,children:[e.jsx(o,{name:"userId",value:"42"}),e.jsx(o,{name:"email",value:'"alice@example.com"'}),e.jsx(o,{name:"roles",value:'["admin", "user"]'})]})}),e.jsx(s,{title:"Watch Expressions — Collapsed",description:"Section starts collapsed; clicking the header expands it",code:`<CollapsibleSectionView
  title="Watch"
  expanded={false}
  onToggle={() => setWatchOpen(v => !v)}
  badge={2}
>
  <div>req.headers.authorization</div>
  <div>res.statusCode</div>
</CollapsibleSectionView>`,children:e.jsxs(a,{title:"Watch",expanded:r,onToggle:()=>x(t=>!t),badge:2,children:[e.jsx("div",{style:{padding:"4px 12px",fontSize:12,fontFamily:"monospace",color:"var(--color-text-secondary)"},children:"req.headers.authorization"}),e.jsx("div",{style:{padding:"4px 12px",fontSize:12,fontFamily:"monospace",color:"var(--color-text-secondary)"},children:"res.statusCode"})]})}),e.jsx(s,{title:"Call Stack — With Right-Side Action Slot",description:"headerRight renders a Restart Frame button next to the title",code:`<CollapsibleSectionView
  title="Call Stack"
  expanded={stackOpen}
  onToggle={() => setStackOpen(v => !v)}
  headerRight={<ButtonView size="xs" variant="ghost">Restart Frame</ButtonView>}
>
  <CallFrameRow fn="fetchUser"     file="api.ts"   line={42} />
  <CallFrameRow fn="loadDashboard" file="page.tsx" line={88} />
</CollapsibleSectionView>`,children:e.jsxs(a,{title:"Call Stack",expanded:u,onToggle:()=>g(t=>!t),headerRight:e.jsx(h,{size:"xs",variant:"ghost",children:"Restart Frame"}),children:[e.jsx(p,{fn:"fetchUser",file:"api.ts",line:42}),e.jsx(p,{fn:"loadDashboard",file:"page.tsx",line:88}),e.jsx(p,{fn:"App",file:"main.tsx",line:12})]})}),e.jsx(s,{title:"Breakpoints — Enable All Button",description:"headerRight places a bulk action alongside the section title",code:`<CollapsibleSectionView
  title="Breakpoints"
  expanded={bpOpen}
  onToggle={() => setBpOpen(v => !v)}
  badge={4}
  headerRight={<ButtonView size="xs" variant="ghost">Enable All</ButtonView>}
>
  ...breakpoint rows...
</CollapsibleSectionView>`,children:e.jsx(a,{title:"Breakpoints",expanded:m,onToggle:()=>b(t=>!t),badge:4,headerRight:e.jsx(h,{size:"xs",variant:"ghost",children:"Enable All"}),children:[{file:"api.ts",line:14,disabled:!1},{file:"auth.ts",line:37,disabled:!0},{file:"parser.ts",line:92,disabled:!1},{file:"index.ts",line:5,disabled:!0}].map(t=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"3px 12px",fontSize:12},children:[e.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:t.disabled?"var(--color-text-muted)":"var(--color-error)",flexShrink:0}}),e.jsxs("span",{style:{color:t.disabled?"var(--color-text-muted)":"var(--color-text-primary)",fontFamily:"monospace"},children:[t.file,":",t.line]})]},`${t.file}:${t.line}`))})}),e.jsx(s,{title:"Nested Sections",description:"Outer section contains inner sections — each collapses independently",code:`<CollapsibleSectionView title="Local" expanded={nested1} onToggle={() => setNested1(v => !v)}>
  <CollapsibleSectionView title="Closure" expanded={nested2} onToggle={() => setNested2(v => !v)}>
    <VariableRow name="ctx" value="{…}" />
  </CollapsibleSectionView>
</CollapsibleSectionView>`,children:e.jsxs(a,{title:"Local",expanded:v,onToggle:()=>f(t=>!t),badge:2,children:[e.jsx(o,{name:"userId",value:"42"}),e.jsx(a,{title:"Closure",expanded:S,onToggle:()=>j(t=>!t),badge:1,children:e.jsx(o,{name:"ctx",value:"{requestId: 'abc123'}"})})]})}),e.jsx(s,{title:"Custom Accent Color — GraphQL purple",description:"accentColor changes the header chip tint and badge color",code:`<CollapsibleSectionView
  title="Query Variables"
  expanded={open}
  onToggle={() => setOpen(v => !v)}
  badge={5}
  accentColor="var(--color-protocol-graphql)"
>
  <VariableRow name="$userId" value="42" />
</CollapsibleSectionView>`,children:e.jsxs(a,{title:"Query Variables",expanded:l,onToggle:()=>i(t=>!t),badge:5,accentColor:"var(--color-protocol-graphql)",children:[e.jsx(o,{name:"$userId",value:"42"}),e.jsx(o,{name:"$limit",value:"10"}),e.jsx(o,{name:"$offset",value:"0"}),e.jsx(o,{name:"$sort",value:'"createdAt"'}),e.jsx(o,{name:"$archived",value:"false"})]})})]})}const T=Object.freeze(Object.defineProperty({__proto__:null,CollapsibleSectionViewExamples:w},Symbol.toStringTag,{value:"Module"}));function V(){return e.jsxs("div",{style:{maxWidth:860},children:[e.jsx(d,{title:"Features",children:e.jsx(y,{features:[{label:"Controlled expand/collapse",color:"var(--color-primary)"},{label:"Animated chevron rotation",color:"var(--color-success)"},{label:"Count badge next to title",color:"var(--color-info)"},{label:"headerRight slot for action buttons",color:"var(--color-warning)"},{label:"Accent color via CSS custom property",color:"#a855f7"},{label:"Click-outside safe header actions",color:"#ec4899"}]})}),e.jsx(d,{title:"Props",children:e.jsx(C,{props:[{name:"title",type:"string",required:!0,description:"Section title shown in the header."},{name:"expanded",type:"boolean",required:!0,description:"Controlled expanded state."},{name:"onToggle",type:"() => void",required:!0,description:"Called when the header is clicked to toggle expand state."},{name:"badge",type:"number",description:"Count badge shown next to the title. Hidden when 0 or undefined."},{name:"accentColor",type:"string",description:"Sets --dui-collapse-accent CSS custom property used in CSS for chip and badge colors."},{name:"headerRight",type:"ReactNode",description:"Slot rendered on the far right of the header. Click events are stopped from propagating to the toggle."},{name:"children",type:"ReactNode",required:!0,description:"Content rendered in the body when expanded."},{name:"className",type:"string",description:"Extra CSS class on the root element."}]})}),e.jsxs(d,{title:"Usage notes",children:[e.jsxs(c,{type:"info",children:["CollapsibleSectionView is fully controlled — you manage ",e.jsx("code",{children:"expanded"}),' state externally. This makes it easy to sync multiple sections or implement "expand all / collapse all" actions.']}),e.jsxs(c,{type:"tip",children:["The ",e.jsx("code",{children:"headerRight"})," slot is ideal for icon buttons (add, clear, mute). They receive a ",e.jsx("code",{children:"stopPropagation"})," wrapper so clicking them doesn't toggle the section."]}),e.jsxs(c,{type:"info",children:["Used internally by ",e.jsx("strong",{children:"DebugView"})," for the Variables, Watch, Call Stack, and Breakpoints sections."]})]}),e.jsx(d,{title:"DUI Sizing & Theming",description:"CollapsibleSectionView does not read size, width, color, or borderRadius from the DuiProvider context — it is not part of the sized-component system and has no size prop to fall back to a provider default.",children:e.jsxs(c,{type:"info",children:["CollapsibleSectionView is unaffected by ",e.jsx("code",{children:"<DuiProvider>"})," size/color context. Style it directly via its own props (and CSS variables where documented above) rather than expecting provider-level sizing to apply."]})})]})}const O=Object.freeze(Object.defineProperty({__proto__:null,CollapsibleSectionViewDocs:V},Symbol.toStringTag,{value:"Module"}));export{T as C,O as a};
