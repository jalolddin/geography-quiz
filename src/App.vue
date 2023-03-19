<template>
  <div id="app">
    <Navbar />
    <Login v-if="login"/>
    <Register v-if="register" />
    <router-view/>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Login from './components/LoginModal.vue'
import Register from './components/Register.vue'
export default{
  components: {
    Navbar,
    Login,
    Register
  },
  computed:{
    login(){
      return this.$store.state.login
    },
    register(){
      return this.$store.state.register
    }
  }
}
</script>
<style lang="scss">
</style>
