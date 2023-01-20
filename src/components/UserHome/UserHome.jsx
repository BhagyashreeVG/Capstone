import React from 'react'
import './UserHome.css'

export default function UserHome() {
  return (
    <div className="user-home-container">
      <div className="user-home-card">
        <div>
            Img
        </div>
        <div className="user-home-card-details">
          <div>
              <div className="user-home-item">User name</div>
              <div className="user-home-font-small-id">Coach id</div>
              <div className="user-home-font-small">Mobile number</div>
              <div className="user-home-font-small">Speciality</div>
          </div>
          <button className="btn-booking">Book an appointment</button>
        </div>
      </div>
    </div>
  )
}
