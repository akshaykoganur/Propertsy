import React, { useEffect, useState } from "react";
//import books2 from "./images/books2.jpg";
import "../index.css";
import RentCard from "./RentCard";

function Rent() {
  const [dat, setMyArray] = useState([]);
  const [city, setCity] = useState('');
  //const clicked = async (e) => {
  //console.log('Hi');
  //}
  async function submitData() {
    try {
      let url = "https://propertsy-backend.onrender.com/api/rentData";
      let res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          city
        })
      });
      let data = await res.json();
      console.log(data);
      setMyArray(data);
    } catch (err) {
      console.error(err);
    }
  }

  const changed = async (e) => {
    let value = e.target.value;
    setCity(value);
  }

  return (
    <>
      {/* <div className="container mb-3 fs-3 m-3">
        {dat !== [] ? (
          dat.map((data, idx) => {
            return (
              <div key={idx} className="row">
                <div key={idx} className="col-12 col-md-6 col-lg-3">
                  <BuyCard buyProperties={data} />
                </div>
              </div>
            );
          })
        ) : (
          <div>**</div>
        )}
      </div> */}

<div class='form-container'>
        <form class='form' method='POST' onSubmit={submitData}>
          <label class='form-label' for='city'>City</label>
          <input class='form-input' type='text' name='city' id='city' value={city} onChange={changed} />
          <button class='form-button' type='submit'>Search</button>
        </form>
      </div>

<div className="container buy mb-3 fs-3 d-flex flex-wrap">
  {dat !== [] ? (
    dat.map((data, idx) => {
      return (
        <div key={idx} className="col-12 col-md-6 col-lg-3 mx-5">
          <RentCard rentProperties={data} />
        </div>
      );
    })
  ) : (
    <div>**</div>
  )}
</div>
      
    </>
  );
}

export default Rent;