import{E as u,o as c,c as p,e as t,f as v,w as d,F as m,g as r,h as n}from"./index.5d34f032.js";const $=t("div",null,"Page1-123",-1),k=r(" - - - "),_=t("div",null,"-----",-1),b=r("Primary"),g={__name:"testone",setup(f){const l=()=>{console.log("setSpecificEvent"),n("aaa",{event_category:"bbb",event_label:"ccc"})},i=()=>{console.log("scompleteOrder "),n("\u5B8C\u6210\u8A02\u55AE",{event_category:"\u7DE8\u8F2F\u8005",event_label:"\u4F5C\u5BB6"})};return(o,e)=>{const a=u;return c(),p(m,null,[$,t("div",{class:"cursor-pointer",onClick:e[0]||(e[0]=s=>o.$router.push("/testone"))},"test1"),t("div",{class:"cursor-pointer",onClick:e[1]||(e[1]=s=>o.$router.push("/testtwo"))},"test2"),t("div",{class:"cursor-pointer",onClick:e[2]||(e[2]=s=>o.$router.push("/testthree"))},"test3"),t("div",{class:"cursor-pointer",onClick:e[3]||(e[3]=s=>o.$router.push("/testFour"))},"test4"),t("div",{class:"cursor-pointer",onClick:e[4]||(e[4]=s=>o.$router.push("/testFive"))},"test5"),t("button",{onClick:l},"setSpecificEvent"),k,_,v(a,{type:"primary",onClick:i},{default:d(()=>[b]),_:1})],64)}}};export{g as default};
