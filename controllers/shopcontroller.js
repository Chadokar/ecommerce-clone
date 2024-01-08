const Shop = require("../models/ShopModels");

module.exports.createshop = async (req, res) => {
  const { shopname, address, email, pin, userId } = req.body;
  const data = { shopname, address, email, pin, userId };
  console.log("shop : ", data);
  try {
    const shop = await Shop.create(data);
    console.log("shop2 : ", shop);
    res.status(201).json({ shop });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports.getshop = async (req, res) => {
  const { email } = req.body;
  try {
    const shop = await Shop.find({ email });
    res.status(201).json({ shop });
  } catch (error) {
    res.status(400).json({ error });
  }
};
