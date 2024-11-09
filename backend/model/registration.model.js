import mongoose from "mongoose";
const registrationSchema = new mongoose.Schema(
    {
        userId: { type: String },
        userPass: { type: String },
        userName: { type: String },
        userPhone: { type: String },
        userEmail: { type: String },
        userAge: { type: String },
        userBloodgroup: { type: String },
        userAddress: { type: String }
    }
)
const registrationModel = mongoose.model("registration", registrationSchema)
export default registrationModel

