import Vue from 'vue'
import App from './App.vue'

//--------------- bootstrap -------------------
import 'bootstrap';
//--------------- font awesome -------------------
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)
//----------------------------------


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
