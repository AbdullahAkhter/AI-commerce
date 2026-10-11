import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Sidebar from '../components/sidebar'
import axios from 'axios'

function List() {
    const [list,setlist]=useState([])
    const[isremove,setremove]=useState(null)
    const fetch=async()=>{
        try {
            const response=await axios.get("http://localhost:3000/api/product/list_of_products");
            setlist(response.data);
            console.log("The result is",response.data)
        } catch (error) {
            console.log("The error is ",error)
        }
    }
    const handleRemove=async(id)=>{
        try {
            const response=await axios.get(`http://localhost:3000/api/product/deletion_of_products/${id}`)
            setremove(response.data);
            console.log("The removed item is",response.data)
        } catch (error) {
            console.log("The error is",error)
        }
    }
   
    useEffect(()=>{
        fetch();
    },[list,isremove])
  return (
    <div
     className='w-[100vw] min-h-[100vh]  bg-gradient-to-l from-[#141414] to-[#0c2025]
     text-white overflow-y-auto relative '>
        <Nav/>
        <Sidebar/>
        <div
        className='absolute top-0 flex flex-col gap-[30px]
        py-[100px] px-[300px] w-[100%]'>
            <p
            className='text-[25px] font-semi-bold'>All listed Products</p>
            {
                 list?.length>0?(
                    list.map((element,index)=>(
                        <div
                        className='w-[90%] h-[90px] bg-slate-600
                        flex gap-[5px]'
                        key={index}>
                            <img
                            className='w-[20%] h-[100%] object-contain'
                            src={element.image1}/>
                            <div
                            className='flex flex-col gap-[5px]'>
                                <p
                                className='text-[20px]'>{element.name}</p>
                                 <p
                                className='text-[10px]'>{element.category}</p>
                                 <p
                                className='text-[10px]'>${element.price}</p>
                            </div>
                            <div
                            className="flex items-center justify-center">
                           <span
                           className='w-[30px] h-[30px] hover:bg-red-300 hover:text-black flex items-center
                           justify-center rounded-md'
                           onClick={()=>{handleRemove(element._id)
                            setremove(null)
                           }}>X</span></div>

                        </div>
                    ))
                 ):( <p
            className='text-[25px] font-semi-bold'>No Product</p>)
            }

        </div>
     </div>
  )
}

export default List