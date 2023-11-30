import { useEffect, useState } from "react";
import useAssetsList from "../../Hooks/useAssetsList";
import useUserData from "../../Hooks/useUserData";
import './card.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import useAuth from "../../Hooks/useAuth";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    weight: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const MyRequestAssetList = () => {
    // const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic()
    const [search, setSearch] = useState('');
    const [userData] = useUserData();
    const [assets] = useAssetsList();
    const [data, setData] = useState([])
    const [assetsList, setAssetsList] = useState([]);
    const [filterData, setFilterData] = useState(assetsList);
    const { user } = useAuth();
    const currentDate = new Date();
    // const time = date?.toLocaleDateString();
    const requestDate = currentDate.toString().split(' ').splice(0, 4).toString();
    const email = userData?.adminEmail;

    useEffect(() => {

        const remaining = assets.filter(data => data.email === email)
        setAssetsList(remaining);
    }, [assets, email])

    const btnClick = text => {
        const remaining = assetsList.filter(data => data.productType === text)
        setFilterData(remaining);
    }

    useEffect(() => {
        setTimeout(() => {
            setFilterData(assetsList)
        }, 1 * 500);
    }, [assetsList])


    const [open, setOpen] = React.useState(false);
    const handleOpen = (item) => {
        console.log(item);
        setData(item)
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    // console.log(data);



    const handleSubmit = async event => {
        event.preventDefault();
        const additional = event.target.additional.value;

        // console.log(additional, data);

        const requestData = {
            additional,
            productName: data.productName,
            productType: data.productType,
            requestDate,
            requesterName: user?.displayName,
            requesterEmail: user?.email
        }
        console.log(requestData);

        axiosPublic.post('/set/request', requestData)
            .then(res => {

                console.log(res.data);
            })
    }

    return (
        <div className="bg-black bg-opacity-90">
            {
                userData?.adminEmail ?
                    <>
                        <div className="max-w-screen-xl mx-auto py-32 ">
                            <h2 className="text-gray-400 text-4xl md:text-5xl font-bold uppercase font-serif text-center pt-16">Choose your choice</h2>
                            <div className="p-5 rounded-md my-8 grid grid-cols-6 gap-5 bg-gray-500">
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
                            <div className="flex justify-center  px-5 lg:px-0">
                                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
                                    {
                                        filterData?.filter(item => {
                                            return item.productName.toLowerCase().includes(search.toLowerCase())
                                        }).map(asset => <section key={asset._id}>

                                            <div className="card9">
                                                <div className="card11">
                                                    <div className="text-white p-4">
                                                        <h2 className="  text-3xl font-serif font-semibold">{asset.productName
                                                        }</h2>

                                                        <h2 className="mt-5 mb-3"> <span className="text-lg text-gray-300 font-medium">Type:  </span> <span className="text-gray-400">{asset.productType}</span></h2>
                                                        <h2> <span className="text-lg font-medium text-gray-300">Availability:  </span> <span className="text-gray-400">{asset.quantity}</span></h2>
                                                        <div className="flex justify-center mt-8">
                                                            <button onClick={() => handleOpen(asset)} className="button99">
                                                                Button
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </section>)
                                    }
                                </div>
                            </div>
                        </div>

                    </> :
                    <>
                        <div className="max-w-screen-md mx-auto ">
                            <div className="h-[70vh] flex items-center justify-center">
                                <h2 className="text-center text-2xl md:text-4xl lg:text-5xl px-8 lg:px-0 font-bold"> You are not affiliated with a team, <br /> <br /> Please contact your Admin</h2>
                            </div>

                        </div>
                    </>
            }

            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>

                        <form onSubmit={handleSubmit} className="container00" action="">
                            <div className="input-container55">
                                <div className="input-content77">
                                    <div className="input-dist99">
                                        <div className="input-type33">
                                            <input className="input-is77" name="additional" type="text" required="" placeholder="User" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="submit-button12">Log in</button>
                        </form>

                    </Box>
                </Modal>
            </div>
        </div>
    );
};

export default MyRequestAssetList;