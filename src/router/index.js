import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ComprasView from '../views/ComprasView.vue'
import ContasView from '../views/ContasView.vue'
import DashboardView from '../views/DashboardView.vue'
import FornecedorView from '../views/FornecedorView.vue'
import ClientesView from '../views/ClientesView.vue'
import ProdutosView from '../views/ProdutosView.vue'
import VendasView from '../views/VendasView.vue'



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
      component: AboutView
    },
    {
      path: '/compras',
      name: 'compras',
      component: ComprasView
    },
    {
      path: '/contas',
      name: 'contas',
      component: ContasView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/fornecedor',
      name: 'fornecedor',
      component: FornecedorView
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: ClientesView
    },
    {
      path: '/produtos',
      name: 'produtos',
      component: ProdutosView
    },
    {
      path: '/vendas',
      name: 'vendas',
      component: VendasView
    },
  ]
})

export default router
