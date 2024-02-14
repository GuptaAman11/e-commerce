import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductByProductId } from '../../hooks/Product'
import { useBuyproduct } from '../../hooks/PlaceOrder'

const BuyNowPage = () => {
    const {buyProducts} = useBuyproduct()
    const {productId} = useParams()
    const {product   , getProductByproductId} = useGetProductByProductId(productId)
    const [buyProduct ,setBuyProduct] = useState({
        productPrice : '' ,
        qty : '' ,
        shippingPrice : '' ,
        taxPrice : '' ,
        totalPrice : '' 
    })
    useEffect(()=>{
        getProductByproductId(productId)
    } ,[productId])
    const handleOnChange = (e) => {
        const {name ,value} = e.target 
        setBuyProduct({
            ...buyProduct ,
            [name] : value
        })

    }
    const handleOnSubmit = async(e) => {
        e.preventDefault()
        console.log("this is the qty and totalprice" , buyProduct.qty ,buyProduct.productPrice)
        await buyProducts(productId , buyProduct)
        
    }
  return (
    <div>
        {
            product ? <div> 
               <form onSubmit={handleOnSubmit}>
               <div> {product.name} : <input type='text' onChange={handleOnChange} name='productPrice'  
                    value={product.price }/>

                     </div>
                Shipping Price :{
                    product.price > 500 ?<input type='text' value={0} /> : <input type='text' value={50}/> 
                }
                GST Tax :<input type='text' value={(product.price)*18/100}/>
                    
                    <div className='border-black'>qty :<input type='text' onChange={handleOnChange} name='qty' /></div>
                    <button type='submit'>place order</button>
               </form>
            </div>

             : ("")
        }
    </div>
  )
}

export default BuyNowPage
