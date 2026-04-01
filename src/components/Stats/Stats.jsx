import React from 'react';

const Stats = () => {
    return (
        <div className='bg-[#9514FA] py-16'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 divide-x-2 divide-gray-400'>
                <div className='flex justify-center items-center text-center py-6'>
                    <div>
                        <h1 className='text-white text-6xl font-extrabold'>50K+</h1>
                        <p className='text-2xl font-medium mt-3 text-white'>Active Users</p>
                    </div>
                </div>
                <div className='flex justify-center items-center text-center py-6'>
                    <div>
                        <h1 className='text-white text-6xl font-extrabold'>200+</h1>
                        <p className='text-2xl font-medium mt-3 text-white'>Premium Tools</p>
                    </div>
                </div>
                <div className='flex justify-center items-center text-center py-6'>
                    <div>
                        <h1 className='text-white text-6xl font-extrabold'>4.9</h1>
                        <p className='text-2xl font-medium mt-3 text-white'>Rating</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;