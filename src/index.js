import { vue as Vue } from 'vea'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'
Vue.use(VueMeta)
/* eslint-disable no-new */
const root = new Vue({
  router,
  components: { App },
  template: '<App/>'
})
document.addEventListener('DOMContentLoaded', function () {
  root.$mount('#app')
})
