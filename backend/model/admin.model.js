import mongoose from "mongoose";
const adminSchema = new mongoose.Schema
    (
        {
            adminId: { type: String, required: true, unique: true },
            pass: { type: String, required: true, unique: true }
        }
    )
const adminModel = mongoose.model("admin", adminSchema);
export default adminModel


