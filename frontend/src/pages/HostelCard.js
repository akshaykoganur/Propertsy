import React from 'react'

function HostelCard(props) {
  return (
    <div className="card" style={{ width: "20rem", margin: "2%" }}>
        
        <div className="card-body align-text-center">
        <h5 className="card-title" style={{textAlign: 'center'}}>{props.hostelProperties.type}<span>, {props.hostelProperties.name}</span></h5>
            <img src={props.hostelProperties.image} alt={""} width="100%" height="50%" />
            <h5 className="card-title">Rs. {props.hostelProperties.price}</h5>
            <h5 className="card-title">{props.hostelProperties.city}</h5>
            <h6 className="card-title">{props.hostelProperties.street}<span>, {props.hostelProperties.locality}</span></h6>
            <h6 className="card-title">{props.hostelProperties.ownerName}<span>, {props.hostelProperties.ownerContact}</span></h6>
            <button style={{ fontSize:"1rem"}}>View More..</button>
            {/*<img src={props.hostelProperties.image} />*/}
        </div>
    </div>
  )
}

export default HostelCard;