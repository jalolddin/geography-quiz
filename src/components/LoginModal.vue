<template>
  <div class="login">
    <div class="login__modal">
      <!-- Header -->
      <div class="header">
        <div class="text">
            <h2>Войти</h2>
            <p>Создайте учетную запись, если у вас ее нет <span> Регистрация </span></p>
        </div>
          <svg @click="loginClose" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18" stroke="#010E38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 6L18 18" stroke="#010E38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </div>
        <!-- Inputs -->
        <form class="inputs">
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
  loginClose(){
       this.$store.state.login = false
    }
}
}
</script>

<style>

</style>