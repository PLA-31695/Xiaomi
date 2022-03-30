import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import '@/assets/css/global.css'

Vue.config.productionTip = false

new Vue({
  router,//所有组件都有$route和$router
  render: h => h(App),
}).$mount('#app')
