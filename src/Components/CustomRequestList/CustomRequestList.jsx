import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useRequest from "../../Hooks/useRequest";
import './custopRequestList.css'

const CustomRequestList = () => {
    const [data, setData] = useState([]);
    const [requestList] = useRequest();
    const { user } = useAuth();
    useEffect(() => {
        const remaining = requestList.filter(data => data?.adminEmail === user?.email)
        setData(remaining);
    }, [requestList, user?.email])
    console.log(data);
    return (
        <div className="max-w-screen-xl mx-auto my-20 mt-32">
            <div className="flex justify-center px-5 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {
                        data?.map(data => <section key={data._id}>
                            <div className="card md:card-side bg-base-100 shadow-xl">
                                <figure><img className="w-72 h-72" src={data.assetImage} alt="Album" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Asset Name : {data.assetName}</h2>
                                    <h2 className="font-medium">Asset Type : <span className="text-gray-400">{data.assetType}</span></h2>
                                    <h2 className="font-medium">Asset Price : <span className="text-gray-400">$ {data.price}</span></h2>
                                    <p><span className="text-lg font-semibold">Why i need this:</span>  <br /> <span className="text-gray-500">{data.needDescription}</span></p>
                                    <p><span className="text-lg font-semibold">Additional information:</span> <br /> <span className="text-gray-500"> {data.information}</span></p>
                                    <div className="card-actions justify-between">
                                        <button className=" wow ">Approve <span className="wow2"></span></button>
                                        <button className=" wow  ">Reject <span className="wow2"></span></button>
                                    </div>
                                </div>
                            </div>
                        </section>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CustomRequestList;