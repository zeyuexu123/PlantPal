import express from "express";
import bcrypt from "bcrypt";
import User from "../models/user.mjs";

const router = express.Router();

router.get("/register", (req, res) => {
    res.render("register");
});

router.post("/register", async (req, res) => {
    const { username, password } = req.body;

    if (username.length <= 8 || password.length <= 8) {
        return res.send("USERNAME PASSWORD TOO SHORT");
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.send("USERNAME ALREADY EXISTS");
    }

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
    req.session.userId = user._id; 
    res.redirect("/plants");
});

export default router;