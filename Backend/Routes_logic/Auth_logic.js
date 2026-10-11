import { User } from "../models/userSchema.js";
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwtToken, { AdminToken } from "../Config/token.js";

const registration_logic=async(req,resp)=>{
    try {
         const{name,email,password}=req.body;
    const userExist=await User.findOne({email});

    if(userExist) {return resp.send({message:'The user is alrready exist',success:false})}
    if(!validator.isEmail(email))return resp.send({message:"please enter a valid email structure",success:false})
    const hashedPassword= bcrypt.hashSync(password,10);
   const user= new User({name,email,password:hashedPassword});
   await user.save();
   jwtToken(user._id.toString(),resp);
   console.log("The new user is",user)
   resp.send({message:"You are reistered",success:true})
   console.log("The api is running")
    } catch (error) {
        console.log("error is occur",error)
    }
   


}
export default registration_logic

export const login_logic=async(req,resp)=>{
    try {
        const{email,password}=req.body;
   const userExist=await User.findOne({email});
   if(!userExist)return resp.send({message:'The user is not exist',success:false})
    const isMatch=bcrypt.compareSync(password,userExist.password)
if(!isMatch) return resp.send({message:'The password is incorrect',success:false}); 
jwtToken(userExist._id,resp)
 resp.send({message:"You have been looged in successfully",success:true})
    } catch (error) {
        console.log("error is",error)
    }
  

}
export const logout_logic=async(req,resp)=>{
         console.log("Cookie before loggedout",req.cookies.jwt)
         resp.cookie('jwt','',{maxAge:0})
         resp.send({message:"You are successfully logged out"})
         console.log("Cookie after loggedout",req.cookies.jwt)

}

export const googleRegistration_logic=async(req,resp)=>{
    try {
         const{name,email}=req.body;
    const userExist=await User.findOne({email});
    if(userExist)return resp.send({message:'The user is alrready exist',success:false})
    if(!validator.isEmail(email))return resp.send({message:"please enter a valid email structure",success:false})
    
   const user= new User({name,email});
   await user.save();
   jwtToken(user._id.toString(),resp)
   console.log("The new user is",user)
   resp.send({message:"You are reistered",success:true})
   console.log("The google api  is running")
    } catch (error) {
        console.log("error is occur",error)
    }
   


}

export const googleLogin_logic=async(req,resp)=>{
    try {
        const{email,password}=req.body;
   const userExist=await User.findOne({email});
   console.log("googleuser is",userExist)
   if(!userExist)return resp.send({message:'The user is not exist',success:false})
    
jwtToken(userExist._id,resp)
 resp.send({message:"You have been looged in successfully",success:true})
    } catch (error) {
        console.log("error is",error)
    }
  

}
export const AdminLogin=async(req,resp)=>{
    const adminpassword="1234"
    const adminemail="admin@gmail.com";
    console.log("The api is running")
    try {
        const{email,password}=req.body;
        console.log(email,password);
        if(email===adminemail && password===adminpassword){
            
           await AdminToken(email,resp);
            
           
            return resp.send({message:"You are successfuly login",success:false})
        }
        
        resp.send({message:"please enter a valid email or password",success:false})

    } catch (error) {
        
    }
}

export const Admin_logout_logic=async(req,resp)=>{
    try {
          console.log("Cookie before Admiloggedout",req.cookies.Admin)
          if(req.cookies.Admin){
         await resp.cookie('Admin','',{maxAge:0})
         resp.send({message:"You are successfully logged out"})
         console.log("Cookie after Adminloggedout",req.cookies.Admin)}
         else{
            console.log("The token is no recieved or empty")
         }
    } catch (error) {
        
    }
       

}
    
    
