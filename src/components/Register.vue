<template>
    <div class="register">
      <div class="register__modal">
        <!-- Header -->
        <div class="header">
          <div class="text">
              <h2>Создать аккаунт</h2>
              <p>Если вы ранее регистрировались<span> Войти </span></p>
          </div>
            <svg @click="registerClose" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18" stroke="#010E38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 6L18 18" stroke="#010E38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </div>
          <!-- Inputs -->
          <form class="inputs">
            <div>
              <label for="email">Электронная почта</label>
              <input v-model="email" class="form-control" type="email" required>
            </div>
            <div>
              <label for="email">Имя пользователя</label>
              <input v-model="username" class="form-control" type="text" required>
            </div>
            <div>
              <label for="email">Пароль</label>
              <input v-model="password" class="form-control" type="password" required>
            </div>
            <button @click.prevent="sendInfo()">Создать аккаунт</button>
          </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    data(){
      return {
        verify: null,
        username: null,
        email: null,
        password: null
      }
    },
    methods:{
  registerClose(){
       this.$store.state.register = false
    },
    sendInfo(){
  axios.post("http://localhost:8080/api/authorization/register",
  {
  username: this.username,
  password: this.password,
  email: this.email
}).then((res) => {
  this.verify = res
  console.log(res.data.test_verify)
  axios.get(res.data.test_verify).then((res) => {
  console.log(res)
})
})
}
}
  }
  </script>
  
  <style>
  
  </style>