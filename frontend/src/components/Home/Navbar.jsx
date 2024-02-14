import React from 'react'
import { Link } from 'react-router-dom'
import '../../Style/Navber.css'
 
const Navbar = () => {
  return (
    <div className='Navbar'>
    <link rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" />
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOYo0sFIC899TtKVeUXKCJaJ-AAuooFPxKGg&usqp=CAU" 
        alt="" className="logoImage" />
        <div className="name">SHOPEES</div>
        <div className='searchBox'>
          <form>
            <div>
              <input type='textarea' placeholder='Search product of all brands ' />

            </div>
          </form>
          <div className="searchicon"><i class='bx bx-search' ></i></div>
        </div>
      </div>

      <div className="rightend">
        <div className="cart"><i class='bx bx-cart-alt' ></i></div>
        <div className="wishlist"><i class='bx bxs-heart' ></i></div>
        <div className="account"><i class='bx bxs-user-circle' ></i>
        <div className='name2'>Aman</div></div>
      </div>

    </div>
  )
}

export default Navbar