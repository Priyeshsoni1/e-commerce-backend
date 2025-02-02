const { Cart } = require("../model/Cart");

exports.fetchCartByUser = async (req, res) => {
  const { id } = req.user;
  console.log(id, "doccartid");
  try {
    const doc = await Cart.find({ user: id })
      .populate("user")
      .populate("product");
    console.log(doc, "doccartid");
    res.status(200).json(doc);
  } catch (err) {
    console.log(err, "doccartid");
    res.status(400).json(err);
  }
};

exports.addToCart = async (req, res) => {
  const { id } = req.user;
  const cart = new Cart({ ...req.body, user: id });
  console.log(cart, "newCart");
  try {
    const doc = await cart.save();
    console.log(doc, "newCart");
    const result = await doc.populate("product");
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

exports.updateCart = async (req, res) => {
  const { id } = req.params;
  console.log("updateCart", id);
  try {
    const cart = await Cart.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log("updateCart", cart);
    const result = await cart.populate("product");
    console.log("updateCart", result);
    res.status(200).json(result);
  } catch (err) {
    console.log("updateCart", err);
    res.status(400).json(err);
  }
};

exports.deleteCart = async (req, res) => {
  const { id } = req.params;
  console.log(id, "deleteCart");
  try {
    const doc = await Cart.findByIdAndDelete(id);
    console.log(doc, "deleteCart");
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};
