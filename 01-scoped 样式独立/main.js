import Vue from 'vue'
import App from './App.vue'
import BaseOne from './components/BaseOne.vue'
import BaseTwo from './components/BaseTwo.vue'
Vue.component('BaseOne', BaseOne)
Vue.component('BaseTwo', BaseTwo)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
