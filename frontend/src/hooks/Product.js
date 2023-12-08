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