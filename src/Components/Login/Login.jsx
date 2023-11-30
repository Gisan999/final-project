import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link,  useNavigate } from "react-router-dom";
import { MdAlternateEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";
import { Helmet } from "react-helmet";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit } = useForm();
    const { logIn, setLoading } = useAuth();
    const navigate = useNavigate();

    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        console.log(email, password)
        logIn(email, password)
            .then(result => {
                console.log(result);
                Swal.fire({
                    position: 'top-right',
                    title: `success`,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2000
                })
                navigate('/about');
            })
            .catch(error => {
                console.log(error);
                setLoading(false)
                Swal.fire({
                    position: 'top-right',
                    title: `email and password dose not match`,
                    icon: 'warning',
                    showConfirmButton: false,
                    timer: 2000
                })
            });

    }

    return (
        <div>
            <Helmet>
                <title>Blueharb | login</title>
            </Helmet>
            <div className="bg-blue-400 py-28  md:py-32 lg:py-40">
                <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
                    <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-3/4 bg-white sm:mx-0  " >
                        <div className="flex flex-col w-full md:w-1/2 p-4">
                            <div className="flex flex-col flex-1 justify-center mb-8">
                                <h1 className="text-4xl text-center font-thin">Please Login</h1>
                                <div className="w-full mt-4">
                                    <form onSubmit={handleSubmit(onSubmit)} className="form-horizontal w-3/4 mx-auto space-y-8" method="POST" action="#">
                                        <div className="flex flex-col mt-4 relative">
                                            <input type="email"
                                                {...register("email", { required: true })}
                                                className="flex-grow h-8 px-2 border rounded border-b-2  border-blue-400" name="email" placeholder="Email" />
                                            <span className="absolute inset-y-0 end-0 grid text-gray-400 place-content-center px-4">

                                                <MdAlternateEmail></MdAlternateEmail>
                                            </span>
                                        </div>
                                        <div className="flex flex-col mt-4 relative">
                                            <input id="password" type={showPassword ? "text" : "password"}
                                                {...register("password", { required: true })}
                                                className="flex-grow h-8 px-2 rounded border border-b-2  border-blue-400 " name="password" required placeholder="Password" />
                                            <span onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 end-0 grid text-gray-400 place-content-center px-4">

                                                {
                                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                                }
                                            </span>
                                        </div>
                                        <div className="flex items-center mt-4">
                                            <input type="checkbox" name="remember" id="remember" className="mr-2" /> <label htmlFor="remember" className="text-sm text-grey-dark">Remember Me</label>
                                        </div>
                                        <div className="flex flex-col mt-8">
                                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
                                                Login
                                            </button>
                                        </div>
                                    </form>
                                    <div className="divider divider-info my-5 lg:my-12">Or</div>

                                    <SocialLogin />

                                    <div>
                                        <p className="text-center py-6">Don`t Have an account <Link ><span className="font-semibold hover:underline hover:text-blue-500">Register</span></Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block md:w-1/2 rounded-r-lg "
                        //  style={{background: `url('https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80')`}}
                        >
                            <img className="w-full h-[550px] lg:h-[700px] " src="https://images.pexels.com/photos/4491469/pexels-photo-4491469.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;