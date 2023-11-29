import React from 'react'
import MainImage from '../assests/Images/MainImage.png'
import Loginform from '../components/authentication/Loginform'
const Login = () => {
  return (
    <div className='flex  justify-around items-center min-h-screen'>
        <img src={MainImage} alt="" className='hidden xl:block w-[50rem]'/>
        <Loginform/>
    </div>
  )
}

export default Login