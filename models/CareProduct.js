// models/CareProduct.js
const mongoose = require("mongoose");

const careProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

module.exports = mongoose.model("CareProduct", careProductSchema);
