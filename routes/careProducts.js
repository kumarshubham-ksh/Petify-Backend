// routes/careProducts.js
const express = require("express");
const router = express.Router();
const CareProduct = require("../models/CareProduct");

// Get all care products
router.get("/", async (req, res) => {
  try {
    const products = await CareProduct.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new care product
router.post("/", async (req, res) => {
  const product = new CareProduct(req.body);
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a care product
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await CareProduct.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct)
      return res.status(404).json({ message: "Care product not found" });
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a care product
router.delete("/:id", async (req, res) => {
  try {
    const product = await CareProduct.findByIdAndDelete(req.params.id);
    if (!product)
      return res.status(404).json({ message: "Care product not found" });
    res.json({ message: "Care product deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
