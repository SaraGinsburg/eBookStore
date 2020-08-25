import express from "express";
import data from "./data";

const app = express();

// path of endpoint "/api/products"
// second parameter of get is a handler function
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

//  app.listen, means that the express will start running.
// first parameter is the port number
// second parameter is a callback, that will run when express successfully created this server

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
// node understands only ES5 version, in order for it to work for code written with ES6,
// some packages need to be installed.
// npm install @babel/cli @babel/core @babel/node @babel/preset-env nodemon --save-dev.
