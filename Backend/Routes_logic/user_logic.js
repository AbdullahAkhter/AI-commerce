import { User } from "../models/userSchema.js"

const getCurrentUser=async(req,resp)=>{
    try {
       const user=await User.findById(req.user);
       if(!user){return resp.json({message:"No one signned in"})} 
       resp.json({user});
       console.log("The current user is",user)
    } catch (error) {
        console.log("The eror",error)
    }
}
export default getCurrentUser
export const Admin_user=async(req,resp)=>{
    try {
        const user=await User.findOne({email:req.user});
    console.log("The current user is",user);
    if(user){
        return resp.json({user})
    }

    } catch (error) {
        console.log(error)    }
    
}