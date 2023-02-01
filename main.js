let fs = require("fs");
let showdown = require('showdown')

fs.readFile("./blog_posts/example.md", (err, data) => {
  let converter = new showdown.Converter();
  let text = data.toString();
  let html = converter.makeHtml(text);
  console.log(html.toString());
})