require("dotenv").config();
const express = require("express");
const app = express();
const dbRouters = require("./routes/dbRouters.js");


app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use("/",dbRouters);
app.use(express.static('css'));
const PORT = 5432;
app.listen(PORT, () => {
  console.log(`Start of inventory app! - listening on port ${PORT}!`);
});
