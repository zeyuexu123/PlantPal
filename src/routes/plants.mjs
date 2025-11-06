import express from "express";
import Plant from "../models/plant.mjs";
import { searchPlant } from "../api/trefle.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
    const plants = await Plant.find();
    res.render("plants", { plants });
});

router.get("/add", (req, res) => {
    res.render("plant-add");
});

router.post("/add", async (req, res) => {
    const { name, species, waterIntervalDays, lastWatered } = req.body;
    const plant = new Plant({ name, species, waterIntervalDays, lastWatered });
    await plant.save();
    res.redirect("/plants");
});

router.get("/search", async (req, res) => {
    const q = req.query.q;
    const results = await searchPlant(q);
    res.render("plants", { results });
});

export default router;