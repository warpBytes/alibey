(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[904],{5683:(e,t,s)=>{"use strict";s.d(t,{default:()=>b});var r=s(5155),l=s(2115),a=s(2810),n=s(3999),i=s(2247),d=s(1329);let c=[{label:"Food"},{label:"Cocktails"},{label:"Drinks"},{label:"Wine"}];var o=s(6417);let x=[{id:1,icon:(0,r.jsx)(o.iU,{className:"h-[56px] w-[58px] translate-y-[-32px] text-foreground md:h-[116px] md:w-[116px] md:translate-y-0"})},{id:2,icon:(0,r.jsx)(o.co,{className:"h-[68px] w-[65px] translate-y-[32px] text-foreground md:h-[136px] md:w-[131px] md:translate-y-0 md:rotate-[-4deg]"})},{id:3,icon:(0,r.jsx)(o.rC,{className:"h-[62px] w-[50px] translate-y-[-32px] text-foreground md:h-[124px] md:w-[100px] md:translate-y-0 md:rotate-[2deg]"})},{id:4,icon:(0,r.jsx)(o.vV,{className:"h-[63px] w-[31px] translate-y-[32px] text-foreground md:h-[128px] md:w-[56px] md:translate-y-0 md:rotate-[-4deg]"})}],m={Food:"Cold Starter",Cocktails:"Cocktails",Drinks:"Beers",Wine:"Sparkling Wines"},p={"Cold Starter":"Food",Cocktails:"Cocktails",Beers:"Drinks","Sparkling Wines":"Wine"},u=()=>(0,r.jsxs)("div",{className:"relative flex h-[296px] w-full items-center justify-center bg-background md:h-[434px]",children:[(0,r.jsx)("div",{className:"absolute left-0 right-0 top-1/2 h-16 w-full -translate-y-1/2 bg-[length:64px_64px] md:h-[100px] md:bg-[length:100px_100px]",style:{backgroundImage:'url("/images/union.png")',backgroundRepeat:"repeat"}}),(0,r.jsx)("div",{className:"relative z-10 flex items-center justify-center gap-8 md:gap-24",children:x.map(e=>{let{icon:t,id:s}=e;return(0,r.jsx)("div",{children:t},s)})})]});var f=s(1182),h=s(5891),g=s(8712);let j=e=>{let{activeFilter:t,sectionRefs:s}=e,l=Object.entries(f[t]).map(e=>{let[t,s]=e;return{id:t,items:[...s]}});return(0,r.jsx)("div",{className:"mx-auto flex w-full max-w-[950px] flex-col gap-20",children:(0,r.jsx)("div",{className:"flex flex-col gap-16 md:gap-20",children:l.map(e=>(0,r.jsxs)("div",{ref:t=>{s.current[e.id]=t},className:"flex flex-col gap-10",children:[(0,r.jsx)("h2",{className:"text-center font-gambarino text-heading-sm md:text-heading-md",children:e.id}),(0,r.jsx)("div",{children:e.items.map((t,s)=>(0,r.jsx)("div",{className:(0,n.cn)("border-foreground/5 border-b py-4 last:border-b-0",0===s&&"pt-0",s===e.items.length-1&&"pb-0"),children:(0,r.jsxs)("div",{className:"flex items-start justify-between gap-6",children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("h3",{className:"flex flex-wrap items-center gap-2 font-medium",children:[t.name,t.dietary&&(0,r.jsx)(g.A,{type:t.dietary})]}),(0,r.jsx)("p",{className:"mt-1 text-sm text-neutral600",children:t.description})]}),t.price?(0,r.jsx)("span",{children:(0,h.$)(t.price)}):(0,r.jsx)("div",{className:"flex flex-col gap-[2px]",children:Object.entries(t.prices).map(e=>{let[t,s]=e;return(0,r.jsxs)("span",{children:[t,": ",(0,h.$)(s)]},t)})})]})},s))})]},e.id))})})},b=()=>{let[e,t]=(0,l.useState)(c[0].label),[s,o]=(0,l.useState)(!1),x=(0,l.useRef)(null),f=(0,l.useRef)({});(0,l.useEffect)(()=>{new a.A({autoRaf:!0});let e=()=>{if(x.current){let{top:e}=x.current.getBoundingClientRect();o(e<=0)}for(let[e,s]of Object.entries(f.current))if(s){let r=s.getBoundingClientRect();if(r.top<=100&&r.bottom>=100&&p[e]){t(p[e]);break}}};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let h=e=>{t(e);let r=m[e],l=f.current[r];if(l){let e=l.offsetTop-64*!!s;window.scrollTo({top:e,behavior:"smooth"})}};return(0,r.jsxs)("div",{className:"mb-20 w-full",children:[(0,r.jsx)(u,{}),(0,r.jsxs)("div",{className:"z-20 flex flex-col gap-12 md:gap-16",children:[(0,r.jsx)(d.A,{title:"Menu",className:"z-10 md:mt-[-38px]"}),(0,r.jsx)("div",{className:"sticky top-0 z-30 px-4 md:px-10",children:(0,r.jsx)("div",{ref:x,className:(0,n.cn)("flex h-16 w-full items-center justify-between border-b bg-background transition-all duration-300 sm:justify-center sm:gap-10",s?"border-foreground":"border-transparent"),children:c.map(t=>{let{label:s}=t;return(0,r.jsxs)("button",{onClick:()=>h(s),className:"group",children:[(0,r.jsx)("span",{className:(0,n.cn)("!text-xl font-medium transition-colors duration-700 group-hover:text-foreground",s!==e&&"text-neutral500"),children:s}),(0,r.jsx)("div",{className:(0,n.cn)("h-[1px] w-0 bg-foreground opacity-0 transition-all duration-700 group-hover:w-full group-hover:opacity-100",s===e&&"w-full opacity-100")})]},s)})})}),c.map(e=>{let{label:t}=e;return(0,r.jsx)(j,{activeFilter:t,sectionRefs:f},t)})]}),(0,r.jsx)("div",{className:"mt-16 flex items-center justify-center",children:(0,r.jsx)(i.A,{})})]})}},9452:(e,t,s)=>{Promise.resolve().then(s.bind(s,5683))}},e=>{var t=t=>e(e.s=t);e.O(0,[342,810,463,441,684,358],()=>t(9452)),_N_E=e.O()}]);