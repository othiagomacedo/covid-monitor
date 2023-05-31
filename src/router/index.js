import { createRouter, createWebHistory } from 'vue-router'
import Benchmark from '../components/bench/Benchmark.vue'
import Historico from '../components/bench/HistoricoBenchmark.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/benchmark',
      name: 'Benchmark',
      component: Benchmark
    },
    {
      path: '/historico',
      name: 'Historico',
      component: Historico
    }
  ]
})

export default router
