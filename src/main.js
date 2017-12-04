import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'
import Vuetify from 'vuetify'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'



Vue.use(moment);
Vue.use(Vuetify);
Vue.use(vueResource);
Vue.use(VueRouter);

const router = new VueRouter({
routes:Routes,
mode:'history'
});



new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
})
