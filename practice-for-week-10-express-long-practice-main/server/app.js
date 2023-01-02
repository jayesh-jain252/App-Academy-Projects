require("dotenv").config();
const express = require("express");
require("express-async-errors");
const app = express();

app.use(express.json());

// For testing purposes, GET /
app.use("/static", express.static("assets"));

// Logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  res.on("finish", () => {
    console.log(res.statusCode);
  });
  // console.log(process.env.SECRET);
  next();
});

app.get("/", (req, res) => {
  res.json(
    "Express server running. No content provided at root level. Please use another route."
  );
});

// For testing express.json middleware
app.post("/test-json", (req, res, next) => {
  // send the body as JSON with a Content-Type header of "application/json"
  // finishes the response, res.end()
  res.json(req.body);
  next();
});

// For testing express-async-errors
app.get("/test-error", async (req, res) => {
  throw new Error("Hello World!");
});

// dogs Router
const { router } = require("./routes/dogs");
const { validateDogId } = require("./routes/dogs");
app.use("/dogs", router);

const dogFoodRouter = require("./routes/dog-foods");
app.use("/dogs/:dogId", validateDogId);
app.use("/dogs", dogFoodRouter);

app.use((req, res, next) => {
  let err = new Error("Sorry, the requested resource couldn't be found");
  err.statusCode = 404;
  next(err);
});

app.use((err, req, res, next) => {
  const errCode = err.statusCode || 500;
  console.log("message", err.message, "statusCode", errCode);
  next(err);
});

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(err.statusCode || 500);
  const errCode = err.statusCode || 500;
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV !== "production") {
    res.json({
      message: err.message || "Something went wrong",
      statusCode: errCode,
      stack: err.stack,
    });
  } else {
    res.json({
      message: err.message || "Something went wrong",
      statusCode: errCode,
    });
  }
});

const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
