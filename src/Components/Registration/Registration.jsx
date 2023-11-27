import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import img from '../../assets/360_F_424657834_zM6fbarQSdFPee6C3w2WPksPCo7Rz5so-transformed.png'
import axios from "axios";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const Registration = () => {
    const { control, register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const handleRequest = async data => {
        const assetName = data.assetName;
        const price = data.price;
        const assetType = data.assetType;
        const needDescription = data.needDescription;
        const information = data.information;
        // const check = event.target.terms.checked
        
        const formData = new FormData();
        formData.append('image', data.assetImage[0])
        const res = await axios.post(image_hosting_api, formData)
        
        const assetImage = res.data.data.display_url;

        const requestData = {
            assetName,
            price,
            assetType,
            assetImage,
            needDescription,
            information
        }
        console.log(requestData);
    }

    return (
        <div className="max-w-screen-xl mx-auto my-24 bg-gray-100 p-6 rounded-3xl">
            <Helmet>
                <title>Blueharb | Custom Request</title>
            </Helmet>
            <section className="relative mt-10 lg:mt-0">
                <div className="w-full px-4 py-12 ">
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="text-2xl font-bold sm:text-3xl">Create Your Custom Request Here</h1>

                    </div>
                    <form onSubmit={handleSubmit(handleRequest)} action="" className="grid grid-cols-1  lg:grid-cols-2 gap-10 mt-12">
                        <div>
                            <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Asset Name</label>
                            <div className="">
                                <input required
                                    type="text"
                                    name="assetName"
                                    {...register("assetName")}
                                    className="w-full border rounded-lg border-b-4 border-blue-400 p-3 pe-12 text-sm shadow-sm"
                                    placeholder="Asset Name"
                                />

                            </div>

                        </div>
                        <div>
                            <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Price</label>
                            <div className="">
                                <input required
                                    type="text"
                                    name="price"
                                    {...register("price")}
                                    className="w-full border rounded-lg border-b-4 border-blue-400 p-3 pe-12 text-sm shadow-sm"
                                    placeholder="price"
                                />

                            </div>
                        </div>
                        <div>
                            <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Asset Type</label>
                            <div className="">

                                <select   {...register("assetType")} className=" w-full border rounded-lg p-3 border-b-4 border-blue-400  pe-12 text-sm shadow-sm">
                                    <option disabled selected>Pic One</option>
                                    <option>Returnable</option>
                                    <option>Non-returnable</option>
                                </select>


                            </div>

                        </div>

                        <div>
                            <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Asset Image</label>

                            <div className="">
                                <input required
                                    type="file"
                                    {...register("assetImage")}
                                    className="w-full border rounded-lg border-b-4  border-blue-400 file-input-md file-input pe-12 text-sm shadow-sm"
                                />

                            </div>

                        </div>

                        <div>
                            <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Why you need this</label>
                            <div className="">
                            <Controller
                                    name="needDescription"
                                    
                                    control={control}
                                    defaultValue=""  render={({ field }) => <textarea className="w-full border rounded-lg border-b-4 border-blue-400 p-3 pe-12 text-sm shadow-sm" {...field} placeholder="Why you need this" rows={3} />}
                                />



                            </div>
                        </div>
                        <div>
                            <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Additional information</label>
                            <div className="">


                                <Controller
                                    name="information"
                                    
                                    control={control}
                                    defaultValue=""  render={({ field }) => <textarea className="w-full border rounded-lg border-b-4 border-blue-400 p-3 pe-12 text-sm shadow-sm" {...field} placeholder="Additional information" rows={3} />}
                                />



                                {/* <textarea  placeholder="Additional information"  {...register("information")} name="" id="" cols="30" rows="3" className="w-full border rounded-lg border-b-4 border-blue-400 p-3 pe-12 text-sm shadow-sm"></textarea> */}

                            </div>
                        </div>

                        <div className="flex items-center justify-between">

                            <button
                                type="submit"
                                className="inline-block rounded-lg btn bg-blue-500 px-8  text-sm font-medium text-white"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                    <div className="divider divider-info my-5 lg:my-12">

                        <img className="w-48" src={img} alt="" />
                    </div>
                </div>

                {/* <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                    <img
                        alt="Welcome"
                        src="https://images.pexels.com/photos/8297226/pexels-photo-8297226.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div> */}
            </section>
        </div>
    );
};

export default Registration;