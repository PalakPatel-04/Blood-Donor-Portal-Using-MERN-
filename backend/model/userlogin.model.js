import mongoose from "mongoose";
const userloginSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true},
        password: { type: String, required: true}
    }
)
const userloginModel = mongoose.model("userlogin", userloginSchema)
export default userloginModel