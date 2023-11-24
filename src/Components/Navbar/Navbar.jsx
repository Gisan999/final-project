import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const navbar = <>
        <li><Link>Home</Link></li>
        <li><Link>Join As Employee</Link></li>
        <li><Link>Join As Admin</Link></li>
        <li><Link to={"/login"}>Login</Link></li>
    </>

const [scrollValue, setScrollValue] = useState(0);
const scrollEvent = () => {
    setScrollValue(window.scrollY)
}
useEffect(() => {
    const scroll = window.addEventListener("scroll", scrollEvent);
    return () => scroll;
}, [])

    return (
        <div>
            <div className="drawer z-40 ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className={`w-full navbar ${scrollValue ?  'bg-gray-300 text-black' : 'bg-black bg-opacity-50 '} fixed z-20 text-white py-4`}>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">Navbar Title</div> 
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {navbar}
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="drawer-side mt-16">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        {navbar}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;