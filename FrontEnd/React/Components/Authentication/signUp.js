import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';


const SignupForm = ({setIsLoggedIn}) => {


   const [formData, setFormData] = useState({
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      confirmPassword:""
  })

  const navigate = useNavigate();
  const [showPassword,setShowPassword] = useState(false);
  const [confirmShowPassword,setConfirmShowPassword] = useState(false);
  const [accountType,setAccountType] = useState("student");

  function changeHandler(event)
  {
      setFormData((prev)=>(
         {
            ...prev,
            [event.target.name]:event.target.value

         }
      ))
  }

  function submitHandler(event)
  {
      event.preventDefault();
      if(formData.password!==formData.confirmPassword)
      {
         toast.error("Password not matched!");
         return;
      }
      

      const finalData ={
         ...formData,accountType
      }

      console.log(finalData);



      setIsLoggedIn(true);
      toast.success("Account Created");
      navigate("/dash");
      
  }

   return (

    <form onSubmit={submitHandler} className='flex flex-col gap-4 mt-6 w-full'>
         <div className='flex flex-row bg-richblack-800 rounded-full p-1 my-6 gap-x-1 max-w-max '>
            <button
            className={`${accountType==="student" 
            ? 
              "bg-richblack-900 rounded-full text-richblack-5"
               :"bg-transparent text-richblack-200"} py-2 px-5 transition-all duration-200"
            `}
            
            onClick={()=> setAccountType("student")}>
                Student
            </button>

            <button
            className={`${accountType==="instructor" 
            ? 
              "bg-richblack-900 rounded-full text-richblack-5"
               :"bg-transparent text-richblack-200"} py-2 px-5 transition-all duration-200"
            `}

            onClick={()=>setAccountType("instructor")}>
                Instructor
            </button>
      </div>
      <div className='flex gap-x-4'>
         <label className='w-full'>
            <p className='text-richblack-5 text-[0.875rem] mb-1  leading-[1.375rem]' >First Name<sup>*</sup></p>   
            <input
                  required
                  type="text"
                  name="firstName"
                  onChange={changeHandler}
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  className='w-full px-2 py-2 bg-richblack-800 text-richblack-5 rounded-[0.5rem] outline-none border-b border-b-slate-400 focus:border-blue-300'
            />
         </label>

         <label className='w-full'>
            <p className='text-richblack-5 text-[0.875rem] mb-1  leading-[1.375rem]'>Last Name<sup>*</sup></p>
            <input
                  required
                  type="text"
                  name="lastName"
                  onChange={changeHandler}
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  className='w-full px-2 py-2 bg-richblack-800 text-richblack-5 rounded-[0.5rem] outline-none border-b border-b-slate-400 focus:border-blue-300'
            />
         </label>
      </div>


         <label>
               <p className='text-richblack-5 text-[0.875rem] mb-1  leading-[1.375rem]' >Email Address<sup>*</sup></p>
               <input
                  required
                  type="email"
                  name="email"
                  onChange={changeHandler}
                  placeholder="Enter Email Address "
                  value={formData.email}
                  className='w-full px-2 py-2 bg-richblack-800 text-richblack-5 rounded-[0.5rem] outline-none border-b border-b-slate-400 focus:border-blue-300'
               />
      </label>

      {/* createPassword and Confirm Password */}
      <div className='w-full flex flex-row gap-x-4'>
            <label className='w-full relative'>
               <p className='text-richblack-5 text-[0.875rem] mb-1  leading-[1.375rem]'>Create Password<sup>*</sup></p>
               <input
                  required
                  type= {showPassword ? ("text") : ("password")}
                  name="password"
                  onChange={changeHandler}
                  placeholder="Enter Password"
                  value={formData.password}
                  className='w-full px-2 py-2 bg-richblack-800 text-richblack-5 rounded-[0.5rem] outline-none border-b border-b-slate-400 focus:border-blue-300'
               />
               <span className='absolute right-3 top-[38px]' onClick={() => setShowPassword((prev) => !prev)}>
                  {showPassword ? (<AiOutlineEyeInvisible font={25} fill="#AFB2BF" />) : (<AiOutlineEye font={25} fill="#AFB2BF" />)}
               </span>
            </label>

            <label className='w-full relative'>
               <p className='text-richblack-5 text-[0.875rem] mb-1  leading-[1.375rem]' >Confirm Password<sup>*</sup></p>
               <input
                  required
                  type= {confirmShowPassword ? ("text") : ("password")}
                  name="confirmPassword"
                  onChange={changeHandler}
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  className='w-full px-2 py-2 bg-richblack-800 text-richblack-5 rounded-[0.5rem] outline-none border-b border-b-slate-400 focus:border-blue-300'
               />
               <span className='absolute right-3 top-[38px]' onClick={() => setConfirmShowPassword((prev) => !prev)}>
                  {confirmShowPassword ? (<AiOutlineEyeInvisible font={25} fill="#AFB2BF" />) : (<AiOutlineEye font={25} fill="#AFB2BF" />)}
               </span>
            </label>
            </div>
        <button className='mt-6 w-full bg-yellow-500 rounded-md py-[0.467rem] font-semibold'>
            Create Account
        </button>
        
      </form>
   );
}

export default SignupForm
