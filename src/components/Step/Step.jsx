import React from 'react';
import userImage from '../../assets/user.png';
import ImageTwo from '../../assets/package.png';
import rocket from '../../assets/rocket.png';

const steps = [
  { id: 1, title: 'Create Account', desc: 'Sign up for free in seconds. No credit card required to get started.', image: userImage },
  { id: 2, title: 'Choose Products', desc: 'Browse our catalog and select the tools that fit your needs.', image: ImageTwo },
  { id: 3, title: 'Start Creating', desc: 'Download and start using your premium tools immediately.', image: rocket },
];

const Step = () => {
  return (
    <div className='bg-[#F9FAFC] py-32 px-4 md:px-6 lg:px-8 xl:px-12'>
      <div className='container mx-auto'>
        <h1 className='text-[#101727] text-center font-extrabold text-5xl'>Get Started in 3 Steps</h1>
        <p className='mt-4 text-[#627382] text-center mb-10'>Start using premium digital tools in minutes, not hours.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
          {steps.map((step) => (
            <div key={step.id} className='bg-white rounded-lg p-6 pb-20'>
              <div className='flex justify-end'>
                <div className='bg-[#9514FA] p-3 rounded-full text-white w-10 h-10 flex items-center justify-center font-bold'>{`0${step.id}`}</div>
              </div>
              <div className='flex justify-center items-center mt-4'>
                <div className='w-24 h-24 bg-gray-300 rounded-full flex justify-center items-center overflow-hidden'>
                  <img src={step.image} className='object-cover w-full h-full' alt={step.title} />
                </div>
              </div>
              <h1 className='text-center mt-4 font-bold text-2xl text-[#101727]'>{step.title}</h1>
              <p className='mt-4 text-[#627382] text-center'>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step;