import auth from './auth'
import jobRoutes from './jobs'
import home from './home'
import company from './company'

export default [...home, ...auth, ...jobRoutes, ...company]
