import Vue from 'vue'
import Router from 'vue-router'
import Posts from '../views/Posts.vue'
import PostDetail from '../views/PostDetail.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Posts',
            component: Posts
        },
        {
            path: '/posts',
            redirect: { name: "Posts" }
        },
        {
            path: '/posts/:id',
            name: 'PostDetail',
            component: PostDetail
        },
        {
            path: '/*',
            name: 'NotFound',
            component: NotFound

        }
    ]
})