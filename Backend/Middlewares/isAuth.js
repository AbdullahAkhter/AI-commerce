import jswt from "jsonwebtoken"
import dotenv from "dotenv";

dotenv.config()
const isAuth=(req,resp,next)=>{
    try {
        const token=req.cookies.jwt;
        console.log("The received token is",token)
        if(!token){return resp.json({message:'You have no token'})}
        const decode=jswt.verify(token,process.env.KEY);
        if(!decode){return resp.json({message:'You have an inavlid token'})}
        req.user=decode.userid
        next();
    } catch (error) {
        console.log("The error is",error)
    }
}
export default isAuth
export const AdminAuth=async(req,resp,next)=>{
    try {
          const token=req.cookies.Admin;
    console.log("The received token is",token);
    const decode=jswt.verify(token,process.env.KEY);
    if(!decode){return resp.send("You have no token")};
    console.log(decode)
    req.user=decode.userid;
    next();
    } catch (error) {
        console.log(error)
    }
  
}