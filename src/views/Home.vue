<script setup>
import BlogHeader from '../components/BlogHeader.vue'
import BlogFooter from '../components/BlogFooter.vue'
import BlogMain from '../components/BlogMain.vue'
import CreateBlogPost from './CreateBlogPost.vue'

function refreshBlogMain() {
  
  let allPosts = document.querySelector("div.allPosts");
  let singlePostDiv = document.querySelector("div.singlePost");
  if (singlePostDiv) {singlePostDiv.hidden = true};
  if (allPosts) {allPosts.hidden = false}
     
}
</script>

<template>
  <BlogHeader @homeclick="refreshBlogMain"/>

  
   <BlogMain />
   <!--CreateBlogPost /-->
  

  <BlogFooter />
</template>

<style scoped>
</style>