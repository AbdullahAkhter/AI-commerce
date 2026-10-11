import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const jwtToken=(userid,resp)=>{
    try {
        const token=jwt.sign({userid},process.env.KEY,{expiresIn:"30d"})
    resp.cookie("jwt",token,{maxAge:30*24*60*60*1000,
        httpOnly:true,
        sameSite:"lax",
        secure:false
    })
    console.log("The toke is",token)
    } catch (error) {
        console.log("The error in formation",error)
    }
    
}
export default jwtToken

export const AdminToken = (userid, resp) => {
    try {
        const token = jwt.sign(
        { userid },
        process.env.KEY,
        { expiresIn: "30d" }
    );

    resp.cookie("Admin", token, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "lax",
        secure: false
    });
    console.log("AdminToken is is ",token)
        
    } catch (error) {
        console.log("error",error)
    }
    
}