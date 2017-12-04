<template>
<div class="single">


  <div class="label">
  <section class="container-fluid">
    <div class="row">
      <p class="col-sm-9 text-left"> {{| moment }}</p>

    </div>
    </section>
    </div>





  <div class="singletodo">
  <p>Set your to-do due date</p>
  <p id="todo">{{todo.todo}}</p>
  <form>
  <input type="date" name="datepicker" v-model="todos.date">
    <button v-on:click.prevent="addDate"><router-link to="/add"> Submit</router-link></button>
  </form>
</div>
</div>
</template>

<script>
import moment from 'moment'
export default {

  data () {
    return {
      id:this.$route.params.id,
      todo:{

      },
      todos:{
        date:''
      }
    }
  },
  methods:{
    moment: function () {
      return moment();
    },
    addDate: function(){
      this.$http.patch('https://todo-app-c5de3.firebaseio.com/posts/' + this.id + '.json',this.todos).then(function(data){
        console.log(data)
        location.reload();

      })
    }

  },

  created(){
    this.$http.get('https://todo-app-c5de3.firebaseio.com/posts/' + this.id + '.json').then(function(data){
      return data.json();
    }).then(function(data){
      this.todo = data;
    })
  },
  filters: {
    moment: function (date) {
      return moment(date).format('M/ D/ YYYY');
    }
  }
}
</script>

<style scoped>
.label{
  border: 1px outset;
  border-color: #843ab8;

  background: #843ab8;
  position:relative;
  top:0px;
  box-shadow: 2px 2px 2px #888888;
  padding-bottom: 20px;
}
.label p{
  color:white;
  font-size: 22px;
  padding: 10px 0 0 55px;


}
.singletodo{
  border-style:solid;
  border-color:#843ab8;
  border-width:1px;
  box-shadow: 2px 2px 2px 2px #888888;
  width:50%;
  margin:0 auto;
  height:100px;
  margin-top:150px;
  background: #843ab8;
}
.singletodo p{
  padding:5px;
  color:white;
  font-weight: 800;
  font-size: 20px;

}
#todo{
  color:gold;
  display: inline;
}
.singletodo form{
  display: inline
}
</style>
