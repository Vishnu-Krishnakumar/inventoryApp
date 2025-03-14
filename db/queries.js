

const pool = require("./pool");


async function getAllCategories(){
  const {rows} = await pool.query("SELECT * FROM category");
  return rows;
}
async function getAllProducts(){
  const {rows} = await pool.query("SELECT * FROM product");
  console.log(rows);
  return rows;
}
async function productGet(product){
  console.log("productget");
  const {rows} = await pool.query("SELECT * FROM product WHERE id = $1",[`${product}`]);
  return rows;
}
async function categoryGet(category){
  const {rows} = await pool.query("SELECT * FROM product where category_id= $1",[`${category}`]);
  console.log(rows);
  return rows;
}
async function categoryNameGet(category_id){
  const {rows} = await pool.query("SELECT category_name from category where id = $1",[`${category_id}`]);
  return rows[0].category_name;
}
async function categoryPost(category){
  const {rows} = await pool.query("INSERT INTO category (category_name) VALUES ($1)",[`${category}`]);
}
async function categoryDeletePost(category_id){
  const{rows} = await pool.query("DELETE FROM category where id = $1",[`${category_id}`]);
}

async function productPost(product){
  console.log(product.product_name);
  await pool.query("INSERT INTO product(product_name,stock,price,unit,category_id) values($1,$2,$3,$4,$5)",[`${product.product_name}`,`${product.product_stock}`,`${product.product_price}`,`${product.product_unit}`,`${product.category}`]);
}

module.exports ={
  categoryGet,
  productGet,
  getAllCategories,
  categoryPost,
  categoryNameGet,
  categoryDeletePost,
  getAllProducts,
  productPost,
}