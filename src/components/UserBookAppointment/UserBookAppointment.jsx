import React from 'react'
import './UserBookAppointment.css'

export default function UserBookAppointment() {
  return (
    <div className="appointment-container">
      <div className="user-appointment-card">
            <div className="user-booking-single-card">
                <h3 className="user-booking-h3">Proceed with your appointment</h3>
                <div className="appointment-elements">
                    <label>Appointment date</label>
                    <input className="appointment-input-date" type="text" />
                </div>
                <div className="appointment-elements">
                    <div>Preferred slot</div>
                    <div>
                        <input type="radio" name="appointment_slot" value="9 am to 10 am<"/>
                        <label >9 am to 10 am</label>
                        <input type="radio" name="appointment_slot" value="10 am to 11 am"/>
                        <label >10 am to 11 am</label>
                        <input type="radio" name="appointment_slot" value="11 am to 12 pm"/>
                        <label >11 am to 12 pm</label>
                        <input type="radio" name="appointment_slot" value="2 pm to 3pm"/>
                        <label >2 pm to 3pm</label>
                    </div>
                </div>
                <div className="btn-confirm-appt">
                    <button>Confirm appointment</button>
                </div> 
            </div>     
            </div>
      </div> 
  )
}
