
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from './store'

const app = createApp(App)
const store = createStore(); // we are calling the function inside the store of the index.js

app.use(router)
app.use(store) // then will use it inside the app

app.mount('#app')
