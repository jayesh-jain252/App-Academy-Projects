const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello");
  res.write(" ");
  res.write("World");
  res.write("!");
  res.end("!Hello Again!");
});

server.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
