import React from 'react'
import Brandlogo from './Brandlogo'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <div className='border-2 py-5 px-10 fixed top 0 w-full bg-white mb-10 shadow-lg z-50' onClick={()=>navigate('/')}>
        <Brandlogo/>
    </div>
  )
}

export default Navbar