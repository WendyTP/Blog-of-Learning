<script setup>
  import {ref} from 'vue'
  import {useRouter} from 'vue-router'
  import json from '../assets/site_structure.json'

  const router = useRouter()
  const allPosts = ref(json.posts)

  const formData = ref({
    title: "",
    author: "",
    publishedDate: "2020-12-25",
    content: "",
  })

  const contentText = ref('');
  const exampleDate = ref("2020-12-25");
  const authorText = ref('');
  const titleText = ref('');

  function resetForm() {
    document.querySelector('form').reset();
  }

  function cancelForm() {
    // clear form input
    // redirect to home page
    
    if (window.confirm("Do you want to clear the post and go back to Home page?")) {
      resetForm();
      router.push({name: "Home"})
    }
  }

  function assignPostId() {
    let nextAvailableId = String(allPosts.value.length + 1);
    formData.value["id"] = nextAvailableId;
  
  }
 

  function submitNewPost() {
  
    // validate user data
    // assign id num
    // trasnform data to json
    // send to local json file (add to local json file)
    // clear form input
    
    // redirect to home page
    // alert msg confirming form submit success
    assignPostId()
    let jsonInputs = JSON.stringify(formData.value)
   
    alert(formData.value.id)
    

  }

</script>
<template>
    <div class="container">
      <div class="form-post w-100 m-auto">
        <form @submit.prevent="submitNewPost" class="form-post" action="" method="">
          <h1 class="h3 mb-3 fw-normal">Create New Post</h1>

          <dl class="form-floating">
            <dt><label for="author">Author Name</label></dt>
            <dd><input v-model="formData.author" class="form-control" name="author" id="author" placeholder="John Doe" required ></dd>
          </dl>

          <dl class="form-floating">
            <dt><label for="publishedDate">Post Date</label></dt>
            <dd><input v-model="formData.publishedDate" type="date" class="form-control" name="publishedDate" id="publishedDate"></dd>
          </dl>

          <dl class="form-floating">
            <dt><label for="title">Title</label></dt>
            <dd><input v-model="formData.title" class="form-control" name="title" id="title" placeholder="Title of post" required></dd>
            
            
          </dl>
          <dl class="form-floating ">
            <dt><label for="content">Content</label></dt>
            <dd><textarea  v-model="formData.content" class="form-control" name="content" id="content" rows="10" placeholder="Once upon a time..." required></textarea></dd>
          </dl>


          <input class="w-50 btn btn-lg btn-primary " type="submit" value="submit">
          <button @click.prevent="cancelForm" class="cancelbtn w-50 btn btn-lg btn-secondary ">Cancel</button>
          
        </form>
      </div>

      <div class="content-output">
        <span>Multiline content is:</span>
        <p>The date selected is: {{formData.publishedDate}} {{(typeof(formData.publishedDate))}}</p>
        <p style="white-space: pre-line;">{{formData.content}}</p>
      </div>
    </div>
</template>
<style scoped>

  main {
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  
  }
  .container {
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