import React from 'react'
import logo from "../assets/Logo.svg"
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"



const Navbar = (props) => {

    
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    function loginHandler()
    {
        setIsLoggedIn(true);
        toast.success("Logged In");
    }


     return (
        <div className='flex flex-row justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

            <Link to="/">
                <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
            </Link>

            <nav>
                <ul className='text-white flex flex-row gap-3 gap-x-6'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>


            <div className='flex gap-x-4 items-center'>
                
                { !isLoggedIn &&
                    <Link to="/login">
                        <button className='text-white bg-richblack-800 rounded-[8px] border border-richblack-700 py-[4px] px-[8px] '>
                            Login
                        </button>
                    </Link>
                }
                {
                    !isLoggedIn &&
                    <Link to="/signup">
                        <button className='text-white bg-richblack-800 rounded-[8px] border border-richblack-700 py-[4px] px-[8px] '>
                            Signup
                        </button>
                    </Link>
                }
                {
                    isLoggedIn &&
                    <Link to="/">
                        <button onClick={()=>{
                            setIsLoggedIn(false);
                            toast.success("Logged Out!");
                            
                        }}   className='text-white bg-richblack-800 rounded-[8px] border border-richblack-700 py-[4px] px-[8px] '>
                            Log Out
                        </button>
                    </Link>
                }
                {
                    isLoggedIn &&
                    <Link to="/dash">
                        <button className='text-white bg-richblack-800 rounded-[8px] border border-richblack-700 py-[4px] px-[8px] '>
                            Dashboard
                        </button>
                    </Link>
                }
            </div>


          

        </div>
    )
}

export default Navbar
