import express from "express";
import bcrypt from "bcrypt";
import User from "../models/user.mjs";

const router = express.Router();

router.get("/register", (req, res) => {
    res.render("register");
});

router.post("/register", async (req, res) => {
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = new User({ username, hash });
    await user.save();
    res.redirect("/auth/login");
});

router.get("/login", (req, res) => {
    res.render("login");
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.send("User not found");
    const match = await bcrypt.compare(password, user.hash);
    if (!match) return res.send("Incorrect password");
    res.redirect("/plants");
});

export default router;