const express = require("express");
const { fetchBrands, createBrand } = require("../controller/Brand");
const router = express.Router();
router.post("/", createBrand).get("/", fetchBrands);
exports.router = router;
