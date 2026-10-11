import React from 'react'
import Sidebar from '../components/sidebar'
import Nav from '../components/Nav'
import { useState } from 'react'
import upload from "../assets/title.png"
import axios from 'axios'
function Add() {
    const [image1, setimage1] = useState(false)
    const [image2, setimage2] = useState(false)
    const [image3, setimage3] = useState(false)
    const [image4, setimage4] = useState(false)
    const [name, setname] = useState(false)
    const [description, setdescription] = useState(false)
    const [price, setprice] = useState(false)
    const [sizes, setsizes] = useState([])
    const [product_category, setproduct_category] = useState("Men")
    const [sub_category, setsub_category] = useState("TopWear")
    const handleAddProduct = async (e) => {
        e.preventDefault();
       const formData=new FormData()
       formData.append("image1",image1)
       formData.append("image2",image2)
       formData.append("image3",image3)
       formData.append("image4",image4)
       formData.append("name",name)
       formData.append("description",description)
       formData.append("sizes",sizes)
       formData.append("price",price)
       formData.append("product_category",product_category)
       formData.append("sub_category",sub_category)

        try {
            const product_api = await axios.post("http://localhost:3000/api/product/products", formData);
            console.log("The result is", product_api.data);
        } catch (error) {
            console.log("error", error)
        }

    }


    return (
        <div
            className='w-[100vw] min-h-[100vh]  bg-gradient-to-l from-[#141414] to-[#0c2025]
     text-white overflow-y-auto relative '>
            <Nav />
            <Sidebar />
            <div
                className='w-[82%]  flex
        items-center justify-start
          absolute right-0 top-0'>
                <form
                    className='w-[100%] md:w-[70%] 
            flex flex-col space-y-[15px] py-[50px] px-[30px] md:px-[60px] mt-[70px]
            
            
            '
                    onSubmit={handleAddProduct}>
                    <div
                        className='w-[400px] h-[50px] text-[25px] md:text-[40px]
                text-white'>Add Product</div>
                    <div
                        className="w-[80%] h-[100px] flex flex-col
                items-start justify-center mt-[20px] gap-[10px]">
                        <p
                            className='text-[20px] font-semibold md:text-[25px]'>Upload Images</p>
                    </div>
                    <div
                        className='w-[100%] 
                flex items-center justify-start'>
                        <label
                            className='w-[65px] h-[65px] md:w-[100px] h-[100px]
                    hover:border-[#46d1f7]'
                            htmlFor='image1'>
                            <img
                                src={!image1 ? upload : URL.createObjectURL(image1)}
                                className="w-[80%] h-[80%]
                        rounded-lg hover:border-[#1d1d1d] border-[2px] "/>
                            <input
                                onChange={(e) => { setimage1(e.target.files[0]) }}
                                type='file'
                                id="image1"
                                name="image1"
                                className='hidden' />
                        </label>
                        <label
                            className='w-[65px] h-[65px] md:w-[100px] h-[100px]
                    hover:border-[#46d1f7]'
                            htmlFor='image2'>
                            <img
                                src={!image2 ? upload : URL.createObjectURL(image2)}
                                className="w-[80%] h-[80%]
                        rounded-lg hover:border-[#1d1d1d] border-[2px] "/>
                            <input
                                onChange={(e) => { setimage2(e.target.files[0]) }}
                                type='file'
                                id="image2"
                                className='hidden'
                                name="image2" />
                        </label>
                        <label
                            className='w-[65px] h-[65px] md:w-[100px] h-[100px]
                    hover:border-[#46d1f7]'
                            htmlFor='image3'>
                            <img
                                src={!image3 ? upload : URL.createObjectURL(image3)}
                                className="w-[80%] h-[80%]
                        rounded-lg hover:border-[#1d1d1d] border-[2px] "/>
                            <input
                                onChange={(e) => { setimage3(e.target.files[0]) }}
                                type='file'
                                id="image3"
                                className='hidden'
                                name="image3" />
                        </label>
                        <label
                            className='w-[65px] h-[65px] md:w-[100px] h-[100px]
                    hover:border-[#46d1f7]'
                            htmlFor='image4'>
                            <img
                                src={!image4 ? upload : URL.createObjectURL(image4)}
                                className="w-[80%] h-[80%]
                        rounded-lg hover:border-[#1d1d1d] border-[2px] "/>
                            <input
                                onChange={(e) => { setimage4(e.target.files[0]) }}
                                type='file'
                                id="image4"
                                className='hidden'
                                name="image4" />
                        </label>


                    </div>
                    <div
                        className='w-[80%] flex flex-col
                    items-start justify-center gap-[10px]'>
                        <p
                            className='text-[25px] font-semibold'>Product Name</p>
                        <input
                            className='w-[600px] h-[50px] hover:border-[#]
                        bg-slate-600 px-[20px] text-[18px] rounded-lg'
                            placeholder='Typing here'
                            type='text'
                            onChange={(e) => { setname(e.target.value) }}
                        />
                    </div>

                    <div
                        className='w-[80%] flex flex-col
                    items-start justify-center gap-[10px]'>
                        <p
                            className='text-[25px] font-semibold'>Product Description</p>
                        <input
                            className='w-[600px]  h-[100px] hover:border-[#]
                        bg-slate-600 px-[20px]  text-[18px] rounded-lg'
                            placeholder='Typing here'
                            type='text'
                            onChange={(e) => { setdescription(e.target.value) }}
                        />
                    </div>

                    <div
                        className='w-[100%] flex items-center gap-[10px]
                    flex-wrap'>
                        <div
                            className="flex flex-col items-start justify-center
                        gap-[10px] md:w-[30%] w-[100%]">
                            <p
                                className='text-[20px] text-white font-semibold'>Product Category</p>
                            <select
                                className='w-[60%] bg-slate-600 hover:border-[#46d1f7] border-[2px]
                            px-[10px] py-[7px]'
                                onChange={(e) => { setproduct_category(e.target.value) }}>
                                <option value="Men">Men</option>
                                <option value="Women">Women</option>
                                <option value="children">Children</option>
                            </select>
                        </div>

                        <div
                            className="flex flex-col items-start justify-center
                        gap-[10px] md:w-[30%] w-[100%]">
                            <p
                                className='text-[20px] text-white font-semibold '>Sub Category</p>
                            <select
                                className='w-[60%] bg-slate-600 hover:border-[#46d1f7] border-[2px]
                            px-[10px] py-[7px]'
                                onChange={(e) => { setsub_category(e.target.value) }}>
                                <option value="TopWear">TopWear</option>
                                <option value="BottomWear">BottomWear</option>
                                <option value="MiddleWear">MiddleWear</option>
                            </select>
                        </div>
                        <div
                            className='w-[80%] flex flex-col
                    items-start justify-center gap-[10px]'>
                            <p
                                className='text-[25px] font-semibold'>Product Price</p>

                            <input
                                className='w-[600px] h-[47px] hover:border-[#]
                        bg-slate-600 px-[20px] text-[18px] rounded-lg'
                                placeholder='Typing here'
                                type='text'
                                onChange={(e) => { setprice(e.target.value) }}
                            />
                        </div>
                    </div>
                    <div
                        className='w-[80%] h-[220px]
                    flex flex-col items-start
                    justify-center gap-[10px]
                    '>
                        <p

                            className='text-[25px] font-semibold'>Product Sizes</p>
                        <div
                            className='flex items-center justify-start gap-[10px]
                          flex-wrap'>
                            <div
                                className='px-[20px] py-[7px] rounded-lg
                            bg-slate-600 hover:border-[#46d1f7] border-[2px]
                            text-[18px]
                            '
                                onClick={() => { setsizes(sizes.includes('S') ? sizes.filter(item => item !== 'S') : [...sizes, 'S']) }}>S</div>
                            <div
                                className='px-[20px] py-[7px] rounded-lg
                            bg-slate-600 hover:border-[#46d1f7] border-[2px]
                            text-[18px]
                            '
                                onClick={() => { setsizes(sizes.includes('M') ? sizes.filter(item => item !== 'M') : [...sizes, 'M']) }}>M</div>
                            <div
                                className='px-[20px] py-[7px] rounded-lg
                            bg-slate-600 hover:border-[#46d1f7] border-[2px]
                            text-[18px]
                            '
                                onClick={() => { setsizes(sizes.includes('L') ? sizes.filter(item => item !== 'L') : [...sizes, 'L']) }}>L</div>
                            <div
                                className='px-[20px] py-[7px] rounded-lg
                            bg-slate-600 hover:border-[#46d1f7] border-[2px]
                            text-[18px]
                            '
                                onClick={() => { setsizes(sizes.includes('XL') ? sizes.filter(item => item !== 'XL') : [...sizes, 'XL']) }}>XL</div>
                            <div
                                className='px-[20px] py-[7px] rounded-lg
                            bg-slate-600 hover:border-[#46d1f7] border-[2px]
                            text-[18px]
                            '
                                onClick={() => { setsizes(sizes.includes('XXL') ? sizes.filter(item => item !== 'XXL') : [...sizes, 'XXL']) }}>  XXL</div>
                        </div>

                    </div>
                    <div
                        className='flex items-center gap-[10px]'>
                        <input
                            className='w-[25px] h-[25px] bg-slate-600 rounded-lg '
                            type='checkbox'
                            id="checkbox" />
                        <label
                            htmlFor='checkbox'
                            className='text-[20px] font-semibold'>Add to Bestseller</label>
                    </div>
                    <button
                        className='w-[140px] h-[50px] 
                    bg-[#65d8f7] text-black active:bg-slate-600 active:text-white 
                    flex items-center justify-center rounded-xl '
                        type='submit'>Add Product</button>
                </form>
            </div>
        </div>
    )
}

export default Add