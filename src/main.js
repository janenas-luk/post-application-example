import Vue from 'vue';
import App from './App.vue';
import router from './router'
import authors from './services/authors'
import store from './store'

Vue.use(authors)

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
