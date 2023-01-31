import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import './UserAppointment.css'

function UserAppointment(props) {
  console.log(JSON.stringify(props))
  const [appointments, setappointments] = useState(null);

  const handleCancelAppointment = async (event, appointment) => {
    event.preventDefault();
    await axios.delete(`http://localhost:9090/appointment-service/coach/${appointment.id}`).then((response)=> {
      getAllAppointments();
    }).catch((error) => {

    })
  }

  const getAllAppointments = async () => {
    await axios.get(`http://localhost:9090/appointment-service/coach/${props.user.id}`).then((response)=> {
      setappointments(response.data);
    }).catch((error) => {

    })
  }
  useEffect(() => {
    getAllAppointments();
  }, [])
  
  return (
    <div className="appointment-container">
      <div className="user-appointment-card">
      {
        appointments?.map((appointment) => {
          return (
              <div className="user-appointment-single-card">
              <div>
                <div className="appointment-item-date">
                  <div>Appointment date: {appointment.date}</div>
                  <div>Slot: {appointment.slot}</div>
                </div>
                <div className="appointment-item-id">
                  <div >Booking id: {appointment.id}</div>
                  <div>User id: {appointment.userId}</div>
                  <div>Coach id: {appointment.coachId}</div>
                </div>
              </div> 
              <div className="btn-reschedule">
                  <button>Reschedule appointment</button>
              </div>  
              <div className="btn-confirm">
                  <button onClick={ (event)=> { handleCancelAppointment(event, appointment)}}>Cancel appointment</button>
              </div>  
              </div>
          )
        })
      }
      </div> 
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.loginUserReducer
  }
}
export default connect(mapStateToProps)(UserAppointment)
