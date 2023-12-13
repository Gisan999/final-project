import useAuth from "../../Hooks/useAuth";
import ShowAssets from "./ShowAssets";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAssetsList from "../../Hooks/useAssetsList";

const AssetList = () => {
    const [search, setSearch] = useState('');
    const [assets] = useAssetsList();
    const { user } = useAuth();
    const [assetsList, setAssetsList] = useState([]);
    useEffect(() => {
        const remaining = assets?.filter(data => data?.email === user?.email)
        setAssetsList(remaining);
    }, [assets, user?.email])
    const [filterData, setFilterData] = useState(assetsList);
    const btnClick = text => {
        const remaining = assetsList.filter(data => data.productType === text)
        setFilterData(remaining);
    }
    useEffect(() => {
        setTimeout(() => {
            setFilterData(assetsList)
        }, 1 * 500);
    }, [assetsList])

    return (
        <div className=" bg-black bg-opacity-90">
            <Helmet>
                <title>Blueharb | Asset page</title>
            </Helmet>
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