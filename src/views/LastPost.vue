<script setup>

  import json from '../assets/site_structure.json'
 
  import {ref} from 'vue'

  const lastPost = ref(json.posts[6])
</script>

<template>
  <article class="blog-post">
    <h2 class="blog-post-title mb-1">{{lastPost.title}}</h2>
    <p class="blog-post-meta">{{lastPost.publishedDate}} by <a href="#">{{lastPost.author}}</a></p>
    <img src="{{lastPost.titleImage}}" alt="image of first post" class="img-fluid">
    <p>{{lastPost.content}}</p>   
    <br/>
  </article>


</template>
<style scoped></style>