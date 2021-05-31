import Profile from '@/views/auth/Profile'
import Signup from '@/views/auth/Signup'

export default [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login"*/ '@/views/auth/Login')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  }
]
