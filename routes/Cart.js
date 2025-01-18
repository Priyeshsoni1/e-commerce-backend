const express = require("express");
const {
  fetchCartByUser,
  addToCart,
  deleteCart,
  updateCart,
} = require("../controller/cart");

const router = express.Router();
console.log("auth");
router
  .get("/", fetchCartByUser)
  .post("/", addToCart)
  .delete("/:id", deleteCart)
  .patch(":/id", updateCart);

exports.router = router;
