<script setup>


import BlogMain from '../components/BlogMain.vue'


function refreshBlogMain() {
  
  let allPosts = document.querySelector("div.allPosts");
  let singlePostDiv = document.querySelector("div.singlePost");
  if (singlePostDiv) {singlePostDiv.hidden = true};
  if (allPosts) {allPosts.hidden = false}
     
}
</script>

<template>

   <BlogMain />

</template>

<style scoped>
</style>