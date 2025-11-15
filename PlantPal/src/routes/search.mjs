import express from "express";
import { searchPlant } from "../api/trefle.mjs";

const router = express.Router();

router.get("/", (req, res) => {
    res.render("search", { plants: null, query: "" });
});

router.post("/", async (req, res) => {
    const { query } = req.body;
    try {
        const data = await searchPlant(query);
        const plants = data.data;
        res.render("search", { plants, query });
    } catch (err) {
        console.error("Error searching plant:", err);
        res.status(500).send("Error searching plant");
    }
});

export default router;