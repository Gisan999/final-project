import { useForm } from 'react-hook-form';
import img from '../../assets/360_F_424657834_zM6fbarQSdFPee6C3w2WPksPCo7Rz5so-transformed.png'
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
const AddAssetPage = () => {
    const { register, handleSubmit } = useForm();
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const currentDate = new Date();
    // const time = date?.toLocaleDateString();
    const date = currentDate.toString().split(' ').splice(0, 4).toString();
    const handleRequest = data => {
        const productName = data.productName;
        const productType = data.productType;
        const quantity = data.quantity;
        const assetData = {
            productName,
            productType,
            quantity,
            date,
            email: user?.email
        }
        console.log(assetData);

        axiosSecure.post('/set/asset', assetData)
        .then(res => {
            console.log(res.data);
        })
    }
    return (
        <div className='max-w-screen-lg mx-auto my-20 p-12 bg-gray-100 rounded-3xl shadow-2xl shadow-sky-300'>
            <section className="relative mt-10 lg:mt-0">
                <div className="w-full px-4 py-12 ">
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="text-3xl font-bold sm:text-3xl">Add An Asset</h1>

                    </div>
                    <form onSubmit={handleSubmit(handleRequest)} action="" className="space-y-8 mt-12">
                        <div>
                            <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Product Name</label>
                            <div className="">
                                <input required
                                    type="text"
                                    name="assetName"
                                    {...register("productName")}
                                    className="w-full border rounded-lg border-b-4 border-blue-400 p-3 pe-12 text-sm shadow-sm"
                                    placeholder="Asset Name"
                                />

                            </div>

                        </div>
                        <div>
                            <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Product Type</label>
                            <div className="">
                                <select required   {...register("productType")} className=" w-full border rounded-lg p-3 border-b-4 border-blue-400  pe-12 text-sm shadow-sm">
                                    <option value="" disabled selected>Pic One</option>
                                    <option value="Returnable">Returnable</option>
                                    <option value="Non-returnable">Non-returnable</option>
                                </select>

                            </div>
                        </div>
                        <div>
                            <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Product Quantity</label>
                            <div className="">
                                <input required
                                    type="number"
                                    name="price"
                                    {...register("quantity")}
                                    className="w-full border rounded-lg border-b-4 border-blue-400 p-3 pe-12 text-sm shadow-sm"
                                    placeholder="Product Quantity"
                                />

                            </div>
                        </div>


                        <div className="flex items-center justify-between">

                            <button
                                type="submit"
                                className="inline-block w-full rounded-lg btn bg-blue-500 px-8  text-sm font-medium text-white"
                            >
                                Add
                            </button>
                        </div>
                    </form>
                    <div className="divider divider-info my-10 lg:my-20">

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

export default AddAssetPage;