//配置router
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import Home from '@/views/Home/home'

import Login from '@/components/Login/login'

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component:Home
        },
        {
            path: '/service',
            component: Login,
            children: [
                {
                    path: '/login',
                    component
                }
            ]
        }
    ],
    mode:'history'
    
})