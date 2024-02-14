import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({data}) => {


  return (
    <div>
      <div className="main-container">
      <div className="card">
      <Link to={`/productview/${data._id}`}>

      <div className="image-section">
        <img src="https://tse3.mm.bing.net/th?id=OIP.27Bk7A7H_KfWrbrD6TA2FQHaE8&pid=Api&P=0&h=180" alt=""  className="photo"/>
      </div>
      </Link>
      <div className="text-section">
        <Link to={`/productview/${data._id}`}>
        <div className="pb-[5px]">
        <div className="name">
          {data.name}
        </div>
        <div className="description">
          {data.description}
        </div>
        </div>
        </Link>
        <div className="ratingbox">
          <div className="rating">
            <span>1.1</span>
            <i class='bx bxs-star'></i>
          </div>
          <div className="rated-person-no">(5,555)</div>
        </div>
        <div className="price-section">
          <div className="discount-price">₹{data.price}</div>
          <div className="mrp-price">5,000</div>
          <div className="off-percent">60% off</div>
        </div>
      </div>

    </div>
    </div>
    </div>
  )
}

export default ProductCard
