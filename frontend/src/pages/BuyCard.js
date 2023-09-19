import React from 'react'
import {useNavigate} from 'react-router-dom';


function BuyCard(props) {
  const navigate = useNavigate();

  async function showProperty(){
    sessionStorage.setItem('cur_Property', props.buyProperties._id);
    navigate('/viewBuyProperty');
  }
  

  return (
    <div className="card" style={{ width: "20rem", margin: "2%" }}>
        
        <div className="card-body align-text-center">
        <h5 className="card-title" style={{textAlign: 'center'}}>{props.buyProperties.type}<span>, {props.buyProperties.name}</span></h5>
            <img src={props.buyProperties.image} alt={""} width="100%" height="50%" />
            <h5 className="card-title">Rs. {props.buyProperties.price}</h5>
            <h5 className="card-title">{props.buyProperties.city}</h5>
            <h6 className="card-title">{props.buyProperties.street}<span>, {props.buyProperties.locality}</span></h6>
          {/*<h6 className="card-title">{props.buyProperties.ownerName}<span>, {props.buyProperties.ownerContact}</span></h6>*/}
            <button style={{ fontSize:"1rem"}} onClick={showProperty}>View More..</button>
            {/*<img src={props.buyProperties.image} />*/}
        </div>
    </div>
  )
}

export default BuyCard;