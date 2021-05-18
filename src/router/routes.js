import Home from '../views/home/routes'
import Login from '../views/auth/login/routes'
import Signup from '../views/auth/signup/routes'
import Profile from '../views/auth/profile/routes'
import jobRoutes from './jobs'
import About from '../views/about/routes'

export default [
  Home,
  About,
  Login,
  Signup,
  ...jobRoutes,
  Profile
]
