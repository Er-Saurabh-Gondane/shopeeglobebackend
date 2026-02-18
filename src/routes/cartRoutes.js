const express = require("express");
const {
  addToCart,
  updateCartItem,
  removeFromCart
} = require("../controllers/cartController");

const { validateCart } = require("../middleware/validationMiddleware.js");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

// POST /cart/addtocart
router.post("/addtocart", authMiddleware, validateCart, addToCart);

// PUT /cart/updatecart/:productId
router.put("/updatecart/:productId", authMiddleware, validateCart, updateCartItem);

// DELETE /cart/removecart/:productId
router.delete("/removecart/:productId", authMiddleware, removeFromCart);

module.exports = router;
