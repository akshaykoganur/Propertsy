import React, { useEffect, useState } from "react";
import "../index.css";
import BuyCard from "./BuyCard";

function ViewSell() {
  const [dat, setMyArray] = useState([]);
  async function getBuyProperties() {
    try {
      let url = "";
      const ownerEmail = localStorage.getItem("userEmail");
      let res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ownerEmail
        })
      });
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
      <h1 className="mb-3 fs-3 d-flex flex-wrap justify-content-center">You have listed {dat.length} properties</h1>
      <div className="container buy mb-3 fs-3 d-flex flex-wrap justify-content-center">
        
        {dat.length > 0 ? (
          dat.map((data, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4 d-flex justify-content-center">
              <BuyCard buyProperties={data} />
            </div>
          ))
        ) : (
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
            No Properties listed by you
          </div>
        )}
      </div>

    </>
  );
}

export default ViewSell;
