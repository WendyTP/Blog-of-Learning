import {createRouter, createWebHistory} from 'vue-router'

import Home from '@/views/Home.vue'
import CreateBlogPost from '@/views/CreateBlogPost.vue'
import NotFound from '@/views/NotFound.vue'

import postData from '@/assets/site_structure.json'
const allPosts = postData.posts;



const routes = [
  {path: "/", name: "Home", component: Home},
  {path: '/newPost', name: 'CreateBlogPost', component: CreateBlogPost},
  {path: "/about", name: 'AboutMe', component: () => import('@/views/AboutMe.vue')},  // lazy loading route
  {
    path: "/posts/:id", // dynamic routing
    name:"displayPost", 
    component:() => import('@/views/displayPost.vue'),
    beforeEnter(to, from){
      const exists = allPosts.find(
        post => parseInt(post.id) === parseInt(to.params.id) 
      )

      if(!exists) return {
        name: "NotFound",
        params: {pathMatch: to.path.split('/').slice(1)},
        query: to.query,
        hash: to.hash,
      }
    }
  }, 


  {path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound}
]


const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkActiveClass: 'header-active-link'
})

export default router;