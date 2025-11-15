import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import hbs from "hbs";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./db.mjs";
import session from "express-session";

import authRoutes from "./routes/auth.mjs";
import plantRoutes from "./routes/plants.mjs";
import searchRoutes from "./routes/search.mjs";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));


app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: "my_secret",
    resave: false,
    saveUninitialized: false
}));



connectDB();

app.use("/auth", authRoutes);
app.use("/plants", plantRoutes);
app.use("/search", searchRoutes);
app.get("/", (req, res) => res.render("index"));

app.listen(PORT, () => console.log(`PlantPal running on http://localhost:${PORT}`));