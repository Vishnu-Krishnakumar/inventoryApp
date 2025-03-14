const {Router} = require("express");
const db = require("../db/queries");


async function homePage (req, res) {
  const categories = await db.getAllCategories();
  const products = await db.getAllProducts();
  console.log(categories)
  console.log(products);
  res.render ("index",{
    title:"Welcome to my shop!",
    categories:categories,
    products:products,
  })
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
async function productPost (req,res){
  console.log(req.body);
  db.productPost(req.body);
  res.redirect("/");
}
async function categoryGet (req,res) {
  console.log(req.query.category);
  let category_id  = req.query.category;
  let category_name = await db.categoryNameGet(category_id)
  const products = await db.categoryGet(category_id);
  res.render("category",{
    title: category_name,
    products:products,
    id: category_id,
  });
}

async function categoryPost (req,res){
  let category = req.body.category;
  console.log(category);
  db.categoryPost(category);
  res.redirect("/"); 
}
async function categoryDeletePost(req,res){
  const id = req.body.category;
  db.categoryDeletePost(id);
  res.redirect("/");
}
module.exports = {
    homePage,
    productGet,
    categoryGet,
    categoryPost,
    categoryDeletePost,
    productPost,
}