// Require express
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./confiq/mongoose");

//require app
const app = express();

//Assign port Number
const port = 8000;

// using body parser to parse over the request body
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/product", require("./routers/product"));

// Server Create
app.listen(port, (err) => {
  //any Error print err message
  if (err) {
    console.log("err msg", err);
  } else {
    console.log("This Server is Running in Port", port);
  }
});
