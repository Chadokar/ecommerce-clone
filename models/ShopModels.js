const mongoose = require("mongoose");
const { isEmail } = require("validator");

const shopSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: [true, "email already present"],
    lowercase: true,
    validator: [isEmail, "Please enater a valid email"],
  },
  shopname: { type: String, required: [true, "Please enter shopname"] },
  address: { type: String, required: [true, "Please enter address"] },
  pin: { type: String, required: [true, "Please enter pin"] },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: [true, "Please enter userId"],
  },
});

const Shop = mongoose.model("shop", shopSchema);

module.exports = Shop;
