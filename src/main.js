import { createApp } from "vue";
import App from "./App.vue";

// import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App);

import router from "./routers/router.js";
app.use(router);

import stores from "./stores/sharedStates.js";
app.provide("stores", stores);

app.mount("#app");
