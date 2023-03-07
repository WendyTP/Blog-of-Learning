<script setup>

</script>

<template>
    <header class="px-3 py-2 text-bg-dark sticky-top">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <router-link to="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
              <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
              <span class="fs-4">Head Space</span>
            </router-link>

            <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li class="nav-item">
                <router-link to="/" class="nav-link" aria-current="page">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link ">About me</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/newPost" class="nav-link ">Add Post</router-link>
              </li>
              <li class="nav-item"><a href="#" class="nav-link ">Projects</a></li>
              <li class="nav-item"><a href="#" class="nav-link ">Contact</a></li>
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
  .nav-link {
  font-size: 18px;
  color: white;
}

  .nav-item .header-active-link {
    color: #f3e121bd;
    font-weight: bold;
    
  }

</style>