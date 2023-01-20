import React from 'react'
import './UserProfile.css'

export default function USerProfile() {
  return (
    <div className="user-profile-container">
      <div className="user-profile-card">
        <div className="user-card-item">
          <div>
              Img
          </div>
          <div className="user-card-item-details">
              <div className="user-profilecard-item">User name</div>
              <div className="user-profilecard-font-small">Date of birth</div>
              <div className="user-profilecard-font-small">Email id</div>
              <div className="user-profilecard-font-small">Mobile number</div>
              <div className="user-profilecard-font-small">Address</div>
              <div className="user-profilecard-font-small">Pincode</div>
          </div>
        </div>
        <div> 
          <button className="btn-back">Go back</button>
        </div>
      </div>
  </div>
  )
}
