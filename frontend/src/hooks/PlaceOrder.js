
export function useBuyproduct () {
    const buyProducts = async(productId ,buyProduct) => {
        try {
            const authToken = localStorage.getItem('token')
            const response = await fetch(`http://localhost:8000/api/v1/order/createOrder/${productId}` ,{
                headers: {
                  "Content-Type": "application/JSON",
                  Authorization: `Bearer ${authToken}`,
      
                },
                method : 'POST' ,
                body: JSON.stringify({
                    totalPrice: buyProduct.totalPrice,
                    qty: Number(buyProduct.qty),
                  }),
              })  
              const responseData = await response.json()
              if (response.ok) {
                console.log("this is buyproduct" , responseData)
              }      
            } catch (error) {
            console.log(error)
        }
    }
    return {buyProducts}
}