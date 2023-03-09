const express = require("express");
const { getAllCars } = require("../controllers/product.controller");
const router = express.Router();

router.post("/post-car", getAllCars);

module.exports = router;
