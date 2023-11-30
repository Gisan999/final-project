import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import img from '../../assets/360_F_424657834_zM6fbarQSdFPee6C3w2WPksPCo7Rz5so-transformed.png'
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useUserData from "../../Hooks/useUserData";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const Registration = () => {
    const { control, register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const { user } = useAuth();
    const [userData] = useUserData();
    const axiosSecure = useAxiosSecure();
    const currentDate = new Date();
    // const time = date?.toLocaleDateString();
    const date = currentDate.toString().split(' ').splice(0, 4).toString();
    console.log(userData.adminEmail);
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
            date,
            needDescription,
            information,
            userName: user?.displayName,
            userImage: user?.photoURL,
            adminEmail: userData?.adminEmail,
        }
        console.log(requestData);

        const response = await axiosSecure.post('/set/request', requestData)
        console.log(response);
        if (response.statusText === "OK") {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Custom Request Send",
                showConfirmButton: false,
                timer: 1500
            });
            reset()
        }

    }

    return (
        <div className="max-w-screen-xl mx-auto my-24 bg-gray-100 p-6 rounded-3xl">
            <Helmet>
                <title>Blueharb | Custom Request</title>
            </Helmet>
            {userData?.adminEmail ? <section className="relative mt-10 lg:mt-0">
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
                                    defaultValue="" render={({ field }) => <textarea className="w-full border rounded-lg border-b-4 border-blue-400 p-3 pe-12 text-sm shadow-sm" {...field} placeholder="Why you need this" rows={3} />}
                                />

                            </div>
                        </div>
                        <div>
                            <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Additional information</label>
                            <div className="">


                                <Controller
                                    name="information"

                                    control={control}
                                    defaultValue="" render={({ field }) => <textarea className="w-full border rounded-lg border-b-4 border-blue-400 p-3 pe-12 text-sm shadow-sm" {...field} placeholder="Additional information" rows={3} />}
                                />

                            </div>
                        </div>

                        <div className="flex items-center justify-between">

                            <button
                                type="submit"
                                className="inline-block rounded-lg btn bg-blue-500 px-8  text-sm font-medium text-white"
                            >
                                Submit Request
                            </button>
                        </div>
                    </form>
                    <div className="divider divider-info my-5 lg:my-12">

                        <img className="w-48" src={img} alt="" />
                    </div>
                </div>

            </section> : <>
                <div className="max-w-screen-md mx-auto ">
                    <div className="h-[70vh] flex items-center justify-center">
                        <h2 className="text-center text-2xl md:text-4xl lg:text-5xl px-8 lg:px-0 font-bold"> You are not affiliated with a team, <br /> <br /> Please contact your Admin</h2>
                    </div>

                </div>
            </>}
        </div>
    );
};

export default Registration;