//配置router
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import Home from '@/views/Home'
export default new VueRouter({
    router: [
        {
            path: '/home',
            component:Home
        },
        {}
    ]
})