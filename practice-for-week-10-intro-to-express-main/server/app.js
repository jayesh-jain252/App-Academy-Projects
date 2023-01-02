let express = require("express");

let app = express();

app.get("/status", (req, res) => {
  res.send("The server is alive!");
});
let port = 5000;

app.listen(port, () => console.log("server listening on port ", port));
