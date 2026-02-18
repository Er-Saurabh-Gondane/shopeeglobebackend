const validateRegister = (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required"
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: "Password must be at least 6 characters"
    });
  }

  next();
};

// Validate Add to Cart
const validateCart = (req, res, next) => {
  const { productId, quantity } = req.body;

  if (!productId || !quantity) {
    return res.status(400).json({
      message: "Product ID and quantity are required"
    });
  }

  if (quantity <= 0) {
    return res.status(400).json({
      message: "Quantity must be greater than 0"
    });
  }

  next();
};

module.exports = { validateRegister, validateCart };
