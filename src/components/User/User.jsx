import React from 'react'
import './User.css'
import userimg from '../../images/user.jpg'

function User() {
  return (
    <div className="user-card">
        <img src={userimg} alt="coach-img"/>
        <button>Login as a User</button>
        <button>Join as a User</button>
    </div>
  )
}

export default User