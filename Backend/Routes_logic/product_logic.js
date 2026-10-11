import Product from "../models/productSchema.js";
import { v2 as cloudinary } from 'cloudinary';
import dotenv from "dotenv"

const AddProduct=async(req,resp)=>{
    dotenv.config();
    try {
   const{name,
            description,price,sizes,product_category,sub_category}=req.body;

            console.log("files",req.files)
      // Configu
      // ratio
     let image1,image2,image3,image4=0
     try {
        cloudinary.config({ 
        cloud_name:process.env.CLOUD_NAME, 
        api_key:process.env.API_KEY , 
        api_secret:process.env.API_SECRET // Click 'View API Keys' above to copy your API secret
    });
    image1=(await cloudinary.uploader.upload(req.files.image1[0].path)).secure_url
     image2=(await cloudinary.uploader.upload(req.files.image2[0].path)).secure_url
      image3=(await cloudinary.uploader.upload(req.files.image3[0].path)).secure_url
       image4=(await cloudinary.uploader.upload(req.files.image4[0].path)).secure_url
        console.log("The image1 is",image1)
     } catch (error) {
        console.log("The error",error)
     }
  
      
         let productDetails={
        
image1,image2,image3,image4,name,
            description,price,sizes,category:product_category, subcategory:sub_category
        
     };
     const result=new Product(productDetails);
     console.log("The added product",result);
     await result.save()
     resp.json(result)
    } catch (error) {
        console.log(error)
    }
   
}
export default AddProduct
export const ListProduct=async(req,resp)=>{
    try {
        const product=await Product.find({});
        resp.json(product);
        console.log("products",product)
    } catch (error) {
        console.log("error",error)
    }
}

export const RemoveProduct=async(req,resp)=>{
    try {
        const{id}=req.params
        const product=await Product.findByIdAndDelete(id);
        resp.json(product);
        console.log("result",product)
    } catch (error) {
        console.log("error",error)
    }
}