import React, { useEffect, useState } from 'react'
import './UserHome.css'
import userimg from '../../images/user.jpg'
import axios from 'axios';

export default function UserHome() {
  const [coaches, setCoaches] = useState(null);

  const getAllCoaches = async () => {
    await axios.get("http://localhost:9090/coach-service/coach").then((response)=> {
      setCoaches(response.data);
    }).catch((error) => {

    })
  }
  useEffect(() => {
    getAllCoaches();
  }, [])
  
  return (
    <div className="user-home-container">
      <div className="user-home-card">
        {
          coaches?.map((coach) => {
            return (
              <div className="user-home-single-card">
              <div>
                <img className="user-home-card-img" src={userimg} alt="coach-img"/>
              </div>
              <div className="user-home-card-details">
                <div key={coach.id}>
                    <div className="user-home-item">{coach.name}</div>
                    <div className="user-home-font-small-id">Coach id : {coach.id}</div>
                    <div className="user-home-font-small">Mobile number : {coach.mobile}</div>
                    <div className="user-home-font-small">Speciality : {coach.speciality}</div>
                </div>
                <button className="btn-booking">Book an appointment</button>
              </div>
            </div>
            )
          })
        }
        </div>
    </div>
  )
}
