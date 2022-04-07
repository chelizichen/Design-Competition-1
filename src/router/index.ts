import {createRouter,createWebHistory, RouteComponent, RouteParams} from 'vue-router'
import Home from '../components/Home/index.vue'
import Vacate from '../components/vacate/index.vue'
import Mine from '../components/mine/index.vue'
import News from '../components/Home/components/NewsComponent.vue'
const routes= [
    {
        path:'/home',
        component:Home,
    },
    {
        path:'/news/:id',
        component:News
    },
    {
        path:'/vacate',
        component:Vacate
    },
    {
        path:'/mine',
        component:Mine
    }
]

const router = createRouter({
    routes,
    history:createWebHistory()
    // history:createWebHistory(process.env.BASE_URL),
})
export default router