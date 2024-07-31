const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const initDB = require("./src/data-tier/mongodb");
const { originControl } = require("./src/middleware/middlewares");

// initialize the database
initDB();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());
// 
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(originControl);

app.listen(3000, () => {
  console.log("running ...");
});

// // close the server
app.get("/", function (req, res) {
  
});
 
 
