import React from 'react';
import instagram from '../../assets/Instagram.png';
import facebook from '../../assets/Facebook.png';
import twitter from '../../assets/Twitter.png';


const Footer = () => {
    return (
        <div className='bg-neutral'>
            <div className='container mx-auto'>
                <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content px-10 pt-34 mb-10">
                    <nav>
                        <h1 className='text-white font-bold text-4xl'>DigiTools</h1>
                        <p className='mt-4'>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Product</h6>
                        <a className="link link-hover">Features</a>
                        <a className="link link-hover">Pricing</a>
                        <a className="link link-hover">Templates</a>
                        <a className="link link-hover">Integrations</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Blog</a>
                        <a className="link link-hover">Careers</a>
                        <a className="link link-hover">Press</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Resources</h6>
                        <a className="link link-hover">Documentation</a>
                        <a className="link link-hover">Help Center</a>
                        <a className="link link-hover">Community</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                    <nav>
                        <h1 className="footer-title">Socia l Links</h1>
                        <div className='flex justify-between gap-3'>
                            <img src={instagram} className='w-10 h-10' alt="" />
                            <img src={facebook} className='w-10 h-10' alt="" />
                            <img src={twitter} className='w-10 h-10' alt="" />
                        </div>
                    </nav>
                </footer>
                <div className='p-10'>
                    <hr className='border-gray-200 container mx-auto' />
                    <div className='pt-7 pb-7 flex justify-between container mx-auto text-white flex-col md:flex-row'>
                        <p className='link link-hover'>© 2026 Digitools. All rights reserved.</p>
                        <ul className='flex justify-between gap-4 flex-col md:flex-row'>
                            <li className='link link-hover'>Privacy Policy</li>
                            <li className='link link-hover'>Terms of Service</li>
                            <li className='link link-hover'>Cookies</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;