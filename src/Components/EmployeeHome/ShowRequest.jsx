/* eslint-disable react/prop-types */
import './showRequestcss/showRequest.css'
import { GiMoneyStack } from "react-icons/gi";
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ShowRequest = ({ item }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = (item) => {
        console.log(item);
        // setData(item)
        setOpen(true);
    }
    const handleClose = () => setOpen(false);
    return (
        <div className='bg-black bg-transparent'>
            <div className="card2">
                <div className="content">
                    <p className="heading">{item.assetName}
                    </p>
                    <h2> <span className='font-bold'>Asset Type:</span> {item.assetType}</h2>
                    <p className="flex items-center gap-2 ">
                        <span className='font-bold'>Asset Price:</span> <GiMoneyStack /> {item.price}
                    </p>
                    <button onClick={() => handleOpen(item)} className="button">View Details</button>
                </div>
            </div>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                      
                        <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full flex-col lg:flex-row">
                            <div
                                className="relative lg:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                                <img
                                    src={item.assetImage}
                                    alt="card-image" className="object-cover w-full h-full" />
                            </div>
                            <div className="p-6">
                                <h6
                                    className="block  font-sans text-lg antialiased font-semibold leading-relaxed tracking-normal text-gray-700 ">
                                    {item.assetName}
                                </h6>
                                <h2>Asset Type: {item.assetType}</h2>
                                <h2 className='flex items-center gap-2'>Asset Price: <GiMoneyStack/> {item.price}</h2>
                                <h2 className='text-lg font-medium '>Status: </h2>
                                <h4 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                  {item.information}
                                </h4>
                                <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                                   {item.needDescription}
                                </p>
                                <button
                                    className="button z-20"
                                    type="button">
                                    Update</button>
                            </div>
                        </div>
                    </Box>
                </Modal>
            </div>
        </div>
    );
};

export default ShowRequest;