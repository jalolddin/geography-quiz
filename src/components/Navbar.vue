<template>
  <div class="navbar">
    <div class="navbar__width">
        <router-link to="/">
        <h1><img src="../assets/images/earth.png" alt=""> <span>Get</span>Map</h1>
       </router-link>
        <div class="navbar__width__links">
        <h2>Викторины</h2>
        <h2>
        <router-link to="/create-quiz">
            Создать викторину
        </router-link>
        </h2>
        <h2>Рейтинг пользователей</h2>
    </div>
<div class="navbar__width__login">
    <h2 @click="registerOpen">Создать аккаунт</h2>
    <h2 @click="loginOpen">Вход</h2>
</div>
</div>
  </div>
</template>

<script>
export default {
data(){
    return {}
},

methods: {
    loginOpen(){
       this.$store.state.login = true
    },
    registerOpen(){
       this.$store.state.register = true
    }
}
}
</script>

<style>

</style>