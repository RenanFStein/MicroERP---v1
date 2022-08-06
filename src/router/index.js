import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/compras',
      name: 'compras',
      component: () => import('../views/ComprasView.vue')
    },
    {
      path: '/contas',
      name: 'contas',
      component: () => import('../views/ContasView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/fornecedor',
      name: 'fornecedor',
      component: () => import('../views/FornecedorView.vue')
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: () => import('../views/ClientesView.vue')
    },
    {
      path: '/produtos',
      name: 'produtos',
      component: () => import('../views/ProdutosView.vue')
    },
    {
      path: '/vendas',
      name: 'vendas',
      component: () => import('../views/VendasView.vue')
    },
  ]
})

export default router
