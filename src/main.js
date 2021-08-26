import Vue from 'vue'
import App from './App.vue'
import TransitionExpand from 'vue-transition-expand'
import 'vue-transition-expand/dist/vue-transition-expand.css'
import VModal from 'vue-js-modal'
import SimpleVueValidation from 'simple-vue-validator'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(Vue2TouchEvents);
Vue.use(SimpleVueValidation); 
Vue.use(VModal)
Vue.use(TransitionExpand)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
