function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingControls-DCeM6aQE.js","assets/modules/unplugin-icons-Tm_FbedS.js","assets/modules/vue-CGUuo2jJ.js","assets/modules/shiki-C7i9nd5d.js","assets/modules/shiki-BSchMNmt.css","assets/slidev/DrawingPreview-Fl0imUe9.js","assets/index-DQBwKkXL.js","assets/index-1TNRQDuE.css","assets/slidev/bottom-C6B9oPet.js","assets/slidev/context-C_zNRZg0.js","assets/bottom-DbIWt59F.css","assets/DrawingControls-C5T1oZL5.css","assets/slidev/DrawingLayer-Q9NxMXy6.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{t as O,ac as Dt,ad as Ot,y as T,ae as L,af as G,U as Ft,D as me,ag as Vt,d as Y,ah as jt,C as st,a4 as Bt,a1 as Wt,b as y,e as A,f as le,h as ce,i as F,o as h,aa as Ve,x as X,F as H,a2 as ke,A as u,l as b,Y as Ee,a9 as Gt,ai as Kt,c as C,g as x,ab as Ut,k as R,X as nt,M as Ie,r as Ht,aj as zt,ak as Yt,a5 as ot,al as rt,j as he,am as Qt,N as Xt,m as Jt,an as qt,p as Zt,a as es}from"../modules/vue-CGUuo2jJ.js";import{u as se,n as ts,t as Te,f as we,a as be,s as ss,c as ie,g as ns,b as z,o as Ue,_ as it,p as os,q as He,d as at,C as lt,j as ze,m as xe,v as Ye}from"../index-DQBwKkXL.js";import{u as je,D as rs}from"./DrawingPreview-Fl0imUe9.js";import{b as W,t as Re,m as Z,n as ct,o as ut,q as is,r as as,u as ls,v as dt,k as Se,x as Ae,s as fe,p as cs,y as us,f as Qe,z as ae,w as Me,S as ht,g as ft,G as ds,a as hs}from"./bottom-C6B9oPet.js";import{e as fs,f as ps,g as vs,h as _s,i as gs,j as ms,k as ys,l as pt,m as ks,n as ws,o as bs,p as xs,q as Ss,r as Ms,s as $s,t as Cs,u as Es,v as Is}from"../modules/unplugin-icons-Tm_FbedS.js";import{u as Ts}from"./context-C_zNRZg0.js";import{t as Rs}from"../modules/shiki-C7i9nd5d.js";function Fo(t){const{next:e,nextSlide:s,prev:n,prevSlide:o}=se(),{isDrawing:r}=je(),i=O(0),{direction:a,distanceX:l,distanceY:c}=Dt(t,{pointerTypes:["touch"],onSwipeStart(){r.value||(i.value=Ot())},onSwipeEnd(){if(!i.value||r.value)return;const d=Math.abs(l.value),f=Math.abs(c.value);d/window.innerWidth>.3||d>75?a.value==="left"?e():n():(f/window.innerHeight>.4||f>200)&&(a.value==="down"?o():s())}})}const _e=O(1),ge=T(()=>ts.value.length),D=O(0),Be=O(0);function As(){D.value>_e.value&&(D.value-=1)}function Ls(){D.value<ge.value&&(D.value+=1)}function Ns(){if(D.value>_e.value){let t=D.value-Be.value;t<_e.value&&(t=_e.value),D.value=t}}function Ps(){if(D.value<ge.value){let t=D.value+Be.value;t>ge.value&&(t=ge.value),D.value=t}}const Ds=[];function Os(){const{go:t,goFirst:e,goLast:s,next:n,nextSlide:o,prev:r,prevSlide:i}=se(),{drawingEnabled:a}=je(),{escape:l,space:c,shift:d,left:f,right:p,up:v,down:k,enter:_,d:M,g:S,o:I,"`":w}=ct,N={next:n,prev:r,nextSlide:o,prevSlide:i,go:t,goFirst:e,goLast:s,downloadPDF:ut,toggleDark:Te,toggleOverview:Re,toggleDrawing:()=>a.value=!a.value,escapeOverview:()=>W.value=!1,showGotoDialog:()=>Z.value=!Z.value};let g=[{name:"next_space",key:L(c,G(d)),fn:n,autoRepeat:!0},{name:"prev_space",key:L(c,d),fn:r,autoRepeat:!0},{name:"next_right",key:L(p,G(d),G(W)),fn:n,autoRepeat:!0},{name:"prev_left",key:L(f,G(d),G(W)),fn:r,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:n,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:r,autoRepeat:!0},{name:"next_down",key:L(k,G(W)),fn:o,autoRepeat:!0},{name:"prev_up",key:L(v,G(W)),fn:()=>i(!1),autoRepeat:!0},{name:"next_shift",key:L(p,d),fn:o,autoRepeat:!0},{name:"prev_shift",key:L(f,d),fn:()=>i(!1),autoRepeat:!0},{name:"toggle_dark",key:L(M,G(a)),fn:Te},{name:"toggle_overview",key:L(Ft(I,w),G(a)),fn:Re},{name:"hide_overview",key:L(l,G(a)),fn:()=>W.value=!1},{name:"goto",key:L(S,G(a)),fn:()=>Z.value=!Z.value},{name:"next_overview",key:L(p,W),fn:Ls},{name:"prev_overview",key:L(f,W),fn:As},{name:"up_overview",key:L(v,W),fn:Ns},{name:"down_overview",key:L(k,W),fn:Ps},{name:"goto_from_overview",key:L(_,W),fn:()=>{t(D.value),W.value=!1}}];const P=new Set(g.map($=>$.name));for(const $ of Ds){const j=$(N,g);g=g.concat(j)}if(g.filter($=>$.name&&P.has($.name)).length===0){const $=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert($),console.warn($)}return g}const vt=L(G(ls),G(as),is);function Fs(t,e,s=!1){typeof t=="string"&&(t=ct[t]);const n=L(t,vt);let o=0,r;const i=()=>{if(clearTimeout(r),!n.value){o=0;return}s&&(r=setTimeout(i,Math.max(1e3-o*250,150)),o++),e()};return me(n,i,{flush:"sync"})}function Vs(t,e){return Vt(t,s=>{vt.value&&(s.repeat||e())})}function Vo(){const t=Os();new Map(t.map(s=>[s.key,s])).forEach(s=>{s.fn&&Fs(s.key,s.fn,s.autoRepeat)}),Vs("f",()=>dt.toggle())}const js=Y({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]},isMain:{type:Boolean,default:!1}},setup(t){const e=t,{clicksDirection:s,isPrintMode:n}=se(),o=O(),r=jt(o),i=T(()=>e.width?e.width:r.width.value),a=T(()=>e.width?e.width/we.value:r.height.value);e.width&&st(()=>{o.value&&(o.value.style.width=`${i.value}px`,o.value.style.height=`${a.value}px`)});const l=T(()=>i.value/a.value),c=T(()=>e.scale&&!n.value?e.scale:l.value<we.value?i.value/be.value:a.value*we.value/be.value),d=T(()=>({height:`${ss.value}px`,width:`${be.value}px`,transform:`translate(-50%, -50%) scale(${c.value})`,"--slidev-slide-scale":c.value})),f=T(()=>({"select-none":!ie.selectable,"slidev-nav-go-forward":s.value>0,"slidev-nav-go-backward":s.value<0}));return e.isMain&&Bt(T(()=>`
    :root {
      --slidev-slide-scale: ${c.value};
    }
  `)),Wt(ns,c),(p,v)=>(h(),y("div",{id:"slide-container",ref_key:"root",ref:o,class:F(["slidev-slides-container",f.value])},[A("div",{id:"slide-content",class:"slidev-slide-content",style:ce(d.value)},[le(p.$slots,"default")],4),le(p.$slots,"controls")],2))}}),Bs=z(js,[["__file","/Users/orion/Developer/Talks/apl-architecture/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Ws={class:"select-list"},Gs={class:"title"},Ks={class:"items"},Us=["onClick"],Hs=Y({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(t,{emit:e}){const o=Ve(t,"modelValue",e,{passive:!0});return(r,i)=>{const a=fs;return h(),y("div",Ws,[A("div",Gs,X(t.title),1),A("div",Ks,[(h(!0),y(H,null,ke(t.items,l=>(h(),y("div",{key:l.value,class:F(["item",{active:u(o)===l.value}]),onClick:()=>{var c;o.value=l.value,(c=l.onClick)==null||c.call(l)}},[b(a,{class:F(["text-green-500",{"opacity-0":u(o)!==l.value}])},null,8,["class"]),Ee(" "+X(l.display||l.value),1)],10,Us))),128))])])}}}),zs=z(Hs,[["__scopeId","data-v-3f89fa11"],["__file","/Users/orion/Developer/Talks/apl-architecture/node_modules/@slidev/client/internals/SelectList.vue"]]),Ys={class:"text-sm"},Qs=Y({__name:"Settings",setup(t){const e=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,n)=>(h(),y("div",Ys,[b(zs,{modelValue:u(Se),"onUpdate:modelValue":n[0]||(n[0]=o=>Gt(Se)?Se.value=o:null),title:"Scale",items:e},null,8,["modelValue"])]))}}),Xs=z(Qs,[["__file","/Users/orion/Developer/Talks/apl-architecture/node_modules/@slidev/client/internals/Settings.vue"]]),Js={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},qs=Y({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(t,{emit:e}){const o=Ve(t,"modelValue",e,{passive:!0}),r=O();return Kt(r,()=>{o.value=!1}),(i,a)=>(h(),y("div",{ref_key:"el",ref:r,class:"flex relative"},[A("button",{class:F({disabled:t.disabled}),onClick:a[0]||(a[0]=l=>o.value=!u(o))},[le(i.$slots,"button",{class:F({disabled:t.disabled})})],2),(h(),C(Ut,null,[u(o)?(h(),y("div",Js,[le(i.$slots,"menu")])):x("v-if",!0)],1024))],512))}}),Zs=z(qs,[["__file","/Users/orion/Developer/Talks/apl-architecture/node_modules/@slidev/client/internals/MenuButton.vue"]]),en={},tn={class:"w-1px opacity-10 bg-current m-1 lg:m-2"};function sn(t,e){return h(),y("div",tn)}const pe=z(en,[["render",sn],["__file","/Users/orion/Developer/Talks/apl-architecture/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),nn={class:"sr-only"},on=Y({__name:"IconButton",props:{title:{type:String,required:!0},icon:{type:String,required:!1},as:{type:String,required:!1}},setup(t){return(e,s)=>(h(),C(nt(e.as||"button"),{class:"slidev-icon-btn",title:e.title},{default:R(()=>[A("span",nn,X(e.title),1),le(e.$slots,"default",{},()=>[A("div",{class:F(e.icon)},null,2)])]),_:3},8,["title"]))}}),U=z(on,[["__file","/Users/orion/Developer/Talks/apl-architecture/node_modules/@slidev/client/internals/IconButton.vue"]]),rn={render(){return[]}},an={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},ln={class:"my-auto"},cn={class:"opacity-50"},un=Y({__name:"NavControls",props:{persist:{default:!1}},setup(t){const e=t,{currentRoute:s,currentSlideNo:n,hasNext:o,hasPrev:r,isEmbedded:i,isPresenter:a,isPresenterAvailable:l,next:c,prev:d,total:f}=se(),{brush:p,drawingEnabled:v}=je(),k=Ae.smaller("md"),{isFullscreen:_,toggle:M}=dt,S=T(()=>s.value.query.password),I=T(()=>S.value?`?password=${S.value}`:""),w=T(()=>`${Ue(n.value,!0)}${I.value}`),N=T(()=>`${Ue(n.value,!1)}${I.value}`),g=O();function P(){g.value&&ae.value&&g.value.contains(ae.value)&&ae.value.blur()}const E=T(()=>e.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-main"),$=Ie(),j=Ie();return it(()=>import("./DrawingControls-DCeM6aQE.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])).then(re=>j.value=re.default),(re,V)=>{const q=ps,Ge=vs,B=_s,ne=gs,ue=xs,Mt=ms,$t=ys,Ct=pt,Et=ks,It=ws,Tt=Ss,Ke=Ht("RouterLink"),Rt=Ms,At=$s,Lt=Cs,Nt=Es,Pt=bs;return h(),y("nav",{ref_key:"root",ref:g,class:"flex flex-col"},[A("div",{class:F(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",E.value]),onMouseleave:P},[u(i)?x("v-if",!0):(h(),C(U,{key:0,title:u(_)?"Close fullscreen":"Enter fullscreen",onClick:u(M)},{default:R(()=>[u(_)?(h(),C(q,{key:0})):(h(),C(Ge,{key:1}))]),_:1},8,["title","onClick"])),b(U,{class:F({disabled:!u(r)}),title:"Go to previous slide",onClick:u(d)},{default:R(()=>[b(B)]),_:1},8,["class","onClick"]),b(U,{class:F({disabled:!u(o)}),title:"Go to next slide",onClick:u(c)},{default:R(()=>[b(ne)]),_:1},8,["class","onClick"]),u(i)?x("v-if",!0):(h(),C(U,{key:1,title:"Show slide overview",onClick:V[0]||(V[0]=de=>u(Re)())},{default:R(()=>[b(ue)]),_:1})),u(os)?x("v-if",!0):(h(),C(U,{key:2,title:u(He)?"Switch to light mode theme":"Switch to dark mode theme",onClick:V[1]||(V[1]=de=>u(Te)())},{default:R(()=>[u(He)?(h(),C(Mt,{key:0})):(h(),C($t,{key:1}))]),_:1},8,["title"])),b(pe),u(i)?x("v-if",!0):(h(),y(H,{key:3},[!u(a)&&!u(k)&&$.value?(h(),y(H,{key:0},[b(u($)),b(pe)],64)):x("v-if",!0),u(a)?(h(),C(U,{key:1,title:u(fe)?"Hide presenter cursor":"Show presenter cursor",onClick:V[2]||(V[2]=de=>fe.value=!u(fe))},{default:R(()=>[u(fe)?(h(),C(Ct,{key:0})):(h(),C(Et,{key:1}))]),_:1},8,["title"])):x("v-if",!0)],64)),(!u(ie).drawings.presenterOnly||u(a))&&!u(i)?(h(),y(H,{key:4},[b(U,{class:"relative",title:u(v)?"Hide drawing toolbar":"Show drawing toolbar",onClick:V[3]||(V[3]=de=>v.value=!u(v))},{default:R(()=>[b(It),u(v)?(h(),y("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:ce({background:u(p).color})},null,4)):x("v-if",!0)]),_:1},8,["title"]),b(pe)],64)):x("v-if",!0),u(i)?x("v-if",!0):(h(),y(H,{key:5},[u(a)?(h(),C(Ke,{key:0,to:N.value,class:"slidev-icon-btn",title:"Play Mode"},{default:R(()=>[b(Tt)]),_:1},8,["to"])):x("v-if",!0),u(l)?(h(),C(Ke,{key:1,to:w.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:R(()=>[b(Rt)]),_:1},8,["to"])):x("v-if",!0),x("v-if",!0),u(a)?(h(),C(U,{key:3,title:"Toggle Presenter Layout",class:"aspect-ratio-initial",onClick:u(us)},{default:R(()=>[b(At),Ee(" "+X(u(cs)),1)]),_:1},8,["onClick"])):x("v-if",!0)],64)),(h(),y(H,{key:6},[u(ie).download?(h(),C(U,{key:0,title:"Download as PDF",onClick:u(ut)},{default:R(()=>[b(Lt)]),_:1},8,["onClick"])):x("v-if",!0)],64)),!u(a)&&u(ie).info&&!u(i)?(h(),C(U,{key:7,title:"Show info",onClick:V[5]||(V[5]=de=>Qe.value=!u(Qe))},{default:R(()=>[b(Nt)]),_:1})):x("v-if",!0),!u(a)&&!u(i)?(h(),C(Zs,{key:8},{button:R(()=>[b(U,{title:"Adjust settings"},{default:R(()=>[b(Pt)]),_:1})]),menu:R(()=>[b(Xs)]),_:1})):x("v-if",!0),u(i)?x("v-if",!0):(h(),C(pe,{key:9})),A("div",an,[A("div",ln,[Ee(X(u(n))+" ",1),A("span",cn,"/ "+X(u(f)),1)])]),b(u(rn))],34)],512)}}}),jo=z(un,[["__file","/Users/orion/Developer/Talks/apl-architecture/node_modules/@slidev/client/internals/NavControls.vue"]]),dn=["onClick"],hn={class:"text-green font-bold"},fn={class:"opacity-50"},pn={key:1,class:"opacity-50"},vn={key:0,class:"fixed top-4 right-4 text-gray-400 flex flex-col items-center gap-2"},$e=4*16*2,Xe=2*16,_n=Y({__name:"QuickOverview",props:{modelValue:{type:Boolean,required:!0}},emits:["update:modelValue"],setup(t,{emit:e}){const o=Ve(t,"modelValue",e),{currentSlideNo:r,go:i,slides:a}=se();function l(){o.value=!1}function c(M){i(M),l()}function d(M){return M===D.value}const f=Ae.smaller("xs"),p=Ae.smaller("sm"),v=T(()=>f.value?Me.width.value-$e:p.value?(Me.width.value-$e-Xe)/2:300),k=T(()=>Math.floor((Me.width.value-$e)/(v.value+Xe))),_=O("");return zt("keypress",M=>{if(!W.value){_.value="";return}if(M.key==="Enter"){M.preventDefault(),_.value?(c(+_.value),_.value=""):c(D.value);return}const S=Number.parseInt(M.key.replace(/[^0-9]/g,""));if(Number.isNaN(S)){_.value="";return}if(!_.value&&S===0)return;if(_.value+=String(S),+_.value>=a.value.length){_.value="";return}const I=a.value.findIndex(w=>`/${w.no}`===_.value);I!==-1&&(D.value=I+1),+_.value*10>a.value.length&&(c(+_.value),_.value="")}),st(()=>{D.value=r.value,Be.value=k.value}),(M,S)=>{const I=Is;return h(),y(H,null,[b(Yt,{"enter-active-class":"duration-150 ease-out","enter-from-class":"opacity-0 scale-102 !backdrop-blur-0px","leave-active-class":"duration-200 ease-in","leave-to-class":"opacity-0 scale-102 !backdrop-blur-0px",persisted:""},{default:R(()=>[ot(A("div",{class:"bg-main !bg-opacity-75 p-16 py-20 overflow-y-auto backdrop-blur-5px fixed left-0 right-0 top-0 h-[calc(var(--vh,1vh)*100)]",onClick:S[0]||(S[0]=w=>l())},[A("div",{class:"grid gap-y-4 gap-x-8 w-full",style:ce(`grid-template-columns: repeat(auto-fit,minmax(${v.value}px,1fr))`)},[(h(!0),y(H,null,ke(u(a),(w,N)=>(h(),y("div",{key:w.no,class:"relative"},[A("div",{class:F(["inline-block border rounded overflow-hidden bg-main hover:border-primary transition",d(N+1)||u(D)===N+1?"border-primary":"border-main"]),onClick:g=>c(w.no)},[(h(),C(Bs,{key:w.no,width:v.value,class:"pointer-events-none"},{default:R(()=>[w!=null&&w.component?(h(),C(ht,{key:0,is:w.component,"clicks-context":u(at)(w,u(lt)),class:F(u(ft)(w)),route:w,"render-context":"overview"},null,8,["is","clicks-context","class","route"])):x("v-if",!0),b(rs,{page:w.no},null,8,["page"])]),_:2},1032,["width"]))],10,dn),A("div",{class:"absolute top-0",style:ce(`left: ${v.value+5}px`)},[_.value&&String(N+1).startsWith(_.value)?(h(),y(H,{key:0},[A("span",hn,X(_.value),1),A("span",fn,X(String(N+1).slice(_.value.length)),1)],64)):(h(),y("span",pn,X(N+1),1))],4)]))),128))],4)],512),[[rt,u(o)]])]),_:1}),u(o)?(h(),y("div",vn,[b(U,{title:"Close",class:"text-2xl",onClick:l},{default:R(()=>[b(I)]),_:1}),x("v-if",!0)])):x("v-if",!0)],64)}}}),Bo=z(_n,[["__file","/Users/orion/Developer/Talks/apl-architecture/node_modules/@slidev/client/internals/QuickOverview.vue"]]);function J(t){return Array.isArray?Array.isArray(t):mt(t)==="[object Array]"}const gn=1/0;function mn(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-gn?"-0":e}function yn(t){return t==null?"":mn(t)}function Q(t){return typeof t=="string"}function _t(t){return typeof t=="number"}function kn(t){return t===!0||t===!1||wn(t)&&mt(t)=="[object Boolean]"}function gt(t){return typeof t=="object"}function wn(t){return gt(t)&&t!==null}function K(t){return t!=null}function Ce(t){return!t.trim().length}function mt(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const bn="Incorrect 'index' type",xn=t=>`Invalid value for key ${t}`,Sn=t=>`Pattern length exceeds max of ${t}.`,Mn=t=>`Missing ${t} property in key`,$n=t=>`Property 'weight' in key '${t}' must be a positive integer`,Je=Object.prototype.hasOwnProperty;class Cn{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(n=>{let o=yt(n);this._keys.push(o),this._keyMap[o.id]=o,s+=o.weight}),this._keys.forEach(n=>{n.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function yt(t){let e=null,s=null,n=null,o=1,r=null;if(Q(t)||J(t))n=t,e=qe(t),s=Le(t);else{if(!Je.call(t,"name"))throw new Error(Mn("name"));const i=t.name;if(n=i,Je.call(t,"weight")&&(o=t.weight,o<=0))throw new Error($n(i));e=qe(i),s=Le(i),r=t.getFn}return{path:e,id:s,weight:o,src:n,getFn:r}}function qe(t){return J(t)?t:t.split(".")}function Le(t){return J(t)?t.join("."):t}function En(t,e){let s=[],n=!1;const o=(r,i,a)=>{if(K(r))if(!i[a])s.push(r);else{let l=i[a];const c=r[l];if(!K(c))return;if(a===i.length-1&&(Q(c)||_t(c)||kn(c)))s.push(yn(c));else if(J(c)){n=!0;for(let d=0,f=c.length;d<f;d+=1)o(c[d],i,a+1)}else i.length&&o(c,i,a+1)}};return o(t,Q(e)?e.split("."):e,0),n?s:s[0]}const In={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Tn={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},Rn={location:0,threshold:.6,distance:100},An={useExtendedSearch:!1,getFn:En,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var m={...Tn,...In,...Rn,...An};const Ln=/[^ ]+/g;function Nn(t=1,e=3){const s=new Map,n=Math.pow(10,e);return{get(o){const r=o.match(Ln).length;if(s.has(r))return s.get(r);const i=1/Math.pow(r,.5*t),a=parseFloat(Math.round(i*n)/n);return s.set(r,a),a},clear(){s.clear()}}}class We{constructor({getFn:e=m.getFn,fieldNormWeight:s=m.fieldNormWeight}={}){this.norm=Nn(s,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,n)=>{this._keysMap[s.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Q(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();Q(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,n=this.size();s<n;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!K(e)||Ce(e))return;let n={v:e,i:s,n:this.norm.get(e)};this.records.push(n)}_addObject(e,s){let n={i:s,$:{}};this.keys.forEach((o,r)=>{let i=o.getFn?o.getFn(e):this.getFn(e,o.path);if(K(i)){if(J(i)){let a=[];const l=[{nestedArrIndex:-1,value:i}];for(;l.length;){const{nestedArrIndex:c,value:d}=l.pop();if(K(d))if(Q(d)&&!Ce(d)){let f={v:d,i:c,n:this.norm.get(d)};a.push(f)}else J(d)&&d.forEach((f,p)=>{l.push({nestedArrIndex:p,value:f})})}n.$[r]=a}else if(Q(i)&&!Ce(i)){let a={v:i,n:this.norm.get(i)};n.$[r]=a}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function kt(t,e,{getFn:s=m.getFn,fieldNormWeight:n=m.fieldNormWeight}={}){const o=new We({getFn:s,fieldNormWeight:n});return o.setKeys(t.map(yt)),o.setSources(e),o.create(),o}function Pn(t,{getFn:e=m.getFn,fieldNormWeight:s=m.fieldNormWeight}={}){const{keys:n,records:o}=t,r=new We({getFn:e,fieldNormWeight:s});return r.setKeys(n),r.setIndexRecords(o),r}function ve(t,{errors:e=0,currentLocation:s=0,expectedLocation:n=0,distance:o=m.distance,ignoreLocation:r=m.ignoreLocation}={}){const i=e/t.length;if(r)return i;const a=Math.abs(n-s);return o?i+a/o:a?1:i}function Dn(t=[],e=m.minMatchCharLength){let s=[],n=-1,o=-1,r=0;for(let i=t.length;r<i;r+=1){let a=t[r];a&&n===-1?n=r:!a&&n!==-1&&(o=r-1,o-n+1>=e&&s.push([n,o]),n=-1)}return t[r-1]&&r-n>=e&&s.push([n,r-1]),s}const te=32;function On(t,e,s,{location:n=m.location,distance:o=m.distance,threshold:r=m.threshold,findAllMatches:i=m.findAllMatches,minMatchCharLength:a=m.minMatchCharLength,includeMatches:l=m.includeMatches,ignoreLocation:c=m.ignoreLocation}={}){if(e.length>te)throw new Error(Sn(te));const d=e.length,f=t.length,p=Math.max(0,Math.min(n,f));let v=r,k=p;const _=a>1||l,M=_?Array(f):[];let S;for(;(S=t.indexOf(e,k))>-1;){let E=ve(e,{currentLocation:S,expectedLocation:p,distance:o,ignoreLocation:c});if(v=Math.min(E,v),k=S+d,_){let $=0;for(;$<d;)M[S+$]=1,$+=1}}k=-1;let I=[],w=1,N=d+f;const g=1<<d-1;for(let E=0;E<d;E+=1){let $=0,j=N;for(;$<j;)ve(e,{errors:E,currentLocation:p+j,expectedLocation:p,distance:o,ignoreLocation:c})<=v?$=j:N=j,j=Math.floor((N-$)/2+$);N=j;let re=Math.max(1,p-j+1),V=i?f:Math.min(p+j,f)+d,q=Array(V+2);q[V+1]=(1<<E)-1;for(let B=V;B>=re;B-=1){let ne=B-1,ue=s[t.charAt(ne)];if(_&&(M[ne]=+!!ue),q[B]=(q[B+1]<<1|1)&ue,E&&(q[B]|=(I[B+1]|I[B])<<1|1|I[B+1]),q[B]&g&&(w=ve(e,{errors:E,currentLocation:ne,expectedLocation:p,distance:o,ignoreLocation:c}),w<=v)){if(v=w,k=ne,k<=p)break;re=Math.max(1,2*p-k)}}if(ve(e,{errors:E+1,currentLocation:p,expectedLocation:p,distance:o,ignoreLocation:c})>v)break;I=q}const P={isMatch:k>=0,score:Math.max(.001,w)};if(_){const E=Dn(M,a);E.length?l&&(P.indices=E):P.isMatch=!1}return P}function Fn(t){let e={};for(let s=0,n=t.length;s<n;s+=1){const o=t.charAt(s);e[o]=(e[o]||0)|1<<n-s-1}return e}class wt{constructor(e,{location:s=m.location,threshold:n=m.threshold,distance:o=m.distance,includeMatches:r=m.includeMatches,findAllMatches:i=m.findAllMatches,minMatchCharLength:a=m.minMatchCharLength,isCaseSensitive:l=m.isCaseSensitive,ignoreLocation:c=m.ignoreLocation}={}){if(this.options={location:s,threshold:n,distance:o,includeMatches:r,findAllMatches:i,minMatchCharLength:a,isCaseSensitive:l,ignoreLocation:c},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const d=(p,v)=>{this.chunks.push({pattern:p,alphabet:Fn(p),startIndex:v})},f=this.pattern.length;if(f>te){let p=0;const v=f%te,k=f-v;for(;p<k;)d(this.pattern.substr(p,te),p),p+=te;if(v){const _=f-te;d(this.pattern.substr(_),_)}}else d(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:n}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let k={isMatch:!0,score:0};return n&&(k.indices=[[0,e.length-1]]),k}const{location:o,distance:r,threshold:i,findAllMatches:a,minMatchCharLength:l,ignoreLocation:c}=this.options;let d=[],f=0,p=!1;this.chunks.forEach(({pattern:k,alphabet:_,startIndex:M})=>{const{isMatch:S,score:I,indices:w}=On(e,k,_,{location:o+M,distance:r,threshold:i,findAllMatches:a,minMatchCharLength:l,includeMatches:n,ignoreLocation:c});S&&(p=!0),f+=I,S&&w&&(d=[...d,...w])});let v={isMatch:p,score:p?f/this.chunks.length:1};return p&&n&&(v.indices=d),v}}class ee{constructor(e){this.pattern=e}static isMultiMatch(e){return Ze(e,this.multiRegex)}static isSingleMatch(e){return Ze(e,this.singleRegex)}search(){}}function Ze(t,e){const s=t.match(e);return s?s[1]:null}class Vn extends ee{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const s=e===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class jn extends ee{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Bn extends ee{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const s=e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Wn extends ee{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const s=!e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class Gn extends ee{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const s=e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Kn extends ee{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const s=!e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class bt extends ee{constructor(e,{location:s=m.location,threshold:n=m.threshold,distance:o=m.distance,includeMatches:r=m.includeMatches,findAllMatches:i=m.findAllMatches,minMatchCharLength:a=m.minMatchCharLength,isCaseSensitive:l=m.isCaseSensitive,ignoreLocation:c=m.ignoreLocation}={}){super(e),this._bitapSearch=new wt(e,{location:s,threshold:n,distance:o,includeMatches:r,findAllMatches:i,minMatchCharLength:a,isCaseSensitive:l,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class xt extends ee{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let s=0,n;const o=[],r=this.pattern.length;for(;(n=e.indexOf(this.pattern,s))>-1;)s=n+r,o.push([n,s-1]);const i=!!o.length;return{isMatch:i,score:i?0:1,indices:o}}}const Ne=[Vn,xt,Bn,Wn,Kn,Gn,jn,bt],et=Ne.length,Un=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Hn="|";function zn(t,e={}){return t.split(Hn).map(s=>{let n=s.trim().split(Un).filter(r=>r&&!!r.trim()),o=[];for(let r=0,i=n.length;r<i;r+=1){const a=n[r];let l=!1,c=-1;for(;!l&&++c<et;){const d=Ne[c];let f=d.isMultiMatch(a);f&&(o.push(new d(f,e)),l=!0)}if(!l)for(c=-1;++c<et;){const d=Ne[c];let f=d.isSingleMatch(a);if(f){o.push(new d(f,e));break}}}return o})}const Yn=new Set([bt.type,xt.type]);class Qn{constructor(e,{isCaseSensitive:s=m.isCaseSensitive,includeMatches:n=m.includeMatches,minMatchCharLength:o=m.minMatchCharLength,ignoreLocation:r=m.ignoreLocation,findAllMatches:i=m.findAllMatches,location:a=m.location,threshold:l=m.threshold,distance:c=m.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:n,minMatchCharLength:o,findAllMatches:i,ignoreLocation:r,location:a,threshold:l,distance:c},this.pattern=s?e:e.toLowerCase(),this.query=zn(this.pattern,this.options)}static condition(e,s){return s.useExtendedSearch}searchIn(e){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:o}=this.options;e=o?e:e.toLowerCase();let r=0,i=[],a=0;for(let l=0,c=s.length;l<c;l+=1){const d=s[l];i.length=0,r=0;for(let f=0,p=d.length;f<p;f+=1){const v=d[f],{isMatch:k,indices:_,score:M}=v.search(e);if(k){if(r+=1,a+=M,n){const S=v.constructor.type;Yn.has(S)?i=[...i,..._]:i.push(_)}}else{a=0,r=0,i.length=0;break}}if(r){let f={isMatch:!0,score:a/r};return n&&(f.indices=i),f}}return{isMatch:!1,score:1}}}const Pe=[];function Xn(...t){Pe.push(...t)}function De(t,e){for(let s=0,n=Pe.length;s<n;s+=1){let o=Pe[s];if(o.condition(t,e))return new o(t,e)}return new wt(t,e)}const ye={AND:"$and",OR:"$or"},Oe={PATH:"$path",PATTERN:"$val"},Fe=t=>!!(t[ye.AND]||t[ye.OR]),Jn=t=>!!t[Oe.PATH],qn=t=>!J(t)&&gt(t)&&!Fe(t),tt=t=>({[ye.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function St(t,e,{auto:s=!0}={}){const n=o=>{let r=Object.keys(o);const i=Jn(o);if(!i&&r.length>1&&!Fe(o))return n(tt(o));if(qn(o)){const l=i?o[Oe.PATH]:r[0],c=i?o[Oe.PATTERN]:o[l];if(!Q(c))throw new Error(xn(l));const d={keyId:Le(l),pattern:c};return s&&(d.searcher=De(c,e)),d}let a={children:[],operator:r[0]};return r.forEach(l=>{const c=o[l];J(c)&&c.forEach(d=>{a.children.push(n(d))})}),a};return Fe(t)||(t=tt(t)),n(t)}function Zn(t,{ignoreFieldNorm:e=m.ignoreFieldNorm}){t.forEach(s=>{let n=1;s.matches.forEach(({key:o,norm:r,score:i})=>{const a=o?o.weight:null;n*=Math.pow(i===0&&a?Number.EPSILON:i,(a||1)*(e?1:r))}),s.score=n})}function eo(t,e){const s=t.matches;e.matches=[],K(s)&&s.forEach(n=>{if(!K(n.indices)||!n.indices.length)return;const{indices:o,value:r}=n;let i={indices:o,value:r};n.key&&(i.key=n.key.src),n.idx>-1&&(i.refIndex=n.idx),e.matches.push(i)})}function to(t,e){e.score=t.score}function so(t,e,{includeMatches:s=m.includeMatches,includeScore:n=m.includeScore}={}){const o=[];return s&&o.push(eo),n&&o.push(to),t.map(r=>{const{idx:i}=r,a={item:e[i],refIndex:i};return o.length&&o.forEach(l=>{l(r,a)}),a})}class oe{constructor(e,s={},n){this.options={...m,...s},this.options.useExtendedSearch,this._keyStore=new Cn(this.options.keys),this.setCollection(e,n)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof We))throw new Error(bn);this._myIndex=s||kt(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){K(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let n=0,o=this._docs.length;n<o;n+=1){const r=this._docs[n];e(r,n)&&(this.removeAt(n),n-=1,o-=1,s.push(r))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:n,includeScore:o,shouldSort:r,sortFn:i,ignoreFieldNorm:a}=this.options;let l=Q(e)?Q(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Zn(l,{ignoreFieldNorm:a}),r&&l.sort(i),_t(s)&&s>-1&&(l=l.slice(0,s)),so(l,this._docs,{includeMatches:n,includeScore:o})}_searchStringList(e){const s=De(e,this.options),{records:n}=this._myIndex,o=[];return n.forEach(({v:r,i,n:a})=>{if(!K(r))return;const{isMatch:l,score:c,indices:d}=s.searchIn(r);l&&o.push({item:r,idx:i,matches:[{score:c,value:r,norm:a,indices:d}]})}),o}_searchLogical(e){const s=St(e,this.options),n=(a,l,c)=>{if(!a.children){const{keyId:f,searcher:p}=a,v=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(l,f),searcher:p});return v&&v.length?[{idx:c,item:l,matches:v}]:[]}const d=[];for(let f=0,p=a.children.length;f<p;f+=1){const v=a.children[f],k=n(v,l,c);if(k.length)d.push(...k);else if(a.operator===ye.AND)return[]}return d},o=this._myIndex.records,r={},i=[];return o.forEach(({$:a,i:l})=>{if(K(a)){let c=n(s,a,l);c.length&&(r[l]||(r[l]={idx:l,item:a,matches:[]},i.push(r[l])),c.forEach(({matches:d})=>{r[l].matches.push(...d)}))}}),i}_searchObjectList(e){const s=De(e,this.options),{keys:n,records:o}=this._myIndex,r=[];return o.forEach(({$:i,i:a})=>{if(!K(i))return;let l=[];n.forEach((c,d)=>{l.push(...this._findMatches({key:c,value:i[d],searcher:s}))}),l.length&&r.push({idx:a,item:i,matches:l})}),r}_findMatches({key:e,value:s,searcher:n}){if(!K(s))return[];let o=[];if(J(s))s.forEach(({v:r,i,n:a})=>{if(!K(r))return;const{isMatch:l,score:c,indices:d}=n.searchIn(r);l&&o.push({score:c,key:e,value:r,idx:i,norm:a,indices:d})});else{const{v:r,n:i}=s,{isMatch:a,score:l,indices:c}=n.searchIn(r);a&&o.push({score:l,key:e,value:r,norm:i,indices:c})}return o}}oe.version="7.0.0";oe.createIndex=kt;oe.parseIndex=Pn;oe.config=m;oe.parseQuery=St;Xn(Qn);const no={key:0},oo={key:1},ro={key:2},io={key:3},ao={key:4},lo={key:5},co={key:6},uo={key:7},ho={key:8},fo={key:9},po={key:10},vo={key:11},_o={key:12},go=Y({__name:"title-renderer",props:{no:{type:[Number,String],required:!1}},setup(t){const e=t,{$page:s}=Ts(),n=T(()=>+(e.no??s.value));return(o,r)=>(h(),y("div",null,[n.value===1?(h(),y("p",no,"Performant Websites with Remix")):n.value===2?(h(),y("p",oo,"Holotypes")):n.value===3?(h(),y("p",ro,"What Are We Optimizing For?")):n.value===4?(h(),y("p",io,"How Do We Achieve These Goals?")):n.value===5?(h(),y("p",ao,"Do as much work on the server as possible")):n.value===6?(h(),y("p",lo,"Send as little data over the network as possible")):n.value===7?(h(),y("p",co,"Send as little data over the network as possible")):n.value===8?(h(),y("p",uo,"Send as little data over the network as possible")):n.value===9?(h(),y("p",ho,"Ship HTML to your users")):n.value===10?(h(),y("p",fo,"Make pages work before JavaScript loads")):n.value===11?(h(),y("p",po,"Embrace web standards and browser defaults")):n.value===12?(h(),y("p",vo,"Architecture Recommendations")):n.value===13?(h(),y("p",_o,"undefined")):x("v-if",!0)]))}}),mo=z(go,[["__file","/@slidev/title-renderer.md"]]),yo={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},ko=["value","disabled"],wo=["border","onClick"],bo={"w-4":"","text-right":"",op50:"","text-sm":""},xo=Y({__name:"Goto",setup(t){const e=O(),s=O(),n=O(),o=O(),r=O(""),i=O(0),{go:a,slides:l}=se();function c(g){return g!=null}const d=T(()=>new oe(l.value.map(g=>{var P;return(P=g.meta)==null?void 0:P.slide}).filter(c),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),f=T(()=>r.value.startsWith("/")?r.value.substring(1):r.value),p=T(()=>d.value.search(f.value).map(g=>g.item)),v=T(()=>!!p.value.length);function k(){if(v.value){const g=p.value.at(i.value||0);g&&a(g.no)}_()}function _(){r.value="",Z.value=!1}function M(g){g.preventDefault(),i.value++,i.value>=p.value.length&&(i.value=0),I()}function S(g){g.preventDefault(),i.value--,i.value<=-2&&(i.value=p.value.length-1),I()}function I(){var P;const g=(P=o.value)==null?void 0:P[i.value];g&&n.value&&(g.offsetTop+g.offsetHeight>n.value.offsetHeight+n.value.scrollTop?n.value.scrollTo({behavior:"smooth",top:g.offsetTop+g.offsetHeight-n.value.offsetHeight+1}):g.offsetTop<n.value.scrollTop&&n.value.scrollTo({behavior:"smooth",top:g.offsetTop}))}function w(g){i.value=0,r.value=g.target.value}function N(g){a(g),_()}return me(Z,async g=>{var P;g?(r.value="",i.value=0,setTimeout(()=>{var E;return(E=s.value)==null?void 0:E.focus()},0)):(P=s.value)==null||P.blur()}),me(ae,()=>{var g;(g=e.value)!=null&&g.contains(ae.value)||_()}),(g,P)=>(h(),y("div",{id:"slidev-goto-dialog",ref_key:"container",ref:e,class:F(["fixed right-5 transition-all",u(Z)?"top-5":"-top-20"]),"w-90":"","max-w-90":"","min-w-90":""},[A("div",yo,[A("input",{id:"slidev-goto-input",ref_key:"input",ref:s,value:r.value,type:"text",disabled:!u(Z),class:F(["outline-none bg-transparent",{"text-red-400":!v.value&&r.value}]),placeholder:"Goto...",onKeydown:[he(k,["enter"]),he(_,["escape"]),he(M,["down"]),he(S,["up"])],onInput:w},null,42,ko)]),p.value.length>0?(h(),y("ul",{key:0,ref_key:"list",ref:n,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(h(!0),y(H,null,ke(p.value,(E,$)=>(h(),y("li",{ref_for:!0,ref_key:"items",ref:o,key:E.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","w-90":"","items-center":"",border:$===0?"":"t main",class:F(i.value===$?"bg-active op100":"op80"),onClick:Qt(j=>N(E.no),["stop","prevent"])},[A("div",bo,X(E.no),1),b(u(mo),{no:E.no},null,8,["no"])],10,wo))),128))],512)):x("v-if",!0)],2))}}),Wo=z(xo,[["__scopeId","data-v-f5ee02a7"],["__file","/Users/orion/Developer/Talks/apl-architecture/node_modules/@slidev/client/internals/Goto.vue"]]);function So(){const t=Xt(),e=O(!1);let s,n;const o=typeof document<"u"&&"startViewTransition"in document;return t.beforeResolve((r,i)=>{var _,M,S,I;const a=(_=ze(i.params.no))==null?void 0:_.meta,l=(M=ze(r.params.no))==null?void 0:M.meta,c=(S=a==null?void 0:a.slide)==null?void 0:S.no,d=(I=l==null?void 0:l.slide)==null?void 0:I.no;if((c!=null&&d!=null&&((c<d?a==null?void 0:a.transition:l==null?void 0:l.transition)??ie.transition))!=="view-transition"){e.value=!1;return}if(!o){e.value=!1,console.warn("View transition is not supported in your browser, fallback to normal transition.");return}e.value=!0;const p=new Promise((w,N)=>{s=w,n=N});let v;const k=new Promise(w=>v=w);return setTimeout(()=>{document.startViewTransition(()=>(v(),p))},50),k}),o&&t.afterEach(()=>{s==null||s(),n==null||n()}),e}const Mo={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},$o=Y({__name:"PresenterMouse",setup(t){return(e,s)=>{const n=pt;return u(xe).cursor?(h(),y("div",Mo,[b(n,{class:"absolute stroke-white dark:stroke-black",style:ce({left:`${u(xe).cursor.x}%`,top:`${u(xe).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):x("v-if",!0)}}}),Co=z($o,[["__file","/Users/orion/Developer/Talks/apl-architecture/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),Eo=t=>(Zt("data-v-afb4231e"),t=t(),es(),t),Io=Eo(()=>A("div",{id:"twoslash-container"},null,-1)),To=Y({__name:"SlidesShow",props:{renderContext:{type:String,required:!0}},setup(t){const{currentSlideRoute:e,currentTransition:s,getPrimaryClicks:n,isPresenter:o,nextRoute:r,slides:i,isPrintMode:a,isPrintWithClicks:l}=se();me(e,()=>{var v,k;(v=e.value)!=null&&v.meta&&e.value.meta.preload!==!1&&(e.value.meta.__preloaded=!0),(k=r.value)!=null&&k.meta&&r.value.meta.preload!==!1&&(r.value.meta.__preloaded=!0)},{immediate:!0});const c=So(),d=Ie();it(()=>import("./DrawingLayer-Q9NxMXy6.js"),__vite__mapDeps([12,2,9,6,3,4,7,5,8,1,10])).then(v=>d.value=v.default);const f=T(()=>i.value.filter(v=>{var k;return((k=v.meta)==null?void 0:k.__preloaded)||v===e.value}));function p(){Ye.value=!0,Rs()}return(v,k)=>(h(),y(H,null,[x(" Global Bottom "),b(u(ds)),x(" Slides "),(h(),C(nt(u(c)?"div":qt),Jt(u(Ye)?{}:u(s),{id:"slideshow",tag:"div",onAfterLeave:p}),{default:R(()=>[(h(!0),y(H,null,ke(f.value,_=>ot((h(),y("div",{key:_.no},[b(ht,{is:_.component,"clicks-context":u(a)&&!u(l)?u(at)(_,u(lt)):u(n)(_),class:F([u(ft)(_),"overflow-hidden"]),route:_,"render-context":v.renderContext},null,8,["is","clicks-context","class","route","render-context"])])),[[rt,_===u(e)]])),128))]),_:1},16)),Io,x(" Global Top "),b(u(hs)),d.value?(h(),C(u(d),{key:0})):x("v-if",!0),u(o)?x("v-if",!0):(h(),C(Co,{key:1}))],64))}}),Go=z(To,[["__scopeId","data-v-afb4231e"],["__file","/Users/orion/Developer/Talks/apl-architecture/node_modules/@slidev/client/internals/SlidesShow.vue"]]);export{Wo as G,U as I,jo as N,Bo as Q,Bs as S,pe as V,Go as a,Vo as r,Fo as u};