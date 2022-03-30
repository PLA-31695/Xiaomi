//配置router
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import Home from '@/views/Home'
import Register from '@/view/register'
import Login from '@/views/Login'
export default new VueRouter({
    router: [
        {
            path: '/home',
            component:Home
        },
        {
            path: '/register',
            component:Register
        },
        {
            path: '/login',
            component:Login
        }
    ],
    mode: {
        history
    }
})