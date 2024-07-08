import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useAsyncError, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const LoginForm = ({setIsLoggedIn}) => {

  const [formData,setFormData] = useState({
    email:"", password:""
  })

  const [showPassword,setShowPassword] = useState(false);
  const navigate = useNavigate();

  function changeHandler(event)
  {
    setFormData((prev)=>(
      {
        ...prev,
        [event.target.name]:event.target.value
      }
    ))
  }

  function sumbitHandler(event)
  {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dash");
    
  }
  
  return (
    <form onSubmit={sumbitHandler}
    className='flex flex-col gap-4 mt-6 w-full '>

      <label className='w-full'> 
        <p className='text-richblack-5 text-[0.875rem] mb-1  leading-[1.375rem]'>
          Email Address<sup className='text-red-600'>*</sup>
        </p>
        <input
        type='email'
        name='email'
        value={formData.email}
        required
        placeholder='Enter email id'
        onChange={changeHandler}
        className='w-full px-2 py-2 bg-richblack-800 text-richblack-5 rounded-[0.5rem] outline-none border-b border-b-slate-400 focus:border-blue-300'
        ></input>

      </label>

      <label className='w-full relative'> 
        <p className='text-richblack-5 text-[0.875rem] mb-1  leading-[1.375rem]'>
          Password<sup className='text-red-600'>*</sup>
        </p>
        <input
        type= { showPassword ? ("text") : ("password")}
        name='password'
        value={formData.password}
        required
        placeholder='Enter password'
        onChange={changeHandler}
        className='w-full px-2 py-2 bg-richblack-800 text-richblack-5 rounded-[0.5rem] outline-none border-b border-b-slate-400 focus:border-blue-300'
        ></input>
        <span className='absolute right-3 top-[38px]' onClick={() => setShowPassword((prev)=> !prev)}>
          {showPassword ? (<AiOutlineEyeInvisible font={25} fill="#AFB2BF" />) : (<AiOutlineEye font={25} fill="#AFB2BF"/>)}
        </span>

        <Link to="#">
          <p className='text-blue-100 text-[12px] text-right '>Forgot Password</p>
        </Link>

      </label>  
    
      <button className='mt-6 w-full bg-yellow-500 rounded-md py-[0.467rem] font-semibold'>
        Sign In
      </button>

    </form>
   
  )
}

export default LoginForm
