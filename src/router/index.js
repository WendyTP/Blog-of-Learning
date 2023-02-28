import {createRouter, createWebHashHistory} from 'vue-router'

import Home from '@/views/Home.vue'
import CreateBlogPost from '@/views/CreateBlogPost.vue'
import LastPost from '@/views/LastPost.vue'

const routes = [
  {path: "/", name: "Home", component: Home},
  {path: '/newPost', name: 'CreateBlogPost', component: CreateBlogPost},
  {path: "/posts/6", name: 'LastPost', component: LastPost},
]


const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export default router;