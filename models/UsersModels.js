const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: [true, "email already present"],
    lowercase: true,
    validator: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Pleasee enter an password"],
    minlength: [6, "Minimum possible length is 6 character"],
  },
  firstName: { type: String, required: [true, "Please enter firstname"] },
  lastName: { type: String, required: [true, "Please enter firstname"] },
  card: [
    {
      product_id: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
      product_name: { type: String },
      about: [{ value: { type: String }, id: { type: String } }],
      imgurl: { type: String },
      price: { type: Number },
    },
  ],
  shopId: { type: mongoose.Schema.Types.ObjectId, ref: "shop" },
  contact: { type: String },
  gender: { type: String },
});

// fire a function before doc saved to db

userSchema.pre("save", async function (next) {
  if (this.isModified("password" || this.isNew)) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// static method to login user

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    return Error("Incorrect password");
  }
  return Error("Incorrect Email");
};

const User = mongoose.model("user", userSchema);

module.exports = User;
