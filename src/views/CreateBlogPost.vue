<script setup>
  import {ref} from 'vue'

  const contentText = ref('');
  const exampleDate = ref("2020-12-25");
  const authorText = ref('');
  const titleText = ref('');
</script>
<template>
  <main>
    <div class="container">
      <div class="form-post w-100 m-auto">
        <form class="form-post" action="" method="">
          <h1 class="h3 mb-3 fw-normal">Create New Post</h1>

          <dl class="form-floating">
            <dt><label for="author">Author Name</label></dt>
            <dd><input v-model="authorText" class="form-control" name="author" id="author" placeholder="John Doe" required ></dd>
          </dl>

          <dl class="form-floating">
            <dt><label for="publishedDate">Post Date</label></dt>
            <dd><input v-model="exampleDate" type="date" class="form-control" name="publishedDate" id="publishedDate"></dd>
          </dl>

          <dl class="form-floating">
            <dt><label for="title">Title</label></dt>
            <dd><input v-model="titleText" class="form-control" name="title" id="title" placeholder="Title of post" required></dd>
            
            
          </dl>
          <dl class="form-floating ">
            <dt><label for="content">Content</label></dt>
            <dd><textarea  v-model="contentText" class="form-control" name="content" id="content" rows="10" placeholder="Once upon a time..." required></textarea></dd>
          </dl>


          <input class="w-50 btn btn-lg btn-primary " type="submit" value="submit">
          <button class="w-50 btn btn-lg btn-secondary ">Cancel</button>
          
        </form>
      </div>

      <div class="content-output">
        <span>Multiline content is:</span>
        <p>The date selected is: {{exampleDate}} {{(typeof(exampleDate))}}</p>
        <p style="white-space: pre-line;">{{contentText}}</p>
      </div>
    </div>
  </main>
</template>
<style scoped>
  main {
  height: 100%;
}

  main {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #0dcaf0;
}

  .form-post {
    max-width: 600px;
    padding: 15px;
  }

  .form-post .form-floating:focus-within {
    z-index: 2;
  }



  .form-floating {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .content-output {
    overflow: auto;
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 20px;
}






</style>