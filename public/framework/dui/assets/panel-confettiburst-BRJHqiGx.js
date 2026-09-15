import{r,j as e,K as i,c0 as o}from"./dui-lib-CMA--A_A.js";import{E as n,D as l,F as m,P as C,a as c}from"./panel-badgechip-DpEaHX-u.js";function b(){const a=r.useRef(null),u=r.useRef(null),f=r.useRef(null),d=r.useRef(null),p=r.useRef(null);return e.jsxs("div",{children:[e.jsxs(n,{title:"Basic Fire",description:"Fire a burst from a button click — origin defaults to viewport center",code:`function Preview() {
  const ref = useRef(null);
  return (
    <>
      <ButtonView onClick={() => ref.current.fire()}>Celebrate</ButtonView>
      <ConfettiBurstView ref={ref} />
    </>
  );
}`,children:[e.jsx(i,{onClick:()=>{var t;return(t=a.current)==null?void 0:t.fire()},children:"Celebrate"}),e.jsx(o,{ref:a})]}),e.jsxs(n,{title:"Collection Run Passed (interactive)",description:"Trigger celebration confetti when all requests in a collection run pass",code:`function Preview() {
  const ref = useRef(null);
  return (
    <>
      <ButtonView onClick={() => ref.current.fire()} color="var(--color-success)">
        Run Collection: 24/24 passed
      </ButtonView>
      <ConfettiBurstView ref={ref} colors={['#22C55E', '#6366F1', '#F59E0B']} />
    </>
  );
}`,children:[e.jsx(i,{onClick:()=>{var t;return(t=u.current)==null?void 0:t.fire()},color:"var(--color-success)",children:"Run Collection: 24/24 passed"}),e.jsx(o,{ref:u,colors:["#22C55E","#6366F1","#F59E0B"]})]}),e.jsxs(n,{title:"Fire from Click Origin",description:"Pass the click event's coordinates so confetti bursts from the button itself, not viewport center",code:`<ButtonView
  onClick={(e) => {
    const r = e.currentTarget.getBoundingClientRect();
    ref.current.fire({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
  }}
>
  Burst from here
</ButtonView>
<ConfettiBurstView ref={ref} />`,children:[e.jsx(i,{onClick:t=>{var h;const s=t.currentTarget.getBoundingClientRect();(h=f.current)==null||h.fire({x:s.left+s.width/2,y:s.top+s.height/2})},children:"Burst from here"}),e.jsx(o,{ref:f})]}),e.jsxs(n,{title:"Custom Colors",description:"Override the palette to match a brand or a specific celebratory theme",code:"<ConfettiBurstView ref={ref} colors={['#ec4899', '#a855f7', '#14b8a6']} />",children:[e.jsx(i,{onClick:()=>{var t;return(t=d.current)==null?void 0:t.fire()},variant:"ghost",children:"Fire custom palette"}),e.jsx(o,{ref:d,colors:["#ec4899","#a855f7","#14b8a6"]})]}),e.jsxs(n,{title:"Dense Burst (particleCount)",description:"Increase particleCount for a bigger, denser celebration — e.g. hitting a milestone",code:"<ConfettiBurstView ref={ref} particleCount={200} />",children:[e.jsx(i,{onClick:()=>{var t;return(t=p.current)==null?void 0:t.fire()},variant:"ghost",children:"1000th request sent"}),e.jsx(o,{ref:p,particleCount:200})]})]})}const w=Object.freeze(Object.defineProperty({__proto__:null,ConfettiBurstViewExamples:b},Symbol.toStringTag,{value:"Module"}));function x(){return e.jsxs("div",{style:{maxWidth:860},children:[e.jsx(l,{title:"Features",children:e.jsx(m,{features:[{label:"Imperative ref API (fire())",color:"var(--color-primary)"},{label:"Canvas-based particle physics",color:"var(--color-success)"},{label:"Custom origin point support",color:"var(--color-info)"},{label:"Custom color palette",color:"var(--color-warning)"},{label:"Configurable particle count",color:"#a855f7"},{label:"Zero-cost when idle (no particles rendered)",color:"#ec4899"}]})}),e.jsx(l,{title:"Props",children:e.jsx(C,{props:[{name:"colors",type:"string[]",default:"['#6366F1', '#22C55E', '#F59E0B', '#EF4444', '#EC4899', '#06B6D4']",description:"Palette particles are randomly drawn from."},{name:"particleCount",type:"number",default:"80",description:"Number of particles spawned per fire() call."}]})}),e.jsx(l,{title:"ConfettiBurstHandle (ref)",children:e.jsx(C,{props:[{name:"fire",type:"(origin?: { x: number; y: number }) => void",required:!0,description:"Spawns a burst. Origin defaults to viewport center; pass a point (e.g. from getBoundingClientRect()) to burst from a specific button or element."}]})}),e.jsx(c,{type:"tip",children:"ConfettiBurstView renders a fixed, full-viewport, pointer-events-none canvas that stays mounted (invisible) until fired — mount it once near the root of the tree you want celebrations in, then call ref.current.fire() from any event handler, e.g. after a collection run finishes 100% green."}),e.jsx(c,{type:"warning",children:"This component has no open/visible prop — visibility is entirely driven by whether particles are alive. Don't try to control it declaratively; always trigger it via the ref handle."}),e.jsx(l,{title:"DUI Sizing & Theming",description:"ConfettiBurstView does not read size, width, color, or borderRadius from the DuiProvider context — it is not part of the sized-component system and has no size prop to fall back to a provider default.",children:e.jsxs(c,{type:"info",children:["ConfettiBurstView is unaffected by ",e.jsx("code",{children:"<DuiProvider>"})," size/color context. Style it directly via its own props (and CSS variables where documented above) rather than expecting provider-level sizing to apply."]})})]})}const j=Object.freeze(Object.defineProperty({__proto__:null,ConfettiBurstViewDocs:x},Symbol.toStringTag,{value:"Module"}));export{w as C,j as a};
