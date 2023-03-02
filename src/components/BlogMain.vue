<script setup>
  import BlogFeaturedPost from '../components/BlogFeaturedPost.vue'
  import BlogMultiplePosts from '../components/BlogMultiplePosts.vue'
  import BlogNavBar from '../components/BlogNavBar.vue'
  
  import json from '../assets/site_structure.json'
 
  import {ref} from 'vue'

  const allPosts = ref(json.posts)

  
  
</script>

<template>
  

  <BlogFeaturedPost />
  

  <div class="container">
    <div class="row g-5 mb-4">

      <BlogMultiplePosts :postData="allPosts" />

      <BlogNavBar :postData="allPosts" />
    </div>
  </div>

 
    


  

</template>
<style scoped></style>