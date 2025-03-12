require("dotenv").config();
const express = require("express");
const app = express();
const dbRouters = require("./routes/dbRouters.js");


app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use("/",dbRouters);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Start of inventory app! - listening on port ${PORT}!`);
});
