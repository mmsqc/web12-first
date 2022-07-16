import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//vue3
createApp(App).use(store).use(router).mount('#app')

//vue2
// new Vue({
//     el:"#app",
//     store,
//     router
// })
// .mount(App);
