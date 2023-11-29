import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/authContext'

const ProtectedRoute = () => {
  const {token}=useAuth()
  return (
    <div>
      {token?<Outlet/>:<Navigate to='/login'/>}
    </div>
  )
}

export default ProtectedRoute