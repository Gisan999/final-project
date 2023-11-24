import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className=''>
            <div className=" h-80  sm:h-[450px] xl:h-[750px] ">
                <Carousel>

                    <div className="h-full bg-cover bg-no-repeat" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3153199/pexels-photo-3153199.jpeg?auto=compress&cs=tinysrgb&w=1600)' }}>
                        <div className="bg-black w-full h-full bg-opacity-50 flex justify-center items-center">
                            <div className="text-center text-white">
                                <h2>hello</h2>
                                <Link to={'/employeeJoin'}><button className="btn btn-outline btn-secondary">Employee</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="h-full bg-cover bg-no-repeat" style={{ backgroundImage: 'url(https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1600)' }}>
                        <div className="bg-black w-full h-full bg-opacity-50 flex justify-center items-center">
                            <div className="text-center text-white">
                                <h2>hello</h2>
                                <Link to={'/adminJoin'}><button className="btn btn-outline btn-secondary">Admin</button></Link>
                            </div>
                        </div>
                    </div>

                </Carousel>

            </div>
        </div>
    );
};

export default Banner;