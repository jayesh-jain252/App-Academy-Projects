const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("GET / This is the root URL");
});

// Custom error handler.
app.use((req, res) => {
  let err = new Error("Sorry, the requested resource couldn't be found");
  err.status = 404;
  throw err;
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  const data = {
    message: err.message,
    statusCode: err.status,
  };
  return res.json(data);
});

const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
