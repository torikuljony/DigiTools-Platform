import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ cart, setCart }) => {
  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

  const removeItem = (id) => {
    const filtered = cart.filter(item => item.id !== id);
    setCart(filtered);
    toast.error("Item removed from cart");
  }

  return (
    <div className='container mx-auto px-4 mb-20'>
      <div className='max-w-4xl mx-auto bg-white border border-gray-100 p-6 md:p-10 rounded-[32px] shadow-sm'>
        <h1 className='font-bold text-3xl text-[#101727] mb-8'>Selected Products</h1>

        {cart.length === 0 ? (
          <div className='flex flex-col items-center justify-center py-20 bg-[#F9FAFC] rounded-3xl'>
            <p className='text-lg font-medium text-[#627382]'>Your cart is empty!</p>
          </div>
        ) : (
          <div>
            <div className='space-y-4'>
              {cart.map((item) => (
                <div key={item.id} className='bg-white p-4 md:p-6 flex items-center justify-between rounded-2xl border border-gray-100 transition-all'>
                  <div className='flex items-center gap-6'>
                 
                    <div className='w-16 h-16 bg-[#F9F5FF] rounded-xl flex items-center justify-center flex-shrink-0'>
                      <img src={item.icon} alt="" className="w-10 h-10 object-contain" />
                    </div>
                   
                    <div>
                      <h2 className='text-lg md:text-xl font-bold text-[#101727]'>{item.name}</h2>
                      <p className='text-[#9514FA] font-bold'>${item.price}</p>
                    </div>
                  </div>

                 
                  <button 
                    onClick={() => removeItem(item.id)} 
                    className='text-[#FF3980] hover:text-red-700 font-bold text-sm md:text-base px-4 py-2 hover:bg-red-50 rounded-lg transition-all'
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

           
            <div className='mt-10 pt-8 border-t border-gray-100'>
              <div className='flex justify-between items-center mb-8 px-2'>
                <p className='text-xl font-medium text-[#627382]'>Total Amount</p>
                <p className='text-3xl font-black text-[#101727]'>${total.toFixed(2)}</p>
              </div>
              
              <button 
                onClick={() => { setCart([]); toast.success("Proceed to Checkout"); }} 
                className="w-full bg-[#9514FA] hover:bg-[#7a0fcc] text-white font-bold py-5 rounded-2xl text-xl shadow-lg shadow-purple-100 transition-all active:scale-[0.98]"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;