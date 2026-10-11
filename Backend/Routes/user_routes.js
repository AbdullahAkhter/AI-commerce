import express from "express";
import getCurrentUser, { Admin_user } from "../Routes_logic/user_logic.js";
import isAuth, { AdminAuth } from "../Middlewares/isAuth.js";
const user_routes=express.Router();
user_routes.post('/getCurrentUser',isAuth,getCurrentUser);
user_routes.post('/current_admin',AdminAuth,Admin_user);
export default user_routes