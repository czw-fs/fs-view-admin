import Vue from 'vue'
import App from './App.vue'

import router from './router'
import 'reset-css'
import element from './plugin/element';
import store from './store'
import './permission' // permission control
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
