import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Banner from './components/Banner/Banner';
import Stats from './components/Stats/Stats';
import Mainsection from './components/Main/Mainsection';
import Step from './components/Step/Step';
import Pricing from './components/Pricing/Pricing';
import Optional from './components/Optional/Optional';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import Cards from './components/Cards/Cards';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState("Products"); 

  
  useEffect(() => {
    fetch('/products/data.json')  
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error loading products:", err));
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFCFE]">
      
      <Navbar cart={cart} />
      
      <Banner />
      <Stats />
      
      
      <Mainsection active={active} setActive={setActive} cart={cart} />
      
      
      <main>
        {active === "Products" ? (
          <Cards 
            promiseData={Promise.resolve(products)} 
            cart={cart} 
            setCart={setCart} 
          />
        ) : (
          <Cart cart={cart} setCart={setCart} />
        )}
      </main>

      <Step />
      <Pricing />
      <Optional />
      <Footer />

      
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;