<template>
  <div class="home">

    <header class="container-fluid header">
      <div class="row">
        <a class="col-sm-1 offset-11" href="#">Log in</a>
      </div>
    </header>

    <div class="banner">
      <div class="container-fluid">
        <div class="row">
          <p><img src="../assets/icons8-checked-checkbox-30.png"/>Da Next</p>
        </div>
      </div>
    </div>

    <section class="container">
      <div class="row">
        <h1 class="col-sm-6">Log in to save and access your lists</h1>
        </div>

        <div class="row">
        <p class="col-sm-6" id="new">New to Flask.io? <router-link to="/signup"> Sign up here to save your lists</router-link></p>
      </div>

      <div class="row">
        <label class="col-sm-1" for=email>Email</label>
      </div>
      <div class="row">
          <input class="col-sm-6" type="email" name="email" required/>
      </div>
      <div class="row">
      <label class="col-sm-1" for=password>Password</label>
    </div>
    <div class="row">
        <input class="col-sm-6" type="password" name="password" required/>
    </div>

    <div class="row col-sm-12">
      <button type="button" class="btn btn-success">Log in</button>
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

      }
  },
  methods: {

},

}
</script>

<style scoped>
  header.header{
    background-color: #111926;
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
    background-color:#33496d;
    box-shadow: 1px 1px 1px 1px #888888;
  }
  .banner p{
    padding:10px 10px 10px 50px;
    font-size: 30px;
    font-weight: 800;
    color:white;
  }
  .banner img{
    padding-bottom:8px;
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
