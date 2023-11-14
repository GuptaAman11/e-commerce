 import React from 'react'
 
 const Navbar = () => {
   return (
     <>
        <div className='bg-blue-500 flex flex-col lg:flex-row h-20 w-screen items-center px-8 justify-between'>
            <span className='text-bold text-3xl text-white font-serif '><a href='#'>E-Shopee</a></span>
            <div className='flex flex-row gap-5 lg:gap-10 font-serif'>
                <a href='#' className='text-bold text-xl text-white'>Home</a>
                <a href='#' className='text-bold text-xl text-white'>AboutUs</a>
                <a href='#' className='text-bold text-xl text-white'>Contact</a>
                <a href='#' className='text-bold text-xl text-white hover:text-blue-950  hover:rounded-full px-6 hover:bg-white'>Cart</a>
            </div>
        </div>
     
     </>
   )
 }
 
 export default Navbar