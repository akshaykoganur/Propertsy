import React, { useEffect, useState } from "react";
//import books2 from "./images/books2.jpg";
import "../index.css";
import BuyCard from "./BuyCard";

function Buy() {
  const [dat, setMyArray] = useState([]);
  //const clicked = async (e) => {
    //console.log('Hi');
  //}
  async function getBuyProperties() {
    try {
      let url = "http://localhost:5000/api/user/yourSellData";
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      setMyArray(data);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getBuyProperties();
  }, []);
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

<div className="container buy mb-3 fs-3 d-flex flex-wrap">
  {dat !== [] ? (
    dat.map((data, idx) => {
      return (
        <div key={idx} className="col-12 col-md-6 col-lg-3 mx-5">
          <BuyCard buyProperties={data} />
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

export default ViewSell;