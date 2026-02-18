import Cart from "../models/Cart.js";

// add to cart 

export const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user.id;

    // Check if product already exists in cart
    const existingItem = await Cart.findOne({
      user: userId,
      product: productId
    });

    if (existingItem) {
      existingItem.quantity += quantity;
      await existingItem.save();
      return res.status(200).json(existingItem);
    }

    const cartItem = await Cart.create({
      user: userId,
      product: productId,
      quantity
    });

    res.status(201).json(cartItem);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// update cart items
export const updateCartItem = async (req, res) => {
  try {
    const { quantity } = req.body;
    const { productId } = req.params;

    const cartItem = await Cart.findOneAndUpdate(
      { user: req.user.id, product: productId },
      { quantity },
      { new: true }
    );

    if (!cartItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(cartItem);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// remove from cart
export const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;

    const deletedItem = await Cart.findOneAndDelete({
      user: req.user.id,
      product: productId
    });

    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json({ message: "Item removed" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
