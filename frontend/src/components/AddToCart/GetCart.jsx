import React, { useEffect, useState } from 'react'
import { useGetCartProduct } from '../../hooks/Cart'
import Cart from './Cart'

const GetCart = () => {
    const {cartProduct } = useGetCartProduct()


  return (
    <div>
        
           
        {
            cartProduct.map((item , index)=>(
                <div key={index}> 
                  <Cart item={item}/>
                </div>
            ))
        }
        <div className='font-bold text-center mt-7 text-2xl'>Total price : 2020299</div>
    </div>
  )
}

export default GetCart
