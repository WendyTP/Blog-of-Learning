import {createRouter, createWebHashHistory} from 'vue-router'

import Home from '@/views/Home.vue'
import CreateBlogPost from '@/views/CreateBlogPost.vue'

const routes = [
  {path: "/", name: "Home", component: Home},
  {path: '/newPost', name: 'CreateBlogPost', component: CreateBlogPost}
]


const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export default router;