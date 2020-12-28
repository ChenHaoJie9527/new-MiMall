import Vue from 'vue';
import axios from "axios";
import VueAxios from "vue-axios";
import App from './App.vue';
import router from "./router/index";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false;
// axios.defaults.baseURL = "/api";
axios.defaults.baseURL = "api";
axios.defaults.timeout = 8000;
Vue.use(ElementUI);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: '/imgs/loading-svg/loading-cylon-red.svg',
  attempt: 1
});
axios.interceptors.response.use((response) => {
  let res = response.data;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    window.location.href = "/#/login";
  } else {
    alert(res.msg);
  }
})
Vue.use(VueAxios, axios);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')