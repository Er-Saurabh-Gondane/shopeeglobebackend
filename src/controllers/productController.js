const Product = require("../models/Product.js");

// POST /products
exports.createProduct = async (req, res) => {
  try {
    const { name, price, description, imageUrl, stock } = req.body;

    const product = new Product({
      name,
      price,
      description,
      imageUrl,
      stock
    });

    const savedProduct = await product.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// GET /products

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// GET /products/:id

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
