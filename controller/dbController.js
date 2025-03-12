const {Router} = require("express");
const db = require("../db/queries");


async function homePage (req, res) {
  const categories = await db.getAllCategories();
  const products = await db.productGet();
  console.log(categories)
  console.log(products);
  res.render ("index",{
    title:"Welcome to my shop!",
    categories:categories,
    products:products,
  })
    // res.send("Usernames: " + userNames.map(user => user.username).join(","));
}

async function productGet (req,res) {
  const products = await db.productGet();
    res.render("products",{
    title:"Have a look at all my products!",
    products:products
  });
}

async function categoryPost (req,res) {
  const categories = await db.getCategories(req.query.category);
    res.render("products",{
    title:"Have a look at all my products!",
    categories:categories,
  });
}

module.exports = {
    homePage,
    productGet,
    categoryPost,
}