const {Router} = require("express");
const dbController = require("../controller/dbController");
const dbRouters = Router();

dbRouters.get("/",dbController.homePage);
dbRouters.get("/product",dbController.productGet);
dbRouters.get("/category",dbController.categoryGet);
dbRouters.post("/category",dbController.categoryPost)
dbRouters.post("/categoryRemove",dbController.categoryDeletePost);
dbRouters.post("/product",dbController.productPost);
// dbRouters.get("/cart",dbController.cartGet);

module.exports = dbRouters;