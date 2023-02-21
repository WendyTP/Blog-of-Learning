<script setup>
  import {computed, ref} from 'vue'

  const props = defineProps({
    postData: {
      type: Array,
      required: false
    }
  })

  const maxPostsDispalyAmt = ref(3);
  
  const recentPostsSelection = computed(() => {
    let filteredposts = props.postData .slice().reverse().splice(0, maxPostsDispalyAmt.value);
    return filteredposts;
  })

</script>

<template>
   
  <div class="position-sticky" style="top: 2rem;">
    <div class="d-flex">
      <form action="#" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
          </button>
      </form>
    </div>

    <div class="p-4 mb-3 bg-light rounded">
      <h4 class="fst-italic">About</h4>
      <p class="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
    </div>

    <div class="p-4 mb-3 bg-light rounded">
      <h4 class="fst-italic">Recent Posts</h4>
      <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
        <img src="https://via.placeholder.com/800x300.jpg" alt="twbs" width="90" height="70" class="rounded-circle flex-shrink-0">
        <div class="d-flex gap-2 w-100 justify-content-between">
          <div>
            <h6 class="mb-0">List group item heading</h6>
            <p class="mb-0 opacity-75">December 20, 2020</p>
          </div>                     
        </div>
      </a>
      <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
        <img src="https://via.placeholder.com/800x300.jpg" alt="twbs" width="90" height="70" class="rounded-circle flex-shrink-0">
        <div class="d-flex gap-2 w-100 justify-content-between">
          <div>
            <h6 class="mb-0">Third heading</h6>
            <p class="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
          </div>
        </div>
      </a>
      <div v-if="props.postData.length > 0">
        <template v-for="post in recentPostsSelection" :key="post.id">
          <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
            <img src="https://via.placeholder.com/800x300.jpg" alt="twbs" width="90" height="70" class="rounded-circle flex-shrink-0">
            <div class="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 class="mb-0">{{post.title}}</h6>
                <p class="mb-0 opacity-75">{{post.publishedDate}}</p>
              </div>
            </div>
          </a>
        </template>
      </div>

      


    </div>

    <div class="p-4">
      <h4 class="fst-italic">Archives</h4>
      <ol class="list-unstyled mb-0">
        <li><a href="#">March 2021</a></li>
        <li><a href="#">February 2021</a></li>
        <li><a href="#">January 2021</a></li>
        <li><a href="#">December 2020</a></li>
        <li><a href="#">November 2020</a></li>
        <li><a href="#">October 2020</a></li>
        <li><a href="#">September 2020</a></li>
        <li><a href="#">August 2020</a></li>
        <li><a href="#">July 2020</a></li>
        <li><a href="#">June 2020</a></li>
        <li><a href="#">May 2020</a></li>
        <li><a href="#">April 2020</a></li>
      </ol>
    </div>

    <div class="p-4">
      <h4 class="fst-italic">Elsewhere</h4>
      <ol class="list-unstyled">
        <li><a href="#">GitHub</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Facebook</a></li>
      </ol>
    </div>
  </div>


</template>
<style scoped>
  ul {
    list-style-type: none;
  }
</style>