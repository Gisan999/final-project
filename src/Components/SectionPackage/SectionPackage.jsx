import { Link } from "react-router-dom";

const SectionPackage = () => {
    return (
        <div style={{
            backgroundImage: `url(https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
            backgroundSize: `cover`,
            backgroundRepeat: 'no-repeat'
        }}
            className='featured-item bg-fixed'>
           <div className="text-white bg-black bg-opacity-70">
           <div className="max-w-screen-xl mx-auto py-32 mb-12">
                <div className="flex justify-center mb-10">
                    <div className="space-y-5">
                        <h1 className="border-b-4 pb-5 text-blue-500 text-center w-96">---BLUEHARB---</h1>
                        <h4 className="text-4xl pb-5 w-96 text-center border-b-4 font-bold font-serif">OUR PACKAGES</h4>
                    </div>
                </div>
                <div className="flex justify-center ">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                        <div className="relative flex flex-col text-white bg-white bg-opacity-30 shadow-md w-96 rounded-xl ">
                            <div className="p-6 space-y-5">
                                <h5 className=" mb-2 font-sans text-2xl  font-bold ">
                                    Our Service
                                </h5>
                                <p className="block font-sans text-base">
                                    <span className="font-semibold text-lg">Employee:</span> Maximum 20 Employees
                                </p>
                                <h2><span className="font-semibold text-lg">Price:</span> $15</h2>
                                <div className="flex justify-end"><Link to={"/adminJoin"}><button className="btn btn-outline btn-info btn-sm px-7 ">purchase</button></Link></div>
                            </div>
                        </div>
                        <div className="relative flex flex-col text-white bg-white bg-opacity-30 shadow-md w-96 rounded-xl lg:mt-12">
                            <div className="p-6 space-y-3">
                                <h5 className=" mb-2 font-sans text-2xl  font-bold ">
                                    Our Service
                                </h5>
                                <p className="block font-sans text-base">
                                    <span className="font-semibold text-lg">Employee:</span> Maximum 10 Employees
                                </p>
                                <h2><span className="font-semibold text-lg">Price:</span> $8</h2>
                                <div className="flex justify-end"><Link to={"/adminJoin"}><button className="btn btn-outline btn-info btn-sm px-7 ">purchase</button></Link></div>
                            </div>
                        </div>
                        <div className="relative flex flex-col text-white bg-white bg-opacity-30 shadow-md w-96 rounded-xl lg:mt-24">
                            <div className="p-6">
                                <h5 className=" mb-2 font-sans text-2xl  font-bold ">
                                    Our Service
                                </h5>
                                <p className="block font-sans text-base">
                                    <span className="font-semibold text-lg">Employee:</span> Maximum 5 Employees
                                </p>
                                <h2><span className="font-semibold text-lg">Price:</span> $5</h2>
                                <div className="flex justify-end"><Link to={"/adminJoin"}><button className="btn btn-outline btn-info btn-sm px-7 ">purchase</button></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default SectionPackage;