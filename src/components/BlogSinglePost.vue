<script setup>

  const props = defineProps({
    chosenPost: {
      type: Object,
      required: false
    }
  })
</script>

<template>
  <article class="blog-post">
    <h2 class="blog-post-title mb-1">{{chosenPost.title}}</h2>
    <p class="blog-post-meta">{{chosenPost.publishedDate}} by <a href="#">{{chosenPost.author}}</a></p>
    <img src="{{chosenPost.titleImage}}" alt="image of first post" class="img-fluid">
    <p>{{chosenPost.content}}</p>   
    <br/>
  </article>


</template>
<style scoped></style>