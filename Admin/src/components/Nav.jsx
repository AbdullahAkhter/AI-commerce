import React from 'react'
import logo from "../assets/title.png"
import axios from 'axios'
function Nav() {
const logout=async()=>{
  try {
     const result=await axios.get('http://localhost:3000/api/auth/Admin_logout',{withCredentials:true});
  console.log("The logout result is",result.data)
    
  } catch (error) {
    console.log(error)
  }
 
}
  return (
    <div
     className='w-[100vw] h-[70px] bg-[#ecfefeec] z-10 
    flex items-center justify-between px-[30px] shadow-md shadow-black fixed'>

         <div
                className='w-[20%] lg:w-[30%] flex items-center justify-start gap-[10px]'>
                <img
                  src={logo}
                  className='w-[40px]' />
                <h1
                  className='text-[25px] text-black font-sans'>E-commerce</h1>
                  
        
              </div>
              <button
                  className='text-[15px] hover:border-[2px] border-[#89daea] cursor-pointer
                  bg-[#000000ca] py-[10px] px-[20px] rounded-2xl text-white'
                  onClick={logout}>
                        Logout
                  </button>
    </div>
  )
}

export default Nav