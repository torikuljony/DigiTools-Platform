import React from "react";
import NavImage from '../../assets/DigiTools.png';
import cardImage from '../../assets/shopping-cart.png';

// এখানে { cart } রিসিভ কর
const Navbar = ({ cart }) => { 
    // useState সরিয়ে ফেললাম কারণ cart প্রপস হিসেবে আসছে
    
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
                    
                    {/* Cart Icon with Dynamic Count */}
                    <div className='h-11 w-11 flex items-center justify-center relative cursor-pointer'>
                        {cart?.length > 0 && (
                            <span className='absolute -top-1 -right-1 w-5 h-5 flex justify-center items-center bg-[#FF3980] text-white rounded-full text-[10px] font-bold border-2 border-white'>
                                {cart.length}
                            </span>
                        )}
                        <img src={cardImage} alt="cart" className="h-6 w-6" />
                    </div>

                    {/* Login */}
                    <div>
                        <h2 className='text-[#101727] hidden md:block cursor-pointer font-semibold'>Login</h2>
                    </div>

                    {/* Get Started */}
                    <div>
                        <button className='bg-[#9514FA] text-white font-semibold rounded-full px-6 py-2.5 hover:bg-[#7a0fcc] transition-all'>
                            Get Started
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar;