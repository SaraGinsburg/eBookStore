import express from "express";
import data from "./data";
import dotenv from "dotenv";
import config from "./config";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoute from "./routes/userRoute";
import productRoute from "./routes/productRoute";

dotenv.config();
const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));

const app = express();
app.use(bodyParser.json());

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

// app.get("/api/products/:id", (req, res) => {
//   const productId = req.params.id;
//   const product = data.products.find((x) => x._id === productId);
//   if (product) res.send(product);
//   else res.status(404).send({ msg: "Product Not Found." });
// });

// path of endpoint "/api/products"
// second parameter of get is a handler function
// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });

//  app.listen, means that  express will start running.
// first parameter is the port number
// second parameter is a callback, that will run when express successfully created this server

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
// node understands only ES5 version, in order for it to work for code written with ES6,
// some packages need to be installed.
// npm install @babel/cli @babel/core @babel/node @babel/preset-env nodemon --save-dev.
