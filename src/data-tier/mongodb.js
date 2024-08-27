const mongoose = require("mongoose");
require("dotenv").config();

const mongodbConnection = async () => {
  try {
    const DB_URL =
      process.env.DB_URL ||
      "mongodb+srv://masumkhan:pddrgj3q@cluster0.vsf5tei.mongodb.net/";
    await mongoose.connect(DB_URL, {
      dbName: "testtask",
    });
    console.log("Mongodb connected!");
  } catch (error) {
    console.log("Mongodb not connected!" + JSON.stringify(error));
  }
};

module.exports = mongodbConnection;
