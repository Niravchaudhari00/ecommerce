const express = require("express");
const router = express.Router();
const { createProduct, getAllProduct, updateProduct, deleteProduct, getProductDetails } = require("../controller/productController");

// Products Routes
router.get("/product", getAllProduct)
router.post('/product/new', createProduct);
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails);



module.exports = router

