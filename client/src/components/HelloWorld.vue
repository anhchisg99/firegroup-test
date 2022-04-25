<template>
  <div class="hello">
    <!-- <h1>{{data1}}</h1> -->
    <h1>{{status}}</h1>
    <form action="/action_page.php">
  <label for="fname">First name:</label><br>

  <input type="text" id="fname" v-model="fname" placeholder="entering ...">

  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" v-model="lname" placeholder="entering ..." >

  <label for="email">Email </label><br>
    <input type="text" id="email" v-model="email" placeholder="entering ...">

  <label for="phone">Phone </label><br>
   <input type="text" id="phone" v-model="phone" placeholder="entering ..." >

  <!-- <input type="submit" @click="btnSend" value="Submit"> -->
  
</form> 
<button id="btnSubmit" @click="btnSubmit">Submit</button>
<button id="btnClear" @click="btnClear">Clear </button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      fname: '',
      lname:'',
      email:'',
      phone:'',
      status:''
    }
  },
  methods:{
    btnClick(){
      axios.get("http://localhost:3000/api/user/conga")
      .then((res)=>{this.status = res.data.status})
    },
    btnClear(){
      this.fname = ''
      this.lname = ''
      this.email = ''
      this.phone = ''
      this.status = ''
    },

    btnSubmit(){
    
      var data = {
       lastName: this.lname,
        firstName: this.fname,
        email:this.email,
        phone:this.phone
      }

      console.log(data)
      axios.post("http://localhost:3000/api/user/create",data)
      .then(res=>{
          this.status= res.data.status
      })
      .catch((err)=>{console.log(err)})
      
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #555;
  outline: none;
}
#btnSubmit,#btnClear {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 20px;
}
</style>
