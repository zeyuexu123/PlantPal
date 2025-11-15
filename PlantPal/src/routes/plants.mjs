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

router.get("/edit/:id", async (req, res) => {
    try {
        const plant = await Plant.findById(req.params.id);
        if (!plant) {
            return res.status(404).send("Plant not found");
        }
        res.render("plant-edit", { plant });
    } catch (err) {
        console.error("Error fetching plant:", err);
        res.status(500).send("Error fetching plant");
    }
});

router.post("/edit/:id", async (req, res) => {
    try {
        const { name, species, waterIntervalDays, lastWatered } = req.body;
        await Plant.findByIdAndUpdate(req.params.id, {
            name,
            species,
            waterIntervalDays,
            lastWatered
        });
        res.redirect("/plants");
    } catch (err) {
        console.error("Error updating plant:", err);
        res.status(500).send("Error updating plant");
    }
});

router.post("/delete/:id", async (req, res) => {
    try {
        const plant = await Plant.findById(req.params.id);
        if (!plant) {
            return res.status(404).send("Plant not found");
        }

        await User.findByIdAndUpdate(plant.user, { $pull: { plants: plant._id } });
        await Plant.findByIdAndDelete(req.params.id);

        res.redirect("/plants");
    } catch (err) {
        console.error("Error deleting plant:", err);
        res.status(500).send("Error deleting plant");
    }
});

export default router;