import React, { useEffect, useState } from 'react';

const Cards = ({ promiseData, cart, setCart }) => {
  const [allCard, setAllCard] = useState([]);

  useEffect(() => {
    // ফিগমার একদম হুবহু টেক্সট কন্টেন্ট
    const figmaContent = [
      {
        id: 1,
        name: "Check Email",
        price: "250",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        icon: "/products/email.png",
        features: ["100% Secure Access", "Faster Email Delivery", "24/7 Expert Support"]
      },
      {
        id: 2,
        name: "Stock Market",
        price: "450",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        icon: "/products/stock.png",
        features: ["Real-time Analysis", "Market Alerts", "Expert Stock Insights"]
      },
      {
        id: 3,
        name: "AI Assistant",
        price: "850",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        icon: "/products/ai.png",
        features: ["Smart Automation", "Custom Workflows", "Priority AI Processing"]
      }
    ];

    promiseData.then(data => {
      // JSON এ ডেটা থাকলে সেটা দেখাবে, না থাকলে এই ফিগমা কন্টেন্ট দেখাবে
      if (data && data.length > 0) {
        setAllCard(data);
      } else {
        setAllCard(figmaContent);
      }
    });
  }, [promiseData]);

  const addToCart = (item) => {
    const isExist = cart.find(p => p.id === item.id);
    if (!isExist) {
      setCart(prev => [...prev, item]);
    }
  };

  return (
    <div className='container mx-auto px-4 mb-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {allCard.map(item => (
          <div key={item.id} className='bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm flex flex-col hover:shadow-xl transition-all duration-300'>
            
            {/* ফিগমা আইকন বক্স */}
            <div className='w-16 h-16 bg-[#F9F5FF] rounded-2xl flex items-center justify-center mb-8'>
              <img src={item.icon} alt={item.name} className="w-10 h-10 object-contain" />
            </div>

            {/* টাইটেল ও ডেসক্রিপশন */}
            <h1 className='text-[28px] font-bold text-[#101727] mb-4'>{item.name}</h1>
            <p className='text-[#627382] text-[16px] leading-[26px] mb-8 flex-grow'>
              {item.description}
            </p>
            
            {/* প্রাইস সেকশন */}
            <div className='mb-8'>
              <span className='text-4xl font-extrabold text-[#101727]'>${item.price}</span>
              <span className='text-[#627382] font-semibold text-lg'> / Month</span>
            </div>

            {/* ফিগমা ফিচার লিস্ট (সবুজ টিক মার্ক সহ) */}
            <ul className='space-y-4 mb-10'>
              {(item.features || []).map((feature, idx) => (
                <li key={idx} className='flex items-center gap-4 text-[#101727] font-semibold text-[15px]'>
                  <div className='w-5 h-5 rounded-full bg-[#DCFCE7] flex items-center justify-center flex-shrink-0'>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            {/* ফিগমা বাটন ডিজাইন */}
            <button 
              onClick={() => addToCart(item)} 
              className='w-full bg-[#9514FA] hover:bg-[#7a0fcc] text-white font-bold py-5 rounded-2xl text-lg shadow-lg shadow-purple-50 transition-all active:scale-95'
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;