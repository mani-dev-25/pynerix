require("dotenv").config();
const express = require("express");
const mongoose = require("./config/db");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));