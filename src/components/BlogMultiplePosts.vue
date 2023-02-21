<script setup>
  import BlogSinglePost from '../components/BlogSinglePost.vue'
  import {ref} from 'vue'

  defineProps({
    postData: {
      type: Array,
      required: true
    }
  })

  const displayMultiplePosts = ref(true);
  const chosenPostToDisplay = ref(false);

  function hideMultiplePosts(singlePost) {
    displayMultiplePosts.value = false;
    let postsContainer = document.querySelector("div.postsContainer");
    postsContainer.hidden = true;
    chosenPostToDisplay.value = singlePost;
  }

</script>
<template>
  <div class="postsContainer col-md-8">
    <article class="blog-post">
      <h2 class="blog-post-title mb-1">Example blog post</h2>
      <p class="blog-post-meta">December 23, 2020 by <a href="#">Jacob</a></p>
      <img src="https://via.placeholder.com/800x300.jpg" alt="image of first post" class="img-fluid">

      <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
      <blockquote>
        <p>Longer quote goes here, maybe with some <strong>emphasized text</strong> in the middle of it.</p>
      </blockquote>
      <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
      <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
    </article>

    <article class="blog-post" v-for="post in postData" :key="post.id">
      <h2 class="blog-post-title mb-1">{{post.title}}</h2>
      <p class="blog-post-meta">{{post.publishedDate}} by <a href="#">{{post.author}}</a></p>
      <img src="{{post.titleImage}}" alt="image of first post" class="img-fluid">

      <p class="truncated">{{post.content}}</p>
      <p class=" mb-0">
      <a @click.prevent="hideMultiplePosts(post)" href="#" class="fw-bold">Continue reading...</a>
      </p>
      <br/>
    </article>

    <nav class="blog-pagination" aria-label="Pagination">
      <a class="btn btn-outline-primary rounded-pill" href="#">Older</a>
      <a class="btn btn-outline-secondary rounded-pill disabled">Newer</a>
    </nav>
  </div>

  <template v-if="Object.keys(chosenPostToDisplay).length !== 0">
    <div class="col-md-8">
  
      <BlogSinglePost :chosenPost="chosenPostToDisplay" />
    </div>
  </template>

</template>
<style scoped>
  .truncated {
    -webkit-box-orient: vertical;
    display: block;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
  }

</style>