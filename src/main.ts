import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./router/permission";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import elementPlus from "element-plus";

import compositeWare from "composite-ware";

import "element-plus/dist/index.css";

import "composite-ware/theme-chalk/index.css";

import "normalize.css";
import "./styles/index.scss";
import "virtual:svg-icons-register";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router);
app.use(store);
app.use(elementPlus);
app.use(compositeWare);
app.mount("#app");
