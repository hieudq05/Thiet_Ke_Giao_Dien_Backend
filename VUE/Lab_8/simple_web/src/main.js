import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";

import "./assets/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";

createApp(App).use(router).mount("#app");
