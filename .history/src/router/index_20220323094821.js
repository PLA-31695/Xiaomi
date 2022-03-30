//配置router
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import Home from '@/views/Home/home'
import service from '@/views/Service/service'
import Login from '@/components/Login/login'

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component:Home
        },
        {
            path: '/service',
            component: service,
            children: [
                {
                    path: '/service',
                    redirect:'/service/login'
                },
                {
                    path: 'login',
                    component:Login
                }
            ]
        }
    ],
    mode:'history'
    
})