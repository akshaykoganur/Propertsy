import React from 'react'

function ViewBuyProperties() {

    var currentProperty = sessionStorage.getItem('cur_Property');
    var storedArray = JSON.parse(sessionStorage.getItem(currentProperty));

  return (
    <div className="card" style={{ width: "20rem", margin: "2%" }}>
        
        <div className="card-body align-text-center">
        <h5 className="card-title" style={{textAlign: 'center'}}>{storedArray.type}<span>, {storedArray.name}</span></h5>
            <img src={storedArray.image} alt={""} width="100%" height="50%" />
            <h5 className="card-title">Rs. {storedArray.price}</h5>
            <h5 className="card-title">{storedArray.city}</h5>
            <h6 className="card-title">{storedArray.street}<span>, {storedArray.locality}</span></h6>
          <h6 className="card-title">{storedArray.ownerName}<span>, {storedArray.ownerContact}</span></h6>
        </div>
    </div>
  )
}

export default ViewBuyProperties;