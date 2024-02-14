import React from 'react'
import "../../Style/ImageSlider.css"

const ImageSlider = () => {
  return (
    <div>
      <div className="image-slider-wrapper">
        <div className="slider">
            <img src="https://tse3.mm.bing.net/th?id=OIP.4MvhrgxX9WQXW0LtH51zRAHaEK&pid=Api&P=0&h=180" alt="" id='img1'/>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/a984c1d296f82041.jpg?q=20" alt=""  id='img2'/>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/830b0b3bff28e292.jpg?q=20" alt="" id='img3'/>

        </div>
        <div className="slider-nav">
            <a href="#img1"></a>
            <a href="#img2"></a>
            <a href="#img3"></a>

        </div>
      </div>
    </div>
  )
}

export default ImageSlider
