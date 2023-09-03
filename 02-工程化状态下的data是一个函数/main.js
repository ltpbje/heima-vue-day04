import Vue from 'vue'
import App from './App.vue'
import BaseCount from './components/BaseCount.vue'
Vue.component('BaseCount', BaseCount)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
