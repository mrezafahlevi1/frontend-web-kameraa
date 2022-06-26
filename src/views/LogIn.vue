<template>
  <div class = "Login">
    <img src="../assets/image/loginimg.png">
      <h1>Login</h1>
    <input type="username" v-model="username" placeholder="Enter Username"/>
    <input type="password" v-model="password" placeholder="Enter Password"/>
    <button v-on:click="login">Login</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'LogIn',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login() {
      axios.post('http://localhost/rentalkamera/login', {
        username: this.username,
        password: this.password,
      })
      .then(response => {
        if (response.data.status === 'success') {
          this.$router.push('/HomeView');
        } else {
          alert('Login Failed');
        }
      })
      .catch(error => {
        console.log(error);
      });
    },
  },
};
</script>


<style>
h1 {
  text-align: center;
}
.Login img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  width: 20%;
}
.Login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid #5b5f5c;
}
.Login button {
  width: 200px;
  height: 40px;
  background: skyblue;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  cursor: pointer;
  border: 1px solid #5b5f5c;
}
</style>
