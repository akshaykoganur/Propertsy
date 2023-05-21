import React from 'react'
//import { useState } from 'react'
//import Cart from './Cart'
//import {useDispatchCart, useCart} from'./ContextReducer';

function RentCard(props) {
  return (
    <div className="card" style={{ width: "20rem", margin: "2%" }}>
        
        <div className="card-body align-text-center">
        <h5 className="card-title" style={{textAlign: 'center'}}>{props.rentProperties.type}<span>, {props.rentProperties.name}</span></h5>
            <img src={props.rentProperties.image} alt={""} width="280px" height="200px" />
            <h5 className="card-title">Rs. {props.rentProperties.rent}</h5>
            <h5 className="card-title">{props.rentProperties.city}</h5>
            <h6 className="card-title">{props.rentProperties.street}<span>, {props.rentProperties.locality}</span></h6>
            <h6 className="card-title">{props.buyProperties.ownerName}<span>, {props.buyProperties.ownerContact}</span></h6>
            <button style={{ fontSize:"1rem"}}>View More..</button>
            {/*<img src={props.rentProperties.image} />*/}
        </div>
    </div>
  )
}

export default RentCard;