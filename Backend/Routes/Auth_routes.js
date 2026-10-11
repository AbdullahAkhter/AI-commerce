import express from 'express';
import isAuth from "../Middlewares/isAuth.js"
import registration_logic, { googleRegistration_logic, googleLogin_logic,login_logic, logout_logic, AdminLogin, Admin_logout_logic, } from '../Routes_logic/Auth_logic.js';
const Auth_routes=express.Router();
Auth_routes.post('/registration',registration_logic)
Auth_routes.post('/login',login_logic)
Auth_routes.get('/loggedout',logout_logic)
Auth_routes.post('/googleRegistration',googleRegistration_logic)
Auth_routes.post('/googleLogin',googleLogin_logic)
Auth_routes.post('/Admin_login',AdminLogin)
Auth_routes.get('/Admin_logout',Admin_logout_logic)


export default Auth_routes;
