import homepage from './components/homepage.vue';
import home from './components/home.vue';
import login from './components/login.vue';
import singletodo from './components/singletodo.vue';
import signup from './components/signup.vue';


export default[
  {path:'/', component:homepage},
  {path:'/add', component:home},
  {path:'/login', component:login},
  {path:'/todo/:id', component:singletodo},
  {path:'/add/:id', component:home},
  {path:'/signup', component:signup}

]
