import React from 'react'
import './UserList.css'

const UserCard = ({user}) => {
  return (
    <div className='col-md-4 mb-4'>
    <div className='card h-100'>
      <div className='card-body'>
        <h4 className='card-title'>{user.name}</h4>
        <p className='card-text'>@{user.username}</p>
        <p className='card-text'>Email:{user.email}</p>
        <p className='card-text'>Phone:{user.phone}</p>
      </div>
    </div>
  </div>
  )
}

export default UserCard
