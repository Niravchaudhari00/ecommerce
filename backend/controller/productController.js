const productSchema = require("../model/Product");
const ErrorHandler = require("../utils/errorHandler");

// create product -> Admin
exports.createProduct = async (req, res) => {
     try {
          // add product
          const product = await productSchema.create(req.body);

          res.status(201).json({
               success: true,
               product,
          });

     } catch (error) {
          res.status(500).json({
               success: false,
               message: error.message,
          });
     }
};

// get all product
exports.getAllProduct = async (req, res, next) => {
     try {
          // get all product
          const product = await productSchema.find();

          // product is available or not
          if (!product) {
               return next(new ErrorHandler("Product Not Found", 404));
          }
          // send response
          res.status(200).json({
               success: true,
               product,
          });
     } catch (error) {
          res.status(404).json({
               success: false,
               message: error.message,
          });
     }
};

// Get Product Details
exports.getProductDetails = async (req, res) => {
     // get single product by id
     const product = await productSchema.findById(req.params.id);
     if (!product) {
          if (!product) {
               return next(new ErrorHandler("Product Not Found", 404));
          }
     }
     res.status(200).json({
          success: true,
          product,
     });
};

// update product -> Admin
exports.updateProduct = async (req, res, next) => {
     try {

          let product = await productSchema.findById(req.params.id);
          // product is available or not
          if (!product) {
               if (!product) {
                    return next(new ErrorHandler("Product Not Found", 404));
               }
          }

          // update product
          product = await productSchema.findByIdAndUpdate(req.params.id, req.body, {
               new: true,
               runValidators: true,
               useFindAndModify: false,
          });

          // send response
          res.status(200).json({
               success: true,
               product,
          });

     } catch (error) {
          res.status(500).json({
               success: false,
               message: error.message,
          });
     }
};

// delete product -> Admin
exports.deleteProduct = async (req, res, next) => {
     try {
          const product = await productSchema.findById(req.params.id);

          if (!product) {
               if (!product) {
                    return next(new ErrorHandler("Product Not Found", 404));
               }
          }
          await product.deleteOne();

          res.status(200).json({
               success: true,
               message: "Product Deleted Successfully",
          });
     } catch (error) {
          res.status(500).json({
               success: false,
               message: error.message,
          });
     }
};
