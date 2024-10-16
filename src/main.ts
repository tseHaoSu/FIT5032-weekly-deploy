import { createApp } from 'vue'
import './assets/index.css'
import App from './App.vue'
import router from './router'
import './assets/index.css'
import { VueFire, VueFireAuth } from "vuefire";
import { firebaseApp } from "./firebaseConfig";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
});

app.mount("#app");
