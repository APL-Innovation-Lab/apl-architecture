import{d,a4 as u,y as h,b as a,e as t,x as s,A as c,F as f,a2 as v,o as l,Y as g,l as x,g as b}from"../modules/vue-CGUuo2jJ.js";import{u as y,h as N,c as m,b as k}from"../index-DpbeOI1b.js";import{N as T}from"./NoteDisplay-YFCZxbNj.js";import"../modules/shiki-C7i9nd5d.js";const w={id:"page-root"},D={class:"m-4"},L={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},H={class:"text-lg"},S={class:"font-bold flex gap-2"},A={class:"opacity-50"},C=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-main mb-8"},M=d({__name:"print",setup(j){const{slides:p,total:_}=y();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),N({title:`Notes - ${m.title}`});const i=h(()=>p.value.map(o=>{var n;return(n=o.meta)==null?void 0:n.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,n)=>(l(),a("div",w,[t("div",D,[t("div",L,[t("h1",V,s(c(m).title),1),t("div",B,s(new Date().toLocaleString()),1)]),(l(!0),a(f,null,v(i.value,(e,r)=>(l(),a("div",{key:r,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",H,[t("div",S,[t("div",A,s(e==null?void 0:e.no)+"/"+s(c(_)),1),g(" "+s(e==null?void 0:e.title)+" ",1),C])]),x(T,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),r<i.value.length-1?(l(),a("hr",F)):b("v-if",!0)]))),128))])]))}}),Y=k(M,[["__file","/Users/orion/Developer/Talks/apl-architecture/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{Y as default};
