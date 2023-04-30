import React, { useState } from 'react'
//import { useState } from 'react'
//import Cart from './Cart'
//import {useDispatchCart, useCart} from'./ContextReducer';

function SellCard(props) {
  return (
    <div className="card" style={{ width: "20rem", margin: "2%" }}>
        
        <div className="card-body">
            <h5 className="card-title">{props.sellProperties.name}</h5>
            <img src={props.sellProperties.image} />
        </div>
    </div>
  )
}

export default SellCard;