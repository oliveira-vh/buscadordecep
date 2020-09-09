import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from 'axios'

Vue.config.productionTip = false


Vue.use({
  install (Vue) {
  Vue.prototype.$api = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
  })
}
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');


