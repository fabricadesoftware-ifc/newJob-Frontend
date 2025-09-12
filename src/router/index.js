import { createRouter, createWebHistory } from 'vue-router'
import { useLoadingStore } from '@/stores/loading';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // Problema no nome da rota dos componentes de layout - futuramente colocar o nome deles como o mesmo dos seus primeiros filhos
      path: '/a',
      name: 'a',
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
      path: '/b',
      name: 'b',
      component: () => import('../layouts/BlanckLayout.vue'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('../views/LoginView.vue')
        },
        {
          path: '/sign-up',
          name: 'entrar',
          component: () => import('../views/SignUpView.vue')
        },
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const loadingStore = useLoadingStore();
  loadingStore.startLoading();
  next();
});

router.afterEach(() => {
  const loadingStore = useLoadingStore();
  setTimeout(() => {
    loadingStore.stopLoading();
  }, 500); 
});

export default router