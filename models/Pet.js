// models/Pet.js
const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  breed: String,
  age: Number,
  summary: String,
  image: String,
});

module.exports = mongoose.model("Pet", petSchema);
