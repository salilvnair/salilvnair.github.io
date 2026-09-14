import{r,j as e,z as t}from"./dui-lib-BoPcLOzx.js";import{E as a,D as o,F as b,V as j,P as p,c as S,S as h,a as c,W as z,b as D}from"./panel-chipsview-DUXBy88l.js";const u=[{id:"params",label:"Params",badge:3},{id:"headers",label:"Headers",badge:6},{id:"body",label:"Body"},{id:"auth",label:"Auth",dot:!0,dotColor:"var(--color-success)"},{id:"scripts",label:"Scripts"}],V=[{id:"overview",label:"Overview"},{id:"history",label:"History",badge:12},{id:"settings",label:"Settings"},{id:"docs",label:"Docs"}],k=[{id:"messages",label:"Messages",badge:4},{id:"connect",label:"Connect",dot:!0,dotColor:"var(--color-success)"},{id:"headers",label:"Headers"}];function P(){const[i,l]=r.useState("params"),[v,x]=r.useState("overview"),[g,m]=r.useState("messages"),[s,T]=r.useState("rest"),[f,y]=r.useState("a"),w=[{id:"a",label:"Tab A"},{id:"b",label:"Tab B"},{id:"c",label:"Tab C"}],C=[{id:"rest",label:"REST"},{id:"graphql",label:"GraphQL"},{id:"websocket",label:"WebSocket"},{id:"grpc",label:"gRPC"},{id:"soap",label:"SOAP"}],d={rest:"var(--color-protocol-rest)",graphql:"var(--color-protocol-graphql)",websocket:"var(--color-protocol-websocket)",grpc:"var(--color-protocol-grpc)",soap:"var(--color-protocol-soap)"};return e.jsxs("div",{children:[e.jsx(a,{title:"Pill Variant — Request Tabs",description:"Params / Headers / Body / Auth — the standard request section tabs",code:`const tabs = [
  { id: 'params',  label: 'Params',  badge: 3 },
  { id: 'headers', label: 'Headers', badge: 6 },
  { id: 'body',    label: 'Body' },
  { id: 'auth',    label: 'Auth', dot: true, dotColor: 'var(--color-success)' },
];

<TabView
  tabs={tabs}
  activeTab={activeTab}
  onChange={setActiveTab}
  variant="pill"
  accentColor="var(--color-protocol-rest)"
/>`,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(t,{tabs:u,activeTab:i,onChange:l,variant:"pill",accentColor:"var(--color-protocol-rest)"}),e.jsxs("div",{style:{fontSize:11,color:"var(--color-text-muted)"},children:["Active: ",e.jsx("strong",{style:{color:"var(--color-text-primary)"},children:i})]})]})}),e.jsx(a,{title:"Underline Variant — Overview / History / Settings",description:"Underline style is better for page-level navigation sections",code:`<TabView
  tabs={SETTINGS_TABS}
  activeTab={settingsTab}
  onChange={setSettingsTab}
  variant="underline"
/>`,children:e.jsx(t,{tabs:V,activeTab:v,onChange:x,variant:"underline"})}),e.jsx(a,{title:"Right-aligned tab — align: 'right'",description:"Mark any tab align:'right' to push it (and anything after it) to the far end of the row",code:`const tabs = [
  { id: 'params',  label: 'Params',  badge: 3 },
  { id: 'headers', label: 'Headers', badge: 6 },
  { id: 'body',    label: 'Body' },
  { id: 'auth',    label: 'Auth', align: 'right' },
];

<TabView
  tabs={tabs}
  activeTab={activeTab}
  onChange={setActiveTab}
  variant="underline"
/>`,children:e.jsx(t,{tabs:[{id:"params",label:"Params",badge:3},{id:"headers",label:"Headers",badge:6},{id:"body",label:"Body"},{id:"auth",label:"Auth",align:"right"}],activeTab:i,onChange:l,variant:"underline"})}),e.jsx(a,{title:"With Active Dot — WebSocket Live Status",description:"dot=true + dotColor shows a status indicator — e.g. connected WebSocket",code:`const tabs = [
  { id: 'messages', label: 'Messages', badge: 4 },
  { id: 'connect',  label: 'Connect',  dot: true, dotColor: 'var(--color-success)' },
  { id: 'headers',  label: 'Headers' },
];

<TabView
  tabs={tabs}
  activeTab={wsTab}
  onChange={setWsTab}
  accentColor="var(--color-protocol-websocket)"
/>`,children:e.jsx(t,{tabs:k,activeTab:g,onChange:m,accentColor:"var(--color-protocol-websocket)"})}),e.jsx(a,{title:"Protocol Selector with accentColor",description:"Use accentColor to match the active protocol's brand color",code:`const protocolColors = {
  rest:    'var(--color-protocol-rest)',
  graphql: 'var(--color-protocol-graphql)',
};

<TabView
  tabs={protocolTabs}
  activeTab={chipTab}
  onChange={setChipTab}
  accentColor={protocolColors[chipTab]}
/>`,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(t,{tabs:C,activeTab:s,onChange:T,accentColor:d[s]}),e.jsxs("div",{style:{fontSize:11,color:"var(--color-text-muted)"},children:["Protocol: ",e.jsx("strong",{style:{color:d[s]},children:s})]})]})}),e.jsx(a,{title:"Size Variants",description:"xs / sm / default / md / lg — scale tabs to fit your toolbar",code:`<TabView tabs={tabs} activeTab={t} onChange={setT} size="xs" />
<TabView tabs={tabs} activeTab={t} onChange={setT} size="sm" />
<TabView tabs={tabs} activeTab={t} onChange={setT} />
<TabView tabs={tabs} activeTab={t} onChange={setT} size="md" />`,children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:["xs","sm","default","md","lg"].map(n=>e.jsx(t,{tabs:w,activeTab:f,onChange:y,size:n==="default"?void 0:n,accentColor:"var(--color-primary)"},n))})}),e.jsx(a,{title:"Chip Variant",description:"chip variant renders each tab as a pill chip — suits filter-style tab rows",code:`<TabView
  tabs={tabs}
  activeTab={reqTab}
  onChange={setReqTab}
  variant="chip"
  accentColor="var(--color-protocol-rest)"
/>`,children:e.jsx(t,{tabs:u,activeTab:i,onChange:l,variant:"chip",accentColor:"var(--color-protocol-rest)"})})]})}const q=Object.freeze(Object.defineProperty({__proto__:null,TabViewExamples:P},Symbol.toStringTag,{value:"Module"}));function A(){return e.jsxs("div",{style:{maxWidth:860},children:[e.jsx(o,{title:"Features",children:e.jsx(b,{features:[{label:"3 variants: pill, underline, chip",color:"var(--color-primary)"},{label:"Animated sliding indicator",color:"var(--color-success)"},{label:"Badge count per tab",color:"var(--color-info)"},{label:"Dot indicator per tab",color:"var(--color-warning)"},{label:"Per-badge custom color",color:"#a855f7"},{label:"Per-dot custom color",color:"#ec4899"},{label:"Custom accent + inactive color",color:"#14b8a6"},{label:"DUI container props (width, borderRadius)",color:"#f97316"},{label:"DuiProvider size context",color:"var(--color-primary)"},{label:"ARIA role=tablist + aria-selected",color:"var(--color-success)"}]})}),e.jsx(o,{title:"Variants",children:e.jsx(j,{variants:[{label:"pill",description:"Track background with animated sliding pill indicator. Default.",color:"var(--color-primary)"},{label:"underline",description:"No track, animated 2px bottom underline slides under the active tab.",color:"var(--color-info)"},{label:"chip",description:"Each tab is an independent pill chip; no shared track or underline.",color:"#a855f7"}]})}),e.jsx(o,{title:"Props",children:e.jsx(p,{props:[{name:"tabs",type:"TabItem[]",required:!0,description:"Array of tab items to render."},{name:"activeTab",type:"string",required:!0,description:"The id of the currently active tab."},{name:"onChange",type:"(id: string) => void",required:!0,description:"Called when the user clicks a tab."},{name:"size",type:"DuiSize",description:"Falls back to DuiProvider context when omitted."},{name:"variant",type:"TabVariant",default:"'pill'",description:"Visual variant of the tab bar."},{name:"accentColor",type:"string",description:"Color for the active indicator, active tab text, and badge fills. Overrides base.activeColor."},{name:"className",type:"string",description:"Additional class names for the container element."},{name:"width",type:"DuiWidth",description:"Width of the tab container. When set, the container stretches to fill and tabs share space equally."},{name:"borderRadius",type:"DuiRadius | number",description:"Border radius override (applies to pill track and pill indicator)."},{name:"color",type:"string",description:"Override color for inactive tab text."},{name:"activeColor",type:"string",description:"Color for the active tab indicator and text. Alias for accentColor with context-level support."},{name:"fontStyle",type:"DuiFontStyle",description:"Font style override for tab labels."}]})}),e.jsx(o,{title:"TabItem shape",children:e.jsx(p,{props:[{name:"id",type:"string",required:!0,description:"Unique identifier for the tab."},{name:"label",type:"string",required:!0,description:"Display text of the tab."},{name:"badge",type:"number",description:"Count shown as a pill badge to the right of the label. Only rendered when > 0."},{name:"dot",type:"boolean",description:"When true, shows a small colored dot indicator to the right of the label."},{name:"dotColor",type:"string",description:"Override color for the dot indicator. Defaults to the accent color."},{name:"badgeColor",type:"string",description:"Override color for the badge pill. Defaults to the accent color."}]})}),e.jsx(o,{title:"TabVariant enum",children:e.jsx(S,{name:"TabVariant",values:[{value:"pill",description:"Track with sliding pill background indicator",color:"var(--color-primary)"},{value:"underline",description:"Sliding 2px bottom border indicator",color:"var(--color-info)"},{value:"chip",description:"Independent rounded chip per tab",color:"#a855f7"}]})}),e.jsx(o,{title:"Sizes",children:e.jsx(h,{sizes:[{size:"xs",height:"20px",font:"10px",desc:"Dense"},{size:"sm",height:"24px",font:"11px",desc:"Compact"},{size:"md",height:"28px",font:"12px",desc:"Default"},{size:"lg",height:"32px",font:"13px",desc:"Large"},{size:"xl",height:"36px",font:"14px",desc:"XL"}]})}),e.jsx(c,{type:"info",children:"The animated indicator uses useLayoutEffect to measure the active tab's offsetLeft and offsetWidth after each render, then transitions left and width with a 200ms ease-out. This means the animation also runs correctly during tab reordering."}),e.jsx(c,{type:"tip",children:"For browser-style tab bars with closeable tabs and a new-tab button, use TabBarView instead. TabView is for in-panel section switching (e.g. Headers / Body / Auth)."}),e.jsxs(o,{title:"DUI Sizing & Theming",description:"TabView reads its dimensions from the shared tab category base hook (useTabBase). Omitting size, width, borderRadius, or color on TabView falls back to the nearest <DuiProvider> context value, so a single provider-level change can restyle every tab-category component at once.",children:[e.jsx(b,{features:[{label:"useTabBase",color:"var(--color-primary)"},{label:"Falls back to DuiProvider context",color:"var(--color-success)"},{label:"size / width / borderRadius / color",color:"var(--color-info)"}]}),e.jsx(h,{sizes:[{size:"xxs",height:"16px",font:"8px",desc:"padX 18px"},{size:"xs",height:"20px",font:"9px",desc:"padX 18px"},{size:"sm",height:"24px",font:"10px",desc:"padX 10px"},{size:"md",height:"28px",font:"11px",desc:"padX 12px"},{size:"lg",height:"36px",font:"12px",desc:"padX 14px"},{size:"xl",height:"40px",font:"13px",desc:"padX 18px"},{size:"xxl",height:"48px",font:"14px",desc:"padX 18px"},{size:"xxxl",height:"56px",font:"16px",desc:"padX 18px"}]}),e.jsxs("div",{style:{fontSize:12,color:"var(--color-text-secondary)",marginTop:4,marginBottom:8},children:["Width presets, resolved via the ",e.jsx("code",{children:"width"})," prop or the nearest ",e.jsx("code",{children:'<DuiProvider width="...">'}),":"]}),e.jsx(z,{widths:[{width:"sm",value:"80px"},{width:"md",value:"120px"},{width:"default",value:"auto"},{width:"lg",value:"200px"},{width:"fullWidth",value:"100%"},{width:"maxContent",value:"max-content"},{width:"fw",value:"100%"},{width:"mx",value:"max-content"}]}),e.jsxs("div",{style:{fontSize:12,color:"var(--color-text-secondary)",marginTop:4,marginBottom:8},children:["Border radius presets, resolved via the ",e.jsx("code",{children:"borderRadius"})," prop:"]}),e.jsx(D,{radii:[{radius:"none",value:"0px"},{radius:"sm",value:"3px"},{radius:"md",value:"4px"},{radius:"lg",value:"6px"},{radius:"full",value:"full"}]}),e.jsxs(c,{type:"info",children:["These values come from the Tab category tokens in ",e.jsx("code",{children:"DuiTokens.ts"}),". Set a local ",e.jsx("code",{children:"size"})," prop to override the provider default for this instance only, or change ",e.jsx("code",{children:'<DuiProvider size="...">'})," to restyle every tab-category component in the tree."]})]})]})}const W=Object.freeze(Object.defineProperty({__proto__:null,TabViewDocs:A},Symbol.toStringTag,{value:"Module"}));export{q as T,W as a};
