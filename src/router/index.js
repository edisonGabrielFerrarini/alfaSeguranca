import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Portaria from '../views/Portaria.vue'
import Seguranca from '../views/Seguranca.vue'
import Contato from '../views/Contato.vue'
import Construcao from '../views/Construcao.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/portaria',
    name: 'Portaria',
    component: Portaria
  },
  {
    path: '/seguranca',
    name: 'Seguranca',
    component: Seguranca
  },
  {
    path: '/contato',
    name: 'Contato',
    component: Contato
  },
  {
    path: '/outros',
    name: 'Construcao',
    component: Construcao
  },
  
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
