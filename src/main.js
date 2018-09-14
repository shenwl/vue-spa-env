import '@/modules/css/normalize.css'

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

window.vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
