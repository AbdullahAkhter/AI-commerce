import mongoose from "mongoose";
const ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image1:{
        type:String,
        
    },
     image2:{
        type:String,
        
    },
     image3:{
        type:String,
        
    },
     image4:{
        type:String,
        
    },
     description:{
        type:String,
        required:true
    },
     price:{
        type:Number,
        required:true
    },
     category:{
        type:String,
        
    },
     subcategory:{
        type:String
    
    },
     sizes:{
        type:Array,
        
    },
     date:{
        type:Number,
        
    },
    bestseller:{
        type:Boolean
    }

},{timestamps:true});
const Product=mongoose.model("products",ProductSchema)
export default Product