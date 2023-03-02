import {createRouter, createWebHashHistory} from 'vue-router'

import Home from '@/views/Home.vue'
import CreateBlogPost from '@/views/CreateBlogPost.vue'


const routes = [
  {path: "/", name: "Home", component: Home},
  {path: '/newPost', name: 'CreateBlogPost', component: CreateBlogPost},
  {path: "/posts/7", name: 'LastPost', component: () => import('@/views/LastPost.vue')},  // lazy loading route
  {path: "/posts/:id", name:"displayPost", component:() => import('@/views/displayPost.vue')} // dynamic routing
]


const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  linkActiveClass: 'header-active-link'
})

export default router;