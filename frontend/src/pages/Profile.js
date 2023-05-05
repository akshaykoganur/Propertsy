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
      let url = "http://localhost:5000/api/user/profile";
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
  }, []);
  return (
    <div className='profile'>
      <div className="container buy mb-3 fs-3 d-flex flex-wrap">

        <div className="col-12 col-md-6 col-lg-3 mx-5">
          <ProfileCard userProfile={dat} />
        </div>
      </div>
      <Link to='/submitSell'>
        Sell Properties
      </Link>
      <Link to='/submitRent'>
        Rent Properties
      </Link>
      <Link to='/viewSell'>
        View Your Properties for Sell
      </Link>
      <Link to='/viewRent'>
        View Your Properties for Rent
      </Link>
    </div>
  )
}

export default Profile