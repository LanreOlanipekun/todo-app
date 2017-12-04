<template>
  <div class="home">

    <div class="modal is-active" v-show="showLoginModal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Register to save your list</p>
      <button class="delete" aria-label="close" v-on:click="showLoginModal=false"></button>
    </header>
    <section class="modal-card-body">
      <!-- Content ... -->
      <label for="name">Your name</label>
      <input type="text" name="name">

      <label for="email">Email</label>
      <input type="email" name="email">

      <label for="password">Password</label>
      <input type="password" name="password">
      <button class="button is-success">Save list</button>
      <p>Already have an account?<a href="#">Log in here</a></p>
    </section>

  </div>
</div>

    <header class="top">
      <div class="container-fluid">
        <div class="row">
          <nav class="col-sm-12 text-right">
          <p class="col-sm-2"><a href="#"><router-link to="/login"> Log in</router-link></a></p>
          <p class="col-sm-2"><a href="#"><img src="../assets/icons8-plus (4).png"/>New list</a></p>
        </nav>
        </div>
      </div>
    </header>

    <div class="label">
    <section class="container-fluid">
      <div class="row">
        <p v-show="!show"><img src="../assets/icons8-checked-checkbox-30.png"/>Da next{{display()}}</p>
        <p v-show="show" class="col-sm-9 text-left">{{message}} {{| moment }}{{display()}}</p>

        <div class="col-sm-2">
        <button type="button" class="btn btn-success" v-on:click="showLoginModal=true"><img src="../assets/icons8-filled-circle-filled.png" />Save This List</button>
      </div>
      </div>


</section>
</div>
<!--input-->
<div class="form">
<section class="container-fluid">
  <div class="row">
    <input class="col-sm-12" type="text" placeholder="Write your next task here..." v-on:keyup.enter="addTodo" v-model="todos.todo" required/>
  </div>
</section>
</div>


<!--todo list-->
<div class="output">
  <section class="container-fluid"   v-if="!todol.done" v-for="todol in todolist">
    <div v-bind:class="{starred: todol.starred}">
    <div class="row">
      <div class="col-sm-6 text-left">
        <span class="col-sm-1"></span>
        <label v-on:click="check"><router-link v-bind:to="'/add/'+ todol.id"><input type="checkbox" title="done" uncheck/></router-link></label>
      <router-link v-bind:to="'/todo/'+ todol.id"><p v-bind:class="{taskdone: todol.done}"title="click to set date" v-if="!todol.done">{{todol.todo}}</p></router-link>
      <p v-bind:class="{taskdone: todol.done}" id="due-date" v-if="!todol.done">{{todol.date}}</p>
        </div>
      <div class="col-sm-6 text-right">
<label v-on:click="star" v-on:dblclick="unstar"><router-link v-bind:to="'/add/'+ todol.id"><input class="star" type="checkbox" title="click star todo, double click to unstar todo"></router-link></label>

        <label for="tag-1" title="tag task with color" id="tag">
<a href="#"><i class="fa fa-tag" aria-hidden="true"></i></a>
          </label>
        <label for="close-1" title="delete" id="close"v-on:click="removeTodo">
          <a href="#"><router-link v-bind:to="'/add/'+ todol.id"><i class="fa fa-close" aria-hidden="true"></i></router-link></a>
        </label>

        </div>
    </div>
  </div>
  </section>


<!--done list-->
  <section v-if="todol.done" class="container-fluid" v-for="todol in todolist">
    <div class="row">
      <div class="col-sm-6 text-left">
        <span class="col-sm-1"></span>
            <label v-on:click="uncheck"><router-link v-bind:to="'/add/'+ todol.id"><input type="checkbox" title="done" checked/></router-link></label>
      <p id="task-list" v-bind:class="{taskdone: todol.done}">{{todol.todo}}</p>
      <p v-bind:class="{taskdone:todol.done}" id="due-date">{{todol.date}}</p>
    </div>
      <div class="col-sm-6 text-right">

          <label for="close-1" title="delete" id="close"v-on:click="removeTodo">
          <a href="#"><router-link v-bind:to="'/add/'+ todol.id"><i class="fa fa-close" aria-hidden="true"></i></router-link></a>
            </label>

        </div>
    </div>
  </section>
</div>


<!--footer-->
<footer class="container-fluid">
  <div class="row">
    <div class="col-sm-12 text-right">
    <p><a href="#">About</a></p>
    <p><a href="#">Developers</a></p>
    <p><a href="#">Suggest a feature</a></p>
  </div>
  </div>
</footer>

  </div>
  </template>

<script>
import moment from 'moment'

