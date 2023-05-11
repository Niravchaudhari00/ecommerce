const mongoos = require("mongoose");

const productSchema = new mongoos.Schema({
     name: {
          type: String,
          required: [true, "Please enter product name"],
          trime: true

     },
     description: {
          required: [true, "Please enter product description"],
          type: String,
     },
     price: {
          required: [true, "Please enter product price"],
          type: Number,
          maxLength: [8, "price can't exced 8 characters"]
     },
     rating: {
          type: Number,
          default: 0
     },
     image: [
          {
               publlic_id: {
                    type: String,
                    required: true
               },
               url: {
                    type: String,
                    required: true
               }
          }

     ],
     category: {
          type: String,
          required: [true, "Please enter product category"]
     },
     stock: {
          type: Number,
          required: [true, "Please enter product stock"],
          maxLength: [4, "stock can't exceed 4 characters"]
     },
     noOfReviews: {
          type: Number,
          default: 0
     },
     reviews: [
          {
               name: {
                    type: String,
                    required: true
               },
               rating: {
                    type: String,
                    required: true
               },
               commnet: {
                    type: String,
                    required:true
               }
          }
     ],
     createdAt: {
          type: Date,
          default:Date.now(),
     },
     updatedAt: {
          type: Date,
          default:Date.now()
     }
});


module.exports = mongoos.model("Product", productSchema);