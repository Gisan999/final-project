/* eslint-disable react/prop-types */
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const ShowAssets = ({asset}) => {
    const {productName, productType, date, quantity, } = asset;
    return (
        <div className="">
              <div className="relative flex flex-col text-white bg-teal-400 bg-opacity-50 shadow-sm-light shadow-sky-400  border-b-2 border-r-2 border-sky-400  w-96 rounded-xl lg:mt-24">
                            <div className="p-6">
                                <h5 className=" mb-2 font-sans text-2xl  font-bold ">
                                    {productName}
                                </h5>
                                <p className="block font-sans text-base">
                                    <span className="font-semibold text-lg">Product Type: </span>  { productType}
                                </p>
                                <p className="block font-sans text-base">
                                    <span className="font-semibold text-lg">Product Quantity: </span>  { quantity}
                                </p>
                                <h2 className="tracking-wider"><span className="font-semibold text-lg">Date:</span> {date}</h2>
                                <div className="flex justify-between mt-5">
                                    <Link><button className="btn btn-outline btn-info btn-sm px-7 "> <FaEdit/> Update</button></Link>
                                    <Link><button className="btn btn-outline btn-error btn-sm px-7 "><MdDelete/> Delete</button></Link>
                                </div>
                            </div>


                        </div>
        </div>
    );
};

export default ShowAssets;