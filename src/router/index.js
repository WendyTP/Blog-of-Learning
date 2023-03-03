import {createRouter, createWebHistory} from 'vue-router'

import Home from '@/views/Home.vue'
import CreateBlogPost from '@/views/CreateBlogPost.vue'
import NotFound from '@/views/NotFound.vue'



const routes = [
  {path: "/", name: "Home", component: Home},
  {path: '/newPost', name: 'CreateBlogPost', component: CreateBlogPost},
  {path: "/about", name: 'AboutMe', component: () => import('@/views/AboutMe.vue')},  // lazy loading route
  {path: "/posts/:id", name:"displayPost", component:() => import('@/views/displayPost.vue')}, // dynamic routing
  {path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound}
]


const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkActiveClass: 'header-active-link'
})

export default router;