import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCamera, FaEye, FaEyeSlash, FaFont, } from "react-icons/fa";
// import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Registration = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { registerUser, userUpdate } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const handleRegistration = data => {
        const email = data.email;
        const password = data.password;
        const photo = data.photo;
        const name = data.name;
        // const check = event.target.terms.checked
        console.log(name, photo, email, password);
        registerUser(email, password)
            .then(result => {
                console.log(result);
                userUpdate(name, photo)
                    .then(result => {
                        console.log(result);
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Registration Successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/');

                    })
                    .catch(error => console.error(error));
            })
            .catch(error => console.error(error));


    }



    return (
        <div>
             <Helmet>
                <title>Blueharb | registration</title>
            </Helmet>
            <section className="relative flex flex-wrap lg:h-screen lg:items-center mt-10 lg:mt-0">
                <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="text-2xl font-bold sm:text-3xl">Registration Here</h1>

                    </div>

                    <form onSubmit={handleSubmit(handleRegistration)} action="" className="mx-auto mb-0 mt-8 max-w-md space-y-8">
                        <div>

                            <div className="relative">
                                <input
                                    type="text"
                                    name="name"
                                    {...register("name", { required: true })}
                                    className="w-full border rounded-lg border-b-4 border-blue-400 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Your Name"
                                />
                                <span className="absolute inset-y-0 end-0 grid text-gray-400 place-content-center px-4">
                                    <FaFont></FaFont>
                                </span>
                            </div>
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div>

                            <div className="relative">
                                <input
                                    type="text"
                                    name="photo"
                                    {...register("photo", { required: true })}
                                    className="w-full border rounded-lg border-b-4 border-blue-400 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Photo URL"
                                />

                                <span className="absolute inset-y-0 end-0 grid text-gray-400 place-content-center px-4">
                                    <FaCamera></FaCamera>
                                </span>
                            </div>
                        </div>
                        <div>

                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    {...register("email", { required: true })}
                                    className="w-full border rounded-lg border-b-4 border-blue-400 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter email"
                                />


                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>

                        <div>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    {...register("password", {
                                        required: true, minLength: 6, maxLength: 22,
                                        pattern: /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/
                                    })}
                                    className="w-full border rounded-lg border-b-4 border-blue-400 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter password"
                                />
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 end-0 grid text-gray-400 place-content-center px-4">

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
                        <div className="flex items-center mt-4">
                            <input type="checkbox" name="terms" id="remember" className="mr-2" /> <label htmlFor="remember" className="text-sm text-grey-dark">Accept Our <span className="text-lg font-semibold hover:underline hover:text-blue-500">Terms And Conditions</span></label>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-500">
                                No account?
                                <Link to={"/login"}> <span className="font-semibold hover:underline hover:text-blue-500">Log In</span></Link>
                            </p>

                            <button
                                type="submit"
                                className="inline-block rounded-lg btn bg-blue-500 px-8  text-sm font-medium text-white"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>

                <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                    <img
                        alt="Welcome"
                        src="https://images.pexels.com/photos/8297226/pexels-photo-8297226.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
            </section>
        </div>
    );
};

export default Registration;