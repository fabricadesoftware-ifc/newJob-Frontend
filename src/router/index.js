import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/routes'
import Jobs from '../views/JobsGrid/routes'
import Login from '../views/Login/routes'
import Signup from '../views/Signup/routes'
import JobRegistration from '../views/JobRegister/routes'
import About from '../views/About/routes'

Vue.use(VueRouter)

const routes = [Home, About, Jobs, Login, Signup, JobRegistration]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
