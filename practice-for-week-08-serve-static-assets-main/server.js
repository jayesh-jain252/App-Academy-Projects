const http = require("http");
const fs = require("fs");

const html = fs.readFileSync("./index.html");

const server = http.createServer((req, res) => {
  // Your code here

  let url = req.url;
  let url_arr = url.split("/");
  console.log(url_arr);
  if (url_arr[1] === "static") {
    if (url_arr[2] === "css") {
      const css = fs.readFileSync("./assets/css/application.css");

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/css");
      return res.end(css);
    }
    if (url_arr[2] === "images") {
      const image = fs.readFileSync("./assets/images/dog.jpg");

      res.statusCode = 200;
      res.setHeader("Content-Type", "image/jpg");
      return res.end(image);
    }
  }

  const html = fs.readFileSync("./index.html");
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  res.end(html);
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
