import { createRouter, createWebHistory } from 'vue-router'
import { useLoadingStore } from '@/stores/loading';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: () => import('../views/SignUpView.vue'),
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: () => import('../views/JobsView.vue'),
    },
    {
      path: '/about/:id',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
    },
    {
      path: '/candidates',
      name: 'candidates',
      component: () => import('../views/CandidatesView.vue'),
    },
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