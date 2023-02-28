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
    <h2 class="blog-post-title mb-1">{{props.chosenPost.title}}</h2>
    <p class="blog-post-meta">{{props.chosenPost.publishedDate}} by <a href="#">{{props.chosenPost.author}}</a></p>
    <img src="{{props.chosenPost.titleImage}}" alt="image of first post" class="img-fluid">
    <p>{{props.chosenPost.content}}</p>   
    <br/>
  </article>


</template>
<style scoped></style>