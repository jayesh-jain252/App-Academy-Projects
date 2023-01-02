const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here
const http = require("http");
server = http.createServer((req, res) => {
  // your code for assembling the request body string...
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  req.on("end", () => {
    // your code for parsing the request body string into an object...
    let dataObj = parseBody(reqBody);
    req.body = dataObj;
    sendFormPage(req, res); // needs to be called even if the request doesn't have a body
  });
});

let port = 5000;
server.listen(port, () =>
  console.log("Successfully started the server on port", port)
);
/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
