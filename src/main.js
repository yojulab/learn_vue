import { createApp } from "vue";
import App from "./App.vue";
// import router from "./routers/router.js";
import stores from "./stores/sharedStates.js";

const app = createApp(App);
// app.use(router);
app.provide("stores", stores);
app.mount("#app");
