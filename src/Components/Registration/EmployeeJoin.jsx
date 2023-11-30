import { useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import SocialLogin from '../Login/SocialLogin';
import axios from 'axios';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const EmployeeJoin = () => {
    const axiosPublic = useAxiosPublic();
    const { registerUser, userUpdate } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const [date, setDate] = useState(new Date());
    const time = date.toLocaleDateString();
    const navigate = useNavigate();

    const onSubmit = async data => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        const res = await axios.post(image_hosting_api, formData)
        const role = "employee";
        const image = res.data.data.display_url;


        const userInfo = {
            name: data.name,
            email: data.email,
            image,
            birthDate: time,
            role,
            team: 'no',
        }

        console.log(userInfo);

        const name = data.name;
        const email = data.email;
        const password = data.password;
        registerUser(email, password)
            .then(result => {
                console.log(result);
                userUpdate(name, image)
                    .then(result => {
                        console.log(result);

                        axiosPublic.post('/set/users', userInfo)
                            .then(res => {
                                console.log(res.data);
                                navigate('/')

                                Swal.fire({
                                    position: 'top-right',
                                    title: `Hello Mr/Mst ${name} 
                                    Your Registration Successfully`,
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
    return (
        <div className="mt-48 mb-24 max-w-screen-xl mx-auto bg-blue-50">
            <Helmet>
                <title>Blueharb | join employee</title>
            </Helmet>
            <div className="p-8 py-24 rounded border border-blue-300">    <h1 className="font-medium text-3xl">Employee Recruitment Page</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-8 grid lg:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Full Name</label>
                            <input required type="text" name="name"
                                {...register("name")}
                                id="name" className="bg-gray-100 border border-gray-200 rounded py-2.5 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter your name" />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm text-gray-700 block mb-1 font-medium">Email Address</label>
                            <input required type="text" name="email"
                                {...register("email")}
                                id="email" className="bg-gray-100 border border-gray-200 rounded py-2.5 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="yourmail@provider.com" />
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
                                    className="bg-gray-100 border border-gray-200 rounded py-2.5 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
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
                        {/* <div>
                            <label htmlFor="job" className="text-sm text-gray-700 block mb-1 font-medium">Password</label>
                            <input required type="text" name="job"
                                {...register("password")}
                                id="job" className="bg-gray-100 border border-gray-200 rounded py-2.5 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Your Password" />
                        </div> */}
                        <div>
                            <label htmlFor="job" className="text-sm text-gray-700 block mb-1 font-medium">Your Photo</label>
                            {/* TODO required */}
                            <input type="file"
                                {...register("image")}
                                className="bg-transparent border border-gray-400 rounded px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full file-input-md file-input" />
                        </div>
                        <div className=' relative'>
                            <label htmlFor="birthday" className="text-sm text-gray-700 block mb-1 font-medium">Birth-Date</label>

                            <DatePicker className='bg-gray-100 border pr-[138px] md:pr-[481px] lg:pr-[378px] border-gray-200 rounded py-2.5 pl-9 block focus:ring-blue-500 focus:border-blue-500          text-gray-700'
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
                <div className="divider divider-info my-5 lg:my-12">Or</div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default EmployeeJoin;