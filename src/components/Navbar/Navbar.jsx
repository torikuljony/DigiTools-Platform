
import React, { useState } from "react";
import NavImage from '../../assets/DigiTools.png';
import cardImage from '../../assets/shopping-cart.png';

const Navbar = () => {
    const [cart, setCart] = useState([]); 

    return (
        <div className='bg-white shadow-md px-2 py-6 md:p-4 lg:p-8 xl:p-0'>
            <div className='container mx-auto flex justify-between items-center sm:p-4'>

                {/* Logo */}
                <div>
                    <img src={NavImage} alt="Logo" className="h-10" />
                </div>

                {/* Menu */}
                <div className='hidden lg:block'>
                    <ul className='flex gap-8 text-[#101727] font-medium'>
                        <li>Products</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Testimonials</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                {/* Right section */}
                <div className='flex justify-center items-center gap-4'>
                    
                    {/* Cart */}
                    <div className='h-11 w-11 flex items-center justify-center relative'>
                        {cart.length > 0 && (
                            <p className='absolute -top-2 -right-2 w-6 h-6 flex justify-center items-center bg-red-500 text-white rounded-full text-sm'>
                                {cart.length}
                            </p>
                        )}
                        <img src={cardImage} alt="cart" className="h-6 w-6" />
                    </div>

                    {/* Login */}
                    <div>
                        <h2 className='text-[#101727] hidden md:block cursor-pointer'>Login</h2>
                    </div>

                    {/* Get Started */}
                    <div>
                        <button className='btn bg-[#9514FA] text-white font-semibold rounded-full px-4 py-2'>
                            Get Started
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar;