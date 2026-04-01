import React from 'react';

const Mainsection = ({ active, setActive, cart }) => {
    return (
        <div className='mt-24 container mx-auto mb-16 px-4'>
          
            <div className="text-center mb-10">
                <h1 className='font-extrabold text-[#101727] text-3xl md:text-5xl mb-5'>
                    Premium Digital Tools
                </h1>
                <p className='text-[#627382] max-w-2xl mx-auto text-base md:text-lg leading-relaxed'>
                    Choose from our curated collection of premium digital products designed 
                    to boost your productivity and creativity.
                </p>
            </div>

           
            <div className='flex justify-center'>
                <div className='inline-flex p-1.5 bg-white border border-gray-100 rounded-[24px] shadow-sm'>
                    <button 
                        onClick={() => setActive("Products")}
                        className={`px-8 py-3.5 rounded-[20px] font-bold text-[16px] transition-all duration-300 ${
                            active === "Products" 
                            ? "bg-[#9514FA] text-white shadow-md" 
                            : "bg-transparent text-[#627382] hover:bg-gray-50"
                        }`}
                    >
                        Products
                    </button>

                    <button 
                        onClick={() => setActive("Cart")}
                        className={`px-8 py-3.5 rounded-[20px] font-bold text-[16px] transition-all duration-300 flex items-center gap-2 ${
                            active === "Cart" 
                            ? "bg-[#9514FA] text-white shadow-md" 
                            : "bg-transparent text-[#627382] hover:bg-gray-50"
                        }`}
                    >
                        Cart
                        <span className={`flex items-center justify-center min-w-[22px] h-[22px] px-1.5 rounded-full text-[12px] font-black ${
                            active === "Cart" 
                            ? "bg-white text-[#9514FA]" 
                            : "bg-[#F9F5FF] text-[#9514FA]"
                        }`}>
                            {cart?.length || 0}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Mainsection;