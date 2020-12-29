import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import '@/assets/css/tailwind.scss';
import VueWorker from 'vue-worker';

Vue.config.productionTip = false;
Vue.use(VueWorker);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
