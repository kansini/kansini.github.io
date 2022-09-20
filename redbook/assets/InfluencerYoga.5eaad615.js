import{h as S,i as z,d as E,u as I,j as N,k as F,o as i,f as V,l as b,m as k,n as p,p as l,c as d,w as u,e as s,q as C,s as T,v as w,x as v,y as B,T as A,z as D,A as L,r as U,g as M,_ as j,E as P,a as R,b as q,B as Y,F as G,C as H,t as J}from"./index.fc5d5ebf.js";import{T as K}from"./Tag.abfe3e1c.js";const O=S({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:z,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),Q={close:o=>o instanceof MouseEvent,click:o=>o instanceof MouseEvent},W={name:"ElTag"},X=E({...W,props:O,emits:Q,setup(o,{emit:f}){const c=o,e=I(),t=N("tag"),y=F(()=>{const{type:a,hit:_,effect:h,closable:r,round:m}=c;return[t.b(),t.is("closable",r),t.m(a),t.m(e.value),t.m(h),t.is("hit",_),t.is("round",m)]}),n=a=>{f("close",a)},g=a=>{f("click",a)};return(a,_)=>a.disableTransitions?(i(),V("span",{key:0,class:p(l(y)),style:B({backgroundColor:a.color}),onClick:g},[b("span",{class:p(l(t).e("content"))},[k(a.$slots,"default")],2),a.closable?(i(),d(l(w),{key:0,class:p(l(t).e("close")),onClick:T(n,["stop"])},{default:u(()=>[s(l(C))]),_:1},8,["class","onClick"])):v("v-if",!0)],6)):(i(),d(A,{key:1,name:`${l(t).namespace.value}-zoom-in-center`,appear:""},{default:u(()=>[b("span",{class:p(l(y)),style:B({backgroundColor:a.color}),onClick:g},[b("span",{class:p(l(t).e("content"))},[k(a.$slots,"default")],2),a.closable?(i(),d(l(w),{key:0,class:p(l(t).e("close")),onClick:T(n,["stop"])},{default:u(()=>[s(l(C))]),_:1},8,["class","onClick"])):v("v-if",!0)],6)]),_:3},8,["name"]))}});var Z=D(X,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const x=L(Z),ee=E({name:"Influencer",setup(){const o=U([]);return M("yoga-influencers.json").then(c=>o.value=c.data.map(e=>({fans:e.fans*1,fansIncr:e.fansIncr*1,fansIncrRate:e.fansIncrRate*1,likedCollectedCount:e.likedCollectedCount*1,accountTypeV1:e.accountTypeV1,accountTypeV2:e.accountTypeV2,headUrl:e.headUrl,nickName:e.nickName,gender:e.gender=="2"?"\u673A\u6784":e.gender=="0"?"\u7537":"\u5973",officialVerify:e.officialVerify,accountTags:e.accountTags}))),{dataList:o,tagType:c=>(c+1)%2==0&&(c+1)%4!==0?"success":(c+1)%3==0?"warning":(c+1)%4==0?"danger":""}}});function ae(o,f,c,e,t,y){const n=P,g=R,a=K,_=x,h=q;return i(),d(h,{data:o.dataList,style:{width:"100%"},border:"",height:"100vh"},{default:u(()=>[s(n,{type:"index",label:"#",width:"48",align:"center"}),s(n,{prop:"headUrl",label:"\u5934\u50CF",width:"72",align:"center"},{default:u(r=>[s(g,{src:r.row.headUrl},null,8,["src"])]),_:1}),s(n,{prop:"nickName",label:"\u6635\u79F0",width:"120","show-overflow-tooltip":""}),s(n,{prop:"gender",label:"\u6027\u522B",width:"50",align:"center"}),s(n,{prop:"officialVerify",label:"\u5B98\u65B9\u8BA4\u8BC1",width:"80",align:"center"}),s(n,{label:"\u8D26\u53F7\u5206\u7C7B",width:"140"},{default:u(r=>[s(a,{title:`${r.row.accountTypeV1}-${r.row.accountTypeV2}`},null,8,["title"])]),_:1}),s(n,{prop:"accountTags",label:"\u6807\u7B7E"},{default:u(r=>[(i(!0),V(G,null,Y(r.row.accountTags,(m,$)=>(i(),d(_,{type:o.tagType($),style:{margin:"0 4px 4px 0"}},{default:u(()=>[H(J(m),1)]),_:2},1032,["type"]))),256))]),_:1}),s(n,{prop:"fans",label:"\u7C89\u4E1D\u6570\u91CF",width:"100",sortable:""}),s(n,{prop:"likedCollectedCount",label:"\u70B9\u8D5E\u6536\u85CF",width:"100",sortable:""})]),_:1},8,["data"])}const ne=j(ee,[["render",ae]]);export{ne as default};
