


// To read file from local folder and to convert the text from markdown to html
/*
fs.readFile("./blog_posts/example.md", (err, data) => {
  let converter = new showdown.Converter();
  let text = data.toString();
  let html = converter.makeHtml(text);
  //console.log(html.toString());
  console.log(html);
})
*/
// To read json file and read the first article, then convert it from markdown to html
/*
let fs = require("fs");
let showdown = require('showdown')

fs.readFile("./site_structure.json", (err, obj) => {
  let jsonText = JSON.parse(obj);
  let contentURL = jsonText['posts'][0]['content'];
  //console.log(contentURL)
  fs.readFile(contentURL, (err, data) => {
    let converter = new showdown.Converter();
    let text = data.toString();
    let html = converter.makeHtml(text);
    //console.log(html.toString());
    console.log(html);
  })
})
*/

let jsonObj = {
  "posts": [
    {
      "title": "example",
      "titleImage": "https://da77jsbdz4r05.cloudfront.net/images/ls170/tls-authentication-chain-of-trust.png",
      "author": "John Doe",
      "publishedDate": "2021-12-23",
      "content": "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },

    {
      "title": "TLS Authentication",
      "titleImage": "https://da77jsbdz4r05.cloudfront.net/images/ls170/tls-authentication-chain-of-trust.png",
      "author": "John Doe",
      "publishedDate": "2021-12-23",
      "content": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    },

    {
      "title": "TLS Encryption",
      "titleImage": "https://da77jsbdz4r05.cloudfront.net/images/ls170/tls-encryption-symmetric.png",
      "author": "Jane Adams",
      "publishedDate": "2022-02-13",
      "content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
  ]
}


document.addEventListener('DOMContentLoaded', event => {
  let templates = {};
  let blogsData = jsonObj['posts'];
  document.querySelectorAll("script[data-type='partial']").forEach(partial => {
    Handlebars.registerPartial(partial.id, partial.innerHTML);
  });

  document.querySelectorAll("script[type='text/x-handlebars']").forEach(temp => {
    templates[temp.id] = Handlebars.compile(temp.innerHTML);
  });

  function renderAllPosts() {
    let postsDiv = document.querySelector('.postsContainer');
    let postsHtml = templates["blogPostsTemplate"]({posts: blogsData});
    postsDiv.insertAdjacentHTML('beforeend', postsHtml);

  }

  renderAllPosts()
})

