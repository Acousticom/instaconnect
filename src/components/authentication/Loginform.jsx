import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/authContext'
import toast from 'react-hot-toast'
import Brandlogo from '../Brandlogo'
import image from '../../assests/Images/Following-amico (1).png'
// import {image} from '../../assests/add-friends-animate.svg'

const Loginform = () => {

  const [userLoginDetails,setUserLoginDetails]=useState({username:"",password:""})

  const {loginAsGuestHandler,loginHandler}=useAuth()

  const guestLoginHandler=()=>{
    const guestUserDetails={username:"",password:""}
    setUserLoginDetails(guestUserDetails)
    loginAsGuestHandler(guestLoginHandler)
  }

  const loginFormHandler=(event)=>{
    event.preventDefault()
    if(userLoginDetails.username==="" && userLoginDetails.password===""){
      toast.error("Please fill all inputs")
    }
    else{
      loginHandler(userLoginDetails)
    }
  }
  return (<div className=''>
    <div className="flex items-center justify-center gap-4 mb-4">
      <Brandlogo/>
    </div>

    <form className="flex flex-col gap-3" >
      <div className="flex  flex-col gap-1">
        <label htmlFor="username">Username</label>
        <input
          required
          type="text"
          id="username"
          value={userLoginDetails.username}
          onChange={(event) =>
            setUserLoginDetails({
              ...userLoginDetails,
              username: event.target.value,
            })
          }
          className="block w-full p-2 sm:text-sm border border-black
           outline-primaryColor rounded-md"
        />
      </div>

      <div className="flex  flex-col gap-1">
        <label htmlFor="password">Password</label>
        <input
          required
          type="password"
          id="password"
          value={userLoginDetails.password}
          onChange={(event) =>
            setUserLoginDetails({
              ...userLoginDetails,
              password: event.target.value,
            })
          }
          className="block w-full p-2 sm:text-sm border border-black
           outline-primaryColor rounded-md"
        />
      </div>

      <div className="flex flex-col gap-3 my-6">
        <button
          type="submit"
          onClick={loginFormHandler}
          className=" bg-primaryColor text-lg text-white py-2 rounded-md"
        >
          Login
        </button>
        <button
          onClick={guestLoginHandler}
          className=" py-2 text-lg  text-md border border-primaryColor rounded-md"
        >
          Login as guest
        </button>
      </div>
      <span className="text-center">
        Don't have an account?{" "}
        <Link to="/signup" className="text-primaryColor">
          Create one
        </Link>
      </span>
    </form>
  </div>
  )
}

export default Loginform