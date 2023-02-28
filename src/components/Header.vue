<script setup>
  import {computed, ref} from 'vue'
  const emit = defineEmits(['submitHomeClick'])

  function homeclick() {
    emit("submitHomeClick")
  }
</script>

<template>
    <header class="px-3 py-2 text-bg-dark sticky-top">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="#" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
              <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
              <span class="fs-4">Head Space</span>
            </a>
            <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li class="nav-item">
                <router-link to="/"  @click="$emit('homeclick')" class="nav-link active" aria-current="page">Home</router-link>
              </li>
              <li class="nav-item"><a href="#" class="nav-link text-white">About me</a></li>
              <li class="nav-item">
                <router-link to="/newPost" class="nav-link text-white">Add Blog</router-link>
              </li>
              <li class="nav-item"><a href="#" class="nav-link text-white">Projects</a></li>
              <li class="nav-item"><a href="#" class="nav-link text-white">Contact</a></li>
            </ul>
          </div>
        </div>
    </header>
</template>

<style scoped>
  .bi {
    vertical-align: -.125em;
    fill: currentColor;
  }
  .text-small {
  font-size: 18px;
}
</style>