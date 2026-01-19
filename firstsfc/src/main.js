import { createApp } from 'vue'
import App from './App.vue'

// Only keep the main App import. 
// We handle the PersonalProfile import inside App.vue or here.

const app = createApp(App)
app.mount('#app')