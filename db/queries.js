

const pool = require("./pool");


 async function getAllCategories(){
  const {rows} = await pool.query("SELECT DISTINCT category FROM products");
  return rows;
}

 async function productGet(product){
  const {rows} = await pool.query("SELECT * FROM products WHERE product = $1",[`${product}`]);
  return rows;
}

 async function categoryGet(category){
  const {rows} = await pool.query("SELECT * FROM products where category = $1",[`${category}`]);
  console.log(rows);
  return rows;
}

module.exports ={
  categoryGet,
  productGet,
  getAllCategories,
}