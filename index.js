const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const initDB = require("./src/data-tier/mongodb");
const { originControl } = require("./src/middleware/middlewares");
const User = require("./src/model/user");

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

app.get("/", (req, res) => {
  res.send("running...");
});
app.post("/test", async (req, res) => {
  const newUser = await User.create(req.body);
  console.log(JSON.stringify(newUser));
  res.send(newUser);
});
//
app.post("/api", async (req, res) => {
  res.send("post->api");
});
//
app.get("/api/test", async (req, res) => {
  res.send("api-test");
});
//
async function bootstrap() {
  await initDB();
}
//
bootstrap();
