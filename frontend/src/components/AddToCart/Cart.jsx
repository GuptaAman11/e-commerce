import React, {  useState } from "react";
import { useUpdateProductIncart } from "../../hooks/Cart";

const Cart = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const {updateProductInCart} =useUpdateProductIncart()
  
  const handleOnClick = async(productId) => {
    if (quantity>1) {
      const newQuantity = quantity - 1
      setQuantity(newQuantity)
      await updateProductInCart(productId ,newQuantity)
      console.log(productId ,"this is the productid")
    
    }
  }

  const handleClick =async(productId)=>{
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
    await updateProductInCart(productId ,newQuantity)
    console.log(productId ,"this is the productid")


  }
  
  return (
    <div className="flex justify-center mt-9">
      <div className=" flex flex-col ">
        <div className="flex space-x-2 h-64 w-[800px]  rounded-md shadow-xl">
          <div>
            <img
              src="https://i.pinimg.com/564x/2d/f9/0d/2df90d4cd9fcb23dfd9bc7761675b12b.jpg"
              alt="not found"
              className="h-full object-cover"
            />
          </div>

          <div className=" flex flex-col justify-center gap-3 px-8 ">
            <label className="text-lg">{item.productId.name}</label>
            <label className="text-lg">{item.productId.price * quantity}</label>
          </div>

          <div className="flex items-center">
            <button
              className="px-4 py-2 bg-blue-500  text-black rounded-md"
              onClick={()=>handleOnClick(item.productId._id)}
            >
              -
            </button>
            <div className="px-4 py-2">{quantity}</div>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={()=>handleClick(item.productId._id)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
