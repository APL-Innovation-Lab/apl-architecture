import{d as l,t as i,a3 as u,D as c,E as m,o as p,b as f,i as d,A as t}from"../modules/vue-CGUuo2jJ.js";import{u as _}from"./context-C_zNRZg0.js";import{u as v}from"./DrawingPreview-Fl0imUe9.js";import{b as g}from"../index-DQBwKkXL.js";import"./bottom-C6B9oPet.js";import"../modules/unplugin-icons-Tm_FbedS.js";import"../modules/shiki-C7i9nd5d.js";const w=l({__name:"DrawingLayer",setup(D){const{drauu:e,drawingEnabled:a,loadCanvas:r}=v(),s=_().$scale,o=i();return u(()=>{e.mount(o.value,o.value.parentElement),c(s,n=>e.options.coordinateScale=1/n,{immediate:!0}),r()}),m(()=>{e.unmount()}),(n,h)=>(p(),f("svg",{ref_key:"svg",ref:o,class:d(["w-full h-full absolute top-0",{"pointer-events-none":!t(a),"touch-none":t(a)}])},null,2))}}),L=g(w,[["__file","/Users/orion/Developer/Talks/apl-architecture/node_modules/@slidev/client/internals/DrawingLayer.vue"]]);export{L as default};
