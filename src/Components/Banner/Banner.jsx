import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className=''>
            <div className=" h-80  sm:h-[500px] xl:h-[820px] ">
                <Carousel>

                    <div className="h-full bg-cover bg-no-repeat" style={{ backgroundImage: 'url(https://images.pexels.com/photos/6774452/pexels-photo-6774452.jpeg?auto=compress&cs=tinysrgb&w=1600)' }}>
                        <div className="bg-black w-full h-full bg-opacity-60 flex justify-center items-center">
                            <div className="text-center text-white">
                                <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold font-mono uppercase mb-3 text-left">Asset Management <br /> Associate</h2>
                                <p className="max-w-xs md:max-w-xl lg:max-w-5xl mx-auto hidden md:block text-justify italic tracking-wide text-lg text-gray-400 font-serif border-l-4 pl-3 border-blue-500 ">As an Asset Management Associate at BlueHarb, you will be an integral part of our dynamic team, contributing to the effective management and optimization of our client`s investment portfolios. Your role will involve collaborating with various departments to ensure the smooth onboarding of new clients and providing ongoing support to maintain strong client relationships.</p>
                                <div className="flex justify-start mt-4 md:mt-5 lg:mt-12">

                                    <Link to={'/employeeJoin'}><button className="btn uppercase font-bold border-0 border-b-4 bg-opacity-50 bg-black text-white border-blue-500 hover:border-b-4 hover:border-black hover:bg-blue-500 hover:bg-opacity-50 px-12">Employee</button></Link>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-full bg-cover bg-no-repeat" style={{ backgroundImage: 'url(https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1600)' }}>
                        {/* <div className="bg-black w-full h-full bg-opacity-70 flex items-center">
                          <div className="flex justify-center pl-14">
                          <div className="text-center text-white">
                                <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold font-mono uppercase mb-3 text-left ">Administrative Coordinator <br /> <span className="hidden md:block"> - Asset Management</span></h2>
                                <p className="max-w-xs md:max-w-xl lg:max-w-5xl mx-auto hidden md:block text-left italic tracking-wide text-lg text-gray-400 font-serif ">As an Administrative Coordinator at [Blueharb], you will play a pivotal role in supporting the efficient functioning of our asset management operations. Your responsibilities will involve overseeing administrative tasks, facilitating communication between internal teams, and ensuring the seamless execution of day-to-day activities.</p>
                                <div className="flex justify-start mt-4 md:mt-5 lg:mt-12">

                                    <Link to={'/adminJoin'}><button className="btn uppercase font-bold border-0 border-b-4 bg-opacity-50 bg-black text-white border-blue-500 hover:border-b-4 hover:border-black hover:bg-blue-500 hover:bg-opacity-50 px-12">Admin</button></Link>

                                </div>
                            </div>
                          </div>
                        </div> */}

                        <div className="bg-black w-full h-full bg-opacity-60 flex justify-center items-center">
                            <div className="text-center text-white pl-14 md:pl-0">
                                <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold font-mono uppercase mb-3 text-left">Administrative Coordinator <br />- Asset Management</h2>
                                <p className="max-w-xs md:max-w-xl lg:max-w-5xl mx-auto hidden md:block  text-justify italic tracking-wide text-lg text-gray-400 font-serif border-l-4 pl-3 border-blue-500 ">As an Administrative Coordinator at BlueHarb, you will play a pivotal role in supporting the efficient functioning of our asset management operations. Your responsibilities will involve overseeing administrative tasks, facilitating communication between internal teams, and ensuring the seamless execution of day-to-day activities.</p>
                                <div className="flex justify-start mt-4 md:mt-5 lg:mt-12">

                                    <Link to={'/adminJoin'}><button className="btn uppercase font-bold border-0 border-b-4 bg-opacity-50 bg-black text-white border-blue-500 hover:border-b-4 hover:border-black hover:bg-blue-500 hover:bg-opacity-50 px-12">admin</button></Link>

                                </div>
                            </div>
                        </div>

                    </div>

                </Carousel>

            </div>
        </div>
    );
};

export default Banner;