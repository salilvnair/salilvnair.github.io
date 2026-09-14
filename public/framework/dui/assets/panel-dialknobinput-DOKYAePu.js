import{r as a,j as e,dT as t}from"./dui-lib-BoPcLOzx.js";import{E as o,D as i,F as r,P as h,a as n,S as b}from"./panel-chipsview-DUXBy88l.js";function g(){const[l,c]=a.useState(30),[u,p]=a.useState(65),[d,m]=a.useState(3),[s,x]=a.useState(4);return e.jsxs("div",{children:[e.jsx(o,{title:"Request Timeout Knob",description:"Common default use — tune a numeric setting with a labeled value readout",code:`const [timeout, setTimeout] = useState(30);

<DialKnobInputView value={timeout} onChange={setTimeout} label="Timeout (s)" />`,children:e.jsx(t,{value:l,onChange:c,label:"Timeout (s)"})}),e.jsx(o,{title:"Interactive Retry Count",description:"Stateful knob with a coarse tick sweep — value snaps to whole retries",code:`const [retries, setRetries] = useState(3);

<DialKnobInputView
  value={retries}
  onChange={setRetries}
  min={0}
  max={5}
  ticks={5}
  label="Max retries"
  color="var(--color-warning)"
/>`,children:e.jsx(t,{value:d,onChange:m,min:0,max:5,ticks:5,label:"Max retries",color:"var(--color-warning)"})}),e.jsx(o,{title:"Size Variants",description:"Knob diameter scales with the DUI size token",code:`<DialKnobInputView value={40} onChange={() => {}} size="xs" label="xs" />
<DialKnobInputView value={40} onChange={() => {}} size="md" label="md" />
<DialKnobInputView value={40} onChange={() => {}} size="xl" label="xl" />`,children:e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"flex-end"},children:[e.jsx(t,{value:40,onChange:()=>{},size:"xs",label:"xs"}),e.jsx(t,{value:40,onChange:()=>{},size:"md",label:"md"}),e.jsx(t,{value:40,onChange:()=>{},size:"xl",label:"xl"})]})}),e.jsxs(o,{title:"Environment Variable Concurrency Limiter",description:"API-testing use case — cap parallel requests fired from a collection runner",code:`const [concurrency, setConcurrency] = useState(4);

<DialKnobInputView
  value={concurrency}
  onChange={setConcurrency}
  min={1}
  max={20}
  ticks={19}
  label="Parallel requests"
  color="var(--color-info)"
/>`,children:[e.jsx(t,{value:s,onChange:x,min:1,max:20,ticks:19,label:"Parallel requests",color:"var(--color-info)"}),e.jsxs("div",{style:{marginTop:8,fontSize:11,color:"var(--color-text-muted)"},children:["Runner will fire up to ",e.jsx("strong",{style:{color:"var(--color-text-primary)"},children:s})," requests at once."]})]}),e.jsx(o,{title:"Fine-grained Sweep (many ticks)",description:"Edge case — a high tick count for near-continuous feeling control, e.g. audio-style output volume",code:`const [volume, setVolume] = useState(65);

<DialKnobInputView
  value={volume}
  onChange={setVolume}
  min={0}
  max={100}
  ticks={50}
  label="Mock latency jitter %"
  color="var(--color-success)"
/>`,children:e.jsx(t,{value:u,onChange:p,min:0,max:100,ticks:50,label:"Mock latency jitter %",color:"var(--color-success)"})})]})}const w=Object.freeze(Object.defineProperty({__proto__:null,DialKnobInputViewExamples:g},Symbol.toStringTag,{value:"Module"}));function v(){return e.jsxs("div",{style:{maxWidth:860},children:[e.jsx(i,{title:"Features",children:e.jsx(r,{features:[{label:"Drag-in-a-circle rotary gesture",color:"var(--color-primary)"},{label:"Configurable snap-ticks",color:"var(--color-success)"},{label:"Haptic-style micro-bounce per notch",color:"var(--color-info)"},{label:"Custom min/max range",color:"var(--color-warning)"},{label:"DuiProvider size context (diameter scales)",color:"#a855f7"},{label:"Custom accent color",color:"#ec4899"},{label:"Optional value label readout",color:"#14b8a6"}]})}),e.jsx(i,{title:"Props",children:e.jsx(h,{props:[{name:"value",type:"number",required:!0,description:"Current knob value, controlled by the parent."},{name:"onChange",type:"(value: number) => void",required:!0,description:"Called continuously while dragging with the new snapped value."},{name:"min",type:"number",default:"0",description:"Minimum value of the sweep."},{name:"max",type:"number",default:"100",description:"Maximum value of the sweep."},{name:"ticks",type:"number",default:"10",description:"Number of discrete snap-ticks across the full 270° sweep. Value always snaps to the nearest tick."},{name:"label",type:"string",description:'Optional caption rendered below the knob, showing "label: value".'},{name:"size",type:"DuiSize",default:"context",description:"Controls the knob diameter (40px at xxs up to 112px at xxxl). Falls back to DuiProvider context."},{name:"color",type:"string",default:"var(--color-primary)",description:"Accent color for the active ticks and the pointer needle."},{name:"className",type:"string",description:"Additional class names applied to the outer wrapper."},{name:"style",type:"CSSProperties",description:"Inline style override applied to the outer wrapper."}]})}),e.jsx(n,{type:"tip",children:"The sweep spans -135deg to +135deg (270deg total, matching a real analog dial). Dragging computes the pointer angle from the knob's center and snaps to the nearest of `ticks` steps between `min` and `max` — it does not track raw pixel deltas, so a fast flick that crosses the sweep boundary still clamps correctly."}),e.jsx(n,{type:"info",children:"Each time the snapped tick index changes, the knob briefly applies a `dui_dialknob--bounce` CSS class for a haptic-style micro animation. Keep `ticks` reasonably low (5-20) for a satisfying discrete feel — very high tick counts approach continuous dragging and the bounce becomes imperceptible."}),e.jsxs(i,{title:"DUI Sizing & Theming",description:"DialKnobInputView reads its dimensions from the shared input category base hook (useInputBase). Omitting size, width, borderRadius, or color on DialKnobInputView falls back to the nearest <DuiProvider> context value, so a single provider-level change can restyle every input-category component at once.",children:[e.jsx(r,{features:[{label:"useInputBase",color:"var(--color-primary)"},{label:"Falls back to DuiProvider context",color:"var(--color-success)"},{label:"size / width / borderRadius / color",color:"var(--color-info)"}]}),e.jsx(b,{sizes:[{size:"xxs",height:"16px",font:"8px",desc:"padX 4px"},{size:"xs",height:"20px",font:"9px",desc:"padX 6px"},{size:"sm",height:"24px",font:"10px",desc:"padX 8px"},{size:"md",height:"28px",font:"11px",desc:"padX 10px"},{size:"lg",height:"36px",font:"12px",desc:"padX 12px"},{size:"xl",height:"40px",font:"13px",desc:"padX 16px"},{size:"xxl",height:"48px",font:"14px",desc:"padX 20px"},{size:"xxxl",height:"56px",font:"16px",desc:"padX 24px"}]}),e.jsxs(n,{type:"info",children:["These values come from the Input category tokens in ",e.jsx("code",{children:"DuiTokens.ts"}),". Set a local ",e.jsx("code",{children:"size"})," prop to override the provider default for this instance only, or change ",e.jsx("code",{children:'<DuiProvider size="...">'})," to restyle every input-category component in the tree."]})]})]})}const j=Object.freeze(Object.defineProperty({__proto__:null,DialKnobInputViewDocs:v},Symbol.toStringTag,{value:"Module"}));export{w as D,j as a};
