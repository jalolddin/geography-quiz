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
              <input class="form-control" type="email" required>
            </div>
            <div>
              <label for="email">Имя пользователя</label>
              <input class="form-control" type="text" required>
            </div>
            <div>
              <label for="email">Пароль</label>
              <input class="form-control" type="password" required>
            </div>
            <button type="submit">Войти</button>
          </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods:{
  registerClose(){
       this.$store.state.register = false
    }
}
  }
  </script>
  
  <style>
  
  </style>