const {Router} = require("express");
const db = require("../db/queries");


async function homePage (req, res) {
  const categories = await db.getAllCategories();
  // const products = await db.productGet();
  console.log(categories)
  // console.log(products);
  res.render ("index",{
    title:"Welcome to my shop!",
    categories:categories,
    // products:products,
  })
    // res.send("Usernames: " + userNames.map(user => user.username).join(","));
}

async function productGet (req,res) {
  const query = req.query.product;
  const product = await db.productGet(query);
  console.log(product);
    res.render("product",{
    title:"Have a look at this product!",
    product:product
  });
}

async function categoryGet (req,res) {
  console.log(req.query.category);
  let category  = req.query.category;
  const products = await db.categoryGet(req.query.category);
  res.render("category",{
    title:`Have a look at my ${category}s`,
    products:products,
  });
}

module.exports = {
    homePage,
    productGet,
    categoryGet,
}