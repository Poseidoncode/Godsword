import{o as n,c as i,e as t,F as l,f as u}from"./index.7f9f789c.js";const p=t("div",null,"Page1-123",-1),c={__name:"testone",setup(v){const r=()=>{console.log("setSpecificEvent"),u("aaa",{event_category:"bbb",event_label:"ccc"})};return(s,e)=>(n(),i(l,null,[p,t("div",{class:"cursor-pointer",onClick:e[0]||(e[0]=o=>s.$router.push("/testone"))},"test1"),t("div",{class:"cursor-pointer",onClick:e[1]||(e[1]=o=>s.$router.push("/testtwo"))},"test2"),t("div",{class:"cursor-pointer",onClick:e[2]||(e[2]=o=>s.$router.push("/testthree"))},"test3"),t("div",{class:"cursor-pointer",onClick:e[3]||(e[3]=o=>s.$router.push("/testFour"))},"test4"),t("div",{class:"cursor-pointer",onClick:e[4]||(e[4]=o=>s.$router.push("/testFive"))},"test5"),t("button",{onClick:r},"setSpecificEvent")],64))}};export{c as default};