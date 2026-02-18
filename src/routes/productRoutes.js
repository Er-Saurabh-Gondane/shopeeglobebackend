const express = require("express");
const {
  getProducts,
  getProductById,
  createProduct
} = require("../controllers/productController.js");

const router = express.Router();
// CREATE product
router.post("/", createProduct);
router.get("/", getProducts);        // GET /products
router.get("/:id", getProductById);  // GET /products/:id

module.exports = router;
