import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import ShowAssets from "./ShowAssets";
import { useEffect, useState } from "react";
// import Select from 'react-select';

const AssetList = () => {
    const axiosSecure = useAxiosSecure();
    const [search, setSearch] = useState('');
    const { user } = useAuth();
    const { data: assets = [] } = useQuery({
        queryKey: ['assets', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/get/asset?email=${user?.email}`)
            return res.data
        }
    })
    const [filterData, setFilterData] = useState(assets);

    const btnClick = text => {
        const remaining = assets.filter(data => data.productType === text)
        setFilterData(remaining);

    }

    useEffect(() => {
        setTimeout(() => {
            setFilterData(assets)

        }, 1 * 500);
    }, [assets])


    console.log(assets);
    return (
        <div className=" bg-black bg-opacity-90">
            <div className="max-w-screen-xl mx-auto py-20">
                <div className="p-5 rounded-md my-8 grid grid-cols-6 gap-5 bg-gray-300">
                    <div className="col-span-2">
                        <div className=" flex justify-around">

                            <button onClick={() => btnClick("Returnable")} className="btn btn-outline btn-info ">Returnable</button>

                            <button onClick={() => btnClick("Non-returnable")} className="btn btn-outline btn-info ">Non-returnable</button>

                        </div>
                    </div>

                    <div className="col-span-4">
                        <form onChange={(e) => setSearch(e.target.value)}>
                            <input type="text" placeholder="Search Product" className="py-2.5 pl-3 w-full p-2 rounded-md text-lg" />

                        </form>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            filterData.filter(item => {
                                return item.productName.toLowerCase().includes(search.toLowerCase())
                            }).map(asset => <ShowAssets key={asset._id} asset={asset}></ShowAssets>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssetList;