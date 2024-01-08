const { Router } = require("express");
const authController = require("./controllers/authcontroller");
const productController = require("./controllers/productcontrollers");
const shopController = require("./controllers/shopcontroller");
const { authenticate } = require("./midleware/authenticate");

const router = Router();

//authenticate
router.post("/signup", authController.signup_post);
router.post("/signin", authController.login_post);
router.get("/user", authenticate, authController.get_user);
router.put("/add-cart", authenticate, authController.update_user);

//shop handle
router.post("/createshop", authenticate, shopController.createshop);
router.get("/getshop", authenticate, shopController.getshop);

// product hangle
router.post("/create-product", authenticate, productController.createproduct);
router.get("/product-search/:productType", productController.getproducts);
router.get("/product/:productId", productController.getproduct);

module.exports = router;
