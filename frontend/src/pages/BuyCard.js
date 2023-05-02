import React, { useState } from 'react'
//import { useState } from 'react'
//import Cart from './Cart'
//import {useDispatchCart, useCart} from'./ContextReducer';

function BuyCard(props) {
  return (
    <div className="card" style={{ width: "20rem", margin: "2%" }}>
        
        <div className="card-body">
            <h5 className="card-title">{props.buyProperties.name}</h5>
            <h5 className="card-title">Rs. {props.buyProperties.price}</h5>
            <h5 className="card-title">{props.buyProperties.city}</h5>
            <h6 className="card-title">{props.buyProperties.street}</h6>
            <h6 className="card-title">{props.buyProperties.locality}</h6>
            {/*<img src={props.buyProperties.image} />*/}
        </div>
    </div>
  )
}

export default BuyCard;