import React from 'react';
import CircleImage from '../../assets/Group 5.png';
import playImage from '../../assets/Play.png';
import bannerImage from '../../assets/banner.png';

const Banner = () => {
    return (
        <div className='bg-white py-21.25 mt-0.5 p-5'>
            <div className='container mx-auto flex justify-between items-center space-y-4 flex-col md:flex-col lg:flex-row md:space-y-4'>
                
                <div>
                    <div className="flex items-center justify-center gap-1.5 w-73.5 rounded-full py-2 px-4 bg-[#E1E7FF]">
                        <img src={CircleImage} alt="" />
                        <p className='text-[#9514FA]'>New: AI-Powered Tools Available</p>
                    </div>

                    <h1 className='text-3xl md:text-4xl xl:text-7xl font-extrabold text-[#101727] mt-4'>
                        Supercharge Your <br />Digital Workflow
                    </h1>

                    <p className='text-[#627382] mt-4 mb-8'>
                        Access premium AI tools, design assets, templates, and productivity <br />
                        software—all in one place. Start creating faster today. <br />
                        Explore Products
                    </p>

                    <div className='flex lg:flex-row'>
                        <button className='btn bg-[#9514FA] text-white font-semibold rounded-full'>
                            Explore Products
                        </button>

                        <button className='btn bg-transparent border-[#9514FA] ml-4 text-[#9514FA] font-semibold rounded-full flex items-center gap-2'>
                            <img src={playImage} alt="" />
                            <p>Watch Demo</p>
                        </button>
                    </div>
                </div>

                <div>
                    <img src={bannerImage} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Banner;