import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
import jwt from 'jsonwebtoken'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserMd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


Vue.config.productionTip = false
Vue.use(vuetify)
Vue.use(VueAxios, axios)
Vue.use(VueCookies)
// Vue.$cookies.config('5min')
Vue.use(jwt)
library.add(faUserMd)
Vue.component('font-awesome-icon', FontAwesomeIcon)


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
