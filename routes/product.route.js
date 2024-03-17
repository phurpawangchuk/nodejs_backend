const express = require("express");
const Product = require("../model/product.model");
const { getProducts, getProduct, updateProduct, deleteProduct, createProducts } = require("../controller/product.controller");
const router = express.Router();

router.post('/', createProducts);

router.get('/', getProducts);

router.get('/:id', getProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

const productRoute = router;
module.exports = productRoute;
