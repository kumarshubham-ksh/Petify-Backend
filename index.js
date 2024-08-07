require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const petsRouter = require("./routes/pets");
const careProductsRouter = require("./routes/careProducts");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/pets", petsRouter);
app.use("/api/care-products", careProductsRouter);

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening on port ${port}...`));
