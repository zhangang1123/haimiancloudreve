import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import router from './router'
import store from './store' 
Vue.config.productionTip = false
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(vueRouter);
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
