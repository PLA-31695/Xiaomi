//配置router
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import Home from '@/views/Home/home'
import Register from '@/views/Register/register'
import Login from '@/views/Login/login'
export default new VueRouter({
    routes: [
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