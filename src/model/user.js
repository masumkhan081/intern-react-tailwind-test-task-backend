module.exports = require("mongoose").model(
  "testtask",
  require("mongoose").Schema({
    fullName: {
      type: String,
      min: 3,
      max: 100,
      required: true,
    },
    phone: {
      type: String,
      min: 11,
      max: 15,
      required: true,
    },
    address: {
      type: String, required: true,
    },
    age: {
      type: Number,
      min: 1,
      max: 150,
      required: true,
    },
    email: {
      type: String,
      min: 15,
      max: 200,
      required: true,
    },
    applyingPosition: {
      type: String,
      enum: ["frontend", "backend", "full-stack"],
      required: false,
    },
    password: {
      type: String,
      min: 6,
      max: 1024,
      required: true,
    },

  })
);
