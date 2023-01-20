import React from 'react'
import './CoachHome.css'

function CoachHome() {
  return (
    <div className="coach-home-container">
        <div className="appointment-card">
            <div className="card-item">Appointment Date:</div>
            <div className="card-item">Slot</div>
            <div className="card-font-small">Booking id</div>
            <div className="card-font-small">User id</div>
        </div>
    </div>
  )
}

export default CoachHome