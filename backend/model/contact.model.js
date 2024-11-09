import mongoose from "mongoose";
const contactSchema = new mongoose.Schema( 
    {
        userName: { type: String, required: true }, //same name with useState 
        userEmail: { type: String, required: true },
        userPhone: { type: String, required: true },
        userQuery: { type: String, required: true },
    }
)
const contactModel = mongoose.model("contact", contactSchema)
export default contactModel 

