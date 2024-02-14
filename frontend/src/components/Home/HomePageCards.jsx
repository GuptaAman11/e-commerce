import React, { useEffect, useState } from "react";

import ImageSlider from "./ImageSlider";
import '../../Style/ProductCard.css'
import ProductCard from "./ProductCard";

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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

 
  

  return (

    <div className="flex flex-wrap ">
      <div>
      <ImageSlider />

      </div>
      <div className="flex flex-wrap">
  {
    data.map((data, index) => (
            <ProductCard key={index} data={data} className="flex-grow-0 flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4" />
    ))
  }
</div>
    </div>

   
  );
};

export default Homepagecards;
