module.exports = require("mongoose").model(
  "tasktestusers",
  require("mongoose").Schema({
    fullName: {
      type: String,
      min: 4,
      max: 100,
      required: true,
    },
    phone: {
      type: String,
      min: 25,
      max: 50,
      required: true,
    },
    address: {
      type: String,
    },
    age: {
      type: Number,
      min: 1,
      max: 150,
      required: true,
    },
    email: {
      type: String,
      min: 25,
      max: 200,
      required: true,
    },
    applyingPosition: {
      type: String,
      min: 25,
      max: 200,
      required: true,
    },
    password: {
      type: String,
      min: 6,
      max: 1024,
      required: true,
    },

  })
);
