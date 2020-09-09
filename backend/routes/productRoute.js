import express from "express";
import Product from "../models/productModel";
import { isAuth, isAdmin } from "../util";

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

router.get("/:id", async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

router.post("/", isAuth, isAdmin, async (req, res) => {
  const product = new Product({
    name: req.body.name,
    image: req.body.image,
    publisher: req.body.publisher,
    condition: req.body.condition,
    price: req.body.price,
    description: req.body.description,
    category: req.body.category,
    countInStock: req.body.countInStock,
  });
  const newProduct = await product.save();
  if (newProduct) {
    return res
      .status(201)
      .send({ messge: "New Product Created", data: newProduct });
  }
  return res.status(500).send({ message: "Error in Creating Product" });
});

router.put("/:id", isAuth, isAdmin, async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (product) {
    product.name = req.body.name;
    product.image = req.body.image;
    product.publisher = req.body.publisher;
    product.condition = req.body.condition;
    product.price = req.body.price;
    product.description = req.body.description;
    product.category = req.body.category;
    product.countInStock = req.body.countInStock;
    const updatedProduct = await product.save();
    if (updatedProduct) {
      return res
        .status(200)
        .send({ messge: "Product Updated", data: updatedProduct });
    }
  }
  return res.status(500).send({ message: "Error in Updating Product" });
});

router.delete("/:id", isAuth, isAdmin, async (req, res) => {
  const deletedProduct = await Product.findById(req.params.id);
  if (deletedProduct) {
    await deletedProduct.remove();
    res.send({ message: "Product Deleted" });
  } else {
    res.send("Error in Deletion");
  }
});

export default router;
