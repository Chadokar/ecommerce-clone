require("dotenv").config();
const User = require("../models/UsersModels");
// const Product = require("../models/ProductModels");
const jwt = require("jsonwebtoken");

const createTokens = (user) => {
  const accessToken = jwt.sign({ id: user._id }, process.env.JWT_KEY, {
    expiresIn: "1000d",
  });
  return accessToken;
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  try {
    const user = await User.login(email, password);
    const token = createTokens(user);
    res.status(201).json({ user, token });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports.signup_post = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  console.log("name : ", firstName, " ", lastName);
  try {
    const user = await User.create({ email, password, firstName, lastName });
    const token = createTokens(user);
    res.status(201).json({ user, token });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports.get_user = async (req, res) => {
  try {
    res.status(201).json(req.user);
  } catch (err) {
    res.status(401).json(err);
  }
};

module.exports.update_user = async (req, res) => {
  const { product_id, product_name, about, imgurl, price } = req.body;
  let card = [];
  if (Array.isArray(req.user.card)) card = [...req.user?.card];
  const preuser = req.user;
  card = [...card, { product_id, product_name, about, imgurl, price }];
  try {
    const user = await User.findByIdAndUpdate(req.user._id, {
      card,
    });
    const usern = await User.findById(req.user._id);
    console.log(usern);
    res.status(201).json({ user });
  } catch (err) {
    res.status(401).json(err);
  }
};
