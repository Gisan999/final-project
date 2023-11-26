import { useState } from 'react';
import { useForm } from "react-hook-form";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Helmet } from 'react-helmet-async';
import Select from 'react-select';
import axios from 'axios';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const AdminJoin = () => {

    const [value, setValue] = useState(null);
    const { register, handleSubmit, reset } = useForm();
    const [date, setDate] = useState(new Date());
    const time = date.toLocaleDateString();


    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('image', data.logo[0])
        axios.post(image_hosting_api, formData)
            .then((res) => { console.log(res.data.data.display_url) })
            

        const number = value.value.split('$')[1];
        const price = parseInt(number);


        const name = data.name
        const data2 = { time, name, price, logo: data.logo[0].name, package: value.value };
        console.log(data2)



    }
    // const ll = "10 members for $15";
    // console.log(ll.split('$')[1]);

    const options = [

        { value: '5 Members for $ 5', label: '5 Members for $5' },
        { value: '10 Members for $ 8', label: '10 Members for $8' },
        { value: '20 Members for $ 15', label: '20 Members for $15' }

    ]

    return (
        <div className=''>
            <Helmet>
                <title>Blueharb | join admin</title>
            </Helmet>
            <div className="mt-48 my-20 max-w-screen-xl mx-auto bg-blue-50">
                <div className="p-8 py-24 rounded border border-blue-300">    <h1 className="font-medium text-3xl">Admin Recruitment Page</h1>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mt-8 grid lg:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Full Name</label>
                                <input required type="text" name="name"
                                    {...register("name")} id="name" className="bg-transparent border border-gray-400 rounded py-2.5 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter your name" />
                            </div>
                            <div>
                                <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Company Name</label>
                                <input required type="text" name="name"
                                    {...register("company")}
                                    id="name" className=" bg-transparent border border-blue-600 rounded py-2.5 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Company Name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="text-sm text-gray-700 block mb-1 font-medium">Email Address</label>
                                <input required type="text" name="email"
                                    {...register("email")}
                                    id="email" className="bg-transparent border border-blue-600  rounded py-2.5 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="yourmail@provider.com" />
                            </div>
                            <div>
                                <label htmlFor="job" className="text-sm text-gray-700 block mb-1 font-medium">Password</label>
                                <input required type="text" name="job"
                                    {...register("password")}
                                    id="job" className="bg-transparent border border-gray-400 rounded py-2.5 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Your Password" />
                            </div>
                            <div>
                                <label htmlFor="job" className="text-sm text-gray-700 block mb-1 font-medium">Company Logo</label>
                                {/* TODO required */}
                                <input type="file"
                                    {...register("logo")}
                                    className="bg-transparent border border-gray-400 rounded px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full file-input-md file-input" />
                            </div>
                            <div>
                                <label htmlFor="job" className="text-sm text-gray-700 block mb-1 font-medium"> Select a package</label>


                                <Select required options={options} defaultValue={value} placeholder="Select a package" onChange={setValue} isSearchable noOptionsMessage={() => "package not found..."}

                                    styles={{
                                        control: (baseStyles) => ({
                                            ...baseStyles,
                                            borderColor: "blue",
                                            padding: "5px",
                                            backgroundColor: ""
                                        })
                                    }}
                                ></Select>

                                {/* <input required type="file" 
                            {...register("logo")}
                            className="bg-gray-100 border border-gray-200 rounded px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full file-input-sm file-input" /> */}
                            </div>
                            <div className=' relative'>
                                <label htmlFor="birthday" className="text-sm text-gray-700 block mb-1 font-medium">Birth-Date</label>

                                <DatePicker {...register("time")} className='bg-transparent border border-gray-400 rounded pr-[140px] py-2.5 pl-9 block focus:ring-blue-500 focus:border-blue-500          text-gray-700'
                                    selected={date}
                                    onChange={(date) => setDate(date)} ></DatePicker>
                                <svg className="w-4 absolute top-10 left-2 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>

                            </div>
                        </div>
                        <div className=" mt-8">
                            <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 w-full">Apply</button>


                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminJoin;