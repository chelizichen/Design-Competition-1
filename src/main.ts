import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import element from 'element-plus'
import 'element-plus/dist/index.css' 
import * as ElIcons from '@element-plus/icons-vue'  
const app = createApp(App)

for(const iconName in ElIcons)
{
    if(Reflect.has(ElIcons,iconName))
    {
        const item = ElIcons[iconName]
        app.component(iconName,item)
    }
}

app.use(router).use(element).mount('#app')
