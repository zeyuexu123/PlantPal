import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./src/db.mjs";

import authRoutes from "./src/routes/auth.mjs";
import plantRoutes from "./src/routes/plants.mjs";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

connectDB();
app.use("/auth", authRoutes);
app.use("/plants", plantRoutes);
app.get("/", (req, res) => res.render("index"));

app.listen(PORT, () => console.log(`PlantPal running on http://localhost:${PORT}`));