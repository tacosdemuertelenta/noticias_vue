import Vue from 'vue'
import Router from 'vue-router'







Vue.use(Router)



const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,

    routes: [

        {
            path: '*',
            redirect: '/'

        },
        {
            path: '/',
            name: 'news',
            component: () =>
                import ('../views/news.vue')

        },
        
    ]
})


export default router;