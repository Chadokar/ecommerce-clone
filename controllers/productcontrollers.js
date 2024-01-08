const Product = require("../models/ProductModels");

module.exports.createproduct = async (req, res) => {
  const { productname, description, link, price, type, about, companyId } =
    req.body;
  try {
    const product = await Product.create({
      productname,
      description,
      link,
      price,
      type,
      about,
      companyId,
    });
    // console.log(companyId);
    res.status(201).json({ product });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports.getproducts = async (req, res) => {
  const { productType } = req.params;
  console.log("type : ", productType);
  try {
    const product = await Product.find();

    const filteredProducts = product.filter((item) => {
      // Check if the productname or any other property contains the string "ear"
      return Object.values(item._doc).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(productType.toLowerCase())
      );
    });

    res.status(201).json({ products: filteredProducts });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports.getproduct = async (req, res) => {
  const { productId } = req.params;
  // console.log("type : ", productType);
  try {
    const product = await Product.findById(productId);

    res.status(201).json({ product });
  } catch (error) {
    res.status(400).json({ error });
  }
};
