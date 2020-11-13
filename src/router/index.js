import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import JobGrid from '../views/JobGrid.vue'
import LoginForm from '../views/LoginForm.vue'
import Signup from '../views/Signup.vue'
import JobRegistration from '../views/JobRegistration.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/jobs',
    name: 'JobGrid',
    component: JobGrid
  },
  {
    path: '/login',
    name: 'LoginForm',
    component: LoginForm
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/job-registration',
    name: 'JobRegistration',
    component: JobRegistration
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