export default {
  components:{

  },
  data () {
    return {
      id:this.$route.params.id,
      message: 'My to-do list',
      todos:{
        todo:'',
        date:'no due date',
        done:false
      },
      date1:'',
      todo:{
        done:{}
      },
      tod:{
        starred:true,
      },
      todolist:[],
      show:false,
      showLoginModal:false,
      done:false
      }
  },
  methods: {
  moment: function () {
    return moment();
  },
  addTodo: function(){
    this.$http.post('https://todo-app-c5de3.firebaseio.com/posts.json',this.todos).then(function(data){
      console.log(data)
      this.todos.todo=''
      location.reload();
    })
  },
  removeTodo: function(){
    var id = this.$route.params.id
    this.$http.delete('https://todo-app-c5de3.firebaseio.com/posts/' + id +'.json',).then(function(data){
      location.reload();

    })
  },
  check: function(){
    this.todo.done=true;
    var id = this.$route.params.id;

    this.$http.patch('https://todo-app-c5de3.firebaseio.com/posts/' + id + '.json',this.todo).then(function(data){
      location.reload();

    })
  },
  uncheck: function(){
    this.todo.done=false;
    var id = this.$route.params.id;

    this.$http.patch('https://todo-app-c5de3.firebaseio.com/posts/' + id + '.json',this.todo).then(function(data){
      location.reload();

    })
  },
  display:function(){
    if(this.todolist==''){
      this.show=false
    }else{
      this.show=true
    }
  },

  star:function(){
      this.tod.starred=true

    var id = this.$route.params.id;

    this.$http.patch('https://todo-app-c5de3.firebaseio.com/posts/' + id + '.json',this.tod).then(function(data){
      location.reload();

    })
  },
  unstar:function(){
      this.tod.starred=false

    var id = this.$route.params.id;

    this.$http.patch('https://todo-app-c5de3.firebaseio.com/posts/' + id + '.json',this.tod).then(function(data){
      location.reload();

    })
  }

},
created(){
  this.$http.get('https://todo-app-c5de3.firebaseio.com/posts.json').then(function(data){
    return data.json()
  }).then(function(data){
    var todosArray = [];
    for(let key in data){
      data[key].id = key
      todosArray.push(data[key])

    }
    this.todolist = todosArray;
    console.log(this.todolist)
  })

},

filters: {
  moment: function (date) {
    return moment(date).format('M/ D/ YYYY')


  }
}

}
</script>

<style scoped>

.top{

  background: #111926;
  border-bottom: 1px solid #111;
  height:37px;
  width: 100%;
  padding-right: 0;
}
.top .container-fluid{
  border:solid;
  border:hidden;
  height:100%;
  width:100%;
}

.top nav p{
  display: inline;
  position: relative;
  top:5px;
  }

.top a{
  color: #ccc;
  font-size: 14px;
  text-decoration: none;
}
.top a:hover{
  color:white;
}
.top nav img{
  position: relative;
  bottom:3px;
}

.label{
  border: 1px outset;
  border-color: #33496d;

  background: #33496d;
  position:relative;
  top:0px;
  box-shadow: 2px 2px 2px #888888;
  padding-bottom: 20px;
  margin: 0;
}
.label p{
  color:white;
  font-size: 22px;
  padding: 10px 0 0 55px;


}
.label button{

  height: 40px;
  position: relative;
  top:10px;
  left:10px;
  background-color:#16c061;
  border-radius: 5px;
  border-color:#16c061;
  box-shadow: 0px 0px 5px black;
  display:inline;

}

.container-fluid input[type=text]{
  height: 60px;
  font-size: 35px;
  border: 0;
  appearance:none;
  padding-left: 50px;
  outline: none;
  background: #111926;
  color:white;

}

footer .row p{
  display: inline;
  padding:20px;
  position: relative;
  top:45px;
}
footer .row p a{
  color:#aaa;
  text-decoration: none;
}
footer .row p a:hover{
  color:#63655d;
}
.output .container-fluid:nth-last-of-type(odd){
  border-style: solid;
  border-width: 1px;
  border-color:#e6e7e4;
  background: #f8f9f6;

}
.starred{
  border-style: dashed;
  border-width: 2px;
  border-color:gold;
  border-left:hidden;
  border-right:hidden;
  color:blue;
  font-style: italic;
  font-weight: bold;
}
.output label i{
  visibility: hidden;
  padding:10px;
  position: relative;
  right:50px;
  top:5px;
  zoom:1.5;
}

.output .container-fluid:hover i{
  visibility: visible;
  color:#cfd1cc;
}
.output .container-fluid:hover{
  border:solid;
  border-width: 1px;
  border-color: #cfd1cc;
}
.output div p{
  display: inline;
}
.output a{
  color:black;
}
 #due-date{
border-style:solid;
border-radius: 10px;
border:hidden;
background: #d9d9d3;
}
#dater{
  border-style:solid;
  border-radius: 10px;
  border:hidden;
  background: #d9d9d3;
}


#tag i:hover{
  color:#3a4992;
}
#close i:hover{
  color:red;
}
.output input[type="checkbox"]{
 zoom:3;
 position: relative;
 top: 5px;
}
.output span.col-sm-1{
  cursor: move;
  color: #ccc;
  background-image: url("../assets/icons8-menu-vertical.png");

}
.output p.taskdone{
  text-decoration: line-through;
}
#task-list{
  color:#c1c1b9;
}

.output .star{
    visibility:hidden;
    font-size:10px;
    cursor:pointer;
    position: relative;
    right:25px;
    bottom:20px;
    color:yellow;
}


.output .star:before {
   content: "\2605";
   position: absolute;
   visibility:hidden;
}
.output .container-fluid:hover .star:before{
  visibility: visible;
  color:orange;
}

.output .star:checked:before {
   content: "\2606";
   position: absolute;
}
.output form{
  position: relative;
  left:70px;

}
.is-active header{
  background: #33496d;
  border-style:solid;
  border-width: thin;
  border:hidden;
  box-shadow:1px 1px 1px #888888;

}
.is-active header p{
  color:white;
  font-size:20px;
}
.is-active section label{
  display: block;
  position: relative;
  top:10px;
  left:10px;
}
.is-active section input{
  display: block;
  width:250px;
  margin:10px;
}
.is-active section button{
  position: relative;
  left:10px;
  height:50px;
}
.is-active section p{
  color:#aaa;
  position: relative;
  top:10px;
  left:10px;
  padding: 10px 0 10px 0
}
section p a{
  color:#aaa;
  text-decoration: underline;
}




</style>
