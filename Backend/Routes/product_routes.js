import express from 'express';
import AddProduct, { ListProduct, RemoveProduct } from '../Routes_logic/product_logic.js';
import upload from '../Middlewares/multer.js';
const product_routes=express.Router();
product_routes.post("/products",upload.fields([{name:"image1",maxCount:1},{name:"image2",maxCount:1},
    {name:"image3",maxCount:1},{name:"image4",maxCount:1}
]),AddProduct);
product_routes.get("/list_of_products",ListProduct)
product_routes.get("/deletion_of_products/:id",RemoveProduct)
export default product_routes