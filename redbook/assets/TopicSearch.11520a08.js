import{d as c,r,g as u,_ as i,E as p,b as l,c as d,w as m,o as _,e}from"./index.f2044dd5.js";import{T as h}from"./Tag.c2943ced.js";const w=c({name:"TopicRanking",components:{Tag:h},setup(){const a=r([]);return u("topic-search.json").then(s=>a.value=s.data.map(t=>({topicName:t.topicName,topicIntroduction:t.topicIntroduction,viewNum:t.viewNum*1,discussNum:t.discussNum*1}))),{dataList:a}}});function b(a,s,t,f,N,C){const o=p,n=l;return _(),d(n,{data:a.dataList,style:{width:"100%"},border:"",height:"100vh"},{default:m(()=>[e(o,{type:"index",label:"#",width:"48",align:"center"}),e(o,{prop:"topicName",label:"\u6807\u9898",width:"180","show-overflow-tooltip":""}),e(o,{prop:"discussNum",label:"\u8BA8\u8BBA\u6570\u91CF",width:"100",sortable:""}),e(o,{prop:"viewNum",label:"\u6D4F\u89C8\u6570\u91CF",width:"100",sortable:""}),e(o,{prop:"topicIntroduction",label:"\u8BDD\u9898\u4ECB\u7ECD","show-overflow-tooltip":""})]),_:1},8,["data"])}const g=i(w,[["render",b]]);export{g as default};