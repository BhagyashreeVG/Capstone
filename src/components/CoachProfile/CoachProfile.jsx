import React from 'react'
import { connect } from 'react-redux'
import './CoachProfile.css'
import coachimg from '../../images/coach.jpg'

function CoachProfile(props) {
  const data = props?.coach;
  console.log("profile" +JSON.stringify(props));
  return (
    <div className="coach-profile-container">
        <div className="profile-card">
            <div>
              <img className="profile-card-img" src={coachimg} alt="coach-img"/>
            </div>
            <div>
                {/* <div className="profilecard-item">Coach id {data.id} </div> */}
                <div className="profilecard-font-small">Date of birth {data.dob}</div>
                <div className="profilecard-font-small">Mobile number {data.mobile}</div>
                <div className="profilecard-font-small">Speciality {data.speciality}</div>
            </div>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    coach : state.loginCoachReducer
  }
}

export default connect(mapStateToProps)(CoachProfile)
