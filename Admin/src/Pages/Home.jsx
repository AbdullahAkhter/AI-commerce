import React from 'react'
import Nav from '../components/Nav'
import Sidebar from '../components/sidebar'

function Home() {
  return (
    <div
    className='w-[100vw] h-[50vh] md:h-[100vh]  lg-[100vh]  bg-gradient-to-l from-[#141414] to-[#0c2025] text-white
    flex items-center justify-start'>
      <Nav/>
      <Sidebar/>
    </div>
  )
}

export default Home