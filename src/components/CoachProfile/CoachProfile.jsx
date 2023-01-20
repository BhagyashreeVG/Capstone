import React from 'react'
import './CoachProfile.css'

export default function CoachProfile() {
  return (
    <div className="coach-profile-container">
        <div className="profile-card">
            <div>
                Img
            </div>
            <div>
                <div className="profilecard-item">Coach id</div>
                <div className="profilecard-font-small">Date of birth</div>
                <div className="profilecard-font-small">Mobile number</div>
                <div className="profilecard-font-small">Speciality</div>
            </div>
        </div>
    </div>
  )
}
