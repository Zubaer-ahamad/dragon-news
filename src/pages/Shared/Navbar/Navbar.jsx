import { Link, NavLink } from "react-router-dom";
import userImg from '../../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvide";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('Sign Out Successful')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="navbar bg-base-100 mb-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            links
                        }
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div className="w-10 rounded-full me-2">
                    <img src={userImg} alt="Tailwind CSS Navbar component" />
                </div>
                {
                    user ? <button onClick={handleLogOut} className="btn bg-black opacity-70 text-white px-10">Sign Out</button>
                        : <Link to="/login" className="btn bg-black opacity-70 text-white px-10">Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;