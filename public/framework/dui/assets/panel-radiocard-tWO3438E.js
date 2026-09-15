import{r as o,j as e,bD as a,x as b,am as g,at as n}from"./dui-lib-CMA--A_A.js";import{E as i,D as t,F as s,P as f,b as C,a as r,S as y,R as S}from"./panel-badgechip-DpEaHX-u.js";function j(){const[c,d]=o.useState("pro"),[l,p]=o.useState("bearer"),[u,h]=o.useState("us-east"),[v,x]=o.useState("team"),[m]=o.useState("archived");return e.jsxs("div",{children:[e.jsx(i,{title:"Default Single-Column List",description:"Stacked radio cards for a simple environment picker",code:`const [env, setEnv] = useState('staging');

<RadioCardView
  value={env}
  onChange={setEnv}
  options={[
    { value: 'dev', label: 'Development', description: 'Local mock server' },
    { value: 'staging', label: 'Staging', description: 'Shared QA environment' },
    { value: 'prod', label: 'Production', description: 'Live traffic — use with care' },
  ]}
/>`,children:e.jsx(a,{value:u,onChange:h,options:[{value:"us-east",label:"US East",description:"N. Virginia — lowest latency for US clients"},{value:"eu-west",label:"EU West",description:"Ireland — GDPR compliant storage"},{value:"ap-south",label:"AP South",description:"Mumbai — best for APAC traffic"}]})}),e.jsxs(i,{title:"Interactive Auth Method Picker",description:"Stateful selection with a live summary readout below the cards",code:`const [authMethod, setAuthMethod] = useState('bearer');

<RadioCardView
  value={authMethod}
  onChange={setAuthMethod}
  columns={3}
  options={[
    { value: 'none', label: 'No Auth', icon: <GlobeIcon size={16} /> },
    { value: 'bearer', label: 'Bearer Token', icon: <LockIcon size={16} /> },
    { value: 'apikey', label: 'API Key', icon: <SparkleIcon size={16} /> },
  ]}
/>
<p>Selected: {authMethod}</p>`,children:[e.jsx(a,{value:l,onChange:p,columns:3,options:[{value:"none",label:"No Auth",description:"Public endpoint",icon:e.jsx(b,{size:16})},{value:"bearer",label:"Bearer Token",description:"Authorization header",icon:e.jsx(g,{size:16})},{value:"apikey",label:"API Key",description:"x-api-key header",icon:e.jsx(n,{size:16})}]}),e.jsxs("div",{style:{marginTop:8,fontSize:11,color:"var(--color-text-muted)"},children:["Auth mode: ",e.jsx("strong",{style:{color:"var(--color-text-primary)"},children:l})]})]}),e.jsx(i,{title:"Columns, Size & Accent Color Showcase",description:"Grid layout via columns, size prop, and a custom accentColor",code:`<RadioCardView
  value={accent}
  onChange={setAccent}
  columns={2}
  size="lg"
  accentColor="var(--color-protocol-graphql)"
  options={[
    { value: 'solo', label: 'Solo Workspace' },
    { value: 'team', label: 'Team Workspace' },
  ]}
/>`,children:e.jsx(a,{value:v,onChange:x,columns:2,size:"lg",accentColor:"var(--color-protocol-graphql)",options:[{value:"solo",label:"Solo Workspace",description:"Just you, private collections"},{value:"team",label:"Team Workspace",description:"Shared collections & environments"}]})}),e.jsx(i,{title:"Billing Plan Selector",description:"Domain-realistic pricing-tier picker for an API testing tool's upgrade flow",code:`const [plan, setPlan] = useState('pro');

<RadioCardView
  columns={3}
  value={plan}
  onChange={setPlan}
  options={[
    { value: 'free', label: 'Free', description: '100 requests/mo, 3 collections' },
    { value: 'pro', label: 'Pro', description: 'Unlimited requests, mock servers', icon: <SparkleIcon size={16} /> },
    { value: 'team', label: 'Team', description: 'Shared workspaces, RBAC, SSO' },
  ]}
/>`,children:e.jsx(a,{columns:3,value:c,onChange:d,options:[{value:"free",label:"Free",description:"100 requests/mo, 3 collections"},{value:"pro",label:"Pro",description:"Unlimited requests, mock servers",icon:e.jsx(n,{size:16})},{value:"team",label:"Team",description:"Shared workspaces, RBAC, SSO"}]})}),e.jsx(i,{title:"Disabled Option (Edge Case)",description:"Individual options can be disabled — e.g. a plan tier unavailable for the current billing cycle",code:`<RadioCardView
  value={choice}
  onChange={setChoice}
  options={[
    { value: 'active', label: 'Active Collection' },
    { value: 'archived', label: 'Archived Collection', description: 'Read-only, cannot be edited', disabled: true },
  ]}
/>`,children:e.jsx(a,{value:m,onChange:()=>{},options:[{value:"active",label:"Active Collection",description:"Currently syncing with remote"},{value:"archived",label:"Archived Collection",description:"Read-only, cannot be edited",disabled:!0}]})})]})}const w=Object.freeze(Object.defineProperty({__proto__:null,RadioCardViewExamples:j},Symbol.toStringTag,{value:"Module"}));function k(){return e.jsxs("div",{style:{maxWidth:860},children:[e.jsx(t,{title:"Features",children:e.jsx(s,{features:[{label:"Card-style single-select radio group",color:"var(--color-primary)"},{label:"Optional leading icon per option",color:"var(--color-success)"},{label:"Optional description text per option",color:"var(--color-info)"},{label:"Configurable grid columns",color:"var(--color-warning)"},{label:"Per-option disabled state",color:"#a855f7"},{label:"Custom accent color",color:"#ec4899"},{label:"DuiSize + DuiRadius token support",color:"#14b8a6"},{label:"Selected check indicator",color:"#f97316"}]})}),e.jsx(t,{title:"Props",children:e.jsx(f,{props:[{name:"options",type:"RadioCardOption[]",required:!0,description:"Array of selectable cards: { value, label, description?, icon?, disabled? }."},{name:"value",type:"string",required:!0,description:"The currently selected option value."},{name:"onChange",type:"(value: string) => void",required:!0,description:"Called with the newly selected option value when a card is clicked."},{name:"size",type:"DuiSize",default:"context",description:"Controls padding, gap, and font size via the shared card sizing base. Falls back to DuiProvider context."},{name:"borderRadius",type:"DuiRadius | number",description:"Corner radius for each card — a DuiRadius token or an explicit pixel number."},{name:"accentColor",type:"string",default:"base.color ?? 'var(--color-primary)'",description:"Color used for the selected border, tinted background, label text, and check icon."},{name:"columns",type:"number",default:"1",description:"Number of columns in the CSS grid. Default 1 renders a single stacked column of rows."},{name:"className",type:"string",description:"Additional class name applied to the outer grid container."},{name:"style",type:"CSSProperties",description:"Inline style override merged onto the outer grid container."}]})}),e.jsx(t,{title:"RadioCardOption shape",children:e.jsx(C,{name:"RadioCardOption",values:[{value:"value",description:"Unique string identifying this option (required).",color:"var(--color-primary)"},{value:"label",description:"Bold title text for the card (required).",color:"var(--color-success)"},{value:"description",description:"Optional muted helper text under the label.",color:"var(--color-info)"},{value:"icon",description:"Optional ReactNode rendered before the text block.",color:"#a855f7"},{value:"disabled",description:"When true, the card is dimmed and unclickable.",color:"var(--color-error)"}]})}),e.jsx(r,{type:"info",children:"RadioCardView is a controlled component — value and onChange are both required. There is no internal selection state, so the parent must update value in the onChange handler."}),e.jsxs(r,{type:"tip",children:["Use columns to build a plan-picker or auth-method grid (e.g. columns=","{3}","). For long lists with descriptions, keep columns at 1 so text has room to wrap."]}),e.jsxs(t,{title:"DUI Sizing & Theming",description:"RadioCardView reads its dimensions from the shared card category base hook (useCardBase). Omitting size, borderRadius, or color on RadioCardView falls back to the nearest <DuiProvider> context value, so a single provider-level change can restyle every card-category component at once.",children:[e.jsx(s,{features:[{label:"useCardBase",color:"var(--color-primary)"},{label:"Falls back to DuiProvider context",color:"var(--color-success)"},{label:"size / borderRadius / color",color:"var(--color-info)"}]}),e.jsx(y,{sizes:[{size:"xxs",height:"28px",font:"8px",desc:"pad 10px 16px"},{size:"xs",height:"36px",font:"9px",desc:"pad 10px 16px"},{size:"sm",height:"48px",font:"10px",desc:"pad 4px 8px"},{size:"md",height:"64px",font:"11px",desc:"pad 6px 10px"},{size:"lg",height:"80px",font:"12px",desc:"pad 8px 12px"},{size:"xl",height:"96px",font:"13px",desc:"pad 10px 16px"},{size:"xxl",height:"112px",font:"14px",desc:"pad 10px 16px"},{size:"xxxl",height:"128px",font:"16px",desc:"pad 10px 16px"}]}),e.jsxs("div",{style:{fontSize:12,color:"var(--color-text-secondary)",marginTop:4,marginBottom:8},children:["Border radius presets, resolved via the ",e.jsx("code",{children:"borderRadius"})," prop:"]}),e.jsx(S,{radii:[{radius:"none",value:"0px"},{radius:"sm",value:"3px"},{radius:"md",value:"4px"},{radius:"lg",value:"6px"},{radius:"full",value:"full"}]}),e.jsxs(r,{type:"info",children:["These values come from the Card category tokens in ",e.jsx("code",{children:"DuiTokens.ts"}),". Set a local ",e.jsx("code",{children:"size"})," prop to override the provider default for this instance only, or change ",e.jsx("code",{children:'<DuiProvider size="...">'})," to restyle every card-category component in the tree."]})]})]})}const A=Object.freeze(Object.defineProperty({__proto__:null,RadioCardViewDocs:k},Symbol.toStringTag,{value:"Module"}));export{w as R,A as a};
