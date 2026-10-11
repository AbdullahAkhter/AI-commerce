import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate=useNavigate();
  return (
    <div
    className='w-[18%] h-[100vh] border-r-[1px] py-[60px] '>
        <div
        className='flex flex-col gap-4 pt-[40px] pl-[20%]
        text-[15px]'>
            <div
            className='flex
            justify-center items-center md:justify-start gap-3 border border-gray-200 border-r-0
            px-3 py-2 cursor-pointer hover:bg-[#2c7b89]'
            onClick={()=>navigate('/add')}>
                <IoIosAddCircleOutline
                size={20} />
                <p
                className='hidden  lg:block'>Add items</p>
                
            </div>
             <div
            className='flex
            justify-center items-center md:justify-start gap-3 border border-gray-200 border-r-0
            px-3 py-2 cursor-pointer hover:bg-[#2c7b89]'>
                <IoIosAddCircleOutline
                size={20} />
                <p
                className='hidden  lg:block'>List items</p>
                
            </div>
             <div
            className='flex
            justify-center items-center md:justify-start gap-3 border border-gray-200 border-r-0
            px-3 py-2 cursor-pointer hover:bg-[#2c7b89]'>
                <IoIosAddCircleOutline
                size={20} />
                <p
                className='hidden  lg:block'>View orders</p>
                
            </div>

        </div>
    </div>
  )
}

export default Sidebar