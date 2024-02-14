import React, { useEffect, useState } from "react";
import "../../Style/ProductView.css";
import { Link, useParams } from "react-router-dom";
import {useNavigate} from "react-router"
import { useGetProductByProductId } from "../../hooks/Product";
import { useAddProductToCart, useGetCartProduct } from "../../hooks/Cart";
const ProductView = () => {
  const {productId} = useParams()
  const {product ,getProductByproductId} = useGetProductByProductId(productId)
  const {cartProduct} = useGetCartProduct()
  const {addProductToCart} = useAddProductToCart()
  const navigate = useNavigate()

  const [cartProductId ,setCartProductId] = useState([])


  useEffect(()=>{
    getProductByproductId(productId)
  },[productId])


  
  useEffect(()=>{
    const productIds = cartProduct.map((items)=>items.productId._id)
    setCartProductId(productIds)
},[cartProduct])


  const handleOnClick = async(productId) => {
    await addProductToCart(productId)
    navigate('/getcart')
  }

  const handleGoToCart =() => {
    navigate('/getcart')
  }
  return (
  
    <div className="py-10 ">
      {product ?
      <div className="rounded overflow-hidden shadow-md hover:shadow-xl max-w-sm">
        <img
          src="https://media.istockphoto.com/id/1193750118/photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.jpg?s=612x612&w=0&k=20&c=j1SpSX7c3qzBrUT5f7HRoOfxQnPxZY_c6yb3AvXA5f8="
          alt="Shopping"
          className="w-full"
        />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 font-serif">
            Name : {product.name}
          </div>
          <div className="font-bold text-xl mb-2 font-serif">Description</div>
          <p className="text-gery-600 font-serif">{product.description}</p>
          <div className="font-bold text-xl mb-2 font-serif">
            Price : ${product.price}
          </div>
        </div>
        <div className="grid grid-flow-col gap-5 pb-2 px-6">
          <span className="rounded-full bg-gray-300 px-3 py-1 font-base mb-2 text-center font-serif">
            <Link to={`buynow/${product._id}`}>
              <button>Buy Now</button>
            </Link>
          </span>
          <span className="rounded-full bg-gray-300 px-3 py-1 font-base mb-2 text-center font-serif">
           
              {cartProductId.includes(product._id) ? (
                <div onClick={handleGoToCart}>Go to cart</div>
              ) : (
                <div onClick={() => handleOnClick(product._id)}>Add to cart</div>
              )}
          </span>
        </div>
      </div> : ""}
    </div>
    // <div className='body-container'>
    //     <div className="product-main-container">
    //         <div className="product-view-section">
    //             <div className="image-section w-1/2 bg-black">

    //             </div>
    //             <div className="text-section w-1/2">

    //             </div>
    //         </div>
    //     </div>

    // </div>
  );
};

export default ProductView;
