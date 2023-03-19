import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/footer.scss'
import './assets/styles/navbar.scss'
import './assets/styles/main.scss'
import './assets/styles/login.scss'
import './assets/styles/create-quiz.scss'
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')