import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import logo from '../../assets/download.png'
import useAdmin from "../../Hooks/useAdmin";
import useUserData from "../../Hooks/useUserData";

const Navbar = () => {
    const [scrollValue, setScrollValue] = useState(0);
    const scrollEvent = () => {
        setScrollValue(window.scrollY)
    }
    useEffect(() => {
        const scroll = window.addEventListener("scroll", scrollEvent);
        return () => scroll;
    }, [])

    const { user, logOut } = useAuth();
    const [isAdmin] = useAdmin();
    const [userData] = useUserData();
    const navigate = useNavigate();
    // console.log(userData);
    // console.log(isAdmin);
    const handleLogOut = () => {
        logOut()
            .then(res => {
                console.log(res);
                navigate('/')
                Swal.fire({
                    position: 'center',
                    title: 'Successfully Logout ',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2000
                })
            })
            .catch()
    }

    const navbar = <>
       


        {user ? <>
            {isAdmin ? <>
                <li className="text-base  "><NavLink
                    to="/adminHome"
                    style={({ isActive, isPending }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "white",
                        };
                    }}
                >
                    Home
                </NavLink></li>


                <li className="text-base  "><NavLink
                    to="/assetList"
                    style={({ isActive, isPending }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "white",
                        };
                    }}
                >
                    Asset List
                </NavLink></li>
                <li className="text-base  "><NavLink
                    to="/addAsset"
                    style={({ isActive, isPending }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "white",
                        };
                    }}
                >
                    Add an Asset
                </NavLink></li>
                <li className="text-base  "><NavLink
                    to="/addEmployee"
                    style={({ isActive, isPending }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "white",
                        };
                    }}
                >
                    Add an Employee
                </NavLink></li>

            </> : <>

                <li className="text-base  "><NavLink
                    to="/employeeHome"
                    style={({ isActive, isPending }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "white",
                        };
                    }}
                >
                    Home
                </NavLink></li>
                <li className="text-base  "><NavLink
                    to="/"
                    style={({ isActive, isPending }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "white",
                        };
                    }}
                >
                    My Assets
                </NavLink></li>
                <li className="text-base  "><NavLink
                    to="/myTeam"
                    style={({ isActive, isPending }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "white",
                        };
                    }}
                >
                    My Team
                </NavLink></li>
                <li className="text-base  "><NavLink
                    to="/"
                    style={({ isActive, isPending }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "white",
                        };
                    }}
                >
                    Request Assets
                </NavLink></li>
                <li className="text-base  "><NavLink
                    to="/registration"
                    style={({ isActive, isPending }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "white",
                        };
                    }}
                >
                    Custom Request
                </NavLink></li>

            </>}
        </> :
            <> 
            
            <li className="text-base  "><NavLink
            to="/"
            style={({ isActive, isPending }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "white",
                };
            }}
        >
            Home
        </NavLink></li>
            <li className="text-base  "><NavLink
                to="/employeeJoin"
                style={({ isActive, isPending }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isPending ? "red" : "white",
                    };
                }}
            >
                Join As Employee
            </NavLink></li>
                <li className="text-base  "><NavLink
                    to="/adminJoin"
                    style={({ isActive, isPending }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "white",
                        };
                    }}
                >
                    Join As Admin
                </NavLink></li> </>}

        {
            user ? '' :

                <li className="text-base  "><NavLink
                    to="/login"
                    style={({ isActive, isPending }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "white",
                        };
                    }}
                >
                    Login
                </NavLink></li>
        }

    </>

    return (
        <div>
            <div className="drawer z-40 ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className={`w-full lg:px-16 navbar ${scrollValue ? 'bg-black bg-opacity-50 text-white border-b' : 'bg-slate-400 bg-opacity-50'} fixed z-20 text-white py-4`}>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>

                        <div className="flex-1 px-2 mx-2 ">
                            <img className="w-48 md:w-60" src={logo} alt="" />
                        </div>


                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {navbar}
                            </ul>
                        </div>

                        {user ? <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
                            <div tabIndex={0} className="btn btn-lg rounded-full bg-teal-500 bg-opacity-50 hover:bg-blue-700 text-white pl-5 gap-5 ">
                                <p className="text-sm hidden md:block">{user?.displayName}</p>
                                <img className="h-12 w-12 rounded-full" src={user?.photoURL} alt="" />
                            </div>

                            <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-96  shadow  text-primary-content">
                                <div className="card-body">
                                    <div className="bg-gray-100  flex items-center justify-center p-2">
                                        <div className="bg-white p-3 rounded-lg shadow-md max-w-lg w-full">
                                            <div className="relative">
                                                <div>

                                                    <img src={user?.photoURL} alt="Banner Profile" className="w-full rounded-t-lg h-36 " />
                                                </div>
                                                <img src={user?.photoURL} alt="Profile Picture" className="absolute bottom-0 left-2/4 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white" />
                                            </div>
                                            <div className="flex items-center mt-12">
                                                <h2 className="text-xl font-bold text-gray-800">{user?.displayName}</h2>
                                                <button className=" px-2 py-1 rounded-full">
                                                    <svg fill="#4d9aff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16px" height="16px" viewBox="0 0 536.541 536.541" xmlSpace="preserve" stroke="#4d9aff">
                                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                                        <g id="SVGRepo_iconCarrier">
                                                            <g>
                                                                <g>
                                                                    <path d="M496.785,152.779c-3.305-25.085-16.549-51.934-38.826-74.205c-22.264-22.265-49.107-35.508-74.186-38.813 c-11.348-1.499-26.5-7.766-35.582-14.737C328.111,9.626,299.764,0,268.27,0s-59.841,9.626-79.921,25.024 c-9.082,6.965-24.235,13.238-35.582,14.737c-25.08,3.305-51.922,16.549-74.187,38.813c-22.277,22.271-35.521,49.119-38.825,74.205 c-1.493,11.347-7.766,26.494-14.731,35.57C9.621,208.422,0,236.776,0,268.27s9.621,59.847,25.024,79.921 c6.971,9.082,13.238,24.223,14.731,35.568c3.305,25.086,16.548,51.936,38.825,74.205c22.265,22.266,49.107,35.51,74.187,38.814 c11.347,1.498,26.5,7.771,35.582,14.736c20.073,15.398,48.421,25.025,79.921,25.025s59.841-9.627,79.921-25.025 c9.082-6.965,24.234-13.238,35.582-14.736c25.078-3.305,51.922-16.549,74.186-38.814c22.277-22.27,35.521-49.119,38.826-74.205 c1.492-11.346,7.766-26.492,14.73-35.568c15.404-20.074,25.025-48.422,25.025-79.921c0-31.494-9.621-59.848-25.025-79.921 C504.545,179.273,498.277,164.126,496.785,152.779z M439.256,180.43L246.477,373.209l-30.845,30.846 c-8.519,8.52-22.326,8.52-30.845,0l-30.845-30.846l-56.665-56.658c-8.519-8.52-8.519-22.326,0-30.846l30.845-30.844 c8.519-8.519,22.326-8.519,30.845,0l41.237,41.236L377.561,118.74c8.52-8.519,22.326-8.519,30.846,0l30.844,30.845 C447.775,158.104,447.775,171.917,439.256,180.43z"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </button>
                                            </div>
                                            <h2 className="text-base font-medium text-black">Your Email:  <span className="text-gray-500 text-ellipsis font-thin tracking-wider">{user?.email}</span> </h2>
                                            <h2 className="text-base font-medium text-black">Role: {userData?.role} </h2>
                                            <p className="text-gray-700 mt-2"> Web Developer | Cat Lover | Coffee Enthusiast </p>
                                            <h2 className="text-black py-1"><span className="font-semibold ">Last SignIn Time:</span> {user?.metadata.lastSignInTime}</h2>

                                            <hr className="my-4 border-t border-gray-300" />

                                            {
                                                isAdmin ?
                                                    <>

                                                        <ul className=" z-[1] menu text-gray-500">
                                                            <li className="hover:bg-gray-100 rounded-md"><Link>All Requests</Link></li>
                                                            <li className="hover:bg-gray-100 rounded-md"><Link>Custom Requests List</Link></li>
                                                            <li className="hover:bg-gray-100 rounded-md"><Link to={"/myEmployee"}>My Employee List</Link></li>

                                                        </ul>

                                                    </> : ''
                                            }


                                            <hr className="my-4 border-t border-gray-300" />
                                            <div className="flex justify-between text-gray-600 mx-2">
                                                <button onClick={handleLogOut} className="btn btn-sm px-6 btn-outline btn-info">Logout</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : ''}

                    </div>


                </div>

                <div className="drawer-side mt-16  lg:hidden">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-gray-400 ">
                        {navbar}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;