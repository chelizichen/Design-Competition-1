import {createRouter,createWebHistory, RouteComponent, RouteParams} from 'vue-router'
import Home from '../components/Home/index.vue'
import Student from '../components/Student/index.vue'
import Mine from '../components/mine/index.vue'
import News from '../components/Home/components/NewsComponent.vue'
import SignIn from '../components/Student/components/singin1.vue'
import Vacate1 from '../components/Student/components/vacate1.vue'
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
        path:'/student',
        component:Student,
        children:[
            {
                path:'/student/signin',
                component:SignIn
            },
            {
                path:'/student/vacate1',
                component:Vacate1
            }
        ]
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