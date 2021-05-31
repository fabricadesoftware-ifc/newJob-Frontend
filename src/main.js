import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as VueGoogleMaps from 'vue2-google-maps'

library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Buefy, {
  //   defaultIconPack: 'fas',
  defaultContainerElement: '#content'
})

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC7p6_xVXwtZ3RmkwJMlrWcVVutEURGWSQ'
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
