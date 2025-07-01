import { createApp } from "vue";
import App from "./app/App.vue";
import { createPinia } from "pinia";
import vuetify from "./plugins/vuetify";
import { createAppRouter } from "./app/router/index";
import { createWebHistory } from "vue-router";

createApp(App)
  .use(createPinia())
  .use(createAppRouter(createWebHistory(import.meta.env.BASE_URL)))
  .use(vuetify)
  .mount("#app");
