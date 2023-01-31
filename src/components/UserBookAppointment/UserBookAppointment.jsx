import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import './UserBookAppointment.css'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { initUser } from '../../data/user';

function UserBookAppointment(props) {
  const initialState = { date: "",slot: "", userId: props.user.id, coachId: props.coachId};
  const [appointment, setAppointment] = useState(initialState);
  const { id, date, slot, userId, coachId } = appointment;
  const [apptSuccess, setApptSuccess] = useState(false);


  const handleConfirmAppointment = async () => {
    console.log(JSON.stringify(appointment))
    await axios.post(`http://localhost:9090/appointment-service/addApp`,appointment ).then((res)=> {
        setApptSuccess(true);
        
    }).catch((err)=>{
        console.log(err)
    })
  }

  const onSlotChange = (event) => {
    setAppointment({...appointment, [event.target.name]: event.target.value})
   
  }

  const handleChange = (event) => {
      setAppointment({...appointment, [event.target.name]: event.target.value})
  }

  if(!apptSuccess)
  {
  return (
    <div className="appointment-container">
      <div className="user-appointment-card">
            <div className="user-booking-single-card">
                <h3 className="user-booking-h3">Proceed with your appointment</h3>
                <div className="appointment-elements">
                    <label>Appointment date</label>
                    <input className="appointment-input-date" type="text" name="date" value={date} onChange={ (e) => handleChange(e)}/>
                </div>
                <div className="appointment-elements">
                    <div>Preferred slot</div>
                    <div>
                        <input type="radio" name="slot" value="9 am to 10 am" onChange={ (e) => {onSlotChange(e)}}/>
                        <label >9 am to 10 am</label>
                        <input type="radio" name="slot" value="10 am to 11 am" onChange={ (e) => {onSlotChange(e)}}/>
                        <label >10 am to 11 am</label>
                        <input type="radio" name="slot" value="11 am to 12 pm" onChange={ (e) => {onSlotChange(e)}}/>
                        <label >11 am to 12 pm</label>
                        <input type="radio" name="slot" value="2 pm to 3pm" onChange={ (e) => {onSlotChange(e)}}/>
                        <label >2 pm to 3pm</label>
                    </div>
                </div>
                <div className="btn-confirm-appt">
                    <button onClick={()=> { handleConfirmAppointment()}}>Confirm appointment</button>
                </div> 
            </div>     
            </div>
      </div> 
  )
  } else {
      return (
        <div className="appointment-container">
        <div className="user-appointment-card">
              <div className="user-booking-single-card">
                  <h3 className="user-booking-none-h3">Your appointment is scheduled successfully</h3>
              </div>     
              </div>
        </div> 
      )
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.loginUserReducer
    }
}
export default connect(mapStateToProps)(UserBookAppointment);