import { useState } from 'react';
import { useForm } from "react-hook-form";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Helmet } from 'react-helmet-async';
import Select from 'react-select';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const AdminJoin = () => {
    const {registerUser, userUpdate} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [value, setValue] = useState(null);
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const [date, setDate] = useState(new Date());
    const time = date?.toLocaleDateString();


    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('image', data.logo[0])
        const res = await axios.post(image_hosting_api, formData)
        const imgUrl = new FormData();
        imgUrl.append('image', data.image[0])
        const res2 = await axios.post(image_hosting_api, imgUrl)
        const number = value.value.split('$')[1];
        const price = parseInt(number);
        const role = 'admin';
        const name = data.name;
        const email = data.email;
        const image = res2.data.data.display_url
        const adminData = { birthDate: time, name,  email, role, companyName: data.company, price, companyLogo: res.data.data.display_url, image: res2.data.data.display_url, package: value.value };
        const password = data.password;
        registerUser(email, password)
            .then(result => {
                console.log(result);
                userUpdate(name, image)
                    .then(result => {
                        console.log(result);
                        axiosPublic.post('/set/users', adminData)
                            .then(res => {
                                console.log(res.data);
                                navigate('/payment')
                                Swal.fire({
                                    position: 'top-right',
                                    title: `Welcome Mr/Mst ${name} 
                                    Please Pay your bills
                                    `,
                                    icon: 'success',
                                    showConfirmButton: false,
                                    timer: 2000
                                })
                            })
                    })
                    .catch(error => console.error(error));
            })
            .catch(error => {
                console.error(error)
                Swal.fire({
                    position: 'center',
                    title: 'This email already exists',
                    icon: 'warning',
                    showConfirmButton: false,
                    timer: 2000
                })
            });
    }
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
                                <div className="relative">
                                    <label htmlFor="job" className="text-sm text-gray-700 block mb-1 font-medium">Password</label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        {...register("password", {
                                            required: true, minLength: 6, maxLength: 22,
                                            pattern: /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/
                                        })}
                                        className="bg-transparent border border-gray-400 rounded py-2.5 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                        placeholder="Enter password"
                                    />
                                    <span onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 end-0 grid text-gray-400 place-content-center top-7 px-4">

                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>
                                </div>
                                <div className="mt-3">
                                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one uppercase, one lowercase, <br /> one number and one special  characters</p>}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="job" className="text-sm text-gray-700 block mb-1 font-medium">Company Logo</label>
                                <input type="file"
                                    {...register("logo")}
                                    className="bg-transparent border border-gray-400 rounded px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full file-input-md file-input" />
                            </div>
                            <div>
                                <label htmlFor="job" className="text-sm text-gray-700 block mb-1 font-medium">Your Photo</label>
                                <input type="file"
                                    {...register("image")}
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
                            </div>
                            <div className=' relative'>
                                <label htmlFor="birthday" className="text-sm text-gray-700 block mb-1 font-medium">Birth-Date</label>
                                <DatePicker {...register("time")} className='bg-transparent border border-blue-600 rounded pr-[140px] py-[11px] pl-9 block focus:ring-blue-500 focus:border-blue-500          text-gray-700'
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