require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS product (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  product_name VARCHAR ( 255 ),
  stock integer,
  price decimal,
  unit varchar(255),
  category_id integer,
  constraint foreign_category foreign key (category_id) references category(id)on delete restrict);
CREATE TABLE IF NOT EXISTS category(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    category_name VARCHAR(255) NOT NULL UNIQUE
);
INSERT INTO category(category_name)
VALUES('Candy'),('Vegetables'),('Alcohol'),('Meat'),('Bread');
INSERT INTO product (product_name,stock,price,unit,category_id) 
VALUES
  ('KitKat',25,.50,'ounce',1),
  ('WonderBread',30,4.99,'ounce',5),
  ('Chicken_Breast',40,1.99,'pound',4);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    user: process.env.role_name,
    password: process.env.role_password,
    host: 'localhost',
    port: 5432,
    database: 'grocery'
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();