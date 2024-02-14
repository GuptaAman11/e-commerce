import { useEffect, useState } from "react";

export function useGetCartProduct() {
  const [cartProduct, setCartProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = localStorage.getItem('token');
        const response = await fetch(`http://localhost:8000/api/v1/carts/getcart`, {
          headers: {
            "Content-Type": "application/JSON",
            Authorization: `Bearer ${authToken}`,
          },
        });

        const responseData = await response.json();
        if (response.ok) {
          // Clear existing cart products before updating
          setCartProduct([]);

          // Check for existing data before updating the cart
          if (responseData.cartItems && responseData.cartItems.length > 0) {
            setCartProduct(responseData.cartItems);
            console.log('this is the get cart', responseData.cartItems.length);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return { cartProduct };
}


export function useAddProductToCart() {
  const addProductToCart = async (productId) => {
    try {
      const authToken = localStorage.getItem('token');
      const response = await fetch(`http://localhost:8000/api/v1/carts/createCart/${productId}`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/JSON",
          Authorization: `Bearer ${authToken}`,
        },
        // body: JSON.stringify({ quantity: quantity })
      });

      // const responseData = await response.json();
      if (response.ok) {
        console.log('Product added to cart successfully');
        // Handle success response (if needed)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { addProductToCart };
}

export function useUpdateProductIncart() {
  const updateProductInCart = async(productId , quantity) => {
    try {
      const authToken = localStorage.getItem('token');
      const response = await fetch(`http://localhost:8000/api/v1/carts/updateCart/${productId}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/JSON",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({ quantity: quantity })
      });

      if (response.ok) {
        console.log('Product updated sucessfully to cart successfully');
      }
    } catch (error) {
      console.log(error)
    }
  }
  return {updateProductInCart}
} 