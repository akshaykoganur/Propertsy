import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import "../index.css";


function Profile() {
  const [dat, setMyArray] = useState([]);
  //const clicked = async (e) => {
  //console.log('Hi');
  //}
  async function getProfile() {
    try {
      let url = "https://propertsy-backend.onrender.com/api/user/profile";
      const email = localStorage.getItem("userEmail");
      let res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email
        })
      });
      let data = await res.json();
      console.log(data);
      setMyArray(data);
      console.log(dat);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getProfile();
  });
  return (
    <div className='profile' style={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
      <div className='profilepageCard' >
        <div>
          <div >

            <div >
              <ProfileCard userProfile={dat} />
            </div>
          </div>
        </div>
      </div>
      <div className='profilegrid'>
        <div className='profileflex'>
          <div className='profileroutes'>
            <Link to='/submitSell'>
              Sell Properties
            </Link>
          </div>
          <div className='profileroutes'>
            <Link to='/submitRent'>
              Rent Properties
            </Link>
          </div>
        </div>
        <div className='profileflex'>
          <div className='profileroutes'>
            <Link to='/viewSell'>
              View Your Properties for Sell
            </Link>
          </div>
          <div className='profileroutes'>
            <Link to='/viewRent'>
              View Your Properties for Rent
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile