import {  useState } from "react";

export function useAddProduct() {
    const addProduct = async(name ,description ,price ,cat) => {
        try {
          const authToken = localStorage.getItem('token');
          const response = await fetch("http://localhost:8000/api/v1/products/addProduct", {
              headers: {
                "Content-Type": "application/JSON",
                Authorization: `Bearer ${authToken}`,

              },
              method: "POST",
              body: JSON.stringify({
                name: name,
                description: description,
                price : price ,
                category : cat

              }),
            });
            const responseData = await response.json();
            if (response.ok) {
              console.log(responseData);
            }
      
          } catch (error) {
              console.log(error)
          }
        };
    

    return {addProduct}
}

export function useGetProductByProductId() {
  const [product , setProduct] = useState()
  const getProductByproductId = async(productId)=>{
      try {
        const authToken = localStorage.getItem('token');



        const response = await fetch(`http://localhost:8000/api/v1/products/getProductByproductId/${productId}` ,{
          headers: {
            "Content-Type": "application/JSON",
            Authorization: `Bearer ${authToken}`,

          },
          method : 'GET'
 
        })
        const responseData = await response.json()
        if (response.ok) {
          setProduct(responseData.product)
          console.log("response Data",responseData.product)
        }
      } catch (error) {
        console.log(error)
      }
    
  }
  return {product ,getProductByproductId}
}