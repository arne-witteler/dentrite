import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/pages/LandingPage.vue'
import DashboardPage from '@/pages/DashboardPage.vue'
import AppTemplate from '@/components/templates/AppTemplate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingPage 
    },
    {
      path: '/app',
      component: AppTemplate,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: DashboardPage
        }
      ]
    },
    { 
      path: '/:pathMatch(.*)*', 
      redirect: '/' 
    }
  ]
})

export default router