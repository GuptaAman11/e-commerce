import React, { useEffect, useState } from 'react'
 

const Homepagecards = () => {


    

     const [data, setData] = useState([]);

     useEffect(() => {
       const fetchData = async () => {
         try {
            
           const response = await fetch(
             "http://localhost:8000/api/v1/products/getAllProducts",
             {
               method: "GET",
               headers: {
                  
                 "Content-Type": "application/json",
               },
             }
           );

           if (!response.ok) {
             throw new Error(`HTTP error! Status: ${response.status}`);
           }

           const jsonData = await response.json();
           setData(jsonData);
           console.log("products>>>>",jsonData);
         } catch (error) {
           console.error("Error fetching data:", error);
         }
       };

       fetchData();
       
     }, []);

  return (
    <>
      {/* parant div */}
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-3 justify-items-center mt-20">
        {/* 1st card */}

        {data.map((data) => (
          <div className="py-10 ">
            <div className="rounded overflow-hidden shadow-md hover:shadow-xl max-w-sm">
              <img
                src="https://media.istockphoto.com/id/1193750118/photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.jpg?s=612x612&w=0&k=20&c=j1SpSX7c3qzBrUT5f7HRoOfxQnPxZY_c6yb3AvXA5f8="
                alt="Shopping"
                className="w-full"
              />

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 font-serif">
                  Name : {data.name}
                </div>
                <div className="font-bold text-xl mb-2 font-serif">
                  Description
                </div>
                <p className="text-gery-600 font-serif">{data.description}</p>
                <div className="font-bold text-xl mb-2 font-serif">
                  Price : ${data.price}
                </div>
              </div>
              <div className="grid grid-flow-col gap-5 pb-2 px-6">
                <span className="rounded-full bg-gray-300 px-3 py-1 font-base mb-2 text-center font-serif">
                  <a href="#">Buy Now</a>
                </span>
                <span className="rounded-full bg-gray-300 px-3 py-1 font-base mb-2 text-center font-serif">
                  <a href="#">Add to Cart</a>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Homepagecards