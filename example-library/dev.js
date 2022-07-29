import  { createApp } from 'vue'
import { VJstree } from './src/index.js'
import App from './App.vue'

const app = createApp(App);
app.component('VJstree', VJstree)
app.mount("#app");