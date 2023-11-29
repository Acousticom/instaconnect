import React from 'react'

const ProfileImage = ({image}) => {
  return (
    <div>
        <img src={image} alt='' className='w-12 h-12 rounded-full'/>
    </div>
  )
}

export default ProfileImage