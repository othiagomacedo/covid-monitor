import { createRouter, createWebHistory } from 'vue-router'
import Benchmark from '../components/body/Benchmark.vue'
import Paises from '../components/body/Paises.vue'
import BodyPais from '../components/pais/BodyPais.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/benchmark',
      name: 'Benchmark',
      component: Benchmark
    },
    {
      path: '/paises',
      name: 'Paises',
      component: Paises
    },
    {
      path: '/body-pais',
      name: 'BodyPais',
      component: BodyPais,
      props: true
    }
  ]
})

export default router
