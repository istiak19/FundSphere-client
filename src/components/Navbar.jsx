import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaRegUser } from "react-icons/fa";
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";
import logoPic from '../assets/logopic (2).png'

const Navbar = () => {
    const { user, signOutUser, isDarkMode, toggleTheme } = useContext(AuthContext)

    const handleSignOut = () => {
        signOutUser()
            .then(() => {

            })
            .catch((error) => {
                // console.log(error.message)
            })
    }

    const links = <>
        <li><NavLink  className={({ isActive }) => (isActive ? "!text-white !font-bold !bg-transparent" : "text-black")} to='/'>Home</NavLink></li>
        <li><NavLink  className={({ isActive }) => (isActive ? "!text-white !font-bold !bg-transparent" : "text-black")} to='/all-campaign'>All Campaign</NavLink></li>
        {
            user && <li><NavLink  className={({ isActive }) => (isActive ? "!text-white !font-bold !bg-transparent" : "text-black")} to='/add-campaign'>Add New Campaign</NavLink></li>
        }
        {
            user && <li><NavLink  className={({ isActive }) => (isActive ? "!text-white !font-bold !bg-transparent" : "text-black")} to='/my-campaign'>My Campaign</NavLink></li>
        }
        {
            user && <li><NavLink  className={({ isActive }) => (isActive ? "!text-white !font-bold !bg-transparent" : "text-black")} to='/my-donations'>My Donations</NavLink></li>
        }
    </>

    return (
        <div className={`bg-[#F2B33D] sticky top-0 z-50`}>
            <div className="navbar w-11/12 mx-auto py-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">
                        <img className="h-10" src={logoPic} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className={`${isDarkMode && '*:text-gray-600 '} menu menu-horizontal px-1`}>
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button
                        onClick={toggleTheme}
                        className="btn btn-ghost text-gray-600 text-3xl ml-3"
                    >
                        {isDarkMode ? <MdOutlineDarkMode /> : <MdLightMode />}
                    </button>
                    {
                        user ? <img className="w-12 h-12 rounded-full hidden sm:block" src={user.photoURL} alt="" /> : <span className="text-3xl  mr-3 text-gray-700"><FaRegUser></FaRegUser></span>
                    }
                    {
                        user ? <button onClick={handleSignOut} className="btn bg-[#F2B33D] border-2 border-gray-600 text-gray-700 font-semibold ml-3">Logout</button> : <Link to='/login' className="btn bg-[#F2B33D] border-2 border-gray-600 text-gray-700 font-semibold">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;