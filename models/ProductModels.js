const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productname: { type: String, required: [true, "Please enter a name"] },
  type: { type: String, required: [true, "Please enter type"] },
  price: { type: Number },
  link: { type: String },
  description: { type: String },
  type: { type: String },
  about: [{ value: { type: String }, id: { type: String } }],
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: "shop" },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
