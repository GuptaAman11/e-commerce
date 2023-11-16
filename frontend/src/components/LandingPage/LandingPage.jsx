import React from "react";
import  {Link}  from "react-router-dom";

const LandingPage = () => {
    return (
        <>
            <div className="bg-purple-300 flex flex-col lg:flex-row justify-between px-8 h-20 w-screen items-center">
                <Link to="/homePage" className=" text-2xl font-serif">Welcome To Ecommerce</Link>
                <ul className="links">
                    {/* <!-- <li>Home</li>
                    <li>About Us</li> --> */}

                <Link to="/signUp"> <li className="text-2xl font-serif">Sign-Up</li> </Link>
                </ul>
            </div>
            {/* </header> */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
                 
                    <div className="flex flex-col justify-center px-6">
                        <h1 className="text-xl font-serif">Your One-Stop Shop for All Things Awesome</h1>
                        <p className="text-xl font-serif">
                        Discover a world of awesomeness at our e-commerce hub—Your
                        One-Stop Shop. From trend-setting fashion to innovative gadgets,
                        find top-quality products with ease. Enjoy competitive prices and
                        stellar customer support for a seamless shopping experience.
                        Elevate your style, simplify your life—all in one place.
                        </p>
                        <Link to="/signUp"><button className="font-serif bg-purple-300 px-5 mt-5 rounded-full py-2">Get Started</button></Link>
                    </div>
                   
                    <div className="image">
                        <img src="https://i.postimg.cc/65QxYYzh/001234.png" />
                    </div>
            </div>
                
                
        
        </>
    )

}

export default LandingPage;