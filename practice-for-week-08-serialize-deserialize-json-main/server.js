const http = require("http");

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = "";
  req.on("data", (data) => {
    reqBody += "";
  });

  req.on("end", () => {
    // Parse the body of the request as JSON if Content-Type header is
    // application/json
    if (req.headers["content-type"] === "application/json") {
      reqBody = JSON.parse(JSON.stringify(reqBody));
      console.log("inside if statement");
      console.log(reqBody);
      console.log("still inside if statement");
    } else if (
      req.headers["content-type"] === "application/x-www-form-urlencoded"
    ) {
      // Parse the body of the request as x-www-form-urlencoded if Content-Type
      // header is x-www-form-urlencoded
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});

      // Log the body of the request to the terminal
      console.log(req.body);
    }

    const resBody = {
      Hello: "World!",
    };

    // Return the `resBody` object as JSON in the body of the response
    res.statusCode = 200;
    res.body = JSON.stringify(resBody);
    res.end(JSON.stringify(resBody));
  });
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
