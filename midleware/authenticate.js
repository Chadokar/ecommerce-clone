const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/UsersModels");

const authenticate = async (req, res, next) => {
  let token = req.headers.authorization.split(" ")[1];
  token = token.substring(1, token.length - 1);

  if (!token) return res.status(401).json({ error: "Invalidtoken" });
  // console.log(token);
  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    console.log("decoded : ", decoded);
    req.user = await User.findById(decoded.id);

    next();
  } catch (error) {
    return res.status(400).json({ error });
  }
};

module.exports = { authenticate };
