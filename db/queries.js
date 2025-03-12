

const pool = require("./pool");


 async function getAllCategories(){
  const {rows} = await pool.query("SELECT DISTINCT category FROM products");
  return rows;
}

 async function productGet(){
  const {rows} = await pool.query("SELECT product FROM products");
  return rows;
}

 async function categoryGet(category){
  const {rows} = await pool.query("SELECT * FROM products where category = $1",[`${category}`]);
  return rows.rows;
}

module.exports ={
  categoryGet,
  productGet,
  getAllCategories,
}