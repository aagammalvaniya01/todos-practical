(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{8269:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,9324,23)),Promise.resolve().then(t.bind(t,2990)),Promise.resolve().then(t.bind(t,9490)),Promise.resolve().then(t.bind(t,5436)),Promise.resolve().then(t.bind(t,9142)),Promise.resolve().then(t.bind(t,4527)),Promise.resolve().then(t.bind(t,4567)),Promise.resolve().then(t.bind(t,5761)),Promise.resolve().then(t.bind(t,9757)),Promise.resolve().then(t.bind(t,2884)),Promise.resolve().then(t.bind(t,2806)),Promise.resolve().then(t.bind(t,6536)),Promise.resolve().then(t.bind(t,6681)),Promise.resolve().then(t.bind(t,5129)),Promise.resolve().then(t.bind(t,7461)),Promise.resolve().then(t.bind(t,5891)),Promise.resolve().then(t.bind(t,8301)),Promise.resolve().then(t.bind(t,3194)),Promise.resolve().then(t.bind(t,1769)),Promise.resolve().then(t.bind(t,9283)),Promise.resolve().then(t.bind(t,1297)),Promise.resolve().then(t.bind(t,6307)),Promise.resolve().then(t.bind(t,4413)),Promise.resolve().then(t.bind(t,1077)),Promise.resolve().then(t.t.bind(t,2353,23)),Promise.resolve().then(t.t.bind(t,7275,23)),Promise.resolve().then(t.bind(t,1665)),Promise.resolve().then(t.t.bind(t,5716,23))},9147:(e,r,t)=>{"use strict";t.d(r,{A:()=>i});var n=t(2115),s=t(3122);let i=()=>{let[e,r]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{(0,s.RO)("isLoggedIn")?r(!0):r(!1)},[]),e}},3122:(e,r,t)=>{"use strict";function n(e){try{var r;return function(e){if("string"!=typeof e)return e;try{return JSON.parse(e)}catch(r){return e}}(null!==(r=localStorage.getItem(e))&&void 0!==r?r:"")}catch(e){return""}}function s(e,r){localStorage.setItem(e,r)}function i(e){localStorage.removeItem(e)}t.d(r,{RO:()=>n,kx:()=>s,q9:()=>i})},7760:(e,r,t)=>{"use strict";t.d(r,{b:()=>n});let n={HOME:"/",DASHBOARD:"/tasks",LOGIN:"/login",REGISTER:"/register"}},2990:(e,r,t)=>{"use strict";t.d(r,{default:()=>n});let n=(0,t(4826).A)({typography:{fontFamily:"var(--font-roboto)"}})},9490:(e,r,t)=>{"use strict";t.d(r,{default:()=>u});var n=t(5155),s=t(9147),i=t(3122),o=t(7760),l=t(5436),d=t(1050),h=t(810),b=t(8173),a=t.n(b),c=t(2115),v=t(6046);let u=()=>{let e=(0,s.A)(),[r,t]=(0,c.useState)(e),b=(0,v.useRouter)();(0,c.useEffect)(()=>{t(e)},[e]);let u=(0,c.useCallback)(()=>{(0,i.q9)("isLoggedIn"),t(!1),b.push(o.b.HOME)},[b]);return(0,n.jsx)(l.default,{position:"fixed",height:63,width:"100%",zIndex:10,boxShadow:"0px 8px 16px 6px rgba(0, 0, 0, 0.08)",sx:{background:"linear-gradient(180deg, #FFF 0%, #E9FAF5 100%)"},paddingX:6,paddingY:2,children:(0,n.jsxs)(l.default,{display:"flex",justifyContent:"space-between",children:[(0,n.jsx)(a(),{href:o.b.HOME,children:(0,n.jsx)("h1",{children:"LOGO"})}),r?(0,n.jsx)(d.A,{onClick:u,children:"Logout"}):(0,n.jsxs)(l.default,{display:"flex",alignItems:"center",gap:4,children:[(0,n.jsx)(a(),{href:o.b.LOGIN,children:(0,n.jsx)(h.A,{sx:{"&:hover":{color:"#22CC9D"}},fontWeight:600,children:"Login"})}),(0,n.jsx)(a(),{href:o.b.REGISTER,children:(0,n.jsx)(h.A,{sx:{"&:hover":{color:"#22CC9D"}},fontWeight:600,children:"Register"})})]})]})})}},9324:()=>{}},e=>{var r=r=>e(e.s=r);e.O(0,[915,36,988,173,836,441,517,358],()=>r(8269)),_N_E=e.O()}]);