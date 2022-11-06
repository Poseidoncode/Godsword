import { createApp } from "vue";
import App from "./App.vue";
import VueGtag from "vue-gtag";

import router from "./router";

//event bus
import mitt from "mitt";
const emitter = mitt();

//ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//css
import "./styles/index.scss";

//pinia
import { createPinia } from 'pinia'

const app = createApp(App).use(router).use(ElementPlus).use(VueGtag, {
    // appName: 'My application',
    pageTrackerScreenviewEnabled: true,
    pageTrackerTemplate(to) {
      return {
        page_title:!!to.meta?.pageData ?to.meta?.pageData:to.name ,
        // page_title: to.name,
        page_path: to.path
      }
    },
    config: { id: "G-P2XCCBR8NH" }
  }, router).use(createPinia());


app.provide("emitter", emitter);
app.mount("#app");
