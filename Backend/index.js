import express from 'express';
import ConnectDB from './Config/connection.js';
import Auth_routes from './Routes/Auth_routes.js';
import cookieparser from "cookie-parser"
import cors from 'cors'
import user_routes from './Routes/user_routes.js';
import product_routes from './Routes/product_routes.js';
const app=express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173","http://localhost:5174"],
    credentials: true
}));
app.use(cookieparser())
app.use('/api/auth',Auth_routes)
app.use('/api/user',user_routes)
app.use('/api/product',product_routes)
ConnectDB()
app.listen(3000,()=>{
    console.log("The server is running at 3000 port.")
})