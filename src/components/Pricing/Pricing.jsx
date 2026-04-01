import React from 'react';

const Pricing = () => {
    return (
        <div className='container mx-auto mt-28 mb-28 p-4'>
            <h1 className='text-2xl md:text-3xl lg:text-5xl font-extrabold text-[#101727] text-center mb-4'>Simple, Transparent Pricing</h1>
            <p className='mb-10 text-[#627382] text-center'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body">
                        <div>
                            <h2 className="text-3xl font-bold text-[#101727]">Starter</h2>
                            <span className="text-xl text-[#627382]">Perfect for getting started</span>
                        </div>
                        <div>
                            <h1><span className='font-bold text-[#101727] text-[40px]'>$0</span><span className='text-[#627382] text-xl'>/month</span></h1>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Basic templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Community support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>capabilities
                                <span>1 project per month</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-primary btn-block bg-[#9514FA]">Get Started Free</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-[#9514FA] shadow-sm">
                    <div className='flex justify-center items-center'>
                        <span className="badge badge-xl bg-[#FEF3C6] text-[#BB4D00] badge-warning">Most Popular</span>
                    </div>
                    <div className="card-body text-white">
                        <div>
                            <h2 className="text-3xl font-bold text-white">Pro</h2>
                            <span className="text-xl text-gray-300">Best for professionals</span>
                        </div>
                        <div>
                            <h1><span className='font-bold text-white text-[40px]'>$29</span><span className='text-white text-xl'>/month</span></h1>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to all premium tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Priority support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>capabilities
                                <span>Unlimited projects</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>capabilities
                                <span>Cloud sync</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>capabilities
                                <span>Advanced analytics</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-primary btn-block bg-white text-[#9514FA]">Get Started Free</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body">
                        <div>
                            <h2 className="text-3xl font-bold text-[#101727]">Enterprise</h2>
                            <span className="text-xl text-[#627382]">For teams and businesses</span>
                        </div>
                        <div>
                            <h1><span className='font-bold text-[#101727] text-[40px]'>$99</span><span className='text-[#627382] text-xl'>/month</span></h1>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Everything in Pro</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Team collaboration</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom integrations</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Dedicated support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>SLA guarantee</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom branding</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-primary btn-block bg-[#9514FA]">Get Started Free</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;