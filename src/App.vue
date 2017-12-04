<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import home from './components/home.vue'
import homepage from './components/homepage.vue'
import login from './components/login.vue'
import signup from './components/signup.vue'
export default {
components:{
  'app-home':home,
  'app-homepage':homepage,
  'app-login':login,
  'app-signup':signup
},
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
