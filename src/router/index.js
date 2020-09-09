import Vue from 'vue'
import VueRouter from 'vue-router'


import BuscaCep from '../components/BuscaCep'
import BuscaEndereco from '../components/BuscaEndereco'


Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
      { path: '/', component: BuscaEndereco },
      { path: '/buscaendereco', component: BuscaEndereco },
      { path: '/buscacep', component: BuscaCep },
  ]
})