import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Portaria from '../views/Portaria.vue'
import Seguranca from '../views/Seguranca.vue'
import Contato from '../views/Contato.vue'
import Construcao from '../views/Obras.vue'
import Limpeza from '../views/Limpeza.vue'


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
    path: '/obras',
    name: 'Construcao',
    component: Construcao
  },
  {
    path: '/limpeza',
    name: 'Limpeza',
    component: Limpeza
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
