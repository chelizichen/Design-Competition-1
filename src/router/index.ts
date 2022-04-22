import {createRouter,createWebHistory, RouteComponent, RouteParams, RouteRecordRaw, RouterOptions} from 'vue-router'
import Home from '../components/Home/index.vue'
import Student from '../components/Student/index.vue'
import Mine from '../components/mine/index.vue'
import Login from '../Login/login.vue'
import News from '../components/Home/components/NewsComponent.vue'
import SignIn1 from '../components/Student/components/singin1.vue'
import SignIn2 from '../components/Student/components/singin2.vue'
import SignIn3 from '../components/Student/components/singin3.vue'
const routes:RouteRecordRaw[] = [
    {
        path:'/',
        redirect:"/home"
    },
    {
        path:'/login',
        component:Login,
    },
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
                path:'/student/signin1',
                component:SignIn1,
            },
            {
                path:'/student/signin2',
                component:SignIn2
            },
            {
                path:'/student/signin3',
                component:SignIn3
            },
            {
                path:'/student/vacate1',
                component:()=>import ('../components/Student/components/vacate1.vue')
            },
            {
                path:'/student/vacate2',
                component:()=>import ("../components/Student/components/vacate2.vue")
            },
            {
                path:'/student/course1',
                component:()=>import ("../components/Student/components/course1.vue")
            },
            {
                path:'/student/course2',
                component:()=>import ("../components/Student/components/course2.vue")
            },
            {
                path:'/student/course3',
                component:()=>import ("../components/Student/components/course3.vue")
            },
            {
                path:'/student/book1',
                component:()=>import ("../components/Student/components/book1.vue")
            },
            {
                path:'/student/book2',
                component:()=>import ("../components/Student/components/book2.vue")
            },
            {
                path:'/student/book3',
                component:()=>import ("../components/Student/components/book3.vue")
            },
            {
                path:'/student/news1',
                component:()=>import ("../components/Student/components/news1.vue")
            },
            {
                path:'/student/news2',
                component:()=>import ("../components/Student/components/news2.vue")
            },

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
router.beforeEach((to,from,next)=>{
    // 到哪里去
    console.log('到哪里去',to);
    // 从哪里来
    console.log('从哪里来',from);
    next()
})
export default router