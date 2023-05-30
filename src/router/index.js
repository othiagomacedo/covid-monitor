import { createRouter, createWebHistory } from 'vue-router'
import Benchmark from '../components/bench/Benchmark.vue'
import Paises from '../components/pais/Paises.vue'

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
    }
  ]
})

export default router
