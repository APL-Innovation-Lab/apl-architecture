import{_ as X,a as Y,b as Z,c as ee,d as te}from"../modules/unplugin-icons-Tm_FbedS.js";import{t as q,d as R,c as b,i as f,A as t,o as i,y as m,b as k,e,l as r,F as B,x as N,g as z,a2 as se,a5 as oe,a6 as le,h as D,p as Q,a as W,D as A,M as ne,a3 as ae,J as re,a7 as ie,a8 as ce,k as $,a9 as ue}from"../modules/vue-CGUuo2jJ.js";import{j as de,b as P,k as pe,r as ve,C as me,u as _e,c as G,h as fe,l as xe,d as be,m as ke}from"../index-DpbeOI1b.js";import{r as ge,u as he,S as H,I as O,Q as ye,a as Ce,N as we,G as Se}from"./SlidesShow-B52z_asn.js";import{s as $e,b as V,p as Ne,S as ze,g as De,c as Ie,i as Fe,d as Te}from"./bottom-Bkrl7Pfo.js";import{N as Me}from"./NoteDisplay-YFCZxbNj.js";import Ve from"./DrawingControls-DpOvpGPr.js";import{u as qe}from"./DrawingPreview-9r_6m2r_.js";import"../modules/shiki-C7i9nd5d.js";import"./context-Ds8uLS-n.js";function Be(a){var l;return{info:q((l=de(a))==null?void 0:l.meta.slide),update:async()=>{}}}const Re=R({__name:"NoteStatic",props:{no:{type:Number,required:!0},class:{type:String,required:!1},clicksContext:{type:null,required:!1}},setup(a){const l=a,{info:s}=Be(l.no);return(u,c)=>{var o,x;return i(),b(Me,{class:f(l.class),note:(o=t(s))==null?void 0:o.note,"note-html":(x=t(s))==null?void 0:x.noteHTML,"clicks-context":u.clicksContext},null,8,["class","note","note-html","clicks-context"])}}}),Pe=P(Re,[["__file","/Users/orion/Developer/Talks/apl-architecture/node_modules/@slidev/client/internals/NoteStatic.vue"]]),E=a=>(Q("data-v-52a29648"),a=a(),W(),a),Ue=["title"],Le={class:"flex gap-0.5 items-center min-w-16 font-mono mr1"},je=E(()=>e("div",{"flex-auto":""},null,-1)),Ae={"text-primary":""},Ge=E(()=>e("span",{op25:""},"/",-1)),He={op50:""},Oe=["min","max"],Qe=R({__name:"ClicksSlider",props:{clicksContext:{type:null,required:!0}},setup(a){const l=a,s=m(()=>l.clicksContext.total),u=m(()=>pe(0,l.clicksContext.clicksStart,s.value)),c=m(()=>s.value-u.value+1),o=m({get(){return l.clicksContext.current>s.value?-1:l.clicksContext.current},set(g){l.clicksContext.current=g}}),x=m(()=>ve(u.value,s.value+1));function I(){(o.value<0||o.value>s.value)&&(o.value=0)}return(g,d)=>{const F=X;return i(),k("div",{class:f(["flex gap-1 items-center select-none",c.value?"":"op50"]),title:`Clicks in this slide: ${c.value}`},[e("div",Le,[r(F,{"text-sm":"",op50:""}),je,o.value>=0&&o.value!==t(me)?(i(),k(B,{key:0},[e("span",Ae,N(o.value),1),Ge],64)):z("v-if",!0),e("span",He,N(s.value),1)]),e("div",{relative:"","flex-auto":"",h5:"","font-mono":"",flex:"~",onDblclick:d[2]||(d[2]=n=>o.value=g.clicksContext.total)},[(i(!0),k(B,null,se(x.value,n=>(i(),k("div",{key:n,border:"y main","of-hidden":"",relative:"",class:f([n===0?"rounded-l border-l":"",n===s.value?"rounded-r border-r":""]),style:D({width:c.value>0?`${1/c.value*100}%`:"100%"})},[e("div",{absolute:"","inset-0":"",class:f(n<=o.value?"bg-primary op15":"")},null,2),e("div",{class:f([+n==+o.value?"text-primary font-bold op100 border-primary":"op30 border-main",n===0?"rounded-l":"",n===s.value?"rounded-r":"border-r-2"]),"w-full":"","h-full":"","text-xs":"",flex:"","items-center":"","justify-center":"","z-1":""},N(n),3)],6))),128)),oe(e("input",{"onUpdate:modelValue":d[0]||(d[0]=n=>o.value=n),class:"range",absolute:"","inset-0":"",type:"range",min:u.value,max:s.value,step:1,"z-10":"",op0:"",style:D({"--thumb-width":`${1/(c.value+1)*100}%`}),onMousedown:I,onFocus:d[1]||(d[1]=n=>{var C;return(C=n.currentTarget)==null?void 0:C.blur()})},null,44,Oe),[[le,o.value]])],32)],10,Ue)}}}),We=P(Qe,[["__scopeId","data-v-52a29648"],["__file","/Users/orion/Developer/Talks/apl-architecture/node_modules/@slidev/client/internals/ClicksSlider.vue"]]),U=a=>(Q("data-v-d0ba6bbb"),a=a(),W(),a),Ee={class:"bg-main h-full slidev-presenter"},Je=U(()=>e("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Current ",-1)),Ke={class:"relative grid-section next flex flex-col p-2 lg:p-4"},Xe=U(()=>e("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Next ",-1)),Ye={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Ze={class:"border-t border-main py-1 px-2 text-sm"},et={class:"grid-section bottom flex"},tt=U(()=>e("div",{"flex-auto":""},null,-1)),st={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},ot={class:"progress-bar"},lt=R({__name:"presenter",setup(a){const l=q();ge(),he(l);const{clicksContext:s,currentSlideNo:u,currentSlideRoute:c,hasNext:o,nextRoute:x,slides:I,queryClicks:g,getPrimaryClicks:d,total:F}=_e(),{isDrawing:n}=qe(),C=G.titleTemplate.replace("%s",G.title||"Slidev");fe({title:`Presenter - ${C}`}),q(!1);const{timer:J,resetTimer:L}=xe(),K=m(()=>I.value.map(S=>be(S))),p=m(()=>s.value.current<s.value.total?[c.value,s.value.current+1]:o.value?[x.value,0]:null),w=m(()=>p.value&&K.value[p.value[0].no-1]);return A([c,g],()=>{w.value&&(w.value.current=p.value[1])},{immediate:!0}),ne(),ae(()=>{const S=l.value.querySelector("#slide-content"),_=re(ie()),T=ce();A(()=>{if(!T.value||n.value||!$e.value)return;const v=S.getBoundingClientRect(),h=(_.x-v.left)/v.width*100,y=(_.y-v.top)/v.height*100;if(!(h<0||h>100||y<0||y>100))return{x:h,y}},v=>{ke.cursor=v})}),(S,_)=>{var j;const T=Y,v=Z,h=ee,y=te;return i(),k(B,null,[e("div",Ee,[e("div",{class:f(["grid-container",`layout${t(Ne)}`])},[e("div",{ref_key:"main",ref:l,class:"relative grid-section main flex flex-col"},[r(H,{key:"main",class:"h-full w-full p-2 lg:p-4 flex-auto"},{default:$(()=>[r(Ce,{"render-context":"presenter"})]),_:1}),(i(),b(We,{key:(j=t(c))==null?void 0:j.no,"clicks-context":t(d)(t(c)),class:"w-full pb2 px4 flex-none"},null,8,["clicks-context"])),Je],512),e("div",Ke,[p.value&&w.value?(i(),b(H,{key:"next",class:"h-full w-full"},{default:$(()=>[(i(),b(ze,{is:p.value[0].component,key:p.value[0].no,"clicks-context":w.value,class:f(t(De)(p.value[0])),route:p.value[0],"render-context":"previewNext"},null,8,["is","clicks-context","class","route"]))]),_:1})):z("v-if",!0),Xe]),z(" Notes "),(i(),k("div",Ye,[(i(),b(Pe,{key:`static-${t(u)}`,no:t(u),class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:D({fontSize:`${t(Ie)}em`}),"clicks-context":t(s)},null,8,["no","style","clicks-context"])),e("div",Ze,[r(O,{title:"Increase font size",onClick:t(Fe)},{default:$(()=>[r(T)]),_:1},8,["onClick"]),r(O,{title:"Decrease font size",onClick:t(Te)},{default:$(()=>[r(v)]),_:1},8,["onClick"]),z("v-if",!0)])])),e("div",et,[r(we,{persist:!0}),tt,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:_[2]||(_[2]=(...M)=>t(L)&&t(L)(...M))},[r(h,{class:"absolute"}),r(y,{class:"absolute opacity-0"})]),e("div",st,N(t(J)),1)]),(i(),b(Ve,{key:2}))],2),e("div",ot,[e("div",{class:"progress h-3px bg-primary transition-all",style:D({width:`${(t(u)-1)/(t(F)-1)*100}%`})},null,4)])]),r(Se),r(ye,{modelValue:t(V),"onUpdate:modelValue":_[3]||(_[3]=M=>ue(V)?V.value=M:null)},null,8,["modelValue"])],64)}}}),_t=P(lt,[["__scopeId","data-v-d0ba6bbb"],["__file","/Users/orion/Developer/Talks/apl-architecture/node_modules/@slidev/client/pages/presenter.vue"]]);export{_t as default};