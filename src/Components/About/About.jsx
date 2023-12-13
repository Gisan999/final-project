import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="bg-black bg-opacity-90">
            <div className="max-w-screen-xl mx-auto  py-20">
                <div className="px-8 lg:px-0">
                    <div>
                        <p className="text-lg font-semibold text-blue-500 pb-3 pt-6">----- BLUEHARB -----</p>
                        <h2 className="uppercase text-3xl md:text-5xl tracking-wider font-extrabold font-mono text-white pb-12 ">SHORTLY ABOUT OUR COMPANY</h2>
                    </div>
                    <div className="grid grid-cols-1  lg:grid-cols-6 gap-8">
                        <div className="lg:col-span-2 ">
                            <img className="w-full h-full" src="https://images.pexels.com/photos/5324941/pexels-photo-5324941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                        <div className="lg:col-span-4 ">
                            <h2 className="text-2xl font-semibold text-white">Optimal Assets Management Solutions</h2>
                            <h3 className="mt-3 text-xl font-semibold text-white">Strategic Excellence in Comprehensive Asset Management: Tailored Solutions for Optimal Growth, Risk Mitigation, and Financial Success with Blueharb</h3>
                            <p className="text-gray-400 tracking-wider font-serif mt-5 text-justify">At Blueharb, we specialize in providing comprehensive and tailored asset management solutions designed to optimize your financial portfolio. Our team of seasoned experts employs cutting-edge strategies to maximize returns and minimize risks, ensuring your investments are positioned for long-term success. <br /> <br /> Whether you`re an individual investor, a family office, or a corporate entity, we offer a range of services, including portfolio analysis, risk assessment, and strategic planning. Trust us to safeguard and grow your assets with a commitment to transparency, innovation, and unparalleled expertise in the ever-evolving financial landscape. Partner with Blueharb for a strategic approach to asset management that aligns with your unique financial goals.</p>
                            <div className="flex justify-start mt-4 md:mt-5 lg:mt-12">
                                <Link to={'/about'}><button className="btn uppercase font-bold border-0 border-b-4 bg-opacity-50 bg-black text-white border-blue-500 hover:border-b-4 hover:border-black hover:bg-blue-500 hover:bg-opacity-50 px-12">Read More</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto pb-16">
                <div className="px-8 lg:px-0">
                    <div>
                        <p className="text-lg font-semibold text-blue-500 pb-3 pt-6">----- BLUEHARB -----</p>
                        <h2 className="uppercase text-3xl md:text-5xl tracking-wider font-extrabold font-mono text-white pb-12 ">OUR ADVANTAGES</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
                        <div className="">
                            <div className="chat chat-end relative ">
                                <div className="chat-bubble absolute top-0 left-0 text-5xl font-bold bg-teal-500">1.</div>
                                <div className="pl-24">
                                    <h5 className="text-2xl py-3 text-white font-semibold">Strategic Growth Advantage</h5>
                                    <h3 className="text-white text-xl font-medium pb-4">Accelerated Wealth Expansion Strategies</h3>
                                    <h2 className="text-gray-400  text-justify "> Explore a dynamic partnership with Blueharb, where our seasoned experts employ innovative and strategic <br /> <br /> approaches to propel your assets toward unprecedented growth. Uncover unparalleled opportunities and stay ahead in today`s fast-paced financial landscape.</h2>
                                    <div className="flex justify-start mt-4 md:mt-5 lg:mt-12">
                                        <Link to={'/about'}><button className="btn uppercase font-bold border-0 border-b-4 bg-opacity-50 bg-black text-white border-blue-500 hover:border-b-4 hover:border-black hover:bg-blue-500 hover:bg-opacity-50 px-12">Read More</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="chat chat-end relative ">
                                <div className="chat-bubble absolute top-0 left-0 text-5xl font-bold bg-blue-500">2.</div>
                                <div className="pl-24 text-justify">
                                    <h5 className="text-2xl py-3 text-white font-semibold">Risk Mitigation <br /> Mastery</h5>
                                    <h3 className="text-white text-xl font-medium pb-4">Fortifying Futures: Unmatched Risk Management Expertise</h3>
                                    <h2 className=" text-gray-400 ">Safeguard your investments with Blueharb`s meticulous risk assessment and mitigation strategies. <br /> <br /> Our seasoned analysts navigate market fluctuations with precision, ensuring that your portfolio is resilient and positioned for stability even in challenging  climates.</h2>
                                    <div className="flex justify-start mt-4 md:mt-5 lg:mt-12">
                                        <Link to={'/about'}><button className="btn uppercase font-bold border-0 border-b-4 bg-opacity-50 bg-black text-white border-blue-500 hover:border-b-4 hover:border-black hover:bg-blue-500 hover:bg-opacity-50 px-12">Read More</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="chat chat-end relative ">
                                <div className="chat-bubble absolute top-0 left-0 text-5xl font-bold bg-blue-500">3.</div>
                                <div className="pl-24 text-justify">
                                    <h5 className="text-2xl py-3 text-white font-semibold">Personalized Financial Solutions</h5>
                                    <h3 className="text-white text-xl font-medium pb-4">Tailored Prosperity: Your Unique Path to Financial Success</h3>
                                    <h2 className="text-gray-400 ">Experience a personalized approach to asset management with Blueharb. Our dedicated team crafts bespoke financial <br /> <br /> solutions that align with your  goals and aspirations. Enjoy the confidence of    assets are managed with a keen understanding of your unique financial journey.</h2>
                                    <div className="flex justify-start mt-4 md:mt-5 lg:mt-12">
                                        <Link to={'/about'}><button className="btn uppercase font-bold border-0 border-b-4 bg-opacity-50 bg-black text-white border-teal-500 hover:border-b-4 hover:border-black hover:bg-blue-500 hover:bg-opacity-50 px-12">Read More</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;