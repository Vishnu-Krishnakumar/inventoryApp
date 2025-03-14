require("dotenv").config();
const { Pool } = require("pg");
module.exports = new Pool({
    host: process.env.host, // or wherever the db is hosted
    user: process.env.user,
    database: process.env.database,
    password: "lbfrtQxihZexXZkcyPrpYEdlDUjwdCyQ",
    port: 5432 // The default port
  });