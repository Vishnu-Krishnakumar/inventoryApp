require("dotenv").config();
const { Pool } = require("pg");
module.exports = new Pool({
    host: "postgres.railway.internal", // or wherever the db is hosted
    user: "postgres",
    database: "railway",
    password: "lbfrtQxihZexXZkcyPrpYEdlDUjwdCyQ",
    port: 5432 // The default port
  });