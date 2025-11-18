import { createRouter, createWebHistory } from 'vue-router'
import { useLoadingStore } from '@/stores/loading'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../layouts/DefaultLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: '/jobs',
          name: 'Vagas',
          component: () => import('../views/JobsView.vue')
        },
        {
          path: '/profile',
          name: 'Perfil',
          component: () => import('../views/ProfileView.vue')
        },
        {
          path: '/about',
          name: 'Sobre',
          component: () => import('../views/AboutView.vue')
        }
      ],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/authentication',
      name: 'authentication',
      component: () => import('../layouts/BlanckLayout.vue'),
      children: [
        {
          path: '/login-user',
          name: 'Entrar Usuário',
          component: () => import('../views/LoginUserView.vue')
        },
        {
          path: '/sign-up-user',
          name: 'Cadastro Usuário',
          component: () => import('../views/SignUpUserView.vue')
        },
        {
          path: '/login-business',
          name: 'Entrar Empresa',
          component: () => import('../views/LoginBusinessView.vue')
        },
        {
          path: '/sign-up-business',
          name: 'Cadastro Empresa',
          component: () => import('../views/SignUpBusinessView.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const loadingStore = useLoadingStore()
  loadingStore.startLoading()
  next()
})

router.afterEach(() => {
  const loadingStore = useLoadingStore()
  setTimeout(() => {
    loadingStore.stopLoading()
  }, 500)
})

export default router
