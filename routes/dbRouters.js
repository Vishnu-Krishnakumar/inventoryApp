const {Router} = require("express");
const dbController = require("../controller/dbController");
const dbRouters = Router();

dbRouters.get("/",dbController.homePage);
dbRouters.get("/products",dbController.productGet);
dbRouters.post("/categories",dbController.categoryPost);
// dbRouters.get("/cart",dbController.cartGet);

module.exports = dbRouters;