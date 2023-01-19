import React, { useState } from 'react'
import './CoachSignup.css'
import coachimg from '../../images/coach.jpg'

export default function CoachSignup() {
  const initialState = { cname:"", password:"", dob:"", gender:"", mobile:"", speciality:"" }; 
  const [coach, setCoach] = useState(initialState);  
  const { cname, password, dob, gender, mobile, speciality } = coach;  

  const onChangeInput = (event) => {
    setCoach({...coach, [event.target.name] : event.target.value})
  }
  const coachSignupSubmitHandler = (event) => {
    event.preventDefault();
    console.log(coach)
  }  
  return (
    <div className="coach-signup-container">
        <div className="coach-signup-form">
            <h2>
                <img className="coach-signup-img" src={coachimg} alt="coach-signup-img"/>
                <span>Life coach profile</span>
            </h2>
            <form onSubmit={(event) => {coachSignupSubmitHandler(event)}}>
                
                <div className="element">
                    <label className="element-label">Name</label>
                    <input 
                        className="element-input"
                        type="text"
                        minLength="3"
                        maxLength="50"
                        name="cname"
                        value={cname}
                        onChange={(event)=>{onChangeInput(event)}}
                    />
                </div>
                <div className="element">
                    <label className="element-label">Password</label>
                    <input 
                        className="element-input"
                        type="password"
                        minLength="5"
                        maxLength="10"
                        name="password"
                        value={password}
                        onChange={(event)=>{onChangeInput(event)}}
                    />
                </div>
                <div className="element">
                    <label className="element-label">Date of birth</label>
                    <input 
                        className="element-input"
                        type="calender"
                        /* minLength="20"
                        maxLength="100" */
                        name="dob"
                        value={dob}
                        onChange={(event)=>{onChangeInput(event)}}
                    />
                </div>
                <div className="element">
                    <label className="element-label">Gender</label>
                    <div className="element-radio">
                        <input type="radio" name="gender" value="Male"/>
                        <label >Male</label>
                        <input type="radio" name="gender" value="Female"/>
                        <label >Female</label>
                    </div>
                </div> 
                <div className="element">
                    <label className="element-label">Mobile number</label>
                    <input 
                        className="element-input"
                        type="number"
                        name="mobile"
                        value={mobile}
                        onChange={(event)=>{onChangeInput(event)}}
                    />
                </div>
                <div className="element">
                    <label className="element-label">Speciality</label>
                    <input 
                        className="element-input"
                        type="text"
                        minLength="3"
                        maxLength="50"
                        name="speciality"
                        value={speciality}
                        onChange={(event)=>{onChangeInput(event)}}
                    />
                </div>      
                <div className="element-btn">
                    <button>Register</button>
                </div>  
            </form>
        </div>
    </div>
  )
}
