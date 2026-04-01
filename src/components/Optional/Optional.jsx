import React from 'react';

const Optional = () => {
    return (
        <div className='bg-[#4F39F6]'>
            <div className='container mx-auto py-32'>
                <h1 className='mb-4 text-white font-extrabold text-2xl md:text-3xl lg:text-4xl text-center'>Ready to Transform Your Workflow?</h1>
                <p className='mb-10 text-white text-center'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
                <div className='flex justify-center items-center'>
                    <button className='btn bg-white text-[#4F39F6] font-semibold rounded-full'>Explore Products</button>
                    <button className='btn bg-transparent border-white ml-4 text-white font-semibold rounded-full'>View Pricing</button>
                </div>
                <p className='mt-4 text-center text-white'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Optional;