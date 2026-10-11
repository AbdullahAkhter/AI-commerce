import mongoose from "mongoose";
const ConnectDB=async()=>{
    try {
          await mongoose.connect("mongodb://localhost:27017/E-commerce")
          console.log("The database is connected successfully")
    } catch (error) {
        console.log("error is ",error)
    }
  
}
export default ConnectDB