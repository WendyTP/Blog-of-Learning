<script setup>
  import json from '../assets/site_structure.json'
 
  import {ref, computed} from 'vue'
  import {useRoute} from 'vue-router'

  const location = useRoute()

  const allPosts = ref(json.posts)  
  

  const postId = computed(() => location.params.id)

  const selectedPost = computed(() => {
    return allPosts.value.find((post) => parseInt(post.id) === parseInt(postId.value))
  })


</script>

<template>
  <h2> Hello posts {{location.params.id}}</h2>


  <div>
      <article v-if="selectedPost" class="blog-post">
      <h2 class="blog-post-title mb-1">{{selectedPost.title}}</h2>
      <p class="blog-post-meta">{{selectedPost.publishedDate}} by <a href="#">{{selectedPost.author}}</a></p>
      <img src=selectedPost.titleImage alt="image of first post" class="img-fluid">
      <p>image source is {{selectedPost.titleImage}} </p>
      <p>{{selectedPost.content}}</p>   
      <br/>
    </article>
  </div>
</template>