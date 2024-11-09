import mongoose from "mongoose"
const DbURL = 'mongodb+srv://palak04patel:mongodb123%40@palakp.ijwz4.mongodb.net/BloodPortal'
const connect_Db = async () =>{
    try {
        const conn = await mongoose.connect(`${DbURL}`)
        console.log("Connection Successfull");
        
    } catch (error) {
        console.log(error);
        
    }
}
export default connect_Db
