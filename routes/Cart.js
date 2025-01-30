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
  .post("/", addToCart)
  .get("/", fetchCartByUser)

  .delete("/:id", deleteCart)
  .patch(":/id", updateCart);

exports.router = router;
