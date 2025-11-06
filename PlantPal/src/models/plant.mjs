import mongoose from "mongoose";

const plantSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    species: String,
    waterIntervalDays: Number,
    lastWatered: Date
});

export default mongoose.model("Plant", plantSchema);