import React from 'react'

function RentCard(props) {
  return (
    <div className="card" style={{ width: "20rem", margin: "2%" }}>
        
        <div className="card-body align-text-center">
        <h5 className="card-title" style={{textAlign: 'center'}}>{props.rentProperties.type}<span>, {props.rentProperties.name}</span></h5>
            <img src={props.rentProperties.image} alt={""} width="100%" height="50%" />
            <h5 className="card-title">Rs. {props.rentProperties.rent}</h5>
            <h5 className="card-title">{props.rentProperties.city}</h5>
            <h6 className="card-title">{props.rentProperties.street}<span>, {props.rentProperties.locality}</span></h6>
            <h6 className="card-title">{props.rentProperties.ownerName}<span>, {props.rentProperties.ownerContact}</span></h6>
            <button style={{ fontSize:"1rem"}}>View More..</button>
            {/*<img src={props.rentProperties.image} />*/}
        </div>
    </div>
  )
}

export default RentCard;