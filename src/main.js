import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })
new Vue({
  render: h => h(App),
}).$mount('#app')
