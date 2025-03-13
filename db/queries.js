

const pool = require("./pool");


 async function getAllCategories(){
  const {rows} = await pool.query("SELECT * FROM category");
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

module.exports ={
  categoryGet,
  productGet,
  getAllCategories,
}