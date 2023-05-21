import React, { useEffect, useState } from "react";
//import books2 from "./images/books2.jpg";
import "../index.css";
import BuyCard from "./BuyCard";

function ViewSell() {
  const [dat, setMyArray] = useState([]);
  //const clicked = async (e) => {
  //console.log('Hi');
  //}
  async function getBuyProperties() {
    try {
      let url = "https://propertsy-backend.onrender.com/api/user/yourSellData";
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
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
  <h1>Total {dat.length} properties listed for sell by you</h1>
</div>

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