import React from 'react'
import './UserAppointment.css'

export default function UserAppointment() {
  return (
    <div className="appointment-container">
        <div className="appointment-card">
            <div>
              <div className="appointment-item-date">
                <div>Appointment date:</div>
                <div>Slot</div>
              </div>
              <div className="appointment-item-id">
                <div >Booking id</div>
                <div>User id</div>
                <div>Coach id</div>
              </div>
            </div> 
            <div className="btn-reschedule">
                <button>Reschedule appointment</button>
            </div>  
            <div className="btn-confirm">
                <button>Cancel appointment</button>
            </div>  
        </div>
    </div>
  )
}
