<script setup>
import BlogHeader from '../components/BlogHeader.vue'
import BlogFooter from '../components/BlogFooter.vue'
import BlogMain from '../components/BlogMain.vue'

function refreshBlogMain() {
  
  let allPosts = document.querySelector("div.allPosts");
  let singlePostDiv = document.querySelector("div.singlePost");
  if (singlePostDiv) {singlePostDiv.hidden = true};
  if (allPosts) {allPosts.hidden = false}
     
}
</script>

<template>
  <BlogHeader @homeclick="refreshBlogMain"/>

  <main>
   <BlogMain />
  </main>

  <BlogFooter />
</template>

<style scoped>
</style>