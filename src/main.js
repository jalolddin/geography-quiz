import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/footer.scss'
import './assets/styles/navbar.scss'
import './assets/styles/main.scss'
import './assets/styles/login.scss'
import './assets/styles/create-quiz.scss'
// import VueToast from 'vue-toast-notification';
// // Import one of the available themes
// //import 'vue-toast-notification/dist/theme-default.css';
// import 'vue-toast-notification/dist/theme-sugar.css';
Vue.config.productionTip = false
    // Vue.use(VueToast);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')