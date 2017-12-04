<template>
  <div class="home">

    <header class="container-fluid header">
      <div class="row">
        <a class="col-sm-1 col-sm-offset-11" href="#">Log in</a>
      </div>
    </header>

    <div class="banner">
      <div class="container-fluid">
        <div class="row">
          <p><img src="../assets/icons8-checked-checkbox-30.png"/>Flask</p>
        </div>
      </div>
    </div>

<!--form-->
    <section class="container">
      <div class="row">
        <h1 class="col-sm-6">Sign up to save list</h1>
        </div>

        <div class="row">
          <label class="col-sm-1" for=Name>Name</label>
        </div>
        <div class="row">
            <input class="col-sm-6" type="text" name="name" v-model="name" required/>
        </div>

      <div class="row">
        <label class="col-sm-1" for=email>Email</label>
      </div>
      <div class="row">
          <input class="col-sm-6" type="email" name="email" key="email-input" v-model="email" required/>
      </div>
      <div class="row">
      <label class="col-sm-1" for=password>Password</label>
    </div>
    <div class="row">
        <input class="col-sm-6" type="password" name="password" v-model="password" required/>
    </div>

    <div class="row col-sm-12">
      <button type="button" class="btn btn-success" v-on:click="onSignup">Sign up</button>
    </div>

    <div class="row">
      <a id="forgot" href="#">Forgot your password?</a>
    </div>

    </section>

  </div>
  </template>

<script>


export default {
  components:{

  },
  data () {
    return {
      name:'',
      email:'',
      password:''
      }
  },
  methods: {
    onSignup(){
      //vuex
      console.log({name:this.name, email:this.email, password:this.password})
    }
},

}
</script>

<style scoped>
  header.header{
    background-color: #333;
  }
  header.header a{
    padding:8px;
    color:#ccc;
    text-decoration: none;
  }
    header.header a:hover{
      color:white;
    }
  .banner{
    background-color:#843ab8;
    box-shadow: 1px 1px 1px 1px #888888;
  }
  .banner p{
    padding:10px 10px 10px 50px;
    font-size: 20px;
  }
section h1{
  padding:50px 50px 50px 0px;
  font-size: 30px;
  font-weight: 500;
}
#new{
  padding: 0;
  font-size:18px;
}

#new a{
  color:#843ab8;
  font-weight: 500;
}
section label{
  padding:20px 0 0 0;
}
section .btn{
  position: relative;
  top:20px;
  right:15px;
}
#forgot{
  color:lightgrey;
  position: relative;
  top:50px;
}
</style>

</style>
