import{d as s,r as l,g as d,_ as u,E as c,b as p,f as h,e as o,w as _,F as b,l as i,o as f}from"./index.f2044dd5.js";const w=s({name:"HotWords",setup(){const e=l([]);return d("hotword-yoga.json").then(n=>e.value=n.data.map(t=>({hotKeyword:t.hotKeyword,hotScore:t.hotScore*1,noteCount:t.noteCount*1}))),{hotWords:e}}}),m=i("h1",null,null,-1);function C(e,n,t,B,E,g){const a=c,r=p;return f(),h(b,null,[m,o(r,{data:e.hotWords,border:""},{default:_(()=>[o(a,{type:"index",label:"#",width:"48",align:"center"}),o(a,{prop:"hotKeyword",label:"\u70ED\u8BCD",width:"160","show-overflow-tooltip":""}),o(a,{prop:"hotScore",label:"\u70ED\u5EA6",width:"160",sortable:""}),o(a,{prop:"noteCount",label:"\u7B14\u8BB0\u6570\u91CF",sortable:""})]),_:1},8,["data"])],64)}const x=u(w,[["render",C]]);export{x as default};