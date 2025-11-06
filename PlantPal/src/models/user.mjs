import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    hash: { type: String, required: true },
    plants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Plant" }]
});

export default mongoose.model("User", userSchema);