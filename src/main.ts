import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import element from 'element-plus'
import 'element-plus/dist/index.css' 
import '@element-plus/icons-vue'  
createApp(App).use(router).use(element).mount('#app')
