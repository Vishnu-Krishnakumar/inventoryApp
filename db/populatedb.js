require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS category(
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  category_name VARCHAR(255) NOT NULL UNIQUE
);
CREATE TABLE IF NOT EXISTS product (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  product_name VARCHAR ( 255 ),
  stock integer,
  price decimal,
  unit varchar(255),
  category_id integer,
  constraint foreign_category foreign key (category_id) references category(id)on delete cascade);

INSERT INTO category(category_name)
VALUES('Candy'),('Vegetables'),('Alcohol'),('Meat'),('Bread') ON CONFLICT (category_name) DO NOTHING;
INSERT INTO product (product_name,stock,price,unit,category_id) 
VALUES
  ('KitKat',25,.50,'ounce',1),
  ('Hershey',25,.50,'ounce',1),
  ('Wonder Bread',30,4.99,'ounce',8),
  ('Chicken Breast',40,1.99,'pound',4);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    user: process.env.role_name,
    password: process.env.role_password,
    host: 'cva3kb8fnakc73fuf2mg',
    port: 5432,
    database: 'grocery_i0q4'
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();