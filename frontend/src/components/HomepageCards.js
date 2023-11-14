import React from 'react'

const HomepageCards = () => {
  return (
    <>
        {/* parant div */}
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-3 justify-items-center mt-20'>
            {/* 1st card */}
            <div className='py-10 '>
                <div className='rounded overflow-hidden shadow-md hover:shadow-xl max-w-sm'>
                    <img src='https://media.istockphoto.com/id/1193750118/photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.jpg?s=612x612&w=0&k=20&c=j1SpSX7c3qzBrUT5f7HRoOfxQnPxZY_c6yb3AvXA5f8=' alt='Shopping' className='w-full'/>
                        <div className='px-6 py-4'>
                            
                            <div className='font-bold text-xl mb-2 font-serif'>Description</div>
                            <p className='text-gery-600 font-serif'>
                                Introducing SmartCart Pro, your go-to solution for a seamless and feature-rich online shopping experience.  
                            </p>
                            <div className='font-bold text-xl mb-2 font-serif'>Price : $ 25</div>

                            
                        </div>
                            <div className='grid grid-flow-col gap-5 pb-2 px-6'>
                                <span className='rounded-full bg-gray-300 px-3 py-1 font-base mb-2 text-center font-serif'>Buy Now</span>
                                <span className='rounded-full bg-gray-300 px-3 py-1 font-base mb-2 text-center font-serif'>Add To Cart</span>
                            </div>
                </div>
            </div>

            {/* 2st card */}
            <div className='py-10'>
                <div className='rounded overflow-hidden shadow-lg hover:shadow-xl max-w-sm'>
                    <img src='https://media.istockphoto.com/id/1299088544/photo/full-length-photo-of-adorable-young-lady-dressed-casual-clothes-dancing-holding-colorful.jpg?s=612x612&w=0&k=20&c=BUtZAS8w0_mBkDCAdcOuO-jjB4_CLGvhhzRriyiRnqQ=' alt='Shopping' className='w-full'/>
                        <div className='px-6 py-4'>
                            
                            <div className='font-bold text-xl mb-2 font-serif'>Description</div>
                            <p className='text-gery-600 font-serif'>
                                Introducing SmartCart Pro, your go-to solution for a seamless and feature-rich online shopping experience.  
                            </p>
                            <div className='font-bold text-xl mb-2 font-serif'>Price : $ 40</div>

                            
                        </div>
                            <div className='grid grid-flow-col gap-5 pb-2 px-6'>
                                <span className='rounded-full bg-gray-300 px-3 py-1 font-base mb-2 text-center font-serif'>Buy Now</span>
                                <span className='rounded-full bg-gray-300 px-3 py-1 font-base mb-2 text-center font-serif'>Add To Cart</span>
                            </div>
                </div>
            </div>

            {/* 3st card */}
            <div className='py-10'>
                <div className='rounded overflow-hidden shadow-lg hover:shadow-xl max-w-sm'>
                    <img src='https://media.istockphoto.com/id/1204923574/photo/woman-carrying-shopping-bags-with-credit-card-and-mobile-phone-in-hands.jpg?s=612x612&w=0&k=20&c=j1c4o7w6E0P0q1Yd7ciMZo8kZPIYM9gchdGNTFGK4IA=' alt='Shopping' className='w-full'/>
                        <div className='px-6 py-4'>
                            
                            <div className='font-bold text-xl mb-2 font-serif'>Description</div>
                            <p className='text-gery-600 font-serif'>
                                Introducing SmartCart Pro, your go-to solution for a seamless and feature-rich online shopping experience.  
                            </p>
                            <div className='font-bold text-xl mb-2 font-serif'>Price : $ 30</div>

                            
                        </div>
                            <div className='grid grid-flow-col gap-5 pb-2 px-6'>
                                <span className='rounded-full bg-gray-300 px-3 py-1 font-base mb-2 text-center font-serif'>Buy Now</span>
                                <span className='rounded-full bg-gray-300 px-3 py-1 font-base mb-2 text-center font-serif'>Add To Cart</span>
                            </div>
                </div>
            </div>

        </div>
    
    
    </>
  )
}

export default HomepageCards