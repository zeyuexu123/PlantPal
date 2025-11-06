import express from "express";
import Plant from "../models/plant.mjs";
import { searchPlant } from "../api/trefle.mjs";
import User from "../models/user.mjs";


const router = express.Router();

router.get("/", async (req, res) => {
    const plants = await Plant.find();
    res.render("plants", { plants });
});

router.get("/add", (req, res) => {
    res.render("plant-add");
});

router.post("/add", async (req, res) => {

    try {
        if (!req.session?.userId) {
            return res.redirect("/login");
        }

        const user = await User.findById(req.session.userId);
        if (!user) {
            return res.redirect("/login");
        }

        const { name, species, waterIntervalDays, lastWatered } = req.body;

        const plant = new Plant({
            user: user._id,
            name,
            species,
            waterIntervalDays,
            lastWatered
        });
        await plant.save();

        user.plants.push(plant._id);
        await user.save();

        res.redirect("/plants");
    } catch (err) {
        console.error("Error adding plant:", err);
        res.status(500).send("Error adding plant");
    }
});

router.get("/search", async (req, res) => {
    const q = req.query.q;
    const results = await searchPlant(q);
    res.render("plants", { results });
});

export default router;