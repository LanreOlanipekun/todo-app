<template>
  <div>
    <div class="container">
  <div class="row">
    <div class="col-sm-11 col-6">
      <div class="customdiv">
        <p>Da Next</p>
      </div>
    </div>

<div class="col-sm-1 col-6">
  <div class="customdiv">
    <button type="button" class="btn btn-light"><router-link to="/login" exact>Log in</router-link></button>
  </div>
</div>

  </div>
</div>


<div class="container-fluid">
  <div class="row">
    <div class="col-sm-5 offset-1">
      <div class="todo">
    <h1>Really simple to-do lists you can share</h1><br/>
    <button class="btn btn-success btn-lg"><router-link to="/add" exact>Create a to-do list</router-link></button> <br/><br/>
    <p>No sign up required</p>
    </div>
    </div>

    <div class="col-sm-6 image"></div>

  </div>
</div>


<!--info-->
<div class="container-fluid" id="info">
  <div class="row">

      <div class="row align-items-center info">
        <span class="col-sm-4 col-md-4 col-12 p"><img src="../assets/icons8-checked-3.png"/> <strong>No sign up. Nothing to install.</strong><br/>Just start adding tasks. Only sign up if you want to save more than one list.</span>
          <span class="col-sm-4 col-md-4 col-12 p"><img src="../assets/icons8-forward-arrow-filled-30.png"/><strong>Share lists with ease.</strong><br/>Copy/paste the URL to share a list. No permissions. No formal invites. It's that simple.</span>
          <span class="col-sm-4 col-md-4 col-12 p"><img src="../assets/icons8-iphone-filled-30.png"/> <strong>Access from any device.</strong><br/>Browser based so your lists are always synced and you can access them from anywhere.</span>
      </div>


  </div>
</div>


<!--facts-->
<div class="container-fluid" id="facts">
  <div class="row">

      <div class="row align-items-center facts">
        <span class="col-sm-4 col-md-4 col-12 font-italic p" id="p1"><strong>"</strong><br/>What I like about da next is the simplicity, ease of use, and lack of any barriers to get started.</span>
          <span class="col-sm-4 col-md-4 col-12 font-italic p" id="p2"><strong>"</strong><br/>I have been using it for a variety of things including to-do lists, shopping lists, goals, items-to-pack and wishlists.</span>
          <span class="col-sm-4 col-md-4 col-12 font-italic p" id="p3"><strong>"</strong><br/>The fact it is available from anywhere makes it extremely versatile.</span>
      </div>


  </div>
</div>


<!--logos-->

<div class="container-fluid" id="logos">
  <div class="row logos">
      <div class="col-md-4 col-sm-4 col-12">
        <a href="#"><img class="img-fluid mx-auto d-block" src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Lifehacker_Logo.png" width="200px"/></a>
      </div>

      <div class="col-md-4 col-sm-4 col-12">
        <a href="#"><img class="img-fluid mx-auto d-block" src="https://www.dashlane.com/images/homepage/press/addictivetips-logo.png" width="200px"/></a>
      </div>

      <div class="col-md-4 col-sm-4 col-12">
        <a href="#"><img class="img-fluid mx-auto d-block" src="http://rockysandstudio.com/imgs/rss-press-appstorm.png" width="200px"/></a>
      </div>
  </div>
</div>

<!--footer-->

<div class="container-fluid" id="footer">
  <div class="row">
    <div class="col-md-6 offset-md-6 col-sm-12 col-12">
      <div class="foot">
        <ul class="text-right">
          <a href=""><li>About</li></a>
          <a href=""><li>Developers</li></a>
          <a href=""><li>Suggest a feature</li></a>
        </ul>
      </div>
    </div>
  </div>
</div>

</div>
</template>

<script>

export default {
components:{

},
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.customdiv{
  margin-top:50px;

}
.customdiv button a{
  color:grey;
  text-decoration: none;
}
.customdiv button:hover{
  background: #843ab8;
}
.customdiv button a:hover{
  color:white;
}
.customdiv p{
  color:#33496d;
  font-weight: 800;
  font-size: 30px;
}
.todo{
  margin-top:100px;

}
.todo h1{
  font-size: 40px;
  font-weight: 500;
  color:#33496d;
}
.todo button a{
  color:white;
  text-decoration: none;
}
.image{
  background-image: url("../assets/todo.png");
  background-repeat: no-repeat;
  background-size: contain;
  margin-top:100px;
  height:300px;

}
.info{
  min-height:250px;
  margin-left:40px;
  margin-right:20px;

}
#info{
  background-color: #111926;

}
.info .p{
  color:white;

}
.info .p strong{
  color:white;
  font-size: 18px;
}
.facts{
  min-height: 300px;

}
  .facts .p{
    font-size: 22px;
    color:#33496d;

  }
  #facts{
    background-color: #18253a;
    overflow-x: hidden;
  }
  .facts strong{
    position: relative;
    right:30px;
    top:30px;
    font-size: 50px;
    color:#33496d;
  }

  #p1{
    padding-left:90px;
    padding-right:90px;
    position: relative;
    bottom:30px;
  }
  #p2{
    padding-left:90px;
    padding-right:90px;
    padding-bottom:20px;
  }
  #p3{
    padding-left:90px;
    padding-right:90px;
    padding-bottom:10px;
    position: relative;
    bottom:30px;
  }
  .logos{
  min-height:200px;
}
.logos img{
margin-top:50px;
}
#logos{
background-color: #233249;
}
.foot li{
  display: inline;
  padding:10px;
}
.foot ul a{
  text-decoration: none;
  color:grey;
}
.foot ul a:hover{
  color:white;
}
.foot{
  margin-right:40px;
  min-height:100px;
  margin-top: 50px;
}
#footer{
  background-color: #0b1019;
}


</style>
