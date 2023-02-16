<script setup>
  import BlogFeaturedPost from '../components/BlogFeaturedPost.vue'
  import BlogMultiplePosts from '../components/BlogMultiplePosts.vue'
  import BlogNavBar from '../components/BlogNavBar.vue'
  import json from '../assets/site_structure.json'
 
  import {ref, onMounted} from 'vue'

  const count = ref(0)
  const allPosts = ref(json.posts)

  
  
</script>

<template>
  <BlogFeaturedPost />
 

  <div class="container">
    <div class="row g-5 mb-4">
      <BlogMultiplePosts :postData="allPosts" />
      
      <div class="navBar col-md-4 ">
        <BlogNavBar />
      </div>
    </div>
  </div>

  

  
  

</template>
<style scoped></style>